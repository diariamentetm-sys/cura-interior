import {
  CONFLICT_ORDER,
  CONFLICT_POLES,
  POLE_ORDER,
  buildConflictRelationshipNote,
  getInternalConflict,
  internalConflicts,
} from "@/data/internalConflicts";
import { internalConflictQuestions } from "@/data/internalConflictQuestions";
import type { AnswerSelection } from "@/types/questionnaire";
import type {
  ConflictCode,
  ConflictPoleCode,
  ConflictPoleScoreMap,
  ConflictScore,
  ConflictType,
  InternalConflictsResult,
  PoleScore,
} from "@/types/internalConflicts";

function clampPercentage(value: number): number {
  if (Number.isNaN(value) || !Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

function createEmptyPoleMap(): Record<ConflictPoleCode, number> {
  return POLE_ORDER.reduce(
    (acc, code) => {
      acc[code] = 0;
      return acc;
    },
    {} as Record<ConflictPoleCode, number>,
  );
}

export function getPoleMaxScores(
  questionList = internalConflictQuestions,
): Record<ConflictPoleCode, number> {
  const maxScores = createEmptyPoleMap();

  for (const question of questionList) {
    const questionMax = createEmptyPoleMap();

    for (const answer of question.answers) {
      for (const code of POLE_ORDER) {
        const points = answer.score[code] ?? 0;
        if (points > questionMax[code]) {
          questionMax[code] = points;
        }
      }
    }

    for (const code of POLE_ORDER) {
      maxScores[code] += questionMax[code];
    }
  }

  return maxScores;
}

export function accumulatePoleScores(
  answers: AnswerSelection[],
): ConflictPoleScoreMap {
  const totals = createEmptyPoleMap();

  for (const selection of answers) {
    const question = internalConflictQuestions.find(
      (item) => item.id === selection.questionId,
    );
    const answer = question?.answers.find(
      (item) => item.id === selection.answerId,
    );

    if (!answer) continue;

    for (const [code, points] of Object.entries(answer.score) as [
      ConflictPoleCode,
      number,
    ][]) {
      totals[code] += points;
    }
  }

  return totals;
}

function toPoleScore(
  code: ConflictPoleCode,
  rawScores: ConflictPoleScoreMap,
  maxScores: Record<ConflictPoleCode, number>,
): PoleScore {
  const rawScore = rawScores[code] ?? 0;
  const maxScore = maxScores[code] || 1;
  return {
    code,
    rawScore,
    maxScore,
    percentage: Math.round(clampPercentage((rawScore / maxScore) * 100)),
  };
}

/**
 * Intensidade do conflito interno
 *
 * Um conflito é mais relevante quando os dois polos têm pontuação significativa.
 * Fórmula base:
 *   intensity = min(poleA%, poleB%)
 *
 * Assim:
 * - Liberdade 84% + Segurança 78% → intensidade 78% (tensão elevada)
 * - Liberdade 84% + Segurança 23% → intensidade 23% (menos conflito: um lado domina)
 *
 * Também calculamos:
 *   difference = |poleA% - poleB%|
 *
 * Tipos:
 * - elevated: ambos >= 65 e diferença <= 20
 * - balanced: ambos >= 45 e diferença <= 15 (sem chegar a elevated)
 * - asymmetric: caso contrário (um polo claramente mais forte)
 *
 * Os limiares podem ser ajustados futuramente sem alterar a UI.
 */
export function calculateConflictIntensity(
  poleAPercentage: number,
  poleBPercentage: number,
): number {
  return Math.round(Math.min(poleAPercentage, poleBPercentage));
}

export function getConflictType(
  poleAPercentage: number,
  poleBPercentage: number,
): ConflictType {
  const difference = Math.abs(poleAPercentage - poleBPercentage);
  const bothHigh = poleAPercentage >= 65 && poleBPercentage >= 65;

  if (bothHigh && difference <= 20) return "elevated";
  if (
    poleAPercentage >= 45 &&
    poleBPercentage >= 45 &&
    difference <= 15
  ) {
    return "balanced";
  }
  return "asymmetric";
}

export function buildConflictScores(
  rawScores: ConflictPoleScoreMap,
  maxScores: Record<ConflictPoleCode, number>,
): ConflictScore[] {
  return CONFLICT_ORDER.map((code) => {
    const conflict = internalConflicts[code];
    const poles = CONFLICT_POLES[code];
    const poleA = toPoleScore(poles.poleA, rawScores, maxScores);
    const poleB = toPoleScore(poles.poleB, rawScores, maxScores);
    const intensity = calculateConflictIntensity(
      poleA.percentage,
      poleB.percentage,
    );
    const difference = Math.abs(poleA.percentage - poleB.percentage);

    return {
      code,
      name: conflict.name,
      poleA,
      poleB,
      intensity,
      difference,
      type: getConflictType(poleA.percentage, poleB.percentage),
    };
  }).sort((a, b) => {
    if (b.intensity !== a.intensity) return b.intensity - a.intensity;
    if (a.difference !== b.difference) return a.difference - b.difference;
    const aSum = a.poleA.percentage + a.poleB.percentage;
    const bSum = b.poleA.percentage + b.poleB.percentage;
    if (bSum !== aSum) return bSum - aSum;
    return a.code.localeCompare(b.code);
  });
}

export function calculateInternalConflictResults(
  answers: AnswerSelection[],
): InternalConflictsResult {
  const poleScoresMap = accumulatePoleScores(answers);
  const maxScores = getPoleMaxScores();
  const ranked = buildConflictScores(poleScoresMap, maxScores);

  const poleScores = createEmptyPoleMap();
  const normalizedPoleScores = createEmptyPoleMap();

  for (const code of POLE_ORDER) {
    const score = toPoleScore(code, poleScoresMap, maxScores);
    poleScores[code] = score.rawScore;
    normalizedPoleScores[code] = score.percentage;
  }

  const conflictScores = CONFLICT_ORDER.reduce(
    (acc, code) => {
      const match = ranked.find((item) => item.code === code);
      acc[code] = match?.intensity ?? 0;
      return acc;
    },
    {} as Record<ConflictCode, number>,
  );

  const primary = ranked[0];
  const complementary = ranked.slice(1, 3);

  return {
    questionnaire: "internal-conflicts",
    completedAt: new Date().toISOString(),
    answers,
    poleScores,
    normalizedPoleScores,
    conflictScores,
    dominantConflict: primary.code,
    complementaryConflicts: complementary.map((item) => item.code),
    dominantConflictType: primary.type,
    ranked,
    primary,
    complementary,
    relationshipNote: buildConflictRelationshipNote([
      primary.code,
      ...complementary.map((item) => item.code),
    ]),
  };
}

export function getConflictTypeLabel(type: ConflictType): string {
  switch (type) {
    case "elevated":
      return "Tensão elevada";
    case "balanced":
      return "Equilibrado";
    case "asymmetric":
      return "Assimétrico";
  }
}

export function getConflictTypeDescription(
  type: ConflictType,
  conflictCode: ConflictCode,
): string {
  const conflict = getInternalConflict(conflictCode);
  switch (type) {
    case "elevated":
      return `Os dois polos — ${conflict.poleA.name.toLowerCase()} e ${conflict.poleB.name.toLowerCase()} — aparecem fortes ao mesmo tempo. Essa coexistência costuma gerar a sensação de divisão interna.`;
    case "balanced":
      return `Os dois polos aparecem em intensidade semelhante. Há tensão, mas nenhum lado parece ocupar todo o espaço.`;
    case "asymmetric":
      return `Um dos polos aparece com mais força. Ainda pode haver conflito, mas um lado tende a conduzir mais as escolhas.`;
  }
}
