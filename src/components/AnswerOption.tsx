type AnswerOptionProps = {
  id: string;
  label: string;
  letter: string;
  selected: boolean;
  onSelect: () => void;
};

export function AnswerOption({
  id,
  label,
  letter,
  selected,
  onSelect,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      id={id}
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={`group flex w-full items-start gap-3 rounded-sm border px-4 py-4 text-left transition-all duration-200 sm:px-5 sm:py-4 ${
        selected
          ? "border-wine bg-bg-elevated shadow-[inset_3px_0_0_0_var(--wine)]"
          : "border-border bg-transparent hover:border-sand-deep hover:bg-bg-elevated/60"
      }`}
    >
      <span
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium ${
          selected
            ? "border-wine bg-wine text-bg-elevated"
            : "border-sand-deep text-ink-muted group-hover:border-terracotta group-hover:text-terracotta"
        }`}
        aria-hidden="true"
      >
        {letter}
      </span>
      <span className="text-[0.98rem] leading-relaxed text-ink sm:text-base">
        {label}
      </span>
    </button>
  );
}
