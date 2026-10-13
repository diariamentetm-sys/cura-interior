import { NextResponse } from "next/server";
import { createCognitiveSession } from "@/server/cognitive/sessionStore";

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      clientKey?: string;
    };
    const created = createCognitiveSession(body.clientKey);
    return NextResponse.json(created);
  } catch (error) {
    console.error("cognitive session create failed", error);
    return NextResponse.json(
      { error: "Não foi possível iniciar a avaliação." },
      { status: 500 },
    );
  }
}
