import { NextResponse } from "next/server";
import { completeSession } from "@/server/cognitive/sessionStore";

type Params = { params: Promise<{ sessionId: string }> };

export async function POST(_request: Request, { params }: Params) {
  const { sessionId } = await params;
  const result = completeSession(sessionId);
  if (!result) {
    return NextResponse.json(
      { error: "Sessão não encontrada." },
      { status: 404 },
    );
  }
  return NextResponse.json({ result });
}
