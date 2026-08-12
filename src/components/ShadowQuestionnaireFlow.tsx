"use client";

import { useMemo } from "react";
import { QuizFlow } from "@/components/QuizFlow";
import { shadowQuestions } from "@/data/shadowQuestions";
import { useQuizCompletion } from "@/hooks/useQuizCompletion";
import { calculateShadowResults } from "@/lib/shadowScoring";
import { shadowStorage } from "@/lib/shadowStorage";
import type { ShadowResult } from "@/types/shadow";

export function ShadowQuestionnaireFlow() {
  const storage = useMemo(() => shadowStorage, []);
  const onComplete = useQuizCompletion<ShadowResult>({
    slug: "sombra",
    getPrimaryLabel: (result) => result.primary?.code,
  });

  return (
    <QuizFlow
      questions={shadowQuestions}
      resultPath="/sombra/resultado"
      calculateResults={calculateShadowResults}
      loadProgress={storage.loadProgress}
      saveProgress={storage.saveProgress}
      clearProgress={storage.clearProgress}
      saveResult={storage.saveResult}
      onComplete={onComplete}
    />
  );
}
