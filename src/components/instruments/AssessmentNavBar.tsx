import { Button } from "@/components/Button";

type AssessmentNavBarProps = {
  current: number;
  total: number;
  onBack: () => void;
  onNext: () => void;
  backDisabled?: boolean;
  nextDisabled?: boolean;
  isLast: boolean;
  pending?: boolean;
  elapsedSeconds: number;
};

function formatElapsed(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function AssessmentNavBar({
  current,
  total,
  onBack,
  onNext,
  backDisabled = false,
  nextDisabled = false,
  isLast,
  pending = false,
  elapsedSeconds,
}: AssessmentNavBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40">
      <nav
        aria-label="Navegação do questionário"
        className="pointer-events-auto border-t border-border/80 bg-bg/95 shadow-[0_-12px_40px_-24px_rgba(42,40,38,0.18)] backdrop-blur-md"
      >
        <div className="mx-auto grid w-full max-w-3xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:gap-4 sm:px-6">
          <Button
            type="button"
            variant="secondary"
            onClick={onBack}
            disabled={backDisabled || pending}
            className="min-h-11 min-w-[5.5rem] px-4 sm:min-w-[6.5rem]"
          >
            Voltar
          </Button>

          <div className="min-w-0 text-center">
            <p className="text-sm font-semibold text-ink">
              Pergunta {current} de {total}
            </p>
            <p className="mt-0.5 flex items-center justify-center gap-1.5 text-xs text-ink-muted">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v5l3 2" strokeLinecap="round" />
              </svg>
              <span>Tempo decorrido {formatElapsed(elapsedSeconds)}</span>
            </p>
            <div
              className="mx-auto mt-2 h-1 w-full max-w-[10rem] overflow-hidden rounded-full bg-sand"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percentage}
              aria-label="Progresso do questionário"
            >
              <div
                className="h-full rounded-full bg-hero transition-[width] duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <Button
            type="button"
            onClick={onNext}
            disabled={nextDisabled || pending}
            className="min-h-11 min-w-[5.5rem] px-4 sm:min-w-[6.5rem]"
          >
            {pending ? "Salvando..." : isLast ? "Finalizar" : "Próxima"}
          </Button>
        </div>
      </nav>
    </div>
  );
}
