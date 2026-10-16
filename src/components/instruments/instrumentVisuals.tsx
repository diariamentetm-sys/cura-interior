import type { InstrumentSlug } from "@/data/instruments";

export type MotifType =
  | "rings"
  | "grid"
  | "pulse"
  | "nodes"
  | "orbit"
  | "mirror"
  | "paths";

export const instrumentVisualThemes: Record<
  InstrumentSlug,
  { panel: string; motif: MotifType; thumb?: string }
> = {
  "big-five": {
    panel: "bg-[#fed6ce]",
    motif: "rings",
    thumb: "/images/instruments/big-five-v2.jpg",
  },
  "tipologia-16": {
    panel: "bg-[#a8d1ef]",
    motif: "grid",
    thumb: "/images/instruments/tipologia-16.jpg",
  },
  "perfil-cognitivo": {
    panel: "bg-[#0071a9]",
    motif: "nodes",
    thumb: "/images/instruments/perfil-cognitivo.jpg",
  },
  "inteligencia-emocional": {
    panel: "bg-[#c5b1e6]",
    motif: "pulse",
    thumb: "/images/instruments/inteligencia-emocional.jpg",
  },
  "estilos-apego": {
    panel: "bg-[#fd9e88]",
    motif: "orbit",
    thumb: "/images/instruments/estilos-apego.jpg",
  },
  autoestima: {
    panel: "bg-[#9bd6a6]",
    motif: "mirror",
    thumb: "/images/instruments/autoestima.jpg",
  },
  "vocacional-riasec": {
    panel: "bg-[#fbe085]",
    motif: "paths",
    thumb: "/images/instruments/vocacional-riasec.jpg",
  },
};

export function InstrumentMotif({
  type,
  className = "h-full w-full text-ink/25",
}: {
  type: MotifType;
  className?: string;
}) {
  if (type === "rings") {
    return (
      <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
        <circle
          cx="100"
          cy="70"
          r="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="100"
          cy="70"
          r="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="100" cy="70" r="10" fill="currentColor" />
      </svg>
    );
  }
  if (type === "grid") {
    return (
      <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
        <rect
          x="48"
          y="28"
          width="40"
          height="40"
          rx="8"
          fill="currentColor"
          opacity="0.35"
        />
        <rect
          x="100"
          y="28"
          width="40"
          height="40"
          rx="8"
          fill="currentColor"
          opacity="0.55"
        />
        <rect
          x="48"
          y="76"
          width="40"
          height="28"
          rx="8"
          fill="currentColor"
          opacity="0.55"
        />
        <rect
          x="100"
          y="76"
          width="40"
          height="28"
          rx="8"
          fill="currentColor"
          opacity="0.35"
        />
      </svg>
    );
  }
  if (type === "nodes") {
    return (
      <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
        <path
          d="M50 80 L90 40 L130 70 L160 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="50" cy="80" r="8" fill="currentColor" />
        <circle cx="90" cy="40" r="8" fill="currentColor" />
        <circle cx="130" cy="70" r="8" fill="currentColor" />
        <circle cx="160" cy="35" r="8" fill="currentColor" />
      </svg>
    );
  }
  if (type === "pulse") {
    return (
      <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
        <path
          d="M30 70 H70 L85 40 L105 90 L125 55 L145 70 H170"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "orbit") {
    return (
      <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
        <ellipse
          cx="100"
          cy="62"
          rx="55"
          ry="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="100" cy="62" r="14" fill="currentColor" opacity="0.45" />
        <circle cx="155" cy="62" r="8" fill="currentColor" />
      </svg>
    );
  }
  if (type === "mirror") {
    return (
      <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
        <rect
          x="78"
          y="22"
          width="44"
          height="70"
          rx="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <rect
          x="88"
          y="32"
          width="24"
          height="40"
          rx="12"
          fill="currentColor"
          opacity="0.35"
        />
        <line
          x1="100"
          y1="92"
          x2="100"
          y2="108"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
      <path
        d="M40 90 L70 40 L100 75 L130 30 L160 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle cx="70" cy="40" r="7" fill="currentColor" />
      <circle cx="130" cy="30" r="7" fill="currentColor" />
    </svg>
  );
}

type InstrumentVisualPanelProps = {
  slug: InstrumentSlug;
  className?: string;
};

/** Painel ilustrado igual ao da home (card do questionário). */
export function InstrumentVisualPanel({
  slug,
  className = "",
}: InstrumentVisualPanelProps) {
  const theme = instrumentVisualThemes[slug];
  if (!theme) return null;

  return (
    <div
      className={`overflow-hidden rounded-[1.75rem] border border-border/80 bg-bg-elevated ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative flex min-h-[14rem] items-center justify-center overflow-hidden sm:min-h-[18rem] lg:min-h-[22rem] ${theme.panel}`}
      >
        {theme.thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={theme.thumb}
            alt=""
            className="h-full w-full object-contain object-center"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6 py-10">
            <InstrumentMotif
              type={theme.motif}
              className="h-full w-full max-w-sm text-ink/30"
            />
          </div>
        )}
      </div>
    </div>
  );
}

type InstrumentCardVisualProps = {
  slug: InstrumentSlug;
  className?: string;
};

/** Miniatura da mesma ilustração da intro — para cards de lista. */
export function InstrumentCardVisual({
  slug,
  className = "",
}: InstrumentCardVisualProps) {
  const theme = instrumentVisualThemes[slug];
  if (!theme) return null;

  if (theme.thumb) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden ${theme.panel} ${className}`}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={theme.thumb}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden ${theme.panel} ${className}`}
      aria-hidden="true"
    >
      <InstrumentMotif
        type={theme.motif}
        className="h-full w-full text-ink/30"
      />
    </div>
  );
}
