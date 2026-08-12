"use client";

import { useMemo } from "react";
import { useAuth } from "@/components/AuthProvider";
import type { QuestionnaireSlug } from "@/data/questionnaires";
import { recordQuestionnaireCompletion } from "@/lib/portalProgress";
import { saveAuthenticatedCompletion } from "@/lib/portalSync";

type CompletionOptions<TResult> = {
  slug: QuestionnaireSlug;
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
      const state = recordQuestionnaireCompletion(slug, { primaryLabel });
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
