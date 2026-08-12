"use client";

import { QuestionnaireCard } from "@/components/QuestionnaireCard";
import { useAuth } from "@/components/AuthProvider";
import { questionnaires } from "@/data/questionnaires";
import {
  getNextRecommended,
  getQuestionnaireStatus,
} from "@/lib/portalProgress";

export default function ExplorarPage() {
  const { portal } = useAuth();
  const next = getNextRecommended(portal);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="animate-fade-up max-w-3xl space-y-5">
        <p className="section-eyebrow">Explorar</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl md:text-6xl">
          Escolha um olhar.
          <br />
          Ou cinco.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Tudo liberado. A trajetória recomendada é só um convite — não uma
          fila.
        </p>
      </div>

      <ol className="relative mt-12 space-y-3 rounded-[1.75rem] border border-border bg-white px-4 py-5 sm:px-6 sm:py-6">
        <div
          className="pointer-events-none absolute top-10 bottom-10 left-[2.35rem] w-px bg-[#E6E2DE] sm:left-[2.65rem]"
          aria-hidden="true"
        />
        {questionnaires.map((questionnaire) => {
          const status = getQuestionnaireStatus(questionnaire.slug, portal);
          return (
            <li key={questionnaire.slug} className="relative z-[1]">
              <QuestionnaireCard
                questionnaire={questionnaire}
                status={status}
                recommended={questionnaire.slug === next}
                stageLabel={`Parte da etapa ${questionnaire.stage}`}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
