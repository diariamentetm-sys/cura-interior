import { getArchetype } from "@/data/archetypes";
import type { ArchetypeScore, DimensionKey } from "@/types/archetypes";

type DimensionResultProps = {
  dimension: DimensionKey;
  score: ArchetypeScore;
};

const DIMENSION_COPY: Record<
  Exclude<DimensionKey, "integration">,
  { title: string; description: string }
> = {
  motivation: {
    title: "O que mais move você",
    description: "Arquétipo predominante nas perguntas de motivação.",
  },
  behavior: {
    title: "Como você tende a agir",
    description: "Arquétipo predominante nas perguntas comportamentais.",
  },
  fear: {
    title: "O que mais desestabiliza você",
    description: "Arquétipo predominante nas perguntas relacionadas ao medo.",
  },
};

export function DimensionResult({ dimension, score }: DimensionResultProps) {
  if (dimension === "integration") return null;

  const copy = DIMENSION_COPY[dimension];
  const archetype = getArchetype(score.code);

  return (
    <article className="space-y-3 border-t border-border/80 pt-6 first:border-t-0 first:pt-0">
      <div className="space-y-1">
        <h3 className="font-display text-xl text-ink sm:text-2xl">
          {copy.title}
        </h3>
        <p className="text-sm text-ink-muted">{copy.description}</p>
      </div>
      <p className="text-base text-ink">
        <span className="text-wine">{archetype.name}</span>
        <span className="text-ink-muted"> — {score.percentage}%</span>
      </p>
    </article>
  );
}
