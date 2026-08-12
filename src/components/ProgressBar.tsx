type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full" role="status" aria-live="polite">
      <div className="mb-2 flex items-center justify-between text-xs tracking-wide text-ink-muted uppercase">
        <span>
          Pergunta {current} de {total}
        </span>
        <span>{percentage}%</span>
      </div>
      <div
        className="h-1 w-full overflow-hidden rounded-full bg-sand"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-label="Progresso do questionário"
      >
        <div
          className="h-full rounded-full bg-wine transition-[width] duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
