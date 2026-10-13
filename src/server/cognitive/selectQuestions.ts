import "server-only";

import {
  COGNITIVE_CATEGORIES,
  COGNITIVE_DIFFICULTIES,
  type CognitiveCategory,
  type CognitiveDifficulty,
  type CognitiveQuestion,
} from "@/types/cognitive";
import { COGNITIVE_QUESTION_BANK } from "./questionBank";

export type SelectionOptions = {
  perCategory?: number;
  perDifficultyPerCategory?: number;
  excludeIds?: string[];
  seed?: string;
};

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], rand: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Selects 2 easy + 2 intermediate + 2 advanced per category (30 total),
 * ordered by rising difficulty, rotating categories within each difficulty band.
 */
export function selectAssessmentQuestions(
  options: SelectionOptions = {},
): CognitiveQuestion[] {
  const perDifficulty = options.perDifficultyPerCategory ?? 2;
  const exclude = new Set(options.excludeIds ?? []);
  const rand = mulberry32(hashSeed(options.seed ?? `seed-${Date.now()}`));

  const pool = COGNITIVE_QUESTION_BANK.filter((q) => !exclude.has(q.id));
  const picked: CognitiveQuestion[] = [];
  const used = new Set<string>();

  for (const difficulty of COGNITIVE_DIFFICULTIES) {
    for (const category of COGNITIVE_CATEGORIES) {
      const candidates = shuffle(
        pool.filter(
          (q) =>
            q.category === category &&
            q.difficulty === difficulty &&
            !used.has(q.id),
        ),
        rand,
      );

      if (candidates.length < perDifficulty) {
        throw new Error(
          `Not enough questions for ${category}/${difficulty}. Need ${perDifficulty}, found ${candidates.length}.`,
        );
      }

      for (let i = 0; i < perDifficulty; i += 1) {
        picked.push(candidates[i]);
        used.add(candidates[i].id);
      }
    }
  }

  // Interleave categories within each difficulty band for variety.
  const ordered: CognitiveQuestion[] = [];
  for (const difficulty of COGNITIVE_DIFFICULTIES) {
    const band = picked.filter((q) => q.difficulty === difficulty);
    const byCat = new Map<CognitiveCategory, CognitiveQuestion[]>();
    for (const category of COGNITIVE_CATEGORIES) {
      byCat.set(
        category,
        band.filter((q) => q.category === category),
      );
    }
    for (let slot = 0; slot < perDifficulty; slot += 1) {
      for (const category of COGNITIVE_CATEGORIES) {
        const list = byCat.get(category) ?? [];
        if (list[slot]) ordered.push(list[slot]);
      }
    }
  }

  return ordered;
}

export function countAvailable(
  category?: CognitiveCategory,
  difficulty?: CognitiveDifficulty,
): number {
  return COGNITIVE_QUESTION_BANK.filter((q) => {
    if (category && q.category !== category) return false;
    if (difficulty && q.difficulty !== difficulty) return false;
    return true;
  }).length;
}
