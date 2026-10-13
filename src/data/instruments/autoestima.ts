import type { LikertAnswer, LikertItem, LikertResultBase } from "@/types/likert";
import { scoredValue } from "@/lib/likertScoring";
import { buildAutoestimaNarrative } from "./narratives/autoestimaNarratives";

/** Rosenberg Self-Esteem Scale (10). Uso livre com citação. */
export const autoestimaItems: LikertItem[] = [
  { id: 1, text: "Sinto que sou uma pessoa de valor, pelo menos em pé de igualdade com os outros.", key: "SE" },
  { id: 2, text: "Sinto que tenho várias boas qualidades.", key: "SE" },
  { id: 3, text: "No geral, sou inclinado(a) a sentir que sou um fracasso.", key: "SE", reverse: true },
  { id: 4, text: "Sou capaz de fazer as coisas tão bem quanto a maioria das pessoas.", key: "SE" },
  { id: 5, text: "Sinto que não tenho muito do que me orgulhar.", key: "SE", reverse: true },
  { id: 6, text: "Adoto uma atitude positiva em relação a mim mesmo(a).", key: "SE" },
  { id: 7, text: "No geral, estou satisfeito(a) comigo mesmo(a).", key: "SE" },
  { id: 8, text: "Gostaria de ter mais respeito por mim mesmo(a).", key: "SE", reverse: true },
  { id: 9, text: "Às vezes me sinto inútil.", key: "SE", reverse: true },
  { id: 10, text: "Às vezes acho que não presto para nada.", key: "SE", reverse: true },
];

export type AutoestimaResult = LikertResultBase & {
  total: number;
};

export function calculateAutoestima(answers: LikertAnswer[]): AutoestimaResult {
  let total = 0;
  for (const item of autoestimaItems) {
    const ans = answers.find((a) => a.questionId === item.id);
    if (!ans) continue;
    total += scoredValue(item, ans.value);
  }
  // RSES classic often uses 0–3; we use 1–5 IPIP-style for UI consistency.
  // Map to interpretive bands on 10–50 range.
  const percentage = Math.max(
    0,
    Math.min(100, Math.round(((total - 10) / 40) * 100)),
  );
  const narrative = buildAutoestimaNarrative(total, percentage);

  return {
    calculatedAt: new Date().toISOString(),
    answers,
    dimensions: [
      {
        key: "SE",
        label: "Autoestima global",
        raw: total,
        max: 50,
        percentage,
        analysis: narrative.analysis,
      },
    ],
    primaryLabel: narrative.primaryLabel,
    resultTitle: narrative.resultTitle,
    summary: narrative.summary,
    closingNote: narrative.closingNote,
    total,
  };
}
