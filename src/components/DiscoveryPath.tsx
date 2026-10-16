import Link from "next/link";
import { modules, getInstrumentsForModule } from "@/data/instruments";

/** Compact module grid — replaces the old layer trail. */
export function DiscoveryPath() {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="section-eyebrow">Como funciona</p>
        <h2 className="display-xl text-4xl text-ink sm:text-5xl md:text-6xl">
          Cinco territórios.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Escolha um módulo, abra um questionário e receba o resultado na hora.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {modules.map((module) => {
          const list = getInstrumentsForModule(module.slug);
          return (
            <article
              key={module.slug}
              className="flex flex-col rounded-2xl border border-border bg-bg-elevated p-4 sm:p-5"
            >
              <p className="section-eyebrow mb-3 text-[0.65rem]">
                Módulo {String(module.order).padStart(2, "0")}
              </p>
              <h3 className="font-display text-lg text-ink">{module.name}</h3>
              <ul className="mt-4 space-y-3">
                {list.map((instrument) => (
                  <li key={instrument.slug}>
                    <Link
                      href={instrument.href}
                      className="block space-y-1 transition-opacity hover:opacity-75"
                    >
                      <p className="font-display text-base text-ink">
                        {instrument.name}
                      </p>
                      <p className="text-sm text-ink-muted">
                        {instrument.shortDescription}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
