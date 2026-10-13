import { NextResponse } from "next/server";
import { saveAnswer } from "@/server/cognitive/sessionStore";
import type { CognitiveAnswerRecord } from "@/types/cognitive";

type Params = { params: Promise<{ sessionId: string }> };

export async function POST(request: Request, { params }: Params) {
  const { sessionId } = await params;
  const body = (await request.json()) as {
    questionId?: string;
    selectedOptionId?: string | null;
    timeSpentMs?: number;
    currentIndex?: number;
  };

  if (!body.questionId) {
    return NextResponse.json(
      { error: "questionId é obrigatório." },
      { status: 400 },
    );
  }

  const answer: CognitiveAnswerRecord = {
    questionId: body.questionId,
    selectedOptionId: body.selectedOptionId ?? null,
    timeSpentMs: Math.max(0, body.timeSpentMs ?? 0),
    answeredAt: new Date().toISOString(),
  };

  const session = saveAnswer(sessionId, answer, body.currentIndex);
  if (!session) {
    return NextResponse.json(
      { error: "Sessão inválida ou já concluída." },
      { status: 404 },
    );
  }

  return NextResponse.json({ session });
}
