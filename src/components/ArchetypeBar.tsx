import { ScoreBar } from "@/components/ScoreBar";
import { getArchetype } from "@/data/archetypes";
import type { ArchetypeScore } from "@/types/archetypes";

type ArchetypeBarProps = {
  score: ArchetypeScore;
  rank: number;
};

export function ArchetypeBar({ score, rank }: ArchetypeBarProps) {
  const archetype = getArchetype(score.code);

  return (
    <ScoreBar
      name={archetype.name}
      percentage={score.percentage}
      rank={rank}
    />
  );
}
