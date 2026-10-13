import { describe, expect, it } from "vitest";
import { COGNITIVE_CATEGORIES, COGNITIVE_DIFFICULTIES } from "@/types/cognitive";
import { selectAssessmentQuestions } from "./selectQuestions";

describe("selectAssessmentQuestions", () => {
  it("selects 30 unique questions with difficulty progression", () => {
    const selected = selectAssessmentQuestions({ seed: "test-seed-1" });
    expect(selected).toHaveLength(30);

    const ids = selected.map((q) => q.id);
    expect(new Set(ids).size).toBe(30);

    for (const category of COGNITIVE_CATEGORIES) {
      expect(selected.filter((q) => q.category === category)).toHaveLength(6);
    }

    for (const difficulty of COGNITIVE_DIFFICULTIES) {
      expect(selected.filter((q) => q.difficulty === difficulty)).toHaveLength(
        10,
      );
    }

    const firstEasy = selected.findIndex((q) => q.difficulty === "easy");
    const firstIntermediate = selected.findIndex(
      (q) => q.difficulty === "intermediate",
    );
    const firstAdvanced = selected.findIndex((q) => q.difficulty === "advanced");
    expect(firstEasy).toBeLessThan(firstIntermediate);
    expect(firstIntermediate).toBeLessThan(firstAdvanced);
  });

  it("avoids excluded ids", () => {
    const first = selectAssessmentQuestions({ seed: "exclude-a" });
    const excludeIds = first.slice(0, 5).map((q) => q.id);
    const second = selectAssessmentQuestions({
      seed: "exclude-b",
      excludeIds,
    });
    for (const id of excludeIds) {
      expect(second.some((q) => q.id === id)).toBe(false);
    }
  });
});
