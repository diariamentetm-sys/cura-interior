import type { BadgeSlug } from "@/data/badges";
import { instruments, getInstrument, type InstrumentSlug } from "@/data/instruments";
import {
  attemptTimestamp,
  completionsFromAttempts,
  isNewerAttempt,
  latestAttemptRows,
  type AccountResultRow,
} from "@/lib/accountResults";
import {
  clearCognitiveDeviceCache,
  recordCognitiveExploration,
  saveLocalCognitiveResult,
} from "@/lib/cognitive/storage";
import { clearInstrumentResult, clearLikertProgress, saveInstrumentResult } from "@/lib/instrumentStorage";
import {
  applyRemoteCompletions,
  getDiscoveryLevel,
  getLocalResultPayload,
  getNextRecommended,
  loadPortalState,
  localResultsBelongTo,
  rememberPortalOwner,
  type PortalState,
} from "@/lib/portalProgress";
import { createClient } from "@/lib/supabase/client";
import type { CognitiveResult } from "@/types/cognitive";

type ResultRow = {
  user_id: string;
  questionnaire_slug: string;
  questionnaire_version: string;
  completed_at: string;
  raw_answers: unknown;
  normalized_scores: unknown;
  primary_result: unknown;
  secondary_results: unknown;
  full_result: unknown;
};

function assertNoError(error: { message: string } | null, context: string) {
  if (error) throw new Error(`${context}: ${error.message}`);
}

function resultRowFrom(
  userId: string,
  slug: string,
  result: Record<string, unknown>,
  completedAt: string,
): ResultRow {
  return {
    user_id: userId,
    questionnaire_slug: slug,
    questionnaire_version: "1.0.0",
    completed_at: completedAt,
    raw_answers: result.answers ?? [],
    normalized_scores: result.normalizedScores ?? result.normalizedPoleScores ?? {},
    primary_result: result.primary ?? result.primaryLabel ?? {},
    secondary_results:
      result.complementary ?? result.secondary ?? result.complementaryNeeds ?? [],
    full_result: result,
  };
}

async function saveResultRow(row: ResultRow) {
  const supabase = createClient();
  const inserted = await supabase.from("cura_questionnaire_results").insert(row);
  assertNoError(inserted.error, "Salvar teste");
}

async function saveProgressSnapshot(userId: string, state: PortalState) {
  const supabase = createClient();
  const completed = state.completions.map((item) => item.slug);
  const level = getDiscoveryLevel(state.completions);
  const next = getNextRecommended(state);

  const progress = await supabase.from("cura_user_progress").upsert(
    {
      user_id: userId,
      completed_questionnaires: completed,
      discovery_level: level,
      next_recommended_questionnaire: next,
      last_visited_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );
  assertNoError(progress.error, "Salvar progresso");

  const profile = await supabase.from("cura_profiles").upsert(
    {
      user_id: userId,
      discovery_level: level,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );
  assertNoError(profile.error, "Salvar perfil");

  for (const badge of state.unlockedBadges) {
    const savedBadge = await supabase.from("cura_user_badges").upsert(
      {
        user_id: userId,
        badge_slug: badge,
      },
      { onConflict: "user_id,badge_slug" },
    );
    assertNoError(savedBadge.error, "Salvar insígnia");
  }
}

function clearDeviceAssessmentCache() {
  for (const instrument of instruments) {
    clearInstrumentResult(instrument.storageNamespace);
    clearLikertProgress(instrument.storageNamespace);
  }
  clearCognitiveDeviceCache();
}

function hydrateAccountResults(rows: AccountResultRow[]) {
  for (const row of latestAttemptRows(rows)) {
    const meta = getInstrument(row.questionnaire_slug as InstrumentSlug);
    const full = row.full_result;
    if (!meta || !full || typeof full !== "object" || Array.isArray(full)) continue;
    if (Object.keys(full).length === 0) continue;

    if (meta.external) {
      const result = full as CognitiveResult;
      if (!result.sessionId || !result.completedAt) continue;
      saveLocalCognitiveResult(result);
      recordCognitiveExploration(result);
      continue;
    }

    saveInstrumentResult(meta.storageNamespace, full as Record<string, unknown>);
  }
}

async function fetchAccountRows(userId: string): Promise<AccountResultRow[]> {
  const supabase = createClient();
  const existing = await supabase
    .from("cura_questionnaire_results")
    .select("questionnaire_slug, completed_at, primary_result, full_result")
    .eq("user_id", userId);

  assertNoError(existing.error, "Ler testes salvos");
  return (existing.data ?? []) as AccountResultRow[];
}

async function uploadLocalAttempts(userId: string, rows: AccountResultRow[]) {
  const state = loadPortalState();
  const latestRemote = new Map<string, string>();

  for (const row of rows) {
    const current = latestRemote.get(row.questionnaire_slug);
    if (!current || isNewerAttempt(row.completed_at, current)) {
      latestRemote.set(row.questionnaire_slug, row.completed_at);
    }
  }

  for (const completion of state.completions) {
    const payload = getLocalResultPayload(completion.slug);
    if (!payload) continue;
    const timestamp = attemptTimestamp(payload, completion.completedAt);
    const remote = latestRemote.get(completion.slug);
    if (remote && !isNewerAttempt(timestamp, remote)) continue;

    await saveResultRow(resultRowFrom(userId, completion.slug, payload, timestamp));
    latestRemote.set(completion.slug, timestamp);
  }
}

export async function reloadAccountPortal(userId: string): Promise<PortalState> {
  const sameDevice = localResultsBelongTo(userId);
  if (!sameDevice) {
    clearDeviceAssessmentCache();
  }

  let rows = await fetchAccountRows(userId);

  if (sameDevice) {
    await uploadLocalAttempts(userId, rows);
    rows = await fetchAccountRows(userId);
  }

  hydrateAccountResults(rows);
  rememberPortalOwner(userId);
  const state = applyRemoteCompletions(completionsFromAttempts(rows), {
    fresh: !sameDevice,
  });
  await saveProgressSnapshot(userId, state);
  return state;
}

export async function syncLocalProgressToSupabase(userId: string): Promise<void> {
  await reloadAccountPortal(userId);
}

export async function saveAuthenticatedCompletion(options: {
  userId: string;
  slug: InstrumentSlug | string;
  result: Record<string, unknown>;
  state: PortalState;
}): Promise<void> {
  const { userId, slug, result, state } = options;
  const completedAt = attemptTimestamp(result, new Date().toISOString());

  await saveResultRow(resultRowFrom(userId, slug, result, completedAt));
  rememberPortalOwner(userId);
  await saveProgressSnapshot(userId, state);
}
