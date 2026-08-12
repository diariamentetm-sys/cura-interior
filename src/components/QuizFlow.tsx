"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/Button";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import {
  getSelectedAnswerId,
  upsertAnswer,
} from "@/lib/quizStorage";
import type { QuizQuestion } from "@/types/quiz";
import type {
  AnswerSelection,
  QuestionnaireProgress,
} from "@/types/questionnaire";

type QuizFlowProps<TResult> = {
  questions: QuizQuestion[];
  resultPath: string;
  calculateResults: (answers: AnswerSelection[]) => TResult;
  loadProgress: () => QuestionnaireProgress | null;
  saveProgress: (progress: QuestionnaireProgress) => void;
  clearProgress: () => void;
  saveResult: (result: TResult) => void;
  onComplete?: (result: TResult) => void | Promise<void>;
};

export function QuizFlow<TResult>({
  questions,
  resultPath,
  calculateResults,
  loadProgress,
  saveProgress,
  clearProgress,
  saveResult,
  onComplete,
}: QuizFlowProps<TResult>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [hydrated, setHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerSelection[]>([]);
  const [direction, setDirection] = useState(1);

  const total = questions.length;

  useEffect(() => {
    const saved = loadProgress();
    if (saved) {
      setCurrentIndex(Math.min(Math.max(saved.currentIndex, 0), total - 1));
      setAnswers(saved.answers);
    }
    setHydrated(true);
  }, [loadProgress, total]);

  useEffect(() => {
    if (!hydrated) return;
    saveProgress({
      currentIndex,
      answers,
      updatedAt: new Date().toISOString(),
    });
  }, [answers, currentIndex, hydrated, saveProgress]);

  const question = questions[currentIndex];
  const selectedAnswerId = question
    ? getSelectedAnswerId(answers, question.id)
    : null;
  const isLast = currentIndex === total - 1;

  function handleSelect(answerId: string) {
    if (!question) return;
    setAnswers((prev) => upsertAnswer(prev, question.id, answerId));
  }

  function handleBack() {
    if (currentIndex === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => prev - 1);
  }

  async function handleContinue() {
    if (!selectedAnswerId || !question) return;

    if (!isLast) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    const finalAnswers = upsertAnswer(answers, question.id, selectedAnswerId);
    const result = calculateResults(finalAnswers);
    saveResult(result);
    clearProgress();

    try {
      await onComplete?.(result);
    } catch {
      // Completion side-effects should not block navigation.
    }

    startTransition(() => {
      router.push(resultPath);
    });
  }

  if (!hydrated || !question) {
    return (
      <div className="py-20 text-center text-ink-muted" aria-live="polite">
        Preparando o questionário...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ProgressBar current={currentIndex + 1} total={total} />

      <QuestionCard
        question={question}
        selectedAnswerId={selectedAnswerId}
        onSelect={handleSelect}
        animationKey={currentIndex * direction}
      />

      <div className="flex items-center justify-between gap-3 pt-2">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="px-3"
        >
          Voltar
        </Button>
        <Button
          onClick={() => void handleContinue()}
          disabled={!selectedAnswerId || isPending}
        >
          {isLast
            ? isPending
              ? "Calculando..."
              : "Ver resultado"
            : "Continuar"}
        </Button>
      </div>
    </div>
  );
}
