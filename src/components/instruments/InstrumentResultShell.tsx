import type { ReactNode } from "react";
import { ShareResultCta } from "@/components/ShareResultCta";
import { AssessmentReferences } from "@/components/instruments/AssessmentReferences";
import {
  AssessmentResultActions,
  type ResultSaveStatus,
} from "@/components/instruments/AssessmentResultActions";
import { ResultIllustrationSlot } from "@/components/instruments/ResultIllustrationSlot";
import {
  DimensionMindMap,
  dimensionAnchorId,
} from "@/components/instruments/DimensionMindMap";
import type { InstrumentSlug } from "@/data/instruments";
import type { DimensionScore } from "@/types/likert";

type InstrumentResultShellProps = {
  slug: InstrumentSlug;
  eyebrow: string;
  title: string;
  disclaimer: string;
  primaryLabel: string;
  summary: string;
  dimensions?: DimensionScore[];
  closingNote?: string;
  retryHref: string;
  shareHref?: string;
  suggestHref: string;
  suggestName: string;
  suggestReason: string;
  saveStatus: ResultSaveStatus;
  accountHref: string;
  onRetrySave?: () => void;
  children?: ReactNode;
};

export function InstrumentResultShell({
  slug,
  eyebrow,
  title,
  disclaimer,
  primaryLabel,
  summary,
  dimensions,
  closingNote,
  retryHref,
  shareHref,
  suggestHref,
  suggestName,
  suggestReason,
  saveStatus,
  accountHref,
  onRetrySave,
  children,
}: InstrumentResultShellProps) {
  const hasAnalyses = dimensions?.some((dim) => Boolean(dim.analysis));
  const shareTitle = eyebrow || title;

  return (
    <>
      <div className="mx-auto w-full max-w-3xl space-y-10 px-5 py-12 sm:px-8 sm:py-16">
        <header className="space-y-4">
          <h1 className="display-xl text-4xl text-ink sm:text-5xl">{title}</h1>
          <p className="text-sm text-ink-muted">{disclaimer}</p>
        </header>

        <section className="space-y-4 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-blue">
            {primaryLabel}
          </p>
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Síntese</h2>
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
            {summary}
          </p>
        </section>

        {dimensions && dimensions.length > 0 && (
          <section className="border-t border-border pt-8">
            <DimensionMindMap dimensions={dimensions} centerLabel="Você" />
          </section>
        )}

        {dimensions && dimensions.length > 0 && (
          <section className="space-y-8 border-t border-border pt-8">
            <div className="space-y-2">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                {hasAnalyses ? "Análise detalhada" : "Detalhamento"}
              </h2>
              <p className="text-sm text-ink-muted">
                As porcentagens descrevem o peso relativo das suas respostas nesta
                sessão — não uma classificação definitiva.
              </p>
            </div>

            <ul className="space-y-10">
              {dimensions.map((dim) => (
                <li
                  key={dim.key}
                  id={dimensionAnchorId(dim.key)}
                  className="scroll-mt-28 space-y-4 rounded-2xl"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl text-ink sm:text-2xl">
                        {dim.label}
                      </h3>
                      <span className="tabular-nums text-sm font-semibold text-ink-muted">
                        {dim.percentage}%
                        {typeof dim.raw === "number" && dim.max > 0
                          ? ` · ${dim.raw}/${dim.max}`
                          : ""}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-sand">
                      <div
                        className="h-full rounded-full bg-accent transition-[width] duration-700"
                        style={{ width: `${dim.percentage}%` }}
                      />
                    </div>
                  </div>
                  {dim.analysis && (
                    <p className="text-base leading-relaxed text-ink-muted">
                      {dim.analysis}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <ResultIllustrationSlot label={eyebrow} />

        {children}

        {closingNote && (
          <section className="border-t border-border pt-8">
            <p className="text-base leading-relaxed text-ink-muted">
              {closingNote}
            </p>
          </section>
        )}

        <AssessmentReferences slug={slug} />

        <ShareResultCta
          title={shareTitle}
          primaryLabel={primaryLabel}
          shareUrl={shareHref ?? retryHref}
        />

        <AssessmentResultActions
          status={saveStatus}
          onRetrySave={onRetrySave}
          accountHref={accountHref}
          retryHref={retryHref}
          suggestHref={suggestHref}
          suggestName={suggestName}
          suggestReason={suggestReason}
        />
      </div>
    </>
  );
}
