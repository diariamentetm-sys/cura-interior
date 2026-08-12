"use client";

import { AnswerOption } from "@/components/AnswerOption";
import type { QuizQuestion } from "@/types/quiz";

type QuestionCardProps = {
  question: QuizQuestion;
  selectedAnswerId: string | null;
  onSelect: (answerId: string) => void;
  animationKey: number;
};

const LETTERS = ["A", "B", "C", "D"];

export function QuestionCard({
  question,
  selectedAnswerId,
  onSelect,
  animationKey,
}: QuestionCardProps) {
  return (
    <div key={animationKey} className="animate-fade-up space-y-7">
      <h1 className="font-display text-2xl leading-snug text-ink sm:text-3xl sm:leading-snug">
        {question.text}
      </h1>

      <div
        role="radiogroup"
        aria-label={`Alternativas da pergunta ${question.id}`}
        className="flex flex-col gap-3"
      >
        {question.answers.map((answer, index) => (
          <AnswerOption
            key={answer.id}
            id={answer.id}
            letter={LETTERS[index] ?? String(index + 1)}
            label={answer.text}
            selected={selectedAnswerId === answer.id}
            onSelect={() => onSelect(answer.id)}
          />
        ))}
      </div>
    </div>
  );
}
