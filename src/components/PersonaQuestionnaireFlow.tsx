"use client";

import { useMemo } from "react";
import { QuizFlow } from "@/components/QuizFlow";
import { personaQuestions } from "@/data/personaQuestions";
import { useQuizCompletion } from "@/hooks/useQuizCompletion";
import { calculatePersonaResults } from "@/lib/personaScoring";
import { personaStorage } from "@/lib/personaStorage";
import type { PersonaResult } from "@/types/persona";

export function PersonaQuestionnaireFlow() {
  const storage = useMemo(() => personaStorage, []);
  const onComplete = useQuizCompletion<PersonaResult>({
    slug: "persona",
    getPrimaryLabel: (result) => result.dominantPersona,
  });

  return (
    <QuizFlow
      questions={personaQuestions}
      resultPath="/persona/resultado"
      calculateResults={calculatePersonaResults}
      loadProgress={storage.loadProgress}
      saveProgress={storage.saveProgress}
      clearProgress={storage.clearProgress}
      saveResult={storage.saveResult}
      onComplete={onComplete}
    />
  );
}
