import { createQuizStorage } from "@/lib/quizStorage";
import type { ShadowResult } from "@/types/shadow";

export const shadowStorage = createQuizStorage<ShadowResult>("shadow");
