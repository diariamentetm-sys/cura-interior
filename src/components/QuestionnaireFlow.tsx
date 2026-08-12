"use client";

import { useMemo } from "react";
import { QuizFlow } from "@/components/QuizFlow";
import { questions } from "@/data/questions";
import { useQuizCompletion } from "@/hooks/useQuizCompletion";
import { calculateResults } from "@/lib/scoring";
import {
  clearProgress,
  loadProgress,
  saveProgress,
  saveResult,
} from "@/lib/storage";
import type { QuestionnaireResult } from "@/types/archetypes";

export function QuestionnaireFlow() {
  const storage = useMemo(
    () => ({
      loadProgress,
      saveProgress,
      clearProgress,
      saveResult,
    }),
    [],
  );

  const onComplete = useQuizCompletion<QuestionnaireResult>({
    slug: "arquetipos",
    getPrimaryLabel: (result) => result.primary?.code,
  });

  return (
    <QuizFlow
      questions={questions}
      resultPath="/arquetipos/resultado"
      calculateResults={calculateResults}
      loadProgress={storage.loadProgress}
      saveProgress={storage.saveProgress}
      clearProgress={storage.clearProgress}
      saveResult={storage.saveResult}
      onComplete={onComplete}
    />
  );
}
