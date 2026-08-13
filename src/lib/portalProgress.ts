import { badges, type BadgeSlug } from "@/data/badges";
import {
  RECOMMENDED_ORDER,
  getQuestionnaire,
  questionnaires,
  type DiscoveryStatus,
  type QuestionnaireSlug,
} from "@/data/questionnaires";
import { discoveryLevelMessages } from "@/data/discoveryStages";

const PORTAL_KEY = "cura-interior:portal";
const LEGACY_ARCHETYPE_RESULT = "cura-interior:result";

export type LocalCompletion = {
  slug: QuestionnaireSlug;
  completedAt: string;
  primaryLabel?: string;
};

export type PortalState = {
  completions: LocalCompletion[];
  unlockedBadges: BadgeSlug[];
  firstVisitAt: string;
  lastVisitAt: string;
  visitDays: string[];
  inProgress: QuestionnaireSlug[];
};

/** Stable empty state for SSR / first client render (avoids hydration mismatch). */
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

function hasProgress(namespace: string): boolean {
  if (namespace === "archetypes") {
    return Boolean(readRaw("cura-interior:progress"));
  }
  return Boolean(readRaw(`cura-interior:${namespace}:progress`));
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

function hasResult(namespace: string): boolean {
  if (namespace === "archetypes") {
    return Boolean(
      readRaw(LEGACY_ARCHETYPE_RESULT) ||
        readRaw("cura-interior:archetypes:result"),
    );
  }
  return Boolean(readRaw(`cura-interior:${namespace}:result`));
}

function loadResultPayload(namespace: string): Record<string, unknown> | null {
  if (namespace === "archetypes") {
    return (
      (readRaw("cura-interior:archetypes:result") as Record<string, unknown> | null) ||
      (readRaw(LEGACY_ARCHETYPE_RESULT) as Record<string, unknown> | null)
    );
  }
  return readRaw(`cura-interior:${namespace}:result`) as Record<
    string,
    unknown
  > | null;
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

function derivePrimaryLabel(
  slug: QuestionnaireSlug,
  payload: Record<string, unknown> | null,
): string | undefined {
  if (!payload) return undefined;

  if (slug === "arquetipos") {
    const primary = payload.primary as { code?: string } | undefined;
    return primary?.code;
  }
  if (slug === "persona") {
    return payload.dominantPersona as string | undefined;
  }
  if (slug === "necessidades-emocionais") {
    return payload.dominantNeed as string | undefined;
  }
  if (slug === "conflitos-internos") {
    return payload.dominantConflict as string | undefined;
  }
  if (slug === "sombra") {
    const primary = payload.primary as { code?: string } | undefined;
    return primary?.code;
  }
  return undefined;
}

export function syncPortalState(base?: PortalState): PortalState {
  const state = base ?? emptyState();
  const now = new Date().toISOString();
  const day = todayKey();

  const completions = [...state.completions];

  for (const questionnaire of questionnaires) {
    if (!hasResult(questionnaire.storageNamespace)) continue;
    if (completions.some((item) => item.slug === questionnaire.slug)) continue;

    const payload = loadResultPayload(questionnaire.storageNamespace);
    completions.push({
      slug: questionnaire.slug,
      completedAt:
        (payload?.calculatedAt as string | undefined) ||
        (payload?.completedAt as string | undefined) ||
        now,
      primaryLabel: derivePrimaryLabel(questionnaire.slug, payload),
    });
  }

  const inProgress = questionnaires
    .filter(
      (questionnaire) =>
        !completions.some((item) => item.slug === questionnaire.slug) &&
        hasProgress(questionnaire.storageNamespace),
    )
    .map((questionnaire) => questionnaire.slug);

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

export function recordQuestionnaireCompletion(
  slug: QuestionnaireSlug,
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

  const next = syncPortalState({
    ...state,
    completions,
  });

  return next;
}

export function getDiscoveryLevel(completions: LocalCompletion[]): number {
  return Math.min(5, completions.length);
}

export function getDiscoveryLevelMessage(level: number): string {
  return discoveryLevelMessages[level] ?? discoveryLevelMessages[0];
}

export function getQuestionnaireStatus(
  slug: QuestionnaireSlug,
  state: PortalState,
): DiscoveryStatus {
  if (state.completions.some((item) => item.slug === slug)) return "known";
  if (state.inProgress?.includes(slug)) return "discovering";
  return "unexplored";
}

export function getNextRecommended(
  state: PortalState,
): QuestionnaireSlug | null {
  for (const slug of RECOMMENDED_ORDER) {
    if (!state.completions.some((item) => item.slug === slug)) {
      return slug;
    }
  }
  return null;
}

export function computeUnlockedBadges(
  completions: LocalCompletion[],
  visitDays: string[],
): BadgeSlug[] {
  const completed = new Set(completions.map((item) => item.slug));
  const unlocked: BadgeSlug[] = [];

  for (const badge of badges) {
    if (badge.requiresCount && completions.length >= badge.requiresCount) {
      unlocked.push(badge.slug);
      continue;
    }
    if (
      badge.requires &&
      badge.requires.every((slug) => completed.has(slug))
    ) {
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
  slug: QuestionnaireSlug,
): Record<string, unknown> | null {
  const meta = getQuestionnaire(slug);
  if (!meta) return null;
  return loadResultPayload(meta.storageNamespace);
}

export function buildSynthesis(state: PortalState): string | null {
  if (state.completions.length < 3) return null;

  const parts: string[] = [];
  const bySlug = Object.fromEntries(
    state.completions.map((item) => [item.slug, item]),
  ) as Partial<Record<QuestionnaireSlug, LocalCompletion>>;

  if (bySlug.arquetipos?.primaryLabel) {
    parts.push(
      `Seu arquétipo predominante aponta um padrão importante ligado a ${bySlug.arquetipos.primaryLabel}.`,
    );
  }

  if (bySlug["necessidades-emocionais"]?.primaryLabel) {
    parts.push(
      `Nas suas necessidades emocionais, ${bySlug["necessidades-emocionais"].primaryLabel} aparece com destaque.`,
    );
  }

  if (bySlug["conflitos-internos"]?.primaryLabel) {
    parts.push(
      `Ao mesmo tempo, seu mapa de conflitos mostra uma tensão importante em ${bySlug["conflitos-internos"].primaryLabel}.`,
    );
  }

  if (bySlug.persona?.primaryLabel) {
    parts.push(
      `Na Persona, ${bySlug.persona.primaryLabel} revela como você tende a se apresentar.`,
    );
  }

  if (bySlug.sombra?.primaryLabel) {
    parts.push(
      `Na Sombra, ${bySlug.sombra.primaryLabel} indica um aspecto que pede atenção cuidadosa.`,
    );
  }

  if (parts.length === 0) {
    return "Seu mapa já reúne diferentes camadas. Revisite cada resultado para observar como elas se relacionam — sem pressa.";
  }

  return `${parts.join(" ")} Nenhum resultado conta sua história sozinho.`;
}
