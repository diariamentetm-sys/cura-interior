import type { AnswerSelection } from "@/types/questionnaire";

export type PersonaCode =
  | "PE"
  | "FO"
  | "AG"
  | "IN"
  | "CO"
  | "AD"
  | "EX"
  | "RE"
  | "PR"
  | "AU";

export type PersonaScoreMap = Partial<Record<PersonaCode, number>>;

export type PersonaDimension = {
  code: PersonaCode;
  name: string;
  socialMessage: string;
  description: string;
  whatOthersSee: string[];
  whatMayStayHidden: string[];
  underlyingNeed: string;
  whenItBecomesRigid: string;
  integrationPath: string;
  reflectionQuestions: string[];
  shownTraits: string[];
  hiddenTraits: string[];
};

export type PersonaAnswer = {
  id: string;
  text: string;
  score: PersonaScoreMap;
};

export type PersonaQuestion = {
  id: number;
  text: string;
  answers: PersonaAnswer[];
};

export type PersonaScore = {
  code: PersonaCode;
  rawScore: number;
  maxScore: number;
  percentage: number;
};

export type PersonaIndexBand =
  | "flexible"
  | "adaptive"
  | "present"
  | "dominant";

export type PersonaIndexInfo = {
  value: number;
  band: PersonaIndexBand;
  label: string;
  description: string;
};

export type PersonaResult = {
  questionnaire: "persona";
  completedAt: string;
  answers: AnswerSelection[];
  scores: Record<PersonaCode, number>;
  normalizedScores: Record<PersonaCode, number>;
  personaIdentificationIndex: number;
  dominantPersona: PersonaCode;
  complementaryPersonas: PersonaCode[];
  ranked: PersonaScore[];
  primary: PersonaScore;
  complementary: PersonaScore[];
  index: PersonaIndexInfo;
  relationshipNote: string;
};
