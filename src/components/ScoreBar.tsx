type ScoreBarProps = {
  name: string;
  percentage: number;
  rank: number;
  highlightCount?: number;
};

export function ScoreBar({
  name,
  percentage,
  rank,
  highlightCount = 3,
}: ScoreBarProps) {
  const isTop = rank <= highlightCount;

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-4">
        <span
          className={`text-sm sm:text-base ${
            isTop ? "text-ink" : "text-ink-muted"
          }`}
        >
          {name}
        </span>
        <span
          className={`shrink-0 text-sm tabular-nums ${
            isTop ? "text-wine" : "text-ink-muted"
          }`}
        >
          {percentage}%
        </span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-sand"
        role="presentation"
      >
        <div
          className={`h-full rounded-full transition-[width] duration-700 ease-out ${
            isTop ? "bg-wine" : "bg-olive/70"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
