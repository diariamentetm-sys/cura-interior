import { Button } from "@/components/Button";
import { getQuestionnaire, type QuestionnaireSlug } from "@/data/questionnaires";

type NextDiscoveryCardProps = {
  nextSlug: QuestionnaireSlug | null;
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
          Seu primeiro mapa
          <br />
          já está formado.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
          Isso não é um fim. É só mais pontos para observar quem você está se
          tornando. Revisitar também conta.
        </p>
        <Button href="/explorar" variant="secondary">
          Explorar de novo
        </Button>
      </section>
    );
  }

  const next = getQuestionnaire(nextSlug)!;

  return (
    <section className="card-panel space-y-5 p-7 sm:p-9">
      <div className="flex items-start justify-between gap-4">
        <p className="section-eyebrow">Se quiser continuar...</p>
        <span className="stage-number text-5xl text-accent-blue">
          {String(next.order).padStart(2, "0")}
        </span>
      </div>
      <h2 className="display-xl text-3xl text-ink sm:text-4xl">
        Próximo olhar:
        <br />
        {next.name}.
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
        {completedCount === 0
          ? "Todo mapa começa com um primeiro ponto. Sem drama."
          : `Você já deu alguns passos. O próximo ponto pode ser ${next.name}.`}
      </p>
      <p className="text-sm font-semibold text-accent">{next.guidingQuestion}</p>
      <p className="max-w-2xl text-base text-ink-muted">{next.description}</p>
      <Button href={next.href}>Continuar minha descoberta</Button>
    </section>
  );
}
