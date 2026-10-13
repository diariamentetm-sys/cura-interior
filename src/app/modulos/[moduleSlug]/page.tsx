import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { InstrumentCardVisual } from "@/components/instruments/instrumentVisuals";
import {
  getInstrumentsForModule,
  getModule,
  type ModuleSlug,
} from "@/data/instruments";

type PageProps = { params: Promise<{ moduleSlug: string }> };

export default async function ModulePage({ params }: PageProps) {
  const { moduleSlug } = await params;
  const module = getModule(moduleSlug as ModuleSlug);
  if (!module) notFound();

  const list = getInstrumentsForModule(module.slug);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 px-5 py-14 sm:px-8 sm:py-20">
      <header className="space-y-4">
        <p className="section-eyebrow">
          Módulo {String(module.order).padStart(2, "0")}
        </p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl">
          {module.name}
        </h1>
        <p className="max-w-2xl text-base text-ink-muted sm:text-lg">
          {module.shortDescription}
        </p>
      </header>

      <ul className="space-y-3">
        {list.map((instrument) => (
          <li key={instrument.slug}>
            <Link
              href={instrument.href}
              className="card-panel flex overflow-hidden transition-opacity hover:opacity-90"
            >
              <InstrumentCardVisual
                slug={instrument.slug}
                className="h-auto w-28 self-stretch px-2 py-4 sm:w-36 sm:px-3"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h2 className="font-display text-xl text-ink">
                    {instrument.name}
                  </h2>
                  <p className="text-sm text-ink-muted">
                    {instrument.shortDescription}
                  </p>
                  <p className="text-xs text-ink-muted">
                    {instrument.estimatedTime}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-accent">
                  Abrir
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {module.upcoming.length > 0 && (
        <section className="space-y-2 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Em breve
          </p>
          <p className="text-sm text-ink-muted">{module.upcoming.join(" · ")}</p>
        </section>
      )}

      <Button href="/explorar" variant="ghost">
        Voltar ao catálogo
      </Button>
    </div>
  );
}
