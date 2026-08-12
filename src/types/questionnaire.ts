import type { ArchetypeCode, ScoreMap } from "./archetypes";

export type QuestionDimension =
  | "motivation"
  | "fear"
  | "behavior"
  | "integration";

export type Answer = {
  id: string;
  text: string;
  score: ScoreMap;
};

export type Question = {
  id: number;
  text: string;
  dimension: QuestionDimension;
  answers: Answer[];
};

export type AnswerSelection = {
  questionId: number;
  answerId: string;
};

export type QuestionnaireProgress = {
  currentIndex: number;
  answers: AnswerSelection[];
  updatedAt: string;
};

export type { ArchetypeCode, ScoreMap };
