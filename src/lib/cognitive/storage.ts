import type {
  CognitiveExplorationState,
  CognitiveResult,
  CognitiveSession,
  PublicCognitiveQuestion,
} from "@/types/cognitive";

const SESSION_KEY = "cura-interior:cognitive:session";
const RESULT_KEY = "cura-interior:cognitive:result";
const CLIENT_KEY = "cura-interior:cognitive:client-key";
const EXPLORATION_KEY = "cura-interior:cognitive:exploration";

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export type LocalCognitivePayload = {
  session: CognitiveSession;
  questions: PublicCognitiveQuestion[];
};

export function getCognitiveClientKey(): string {
  if (!canUseStorage()) return `anon-${Date.now()}`;
  const existing = window.localStorage.getItem(CLIENT_KEY);
  if (existing) return existing;
  const key = `ck-${crypto.randomUUID()}`;
  window.localStorage.setItem(CLIENT_KEY, key);
  return key;
}

export function saveLocalCognitiveSession(payload: LocalCognitivePayload): void {
  if (!canUseStorage()) return;
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(payload));
}

export function loadLocalCognitiveSession(): LocalCognitivePayload | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as LocalCognitivePayload) : null;
  } catch {
    return null;
  }
}

export function clearLocalCognitiveSession(): void {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(SESSION_KEY);
}

export function saveLocalCognitiveResult(result: CognitiveResult): void {
  if (!canUseStorage()) return;
  window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));
}

export function loadLocalCognitiveResult(): CognitiveResult | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(RESULT_KEY);
    return raw ? (JSON.parse(raw) as CognitiveResult) : null;
  } catch {
    return null;
  }
}

export function loadCognitiveExploration(): CognitiveExplorationState {
  if (!canUseStorage()) {
    return { status: "unexplored" };
  }
  try {
    const raw = window.localStorage.getItem(EXPLORATION_KEY);
    if (!raw) return { status: "unexplored" };
    return JSON.parse(raw) as CognitiveExplorationState;
  } catch {
    return { status: "unexplored" };
  }
}

export function markCognitiveDiscovering(sessionId: string): void {
  if (!canUseStorage()) return;
  const current = loadCognitiveExploration();
  const next: CognitiveExplorationState = {
    ...current,
    status: current.status === "known" ? "known" : "discovering",
    lastSessionId: sessionId,
  };
  window.localStorage.setItem(EXPLORATION_KEY, JSON.stringify(next));
}

export function recordCognitiveExploration(result: CognitiveResult): CognitiveExplorationState {
  const summary = Object.fromEntries(
    result.scoresByCategory.map((s) => [s.category, s.percentage]),
  );
  const next: CognitiveExplorationState = {
    status: "known",
    lastSessionId: result.sessionId,
    lastCompletedAt: result.completedAt,
    lastCorrectCount: result.correctCount,
    lastTotalQuestions: result.totalQuestions,
    lastCategorySummary: summary,
  };
  if (canUseStorage()) {
    window.localStorage.setItem(EXPLORATION_KEY, JSON.stringify(next));
  }
  return next;
}
