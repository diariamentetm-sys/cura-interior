import "server-only";

import {
  CATEGORY_LABELS,
  COGNITIVE_CATEGORIES,
  type CategoryScore,
  type CognitiveAnswerRecord,
  type CognitiveCategory,
  type CognitiveExplanationItem,
  type CognitivePerformanceBand,
  type CognitiveQuestion,
  type CognitiveResult,
} from "@/types/cognitive";
import { buildProfileInsights, buildRecommendations } from "./buildProfileCopy";
import { getQuestionsByIds } from "./questionBank";

function bandForPercentage(percentage: number): CognitivePerformanceBand {
  if (percentage >= 70) return "strong_this_session";
  if (percentage >= 40) return "steady_this_session";
  return "building_this_session";
}

function labelForBand(
  category: CognitiveCategory,
  band: CognitivePerformanceBand,
): string {
  const name = CATEGORY_LABELS[category];
  switch (band) {
    case "strong_this_session":
      return `Bom desempenho nesta sessão em ${name.toLowerCase()}.`;
    case "steady_this_session":
      return `Desempenho estável nesta sessão em ${name.toLowerCase()}.`;
    case "building_this_session":
      return `Espaço para continuar exercitando ${name.toLowerCase()} nesta sessão.`;
  }
}

export function scoreSession(input: {
  sessionId: string;
  assessmentId: string;
  questionIds: string[];
  answers: CognitiveAnswerRecord[];
}): CognitiveResult {
  const questions = getQuestionsByIds(input.questionIds);
  const answerByQuestion = new Map(
    input.answers.map((a) => [a.questionId, a]),
  );

  const scoresByCategory: CategoryScore[] = COGNITIVE_CATEGORIES.map(
    (category) => {
      const inCat = questions.filter((q) => q.category === category);
      let correct = 0;
      let answered = 0;

      for (const q of inCat) {
        const ans = answerByQuestion.get(q.id);
        if (ans?.selectedOptionId) {
          answered += 1;
          if (ans.selectedOptionId === q.correctOptionId) correct += 1;
        }
      }

      const total = inCat.length;
      const percentage =
        total === 0 ? 0 : Math.round((correct / total) * 100);
      const band = bandForPercentage(percentage);

      return {
        category,
        correct,
        answered,
        total,
        percentage,
        band,
        label: labelForBand(category, band),
      };
    },
  );

  let correctCount = 0;
  let answeredCount = 0;
  const explanations: CognitiveExplanationItem[] = [];

  for (const q of questions) {
    const ans = answerByQuestion.get(q.id);
    const selected = ans?.selectedOptionId ?? null;
    const isAnswered = Boolean(selected);
    const isCorrect = selected === q.correctOptionId;
    if (isAnswered) answeredCount += 1;
    if (isCorrect) correctCount += 1;

    explanations.push({
      questionId: q.id,
      category: q.category,
      prompt: q.prompt,
      selectedOptionId: selected,
      correctOptionId: q.correctOptionId,
      isCorrect,
      explanation: q.explanation,
      options: q.options,
    });
  }

  const completedAt = new Date().toISOString();

  return {
    sessionId: input.sessionId,
    assessmentId: input.assessmentId,
    completedAt,
    totalQuestions: questions.length,
    answeredCount,
    correctCount,
    scoresByCategory,
    insights: buildProfileInsights(scoresByCategory, input.answers, questions),
    explanations,
    recommendations: buildRecommendations(scoresByCategory),
  };
}

/** Future hook for IRT / calibrated models — unused in V1. */
export interface PsychometricModel {
  estimate?(
    questions: CognitiveQuestion[],
    answers: CognitiveAnswerRecord[],
  ): Record<string, number>;
}
