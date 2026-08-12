import { createQuizStorage } from "@/lib/quizStorage";
import type { EmotionalNeedsResult } from "@/types/emotionalNeeds";

export const emotionalNeedsStorage =
  createQuizStorage<EmotionalNeedsResult>("emotional-needs");
