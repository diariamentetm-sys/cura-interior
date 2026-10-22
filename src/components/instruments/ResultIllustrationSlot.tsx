type ResultIllustrationSlotProps = {
  label: string;
  className?: string;
};

export function ResultIllustrationSlot({
  label,
  className = "",
}: ResultIllustrationSlotProps) {
  return (
    <figure
      className={`overflow-hidden rounded-[1.75rem] border border-dashed border-border bg-sand/40 ${className}`}
    >
      <div className="flex min-h-[16rem] flex-col items-center justify-center gap-3 px-6 py-10 text-center sm:min-h-[20rem] lg:min-h-[24rem]">
        <p className="text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase">
          Ilustração
        </p>
        <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
          Espaço reservado para o Intelecto Mágico em {label}. A arte oficial
          entra aqui sem alterar o texto do resultado.
        </p>
      </div>
    </figure>
  );
}
