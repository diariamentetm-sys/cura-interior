import Link from "next/link";
import { Button } from "@/components/Button";
import {
  type DiscoveryStatus,
  type QuestionnaireMeta,
} from "@/data/questionnaires";

const MARKER_COLORS = [
  "bg-[#F2A8C4]",
  "bg-[#7BA3D9]",
  "bg-[#2F4A6E]",
  "bg-[#8B3A4A]",
  "bg-[#7FA86A]",
] as const;

const RING_COLORS = [
  "border-[#F2A8C4]",
  "border-[#7BA3D9]",
  "border-[#2F4A6E]",
  "border-[#8B3A4A]",
  "border-[#7FA86A]",
] as const;

const FILL_COLORS = [
  "#F2A8C4",
  "#7BA3D9",
  "#2F4A6E",
  "#8B3A4A",
  "#7FA86A",
] as const;

type QuestionnaireCardProps = {
  questionnaire: QuestionnaireMeta;
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
  const colorIndex = (questionnaire.order - 1) % MARKER_COLORS.length;

  return (
    <article className="flex items-center gap-4 rounded-2xl bg-[#FAF8F6] px-3 py-4 sm:gap-5 sm:px-4 sm:py-5">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:h-14 sm:w-14 sm:text-base ${MARKER_COLORS[colorIndex]}`}
      >
        {String(questionnaire.order).padStart(2, "0")}
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <p className="text-xs text-ink-muted sm:text-sm">
          {recommended
            ? "Recomendado para começar"
            : stageLabel || `Etapa ${questionnaire.stage}`}
          <span className="mx-1.5 text-[#D8D3CE]">·</span>
          {questionnaire.estimatedTime}
        </p>
        <h2 className="font-display text-xl leading-tight text-ink sm:text-2xl">
          <Link
            href={questionnaire.href}
            className="transition-opacity hover:opacity-70"
          >
            {questionnaire.name}
          </Link>
        </h2>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <Button
          href={questionnaire.href}
          variant="ghost"
          className="!min-h-9 !px-3 !text-xs hidden sm:inline-flex"
        >
          Abrir
        </Button>
        {status === "known" && (
          <Button
            href={questionnaire.resultHref}
            variant="ghost"
            className="!min-h-9 !px-2 !text-xs hidden md:inline-flex"
          >
            Revisar
          </Button>
        )}
        <span
          className={`h-6 w-6 rounded-full border-[2.5px] ${RING_COLORS[colorIndex]}`}
          style={
            status === "known"
              ? { backgroundColor: FILL_COLORS[colorIndex] }
              : undefined
          }
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
