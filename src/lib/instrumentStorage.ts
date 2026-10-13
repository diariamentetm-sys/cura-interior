import type { LikertAnswer, LikertResultBase } from "@/types/likert";
import type { QuestionnaireProgress } from "@/types/questionnaire";

type LikertProgress = {
  currentIndex: number;
  answers: LikertAnswer[];
  updatedAt: string;
};

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function progressKey(namespace: string) {
  return `cura-interior:${namespace}:progress`;
}

function resultKey(namespace: string) {
  return `cura-interior:${namespace}:result`;
}

export function loadLikertProgress(namespace: string): LikertProgress | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(progressKey(namespace));
    return raw ? (JSON.parse(raw) as LikertProgress) : null;
  } catch {
    return null;
  }
}

export function saveLikertProgress(
  namespace: string,
  progress: LikertProgress,
): void {
  if (!canUseStorage()) return;
  window.localStorage.setItem(progressKey(namespace), JSON.stringify(progress));
}

export function clearLikertProgress(namespace: string): void {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(progressKey(namespace));
}

export function saveInstrumentResult<T extends LikertResultBase | Record<string, unknown>>(
  namespace: string,
  result: T,
): void {
  if (!canUseStorage()) return;
  window.localStorage.setItem(resultKey(namespace), JSON.stringify(result));
}

export function loadInstrumentResult<T>(namespace: string): T | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(resultKey(namespace));
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function hasInstrumentResult(namespace: string): boolean {
  if (!canUseStorage()) return false;
  return Boolean(window.localStorage.getItem(resultKey(namespace)));
}

export function hasInstrumentProgress(namespace: string): boolean {
  if (!canUseStorage()) return false;
  return Boolean(window.localStorage.getItem(progressKey(namespace)));
}

/** Adapter for legacy QuestionnaireProgress shape when needed */
export function toLegacyProgress(
  progress: LikertProgress,
): QuestionnaireProgress {
  return {
    currentIndex: progress.currentIndex,
    answers: progress.answers.map((a) => ({
      questionId: a.questionId,
      answerId: String(a.value),
    })),
    updatedAt: progress.updatedAt,
  };
}
