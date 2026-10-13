import { Button } from "@/components/Button";
import { InstrumentVisualPanel } from "@/components/instruments/instrumentVisuals";
import type { InstrumentEditorial } from "@/data/instruments/editorialIntros";
import type { InstrumentMeta } from "@/data/instruments";

type InstrumentIntroProps = {
  instrument: InstrumentMeta;
  editorial: InstrumentEditorial;
  questionCount: number;
};

export function InstrumentIntro({
  instrument,
  editorial,
  questionCount,
}: InstrumentIntroProps) {
  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-36 pt-14 sm:px-8 sm:pb-32 lg:grid-cols-12 lg:gap-12 lg:pt-16">
        <article className="space-y-10 lg:col-span-7">
          <header className="space-y-5">
            <p className="section-eyebrow">Questionário</p>
            <h1 className="display-xl text-4xl text-ink sm:text-5xl">
              {instrument.name}
            </h1>
          </header>

          <div className="lg:hidden">
            <InstrumentVisualPanel slug={instrument.slug} />
          </div>

          <section className="space-y-4">
            {editorial.themeParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-ink-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="font-display text-2xl text-ink">
              Como este teste funciona
            </h2>
            {editorial.methodologyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-ink-muted"
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="font-display text-2xl text-ink">Antes de responder</h2>
            <ul className="space-y-3">
              {editorial.guidelines.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 border-t border-border pt-8 text-sm text-ink-muted">
            <h2 className="font-display text-xl text-ink">
              Informações práticas
            </h2>
            <ul className="space-y-2">
              <li>
                {questionCount} questões · {instrument.estimatedTime}
              </li>
              <li>{editorial.responseFormat}</li>
              <li>{editorial.canPauseNote}</li>
              <li>{editorial.nature}</li>
            </ul>
            <p className="pt-2 text-base text-ink">
              Quando estiver pronto, podemos começar.
            </p>
          </section>
        </article>

        <aside className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-28">
            <InstrumentVisualPanel slug={instrument.slug} />
            <p className="mt-4 text-sm text-ink-muted">
              {instrument.shortDescription}
            </p>
          </div>
        </aside>
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
        <div className="pointer-events-auto border-t border-border/80 bg-bg/95 shadow-[0_-12px_40px_-24px_rgba(42,40,38,0.12)] backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-4">
            <Button
              href={instrument.questionnaireHref}
              className="min-h-12 flex-1 sm:flex-none sm:min-w-[11rem]"
            >
              Começar teste
            </Button>
            <Button
              href={`/modulos/${instrument.moduleSlug}`}
              variant="secondary"
              className="!min-h-12 shrink-0"
            >
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
