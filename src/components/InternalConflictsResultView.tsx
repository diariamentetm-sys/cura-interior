"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/Button";
import { DiscoveryAftercare } from "@/components/DiscoveryAftercare";
import { ScoreBar } from "@/components/ScoreBar";
import { getInternalConflict } from "@/data/internalConflicts";
import {
  getConflictTypeDescription,
  getConflictTypeLabel,
} from "@/lib/internalConflictScoring";
import { internalConflictsStorage } from "@/lib/internalConflictsStorage";
import type { ConflictScore, InternalConflictsResult } from "@/types/internalConflicts";

function PoleBars({ conflict }: { conflict: ConflictScore }) {
  const data = getInternalConflict(conflict.code);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm text-ink sm:text-base">
            {data.poleA.name}
          </span>
          <span className="text-sm tabular-nums text-wine">
            {conflict.poleA.percentage}%
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-wine transition-[width] duration-700"
            style={{ width: `${conflict.poleA.percentage}%` }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm text-ink sm:text-base">
            {data.poleB.name}
          </span>
          <span className="text-sm tabular-nums text-olive">
            {conflict.poleB.percentage}%
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-olive/80 transition-[width] duration-700"
            style={{ width: `${conflict.poleB.percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function InternalConflictsResultView() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<InternalConflictsResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setResult(internalConflictsStorage.loadResult());
    setReady(true);
  }, []);

  function handleRetake() {
    internalConflictsStorage.clearAll();
    startTransition(() => {
      router.push("/conflitos-internos/questionario");
    });
  }

  if (!ready) {
    return (
      <div className="py-20 text-center text-ink-muted" aria-live="polite">
        Carregando sua leitura...
      </div>
    );
  }

  if (!result) {
    return (
      <div className="animate-fade-up space-y-6 py-16 text-center">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          Nenhuma leitura encontrada
        </h1>
        <p className="mx-auto max-w-md text-ink-muted">
          Complete o questionário para receber seu mapa de conflitos internos.
        </p>
        <Button href="/conflitos-internos/questionario">
          Conhecer meus conflitos
        </Button>
      </div>
    );
  }

  const primaryData = getInternalConflict(result.primary.code);

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="animate-fade-up space-y-5 text-center">
        <p className="text-xs tracking-[0.22em] text-ink-muted uppercase">
          Mapa de Conflitos Internos
        </p>
        <h1 className="font-display text-3xl text-ink sm:text-5xl">
          A tensão que mais aparece em você
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Duas necessidades importantes parecem puxar você em direções
          diferentes.
        </p>
      </section>

      <section className="animate-fade-up space-y-6 text-center">
        <h2 className="font-display text-3xl text-ink sm:text-5xl">
          {primaryData.name}
        </h2>
        <p className="text-lg text-terracotta">
          Intensidade do conflito: {result.primary.intensity}%
        </p>
        <p className="text-sm tracking-[0.14em] text-olive uppercase">
          {getConflictTypeLabel(result.primary.type)}
        </p>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-ink-muted">
          {getConflictTypeDescription(result.primary.type, result.primary.code)}
        </p>
      </section>

      <section className="animate-fade-in space-y-6">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Intensidade dos dois polos
        </h2>
        <PoleBars conflict={result.primary} />
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primaryData.description}
        </p>
      </section>

      <section className="animate-fade-in grid gap-10 sm:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-display text-xl text-ink sm:text-2xl">
            {primaryData.poleA.name} tenta proteger
          </h2>
          <p className="text-sm italic text-ink-muted">
            “{primaryData.poleA.innerMessage}”
          </p>
          <ul className="space-y-2 text-base text-ink-muted">
            {primaryData.poleA.protects.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wine" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-display text-xl text-ink sm:text-2xl">
            {primaryData.poleB.name} tenta proteger
          </h2>
          <p className="text-sm italic text-ink-muted">
            “{primaryData.poleB.innerMessage}”
          </p>
          <ul className="space-y-2 text-base text-ink-muted">
            {primaryData.poleB.protects.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-olive" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="animate-fade-in space-y-8">
        <article className="space-y-3">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Quando {primaryData.poleA.name.toLowerCase()} ocupa espaço demais
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
            {primaryData.poleA.whenDominates}
          </p>
        </article>
        <article className="space-y-3">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Quando {primaryData.poleB.name.toLowerCase()} ocupa espaço demais
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
            {primaryData.poleB.whenDominates}
          </p>
        </article>
      </section>

      <section className="animate-fade-in space-y-4">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Quando os dois lados começam a conversar
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primaryData.integrationPath}
        </p>
        <p className="max-w-2xl text-base text-ink">
          Pergunta-chave:{" "}
          <span className="italic">“{primaryData.integrationQuestion}”</span>
        </p>
      </section>

      <section className="animate-fade-in space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Conflitos complementares
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Outras tensões que também aparecem com clareza nas suas respostas.
          </p>
        </div>
        <div className="space-y-8">
          {result.complementary.map((conflict) => {
            const data = getInternalConflict(conflict.code);
            return (
              <article key={conflict.code} className="space-y-4">
                <h3 className="font-display text-xl text-ink sm:text-2xl">
                  {data.name}
                  <span className="text-base text-terracotta">
                    {" "}
                    — {conflict.intensity}%
                  </span>
                </h3>
                <PoleBars conflict={conflict} />
              </article>
            );
          })}
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
          {result.relationshipNote}
        </p>
      </section>

      <section className="animate-fade-in space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Mapa completo
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Intensidade das tensões internas — uma visão contemplativa, não um
            ranking competitivo.
          </p>
        </div>
        <div className="space-y-5">
          {result.ranked.map((conflict, index) => (
            <ScoreBar
              key={conflict.code}
              name={conflict.name}
              percentage={conflict.intensity}
              rank={index + 1}
            />
          ))}
        </div>
      </section>

      <section className="animate-fade-in space-y-5">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Perguntas para reflexão
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Use estas perguntas como um convite à observação.
          </p>
        </div>
        <ol className="space-y-4">
          {primaryData.reflectionQuestions.map((question, index) => (
            <li key={question} className="flex gap-4">
              <span className="font-display text-xl text-terracotta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-base leading-relaxed text-ink">
                {question}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <DiscoveryAftercare />

      <div className="pt-2">
        <Button onClick={handleRetake} disabled={isPending}>
          {isPending ? "Reiniciando..." : "Refazer questionário"}
        </Button>
      </div>
    </div>
  );
}
