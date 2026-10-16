import Image from "next/image";
import Link from "next/link";
import type { InstrumentMeta } from "@/data/instruments";
import {
  InstrumentMotif,
  instrumentVisualThemes,
} from "@/components/instruments/instrumentVisuals";

type InstrumentMagazineCardProps = {
  instrument: InstrumentMeta;
};

export function InstrumentMagazineCard({
  instrument,
}: InstrumentMagazineCardProps) {
  const theme = instrumentVisualThemes[instrument.slug];

  return (
    <Link
      href={instrument.href}
      className="group flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-bg-elevated transition duration-300 hover:-translate-y-1 hover:border-ink/20 sm:min-h-[24rem]"
    >
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex rounded-full bg-sand px-3 py-1 text-xs font-semibold tracking-wide text-ink-muted">
            {instrument.estimatedTime.replace("cerca de ", "")}
          </span>
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M7 17L17 7M9 7h8v8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-2xl leading-tight text-ink sm:text-[1.65rem]">
            {instrument.name}
          </h3>
          <p className="text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
            {instrument.shortDescription}
          </p>
        </div>
      </div>
      <div
        className={`relative flex h-36 items-end justify-center overflow-hidden sm:h-40 ${theme.panel}`}
      >
        {theme.thumb ? (
          <Image
            src={theme.thumb}
            alt=""
            fill
            className="object-contain object-center transition duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-end justify-center px-4 pb-2">
            <InstrumentMotif type={theme.motif} />
          </div>
        )}
      </div>
    </Link>
  );
}
