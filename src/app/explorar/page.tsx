"use client";

import Link from "next/link";
import { modules, getInstrumentsForModule } from "@/data/instruments";
import { instrumentVisualThemes } from "@/components/instruments/instrumentVisuals";

export default function ExplorarPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="animate-fade-up max-w-3xl space-y-5">
        <p className="section-eyebrow">Explorar</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl md:text-6xl">
          Escolha um território.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Cinco módulos. Questionários independentes. Sem ordem obrigatória.
        </p>
      </div>

      <ol className="mt-12 space-y-4">
        {modules.map((module) => {
          const instruments = getInstrumentsForModule(module.slug);
          const lead = instruments[0];
          const theme = lead ? instrumentVisualThemes[lead.slug] : null;

          return (
            <li key={module.slug}>
              <Link
                href={module.href}
                className="card-panel group flex overflow-hidden transition-opacity hover:opacity-90"
              >
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 sm:p-7">
                  <p className="section-eyebrow text-[0.65rem]">
                    Módulo {String(module.order).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-2xl text-ink sm:text-3xl">
                    {module.name}
                  </h2>
                  <p className="text-sm text-ink-muted sm:text-base">
                    {module.shortDescription}
                  </p>
                  <p className="text-xs text-ink-muted">
                    {instruments.map((i) => i.name).join(" · ")}
                    {module.upcoming.length > 0
                      ? ` · em breve: ${module.upcoming[0]}`
                      : ""}
                  </p>
                </div>

                <div
                  className={`relative w-28 shrink-0 self-stretch sm:w-36 md:w-40 ${theme?.panel ?? "bg-sand"}`}
                  aria-hidden="true"
                >
                  {theme?.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={theme.thumb}
                      alt=""
                      className="h-full w-full object-contain object-center transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
