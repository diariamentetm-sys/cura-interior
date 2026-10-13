"use client";

import Link from "next/link";
import { modules } from "@/data/instruments";
import { getInstrumentsForModule } from "@/data/instruments";

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
          return (
            <li key={module.slug}>
              <Link
                href={module.href}
                className="card-panel block space-y-3 p-6 transition-opacity hover:opacity-90 sm:p-7"
              >
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
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
