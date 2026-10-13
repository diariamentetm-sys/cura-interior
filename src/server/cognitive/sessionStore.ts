import "server-only";

import { randomUUID } from "node:crypto";
import {
  ASSESSMENT_MAIN_ID,
  ASSESSMENT_VERSION,
  type CognitiveAnswerRecord,
  type CognitiveResult,
  type CognitiveSession,
} from "@/types/cognitive";
import { selectAssessmentQuestions } from "./selectQuestions";
import { scoreSession } from "./scoreSession";
import { getQuestionsByIds, toPublicQuestions } from "./questionBank";

type StoreRecord = {
  session: CognitiveSession;
  result?: CognitiveResult;
};

const globalStore = globalThis as typeof globalThis & {
  __curaCognitiveSessions?: Map<string, StoreRecord>;
};

function store(): Map<string, StoreRecord> {
  if (!globalStore.__curaCognitiveSessions) {
    globalStore.__curaCognitiveSessions = new Map();
  }
  return globalStore.__curaCognitiveSessions;
}

export function createCognitiveSession(clientKey?: string): {
  session: CognitiveSession;
  questions: ReturnType<typeof toPublicQuestions>;
} {
  const selected = selectAssessmentQuestions({
    seed: `${clientKey ?? "anon"}-${Date.now()}`,
  });
  const now = new Date().toISOString();
  const session: CognitiveSession = {
    id: randomUUID(),
    assessmentId: ASSESSMENT_MAIN_ID,
    assessmentVersion: ASSESSMENT_VERSION,
    questionIds: selected.map((q) => q.id),
    status: "in_progress",
    currentIndex: 0,
    startedAt: now,
    updatedAt: now,
    answers: [],
    clientKey,
  };

  store().set(session.id, { session });

  return {
    session,
    questions: toPublicQuestions(selected),
  };
}

export function getSessionRecord(sessionId: string): StoreRecord | undefined {
  return store().get(sessionId);
}

export function getPublicSession(sessionId: string) {
  const record = store().get(sessionId);
  if (!record) return null;

  const questions = toPublicQuestions(
    getQuestionsByIds(record.session.questionIds),
  );

  return {
    session: record.session,
    questions,
    result: record.result ?? null,
  };
}

export function saveAnswer(
  sessionId: string,
  answer: CognitiveAnswerRecord,
  currentIndex?: number,
): CognitiveSession | null {
  const record = store().get(sessionId);
  if (!record || record.session.status !== "in_progress") return null;

  const answers = [...record.session.answers];
  const existing = answers.findIndex((a) => a.questionId === answer.questionId);
  if (existing >= 0) answers[existing] = answer;
  else answers.push(answer);

  record.session = {
    ...record.session,
    answers,
    currentIndex:
      typeof currentIndex === "number"
        ? currentIndex
        : record.session.currentIndex,
    updatedAt: new Date().toISOString(),
  };
  store().set(sessionId, record);
  return record.session;
}

export function completeSession(sessionId: string): CognitiveResult | null {
  const record = store().get(sessionId);
  if (!record) return null;
  if (record.result) return record.result;

  const result = scoreSession({
    sessionId: record.session.id,
    assessmentId: record.session.assessmentId,
    questionIds: record.session.questionIds,
    answers: record.session.answers,
  });

  record.session = {
    ...record.session,
    status: "completed",
    updatedAt: new Date().toISOString(),
  };
  record.result = result;
  store().set(sessionId, record);
  return result;
}
