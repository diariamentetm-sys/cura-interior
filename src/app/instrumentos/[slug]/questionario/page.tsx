"use client";

import { use, useMemo } from "react";
import { notFound, useRouter } from "next/navigation";
import { LikertFlow } from "@/components/instruments/LikertFlow";
import { useAuth } from "@/components/AuthProvider";
import {
  getInstrument,
  getSuggestedInstrument,
  type InstrumentSlug,
} from "@/data/instruments";
import { getLikertConfig } from "@/data/instruments/registry";
import { loadPortalState, recordInstrumentCompletion } from "@/lib/portalProgress";
import { saveAuthenticatedCompletion } from "@/lib/portalSync";

type PageProps = { params: Promise<{ slug: string }> };

export default function InstrumentQuestionnairePage({ params }: PageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const { user, refreshPortal } = useAuth();
  const instrument = getInstrument(slug as InstrumentSlug);
  const config = getLikertConfig(slug);

  const suggested = useMemo(() => {
    if (!instrument) return null;
    const completed = loadPortalState().completions.map((item) => item.slug);
    return getSuggestedInstrument(instrument.slug, completed);
  }, [instrument]);

  const onComplete = useMemo(() => {
    if (!instrument) return undefined;
    return async (result: { primaryLabel?: string }) => {
      const state = recordInstrumentCompletion(instrument.slug, {
        primaryLabel: result.primaryLabel,
      });
      refreshPortal();
      if (user) {
        await saveAuthenticatedCompletion({
          userId: user.id,
          slug: instrument.slug,
          result: result as Record<string, unknown>,
          state,
        });
      }
    };
  }, [instrument, refreshPortal, user]);

  if (!instrument || instrument.external || !config || !suggested) {
    notFound();
    return null;
  }

  return (
    <LikertFlow
      namespace={instrument.storageNamespace}
      items={config.items}
      resultPath={instrument.resultHref}
      calculateResults={config.calculate}
      onComplete={onComplete}
      saveLabel={user ? "Salvar no Meu Mapa" : "Entrar para salvar"}
      onSave={() => {
        if (!user) {
          router.push(`/login?next=${instrument.resultHref}`);
          return;
        }
        router.push(instrument.resultHref);
      }}
      retryHref={instrument.questionnaireHref}
      suggestHref={suggested.href}
      suggestName={suggested.name}
    />
  );
}
