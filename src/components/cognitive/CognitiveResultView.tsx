"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { CognitiveDimensionChart } from "@/components/cognitive/CognitiveDimensionChart";
import { ShareResultCta } from "@/components/ShareResultCta";
import { useAuth } from "@/components/AuthProvider";
import {
  loadLocalCognitiveResult,
  recordCognitiveExploration,
} from "@/lib/cognitive/storage";
import { syncCognitiveResultToSupabase } from "@/lib/cognitive/sync";
import { recordInstrumentCompletion } from "@/lib/portalProgress";
import {
  CATEGORY_LABELS,
  type CognitiveResult,
} from "@/types/cognitive";

export function CognitiveResultView() {
  const { user, refreshPortal } = useAuth();
  const [result, setResult] = useState<CognitiveResult | null>(null);
  const [showExplanations, setShowExplanations] = useState(false);
  const [mapSaved, setMapSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loaded = loadLocalCognitiveResult();
    setResult(loaded);
    if (loaded) {
      recordCognitiveExploration(loaded);
      recordInstrumentCompletion("perfil-cognitivo", {
        primaryLabel: `${loaded.correctCount}/${loaded.totalQuestions} acertos`,
        completedAt: loaded.completedAt,
      });
    }
  }, []);

  async function handleAddToMap() {
    if (!result) return;
    if (!user) {
      window.location.href =
        "/login?next=/habilidades-cognitivas/resultado";
      return;
    }
    setSaving(true);
    try {
      recordCognitiveExploration(result);
      recordInstrumentCompletion("perfil-cognitivo", {
        primaryLabel: `${result.correctCount}/${result.totalQuestions} acertos`,
        completedAt: result.completedAt,
      });
      await syncCognitiveResultToSupabase(user.id, result);
      refreshPortal();
      setMapSaved(true);
    } catch {
      setMapSaved(false);
    } finally {
      setSaving(false);
    }
  }

  if (!result) {
    return (
      <div className="mx-auto max-w-lg space-y-4 px-5 py-20 text-center">
        <p className="text-ink-muted">
          Nenhum resultado encontrado nesta sessão.
        </p>
        <Button href="/habilidades-cognitivas">Voltar ao início</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-12 px-5 py-12 sm:px-8 sm:py-16">
      <header className="space-y-4">
        <p className="section-eyebrow">Perfil Cognitivo</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl">
          Um mapa do raciocínio nesta sessão
        </h1>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-blue">
          {result.correctCount} acertos em {result.answeredCount} respostas
          ({result.totalQuestions} questões)
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          O que segue descreve como você interagiu com esta bateria agora —
          pontos de maior fluidez, áreas mais exigentes e notas sobre ritmo.
          Não é um QI, não é diagnóstico e não pretende dizer o teto da sua
          capacidade. Desempenho cognitivo oscila com contexto, prática e
          formato das tarefas.
        </p>
      </header>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Dimensões exploradas
        </h2>
        <CognitiveDimensionChart scores={result.scoresByCategory} />
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Análise desta sessão
        </h2>
        <ul className="space-y-5">
          {result.insights.map((insight) => (
            <li
              key={insight.id}
              className="text-base leading-relaxed text-ink-muted"
            >
              {insight.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Próximos passos
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-ink-muted sm:text-base">
          {result.recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Button href="/habilidades-cognitivas/memoria" variant="secondary">
          Abrir memória e atenção
        </Button>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl text-ink">Explicações</h2>
          <Button
            type="button"
            variant="ghost"
            className="!min-h-9 !px-3 !text-xs"
            onClick={() => setShowExplanations((v) => !v)}
          >
            {showExplanations ? "Ocultar" : "Mostrar"}
          </Button>
        </div>
        {showExplanations && (
          <ol className="space-y-4">
            {result.explanations.map((item, index) => (
              <li
                key={item.questionId}
                className="rounded-2xl border border-border bg-bg-elevated p-4 sm:p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {index + 1}. {CATEGORY_LABELS[item.category]}
                  {item.isCorrect ? " · acerto" : " · revisão"}
                </p>
                <p className="mt-2 text-sm font-medium text-ink sm:text-base">
                  {item.prompt}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.explanation}
                </p>
              </li>
            ))}
          </ol>
        )}
      </section>

      <ShareResultCta
        title="Perfil Cognitivo"
        primaryLabel={`${result.correctCount} acertos em ${result.answeredCount} respostas`}
        shareUrl="/habilidades-cognitivas"
      />

      <section className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          type="button"
          onClick={() => void handleAddToMap()}
          disabled={saving || mapSaved}
        >
          {mapSaved
            ? "Adicionado ao Meu Mapa"
            : user
              ? "Adicionar ao Meu Mapa"
              : "Entrar para salvar no mapa"}
        </Button>
        <Button href="/habilidades-cognitivas" variant="secondary">
          Nova sessão
        </Button>
        <Link
          href="/explorar"
          className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-semibold text-ink-muted hover:text-ink"
        >
          Voltar a Explorar
        </Link>
      </section>
    </div>
  );
}
