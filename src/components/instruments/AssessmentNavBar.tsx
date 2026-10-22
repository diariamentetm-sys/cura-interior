import { Button } from "@/components/Button";

type AssessmentNavBarProps = {
  current: number;
  total: number;
  onBack: () => void;
  onNext: () => void;
  backDisabled?: boolean;
  nextDisabled?: boolean;
  pending?: boolean;
};

export function AssessmentNavBar({
  current,
  total,
  onBack,
  onNext,
  backDisabled = false,
  nextDisabled = false,
  pending = false,
}: AssessmentNavBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <nav
      aria-label="Navegação do questionário"
      className="fixed inset-x-0 bottom-0 z-50 bg-bg"
    >
      <div
        className="h-1.5 w-full bg-sand"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-valuetext={`Pergunta ${current} de ${total}`}
        aria-label="Progresso do questionário"
      >
        <div
          className="h-full bg-hero transition-[width] duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6">
        <Button
          type="button"
          variant="secondary"
          onClick={onBack}
          disabled={backDisabled || pending}
          className="min-h-11 min-w-[7.5rem] px-5"
        >
          Voltar
        </Button>
        <Button
          type="button"
          onClick={onNext}
          disabled={nextDisabled || pending}
          className="min-h-11 min-w-[7.5rem] px-5"
        >
          {pending ? "Salvando..." : "Continuar"}
        </Button>
      </div>
    </nav>
  );
}
