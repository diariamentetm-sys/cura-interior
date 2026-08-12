"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/Button";
import { DiscoveryAftercare } from "@/components/DiscoveryAftercare";
import { ScoreBar } from "@/components/ScoreBar";
import { getPersonaDimension } from "@/data/personaDimensions";
import { personaStorage } from "@/lib/personaStorage";
import type { PersonaResult } from "@/types/persona";

function TraitList({
  title,
  traits,
  tone = "outer",
}: {
  title: string;
  traits: string[];
  tone?: "outer" | "inner";
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-xl text-ink sm:text-2xl">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {traits.map((trait) => (
          <li
            key={trait}
            className={`border px-3 py-1.5 text-xs tracking-[0.14em] uppercase ${
              tone === "outer"
                ? "border-wine/30 text-wine"
                : "border-olive/35 text-olive"
            }`}
          >
            {trait}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PersonaResultView() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<PersonaResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setResult(personaStorage.loadResult());
    setReady(true);
  }, []);

  function handleRetake() {
    personaStorage.clearAll();
    startTransition(() => {
      router.push("/persona/questionario");
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
          Complete o questionário da Persona para receber seu mapa de papéis
          sociais.
        </p>
        <Button href="/persona/questionario">Conhecer minha Persona</Button>
      </div>
    );
  }

  const primary = getPersonaDimension(result.primary.code);
  const shownTraits = [
    ...new Set([
      ...primary.shownTraits,
      ...result.complementary.flatMap(
        (score) => getPersonaDimension(score.code).shownTraits.slice(0, 1),
      ),
    ]),
  ].slice(0, 5);

  const hiddenTraits = [
    ...new Set([
      ...primary.hiddenTraits,
      ...result.complementary.flatMap(
        (score) => getPersonaDimension(score.code).hiddenTraits.slice(0, 1),
      ),
    ]),
  ].slice(0, 5);

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="animate-fade-up space-y-5 text-center">
        <p className="text-xs tracking-[0.22em] text-ink-muted uppercase">
          Mapa da Persona
        </p>
        <h1 className="font-display text-3xl text-ink sm:text-5xl">
          A face que você mostra ao mundo
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Conheça os papéis que aparecem com mais força na construção da sua
          Persona.
        </p>
      </section>

      <section className="animate-fade-in space-y-4 text-center">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Seu Índice de Identificação com a Persona
        </h2>
        <p className="font-display text-5xl text-terracotta">
          {result.index.value}%
        </p>
        <p className="text-lg text-ink">{result.index.label}</p>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted">
          {result.index.description}
        </p>
      </section>

      <section className="animate-fade-up space-y-5 text-center">
        <p className="text-sm text-olive">Persona predominante</p>
        <h2 className="font-display text-3xl text-ink sm:text-5xl">
          A {primary.name}
        </h2>
        <p className="text-lg text-terracotta">
          {result.primary.percentage}%
        </p>
        <p className="mx-auto max-w-xl text-sm italic text-ink-muted">
          “{primary.socialMessage}”
        </p>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.description}
        </p>
      </section>

      <section className="animate-fade-in space-y-4">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          O que você costuma mostrar
        </h2>
        <ul className="space-y-2 text-base text-ink-muted">
          {primary.whatOthersSee.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wine" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-fade-in space-y-4">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          O que talvez apareça menos
        </h2>
        <ul className="space-y-2 text-base text-ink-muted">
          {primary.whatMayStayHidden.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-olive" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-fade-in space-y-3">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          O que essa Persona pode proteger
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.underlyingNeed}
        </p>
      </section>

      <section className="animate-fade-in space-y-3">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Quando esse papel ocupa espaço demais
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.whenItBecomesRigid}
        </p>
      </section>

      <section className="animate-fade-in space-y-3">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Aproximando o que você sente do que você mostra
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.integrationPath}
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
          O objetivo não é abandonar a Persona. É permitir que ela seja uma das
          suas formas de existir — e não a única.
        </p>
      </section>

      <section className="animate-fade-in space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Personas complementares
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Outros papéis que também aparecem com clareza na sua apresentação
            social.
          </p>
        </div>
        <div className="space-y-4">
          {result.complementary.map((score) => {
            const dimension = getPersonaDimension(score.code);
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
            Mapa da Persona
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Uma visão contemplativa dos papéis que aparecem nas suas respostas —
            não um ranking competitivo.
          </p>
        </div>
        <div className="space-y-5">
          {result.ranked.map((score, index) => {
            const dimension = getPersonaDimension(score.code);
            return (
              <ScoreBar
                key={score.code}
                name={dimension.name}
                percentage={score.percentage}
                rank={index + 1}
              />
            );
          })}
        </div>
      </section>

      <section className="animate-fade-in space-y-8 border-y border-border/70 py-10">
        <div className="space-y-2 text-center">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Por dentro × Por fora
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-ink-muted sm:text-base">
            Possíveis diferenças entre a expressão externa e a experiência
            interna — sem oposição absoluta.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <TraitList title="O que mostro" traits={shownTraits} tone="outer" />
          <TraitList
            title="O que posso esconder"
            traits={hiddenTraits}
            tone="inner"
          />
        </div>
      </section>

      <section className="animate-fade-in space-y-5">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Perguntas para reflexão
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Use estas perguntas como um convite à observação — não como prova.
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
