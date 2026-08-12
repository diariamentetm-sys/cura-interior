import { createQuizStorage } from "@/lib/quizStorage";
import type { InternalConflictsResult } from "@/types/internalConflicts";

export const internalConflictsStorage =
  createQuizStorage<InternalConflictsResult>("internal-conflicts");
