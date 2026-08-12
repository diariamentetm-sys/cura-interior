import {
  ROLE_PERSONA_CODES,
  buildPersonaRelationshipNote,
  getPersonaIndexBand,
  personaDimensions,
  PERSONA_INDEX_BANDS,
} from "@/data/personaDimensions";
import { personaQuestions } from "@/data/personaQuestions";
import type { AnswerSelection } from "@/types/questionnaire";
import type {
  PersonaCode,
  PersonaIndexInfo,
  PersonaResult,
  PersonaScore,
  PersonaScoreMap,
} from "@/types/persona";

const PERSONA_CODES = Object.keys(personaDimensions) as PersonaCode[];

function clampPercentage(value: number): number {
  if (Number.isNaN(value) || !Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

function createEmptyScoreMap(): Record<PersonaCode, number> {
  return PERSONA_CODES.reduce(
    (acc, code) => {
      acc[code] = 0;
      return acc;
    },
    {} as Record<PersonaCode, number>,
  );
}

export function getPersonaMaxScores(
  questionList = personaQuestions,
): Record<PersonaCode, number> {
  const maxScores = createEmptyScoreMap();

  for (const question of questionList) {
    const questionMax = createEmptyScoreMap();

    for (const answer of question.answers) {
      for (const code of PERSONA_CODES) {
        const points = answer.score[code] ?? 0;
        if (points > questionMax[code]) {
          questionMax[code] = points;
        }
      }
    }

    for (const code of PERSONA_CODES) {
      maxScores[code] += questionMax[code];
    }
  }

  return maxScores;
}

export function accumulatePersonaScores(
  answers: AnswerSelection[],
): PersonaScoreMap {
  const totals = createEmptyScoreMap();

  for (const selection of answers) {
    const question = personaQuestions.find(
      (item) => item.id === selection.questionId,
    );
    const answer = question?.answers.find(
      (item) => item.id === selection.answerId,
    );

    if (!answer) continue;

    for (const [code, points] of Object.entries(answer.score) as [
      PersonaCode,
      number,
    ][]) {
      totals[code] += points;
    }
  }

  return totals;
}

function toRankedScores(
  rawScores: PersonaScoreMap,
  maxScores: Record<PersonaCode, number>,
): PersonaScore[] {
  return PERSONA_CODES.map((code) => {
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

/**
 * Índice de Identificação com a Persona
 *
 * Objetivo: estimar quanto da identidade apresentada parece condicionada
 * a papéis, expectativas e percepção externa — sem tratar Persona como algo negativo.
 *
 * Passos:
 * 1. Usa as porcentagens normalizadas das 9 dimensões de papel social
 *    (PE, FO, AG, IN, CO, AD, EX, RE, PR).
 * 2. Calcula a média dessas dimensões (roleMean).
 * 3. Usa AU como contraponto de autenticidade/flexibilidade:
 *    quanto maior AU, menor a identificação rígida com a Persona.
 * 4. Fórmula:
 *    authenticityFactor = AU / 100          // 0 a 1
 *    index = roleMean * (1 - 0.45 * authenticityFactor)
 *
 * Interpretação aproximada:
 * - Papéis altos + AU baixa  → índice mais alto (Persona mais dominante)
 * - Papéis moderados + AU alta → índice mais baixo (Persona mais flexível)
 *
 * O fator 0.45 pode ser ajustado futuramente sem alterar a UI.
 */
export function calculatePersonaIdentification(
  normalizedScores: Record<PersonaCode, number>,
): number {
  const roleMean =
    ROLE_PERSONA_CODES.reduce(
      (sum, code) => sum + (normalizedScores[code] ?? 0),
      0,
    ) / ROLE_PERSONA_CODES.length;

  const authenticityFactor = (normalizedScores.AU ?? 0) / 100;
  const index = roleMean * (1 - 0.45 * authenticityFactor);

  return Math.round(clampPercentage(index));
}

export function getPersonaIndexInfo(value: number): PersonaIndexInfo {
  const band = getPersonaIndexBand(value);
  const meta = PERSONA_INDEX_BANDS[band];

  return {
    value,
    band,
    label: meta.label,
    description: meta.description,
  };
}

export function calculatePersonaResults(
  answers: AnswerSelection[],
): PersonaResult {
  const scoresMap = accumulatePersonaScores(answers);
  const maxScores = getPersonaMaxScores();
  const ranked = toRankedScores(scoresMap, maxScores);

  const scores = createEmptyScoreMap();
  const normalizedScores = createEmptyScoreMap();

  for (const item of ranked) {
    scores[item.code] = item.rawScore;
    normalizedScores[item.code] = item.percentage;
  }

  const primary = ranked[0];
  const complementary = ranked.slice(1, 3);
  const personaIdentificationIndex =
    calculatePersonaIdentification(normalizedScores);

  return {
    questionnaire: "persona",
    completedAt: new Date().toISOString(),
    answers,
    scores,
    normalizedScores,
    personaIdentificationIndex,
    dominantPersona: primary.code,
    complementaryPersonas: complementary.map((item) => item.code),
    ranked,
    primary,
    complementary,
    index: getPersonaIndexInfo(personaIdentificationIndex),
    relationshipNote: buildPersonaRelationshipNote([
      primary.code,
      ...complementary.map((item) => item.code),
    ]),
  };
}
