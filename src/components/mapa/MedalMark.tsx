type MedalMarkProps = {
  symbol: string;
  unlocked: boolean;
  label: string;
};

export function MedalMark({ symbol, unlocked, label }: MedalMarkProps) {
  return (
    <span
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 text-lg ${
        unlocked
          ? "border-hero bg-hero text-cream shadow-sm"
          : "border-border bg-sand text-ink-muted"
      }`}
      role="img"
      aria-label={
        unlocked
          ? `Medalha desbloqueada: ${label}`
          : `Medalha bloqueada: ${label}. Ilustração oficial em breve.`
      }
    >
      <span aria-hidden="true">{symbol}</span>
    </span>
  );
}
