"use client";

import { useMemo } from "react";
import { QuizFlow } from "@/components/QuizFlow";
import { internalConflictQuestions } from "@/data/internalConflictQuestions";
import { useQuizCompletion } from "@/hooks/useQuizCompletion";
import { calculateInternalConflictResults } from "@/lib/internalConflictScoring";
import { internalConflictsStorage } from "@/lib/internalConflictsStorage";
import type { InternalConflictsResult } from "@/types/internalConflicts";

export function InternalConflictsQuestionnaireFlow() {
  const storage = useMemo(() => internalConflictsStorage, []);
  const onComplete = useQuizCompletion<InternalConflictsResult>({
    slug: "conflitos-internos",
    getPrimaryLabel: (result) => result.dominantConflict,
  });

  return (
    <QuizFlow
      questions={internalConflictQuestions}
      resultPath="/conflitos-internos/resultado"
      calculateResults={calculateInternalConflictResults}
      loadProgress={storage.loadProgress}
      saveProgress={storage.saveProgress}
      clearProgress={storage.clearProgress}
      saveResult={storage.saveResult}
      onComplete={onComplete}
    />
  );
}
