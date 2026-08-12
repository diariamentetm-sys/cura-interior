export type ShadowCode =
  | "CO"
  | "VU"
  | "AP"
  | "RA"
  | "CI"
  | "LI"
  | "PE"
  | "RE"
  | "EV"
  | "PR";

export type ShadowScoreMap = Partial<Record<ShadowCode, number>>;

export type ShadowDimension = {
  code: ShadowCode;
  name: string;
  shortName: string;
  description: string;
  resultIntro: string;
  hiddenNeed: string;
  shadowExpression: string[];
  integrationPath: string;
  reflectionQuestions: string[];
};

export type ShadowAnswer = {
  id: string;
  text: string;
  score: ShadowScoreMap;
};

export type ShadowQuestion = {
  id: number;
  text: string;
  answers: ShadowAnswer[];
};

export type ShadowScore = {
  code: ShadowCode;
  rawScore: number;
  maxScore: number;
  percentage: number;
};

export type ShadowResult = {
  ranked: ShadowScore[];
  primary: ShadowScore;
  secondary: ShadowScore[];
  relationshipNote: string;
  calculatedAt: string;
};
