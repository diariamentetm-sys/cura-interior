import type { BadgeSlug } from "@/data/badges";
import type { InstrumentSlug } from "@/data/instruments";
import { createClient } from "@/lib/supabase/client";
import {
  getDiscoveryLevel,
  getLocalResultPayload,
  getNextRecommended,
  loadPortalState,
  type PortalState,
} from "@/lib/portalProgress";

export async function syncLocalProgressToSupabase(userId: string): Promise<void> {
  const supabase = createClient();
  const state = loadPortalState();

  for (const completion of state.completions) {
    const payload = getLocalResultPayload(completion.slug);
    if (!payload) continue;

    const { data: existing } = await supabase
      .from("cura_questionnaire_results")
      .select("id")
      .eq("user_id", userId)
      .eq("questionnaire_slug", completion.slug)
      .limit(1);

    if (existing && existing.length > 0) continue;

    await supabase.from("cura_questionnaire_results").insert({
      user_id: userId,
      questionnaire_slug: completion.slug,
      questionnaire_version: "1.0.0",
      completed_at: completion.completedAt,
      raw_answers: payload.answers ?? [],
      normalized_scores:
        payload.normalizedScores ?? payload.normalizedPoleScores ?? {},
      primary_result: payload.primary ?? {
        code: payload.dominantNeed ?? payload.dominantPersona ?? payload.dominantConflict,
      },
      secondary_results:
        payload.complementary ??
        payload.secondary ??
        payload.complementaryNeeds ??
        [],
      full_result: payload,
    });
  }

  const completed = state.completions.map((item) => item.slug);
  const level = getDiscoveryLevel(state.completions);
  const next = getNextRecommended(state);

  await supabase.from("cura_user_progress").upsert({
    user_id: userId,
    completed_questionnaires: completed,
    discovery_level: level,
    next_recommended_questionnaire: next,
    last_visited_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  await supabase.from("cura_profiles").upsert(
    {
      user_id: userId,
      discovery_level: level,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );

  for (const badge of state.unlockedBadges) {
    await supabase.from("cura_user_badges").upsert(
      {
        user_id: userId,
        badge_slug: badge,
      },
      { onConflict: "user_id,badge_slug" },
    );
  }
}

export async function saveAuthenticatedCompletion(options: {
  userId: string;
  slug: InstrumentSlug | string;
  result: Record<string, unknown>;
  state: PortalState;
}): Promise<void> {
  const supabase = createClient();
  const { userId, slug, result, state } = options;

  const inserted = await supabase.from("cura_questionnaire_results").insert({
    user_id: userId,
    questionnaire_slug: slug,
    questionnaire_version: "1.0.0",
    completed_at: new Date().toISOString(),
    raw_answers: result.answers ?? [],
    normalized_scores:
      result.normalizedScores ?? result.normalizedPoleScores ?? {},
    primary_result: result.primary ?? result.primaryLabel ?? {},
    secondary_results:
      result.complementary ?? result.secondary ?? result.complementaryNeeds ?? [],
    full_result: result,
  });

  if (inserted.error) {
    throw new Error(inserted.error.message);
  }

  const progress = await supabase.from("cura_user_progress").upsert({
    user_id: userId,
    completed_questionnaires: state.completions.map((item) => item.slug),
    discovery_level: getDiscoveryLevel(state.completions),
    next_recommended_questionnaire: getNextRecommended(state),
    last_visited_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  if (progress.error) {
    throw new Error(progress.error.message);
  }

  for (const badge of state.unlockedBadges as BadgeSlug[]) {
    const savedBadge = await supabase.from("cura_user_badges").upsert(
      {
        user_id: userId,
        badge_slug: badge,
      },
      { onConflict: "user_id,badge_slug" },
    );
    if (savedBadge.error) {
      throw new Error(savedBadge.error.message);
    }
  }
}
