import { Button } from "@/components/Button";

export default function NecessidadesEmocionaisIntroPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <article className="animate-fade-up space-y-8">
        <p className="section-eyebrow">
          Experiência
        </p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Descubra suas Necessidades Emocionais
        </h1>
        <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            Algumas necessidades emocionais influenciam silenciosamente as
            escolhas, relações, expectativas e reações. Segurança, conexão,
            autonomia, reconhecimento, liberdade e sentido são apenas alguns dos
            nomes possíveis para aquilo que o coração busca.
          </p>
          <p>
            Este questionário não diagnostica. Ele ajuda você a perceber o que
            realmente precisa — consciente ou inconscientemente — para se sentir
            mais seguro, valorizado, conectado e inteiro.
          </p>
          <p>
            A sensação desejada ao final é simples:{" "}
            <em className="text-ink">
              “Agora eu consigo entender melhor o que realmente preciso.”
            </em>
          </p>
        </div>

        <div className="space-y-3 border-t border-border/70 pt-8 text-sm text-ink-muted sm:text-base">
          <p className="section-eyebrow">
            O caminho da experiência
          </p>
          <p>O que acontece</p>
          <p className="text-ink-muted/80">↓ o que eu sinto</p>
          <p className="text-ink">O que eu preciso</p>
          <p className="text-ink-muted/80">↓ o que eu busco → como eu ajo</p>
        </div>

        <ol className="space-y-5 border-t border-border/70 pt-8">
          {[
            {
              step: "01",
              title: "Responda às situações",
              text: "Trinta perguntas sobre decisões, vínculos, mudanças e momentos difíceis.",
            },
            {
              step: "02",
              title: "Observe o que pesa",
              text: "Suas escolhas revelam necessidades, não falhas.",
            },
            {
              step: "03",
              title: "Receba o mapa",
              text: "Veja a necessidade predominante, as famílias e os equilíbrios importantes.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="stage-number text-3xl text-accent-green">
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
          <Button href="/necessidades-emocionais/questionario">
            Conhecer minhas necessidades
          </Button>
        </div>
      </article>
    </div>
  );
}
