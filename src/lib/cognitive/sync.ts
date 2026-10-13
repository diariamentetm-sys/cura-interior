import { createClient } from "@/lib/supabase/client";
import type { CognitiveResult } from "@/types/cognitive";

export async function syncCognitiveResultToSupabase(
  userId: string,
  result: CognitiveResult,
): Promise<void> {
  const supabase = createClient();

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
    // Table may not exist yet in every environment — keep local result usable.
    console.warn("cognitive sync skipped/failed", error.message);
  }
}
