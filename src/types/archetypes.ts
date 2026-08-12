export type ArchetypeCode =
  | "IN"
  | "EX"
  | "SA"
  | "HE"
  | "RE"
  | "MA"
  | "PC"
  | "AM"
  | "BO"
  | "CU"
  | "CR"
  | "GO";

export type Archetype = {
  code: ArchetypeCode;
  name: string;
  title: string;
  keywords: string[];
  motivation: string;
  fear: string;
  description: string;
  light: string;
  shadow: string;
  resultIntro: string;
  complementaryNote: string;
};

export type ScoreMap = Partial<Record<ArchetypeCode, number>>;

export type ArchetypeScore = {
  code: ArchetypeCode;
  rawScore: number;
  maxScore: number;
  percentage: number;
};

export type DimensionKey = "motivation" | "fear" | "behavior" | "integration";

export type QuestionnaireResult = {
  ranked: ArchetypeScore[];
  primary: ArchetypeScore;
  complementary: ArchetypeScore[];
  byDimension: Partial<Record<DimensionKey, ArchetypeScore>>;
  calculatedAt: string;
};
