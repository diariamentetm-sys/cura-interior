import { notFound } from "next/navigation";
import { InstrumentIntro } from "@/components/instruments/InstrumentIntro";
import { getInstrument, type InstrumentSlug } from "@/data/instruments";
import { editorialIntros } from "@/data/instruments/editorialIntros";
import { getLikertConfig } from "@/data/instruments/registry";

type PageProps = { params: Promise<{ slug: string }> };

export default async function InstrumentIntroPage({ params }: PageProps) {
  const { slug } = await params;
  const instrument = getInstrument(slug as InstrumentSlug);
  if (!instrument || instrument.external) notFound();

  const config = getLikertConfig(slug);
  const editorial = editorialIntros[instrument.slug];
  if (!config || !editorial) notFound();

  return (
    <InstrumentIntro
      instrument={instrument}
      editorial={editorial}
      questionCount={config.items.length}
    />
  );
}
