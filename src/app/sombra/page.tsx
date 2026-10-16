import { Button } from "@/components/Button";

export default function SombraIntroPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <article className="animate-fade-up space-y-8">
        <p className="section-eyebrow">
          Experiência
        </p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Conheça sua Sombra
        </h1>
        <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            A Sombra reúne aspectos de nós mesmos que tendemos a negar,
            esconder, reprimir ou projetar nos outros. Nem sempre são “ruins” —
            muitas vezes são necessidades, defesas e partes menos reconhecidas
            da nossa experiência.
          </p>
          <p>
            Este questionário não busca rotular você. Ele oferece um mapa de
            padrões: controle, vulnerabilidade, aprovação, raiva contida,
            comparação, limites, perfeccionismo e outros aspectos que podem
            aparecer nas suas reações cotidianas.
          </p>
          <p>
            Responda com honestidade. Não há respostas certas — apenas pistas
            para observação.
          </p>
        </div>

        <ol className="space-y-5 border-t border-border/70 pt-8">
          {[
            {
              step: "01",
              title: "Responda às situações",
              text: "Trinta perguntas curtas, uma por vez.",
            },
            {
              step: "02",
              title: "Observe os padrões",
              text: "Suas escolhas revelam tendências, não verdades absolutas.",
            },
            {
              step: "03",
              title: "Receba um mapa da Sombra",
              text: "Veja os aspectos em evidência e caminhos de integração.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="stage-number text-3xl text-hero">
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
          <Button href="/sombra/questionario">Explorar minha Sombra</Button>
        </div>
      </article>
    </div>
  );
}
