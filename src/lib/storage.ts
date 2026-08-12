import type { QuestionnaireResult } from "@/types/archetypes";
import type { QuestionnaireProgress } from "@/types/questionnaire";

const PROGRESS_KEY = "cura-interior:progress";
const RESULT_KEY = "cura-interior:result";

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadProgress(): QuestionnaireProgress | null {
  if (!canUseStorage()) return null;

  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
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

export function saveProgress(progress: QuestionnaireProgress): void {
  if (!canUseStorage()) return;

  try {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Storage pode estar indisponível; o estado em memória ainda funciona.
  }
}

export function clearProgress(): void {
  if (!canUseStorage()) return;

  try {
    window.localStorage.removeItem(PROGRESS_KEY);
  } catch {
    // ignore
  }
}

export function loadResult(): QuestionnaireResult | null {
  if (!canUseStorage()) return null;

  try {
    const raw = window.localStorage.getItem(RESULT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as QuestionnaireResult;
  } catch {
    return null;
  }
}

export function saveResult(result: QuestionnaireResult): void {
  if (!canUseStorage()) return;

  try {
    window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));
  } catch {
    // ignore
  }
}

export function clearResult(): void {
  if (!canUseStorage()) return;

  try {
    window.localStorage.removeItem(RESULT_KEY);
  } catch {
    // ignore
  }
}

export function clearQuestionnaireData(): void {
  clearProgress();
  clearResult();
}

export {
  getSelectedAnswerId,
  upsertAnswer,
} from "@/lib/quizStorage";
