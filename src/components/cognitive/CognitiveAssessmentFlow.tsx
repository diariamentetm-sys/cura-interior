"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { AssessmentNavBar } from "@/components/instruments/AssessmentNavBar";
import { CognitiveQuestionView } from "@/components/cognitive/CognitiveQuestionView";
import {
  getCognitiveClientKey,
  loadLocalCognitiveSession,
  markCognitiveDiscovering,
  saveLocalCognitiveResult,
  saveLocalCognitiveSession,
  type LocalCognitivePayload,
} from "@/lib/cognitive/storage";
import type {
  CognitiveSession,
  PublicCognitiveQuestion,
} from "@/types/cognitive";

export function CognitiveAssessmentFlow() {
  const router = useRouter();
  const [payload, setPayload] = useState<LocalCognitivePayload | null>(null);
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const questionStartedAt = useRef<number>(Date.now());
  const sessionStartedAt = useRef<number>(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const bootstrap = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const existing = loadLocalCognitiveSession();
      if (
        existing &&
        existing.session.status === "in_progress" &&
        existing.questions.length > 0
      ) {
        const remote = await fetch(
          `/api/cognitive/sessions/${existing.session.id}`,
        );
        if (remote.ok) {
          const data = (await remote.json()) as LocalCognitivePayload;
          setPayload(data);
          setIndex(data.session.currentIndex);
          const currentQ = data.questions[data.session.currentIndex];
          const prior = data.session.answers.find(
            (a) => a.questionId === currentQ?.id,
          );
          setSelectedId(prior?.selectedOptionId ?? null);
          questionStartedAt.current = Date.now();
          setLoading(false);
          return;
        }
      }

      const clientKey = getCognitiveClientKey();
      const response = await fetch("/api/cognitive/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientKey }),
      });
      if (!response.ok) {
        throw new Error("Falha ao criar sessão");
      }
      const data = (await response.json()) as {
        session: CognitiveSession;
        questions: PublicCognitiveQuestion[];
      };
      const local: LocalCognitivePayload = {
        session: data.session,
        questions: data.questions,
      };
      saveLocalCognitiveSession(local);
      markCognitiveDiscovering(data.session.id);
      setPayload(local);
      setIndex(0);
      setSelectedId(null);
      questionStartedAt.current = Date.now();
    } catch {
      setError(
        "Não foi possível iniciar a avaliação. Tente novamente em instantes.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void bootstrap();
  }, [bootstrap]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setElapsedSeconds(
        Math.floor((Date.now() - sessionStartedAt.current) / 1000),
      );
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!payload) return;
      const question = payload.questions[index];
      if (!question) return;
      const key = event.key.toUpperCase();
      const optionIndex = key.charCodeAt(0) - 65;
      if (optionIndex >= 0 && optionIndex < question.options.length) {
        setSelectedId(question.options[optionIndex].id);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [payload, index]);

  async function persistAnswer(
    questionId: string,
    optionId: string | null,
    nextIndex: number,
  ): Promise<LocalCognitivePayload> {
    if (!payload) {
      throw new Error("Sessão indisponível");
    }
    const timeSpentMs = Date.now() - questionStartedAt.current;
    const response = await fetch(
      `/api/cognitive/sessions/${payload.session.id}/answer`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId,
          selectedOptionId: optionId,
          timeSpentMs,
          currentIndex: nextIndex,
        }),
      },
    );
    if (!response.ok) {
      throw new Error("Falha ao salvar resposta");
    }
    const data = (await response.json()) as { session: CognitiveSession };
    const nextPayload = {
      session: data.session,
      questions: payload.questions,
    };
    saveLocalCognitiveSession(nextPayload);
    setPayload(nextPayload);
    return nextPayload;
  }

  async function handleNext() {
    if (!payload || !selectedId) return;
    const question = payload.questions[index];
    if (!question) return;
    setSubmitting(true);
    setError(null);
    try {
      const isLast = index >= payload.questions.length - 1;
      if (isLast) {
        await persistAnswer(question.id, selectedId, index);
        const complete = await fetch(
          `/api/cognitive/sessions/${payload.session.id}/complete`,
          { method: "POST" },
        );
        if (!complete.ok) throw new Error("Falha ao concluir");
        const data = (await complete.json()) as {
          result: import("@/types/cognitive").CognitiveResult;
        };
        saveLocalCognitiveResult(data.result);
        router.push("/habilidades-cognitivas/resultado");
        return;
      }

      const nextIndex = index + 1;
      const nextPayload = await persistAnswer(
        question.id,
        selectedId,
        nextIndex,
      );
      setIndex(nextIndex);
      const nextQ = nextPayload.questions[nextIndex];
      const prior = nextPayload.session.answers.find(
        (a) => a.questionId === nextQ?.id,
      );
      setSelectedId(prior?.selectedOptionId ?? null);
      questionStartedAt.current = Date.now();
    } catch {
      setError("Não foi possível salvar sua resposta. Tente de novo.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleBack() {
    if (!payload || index === 0) return;
    const question = payload.questions[index];
    setSubmitting(true);
    try {
      const prev = index - 1;
      let nextPayload = payload;
      if (question && selectedId) {
        nextPayload = await persistAnswer(question.id, selectedId, prev);
      }
      setIndex(prev);
      const prevQ = nextPayload.questions[prev];
      const prior = nextPayload.session.answers.find(
        (a) => a.questionId === prevQ?.id,
      );
      setSelectedId(prior?.selectedOptionId ?? null);
      questionStartedAt.current = Date.now();
    } catch {
      setError("Não foi possível voltar. Tente de novo.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="py-24 text-center text-ink-muted">
        Preparando sua avaliação...
      </div>
    );
  }

  if (error && !payload) {
    return (
      <div className="mx-auto max-w-lg space-y-4 py-20 text-center">
        <p className="text-ink-muted">{error}</p>
        <Button type="button" onClick={() => void bootstrap()}>
          Tentar novamente
        </Button>
      </div>
    );
  }

  if (!payload) return null;

  const question = payload.questions[index];
  const total = payload.questions.length;

  return (
    <>
      <div className="mx-auto w-full max-w-3xl space-y-8 px-5 py-10 pb-36 sm:px-8 sm:py-14">
        {question && (
          <CognitiveQuestionView
            question={question}
            selectedOptionId={selectedId}
            onSelect={setSelectedId}
          />
        )}

        {error && (
          <p className="text-sm text-accent" role="alert">
            {error}
          </p>
        )}
      </div>
      <AssessmentNavBar
        current={index + 1}
        total={total}
        elapsedSeconds={elapsedSeconds}
        isLast={index >= total - 1}
        pending={submitting}
        backDisabled={index === 0}
        nextDisabled={!selectedId}
        onBack={() => void handleBack()}
        onNext={() => void handleNext()}
      />
    </>
  );
}
