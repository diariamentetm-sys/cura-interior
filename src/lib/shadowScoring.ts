import {
  buildRelationshipNote,
  shadowDimensions,
} from "@/data/shadowDimensions";
import { shadowQuestions } from "@/data/shadowQuestions";
import type { AnswerSelection } from "@/types/questionnaire";
import type {
  ShadowCode,
  ShadowResult,
  ShadowScore,
  ShadowScoreMap,
} from "@/types/shadow";

const SHADOW_CODES = Object.keys(shadowDimensions) as ShadowCode[];

function clampPercentage(value: number): number {
  if (Number.isNaN(value) || !Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

function createEmptyScoreMap(): Record<ShadowCode, number> {
  return SHADOW_CODES.reduce(
    (acc, code) => {
      acc[code] = 0;
      return acc;
    },
    {} as Record<ShadowCode, number>,
  );
}

export function getShadowMaxScores(
  questionList = shadowQuestions,
): Record<ShadowCode, number> {
  const maxScores = createEmptyScoreMap();

  for (const question of questionList) {
    const questionMax = createEmptyScoreMap();

    for (const answer of question.answers) {
      for (const code of SHADOW_CODES) {
        const points = answer.score[code] ?? 0;
        if (points > questionMax[code]) {
          questionMax[code] = points;
        }
      }
    }

    for (const code of SHADOW_CODES) {
      maxScores[code] += questionMax[code];
    }
  }

  return maxScores;
}

export function accumulateShadowScores(
  answers: AnswerSelection[],
): ShadowScoreMap {
  const totals = createEmptyScoreMap();

  for (const selection of answers) {
    const question = shadowQuestions.find(
      (item) => item.id === selection.questionId,
    );
    const answer = question?.answers.find(
      (item) => item.id === selection.answerId,
    );

    if (!answer) continue;

    for (const [code, points] of Object.entries(answer.score) as [
      ShadowCode,
      number,
    ][]) {
      totals[code] += points;
    }
  }

  return totals;
}

function toRankedScores(
  rawScores: ShadowScoreMap,
  maxScores: Record<ShadowCode, number>,
): ShadowScore[] {
  return SHADOW_CODES.map((code) => {
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

export function calculateShadowResults(
  answers: AnswerSelection[],
): ShadowResult {
  const rawScores = accumulateShadowScores(answers);
  const maxScores = getShadowMaxScores();
  const ranked = toRankedScores(rawScores, maxScores);
  const primary = ranked[0];
  const secondary = ranked.slice(1, 3);
  const relationshipNote = buildRelationshipNote([
    primary.code,
    ...secondary.map((item) => item.code),
  ]);

  return {
    ranked,
    primary,
    secondary,
    relationshipNote,
    calculatedAt: new Date().toISOString(),
  };
}
