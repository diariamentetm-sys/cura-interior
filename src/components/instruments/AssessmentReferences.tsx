import { assessmentFoundations } from "@/data/instruments/foundations";
import type { InstrumentSlug } from "@/data/instruments";

type AssessmentReferencesProps = {
  slug: InstrumentSlug;
};

export function AssessmentReferences({ slug }: AssessmentReferencesProps) {
  const foundation = assessmentFoundations[slug];

  return (
    <section className="border-t border-border pt-8">
      <details className="group">
        <summary className="cursor-pointer list-none font-display text-2xl text-ink sm:text-3xl [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-4">
            Fundamentação e referências
            <span className="text-sm font-semibold text-ink-muted group-open:hidden">
              Mostrar
            </span>
            <span className="hidden text-sm font-semibold text-ink-muted group-open:inline">
              Ocultar
            </span>
          </span>
        </summary>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          <p>
            <span className="font-semibold text-ink">O que explora. </span>
            {foundation.explores}
          </p>
          <p>
            <span className="font-semibold text-ink">Fundamentação. </span>
            {foundation.tradition}
          </p>
          <p>
            <span className="font-semibold text-ink">Limitações. </span>
            {foundation.limits}
          </p>
          <p>
            <span className="font-semibold text-ink">Como interpretar. </span>
            {foundation.interpretation}
          </p>
          {foundation.references.length > 0 ? (
            <ul className="space-y-3 pt-2">
              {foundation.references.map((reference) => (
                <li key={`${reference.author}-${reference.year}`}>
                  <span className="text-ink">{reference.author}</span> (
                  {reference.year}). {reference.work}{" "}
                  {reference.href ? (
                    <a
                      href={reference.href}
                      className="font-semibold text-hero underline-offset-2 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Abrir fonte
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              Não há artigo revisado por pares desta bateria. Por isso ela não
              é apresentada como instrumento validado.
            </p>
          )}
        </div>
      </details>
    </section>
  );
}
