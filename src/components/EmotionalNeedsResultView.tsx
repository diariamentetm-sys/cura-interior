"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/Button";
import { DiscoveryAftercare } from "@/components/DiscoveryAftercare";
import { ScoreBar } from "@/components/ScoreBar";
import { getEmotionalNeed, NEED_FAMILIES } from "@/data/emotionalNeeds";
import { emotionalNeedsStorage } from "@/lib/emotionalNeedsStorage";
import type { EmotionalNeedsResult } from "@/types/emotionalNeeds";

export function EmotionalNeedsResultView() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<EmotionalNeedsResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setResult(emotionalNeedsStorage.loadResult());
    setReady(true);
  }, []);

  function handleRetake() {
    emotionalNeedsStorage.clearAll();
    startTransition(() => {
      router.push("/necessidades-emocionais/questionario");
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
          Complete o questionário para receber seu mapa de necessidades
          emocionais.
        </p>
        <Button href="/necessidades-emocionais/questionario">
          Conhecer minhas necessidades
        </Button>
      </div>
    );
  }

  const primary = getEmotionalNeed(result.primary.code);
  const dominantFamily = NEED_FAMILIES[result.dominantFamily];
  const dominantFamilyAverage =
    result.families.find((family) => family.id === result.dominantFamily)
      ?.average ?? 0;

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="animate-fade-up space-y-5 text-center">
        <p className="text-xs tracking-[0.22em] text-ink-muted uppercase">
          Mapa de Necessidades Emocionais
        </p>
        <h1 className="font-display text-3xl text-ink sm:text-5xl">
          O que seu coração mais procura
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Algumas necessidades emocionais aparecem com mais força na maneira
          como buscamos segurança, vínculo, reconhecimento e espaço no mundo.
        </p>
      </section>

      <section className="animate-fade-up space-y-5 text-center">
        <p className="text-sm text-olive">Sua necessidade predominante</p>
        <h2 className="font-display text-3xl text-ink sm:text-5xl">
          {primary.name}
        </h2>
        <p className="text-lg text-terracotta">
          {result.primary.percentage}%
        </p>
        <p className="mx-auto max-w-xl text-sm italic text-ink-muted">
          “{primary.innerMessage}”
        </p>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.description}
        </p>
      </section>

      <section className="animate-fade-in space-y-4">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          O que essa necessidade procura
        </h2>
        <ul className="space-y-2 text-base text-ink-muted">
          {primary.whatYouSeek.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wine" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-fade-in space-y-4">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Quando essa necessidade encontra espaço
        </h2>
        <p className="text-sm text-ink-muted">Você tende a sentir:</p>
        <ul className="space-y-2 text-base text-ink-muted">
          {primary.whenItFeelsMet.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-olive" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-fade-in space-y-4">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Quando essa necessidade fica em falta
        </h2>
        <p className="text-sm text-ink-muted">Podem aparecer:</p>
        <ul className="space-y-2 text-base text-ink-muted">
          {primary.whenItFeelsMissing.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terracotta" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-fade-in space-y-3">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Quando a necessidade começa a conduzir demais
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.whenItBecomesDominant}
        </p>
      </section>

      <section className="animate-fade-in space-y-3">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Dando espaço para essa necessidade sem ser conduzido por ela
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {primary.balancePath}
        </p>
      </section>

      <section className="animate-fade-in space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Necessidades complementares
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Outras necessidades que também aparecem com clareza nas suas
            respostas.
          </p>
        </div>
        <div className="space-y-4">
          {result.complementary.map((score) => {
            const need = getEmotionalNeed(score.code);
            return (
              <article key={score.code}>
                <h3 className="font-display text-xl text-ink sm:text-2xl">
                  {need.name}
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
            Mapa completo
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Uma visão contemplativa das necessidades que aparecem nas suas
            respostas — não um ranking competitivo.
          </p>
        </div>
        <div className="space-y-5">
          {result.ranked.map((score, index) => {
            const need = getEmotionalNeed(score.code);
            return (
              <ScoreBar
                key={score.code}
                name={need.name}
                percentage={score.percentage}
                rank={index + 1}
              />
            );
          })}
        </div>
      </section>

      <section className="animate-fade-in space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Família predominante
          </h2>
          <p className="text-sm text-ink-muted sm:text-base">
            Agrupamento simples das necessidades por afinidade emocional.
          </p>
        </div>
        <div className="space-y-3">
          <p className="font-display text-2xl text-ink">
            {dominantFamily.name}
            <span className="text-base text-terracotta">
              {" "}
              — média {dominantFamilyAverage}%
            </span>
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
            Nesta leitura, a família de {dominantFamily.name.toLowerCase()}{" "}
            aparece com mais força. Isso sugere que as necessidades ligadas a{" "}
            {dominantFamily.codes
              .map((code) => getEmotionalNeed(code).name.toLowerCase())
              .join(", ")}{" "}
            exercem influência especial nas suas escolhas e reações.
          </p>
        </div>
        <div className="space-y-4 pt-2">
          {result.families.map((family) => (
            <ScoreBar
              key={family.id}
              name={family.name}
              percentage={family.average}
              rank={family.id === result.dominantFamily ? 1 : 4}
              highlightCount={1}
            />
          ))}
        </div>
      </section>

      {result.balances.length > 0 && (
        <section className="animate-fade-in space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Equilíbrios importantes
            </h2>
            <p className="text-sm text-ink-muted sm:text-base">
              Necessidades que pedem coexistência — não escolha exclusiva.
            </p>
          </div>
          <div className="space-y-8">
            {result.balances.map((balance) => (
              <article key={balance.id} className="space-y-3">
                <h3 className="font-display text-xl text-ink sm:text-2xl">
                  {balance.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
                  {balance.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

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
