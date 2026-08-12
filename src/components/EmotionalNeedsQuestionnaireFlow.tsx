"use client";

import { useMemo } from "react";
import { QuizFlow } from "@/components/QuizFlow";
import { emotionalNeedsQuestions } from "@/data/emotionalNeedsQuestions";
import { useQuizCompletion } from "@/hooks/useQuizCompletion";
import { calculateEmotionalNeedsResults } from "@/lib/emotionalNeedsScoring";
import { emotionalNeedsStorage } from "@/lib/emotionalNeedsStorage";
import type { EmotionalNeedsResult } from "@/types/emotionalNeeds";

export function EmotionalNeedsQuestionnaireFlow() {
  const storage = useMemo(() => emotionalNeedsStorage, []);
  const onComplete = useQuizCompletion<EmotionalNeedsResult>({
    slug: "necessidades-emocionais",
    getPrimaryLabel: (result) => result.dominantNeed,
  });

  return (
    <QuizFlow
      questions={emotionalNeedsQuestions}
      resultPath="/necessidades-emocionais/resultado"
      calculateResults={calculateEmotionalNeedsResults}
      loadProgress={storage.loadProgress}
      saveProgress={storage.saveProgress}
      clearProgress={storage.clearProgress}
      saveResult={storage.saveResult}
      onComplete={onComplete}
    />
  );
}
