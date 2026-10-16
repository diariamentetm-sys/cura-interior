"use client";

import {
  CATEGORY_LABELS,
  type PublicCognitiveQuestion,
} from "@/types/cognitive";

type CognitiveQuestionViewProps = {
  question: PublicCognitiveQuestion;
  index: number;
  total: number;
  selectedOptionId: string | null;
  onSelect: (optionId: string) => void;
};

export function CognitiveQuestionView({
  question,
  index,
  total,
  selectedOptionId,
  onSelect,
}: CognitiveQuestionViewProps) {
  return (
    <article className="space-y-6" aria-labelledby={`cognitive-q-${question.id}`}>
      <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
        <span className="rounded-full bg-sand px-3 py-1 font-medium text-ink">
          {CATEGORY_LABELS[question.category]}
        </span>
        <span>
          Questão {index + 1} de {total}
        </span>
        <span aria-hidden="true">·</span>
        <span>~{question.suggestedSeconds}s sugeridos</span>
      </div>

      <h2
        id={`cognitive-q-${question.id}`}
        className="font-display text-2xl leading-snug text-ink sm:text-3xl"
      >
        {question.prompt}
      </h2>

      <fieldset className="space-y-3">
        <legend className="sr-only">Alternativas</legend>
        {question.options.map((option, optionIndex) => {
          const selected = selectedOptionId === option.id;
          const keyHint = String.fromCharCode(65 + optionIndex);
          return (
            <label
              key={option.id}
              className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition-colors ${
                selected
                  ? "border-accent bg-accent/5"
                  : "border-border bg-bg-elevated hover:border-ink/25"
              }`}
            >
              <input
                type="radio"
                className="mt-1"
                name={`question-${question.id}`}
                value={option.id}
                checked={selected}
                onChange={() => onSelect(option.id)}
              />
              <span className="flex-1 text-base text-ink">
                <span className="mr-2 font-semibold text-ink-muted">
                  {keyHint}.
                </span>
                {option.label}
              </span>
            </label>
          );
        })}
      </fieldset>
    </article>
  );
}
