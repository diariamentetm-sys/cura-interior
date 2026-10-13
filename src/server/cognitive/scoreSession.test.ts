import { describe, expect, it } from "vitest";
import { selectAssessmentQuestions } from "./selectQuestions";
import { scoreSession } from "./scoreSession";
import { toPublicQuestions } from "./questionBank";

describe("scoreSession", () => {
  it("scores by category without exposing keys in public questions", () => {
    const questions = selectAssessmentQuestions({ seed: "score-1" });
    const publicQs = toPublicQuestions(questions);
    expect(publicQs.every((q) => !("correctOptionId" in q))).toBe(true);
    expect(publicQs.every((q) => !("explanation" in q))).toBe(true);

    const answers = questions.map((q, index) => ({
      questionId: q.id,
      selectedOptionId:
        index % 2 === 0 ? q.correctOptionId : q.options[0].id === q.correctOptionId
          ? q.options[1].id
          : q.options[0].id,
      timeSpentMs: 20_000 + index * 100,
      answeredAt: new Date().toISOString(),
    }));

    const result = scoreSession({
      sessionId: "sess-1",
      assessmentId: "cognitive-main-v1",
      questionIds: questions.map((q) => q.id),
      answers,
    });

    expect(result.totalQuestions).toBe(30);
    expect(result.answeredCount).toBe(30);
    expect(result.scoresByCategory).toHaveLength(5);
    expect(result.explanations).toHaveLength(30);
    expect(result.correctCount).toBeGreaterThan(0);
    expect(result.insights.length).toBeGreaterThan(0);
  });
});
