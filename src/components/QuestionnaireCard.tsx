import Link from "next/link";
import { Button } from "@/components/Button";
import { InstrumentCardVisual } from "@/components/instruments/instrumentVisuals";
import {
  type DiscoveryStatus,
  type InstrumentMeta,
} from "@/data/instruments";

type QuestionnaireCardProps = {
  questionnaire: InstrumentMeta;
  status: DiscoveryStatus;
  recommended?: boolean;
  stageLabel?: string;
};

export function QuestionnaireCard({
  questionnaire,
  status,
  recommended,
  stageLabel,
}: QuestionnaireCardProps) {
  return (
    <article className="flex overflow-hidden rounded-2xl border border-border bg-bg-elevated">
      <InstrumentCardVisual
        slug={questionnaire.slug}
        className="h-auto w-24 self-stretch px-1.5 py-3 sm:w-28 sm:px-2"
      />
      <div className="flex min-w-0 flex-1 items-center gap-4 px-3 py-4 sm:gap-5 sm:px-4 sm:py-5">
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-xs text-ink-muted sm:text-sm">
            {recommended
              ? "Sugestão"
              : stageLabel || questionnaire.estimatedTime}
          </p>
          <h2 className="font-display text-xl leading-tight text-ink sm:text-2xl">
            <Link
              href={questionnaire.href}
              className="transition-opacity hover:opacity-70"
            >
              {questionnaire.name}
            </Link>
          </h2>
          <p className="text-sm text-ink-muted">
            {questionnaire.shortDescription}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Button
            href={questionnaire.href}
            variant="ghost"
            className="!min-h-9 !px-3 !text-xs hidden sm:inline-flex"
          >
            Abrir
          </Button>
          <span className="text-xs text-ink-muted">
            {status === "known"
              ? "Concluído"
              : status === "discovering"
                ? "Em andamento"
                : ""}
          </span>
        </div>
      </div>
    </article>
  );
}
