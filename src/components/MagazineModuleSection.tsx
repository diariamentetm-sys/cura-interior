import Link from "next/link";
import { InstrumentMagazineCard } from "@/components/InstrumentMagazineCard";
import {
  getInstrumentsForModule,
  type ModuleMeta,
} from "@/data/instruments";

type MagazineModuleSectionProps = {
  module: ModuleMeta;
};

export function MagazineModuleSection({ module }: MagazineModuleSectionProps) {
  const list = getInstrumentsForModule(module.slug);

  return (
    <section className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:py-14">
        <header className="max-w-2xl space-y-4">
          <p className="section-eyebrow">
            Módulo {String(module.order).padStart(2, "0")}
          </p>
          <h2 className="display-xl text-4xl text-ink sm:text-5xl md:text-[3.25rem]">
            {module.name}
            {module.name.includes(".") ? "" : "."}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {module.shortDescription}
          </p>
          {module.upcoming.length > 0 && (
            <p className="text-xs text-ink-muted">
              Em breve: {module.upcoming.slice(0, 2).join(" · ")}
            </p>
          )}
        </header>

        <div className="flex min-w-0 flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {list.map((instrument) => (
              <InstrumentMagazineCard
                key={instrument.slug}
                instrument={instrument}
              />
            ))}
          </div>

          <div className="flex justify-end">
            <Link
              href={module.href}
              className="text-sm font-semibold tracking-wide text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Ver todos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
