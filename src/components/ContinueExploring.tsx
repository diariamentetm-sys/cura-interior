"use client";

import { Button } from "@/components/Button";
import { experiences } from "@/data/experiences";
import { questionnaires } from "@/data/questionnaires";
import { emotionalNeedsStorage } from "@/lib/emotionalNeedsStorage";
import { internalConflictsStorage } from "@/lib/internalConflictsStorage";
import { personaStorage } from "@/lib/personaStorage";
import { loadResult as loadArchetypeResult } from "@/lib/storage";
import { shadowStorage } from "@/lib/shadowStorage";
import { useEffect, useState } from "react";

type ContinueItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  resultHref?: string;
  cta: string;
  hasResult: boolean;
};

type ContinueExploringProps = {
  excludeId?: string;
};

export function ContinueExploring({ excludeId }: ContinueExploringProps) {
  const [items, setItems] = useState<ContinueItem[]>([]);

  useEffect(() => {
    const availability: Record<string, boolean> = {
      arquetipos: Boolean(loadArchetypeResult()),
      sombra: Boolean(shadowStorage.loadResult()),
      persona: Boolean(personaStorage.loadResult()),
      "necessidades-emocionais": Boolean(emotionalNeedsStorage.loadResult()),
      "conflitos-internos": Boolean(internalConflictsStorage.loadResult()),
    };

    setItems(
      experiences
        .filter((experience) => experience.id !== excludeId)
        .map((experience) => {
          const meta = questionnaires.find((item) => item.slug === experience.id);
          return {
            id: experience.id,
            title: experience.title,
            description: experience.description,
            href: experience.href,
            resultHref: meta?.resultHref,
            cta: experience.cta,
            hasResult: Boolean(availability[experience.id]),
          };
        }),
    );
  }, [excludeId]);

  if (items.length === 0) return null;

  return (
    <section className="animate-fade-in space-y-8 border-t border-border/70 pt-10">
      <div className="space-y-2">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Continue se conhecendo
        </h2>
        <p className="text-base text-ink-muted">
          Cada experiência revela um olhar diferente sobre você. Você pode
          continuar quando sentir vontade.
        </p>
      </div>

      <div className="space-y-8">
        {items.map((item) => (
          <article key={item.id} className="space-y-3">
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              {item.hasResult && (
                <span className="text-xs tracking-[0.14em] text-olive uppercase">
                  Resultado disponível
                </span>
              )}
            </div>
            <p className="max-w-2xl text-base text-ink-muted">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={item.href} variant="secondary">
                {item.cta}
              </Button>
              {item.hasResult && item.resultHref && (
                <Button href={item.resultHref} variant="ghost">
                  Ver resultado salvo
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
