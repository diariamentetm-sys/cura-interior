import { IntelectoCompanion } from "@/components/mapa/IntelectoCompanion";
import type { IntelectoMood, NextDiscovery } from "@/lib/meuMapa";

type MeuUniversoHeroProps = {
  name: string;
  completed: number;
  total: number;
  headline: string;
  support: string;
  discovery: NextDiscovery;
  mood: IntelectoMood;
  intelectoLine: string;
};

export function MeuUniversoHero({
  name,
  completed,
  total,
  headline,
  support,
  mood,
  intelectoLine,
}: MeuUniversoHeroProps) {
  const progressLabel = `${completed} de ${total} descobertas`;

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-hero text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,211,77,0.25), transparent 40%)",
        }}
      />

      <div className="relative grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10 lg:px-10 lg:py-12">
        <div className="space-y-5 animate-fade-up">
          <p className="text-xs font-semibold tracking-[0.16em] text-cream/75 uppercase">
            Meu Universo
          </p>
          <h1 className="display-xl text-3xl text-cream sm:text-4xl md:text-5xl">
            Olá, {name}.
          </h1>
          <p className="font-display text-xl leading-snug text-cream sm:text-2xl">
            {headline}
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-cream/85 sm:text-base">
            {support}
          </p>

          <div className="space-y-2 pt-1" aria-label={progressLabel}>
            <div className="flex items-center justify-between gap-3 text-xs font-semibold tracking-wide text-cream/80">
              <span>Exploração pessoal</span>
              <span>
                {completed}/{total}
              </span>
            </div>
            <div className="flex gap-1.5" aria-hidden="true">
              {Array.from({ length: total }).map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className={`h-2.5 flex-1 rounded-full transition-colors ${
                    index < completed ? "bg-accent-yellow" : "bg-cream/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <IntelectoCompanion
          mood={mood}
          line={intelectoLine}
          size="lg"
          tone="onHero"
        />
      </div>
    </section>
  );
}
