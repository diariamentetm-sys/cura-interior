import {
  CATEGORY_LABELS,
  type CategoryScore,
} from "@/types/cognitive";

type CognitiveDimensionChartProps = {
  scores: CategoryScore[];
};

export function CognitiveDimensionChart({
  scores,
}: CognitiveDimensionChartProps) {
  const ranked = [...scores].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="space-y-5" role="list" aria-label="Pontuação por dimensão">
      {ranked.map((score, index) => {
        const isTop = index < 2;
        return (
          <div key={score.category} className="space-y-2" role="listitem">
            <div className="flex items-baseline justify-between gap-4">
              <span
                className={`text-sm sm:text-base ${isTop ? "text-ink" : "text-ink-muted"}`}
              >
                {CATEGORY_LABELS[score.category]}
              </span>
              <span
                className={`shrink-0 text-sm tabular-nums ${
                  isTop ? "text-accent" : "text-ink-muted"
                }`}
              >
                {score.correct}/{score.total} · {score.percentage}%
              </span>
            </div>
            <div
              className="h-1.5 overflow-hidden rounded-full bg-sand"
              role="presentation"
            >
              <div
                className={`h-full rounded-full transition-[width] duration-700 ease-out ${
                  isTop ? "bg-accent" : "bg-accent-blue/70"
                }`}
                style={{ width: `${score.percentage}%` }}
              />
            </div>
            <p className="text-xs text-ink-muted">{score.label}</p>
          </div>
        );
      })}
    </div>
  );
}
