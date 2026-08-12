import { getArchetype } from "@/data/archetypes";
import { ArchetypeMark } from "@/components/ArchetypeMark";
import type { ArchetypeScore } from "@/types/archetypes";

type ArchetypeResultProps = {
  score: ArchetypeScore;
};

export function ArchetypeResult({ score }: ArchetypeResultProps) {
  const archetype = getArchetype(score.code);

  return (
    <section className="animate-fade-up space-y-8 text-center">
      <p className="text-xs tracking-[0.22em] text-ink-muted uppercase">
        Seu arquétipo predominante
      </p>

      <div className="mx-auto flex max-w-md flex-col items-center gap-6">
        <div className="h-36 w-36 text-wine sm:h-44 sm:w-44">
          <ArchetypeMark code={score.code} />
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-4xl text-ink sm:text-5xl">
            {archetype.name}
          </h1>
          <p className="text-lg text-terracotta">
            {score.percentage}% de afinidade
          </p>
        </div>
      </div>

      <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
        {archetype.resultIntro}
      </p>

      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-olive">
        {archetype.keywords.map((keyword) => (
          <li key={keyword} className="tracking-wide">
            {keyword}
          </li>
        ))}
      </ul>
    </section>
  );
}
