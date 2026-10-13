import { Button } from "@/components/Button";
import { CATEGORY_LABELS, COGNITIVE_CATEGORIES } from "@/types/cognitive";

export default function CognitiveIntroPage() {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-10 px-5 py-14 sm:px-8 sm:py-20">
      <header className="space-y-5">
        <p className="section-eyebrow">Questionário</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl">
          Perfil Cognitivo
        </h1>
      </header>

      <section className="space-y-4">
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          Por que um problema parece claro para uma pessoa e opaco para outra?
          Por que há quem “veja” o padrão numa figura e quem precise traduzir
          tudo em palavras ou números antes de avançar?
        </p>
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          Esta avaliação observa como você resolve exercícios de raciocínio
          nesta sessão — em dimensões como pensamento abstrato, numérico,
          espacial, verbal e dedutivo. O objetivo é mapear desempenho e
          estratégias, não rotular sua inteligência.
        </p>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="font-display text-2xl text-ink">Como este teste funciona</h2>
        <p className="text-base leading-relaxed text-ink-muted">
          Trata-se de uma bateria exploratória desenvolvida para o Cura Interior:
          itens de escolha com dificuldades variadas, apresentados em sequência.
          Ao final, você vê acertos por dimensão e textos que descrevem o que
          esta tentativa sugere — sem QI, sem percentis normativos clínicos e
          sem diagnóstico.
        </p>
        <p className="text-base leading-relaxed text-ink-muted">
          <strong className="font-semibold text-ink">
            Isto não é um teste clínico de QI
          </strong>
          , não é avaliação neuropsicológica e não substitui acompanhamento
          profissional. Desempenho varia com sono, familiaridade com o formato,
          ansiedade situacional e prática prévia.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {COGNITIVE_CATEGORIES.map((category) => (
            <li
              key={category}
              className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink"
            >
              {CATEGORY_LABELS[category]}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="font-display text-2xl text-ink">Antes de responder</h2>
        <ul className="space-y-3">
          {[
            "Leia cada enunciado e as opções com atenção antes de escolher.",
            "Siga as regras apresentadas em cada exercício — não invente atalhos que alterem o problema.",
            "Responda sem consultar outras pessoas; use apenas o que a própria questão permitir.",
            "Se houver pressão de tempo implícita pelo ritmo da sessão, priorize clareza sem se precipitar à toa.",
            "Lembre-se: errar faz parte do mapa desta tentativa e não define capacidade global.",
          ].map((item) => (
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
        <h2 className="font-display text-xl text-ink">Informações práticas</h2>
        <ul className="space-y-2">
          <li>30 questões · cerca de 25 a 35 minutos</li>
          <li>Formato: escolha de alternativa (incluindo itens com figuras).</li>
          <li>
            Progresso nesta sessão; você pode revisar o fluxo conforme a
            interface permitir.
          </li>
          <li>
            Natureza exploratória — registro de desempenho desta tentativa, sem
            norma clínica.
          </li>
        </ul>
        <p className="pt-2 text-base text-ink">
          Quando estiver pronto, podemos começar.
        </p>
      </section>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button href="/habilidades-cognitivas/avaliacao">Começar avaliação</Button>
        <Button href="/habilidades-cognitivas/memoria" variant="secondary">
          Memória e atenção
        </Button>
        <Button href="/modulos/inteligencia-cognicao" variant="ghost">
          Voltar ao módulo
        </Button>
      </div>
    </article>
  );
}
