"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { ArchetypeBar } from "@/components/ArchetypeBar";
import { ArchetypeResult } from "@/components/ArchetypeResult";
import { Button } from "@/components/Button";
import { DiscoveryAftercare } from "@/components/DiscoveryAftercare";
import { DimensionResult } from "@/components/DimensionResult";
import { getArchetype } from "@/data/archetypes";
import {
  clearQuestionnaireData,
  loadResult,
} from "@/lib/storage";
import type { QuestionnaireResult } from "@/types/archetypes";

export function ResultView() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<QuestionnaireResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setResult(loadResult());
    setReady(true);
  }, []);

  function handleRetake() {
    clearQuestionnaireData();
    startTransition(() => {
      router.push("/arquetipos/questionario");
    });
  }

  if (!ready) {
    return (
      <div className="py-20 text-center text-ink-muted" aria-live="polite">
        Carregando seu resultado...
      </div>
    );
  }

  if (!result) {
    return (
      <div className="animate-fade-up space-y-6 py-16 text-center">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          Nenhum resultado encontrado
        </h1>
        <p className="mx-auto max-w-md text-ink-muted">
          Complete o questionário para receber sua leitura arquetípica.
        </p>
        <Button href="/arquetipos/questionario">Começar questionário</Button>
      </div>
    );
  }

  const complementary = result.complementary;

  return (
    <div className="space-y-16 sm:space-y-20">
      <ArchetypeResult score={result.primary} />

      <section className="animate-fade-in space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Arquétipos complementares
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Outras forças que também aparecem com clareza no seu perfil.
          </p>
        </div>

        <div className="space-y-8">
          {complementary.map((score) => {
            const archetype = getArchetype(score.code);
            return (
              <article
                key={score.code}
                className="border-t border-border/70 pt-6 first:border-t-0 first:pt-0"
              >
                <h3 className="font-display text-xl text-ink sm:text-2xl">
                  {archetype.name}
                  <span className="text-base text-terracotta">
                    {" "}
                    — {score.percentage}%
                  </span>
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-muted">
                  {archetype.complementaryNote}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="animate-fade-in space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Mapa dos 12 arquétipos
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Afinidade proporcional com cada arquétipo, ordenada do mais forte ao
            mais sutil.
          </p>
        </div>
        <div className="space-y-5">
          {result.ranked.map((score, index) => (
            <ArchetypeBar key={score.code} score={score} rank={index + 1} />
          ))}
        </div>
      </section>

      <section className="animate-fade-in space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Leitura por dimensão
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Uma visão separada do que move, do que desestabiliza e de como você
            tende a agir.
          </p>
        </div>
        <div className="space-y-2">
          {result.byDimension.motivation && (
            <DimensionResult
              dimension="motivation"
              score={result.byDimension.motivation}
            />
          )}
          {result.byDimension.behavior && (
            <DimensionResult
              dimension="behavior"
              score={result.byDimension.behavior}
            />
          )}
          {result.byDimension.fear && (
            <DimensionResult
              dimension="fear"
              score={result.byDimension.fear}
            />
          )}
        </div>
      </section>

      <DiscoveryAftercare />

      <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
        <Button onClick={handleRetake} disabled={isPending}>
          {isPending ? "Reiniciando..." : "Refazer questionário"}
        </Button>
        <Button href="/arquetipos" variant="secondary">
          Voltar à experiência
        </Button>
      </div>
    </div>
  );
}
