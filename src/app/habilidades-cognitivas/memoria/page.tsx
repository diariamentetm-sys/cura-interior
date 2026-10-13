"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

const DIGIT_ROUNDS = [
  ["4", "9", "2"],
  ["7", "1", "8", "3"],
  ["5", "0", "6", "2", "9"],
];

/**
 * Complementary working-memory / attention exercises.
 * Scores here are never merged into the main cognitive assessment.
 */
export default function CognitiveMemoryPage() {
  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<"show" | "recall" | "done">("show");
  const [input, setInput] = useState("");
  const [hits, setHits] = useState(0);

  const sequence = useMemo(
    () => DIGIT_ROUNDS[Math.min(round, DIGIT_ROUNDS.length - 1)],
    [round],
  );

  function startRecall() {
    setPhase("recall");
    setInput("");
  }

  function checkRecall() {
    const normalized = input.replace(/\s+/g, "");
    const expected = sequence.join("");
    if (normalized === expected) {
      setHits((h) => h + 1);
    }
    if (round >= DIGIT_ROUNDS.length - 1) {
      setPhase("done");
      return;
    }
    setRound((r) => r + 1);
    setPhase("show");
    setInput("");
  }

  function restart() {
    setRound(0);
    setPhase("show");
    setInput("");
    setHits(0);
  }

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8 px-5 py-14 sm:px-8 sm:py-20">
      <header className="space-y-4">
        <p className="section-eyebrow">Módulo complementar</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl">
          Memória e atenção
        </h1>
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          Exercícios curtos de memória de trabalho. Eles{" "}
          <strong className="font-semibold text-ink">
            não entram na pontuação
          </strong>{" "}
          da avaliação principal de habilidades cognitivas.
        </p>
      </header>

      {phase === "done" ? (
        <section className="card-panel space-y-4 p-6">
          <h2 className="font-display text-2xl text-ink">Sessão encerrada</h2>
          <p className="text-ink-muted">
            Você acertou {hits} de {DIGIT_ROUNDS.length} sequências neste
            treino. Use isso só como prática — sem rótulos de capacidade.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="button" onClick={restart}>
              Treinar de novo
            </Button>
            <Button href="/habilidades-cognitivas" variant="secondary">
              Voltar
            </Button>
          </div>
        </section>
      ) : (
        <section className="card-panel space-y-6 p-6 sm:p-8">
          <p className="text-sm text-ink-muted">
            Rodada {round + 1} de {DIGIT_ROUNDS.length}
          </p>

          {phase === "show" && (
            <>
              <p className="font-display text-lg text-ink">
                Memorize a sequência:
              </p>
              <p
                className="font-display text-4xl tracking-[0.35em] text-accent"
                aria-live="polite"
              >
                {sequence.join(" ")}
              </p>
              <Button type="button" onClick={startRecall}>
                Esconder e repetir
              </Button>
            </>
          )}

          {phase === "recall" && (
            <>
              <label className="block space-y-2" htmlFor="memory-input">
                <span className="text-sm font-medium text-ink">
                  Digite a sequência (sem espaços obrigatórios)
                </span>
                <input
                  id="memory-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-lg tracking-widest text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                  inputMode="numeric"
                  autoComplete="off"
                />
              </label>
              <Button type="button" onClick={checkRecall} disabled={!input.trim()}>
                Conferir
              </Button>
            </>
          )}
        </section>
      )}
    </div>
  );
}
