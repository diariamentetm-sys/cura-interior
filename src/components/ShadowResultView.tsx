"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/Button";
import { DiscoveryAftercare } from "@/components/DiscoveryAftercare";
import { ScoreBar } from "@/components/ScoreBar";
import { getShadowDimension } from "@/data/shadowDimensions";
import { shadowStorage } from "@/lib/shadowStorage";
import type { ShadowResult } from "@/types/shadow";

export function ShadowResultView() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ShadowResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setResult(shadowStorage.loadResult());
    setReady(true);
  }, []);

  function handleRetake() {
    shadowStorage.clearAll();
    startTransition(() => {
      router.push("/sombra/questionario");
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
          Complete o questionário da Sombra para receber seu mapa de padrões.
        </p>
        <Button href="/sombra/questionario">Explorar minha Sombra</Button>
      </div>
    );
  }

  const primary = getShadowDimension(result.primary.code);

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="animate-fade-up space-y-6 text-center">
        <p className="text-xs tracking-[0.22em] text-ink-muted uppercase">
          Sua Sombra em evidência
        </p>
        <div className="space-y-3">
          <p className="text-sm text-olive">O aspecto que mais aparece</p>
          <h1 className="font-display text-3xl text-ink sm:text-5xl">
            {primary.name}
          </h1>
          <p className="text-lg text-terracotta">
            {result.primary.percentage}% de afinidade
          </p>
        </div>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.resultIntro}
        </p>
      </section>

      <section className="animate-fade-in space-y-3">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          O que pode existir por trás disso
        </h2>
        <p className="text-base text-ink sm:text-lg">{primary.hiddenNeed}</p>
      </section>

      <section className="animate-fade-in space-y-4">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Quando essa Sombra aparece
        </h2>
        <ul className="space-y-2 text-base text-ink-muted">
          {primary.shadowExpression.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wine" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-fade-in space-y-3">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Caminho de integração
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.integrationPath}
        </p>
      </section>

      <section className="animate-fade-in space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Aspectos secundários
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Outras tendências que também aparecem com clareza nas suas respostas.
          </p>
        </div>

        <div className="space-y-5">
          {result.secondary.map((score) => {
            const dimension = getShadowDimension(score.code);
            return (
              <article key={score.code}>
                <h3 className="font-display text-xl text-ink sm:text-2xl">
                  {dimension.name}
                  <span className="text-base text-terracotta">
                    {" "}
                    — {score.percentage}%
                  </span>
                </h3>
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
            Mapa completo da Sombra
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Aspectos ordenados pela intensidade com que aparecem nas suas
            respostas.
          </p>
        </div>
        <div className="space-y-5">
          {result.ranked.map((score, index) => {
            const dimension = getShadowDimension(score.code);
            return (
              <ScoreBar
                key={score.code}
                name={dimension.shortName}
                percentage={score.percentage}
                rank={index + 1}
              />
            );
          })}
        </div>
      </section>

      <section className="animate-fade-in space-y-5">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Perguntas para reflexão
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Não há resposta certa. Use estas perguntas como um convite à
            observação.
          </p>
        </div>
        <ol className="space-y-4">
          {primary.reflectionQuestions.map((question, index) => (
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
