import type { AnswerSelection } from "@/types/questionnaire";

export type ConflictCode =
  | "LS"
  | "CE"
  | "PI"
  | "RE"
  | "EM"
  | "RA"
  | "CC"
  | "AR"
  | "PE"
  | "PA";

export type ConflictPoleCode =
  | "LS_FREEDOM"
  | "LS_SECURITY"
  | "CE_CONTROL"
  | "CE_SURRENDER"
  | "PI_BELONGING"
  | "PI_INDIVIDUALITY"
  | "RE_REASON"
  | "RE_EMOTION"
  | "EM_STABILITY"
  | "EM_CHANGE"
  | "RA_RECOGNITION"
  | "RA_AUTHENTICITY"
  | "CC_OTHERS"
  | "CC_SELF"
  | "AR_ACTION"
  | "AR_WITHDRAWAL"
  | "PE_PERFECTION"
  | "PE_SPONTANEITY"
  | "PA_CLOSENESS"
  | "PA_AUTONOMY";

export type ConflictPoleScoreMap = Partial<Record<ConflictPoleCode, number>>;

export type ConflictPole = {
  code: ConflictPoleCode;
  name: string;
  innerMessage: string;
  protects: string[];
  whenDominates: string;
};

export type InternalConflict = {
  code: ConflictCode;
  name: string;
  poleA: ConflictPole;
  poleB: ConflictPole;
  description: string;
  integrationPath: string;
  integrationQuestion: string;
  reflectionQuestions: string[];
  /** Optional bridge for future Emotional Needs cross-reading */
  relatedEmotionalNeeds?: string[];
};

export type InternalConflictAnswer = {
  id: string;
  text: string;
  score: ConflictPoleScoreMap;
};

export type InternalConflictQuestion = {
  id: number;
  text: string;
  answers: InternalConflictAnswer[];
};

export type ConflictType = "asymmetric" | "balanced" | "elevated";

export type PoleScore = {
  code: ConflictPoleCode;
  rawScore: number;
  maxScore: number;
  percentage: number;
};

export type ConflictScore = {
  code: ConflictCode;
  name: string;
  poleA: PoleScore;
  poleB: PoleScore;
  intensity: number;
  difference: number;
  type: ConflictType;
};

export type InternalConflictsResult = {
  questionnaire: "internal-conflicts";
  completedAt: string;
  answers: AnswerSelection[];
  poleScores: Record<ConflictPoleCode, number>;
  normalizedPoleScores: Record<ConflictPoleCode, number>;
  conflictScores: Record<ConflictCode, number>;
  dominantConflict: ConflictCode;
  complementaryConflicts: ConflictCode[];
  dominantConflictType: ConflictType;
  ranked: ConflictScore[];
  primary: ConflictScore;
  complementary: ConflictScore[];
  relationshipNote: string;
};
