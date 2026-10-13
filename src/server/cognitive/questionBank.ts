import "server-only";

import type { CognitiveQuestion, PublicCognitiveQuestion } from "@/types/cognitive";
import { abstractQuestions } from "./banks/abstractQuestions";
import { deductiveQuestions } from "./banks/deductiveQuestions";
import { numericQuestions } from "./banks/numericQuestions";
import { spatialQuestions } from "./banks/spatialQuestions";
import { verbalQuestions } from "./banks/verbalQuestions";
import { assertValidQuestionBank } from "./validateBank";

export const COGNITIVE_QUESTION_BANK: CognitiveQuestion[] = [
  ...abstractQuestions,
  ...numericQuestions,
  ...spatialQuestions,
  ...verbalQuestions,
  ...deductiveQuestions,
];

assertValidQuestionBank(COGNITIVE_QUESTION_BANK);

const byId = new Map(
  COGNITIVE_QUESTION_BANK.map((question) => [question.id, question]),
);

export function getQuestionById(id: string): CognitiveQuestion | undefined {
  return byId.get(id);
}

export function getQuestionsByIds(ids: string[]): CognitiveQuestion[] {
  return ids
    .map((id) => byId.get(id))
    .filter((q): q is CognitiveQuestion => Boolean(q));
}

export function toPublicQuestion(
  question: CognitiveQuestion,
): PublicCognitiveQuestion {
  const { correctOptionId: _c, explanation: _e, ...pub } = question;
  return pub;
}

export function toPublicQuestions(
  questions: CognitiveQuestion[],
): PublicCognitiveQuestion[] {
  return questions.map(toPublicQuestion);
}
