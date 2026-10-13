import { NextResponse } from "next/server";
import { getPublicSession } from "@/server/cognitive/sessionStore";

type Params = { params: Promise<{ sessionId: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { sessionId } = await params;
  const payload = getPublicSession(sessionId);
  if (!payload) {
    return NextResponse.json({ error: "Sessão não encontrada." }, { status: 404 });
  }
  return NextResponse.json(payload);
}
