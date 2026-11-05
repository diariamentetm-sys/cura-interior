import { instruments, type InstrumentSlug } from "@/data/instruments";
import type { LocalCompletion } from "@/lib/portalProgress";

/**
 * Cada conclusão grava uma tentativa nova.
 * O resultado atual de uma avaliação é a tentativa com completed_at mais recente
 * para a mesma conta e o mesmo slug. O progresso conta slugs distintos, não linhas.
 */
export type AccountResultRow = {
  questionnaire_slug: string;
  completed_at: string;
  primary_result: unknown;
  full_result: unknown;
};

function timeValue(value: string): number {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function isNewerAttempt(candidate: string, current: string): boolean {
  return timeValue(candidate) > timeValue(current);
}

export function latestAttemptRows(rows: AccountResultRow[]): AccountResultRow[] {
  const latest = new Map<string, AccountResultRow>();

  for (const row of rows) {
    const current = latest.get(row.questionnaire_slug);
    if (!current || isNewerAttempt(row.completed_at, current.completed_at)) {
      latest.set(row.questionnaire_slug, row);
    }
  }

  return [...latest.values()];
}

export function completionsFromAttempts(rows: AccountResultRow[]): LocalCompletion[] {
  return latestAttemptRows(rows)
    .filter((row) => instruments.some((item) => item.slug === row.questionnaire_slug))
    .map((row) => ({
      slug: row.questionnaire_slug as InstrumentSlug,
      completedAt: row.completed_at,
      primaryLabel: primaryLabelFrom(row),
    }));
}

export function attemptTimestamp(
  result: Record<string, unknown>,
  fallback: string,
): string {
  if (typeof result.calculatedAt === "string" && result.calculatedAt) {
    return result.calculatedAt;
  }
  if (typeof result.completedAt === "string" && result.completedAt) {
    return result.completedAt;
  }
  return fallback;
}

function primaryLabelFrom(row: AccountResultRow): string | undefined {
  const full = row.full_result;
  if (full && typeof full === "object" && !Array.isArray(full)) {
    const label = (full as Record<string, unknown>).primaryLabel;
    if (typeof label === "string" && label.trim()) return label;
  }
  if (typeof row.primary_result === "string" && row.primary_result.trim()) {
    return row.primary_result;
  }
  return undefined;
}
