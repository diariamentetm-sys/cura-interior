"use client";

import { use, useEffect, useMemo, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { InstrumentResultShell } from "@/components/instruments/InstrumentResultShell";
import { useAuth } from "@/components/AuthProvider";
import {
  getInstrument,
  getSuggestedInstrument,
  type InstrumentSlug,
} from "@/data/instruments";
import { getLikertConfig } from "@/data/instruments/registry";
import { loadInstrumentResult } from "@/lib/instrumentStorage";
import { loadPortalState, recordInstrumentCompletion } from "@/lib/portalProgress";
import { saveAuthenticatedCompletion } from "@/lib/portalSync";
import type { LikertResultBase } from "@/types/likert";

type PageProps = { params: Promise<{ slug: string }> };

export default function InstrumentResultPage({ params }: PageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const { user, refreshPortal } = useAuth();
  const meta = getInstrument(slug as InstrumentSlug);
  const config = getLikertConfig(slug);
  const [result, setResult] = useState<LikertResultBase | null>(null);
  const [saved, setSaved] = useState(false);

  const suggested = useMemo(() => {
    if (!meta) return null;
    const completed = loadPortalState().completions.map((item) => item.slug);
    return getSuggestedInstrument(meta.slug, completed);
  }, [meta]);

  useEffect(() => {
    if (!meta || meta.external) return;
    setResult(loadInstrumentResult<LikertResultBase>(meta.storageNamespace));
  }, [meta]);

  if (!meta || meta.external || !config || !suggested) {
    notFound();
    return null;
  }

  const instrument = meta;

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

  async function handleSave() {
    if (!user) {
      router.push(`/login?next=${instrument.resultHref}`);
      return;
    }
    const state = recordInstrumentCompletion(instrument.slug, {
      primaryLabel: scored.primaryLabel,
    });
    await saveAuthenticatedCompletion({
      userId: user.id,
      slug: instrument.slug,
      result: scored as unknown as Record<string, unknown>,
      state,
    });
    refreshPortal();
    setSaved(true);
  }

  return (
    <InstrumentResultShell
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
      onSave={() => void handleSave()}
      saveLabel={
        saved
          ? "Salvo no Meu Mapa"
          : user
            ? "Salvar no Meu Mapa"
            : "Entrar para salvar"
      }
      saveDisabled={saved}
    />
  );
}
