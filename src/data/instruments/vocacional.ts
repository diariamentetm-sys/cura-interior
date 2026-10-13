import type { LikertAnswer, LikertItem, LikertResultBase } from "@/types/likert";
import { scoreLikertDimensions } from "@/lib/likertScoring";
import { buildVocacionalNarrative } from "./narratives/vocacionalNarratives";

/** O*NET-style RIASEC interest items (domínio público / teoria Holland). 30 itens. */
export const riasecLabels: Record<string, string> = {
  R: "Realista (R)",
  I: "Investigativo (I)",
  A: "Artístico (A)",
  S: "Social (S)",
  E: "Empreendedor (E)",
  C: "Convencional (C)",
};

export const vocacionalItems: LikertItem[] = [
  { id: 1, text: "Gostaria de consertar aparelhos mecânicos.", key: "R" },
  { id: 2, text: "Gostaria de construir coisas com as mãos.", key: "R" },
  { id: 3, text: "Gostaria de operar máquinas ou ferramentas.", key: "R" },
  { id: 4, text: "Gostaria de trabalhar ao ar livre com tarefas práticas.", key: "R" },
  { id: 5, text: "Gostaria de instalar ou montar equipamentos.", key: "R" },
  { id: 6, text: "Gostaria de estudar a causa de um problema científico.", key: "I" },
  { id: 7, text: "Gostaria de fazer pesquisas em laboratório.", key: "I" },
  { id: 8, text: "Gostaria de analisar dados para encontrar padrões.", key: "I" },
  { id: 9, text: "Gostaria de ler artigos científicos.", key: "I" },
  { id: 10, text: "Gostaria de resolver problemas lógicos complexos.", key: "I" },
  { id: 11, text: "Gostaria de desenhar ou ilustrar.", key: "A" },
  { id: 12, text: "Gostaria de escrever histórias ou poemas.", key: "A" },
  { id: 13, text: "Gostaria de tocar um instrumento ou cantar.", key: "A" },
  { id: 14, text: "Gostaria de criar designs ou peças visuais.", key: "A" },
  { id: 15, text: "Gostaria de atuar ou dirigir performances.", key: "A" },
  { id: 16, text: "Gostaria de ensinar ou orientar pessoas.", key: "S" },
  { id: 17, text: "Gostaria de cuidar de alguém que precisa de ajuda.", key: "S" },
  { id: 18, text: "Gostaria de trabalhar em equipe para apoiar outros.", key: "S" },
  { id: 19, text: "Gostaria de mediar conflitos entre pessoas.", key: "S" },
  { id: 20, text: "Gostaria de voluntariar em causas sociais.", key: "S" },
  { id: 21, text: "Gostaria de liderar um projeto ou equipe.", key: "E" },
  { id: 22, text: "Gostaria de vender um produto ou ideia.", key: "E" },
  { id: 23, text: "Gostaria de negociar acordos.", key: "E" },
  { id: 24, text: "Gostaria de começar um negócio.", key: "E" },
  { id: 25, text: "Gostaria de persuadir pessoas em uma reunião.", key: "E" },
  { id: 26, text: "Gostaria de organizar arquivos e registros.", key: "C" },
  { id: 27, text: "Gostaria de seguir procedimentos detalhados.", key: "C" },
  { id: 28, text: "Gostaria de trabalhar com planilhas e números.", key: "C" },
  { id: 29, text: "Gostaria de manter inventários atualizados.", key: "C" },
  { id: 30, text: "Gostaria de revisar documentos em busca de erros.", key: "C" },
];

export type VocacionalResult = LikertResultBase & {
  code: string;
};

export function calculateVocacional(answers: LikertAnswer[]): VocacionalResult {
  const dimensions = scoreLikertDimensions(
    vocacionalItems,
    answers,
    riasecLabels,
  );
  const top3 = [...dimensions].sort((a, b) => b.percentage - a.percentage).slice(0, 3);
  const code = top3.map((d) => d.key).join("");

  const narrative = buildVocacionalNarrative(dimensions, code);

  return {
    calculatedAt: new Date().toISOString(),
    answers,
    dimensions: narrative.dimensions,
    primaryLabel: narrative.primaryLabel,
    resultTitle: narrative.resultTitle,
    summary: narrative.summary,
    closingNote: narrative.closingNote,
    code,
  };
}
