"use client";

import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/Button";
import { questionnaires } from "@/data/questionnaires";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HistoricoPage() {
  const { user, portal, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login?next=/meu-mapa/historico");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="py-24 text-center text-ink-muted">Carregando histórico...</div>
    );
  }

  const items = [...portal.completions].sort(
    (a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
  );

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="space-y-4">
        <p className="section-eyebrow">Histórico</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl">
          Suas experiências
        </h1>
        <p className="max-w-2xl text-base text-ink-muted">
          Revisite descobertas anteriores. Seu mapa continua mudando com você.
        </p>
      </div>

      <ul className="mt-12 space-y-6">
        {items.length === 0 && (
          <li className="text-ink-muted">
            Ainda não há experiências registradas.
          </li>
        )}
        {items.map((item) => {
          const meta = questionnaires.find((q) => q.slug === item.slug)!;
          return (
            <li
              key={`${item.slug}-${item.completedAt}`}
              className="space-y-3 border-t border-border/70 pt-6"
            >
              <h2 className="font-display text-2xl text-ink">{meta.name}</h2>
              <p className="text-sm text-ink-muted">
                Concluído em{" "}
                {new Date(item.completedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <Button href={meta.resultHref} variant="secondary">
                Abrir resultado
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
