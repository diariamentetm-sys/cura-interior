const steps = [
  {
    number: "01",
    title: "Responda e veja o mapa crescer",
    description:
      "A cada questionário, seus resultados entram no mapa mental — um panorama vivo de quem você é, como sente e o que te move.",
  },
  {
    number: "02",
    title: "Refaça quando fizer sentido",
    description:
      "Nada é definitivo. Você pode repetir qualquer teste sempre que quiser atualizar o olhar sobre si.",
  },
  {
    number: "03",
    title: "Compartilhe com quem quiser",
    description:
      "Seus resultados são seus. Envie para quem fizer sentido — ou guarde só para você.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-t border-border bg-[linear-gradient(180deg,color-mix(in_srgb,var(--lavender)_18%,white)_0%,var(--bg)_55%,var(--bg)_100%)]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:py-20">
        <header className="max-w-2xl space-y-4 animate-fade-up">
          <p className="section-eyebrow">Como funciona</p>
          <h2 className="display-xl text-4xl text-ink sm:text-5xl md:text-[3.25rem]">
            Questionários que viram um{" "}
            <span className="text-hero">mapa mental.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Sem trilha obrigatória. Você escolhe o ritmo — e o mapa acompanha
            cada descoberta.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="mind-map-branch flex flex-col gap-3 border-t border-border/80 pt-5"
              style={{ animationDelay: `${0.08 + index * 0.08}s` }}
            >
              <span
                className="stage-number !text-hero text-4xl sm:text-5xl"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="font-display text-xl text-ink sm:text-2xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
