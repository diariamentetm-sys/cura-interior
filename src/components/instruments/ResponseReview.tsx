"use client";

import { useState } from "react";
import type { LikertAnswer, LikertItem, LikertValue } from "@/types/likert";

const SCALE: Record<LikertValue, string> = {
  1: "Discordo totalmente",
  2: "Discordo",
  3: "Neutro",
  4: "Concordo",
  5: "Concordo totalmente",
};

type ResponseReviewProps = {
  items: LikertItem[];
  answers: LikertAnswer[];
};

export function ResponseReview({ items, answers }: ResponseReviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="space-y-4 border-t border-border pt-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Revise suas respostas
        </h2>
        <button
          type="button"
          className="min-h-11 rounded-full px-4 text-sm font-semibold text-ink-muted hover:text-ink"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      <p className="text-sm leading-relaxed text-ink-muted">
        Este questionário não tem resposta certa ou errada. Abaixo está o que
        você registrou.
      </p>
      {open ? (
        <ol className="space-y-3">
          {items.map((item, index) => {
            const answer = answers.find((entry) => entry.questionId === item.id);
            return (
              <li
                key={item.id}
                className="rounded-2xl border border-border bg-bg-elevated p-4"
              >
                <p className="text-xs font-semibold text-ink-muted">
                  {index + 1}
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{item.text}</p>
                <p className="mt-2 text-sm text-ink-muted">
                  {answer ? SCALE[answer.value] : "Sem resposta registrada"}
                </p>
              </li>
            );
          })}
        </ol>
      ) : null}
    </section>
  );
}
