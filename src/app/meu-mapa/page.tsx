"use client";

import { useAuth } from "@/components/AuthProvider";
import { BadgeGrid } from "@/components/BadgeCard";
import { Button } from "@/components/Button";
import { UserAura } from "@/components/UserAura";
import { UserAvatar } from "@/components/UserAvatar";
import { getInstrument, instruments, modules } from "@/data/instruments";
import {
  getDiscoveryLevel,
  getDiscoveryLevelMessage,
  getInstrumentStatus,
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
  const name = profile?.display_name ?? "viajante";

  return (
    <div className="mx-auto w-full max-w-6xl space-y-14 px-5 py-12 sm:px-8 sm:py-16">
      <section className="animate-fade-up space-y-4 text-center">
        <p className="section-eyebrow">Meu Mapa</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl md:text-6xl">
          Olá, {name}.
        </h1>
        <p className="text-base text-ink-muted sm:text-lg">
          Painel dos questionários que você já concluiu.
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
            {getDiscoveryLevelMessage(level)}
          </p>
          {level === 0 && (
            <div className="pt-4">
              <Button href="/explorar">Escolher um questionário</Button>
            </div>
          )}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow mb-2">Resultados</p>
            <h2 className="display-xl text-3xl text-ink sm:text-4xl">
              Avaliações concluídas
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
            Ainda não há resultados salvos. Cada questionário aparece aqui após
            a conclusão.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...portal.completions]
              .sort(
                (a, b) =>
                  new Date(b.completedAt).getTime() -
                  new Date(a.completedAt).getTime(),
              )
              .map((item) => {
                const meta = getInstrument(item.slug as never);
                return (
                  <li
                    key={`${item.slug}-${item.completedAt}`}
                    className="card-panel space-y-3 p-5"
                  >
                    <p className="font-display text-xl text-ink">
                      {meta?.name ?? item.slug}
                    </p>
                    {item.primaryLabel && (
                      <p className="text-sm text-ink">{item.primaryLabel}</p>
                    )}
                    <p className="text-sm text-ink-muted">
                      {new Date(item.completedAt).toLocaleDateString("pt-BR")}
                    </p>
                    {meta && (
                      <Button href={meta.resultHref} variant="ghost">
                        Revisar
                      </Button>
                    )}
                  </li>
                );
              })}
          </ul>
        )}
      </section>

      <section className="space-y-6">
        <p className="section-eyebrow mb-2">Continuar</p>
        <h2 className="display-xl text-3xl text-ink sm:text-4xl">Módulos</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <li key={module.slug}>
              <Link
                href={module.href}
                className="card-panel block space-y-2 p-5 transition-opacity hover:opacity-90"
              >
                <h3 className="font-display text-lg text-ink">{module.name}</h3>
                <p className="text-sm text-ink-muted">
                  {module.shortDescription}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <p className="section-eyebrow mb-2">Catálogo</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {instruments.map((instrument) => {
            const status = getInstrumentStatus(instrument.slug, portal);
            return (
              <li key={instrument.slug}>
                <Link
                  href={instrument.href}
                  className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-sm transition-opacity hover:opacity-80"
                >
                  <span className="font-medium text-ink">{instrument.name}</span>
                  <span className="text-ink-muted">
                    {status === "known"
                      ? "Concluído"
                      : status === "discovering"
                        ? "Em andamento"
                        : "Abrir"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow mb-2">Conquistas</p>
            <h2 className="display-xl text-3xl text-ink sm:text-4xl">
              Marcos
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
