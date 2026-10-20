import { badges, type BadgeMeta } from "@/data/badges";
import {
  getInstrument,
  getInstrumentsForModule,
  instruments,
  modules,
  type InstrumentMeta,
  type InstrumentSlug,
  type ModuleMeta,
  type ModuleSlug,
} from "@/data/instruments";
import { instrumentVisualThemes } from "@/components/instruments/instrumentVisuals";
import {
  getInstrumentStatus,
  type LocalCompletion,
  type PortalState,
} from "@/lib/portalProgress";

export type IntelectoMood =
  | "welcome"
  | "discovery"
  | "achievement"
  | "return"
  | "mapComplete";

export type BadgeProgress = {
  badge: BadgeMeta;
  current: number;
  target: number;
  remaining: number;
  unlocked: boolean;
  ratio: number;
};

export type PathStepStatus = "complete" | "next" | "available";

export type TerritoryExploreState = "unexplored" | "partial" | "complete";

export type TerritoryProgress = {
  module: ModuleMeta;
  instruments: InstrumentMeta[];
  completedCount: number;
  totalCount: number;
  state: TerritoryExploreState;
  nextInstrument: InstrumentMeta | null;
  thumb?: string;
  panel: string;
};

export type NextDiscovery = {
  kind: "start" | "continue" | "complete";
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
  instrument?: InstrumentMeta;
};

export function getUniqueCompletedSlugs(
  completions: LocalCompletion[],
): InstrumentSlug[] {
  const known = new Set<InstrumentSlug>();
  for (const item of completions) {
    if (instruments.some((instrument) => instrument.slug === item.slug)) {
      known.add(item.slug as InstrumentSlug);
    }
  }
  return [...known];
}

export function getExplorationCount(completions: LocalCompletion[]): {
  completed: number;
  total: number;
} {
  return {
    completed: getUniqueCompletedSlugs(completions).length,
    total: instruments.length,
  };
}

export function getUniverseMessage(completed: number, total: number): string {
  if (completed <= 0) {
    return "Seu universo está pronto para ganhar forma.";
  }
  if (completed >= total) {
    return "Seu mapa de avaliações está completo por enquanto.";
  }
  if (completed === 1) {
    return "Seu universo está começando a ganhar forma.";
  }
  return "Cada descoberta acrescenta uma nova perspectiva ao seu mapa.";
}

export function getUniverseSupport(completed: number, total: number): string {
  if (completed <= 0) {
    return "Toda descoberta começa com uma pergunta. Escolha um território e explore no seu ritmo.";
  }
  if (completed >= total) {
    return "Você pode revisitar suas descobertas e, futuramente, explorar novos desafios cognitivos.";
  }
  if (completed === 1) {
    return `Você já explorou uma das ${total} avaliações disponíveis.`;
  }
  return `Você já explorou ${completed} das ${total} avaliações disponíveis.`;
}

export function getTerritoryProgress(state: PortalState): TerritoryProgress[] {
  return modules.map((module) => {
    const list = getInstrumentsForModule(module.slug);
    const completedCount = list.filter(
      (instrument) => getInstrumentStatus(instrument.slug, state) === "known",
    ).length;
    const totalCount = list.length;
    const territoryState: TerritoryExploreState =
      completedCount === 0
        ? "unexplored"
        : completedCount >= totalCount
          ? "complete"
          : "partial";
    const nextInstrument =
      list.find(
        (instrument) => getInstrumentStatus(instrument.slug, state) !== "known",
      ) ?? null;
    const lead = list[0];
    const theme = lead ? instrumentVisualThemes[lead.slug] : null;

    return {
      module,
      instruments: list,
      completedCount,
      totalCount,
      state: territoryState,
      nextInstrument,
      thumb: theme?.thumb,
      panel: theme?.panel ?? "bg-sand",
    };
  });
}

/** Prefere completar território parcial; senão, primeira avaliação não concluída. */
export function getNextDiscovery(state: PortalState): NextDiscovery {
  const { completed, total } = getExplorationCount(state.completions);

  if (completed >= total) {
    return {
      kind: "complete",
      title: "Seu mapa de avaliações está completo por enquanto.",
      body: "Revisitar descobertas também conta. Em breve, novos desafios cognitivos poderão entrar no seu universo.",
      ctaLabel: "Revisitar meu diário",
      href: "/meu-mapa/historico",
    };
  }

  const territories = getTerritoryProgress(state);
  const partial = territories.find((territory) => territory.state === "partial");
  const candidate =
    partial?.nextInstrument ??
    instruments.find(
      (instrument) => getInstrumentStatus(instrument.slug, state) !== "known",
    ) ??
    null;

  if (!candidate) {
    return {
      kind: "complete",
      title: "Seu mapa de avaliações está completo por enquanto.",
      body: "Você pode revisitar suas descobertas quando quiser.",
      ctaLabel: "Revisitar meu diário",
      href: "/meu-mapa/historico",
    };
  }

  if (completed === 0) {
    return {
      kind: "start",
      title: "Toda descoberta começa com uma pergunta.",
      body: "Escolha um território e dê o primeiro passo no seu mapa.",
      ctaLabel: "Começar minha jornada",
      href: candidate.href,
      instrument: candidate,
    };
  }

  const ctaBySlug: Partial<Record<InstrumentSlug, string>> = {
    "tipologia-16": "Explorar 16 Personalidades",
    "inteligencia-emocional": "Explorar minhas emoções",
    "perfil-cognitivo": "Explorar meu raciocínio",
    "estilos-apego": "Explorar meus vínculos",
    autoestima: "Explorar minha autoestima",
    "vocacional-riasec": "Explorar meus interesses",
    "big-five": "Explorar minha personalidade",
  };

  return {
    kind: "continue",
    title: `Próxima descoberta: ${candidate.name}`,
    body:
      partial && partial.nextInstrument?.slug === candidate.slug
        ? `Continue no território ${partial.module.name} — ainda há o que descobrir por aqui.`
        : candidate.shortDescription,
    ctaLabel: ctaBySlug[candidate.slug] ?? `Explorar ${candidate.name}`,
    href: candidate.href,
    instrument: candidate,
  };
}

export function getShortTerritoryName(moduleSlug: ModuleSlug): string {
  const labels: Record<ModuleSlug, string> = {
    personalidade: "Personalidade",
    "inteligencia-cognicao": "Cognição",
    relacionamentos: "Relacionamentos",
    autopercepcao: "Autopercepção",
    "carreira-proposito": "Carreira",
  };
  return labels[moduleSlug];
}

export function getPathStepStatus(
  territories: TerritoryProgress[],
  index: number,
): PathStepStatus {
  const territory = territories[index];
  if (!territory) return "available";
  if (territory.state === "complete") return "complete";

  const firstOpen = territories.findIndex((item) => item.state !== "complete");
  if (firstOpen === index) return "next";
  return "available";
}

export function getPathStepLabel(
  status: PathStepStatus,
  territory: TerritoryProgress,
): string {
  if (status === "complete") return "Concluído";
  if (status === "next") return "Próximo";
  if (territory.state === "partial") return "Em andamento";
  return "Disponível";
}

/** Próxima insígnia baseada em contagem de avaliações distintas. */
export function getNextBadgeProgress(
  state: PortalState,
): BadgeProgress | null {
  const completed = getUniqueCompletedSlugs(state.completions).length;
  const unlocked = new Set(state.unlockedBadges);

  const countBadges = badges.filter(
    (badge): badge is BadgeMeta & { requiresCount: number } =>
      typeof badge.requiresCount === "number",
  );

  for (const badge of countBadges) {
    const current = Math.min(completed, badge.requiresCount);
    const unlockedNow = unlocked.has(badge.slug) || completed >= badge.requiresCount;
    if (unlockedNow) continue;
    return {
      badge,
      current,
      target: badge.requiresCount,
      remaining: Math.max(0, badge.requiresCount - completed),
      unlocked: false,
      ratio: current / badge.requiresCount,
    };
  }

  const last = countBadges[countBadges.length - 1];
  if (!last) return null;
  return {
    badge: last,
    current: Math.min(completed, last.requiresCount),
    target: last.requiresCount,
    remaining: 0,
    unlocked: true,
    ratio: 1,
  };
}

export function getBadgeProgressList(state: PortalState): BadgeProgress[] {
  const completed = getUniqueCompletedSlugs(state.completions).length;
  const unlocked = new Set(state.unlockedBadges);
  const visitDays = state.visitDays.length;

  return badges.map((badge) => {
    if (badge.requiresCount) {
      const current = Math.min(completed, badge.requiresCount);
      const isUnlocked =
        unlocked.has(badge.slug) || completed >= badge.requiresCount;
      return {
        badge,
        current,
        target: badge.requiresCount,
        remaining: Math.max(0, badge.requiresCount - completed),
        unlocked: isUnlocked,
        ratio: current / badge.requiresCount,
      };
    }

    const isUnlocked = unlocked.has(badge.slug) || visitDays >= 2;
    return {
      badge,
      current: isUnlocked ? 1 : Math.min(visitDays, 1),
      target: 1,
      remaining: isUnlocked ? 0 : 1,
      unlocked: isUnlocked,
      ratio: isUnlocked ? 1 : visitDays >= 1 ? 0.5 : 0,
    };
  });
}

export function getIntelectoMood(state: PortalState): IntelectoMood {
  const { completed, total } = getExplorationCount(state.completions);
  if (completed >= total && total > 0) return "mapComplete";

  const visitDays = state.visitDays.length;
  const lastVisit = state.lastVisitAt ? new Date(state.lastVisitAt) : null;
  const hoursAway = lastVisit
    ? (Date.now() - lastVisit.getTime()) / (1000 * 60 * 60)
    : 0;

  if (completed === 0) return "welcome";
  if (visitDays >= 2 && hoursAway >= 20) return "return";

  const nextBadge = getNextBadgeProgress(state);
  if (nextBadge && nextBadge.remaining === 1) return "achievement";

  return "discovery";
}

export function getIntelectoLine(
  mood: IntelectoMood,
  discovery: NextDiscovery,
  nextBadge: BadgeProgress | null,
): string {
  switch (mood) {
    case "welcome":
      return "Oi! Eu sou o Intelecto Mágico. Vamos dar o primeiro passo juntos?";
    case "return":
      return "Que bom te ver de novo. Sem pressa — o mapa te espera.";
    case "achievement":
      return nextBadge
        ? `Quase lá! Falta 1 descoberta para a conquista ${nextBadge.badge.name}.`
        : "Uma conquista nova está bem perto.";
    case "mapComplete":
      return "Mapa explorado! Que tal revisitar uma descoberta ou experimentar a Ginástica Mental em breve?";
    case "discovery":
    default:
      return discovery.instrument
        ? `Que tal explorar ${discovery.instrument.name} agora?`
        : "Quando quiser, escolhemos a próxima descoberta.";
  }
}

export function getDiaryEntries(state: PortalState) {
  return [...state.completions]
    .filter((item) => getInstrument(item.slug as InstrumentSlug))
    .sort(
      (a, b) =>
        new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
    )
    .map((item) => {
      const meta = getInstrument(item.slug as InstrumentSlug)!;
      const module = modules.find((entry) => entry.slug === meta.moduleSlug);
      return {
        ...item,
        meta,
        territoryName: module?.name ?? "Território",
        territorySlug: meta.moduleSlug as ModuleSlug,
      };
    });
}
