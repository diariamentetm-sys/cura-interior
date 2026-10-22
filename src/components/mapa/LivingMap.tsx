"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import {
  getPathStepLabel,
  getPathStepStatus,
  getShortTerritoryName,
  type TerritoryProgress,
} from "@/lib/meuMapa";
import { getInstrumentStatus, type PortalState } from "@/lib/portalProgress";
import { instrumentVisualThemes } from "@/components/instruments/instrumentVisuals";

type LivingMapProps = {
  territories: TerritoryProgress[];
  portal: PortalState;
};

const nodeTone: Record<string, string> = {
  personalidade: "bg-[#f5b8c4] text-ink",
  "inteligencia-cognicao": "bg-[#c5b1e6] text-ink",
  relacionamentos: "bg-[#fd9e88] text-ink",
  autopercepcao: "bg-[#9bd6a6] text-ink",
  "carreira-proposito": "bg-[#fbe085] text-ink",
};

export function LivingMap({ territories, portal }: LivingMapProps) {
  const groupId = useId();
  const nextIndex = territories.findIndex(
    (_, index) => getPathStepStatus(territories, index) === "next",
  );
  const defaultSlug =
    territories[nextIndex]?.module.slug ??
    territories.find((item) => item.state !== "complete")?.module.slug ??
    territories[0]?.module.slug ??
    null;

  const [selectedSlug, setSelectedSlug] = useState(defaultSlug);

  const selected =
    territories.find((item) => item.module.slug === selectedSlug) ??
    territories[0];

  return (
    <section className="w-full space-y-8" aria-labelledby={`${groupId}-title`}>
      <header className="mx-auto max-w-xl space-y-3 text-center">
        <p className="section-eyebrow">Mapa Vivo</p>
        <h2
          id={`${groupId}-title`}
          className="display-xl text-3xl text-ink sm:text-4xl"
        >
          Seu caminho de descobertas.
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
          Um percurso visual da sua exploração — não um julgamento sobre quem
          você é. Toque um território para ver o que há nele.
        </p>
      </header>

      <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ol
          className="relative flex min-w-full list-none items-start justify-between gap-2 px-1 sm:gap-3"
          aria-label="Caminho dos territórios"
        >
          <div
            className="pointer-events-none absolute top-10 right-10 left-10 h-0 border-t-2 border-dotted border-border sm:top-12 sm:right-14 sm:left-14"
            aria-hidden="true"
          />

          {territories.map((territory, index) => {
            const status = getPathStepStatus(territories, index);
            const isSelected = territory.module.slug === selected?.module.slug;
            const shortName = getShortTerritoryName(territory.module.slug);
            const label = getPathStepLabel(status, territory);
            const nodePanel =
              territory.panel ||
              nodeTone[territory.module.slug] ||
              "bg-sand text-ink";

            return (
              <li
                key={territory.module.slug}
                className="relative z-[1] flex min-w-[6.5rem] flex-1 flex-col items-center sm:min-w-0"
              >
                <button
                  type="button"
                  aria-current={status === "next" ? "step" : undefined}
                  aria-pressed={isSelected}
                  aria-label={`${shortName}: ${territory.completedCount} de ${territory.totalCount}, ${label}`}
                  onClick={() => setSelectedSlug(territory.module.slug)}
                  className={`flex w-full max-w-[11rem] flex-col items-center gap-2.5 rounded-2xl p-1 text-center transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero ${
                    isSelected ? "opacity-100" : "opacity-95 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm transition duration-300 sm:h-24 sm:w-24 ${nodePanel} ${
                      status === "next"
                        ? "ring-4 ring-hero/35 motion-safe:animate-pulse"
                        : ""
                    } ${isSelected ? "scale-105" : ""}`}
                  >
                    {territory.thumb ? (
                      <Image
                        src={territory.thumb}
                        alt=""
                        fill
                        className="object-contain object-center p-1.5"
                        sizes="96px"
                      />
                    ) : (
                      <span
                        className="text-xl font-bold sm:text-2xl"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                    )}
                    {status === "complete" ? (
                      <span
                        className="absolute right-0.5 bottom-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-hero text-xs font-bold text-cream shadow-sm sm:h-7 sm:w-7 sm:text-sm"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                    ) : null}
                  </span>
                  <span className="min-w-0 px-0.5">
                    <span className="block font-display text-sm leading-tight text-ink sm:text-base md:text-lg">
                      {shortName}
                    </span>
                    <span className="mt-0.5 block text-[0.65rem] leading-snug text-ink-muted sm:text-xs">
                      {territory.completedCount}/{territory.totalCount} · {label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {selected ? (
        <div
          className="rounded-[1.75rem] border border-border bg-bg-elevated p-5 sm:p-7"
          aria-live="polite"
        >
          <div className="max-w-2xl space-y-3">
            <p className="section-eyebrow">Território selecionado</p>
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              {selected.module.name}
            </h3>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              {selected.module.shortDescription}
            </p>
            <p className="text-sm font-medium text-ink">
              {selected.completedCount} de {selected.totalCount} avaliações
              concluídas
            </p>
          </div>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {selected.instruments.map((instrument) => {
              const status = getInstrumentStatus(instrument.slug, portal);
              const theme = instrumentVisualThemes[instrument.slug];

              return (
                <li key={instrument.slug}>
                  <Link
                    href={
                      status === "known"
                        ? instrument.resultHref
                        : instrument.href
                    }
                    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-bg transition duration-300 hover:-translate-y-0.5 hover:border-hero/40"
                  >
                    <span
                      className={`relative flex h-36 w-full items-end justify-center overflow-hidden sm:h-40 ${theme.panel}`}
                    >
                      {theme.thumb ? (
                        <Image
                          src={theme.thumb}
                          alt=""
                          fill
                          className="object-contain object-center p-2 transition duration-300 group-hover:scale-[1.04]"
                          sizes="(max-width: 640px) 100vw, 40vw"
                        />
                      ) : null}
                    </span>
                    <span className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                      <span className="space-y-1.5">
                        <span className="block font-display text-xl leading-tight text-ink sm:text-2xl">
                          {instrument.name}
                        </span>
                        <span className="block text-sm text-ink-muted">
                          {instrument.estimatedTime}
                        </span>
                      </span>
                      <span className="mt-auto inline-flex w-fit items-center rounded-full bg-hero px-4 py-2 text-sm font-semibold text-cream transition group-hover:brightness-110">
                        {status === "known" ? "Revisar" : "Faça o teste"}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
