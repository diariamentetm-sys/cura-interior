"use client";

import { use, useCallback, useEffect, useMemo, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { InstrumentResultShell } from "@/components/instruments/InstrumentResultShell";
import { ResponseReview } from "@/components/instruments/ResponseReview";
import type { ResultSaveStatus } from "@/components/instruments/AssessmentResultActions";
import { useAuth } from "@/components/AuthProvider";
import {
  getInstrument,
  getSuggestedInstrument,
  getSuggestionReason,
  type InstrumentSlug,
} from "@/data/instruments";
import { getLikertConfig } from "@/data/instruments/registry";
import { loadInstrumentResult } from "@/lib/instrumentStorage";
import { loadPortalState, recordInstrumentCompletion } from "@/lib/portalProgress";
import {
  isResultPersisted,
  persistResultOnce,
  resultSyncToken,
} from "@/lib/resultPersistence";
import type { LikertResultBase } from "@/types/likert";

type PageProps = { params: Promise<{ slug: string }> };

export default function InstrumentResultPage({ params }: PageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const { user, loading, refreshPortal } = useAuth();
  const meta = getInstrument(slug as InstrumentSlug);
  const config = getLikertConfig(slug);
  const [result, setResult] = useState<LikertResultBase | null>(null);
  const [ready, setReady] = useState(false);
  const [saveStatus, setSaveStatus] = useState<ResultSaveStatus>("saving");

  const suggested = useMemo(() => {
    if (!meta) return null;
    const completed = loadPortalState().completions.map((item) => item.slug);
    return getSuggestedInstrument(meta.slug, completed);
  }, [meta]);

  useEffect(() => {
    if (!meta || meta.external) return;
    setResult(loadInstrumentResult<LikertResultBase>(meta.storageNamespace));
    setReady(true);
  }, [meta]);

  const persist = useCallback(async () => {
    if (!meta || !result || loading) return;
    if (!user) {
      setSaveStatus("guest");
      return;
    }
    const token = resultSyncToken(result);
    if (isResultPersisted(user.id, meta.slug, token)) {
      setSaveStatus("saved");
      return;
    }
    setSaveStatus("saving");
    try {
      const state = recordInstrumentCompletion(meta.slug, {
        primaryLabel: result.primaryLabel,
        completedAt: result.calculatedAt,
      });
      await persistResultOnce({
        userId: user.id,
        slug: meta.slug,
        token,
        result: result as unknown as Record<string, unknown>,
        state,
      });
      refreshPortal();
      setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
    }
  }, [loading, meta, refreshPortal, result, user]);

  useEffect(() => {
    if (!ready || !result || loading) return;
    void persist();
  }, [loading, persist, ready, result]);

  if (!meta || meta.external || !config || !suggested) {
    notFound();
    return null;
  }

  const instrument = meta;

  if (!ready) {
    return (
      <div className="py-24 text-center text-ink-muted">Abrindo resultado...</div>
    );
  }

  if (!result) {
    return (
      <div className="py-24 text-center text-ink-muted">
        Nenhum resultado encontrado.{" "}
        <button
          type="button"
          className="font-semibold text-accent"
          onClick={() => router.push(instrument.href)}
        >
          Iniciar teste
        </button>
      </div>
    );
  }

  const scored = result;

  return (
    <InstrumentResultShell
      slug={instrument.slug}
      eyebrow={instrument.name}
      title={scored.resultTitle || scored.primaryLabel || instrument.name}
      disclaimer="Resultado desta sessão. Não constitui diagnóstico psicológico nem substitui avaliação profissional."
      primaryLabel={scored.primaryLabel}
      summary={scored.summary}
      dimensions={scored.dimensions}
      closingNote={scored.closingNote}
      retryHref={instrument.questionnaireHref}
      shareHref={instrument.href}
      suggestHref={suggested.href}
      suggestName={suggested.name}
      suggestReason={getSuggestionReason(instrument.slug, suggested.slug)}
      saveStatus={saveStatus}
      accountHref={`/login?next=${encodeURIComponent(instrument.resultHref)}`}
      onRetrySave={() => void persist()}
    >
      <ResponseReview items={config.items} answers={scored.answers} />
    </InstrumentResultShell>
  );
}
