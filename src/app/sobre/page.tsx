import { Button } from "@/components/Button";

export default function SobrePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <article className="animate-fade-up space-y-8">
        <p className="section-eyebrow">Sobre</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl md:text-6xl">
          Autoconhecimento
          <br />
          com energia.
        </h1>
        <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            O Cura Interior nasce da ideia de que olhar para dentro não precisa
            parecer consultório. Inspirado em Jung, o portal convida você a
            explorar arquétipos, sombra, persona, necessidades e conflitos — com
            ritmo leve e linguagem direta.
          </p>
          <p>
            Os mapas são simbólicos, não diagnósticos. Eles oferecem palavras
            para reconhecer forças, tensões e possibilidades na vida real.
          </p>
          <p>
            Sem checklist. Sem ranking. Só camadas do seu mapa, no seu tempo.
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
          <Button href="/arquetipos">Começar a me conhecer</Button>
          <Button href="/explorar" variant="secondary">
            Explorar experiências
          </Button>
        </div>
      </article>
    </div>
  );
}
