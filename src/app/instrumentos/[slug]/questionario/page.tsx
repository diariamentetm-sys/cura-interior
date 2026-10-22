"use client";

import { use, useMemo } from "react";
import { notFound } from "next/navigation";
import { LikertFlow } from "@/components/instruments/LikertFlow";
import { useAuth } from "@/components/AuthProvider";
import { getInstrument, type InstrumentSlug } from "@/data/instruments";
import { getLikertConfig } from "@/data/instruments/registry";
import { recordInstrumentCompletion } from "@/lib/portalProgress";

type PageProps = { params: Promise<{ slug: string }> };

export default function InstrumentQuestionnairePage({ params }: PageProps) {
  const { slug } = use(params);
  const { refreshPortal } = useAuth();
  const instrument = getInstrument(slug as InstrumentSlug);
  const config = getLikertConfig(slug);

  const onComplete = useMemo(() => {
    if (!instrument) return undefined;
    return async (result: { primaryLabel?: string }) => {
      recordInstrumentCompletion(instrument.slug, {
        primaryLabel: result.primaryLabel,
      });
      refreshPortal();
    };
  }, [instrument, refreshPortal]);

  if (!instrument || instrument.external || !config) {
    notFound();
    return null;
  }

  return (
    <LikertFlow
      instrumentSlug={instrument.slug}
      namespace={instrument.storageNamespace}
      items={config.items}
      resultPath={instrument.resultHref}
      calculateResults={config.calculate}
      onComplete={onComplete}
    />
  );
}
