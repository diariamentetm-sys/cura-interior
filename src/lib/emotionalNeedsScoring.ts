import {
  NEED_FAMILIES,
  POSSIBLE_BALANCES,
  buildNeedRelationshipNote,
  emotionalNeeds,
} from "@/data/emotionalNeeds";
import { emotionalNeedsQuestions } from "@/data/emotionalNeedsQuestions";
import type { AnswerSelection } from "@/types/questionnaire";
import type {
  EmotionalNeedCode,
  EmotionalNeedScore,
  EmotionalNeedScoreMap,
  EmotionalNeedsResult,
  NeedBalance,
  NeedFamilyId,
  NeedFamilyResult,
} from "@/types/emotionalNeeds";

const NEED_CODES = Object.keys(emotionalNeeds) as EmotionalNeedCode[];

function clampPercentage(value: number): number {
  if (Number.isNaN(value) || !Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

function createEmptyScoreMap(): Record<EmotionalNeedCode, number> {
  return NEED_CODES.reduce(
    (acc, code) => {
      acc[code] = 0;
      return acc;
    },
    {} as Record<EmotionalNeedCode, number>,
  );
}

export function getEmotionalNeedMaxScores(
  questionList = emotionalNeedsQuestions,
): Record<EmotionalNeedCode, number> {
  const maxScores = createEmptyScoreMap();

  for (const question of questionList) {
    const questionMax = createEmptyScoreMap();

    for (const answer of question.answers) {
      for (const code of NEED_CODES) {
        const points = answer.score[code] ?? 0;
        if (points > questionMax[code]) {
          questionMax[code] = points;
        }
      }
    }

    for (const code of NEED_CODES) {
      maxScores[code] += questionMax[code];
    }
  }

  return maxScores;
}

export function accumulateEmotionalNeedScores(
  answers: AnswerSelection[],
): EmotionalNeedScoreMap {
  const totals = createEmptyScoreMap();

  for (const selection of answers) {
    const question = emotionalNeedsQuestions.find(
      (item) => item.id === selection.questionId,
    );
    const answer = question?.answers.find(
      (item) => item.id === selection.answerId,
    );

    if (!answer) continue;

    for (const [code, points] of Object.entries(answer.score) as [
      EmotionalNeedCode,
      number,
    ][]) {
      totals[code] += points;
    }
  }

  return totals;
}

function toRankedScores(
  rawScores: EmotionalNeedScoreMap,
  maxScores: Record<EmotionalNeedCode, number>,
): EmotionalNeedScore[] {
  return NEED_CODES.map((code) => {
    const rawScore = rawScores[code] ?? 0;
    const maxScore = maxScores[code] || 1;
    const percentage = clampPercentage((rawScore / maxScore) * 100);

    return {
      code,
      rawScore,
      maxScore,
      percentage: Math.round(percentage),
    };
  }).sort((a, b) => {
    if (b.percentage !== a.percentage) return b.percentage - a.percentage;
    if (b.rawScore !== a.rawScore) return b.rawScore - a.rawScore;
    return a.code.localeCompare(b.code);
  });
}

export function calculateNeedFamilies(
  normalizedScores: Record<EmotionalNeedCode, number>,
): NeedFamilyResult[] {
  const familyIds = Object.keys(NEED_FAMILIES) as NeedFamilyId[];

  return familyIds
    .map((id) => {
      const family = NEED_FAMILIES[id];
      const average =
        family.codes.reduce(
          (sum, code) => sum + (normalizedScores[code] ?? 0),
          0,
        ) / family.codes.length;

      return {
        id,
        name: family.name,
        average: Math.round(average),
        codes: family.codes,
      };
    })
    .sort((a, b) => b.average - a.average);
}

/**
 * Detecta pares de necessidades em tensão quando ambos estão
 * relativamente altos (ou a diferença entre eles é pequena e ambos relevantes).
 */
export function detectNeedBalances(
  normalizedScores: Record<EmotionalNeedCode, number>,
): NeedBalance[] {
  const HIGH = 55;
  const MAX_DIFF = 20;

  return POSSIBLE_BALANCES.filter((pair) => {
    const left = normalizedScores[pair.left] ?? 0;
    const right = normalizedScores[pair.right] ?? 0;
    const bothRelevant = left >= HIGH && right >= HIGH;
    const closeAndPresent =
      Math.abs(left - right) <= MAX_DIFF && left >= 45 && right >= 45;

    return bothRelevant || closeAndPresent;
  }).slice(0, 2);
}

export function calculateEmotionalNeedsResults(
  answers: AnswerSelection[],
): EmotionalNeedsResult {
  const scoresMap = accumulateEmotionalNeedScores(answers);
  const maxScores = getEmotionalNeedMaxScores();
  const ranked = toRankedScores(scoresMap, maxScores);

  const scores = createEmptyScoreMap();
  const normalizedScores = createEmptyScoreMap();

  for (const item of ranked) {
    scores[item.code] = item.rawScore;
    normalizedScores[item.code] = item.percentage;
  }

  const primary = ranked[0];
  const complementary = ranked.slice(1, 3);
  const families = calculateNeedFamilies(normalizedScores);
  const balances = detectNeedBalances(normalizedScores);

  return {
    questionnaire: "emotional-needs",
    completedAt: new Date().toISOString(),
    answers,
    scores,
    normalizedScores,
    dominantNeed: primary.code,
    complementaryNeeds: complementary.map((item) => item.code),
    dominantFamily: families[0]?.id ?? "vinculo",
    ranked,
    primary,
    complementary,
    families,
    balances,
    relationshipNote: buildNeedRelationshipNote([
      primary.code,
      ...complementary.map((item) => item.code),
    ]),
  };
}
