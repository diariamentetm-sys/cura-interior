import { describe, expect, it } from "vitest";
import { COGNITIVE_QUESTION_BANK } from "./questionBank";
import { validateQuestionBank } from "./validateBank";

describe("validateQuestionBank", () => {
  it("accepts the full original bank", () => {
    const result = validateQuestionBank(COGNITIVE_QUESTION_BANK);
    expect(result.ok).toBe(true);
    expect(result.issues).toEqual([]);
  });

  it("requires a single matching correct option", () => {
    const [first] = COGNITIVE_QUESTION_BANK;
    const broken = {
      ...first,
      id: "broken-1",
      correctOptionId: "does-not-exist",
    };
    const result = validateQuestionBank([
      ...COGNITIVE_QUESTION_BANK.slice(0, 89),
      broken,
    ]);
    expect(result.ok).toBe(false);
    expect(
      result.issues.some((i) => i.message.includes("correctOptionId")),
    ).toBe(true);
  });
});
