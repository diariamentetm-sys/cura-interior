import { Button } from "@/components/Button";

export type ResultSaveStatus = "saving" | "saved" | "error" | "guest";

type AssessmentResultActionsProps = {
  status: ResultSaveStatus;
  onRetrySave?: () => void;
  accountHref: string;
  retryHref: string;
  suggestHref: string;
  suggestName: string;
  suggestReason: string;
};

export function AssessmentResultActions({
  status,
  onRetrySave,
  accountHref,
  retryHref,
  suggestHref,
  suggestName,
  suggestReason,
}: AssessmentResultActionsProps) {
  return (
    <section
      className="space-y-5 border-t border-border pt-8"
      aria-label="Ações do resultado"
    >
      <div role="status" aria-live="polite" className="space-y-2">
        {status === "saving" ? (
          <p className="text-sm font-medium text-ink">Salvando seu resultado...</p>
        ) : null}
        {status === "saved" ? (
          <p className="text-sm font-medium text-ink">
            Resultado salvo no Meu Mapa.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-ink">
            Não foi possível salvar agora. Seu resultado continua neste
            dispositivo.
          </p>
        ) : null}
        {status === "guest" ? (
          <p className="text-sm font-medium text-ink">
            Resultado guardado neste dispositivo. Entre para associá-lo à sua
            conta.
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {status === "guest" ? (
          <Button href={accountHref}>Entrar para associar</Button>
        ) : (
          <Button href="/meu-mapa">Ver no Meu Mapa</Button>
        )}
        {status === "error" && onRetrySave ? (
          <Button type="button" variant="secondary" onClick={onRetrySave}>
            Tentar salvar de novo
          </Button>
        ) : null}
        <Button href={retryHref} variant="secondary">
          Refazer teste
        </Button>
      </div>

      <div className="rounded-[1.25rem] border border-border bg-bg-elevated p-4 sm:p-5">
        <p className="text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase">
          Avaliação complementar
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {suggestReason}
        </p>
        <Button href={suggestHref} variant="ghost" className="mt-3 !px-0">
          Fazer também o teste {suggestName}
        </Button>
      </div>
    </section>
  );
}
