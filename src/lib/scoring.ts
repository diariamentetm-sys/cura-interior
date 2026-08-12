import { archetypes } from "@/data/archetypes";
import { questions } from "@/data/questions";
import type {
  ArchetypeCode,
  ArchetypeScore,
  DimensionKey,
  QuestionnaireResult,
  ScoreMap,
} from "@/types/archetypes";
import type { AnswerSelection } from "@/types/questionnaire";

const ARCHETYPE_CODES = Object.keys(archetypes) as ArchetypeCode[];

function clampPercentage(value: number): number {
  if (Number.isNaN(value) || !Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

function createEmptyScoreMap(): Record<ArchetypeCode, number> {
  return ARCHETYPE_CODES.reduce(
    (acc, code) => {
      acc[code] = 0;
      return acc;
    },
    {} as Record<ArchetypeCode, number>,
  );
}

export function getMaxScores(
  questionList = questions,
): Record<ArchetypeCode, number> {
  const maxScores = createEmptyScoreMap();

  for (const question of questionList) {
    const questionMax = createEmptyScoreMap();

    for (const answer of question.answers) {
      for (const code of ARCHETYPE_CODES) {
        const points = answer.score[code] ?? 0;
        if (points > questionMax[code]) {
          questionMax[code] = points;
        }
      }
    }

    for (const code of ARCHETYPE_CODES) {
      maxScores[code] += questionMax[code];
    }
  }

  return maxScores;
}

export function accumulateScores(answers: AnswerSelection[]): ScoreMap {
  const totals = createEmptyScoreMap();

  for (const selection of answers) {
    const question = questions.find((item) => item.id === selection.questionId);
    const answer = question?.answers.find(
      (item) => item.id === selection.answerId,
    );

    if (!answer) continue;

    for (const [code, points] of Object.entries(answer.score) as [
      ArchetypeCode,
      number,
    ][]) {
      totals[code] += points;
    }
  }

  return totals;
}

function toRankedScores(
  rawScores: ScoreMap,
  maxScores: Record<ArchetypeCode, number>,
): ArchetypeScore[] {
  return ARCHETYPE_CODES.map((code) => {
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

export function calculateDimensionLeaders(
  answers: AnswerSelection[],
): Partial<Record<DimensionKey, ArchetypeScore>> {
  const dimensions: DimensionKey[] = [
    "motivation",
    "fear",
    "behavior",
    "integration",
  ];

  const result: Partial<Record<DimensionKey, ArchetypeScore>> = {};

  for (const dimension of dimensions) {
    const dimensionQuestions = questions.filter(
      (question) => question.dimension === dimension,
    );
    const dimensionAnswers = answers.filter((answer) =>
      dimensionQuestions.some((question) => question.id === answer.questionId),
    );

    if (dimensionAnswers.length === 0) continue;

    const rawScores = accumulateScores(dimensionAnswers);
    const maxScores = getMaxScores(dimensionQuestions);
    const ranked = toRankedScores(rawScores, maxScores);

    if (ranked[0]) {
      result[dimension] = ranked[0];
    }
  }

  return result;
}

export function calculateResults(
  answers: AnswerSelection[],
): QuestionnaireResult {
  const rawScores = accumulateScores(answers);
  const maxScores = getMaxScores();
  const ranked = toRankedScores(rawScores, maxScores);

  const primary = ranked[0];
  const complementary = ranked.slice(1, 3);
  const byDimension = calculateDimensionLeaders(answers);

  return {
    ranked,
    primary,
    complementary,
    byDimension,
    calculatedAt: new Date().toISOString(),
  };
}
