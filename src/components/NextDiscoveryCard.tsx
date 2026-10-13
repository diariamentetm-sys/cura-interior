import { Button } from "@/components/Button";
import { getInstrument, type InstrumentSlug } from "@/data/instruments";

type NextDiscoveryCardProps = {
  nextSlug: InstrumentSlug | null;
  completedCount: number;
};

export function NextDiscoveryCard({
  nextSlug,
  completedCount,
}: NextDiscoveryCardProps) {
  if (!nextSlug) {
    return (
      <section className="card-panel space-y-5 p-7 sm:p-9">
        <p className="section-eyebrow">Mapa</p>
        <h2 className="display-xl text-3xl text-ink sm:text-4xl">
          Você já explorou o catálogo atual.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
          Revisitar resultados também conta. Novos questionários entram nos
          módulos sem mudar os que você já fez.
        </p>
        <Button href="/explorar" variant="secondary">
          Voltar ao catálogo
        </Button>
      </section>
    );
  }

  const next = getInstrument(nextSlug);
  if (!next) return null;

  return (
    <section className="card-panel space-y-5 p-7 sm:p-9">
      <p className="section-eyebrow">Se quiser continuar...</p>
      <h2 className="display-xl text-3xl text-ink sm:text-4xl">{next.name}</h2>
      <p className="max-w-2xl text-base text-ink-muted">
        {next.shortDescription} · {next.estimatedTime}
      </p>
      <p className="text-sm text-ink-muted">
        {completedCount} avaliação{completedCount === 1 ? "" : "ões"} no mapa
      </p>
      <Button href={next.href}>Abrir questionário</Button>
    </section>
  );
}
