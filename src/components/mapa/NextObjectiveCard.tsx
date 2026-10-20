import { Button } from "@/components/Button";
import type { BadgeProgress, NextDiscovery } from "@/lib/meuMapa";

type NextObjectiveCardProps = {
  discovery: NextDiscovery;
  nextBadge: BadgeProgress | null;
};

export function NextObjectiveCard({
  discovery,
  nextBadge,
}: NextObjectiveCardProps) {
  const title =
    discovery.kind === "complete"
      ? discovery.title
      : discovery.instrument
        ? `Explore ${discovery.instrument.name.replace(/^Teste de |^Teste /i, "")}`
        : discovery.title;

  const body =
    discovery.instrument?.shortDescription ?? discovery.body;

  return (
    <section
      className="rounded-[1.75rem] border border-border bg-bg-elevated p-5 sm:p-7"
      aria-labelledby="proximo-objetivo-title"
    >
      <div className="flex items-center gap-2 text-ink-muted">
        <span aria-hidden="true" className="text-base">
          ▹
        </span>
        <p className="text-xs font-semibold tracking-[0.14em] uppercase">
          Seu próximo objetivo
        </p>
      </div>

      <h2
        id="proximo-objetivo-title"
        className="mt-4 font-display text-2xl text-ink sm:text-3xl"
      >
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
        {body}
      </p>

      {nextBadge && !nextBadge.unlocked ? (
        <div className="mt-6 flex gap-3 rounded-2xl bg-sand/70 px-4 py-4">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hero text-sm text-cream"
            aria-hidden="true"
          >
            {nextBadge.badge.symbol}
          </span>
          <div className="min-w-0 space-y-1">
            <p className="font-display text-base text-ink">
              Um passo para a conquista {nextBadge.badge.name}
            </p>
            <p className="text-sm text-ink-muted">
              Você já concluiu {nextBadge.current}{" "}
              {nextBadge.current === 1 ? "avaliação" : "avaliações"}. Falta{" "}
              {nextBadge.remaining} para desbloquear a insígnia.
            </p>
            <div
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-border"
              role="progressbar"
              aria-valuenow={nextBadge.current}
              aria-valuemin={0}
              aria-valuemax={nextBadge.target}
              aria-label={`Progresso da conquista ${nextBadge.badge.name}`}
            >
              <div
                className="h-full rounded-full bg-hero transition-[width] duration-500"
                style={{ width: `${Math.round(nextBadge.ratio * 100)}%` }}
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-6">
        <Button href={discovery.href} className="w-full sm:w-auto">
          {discovery.kind === "complete"
            ? discovery.ctaLabel
            : "Detalhar esta experiência →"}
        </Button>
      </div>
    </section>
  );
}
