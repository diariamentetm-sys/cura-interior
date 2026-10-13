import type { LikertItem } from "@/types/likert";
import { scoreLikertDimensions } from "@/lib/likertScoring";
import type { LikertAnswer, LikertResultBase } from "@/types/likert";
import { buildBigFiveNarrative } from "./narratives/bigFiveNarratives";

/** IPIP Big-Five Markers (50). Domínio público — Goldberg / IPIP. */
export const BIG_FIVE_LABELS: Record<string, string> = {
  E: "Extroversão",
  A: "Amabilidade",
  C: "Conscienciosidade",
  N: "Estabilidade emocional",
  O: "Abertura à experiência",
};

export const bigFiveItems: LikertItem[] = [
  { id: 1, text: "Sou a vida da festa.", key: "E" },
  { id: 2, text: "Sinto pouco interesse pelos outros.", key: "A", reverse: true },
  { id: 3, text: "Estou sempre preparado(a).", key: "C" },
  { id: 4, text: "Fico estressado(a) com facilidade.", key: "N", reverse: true },
  { id: 5, text: "Tenho um vocabulário rico.", key: "O" },
  { id: 6, text: "Não falo muito.", key: "E", reverse: true },
  { id: 7, text: "Estou interessado(a) nas pessoas.", key: "A" },
  { id: 8, text: "Deixo meus pertences espalhados.", key: "C", reverse: true },
  { id: 9, text: "Estou relaxado(a) na maior parte do tempo.", key: "N" },
  { id: 10, text: "Tenho dificuldade para entender ideias abstratas.", key: "O", reverse: true },
  { id: 11, text: "Sinto-me confortável no meio das pessoas.", key: "E" },
  { id: 12, text: "Insulto as pessoas.", key: "A", reverse: true },
  { id: 13, text: "Presto atenção aos detalhes.", key: "C" },
  { id: 14, text: "Me preocupo com as coisas.", key: "N", reverse: true },
  { id: 15, text: "Tenho imaginação vívida.", key: "O" },
  { id: 16, text: "Fico em segundo plano.", key: "E", reverse: true },
  { id: 17, text: "Simpatizo com os sentimentos dos outros.", key: "A" },
  { id: 18, text: "Faço bagunça com as coisas.", key: "C", reverse: true },
  { id: 19, text: "Raramente me sinto triste.", key: "N" },
  { id: 20, text: "Não me interesso por ideias abstratas.", key: "O", reverse: true },
  { id: 21, text: "Inicio conversas.", key: "E" },
  { id: 22, text: "Não me interesso pelos problemas dos outros.", key: "A", reverse: true },
  { id: 23, text: "Faço as tarefas imediatamente.", key: "C" },
  { id: 24, text: "Fico facilmente perturbado(a).", key: "N", reverse: true },
  { id: 25, text: "Tenho ideias excelentes.", key: "O" },
  { id: 26, text: "Tenho pouco a dizer.", key: "E", reverse: true },
  { id: 27, text: "Tenho um coração mole.", key: "A" },
  { id: 28, text: "Muitas vezes esqueço de colocar as coisas de volta.", key: "C", reverse: true },
  { id: 29, text: "Fico facilmente irritado(a).", key: "N", reverse: true },
  { id: 30, text: "Não tenho boa imaginação.", key: "O", reverse: true },
  { id: 31, text: "Falo com muitas pessoas diferentes em festas.", key: "E" },
  { id: 32, text: "Não estou realmente interessado(a) nos outros.", key: "A", reverse: true },
  { id: 33, text: "Gosto de ordem.", key: "C" },
  { id: 34, text: "Mudo de humor com frequência.", key: "N", reverse: true },
  { id: 35, text: "Sou rápido(a) para entender as coisas.", key: "O" },
  { id: 36, text: "Não gosto de chamar atenção para mim.", key: "E", reverse: true },
  { id: 37, text: "Dedico tempo aos outros.", key: "A" },
  { id: 38, text: "Fujo das minhas obrigações.", key: "C", reverse: true },
  { id: 39, text: "Tenho mudanças de humor frequentes.", key: "N", reverse: true },
  { id: 40, text: "Uso palavras difíceis.", key: "O" },
  { id: 41, text: "Não me importo de ser o centro das atenções.", key: "E" },
  { id: 42, text: "Sinto as emoções dos outros.", key: "A" },
  { id: 43, text: "Sigo um horário.", key: "C" },
  { id: 44, text: "Fico facilmente aborrecido(a).", key: "N", reverse: true },
  { id: 45, text: "Passo tempo refletindo sobre as coisas.", key: "O" },
  { id: 46, text: "Fico quieto(a) perto de estranhos.", key: "E", reverse: true },
  { id: 47, text: "Faço as pessoas se sentirem à vontade.", key: "A" },
  { id: 48, text: "Sou exigente no trabalho.", key: "C" },
  // Tradução PT-BR do IPIP "feel blue" (triste/para baixo) — não cor.
  { id: 49, text: "Sinto-me frequentemente para baixo.", key: "N", reverse: true },
  { id: 50, text: "Estou cheio(a) de ideias.", key: "O" },
];

export type BigFiveResult = LikertResultBase;

export function calculateBigFive(answers: LikertAnswer[]): BigFiveResult {
  const dims = scoreLikertDimensions(bigFiveItems, answers, BIG_FIVE_LABELS);
  const narrative = buildBigFiveNarrative(dims);
  return {
    calculatedAt: new Date().toISOString(),
    answers,
    dimensions: narrative.dimensions,
    primaryLabel: narrative.primaryLabel,
    resultTitle: narrative.resultTitle,
    summary: narrative.summary,
    closingNote: narrative.closingNote,
  };
}
