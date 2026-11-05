import { badges, type BadgeSlug } from "@/data/badges";
import {
  instruments,
  getInstrument,
  getInstrumentsForModule,
  modules,
  type DiscoveryStatus,
  type InstrumentSlug,
} from "@/data/instruments";
import { hasInstrumentProgress, hasInstrumentResult, loadInstrumentResult } from "@/lib/instrumentStorage";
import { loadCognitiveExploration } from "@/lib/cognitive/storage";

const PORTAL_KEY = "cura-interior:portal";
const OWNER_KEY = "cura-interior:portal-owner";

export type LocalCompletion = {
  slug: InstrumentSlug | string;
  completedAt: string;
  primaryLabel?: string;
};

export type PortalState = {
  completions: LocalCompletion[];
  unlockedBadges: BadgeSlug[];
  firstVisitAt: string;
  lastVisitAt: string;
  visitDays: string[];
  inProgress: string[];
};

export const STABLE_EMPTY_PORTAL: PortalState = {
  completions: [],
  unlockedBadges: [],
  firstVisitAt: "",
  lastVisitAt: "",
  visitDays: [],
  inProgress: [],
};

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function emptyState(): PortalState {
  const now = new Date().toISOString();
  return {
    completions: [],
    unlockedBadges: [],
    firstVisitAt: now,
    lastVisitAt: now,
    visitDays: [todayKey()],
    inProgress: [],
  };
}

function readRaw(key: string): unknown | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function loadPortalState(): PortalState {
  if (!canUseStorage()) return { ...STABLE_EMPTY_PORTAL };

  try {
    const raw = window.localStorage.getItem(PORTAL_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as PortalState;
      return syncPortalState({
        ...parsed,
        inProgress: parsed.inProgress ?? [],
      });
    }
  } catch {
    // fall through
  }

  return syncPortalState(emptyState());
}

function savePortalState(state: PortalState): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(PORTAL_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function readStoredPortal(): PortalState | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(PORTAL_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PortalState;
    return {
      ...emptyState(),
      ...parsed,
      completions: Array.isArray(parsed.completions) ? parsed.completions : [],
      unlockedBadges: Array.isArray(parsed.unlockedBadges) ? parsed.unlockedBadges : [],
      visitDays: Array.isArray(parsed.visitDays) ? parsed.visitDays : [],
      inProgress: Array.isArray(parsed.inProgress) ? parsed.inProgress : [],
    };
  } catch {
    return null;
  }
}

export function getPortalOwner(): string | null {
  if (!canUseStorage()) return null;
  return window.localStorage.getItem(OWNER_KEY);
}

export function rememberPortalOwner(userId: string): void {
  if (!canUseStorage()) return;
  window.localStorage.setItem(OWNER_KEY, userId);
}

export function localResultsBelongTo(userId: string): boolean {
  const owner = getPortalOwner();
  return owner === null || owner === userId;
}

export function applyRemoteCompletions(
  completions: LocalCompletion[],
  options?: { fresh?: boolean },
): PortalState {
  const stored = options?.fresh ? null : readStoredPortal();
  const base = stored ?? emptyState();
  const now = new Date().toISOString();
  const day = todayKey();
  const visitDays = options?.fresh
    ? [day]
    : base.visitDays.includes(day)
      ? base.visitDays
      : [...base.visitDays, day];
  const inProgress = instruments
    .filter((instrument) => {
      if (completions.some((item) => item.slug === instrument.slug)) return false;
      if (instrument.external) {
        return loadCognitiveExploration().status === "discovering";
      }
      return hasInstrumentProgress(instrument.storageNamespace);
    })
    .map((instrument) => instrument.slug);

  const next: PortalState = {
    ...base,
    completions,
    inProgress,
    firstVisitAt: options?.fresh ? now : base.firstVisitAt || now,
    lastVisitAt: now,
    visitDays,
    unlockedBadges: computeUnlockedBadges(completions, visitDays),
  };

  savePortalState(next);
  return next;
}

export function syncPortalState(base?: PortalState): PortalState {
  const state = base ?? emptyState();
  const now = new Date().toISOString();
  const day = todayKey();
  const completions = [...state.completions];

  for (const instrument of instruments) {
    if (instrument.external) {
      const cognitive = loadCognitiveExploration();
      if (cognitive.status !== "known" || !cognitive.lastCompletedAt) continue;
      if (completions.some((item) => item.slug === instrument.slug)) continue;
      completions.push({
        slug: instrument.slug,
        completedAt: cognitive.lastCompletedAt,
        primaryLabel:
          typeof cognitive.lastCorrectCount === "number" &&
          typeof cognitive.lastTotalQuestions === "number"
            ? `${cognitive.lastCorrectCount}/${cognitive.lastTotalQuestions}`
            : "Perfil cognitivo",
      });
      continue;
    }

    if (!hasInstrumentResult(instrument.storageNamespace)) continue;
    if (completions.some((item) => item.slug === instrument.slug)) continue;

    const payload = loadInstrumentResult<Record<string, unknown>>(
      instrument.storageNamespace,
    );
    completions.push({
      slug: instrument.slug,
      completedAt:
        (payload?.calculatedAt as string | undefined) || now,
      primaryLabel: (payload?.primaryLabel as string | undefined) || instrument.name,
    });
  }

  const inProgress = instruments
    .filter((instrument) => {
      if (completions.some((item) => item.slug === instrument.slug)) return false;
      if (instrument.external) {
        return loadCognitiveExploration().status === "discovering";
      }
      return hasInstrumentProgress(instrument.storageNamespace);
    })
    .map((instrument) => instrument.slug);

  const visitDays = state.visitDays.includes(day)
    ? state.visitDays
    : [...state.visitDays, day];

  const next: PortalState = {
    ...state,
    completions,
    inProgress,
    lastVisitAt: now,
    visitDays,
    unlockedBadges: computeUnlockedBadges(completions, visitDays),
  };

  savePortalState(next);
  return next;
}

export function recordInstrumentCompletion(
  slug: InstrumentSlug | string,
  options?: { primaryLabel?: string; completedAt?: string },
): PortalState {
  const state = loadPortalState();
  const existing = state.completions.find((item) => item.slug === slug);
  const completedAt = options?.completedAt ?? new Date().toISOString();

  const completions = existing
    ? state.completions.map((item) =>
        item.slug === slug
          ? {
              ...item,
              completedAt,
              primaryLabel: options?.primaryLabel ?? item.primaryLabel,
            }
          : item,
      )
    : [
        ...state.completions,
        {
          slug,
          completedAt,
          primaryLabel: options?.primaryLabel,
        },
      ];

  return syncPortalState({
    ...state,
    completions,
  });
}

/** @deprecated use recordInstrumentCompletion */
export const recordQuestionnaireCompletion = recordInstrumentCompletion;

export function getDiscoveryLevel(completions: LocalCompletion[]): number {
  const known = new Set(
    completions
      .map((c) => c.slug)
      .filter((slug) => instruments.some((i) => i.slug === slug)),
  );
  return Math.min(instruments.length, known.size);
}

export function getDiscoveryLevelMessage(level: number): string {
  const messages: Record<number, string> = {
    0: "Todo mapa começa com um primeiro ponto.",
    1: "Uma avaliação já faz parte do seu mapa.",
    2: "Duas dimensões exploradas — o mapa começa a ganhar forma.",
    3: "Três avaliações registradas. Continue no seu ritmo.",
    4: "Quatro dimensões exploradas no mapa.",
    5: "Cinco avaliações no seu universo.",
    6: "Quase lá — o mapa está quase completo.",
    7: "As sete avaliações atuais já fazem parte do seu mapa.",
  };
  return messages[Math.min(level, 7)] ?? messages[0];
}

export function getInstrumentStatus(
  slug: InstrumentSlug | string,
  state: PortalState,
): DiscoveryStatus {
  if (state.completions.some((item) => item.slug === slug)) return "known";
  if (state.inProgress?.includes(slug)) return "discovering";
  return "unexplored";
}

/** @deprecated */
export const getQuestionnaireStatus = getInstrumentStatus;

export function getNextRecommended(state: PortalState): InstrumentSlug | null {
  for (const module of modules) {
    const list = getInstrumentsForModule(module.slug);
    const knownCount = list.filter((instrument) =>
      state.completions.some((item) => item.slug === instrument.slug),
    ).length;
    if (knownCount > 0 && knownCount < list.length) {
      const next = list.find(
        (instrument) =>
          !state.completions.some((item) => item.slug === instrument.slug),
      );
      if (next) return next.slug;
    }
  }

  for (const instrument of instruments) {
    if (!state.completions.some((item) => item.slug === instrument.slug)) {
      return instrument.slug;
    }
  }
  return null;
}

export function computeUnlockedBadges(
  completions: LocalCompletion[],
  visitDays: string[],
): BadgeSlug[] {
  const uniqueCount = new Set(
    completions
      .map((item) => item.slug)
      .filter((slug) => instruments.some((item) => item.slug === slug)),
  ).size;
  const unlocked: BadgeSlug[] = [];

  for (const badge of badges) {
    if (badge.requiresCount && uniqueCount >= badge.requiresCount) {
      unlocked.push(badge.slug);
      continue;
    }
    if (badge.requiresReturnVisit && visitDays.length >= 2) {
      unlocked.push(badge.slug);
    }
  }

  return unlocked;
}

export function getLocalResultPayload(
  slug: string,
): Record<string, unknown> | null {
  const meta = getInstrument(slug as InstrumentSlug);
  if (!meta) return null;
  if (meta.external) {
    return readRaw("cura-interior:cognitive:result") as Record<
      string,
      unknown
    > | null;
  }
  return loadInstrumentResult<Record<string, unknown>>(meta.storageNamespace);
}

/** Meu Mapa: sem síntese cruzada entre instrumentos. */
export function buildSynthesis(_state: PortalState): string | null {
  return null;
}
