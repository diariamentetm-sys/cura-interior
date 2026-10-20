const FEATURE_MENTAL_GYM = false;

const categories = [
  "Memória",
  "Atenção",
  "Raciocínio",
  "Linguagem",
  "Percepção",
] as const;

/** Placeholder arquitetural — sem jogos fictícios ou CTAs para rotas inexistentes. */
export function MentalGymTeaser() {
  if (FEATURE_MENTAL_GYM) return null;

  return (
    <section
      className="rounded-[1.75rem] border border-border bg-[linear-gradient(135deg,color-mix(in_srgb,var(--lavender)_16%,white),white_55%,color-mix(in_srgb,var(--sand)_70%,white))] px-5 py-7 sm:px-8"
      aria-labelledby="ginastica-title"
      id="ginastica-mental-teaser"
    >
      <div className="max-w-2xl space-y-4">
        <p className="section-eyebrow">Em breve</p>
        <h2
          id="ginastica-title"
          className="display-xl text-3xl text-ink sm:text-4xl"
        >
          Ginástica Mental.
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
          Uma área futura de prática cognitiva com desafios curtos. O progresso
          dela será independente da sua exploração pessoal — sem misturar
          pontuações nem julgar capacidade.
        </p>
        <ul className="flex flex-wrap gap-2 pt-1" aria-label="Categorias previstas">
          {categories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs font-semibold tracking-wide text-ink-muted"
            >
              {category}
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink-muted">
          Ainda não há atividades disponíveis nesta área.
        </p>
      </div>
    </section>
  );
}
