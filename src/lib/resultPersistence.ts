import type { InstrumentSlug } from "@/data/instruments";
import type { PortalState } from "@/lib/portalProgress";
import { saveAuthenticatedCompletion } from "@/lib/portalSync";

const inflight = new Map<string, Promise<void>>();

export function resultSyncToken(result: {
  calculatedAt?: string;
  sessionId?: string;
}): string {
  return result.sessionId ?? result.calculatedAt ?? "sessao";
}

function storageKey(userId: string, slug: string, token: string): string {
  return `cura-result-sync:${userId}:${slug}:${token}`;
}

export function isResultPersisted(
  userId: string,
  slug: string,
  token: string,
): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(storageKey(userId, slug, token)) === "1";
}

export function persistResultOnce(options: {
  userId: string;
  slug: InstrumentSlug | string;
  token: string;
  result: Record<string, unknown>;
  state: PortalState;
}): Promise<void> {
  const key = storageKey(options.userId, options.slug, options.token);
  if (typeof window !== "undefined" && window.localStorage.getItem(key) === "1") {
    return Promise.resolve();
  }

  const pending = inflight.get(key);
  if (pending) return pending;

  const task = saveAuthenticatedCompletion({
    userId: options.userId,
    slug: options.slug,
    result: options.result,
    state: options.state,
  }).then(() => {
    window.localStorage.setItem(key, "1");
  });

  inflight.set(key, task);
  task.catch(() => {
    inflight.delete(key);
  });

  return task;
}
