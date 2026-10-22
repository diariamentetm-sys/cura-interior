import { createClient } from "@/lib/supabase/client";
import type { CognitiveResult } from "@/types/cognitive";

export async function syncCognitiveResultToSupabase(
  userId: string,
  result: CognitiveResult,
): Promise<void> {
  const supabase = createClient();

  const existing = await supabase
    .from("cura_cognitive_results")
    .select("id")
    .eq("user_id", userId)
    .eq("session_id", result.sessionId)
    .maybeSingle();

  if (existing.error && existing.error.code !== "PGRST116") {
    throw new Error(existing.error.message);
  }

  if (existing.data) return;

  const { error } = await supabase.from("cura_cognitive_results").insert({
    user_id: userId,
    session_id: result.sessionId,
    assessment_id: result.assessmentId,
    completed_at: result.completedAt,
    correct_count: result.correctCount,
    answered_count: result.answeredCount,
    total_questions: result.totalQuestions,
    scores_by_category: result.scoresByCategory,
    insights: result.insights,
    full_result: result,
  });

  if (error) {
    throw new Error(error.message);
  }
}
