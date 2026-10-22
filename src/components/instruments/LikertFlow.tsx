"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AssessmentNavBar } from "@/components/instruments/AssessmentNavBar";
import type { LikertAnswer, LikertItem, LikertValue } from "@/types/likert";
import {
  clearLikertProgress,
  loadLikertProgress,
  saveLikertProgress,
  saveInstrumentResult,
} from "@/lib/instrumentStorage";

const SCALE: Array<{ value: LikertValue; label: string }> = [
  { value: 1, label: "Discordo totalmente" },
  { value: 2, label: "Discordo" },
  { value: 3, label: "Neutro" },
  { value: 4, label: "Concordo" },
  { value: 5, label: "Concordo totalmente" },
];

type LikertFlowProps<TResult> = {
  namespace: string;
  items: LikertItem[];
  resultPath: string;
  calculateResults: (answers: LikertAnswer[]) => TResult;
  onComplete?: (result: TResult) => void | Promise<void>;
  scale?: Array<{ value: LikertValue; label: string }>;
};

export function LikertFlow<TResult>({
  namespace,
  items,
  resultPath,
  calculateResults,
  onComplete,
  scale = SCALE,
}: LikertFlowProps<TResult>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [hydrated, setHydrated] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<LikertAnswer[]>([]);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const startedAt = useRef<number | null>(null);

  const total = items.length;
  const item = items[index];
  const selected = answers.find((a) => a.questionId === item?.id)?.value ?? null;
  const isLast = index >= total - 1;

  useEffect(() => {
    const saved = loadLikertProgress(namespace);
    if (saved) {
      setIndex(Math.min(Math.max(saved.currentIndex, 0), total - 1));
      setAnswers(saved.answers);
    }
    setHydrated(true);
  }, [namespace, total]);

  useEffect(() => {
    if (!hydrated) return;
    if (startedAt.current == null) startedAt.current = Date.now();
    const timer = window.setInterval(() => {
      if (startedAt.current == null) return;
      setElapsedSeconds(Math.floor((Date.now() - startedAt.current) / 1000));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    saveLikertProgress(namespace, {
      currentIndex: index,
      answers,
      updatedAt: new Date().toISOString(),
    });
  }, [answers, hydrated, index, namespace]);

  function select(value: LikertValue) {
    if (!item) return;
    setAnswers((prev) => {
      const next = prev.filter((a) => a.questionId !== item.id);
      next.push({ questionId: item.id, value });
      return next;
    });
  }

  async function continueFlow() {
    if (!item || selected == null) return;
    if (!isLast) {
      setIndex((i) => i + 1);
      return;
    }

    const finalAnswers = [
      ...answers.filter((a) => a.questionId !== item.id),
      { questionId: item.id, value: selected },
    ];
    const result = calculateResults(finalAnswers);
    saveInstrumentResult(namespace, result as Record<string, unknown>);
    clearLikertProgress(namespace);
    try {
      await onComplete?.(result);
    } catch {
      // ignore
    }
    startTransition(() => router.push(resultPath));
  }

  if (!hydrated || !item) {
    return (
      <div className="py-20 text-center text-ink-muted">Preparando...</div>
    );
  }

  return (
    <>
      <div className="mx-auto w-full max-w-2xl space-y-8 px-5 pt-10 pb-36 sm:px-8">
        <article className="space-y-6">
          <h2 className="font-display text-2xl leading-snug text-ink sm:text-3xl">
            {item.text}
          </h2>

          <fieldset className="space-y-2">
            <legend className="sr-only">Escolha uma opção</legend>
            {scale.map((option) => {
              const active = selected === option.value;
              return (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 transition-colors ${
                    active
                      ? "border-accent bg-accent/5"
                      : "border-border bg-bg-elevated hover:border-ink/20"
                  }`}
                >
                  <input
                    type="radio"
                    className="accent-[var(--accent)]"
                    name={`item-${item.id}`}
                    checked={active}
                    onChange={() => select(option.value)}
                  />
                  <span className="text-sm text-ink sm:text-base">
                    {option.label}
                  </span>
                </label>
              );
            })}
          </fieldset>
        </article>
      </div>

      <AssessmentNavBar
        current={index + 1}
        total={total}
        elapsedSeconds={elapsedSeconds}
        isLast={isLast}
        pending={isPending}
        backDisabled={index === 0}
        nextDisabled={selected == null}
        onBack={() => setIndex((current) => Math.max(0, current - 1))}
        onNext={() => void continueFlow()}
      />
    </>
  );
}
