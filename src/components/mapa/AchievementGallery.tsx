import Link from "next/link";
import type { BadgeProgress } from "@/lib/meuMapa";

type AchievementGalleryProps = {
  items: BadgeProgress[];
};

export function AchievementGallery({ items }: AchievementGalleryProps) {
  return (
    <section className="space-y-6" aria-labelledby="conquistas-title">
      <div className="flex items-end justify-between gap-4">
        <header className="max-w-2xl space-y-3">
          <p className="section-eyebrow">Conquistas</p>
          <h2
            id="conquistas-title"
            className="display-xl text-3xl text-ink sm:text-4xl"
          >
            Marcos da exploração.
          </h2>
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
            Veja o que falta para cada insígnia — sem pressão e sem pontuação
            artificial.
          </p>
        </header>
        <Link
          href="/conquistas"
          className="shrink-0 text-sm font-semibold text-hero transition-opacity hover:opacity-75"
        >
          Ver todas
        </Link>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.badge.slug}>
            <article
              className={`rounded-[1.25rem] border bg-bg-elevated px-4 py-4 sm:px-5 ${
                item.unlocked ? "border-hero/30" : "border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm ${
                        item.unlocked
                          ? "bg-hero text-cream"
                          : "bg-sand text-ink-muted"
                      }`}
                      aria-hidden="true"
                    >
                      {item.badge.symbol}
                    </span>
                    <h3 className="font-display text-lg text-ink sm:text-xl">
                      {item.badge.name}
                    </h3>
                  </div>
                  <p className="text-sm text-ink-muted">
                    {item.badge.requiresCount
                      ? item.badge.requiresCount === 1
                        ? "Conclua 1 avaliação"
                        : `Conclua ${item.badge.requiresCount} avaliações diferentes`
                      : item.badge.message}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-semibold tabular-nums text-ink-muted">
                  {item.unlocked
                    ? "Feito"
                    : `${item.current}/${item.target}`}
                </p>
              </div>

              <div
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-border"
                role="progressbar"
                aria-valuenow={item.current}
                aria-valuemin={0}
                aria-valuemax={item.target}
                aria-label={`Progresso de ${item.badge.name}`}
              >
                <div
                  className={`h-full rounded-full transition-[width] duration-500 ${
                    item.unlocked ? "bg-accent-green" : "bg-hero"
                  }`}
                  style={{
                    width: `${Math.round(Math.min(1, item.ratio) * 100)}%`,
                  }}
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
