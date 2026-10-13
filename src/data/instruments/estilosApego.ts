import type { LikertAnswer, LikertItem, LikertResultBase } from "@/types/likert";
import { scoreLikertDimensions } from "@/lib/likertScoring";
import { buildApegoNarrative } from "./narratives/apegoNarratives";

/**
 * ECR-S inspired short form (12 items; anxiety / avoidance).
 * Baseado na estrutura publicada por Wei et al. / Fraley — uso educacional com citação.
 */
export const apegoLabels: Record<string, string> = {
  anxiety: "Ansiedade de apego",
  avoidance: "Evitação de apego",
};

export const apegoItems: LikertItem[] = [
  { id: 1, text: "Tenho medo de perder o carinho das pessoas próximas.", key: "anxiety" },
  { id: 2, text: "Prefiro não mostrar o que sinto a quem estou próximo(a).", key: "avoidance" },
  { id: 3, text: "Costumo me preocupar se as pessoas realmente gostam de mim.", key: "anxiety" },
  { id: 4, text: "Sinto-me desconfortável dependendo dos outros.", key: "avoidance" },
  { id: 5, text: "Fico ansioso(a) quando as pessoas demoram a responder.", key: "anxiety" },
  { id: 6, text: "Prefiro não me aproximar demais emocionalmente.", key: "avoidance" },
  { id: 7, text: "Preciso de muita garantia de que sou querido(a).", key: "anxiety" },
  { id: 8, text: "Acho difícil me abrir completamente com alguém.", key: "avoidance" },
  { id: 9, text: "Me preocupo em ser abandonado(a).", key: "anxiety" },
  { id: 10, text: "Sinto-me bem quando mantenho distância emocional.", key: "avoidance" },
  { id: 11, text: "Quando alguém se afasta um pouco, fico inquieto(a).", key: "anxiety" },
  { id: 12, text: "Prefiro resolver sozinho(a) do que pedir apoio.", key: "avoidance" },
];

export type ApegoResult = LikertResultBase & {
  styleHint: string;
};

export function calculateApego(answers: LikertAnswer[]): ApegoResult {
  const dimensions = scoreLikertDimensions(apegoItems, answers, apegoLabels);
  const anxiety = dimensions.find((d) => d.key === "anxiety")?.percentage ?? 0;
  const avoidance = dimensions.find((d) => d.key === "avoidance")?.percentage ?? 0;

  // Orientação descritiva da sessão (não diagnóstico clínico de apego).
  let styleHint = "perfil misto nesta sessão";
  if (anxiety < 45 && avoidance < 45) styleHint = "mais seguro nesta sessão";
  else if (anxiety >= 55 && avoidance < 45) styleHint = "mais ansioso nesta sessão";
  else if (anxiety < 45 && avoidance >= 55) styleHint = "mais evitante nesta sessão";
  else if (anxiety >= 55 && avoidance >= 55) styleHint = "mais preocupado e distante nesta sessão";

  const narrative = buildApegoNarrative(
    dimensions,
    styleHint,
    anxiety,
    avoidance,
  );

  return {
    calculatedAt: new Date().toISOString(),
    answers,
    dimensions: narrative.dimensions,
    primaryLabel: narrative.primaryLabel,
    resultTitle: narrative.resultTitle,
    summary: narrative.summary,
    closingNote: narrative.closingNote,
    styleHint,
  };
}
