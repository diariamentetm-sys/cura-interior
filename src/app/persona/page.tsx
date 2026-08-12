import { Button } from "@/components/Button";

export default function PersonaIntroPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <article className="animate-fade-up space-y-8">
        <p className="section-eyebrow">
          Experiência
        </p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Conheça sua Persona
        </h1>
        <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            A Persona é a face social que construímos para circular pelo mundo:
            os papéis, comportamentos e características que aprendemos a
            apresentar em diferentes contextos.
          </p>
          <p>
            Ela não é falsidade. É adaptação, proteção e pertencimento. Este
            questionário ajuda a perceber a relação entre quem você sente que é,
            quem aprendeu que deveria ser e quem mostra aos outros — e quando o
            papel social começa a ocupar espaço demais.
          </p>
          <p>
            Responda com honestidade. Não há respostas certas — apenas pistas
            para observação.
          </p>
        </div>

        <div className="space-y-3 border-t border-border/70 pt-8 text-sm text-ink-muted sm:text-base">
          <p className="section-eyebrow">
            A relação central
          </p>
          <p>Eu interno</p>
          <p className="text-ink-muted/80">↓ expectativas · papéis · adaptação</p>
          <p>Persona</p>
          <p className="text-ink-muted/80">↓</p>
          <p>Eu que o mundo conhece</p>
        </div>

        <ol className="space-y-5 border-t border-border/70 pt-8">
          {[
            {
              step: "01",
              title: "Responda às situações",
              text: "Trinta perguntas sobre trabalho, relações, emoções e pertencimento.",
            },
            {
              step: "02",
              title: "Observe seus papéis",
              text: "Suas escolhas revelam versões de você que aparecem diante dos outros.",
            },
            {
              step: "03",
              title: "Receba o Mapa da Persona",
              text: "Veja o índice de identificação, a Persona predominante e o que pode ficar escondido.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="stage-number text-3xl text-accent-blue">
                {item.step}
              </span>
              <div className="space-y-1 pt-1">
                <h2 className="text-base font-medium text-ink">{item.title}</h2>
                <p className="text-sm text-ink-muted sm:text-base">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pt-2">
          <Button href="/persona/questionario">Conhecer minha Persona</Button>
        </div>
      </article>
    </div>
  );
}
