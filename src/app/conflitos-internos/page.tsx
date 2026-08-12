import { Button } from "@/components/Button";

export default function ConflitosInternosIntroPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <article className="animate-fade-up space-y-8">
        <p className="section-eyebrow">
          Experiência
        </p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Descubra seus Conflitos Internos
        </h1>
        <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            Conflitos internos não significam incoerência. Eles surgem quando
            duas necessidades legítimas coexistem e disputam espaço — liberdade e
            segurança, proximidade e autonomia, cuidado com os outros e cuidado
            consigo.
          </p>
          <p>
            Este questionário ajuda a reconhecer tensões recorrentes entre
            desejos, medos, valores e formas de agir. O objetivo não é escolher
            um lado certo, e sim compreender por que algumas escolhas parecem
            dividir por dentro.
          </p>
          <p>
            A sensação desejada ao final:{" "}
            <em className="text-ink">
              “Agora eu entendo melhor por que algumas escolhas parecem me
              dividir por dentro.”
            </em>
          </p>
        </div>

        <div className="space-y-3 border-t border-border/70 pt-8 text-sm text-ink-muted sm:text-base">
          <p className="section-eyebrow">
            O movimento da experiência
          </p>
          <p>Uma parte de mim quer...</p>
          <p className="text-ink">↘ tensão ↗</p>
          <p>Outra parte de mim também quer...</p>
          <p className="pt-2 text-ink-muted/80">
            reconhecer → compreender → negociar → integrar
          </p>
        </div>

        <ol className="space-y-5 border-t border-border/70 pt-8">
          {[
            {
              step: "01",
              title: "Responda às situações",
              text: "Trinta perguntas sobre decisões, vínculos, mudanças e escolhas difíceis.",
            },
            {
              step: "02",
              title: "Observe a tensão",
              text: "Suas respostas revelam polos que podem ser altos ao mesmo tempo.",
            },
            {
              step: "03",
              title: "Receba o mapa",
              text: "Veja o conflito predominante, o que cada lado protege e caminhos de integração.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="stage-number text-3xl text-petrol">
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
          <Button href="/conflitos-internos/questionario">
            Conhecer meus conflitos
          </Button>
        </div>
      </article>
    </div>
  );
}
