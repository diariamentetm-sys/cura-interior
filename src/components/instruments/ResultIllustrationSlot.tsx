type ResultIllustrationSlotProps = {
  label: string;
};

export function ResultIllustrationSlot({ label }: ResultIllustrationSlotProps) {
  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-dashed border-border bg-sand/40">
      <div className="flex min-h-40 flex-col items-center justify-center gap-2 px-6 py-8 text-center sm:min-h-48">
        <p className="text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase">
          Ilustração
        </p>
        <p className="max-w-md text-sm leading-relaxed text-ink-muted">
          Espaço reservado para o Intelecto Mágico em {label}. A arte oficial
          entra aqui sem alterar o texto do resultado.
        </p>
      </div>
    </figure>
  );
}
