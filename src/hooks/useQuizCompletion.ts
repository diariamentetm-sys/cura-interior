"use client";

import { useMemo } from "react";
import { useAuth } from "@/components/AuthProvider";
import type { InstrumentSlug } from "@/data/instruments";
import { recordInstrumentCompletion } from "@/lib/portalProgress";
import { saveAuthenticatedCompletion } from "@/lib/portalSync";

type CompletionOptions<TResult> = {
  slug: InstrumentSlug | string;
  getPrimaryLabel: (result: TResult) => string | undefined;
};

export function useQuizCompletion<TResult>({
  slug,
  getPrimaryLabel,
}: CompletionOptions<TResult>) {
  const { user, refreshPortal } = useAuth();

  return useMemo(
    () => async (result: TResult) => {
      const primaryLabel = getPrimaryLabel(result);
      const state = recordInstrumentCompletion(slug, { primaryLabel });
      refreshPortal();

      if (user) {
        await saveAuthenticatedCompletion({
          userId: user.id,
          slug,
          result: result as Record<string, unknown>,
          state,
        });
      }
    },
    [getPrimaryLabel, refreshPortal, slug, user],
  );
}
