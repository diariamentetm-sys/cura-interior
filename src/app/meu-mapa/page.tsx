"use client";

import { useAuth } from "@/components/AuthProvider";
import { BadgeGrid } from "@/components/BadgeCard";
import { Button } from "@/components/Button";
import { InnerMap } from "@/components/InnerMap";
import { NextDiscoveryCard } from "@/components/NextDiscoveryCard";
import { UserAura } from "@/components/UserAura";
import { UserAvatar } from "@/components/UserAvatar";
import {
  questionnaires,
  type DiscoveryStatus,
  type QuestionnaireSlug,
} from "@/data/questionnaires";
import {
  buildSynthesis,
  getDiscoveryLevel,
  getDiscoveryLevelMessage,
  getNextRecommended,
  getQuestionnaireStatus,
} from "@/lib/portalProgress";
import Link from "next/link";
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

  const level = getDiscoveryLevel(portal.completions);
  const next = getNextRecommended(portal);
  const statuses = Object.fromEntries(
    questionnaires.map((item) => [
      item.slug,
      getQuestionnaireStatus(item.slug, portal),
    ]),
  ) as Record<QuestionnaireSlug, DiscoveryStatus>;
  const synthesis = buildSynthesis(portal);
  const name = profile?.display_name ?? "viajante";

  return (
    <div className="mx-auto w-full max-w-6xl space-y-14 px-5 py-12 sm:px-8 sm:py-16">
      <section className="animate-fade-up space-y-4 text-center">
        <p className="section-eyebrow">Meu Mapa</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl md:text-6xl">
          Olá, {name}.
        </h1>
        <p className="text-base text-ink-muted sm:text-lg">
          Seu mapa continua daqui.
        </p>
      </section>

      <section className="space-y-6 text-center">
        <UserAura level={level}>
          <UserAvatar
            name={profile?.display_name}
            level={level}
            avatarType={
              profile?.avatar_type === "initials" ? "initials" : "abstract"
            }
          />
        </UserAura>
        <div className="space-y-2">
          <p className="font-display text-2xl text-ink sm:text-3xl">
            {level === 5
              ? "Seu primeiro mapa está completo."
              : getDiscoveryLevelMessage(level)}
          </p>
          {level === 5 && (
            <p className="mx-auto max-w-2xl text-base text-ink-muted">
              Isso não significa que você terminou de se conhecer. Significa
              apenas que agora possui mais pontos para observar quem está se
              tornando.
            </p>
          )}
          {level === 0 && (
            <div className="pt-4">
              <Button href="/arquetipos">Fazer minha primeira descoberta</Button>
            </div>
          )}
        </div>
      </section>

      <section className="card-panel space-y-6 p-7 sm:p-9">
        <div className="space-y-2 text-center">
          <p className="section-eyebrow">Visualização</p>
          <h2 className="display-xl text-3xl text-ink sm:text-4xl">
            Seu mapa interior
          </h2>
          <p className="text-base text-ink-muted">
            Cada experiência concluída acrescenta uma nova camada.
          </p>
        </div>
        <InnerMap statuses={statuses} />
      </section>

      <NextDiscoveryCard nextSlug={next} completedCount={level} />

      {synthesis && (
        <section className="card-panel space-y-4 p-7 sm:p-9">
          <p className="section-eyebrow">Síntese</p>
          <h2 className="display-xl text-3xl text-ink sm:text-4xl">
            O que seu mapa
            <br />
            começa a mostrar
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-ink-muted">
            {synthesis}
          </p>
        </section>
      )}

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow mb-2">Recentes</p>
            <h2 className="display-xl text-3xl text-ink sm:text-4xl">
              Descobertas
            </h2>
          </div>
          <Link
            href="/meu-mapa/historico"
            className="text-sm font-semibold text-accent-blue transition-opacity hover:opacity-75"
          >
            Ver histórico
          </Link>
        </div>
        {portal.completions.length === 0 ? (
          <p className="text-ink-muted">
            Ainda não há descobertas. Todo mapa começa com um primeiro ponto.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...portal.completions]
              .sort(
                (a, b) =>
                  new Date(b.completedAt).getTime() -
                  new Date(a.completedAt).getTime(),
              )
              .slice(0, 3)
              .map((item) => {
                const meta = questionnaires.find((q) => q.slug === item.slug)!;
                return (
                  <li
                    key={`${item.slug}-${item.completedAt}`}
                    className="card-panel space-y-3 p-5"
                  >
                    <p className="font-display text-xl text-ink">{meta.name}</p>
                    <p className="text-sm text-ink-muted">
                      Concluído em{" "}
                      {new Date(item.completedAt).toLocaleDateString("pt-BR")}
                    </p>
                    <Button href={meta.resultHref} variant="ghost">
                      Revisar
                    </Button>
                  </li>
                );
              })}
          </ul>
        )}
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow mb-2">Conquistas</p>
            <h2 className="display-xl text-3xl text-ink sm:text-4xl">
              Suas descobertas
            </h2>
          </div>
          <Link
            href="/conquistas"
            className="text-sm font-semibold text-accent-blue transition-opacity hover:opacity-75"
          >
            Ver todas
          </Link>
        </div>
        <BadgeGrid unlocked={portal.unlockedBadges} />
      </section>
    </div>
  );
}
