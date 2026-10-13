export const COGNITIVE_CATEGORIES = [
  "abstract",
  "numeric",
  "spatial",
  "verbal",
  "deductive",
] as const;

export type CognitiveCategory = (typeof COGNITIVE_CATEGORIES)[number];

export const COGNITIVE_DIFFICULTIES = [
  "easy",
  "intermediate",
  "advanced",
] as const;

export type CognitiveDifficulty = (typeof COGNITIVE_DIFFICULTIES)[number];

export type CognitiveInteractionType =
  | "single_choice"
  | "figure_choice"
  | "matrix_choice";

export type CognitiveOption = {
  id: string;
  label: string;
  /** Optional SVG markup or public asset path for figure options */
  figureId?: string;
};

export type CognitiveQuestionMedia = {
  kind: "svg" | "none";
  /** Inline SVG id key resolved by the UI registry */
  figureId?: string;
  alt?: string;
};

/** Full question including answer key — server only */
export type CognitiveQuestion = {
  id: string;
  category: CognitiveCategory;
  difficulty: CognitiveDifficulty;
  prompt: string;
  interactionType: CognitiveInteractionType;
  options: CognitiveOption[];
  correctOptionId: string;
  explanation: string;
  suggestedSeconds: number;
  skillTags: string[];
  version: string;
  media?: CognitiveQuestionMedia;
};

/** Client-safe question payload */
export type PublicCognitiveQuestion = Omit<
  CognitiveQuestion,
  "correctOptionId" | "explanation"
>;

export type CognitiveSessionStatus =
  | "in_progress"
  | "completed"
  | "abandoned";

export type CognitiveAnswerRecord = {
  questionId: string;
  selectedOptionId: string | null;
  timeSpentMs: number;
  answeredAt: string;
};

export type CognitiveSession = {
  id: string;
  assessmentId: string;
  assessmentVersion: string;
  questionIds: string[];
  status: CognitiveSessionStatus;
  currentIndex: number;
  startedAt: string;
  updatedAt: string;
  answers: CognitiveAnswerRecord[];
  /** Anonymous device key for local resume */
  clientKey?: string;
};

export type CategoryScore = {
  category: CognitiveCategory;
  correct: number;
  answered: number;
  total: number;
  percentage: number;
  band: CognitivePerformanceBand;
  label: string;
};

export type CognitivePerformanceBand =
  | "strong_this_session"
  | "steady_this_session"
  | "building_this_session";

export type CognitiveProfileInsight = {
  id: string;
  text: string;
};

export type CognitiveExplanationItem = {
  questionId: string;
  category: CognitiveCategory;
  prompt: string;
  selectedOptionId: string | null;
  correctOptionId: string;
  isCorrect: boolean;
  explanation: string;
  options: CognitiveOption[];
};

export type CognitiveResult = {
  sessionId: string;
  assessmentId: string;
  completedAt: string;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  scoresByCategory: CategoryScore[];
  insights: CognitiveProfileInsight[];
  explanations: CognitiveExplanationItem[];
  recommendations: string[];
};

export type CognitiveExplorationState = {
  status: "unexplored" | "discovering" | "known";
  lastSessionId?: string;
  lastCompletedAt?: string;
  lastCorrectCount?: number;
  lastTotalQuestions?: number;
  lastCategorySummary?: Partial<Record<CognitiveCategory, number>>;
};

export const CATEGORY_LABELS: Record<CognitiveCategory, string> = {
  abstract: "Raciocínio abstrato",
  numeric: "Raciocínio numérico",
  spatial: "Raciocínio espacial",
  verbal: "Raciocínio verbal",
  deductive: "Raciocínio dedutivo",
};

export const ASSESSMENT_MAIN_ID = "cognitive-main-v1";
export const ASSESSMENT_VERSION = "1.0.0";
export const QUESTIONS_PER_CATEGORY = 6;
export const TOTAL_MAIN_QUESTIONS =
  COGNITIVE_CATEGORIES.length * QUESTIONS_PER_CATEGORY;
