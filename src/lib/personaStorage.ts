import { createQuizStorage } from "@/lib/quizStorage";
import type { PersonaResult } from "@/types/persona";

export const personaStorage = createQuizStorage<PersonaResult>("persona");
