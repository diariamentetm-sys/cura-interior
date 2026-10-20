"use client";

import { AchievementGallery } from "@/components/mapa/AchievementGallery";
import { DiscoveryDiary } from "@/components/mapa/DiscoveryDiary";
import { LivingMap } from "@/components/mapa/LivingMap";
import { MentalGymTeaser } from "@/components/mapa/MentalGymTeaser";
import { MeuUniversoHero } from "@/components/mapa/MeuUniversoHero";
import { NextObjectiveCard } from "@/components/mapa/NextObjectiveCard";
import {
  getBadgeProgressList,
  getExplorationCount,
  getIntelectoLine,
  getIntelectoMood,
  getNextBadgeProgress,
  getNextDiscovery,
  getTerritoryProgress,
  getUniverseMessage,
  getUniverseSupport,
} from "@/lib/meuMapa";
import type { PortalState } from "@/lib/portalProgress";

/** Preview de design sem login — dados de demonstração. */
const demoPortal: PortalState = {
  completions: [
    {
      slug: "big-five",
      completedAt: "2026-10-10T12:00:00.000Z",
      primaryLabel: "Abertura em destaque",
    },
    {
      slug: "tipologia-16",
      completedAt: "2026-10-12T15:30:00.000Z",
      primaryLabel: "ENFP",
    },
  ],
  unlockedBadges: ["primeiro-olhar", "sem-pressa"],
  firstVisitAt: "2026-10-08T10:00:00.000Z",
  lastVisitAt: "2026-10-19T16:00:00.000Z",
  visitDays: ["2026-10-08", "2026-10-19"],
  inProgress: ["inteligencia-emocional"],
};

export default function MeuMapaPreviewPage() {
  const name = "Ivy";
  const { completed, total } = getExplorationCount(demoPortal.completions);
  const discovery = getNextDiscovery(demoPortal);
  const territories = getTerritoryProgress(demoPortal);
  const nextBadge = getNextBadgeProgress(demoPortal);
  const badgeProgress = getBadgeProgressList(demoPortal);
  const mood = getIntelectoMood(demoPortal);
  const intelectoLine = getIntelectoLine(mood, discovery, nextBadge);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-5 pb-10 pt-4 sm:space-y-16 sm:px-8 sm:pb-14 sm:pt-5">
      <MeuUniversoHero
        name={name}
        completed={completed}
        total={total}
        headline={getUniverseMessage(completed, total)}
        support={getUniverseSupport(completed, total)}
        discovery={discovery}
        mood={mood}
        intelectoLine={intelectoLine}
      />

      <LivingMap territories={territories} portal={demoPortal} />

      <NextObjectiveCard discovery={discovery} nextBadge={nextBadge} />

      <AchievementGallery items={badgeProgress} />

      <DiscoveryDiary portal={demoPortal} />

      <MentalGymTeaser />
    </div>
  );
}
