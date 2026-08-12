import type { AnswerSelection } from "@/types/questionnaire";

export type EmotionalNeedCode =
  | "SE"
  | "RE"
  | "AU"
  | "PE"
  | "CO"
  | "CT"
  | "AC"
  | "ES"
  | "LI"
  | "SI";

export type EmotionalNeedScoreMap = Partial<Record<EmotionalNeedCode, number>>;

export type NeedFamilyId = "vinculo" | "seguranca" | "identidade" | "sentido";

export type EmotionalNeed = {
  code: EmotionalNeedCode;
  name: string;
  family: NeedFamilyId;
  innerMessage: string;
  description: string;
  whatYouSeek: string[];
  whenItFeelsMet: string[];
  whenItFeelsMissing: string[];
  whenItBecomesDominant: string;
  balancePath: string;
  reflectionQuestions: string[];
};

export type EmotionalNeedAnswer = {
  id: string;
  text: string;
  score: EmotionalNeedScoreMap;
};

export type EmotionalNeedQuestion = {
  id: number;
  text: string;
  answers: EmotionalNeedAnswer[];
};

export type EmotionalNeedScore = {
  code: EmotionalNeedCode;
  rawScore: number;
  maxScore: number;
  percentage: number;
};

export type NeedFamilyResult = {
  id: NeedFamilyId;
  name: string;
  average: number;
  codes: EmotionalNeedCode[];
};

export type NeedBalance = {
  id: string;
  title: string;
  left: EmotionalNeedCode;
  right: EmotionalNeedCode;
  description: string;
};

export type EmotionalNeedsResult = {
  questionnaire: "emotional-needs";
  completedAt: string;
  answers: AnswerSelection[];
  scores: Record<EmotionalNeedCode, number>;
  normalizedScores: Record<EmotionalNeedCode, number>;
  dominantNeed: EmotionalNeedCode;
  complementaryNeeds: EmotionalNeedCode[];
  dominantFamily: NeedFamilyId;
  ranked: EmotionalNeedScore[];
  primary: EmotionalNeedScore;
  complementary: EmotionalNeedScore[];
  families: NeedFamilyResult[];
  balances: NeedBalance[];
  relationshipNote: string;
};
