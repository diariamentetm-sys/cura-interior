"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { CognitiveDimensionChart } from "@/components/cognitive/CognitiveDimensionChart";
import { ShareResultCta } from "@/components/ShareResultCta";
import { AssessmentReferences } from "@/components/instruments/AssessmentReferences";
import { AssessmentResultActions, type ResultSaveStatus } from "@/components/instruments/AssessmentResultActions";
import { ResultIllustrationSlot } from "@/components/instruments/ResultIllustrationSlot";
import { useAuth } from "@/components/AuthProvider";
import {
  loadLocalCognitiveResult,
  recordCognitiveExploration,
} from "@/lib/cognitive/storage";
import { syncCognitiveResultToSupabase } from "@/lib/cognitive/sync";
import { recordInstrumentCompletion, loadPortalState } from "@/lib/portalProgress";
import {
  isResultPersisted,
  persistResultOnce,
  resultSyncToken,
} from "@/lib/resultPersistence";
import {
  getSuggestedInstrument,
  getSuggestionReason,
} from "@/data/instruments";
import {
  CATEGORY_LABELS,
  type CognitiveCategory,
  type CognitiveExplanationItem,
  type CognitiveResult,
} from "@/types/cognitive";

const dimensionCopy: Record<
  CognitiveCategory,
  { meaning: string; task: string }
> = {
  abstract: {
    meaning:
      "Perceber regras, analogias e padrões quando o material não depende só de texto.",
    task: "Sequências visuais, analogias e itens em que a lógica precisa ser vista no próprio padrão.",
  },
  numeric: {
    meaning:
      "Acompanhar relações de quantidade, proporção e operação dentro do problema.",
    task: "Comparar magnitudes, completar uma relação numérica ou seguir uma conta embutida no enunciado.",
  },
  spatial: {
    meaning: "Imaginar forma, rotação e encaixe no espaço.",
    task: "Itens em que a peça muda de posição ou precisa ser visualizada antes de encaixar.",
  },
  verbal: {
    meaning:
      "Compreender o enunciado, a relação entre palavras e o que se pode inferir da linguagem.",
    task: "Escolhas que dependem do sentido do texto, não de um cálculo ou de uma figura.",
  },
  deductive: {
    meaning:
      "Seguir premissas até uma conclusão compatível com as regras dadas.",
    task: "Problemas do tipo “se isto, então aquilo”, em que só uma alternativa respeita todas as condições.",
  },
};

function chosenLabel(item: CognitiveExplanationItem): string {
  if (!item.selectedOptionId) return "Sem resposta";
  return (
    item.options.find((option) => option.id === item.selectedOptionId)?.label ??
    "Alternativa não encontrada"
  );
}

function correctLabel(item: CognitiveExplanationItem): string {
  return (
    item.options.find((option) => option.id === item.correctOptionId)?.label ??
    "Alternativa correta"
  );
}

export function CognitiveResultView() {
  const { user, loading, refreshPortal } = useAuth();
  const [result, setResult] = useState<CognitiveResult | null>(null);
  const [ready, setReady] = useState(false);
  const [saveStatus, setSaveStatus] = useState<ResultSaveStatus>("saving");
  const [syncNote, setSyncNote] = useState<string | null>(null);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

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
    setReady(true);
  }, []);

  const persist = useCallback(async () => {
    if (!result || loading) return;
    if (!user) {
      setSaveStatus("guest");
      return;
    }
    const token = resultSyncToken(result);
    setSaveStatus("saving");
    try {
      if (!isResultPersisted(user.id, "perfil-cognitivo", token)) {
        const state = recordInstrumentCompletion("perfil-cognitivo", {
          primaryLabel: `${result.correctCount}/${result.totalQuestions} acertos`,
          completedAt: result.completedAt,
        });
        await persistResultOnce({
          userId: user.id,
          slug: "perfil-cognitivo",
          token,
          result: result as unknown as Record<string, unknown>,
          state,
        });
      }
      refreshPortal();
      setSaveStatus("saved");
      try {
        await syncCognitiveResultToSupabase(user.id, result);
        setSyncNote(null);
      } catch {
        setSyncNote(
          "O resultado entrou no Meu Mapa. O detalhe desta sessão não pôde ser enviado agora.",
        );
      }
    } catch {
      setSaveStatus("error");
    }
  }, [loading, refreshPortal, result, user]);

  useEffect(() => {
    if (!ready || !result || loading) return;
    void persist();
  }, [loading, persist, ready, result]);

  const suggested = useMemo(() => {
    const completed = loadPortalState().completions.map((item) => item.slug);
    return getSuggestedInstrument("perfil-cognitivo", completed);
  }, [result]);

  if (!ready) {
    return (
      <div className="py-24 text-center text-ink-muted">Abrindo resultado...</div>
    );
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
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-12 lg:items-start lg:gap-12">
      <div className="min-w-0 space-y-12 lg:col-span-7">
      <header className="space-y-4">
        <h1 className="display-xl text-4xl text-ink sm:text-5xl">
          Um mapa do raciocínio nesta sessão
        </h1>
        <p className="text-xs font-semibold tracking-wide text-accent-blue uppercase">
          {result.correctCount} acertos em {result.answeredCount} respostas
          ({result.totalQuestions} questões)
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          O que segue descreve como você interagiu com esta bateria agora.
          Não é um QI, não é diagnóstico e não estima o teto da sua capacidade.
        </p>
      </header>

      <div className="lg:hidden">
        <ResultIllustrationSlot label="o perfil cognitivo" />
      </div>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Dimensões exploradas
        </h2>
        <CognitiveDimensionChart scores={result.scoresByCategory} />
        <ul className="space-y-6">
          {result.scoresByCategory.map((score) => {
            const copy = dimensionCopy[score.category];
            return (
              <li key={score.category} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-ink">
                    {CATEGORY_LABELS[score.category]}
                  </h3>
                  <p className="text-sm font-semibold text-ink-muted">
                    {score.correct}/{score.total} · {score.label}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                  {copy.meaning} Nesta bateria, isso apareceu em tarefas como:{" "}
                  {copy.task} O desempenho desta sessão não autoriza concluir
                  uma capacidade geral além desses exercícios.
                </p>
              </li>
            );
          })}
        </ul>
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
          Gabarito comentado
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted">
          Só esta avaliação tem alternativa correta. Abra cada questão para ver
          o que você escolheu, a resolução e se houve acerto.
        </p>
        <ol className="space-y-3">
          {result.explanations.map((item, index) => {
            const open = openQuestionId === item.questionId;
            return (
              <li
                key={item.questionId}
                className="rounded-2xl border border-border bg-bg-elevated"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left"
                  aria-expanded={open}
                  onClick={() =>
                    setOpenQuestionId(open ? null : item.questionId)
                  }
                >
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-ink-muted uppercase">
                      {index + 1}. {CATEGORY_LABELS[item.category]}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-ink">
                      {item.prompt}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      item.isCorrect
                        ? "bg-accent-green/15 text-ink"
                        : "bg-sand text-ink"
                    }`}
                  >
                    {item.isCorrect ? "Acerto" : "Erro"}
                  </span>
                </button>
                {open ? (
                  <div className="space-y-2 border-t border-border px-4 py-4 text-sm leading-relaxed text-ink-muted">
                    <p>
                      <span className="font-semibold text-ink">
                        Sua resposta.{" "}
                      </span>
                      {chosenLabel(item)}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">
                        Resposta correta.{" "}
                      </span>
                      {correctLabel(item)}
                    </p>
                    <p>{item.explanation}</p>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
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
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Continue explorando suas habilidades
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
          Que tal colocar algumas habilidades em prática? Experimente desafios
          de memória e atenção e descubra novas maneiras de exercitar sua
          mente. São atividades complementares: não confirmam este resultado,
          não diagnosticam e não tratam capacidade cognitiva.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/habilidades-cognitivas/memoria">
            Exercitar memória
          </Button>
          <Button type="button" variant="secondary" disabled>
            Exercitar atenção · Em breve
          </Button>
        </div>
      </section>

      <AssessmentReferences slug="perfil-cognitivo" />

      <ShareResultCta
        title="Perfil Cognitivo"
        primaryLabel={`${result.correctCount} acertos em ${result.answeredCount} respostas`}
        shareUrl="/habilidades-cognitivas"
      />

      {syncNote ? (
        <p className="text-sm text-ink-muted" role="status">
          {syncNote}
        </p>
      ) : null}

      <AssessmentResultActions
        status={saveStatus}
        onRetrySave={() => void persist()}
        accountHref="/login?next=/habilidades-cognitivas/resultado"
        retryHref="/habilidades-cognitivas/avaliacao"
        suggestHref={suggested.href}
        suggestName={suggested.name}
        suggestReason={getSuggestionReason("perfil-cognitivo", suggested.slug)}
      />
      </div>

      <aside className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <ResultIllustrationSlot label="o perfil cognitivo" />
        </div>
      </aside>
    </div>
  );
}
