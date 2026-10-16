"use client";

import { Button } from "@/components/Button";
import { instruments } from "@/data/instruments";
import { hasInstrumentResult } from "@/lib/instrumentStorage";
import { loadCognitiveExploration } from "@/lib/cognitive/storage";
import { useEffect, useState } from "react";

type ContinueExploringProps = {
  excludeId?: string;
};

export function ContinueExploring({ excludeId }: ContinueExploringProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  const items = instruments
    .filter((item) => item.slug !== excludeId)
    .map((item) => {
      const hasResult = item.external
        ? loadCognitiveExploration().status === "known"
        : hasInstrumentResult(item.storageNamespace);
      return { ...item, hasResult };
    })
    .filter((item) => !item.hasResult)
    .slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className="space-y-6">
      <div>
        <p className="section-eyebrow mb-2">Continuar</p>
        <h2 className="font-display text-2xl text-ink">Outros questionários</h2>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.slug}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-display text-lg text-ink">{item.name}</p>
              <p className="text-sm text-ink-muted">{item.shortDescription}</p>
            </div>
            <Button href={item.href} variant="secondary" className="!min-h-10">
              Começar
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
