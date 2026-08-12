import type {
  AnswerSelection,
  QuestionnaireProgress,
} from "@/types/questionnaire";

function canUseStorage(): boolean {
  return (
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
  );
}

export function createQuizStorage<TResult>(namespace: string) {
  const progressKey = `cura-interior:${namespace}:progress`;
  const resultKey = `cura-interior:${namespace}:result`;

  function loadProgress(): QuestionnaireProgress | null {
    if (!canUseStorage()) return null;

    try {
      const raw = window.localStorage.getItem(progressKey);
      if (!raw) return null;

      const parsed = JSON.parse(raw) as QuestionnaireProgress;
      if (
        typeof parsed.currentIndex !== "number" ||
        !Array.isArray(parsed.answers)
      ) {
        return null;
      }

      return parsed;
    } catch {
      return null;
    }
  }

  function saveProgress(progress: QuestionnaireProgress): void {
    if (!canUseStorage()) return;

    try {
      window.localStorage.setItem(progressKey, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }

  function clearProgress(): void {
    if (!canUseStorage()) return;

    try {
      window.localStorage.removeItem(progressKey);
    } catch {
      // ignore
    }
  }

  function loadResult(): TResult | null {
    if (!canUseStorage()) return null;

    try {
      const raw = window.localStorage.getItem(resultKey);
      if (!raw) return null;
      return JSON.parse(raw) as TResult;
    } catch {
      return null;
    }
  }

  function saveResult(result: TResult): void {
    if (!canUseStorage()) return;

    try {
      window.localStorage.setItem(resultKey, JSON.stringify(result));
    } catch {
      // ignore
    }
  }

  function clearResult(): void {
    if (!canUseStorage()) return;

    try {
      window.localStorage.removeItem(resultKey);
    } catch {
      // ignore
    }
  }

  function clearAll(): void {
    clearProgress();
    clearResult();
  }

  return {
    loadProgress,
    saveProgress,
    clearProgress,
    loadResult,
    saveResult,
    clearResult,
    clearAll,
  };
}

export function upsertAnswer(
  answers: AnswerSelection[],
  questionId: number,
  answerId: string,
): AnswerSelection[] {
  const next = answers.filter((item) => item.questionId !== questionId);
  next.push({ questionId, answerId });
  return next.sort((a, b) => a.questionId - b.questionId);
}

export function getSelectedAnswerId(
  answers: AnswerSelection[],
  questionId: number,
): string | null {
  return (
    answers.find((item) => item.questionId === questionId)?.answerId ?? null
  );
}
