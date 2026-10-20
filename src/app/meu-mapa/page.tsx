"use client";

import { useAuth } from "@/components/AuthProvider";
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
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MeuMapaPage() {
  const { user, profile, portal, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login?next=/meu-mapa");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="py-24 text-center text-ink-muted">Abrindo seu mapa...</div>
    );
  }

  const name = profile?.display_name ?? "viajante";
  const { completed, total } = getExplorationCount(portal.completions);
  const discovery = getNextDiscovery(portal);
  const territories = getTerritoryProgress(portal);
  const nextBadge = getNextBadgeProgress(portal);
  const badgeProgress = getBadgeProgressList(portal);
  const mood = getIntelectoMood(portal);
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

      <LivingMap territories={territories} portal={portal} />

      <NextObjectiveCard discovery={discovery} nextBadge={nextBadge} />

      <AchievementGallery items={badgeProgress} />

      <DiscoveryDiary portal={portal} />

      <MentalGymTeaser />
    </div>
  );
}
