import Link from "next/link";
import { Button } from "@/components/Button";
import { getDiaryEntries } from "@/lib/meuMapa";
import type { PortalState } from "@/lib/portalProgress";

type DiscoveryDiaryProps = {
  portal: PortalState;
};

export function DiscoveryDiary({ portal }: DiscoveryDiaryProps) {
  const entries = getDiaryEntries(portal).slice(0, 6);

  return (
    <section className="space-y-6" aria-labelledby="diario-title">
      <div className="flex items-end justify-between gap-4">
        <header className="max-w-2xl space-y-3">
          <p className="section-eyebrow">Diário de Descobertas</p>
          <h2
            id="diario-title"
            className="display-xl text-3xl text-ink sm:text-4xl"
          >
            Sua trajetória.
          </h2>
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
            Um registro privado do que você já explorou. Só você vê este diário.
          </p>
        </header>
        <Link
          href="/meu-mapa/historico"
          className="shrink-0 text-sm font-semibold text-hero transition-opacity hover:opacity-75"
        >
          Histórico completo
        </Link>
      </div>

      {entries.length === 0 ? (
        <div className="rounded-[1.5rem] border border-dashed border-border px-5 py-8 text-sm text-ink-muted">
          Ainda não há descobertas registradas. Quando você concluir uma
          avaliação, ela aparece aqui.
        </div>
      ) : (
        <ul className="space-y-3">
          {entries.map((entry) => (
            <li key={`${entry.slug}-${entry.completedAt}`}>
              <article className="flex flex-col gap-3 rounded-[1.5rem] border border-border bg-bg-elevated px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="min-w-0 space-y-1">
                  <p className="text-xs font-semibold tracking-[0.12em] text-hero uppercase">
                    {entry.territoryName}
                  </p>
                  <h3 className="font-display text-xl text-ink">
                    {entry.meta.name}
                  </h3>
                  <p className="text-sm text-ink-muted">
                    {entry.primaryLabel ?? "Resultado disponível"} ·{" "}
                    {new Date(entry.completedAt).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <Button href={entry.meta.resultHref} variant="secondary">
                  Ver relatório
                </Button>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
