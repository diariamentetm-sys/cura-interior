import { describe, expect, it } from "vitest";
import {
  completeSession,
  createCognitiveSession,
  getPublicSession,
  saveAnswer,
} from "./sessionStore";

describe("sessionStore", () => {
  it("creates a session without leaking answer keys", () => {
    const { session, questions } = createCognitiveSession("test-client");
    expect(session.questionIds).toHaveLength(30);
    expect(questions).toHaveLength(30);
    for (const q of questions) {
      expect(q).not.toHaveProperty("correctOptionId");
      expect(q).not.toHaveProperty("explanation");
    }

    const publicView = getPublicSession(session.id);
    expect(publicView?.result).toBeNull();
    expect(publicView?.questions[0]).not.toHaveProperty("correctOptionId");
  });

  it("persists answers and resumes progress", () => {
    const { session, questions } = createCognitiveSession("resume-client");
    const first = questions[0];
    const updated = saveAnswer(
      session.id,
      {
        questionId: first.id,
        selectedOptionId: first.options[0].id,
        timeSpentMs: 12_000,
        answeredAt: new Date().toISOString(),
      },
      1,
    );
    expect(updated?.currentIndex).toBe(1);
    expect(updated?.answers).toHaveLength(1);

    const resumed = getPublicSession(session.id);
    expect(resumed?.session.currentIndex).toBe(1);
    expect(resumed?.session.answers[0]?.questionId).toBe(first.id);
  });

  it("only reveals explanations after complete", () => {
    const { session, questions } = createCognitiveSession("complete-client");
    for (const [index, question] of questions.entries()) {
      saveAnswer(
        session.id,
        {
          questionId: question.id,
          selectedOptionId: question.options[0].id,
          timeSpentMs: 5_000,
          answeredAt: new Date().toISOString(),
        },
        index,
      );
    }

    const before = getPublicSession(session.id);
    expect(before?.result).toBeNull();

    const result = completeSession(session.id);
    expect(result?.explanations.length).toBe(30);
    expect(result?.explanations[0]?.correctOptionId).toBeTruthy();

    const after = getPublicSession(session.id);
    expect(after?.result?.explanations.length).toBe(30);
    expect(after?.session.status).toBe("completed");
  });
});
