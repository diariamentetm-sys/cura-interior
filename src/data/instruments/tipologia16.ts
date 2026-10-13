import type { LikertAnswer, LikertItem, LikertResultBase } from "@/types/likert";
import { scoredValue } from "@/lib/likertScoring";
import { buildTipologiaNarrative } from "./narratives/tipologiaNarratives";

/**
 * Tipologia exploratória em quatro dicotomias (estrutura OEJTS / junguiana aberta).
 * Não é MBTI® oficial. 32 itens.
 */
export const typeLabels: Record<string, string> = {
  EI: "Extroversão ↔ Introversão",
  SN: "Sensação ↔ Intuição",
  TF: "Pensamento ↔ Sentimento",
  JP: "Julgamento ↔ Percepção",
};

export const tipologiaItems: LikertItem[] = [
  { id: 1, text: "Ganho energia ao estar com muita gente.", key: "E" },
  { id: 2, text: "Preciso de tempo sozinho(a) para recarregar.", key: "I" },
  { id: 3, text: "Falo para pensar.", key: "E" },
  { id: 4, text: "Penso antes de falar.", key: "I" },
  { id: 5, text: "Prefiro ambientes animados.", key: "E" },
  { id: 6, text: "Prefiro conversas profundas a grupos grandes.", key: "I" },
  { id: 7, text: "Início conversas com facilidade.", key: "E" },
  { id: 8, text: "Observo mais do que interajo no começo.", key: "I" },
  { id: 9, text: "Confio mais em fatos concretos.", key: "S" },
  { id: 10, text: "Gosto de imaginar possibilidades futuras.", key: "N" },
  { id: 11, text: "Presto atenção aos detalhes práticos.", key: "S" },
  { id: 12, text: "Me interesso por padrões e significados.", key: "N" },
  { id: 13, text: "Prefiro instruções passo a passo.", key: "S" },
  { id: 14, text: "Prefiro explorar ideias novas mesmo sem plano claro.", key: "N" },
  { id: 15, text: "Valorizo o que é comprovado pela experiência.", key: "S" },
  { id: 16, text: "Valorizo insights e intuições.", key: "N" },
  { id: 17, text: "Decido mais pela lógica.", key: "T" },
  { id: 18, text: "Decido mais pelo impacto nas pessoas.", key: "F" },
  { id: 19, text: "Busco justiça imparcial.", key: "T" },
  { id: 20, text: "Busco harmonia nas relações.", key: "F" },
  { id: 21, text: "Critico ideias sem levar para o lado pessoal.", key: "T" },
  { id: 22, text: "Levo em conta sentimentos ao avaliar opções.", key: "F" },
  { id: 23, text: "Prefiro análise objetiva.", key: "T" },
  { id: 24, text: "Prefiro empatia ao decidir.", key: "F" },
  { id: 25, text: "Gosto de planos e listas.", key: "J" },
  { id: 26, text: "Gosto de deixar opções em aberto.", key: "P" },
  { id: 27, text: "Prefiro decidir e seguir em frente.", key: "J" },
  { id: 28, text: "Prefiro improvisar conforme o caminho.", key: "P" },
  { id: 29, text: "Sinto-me melhor com prazos claros.", key: "J" },
  { id: 30, text: "Sinto-me melhor com flexibilidade de última hora.", key: "P" },
  { id: 31, text: "Organizo o ambiente e a agenda.", key: "J" },
  { id: 32, text: "Adapto-me facilmente a mudanças de plano.", key: "P" },
];

export type TipologiaResult = LikertResultBase & {
  typeCode: string;
  poles: Record<string, { left: string; right: string; lean: string; leftPct: number; rightPct: number }>;
};

function poleScore(
  answers: LikertAnswer[],
  leftKey: string,
  rightKey: string,
): { left: number; right: number } {
  let left = 0;
  let right = 0;
  let leftN = 0;
  let rightN = 0;
  for (const item of tipologiaItems) {
    const ans = answers.find((a) => a.questionId === item.id);
    if (!ans) continue;
    const v = scoredValue(item, ans.value);
    if (item.key === leftKey) {
      left += v;
      leftN += 1;
    }
    if (item.key === rightKey) {
      right += v;
      rightN += 1;
    }
  }
  return {
    left: leftN ? left / leftN : 0,
    right: rightN ? right / rightN : 0,
  };
}

export function calculateTipologia(answers: LikertAnswer[]): TipologiaResult {
  const pairs: Array<[string, string, string, string]> = [
    ["E", "I", "Extroversão", "Introversão"],
    ["S", "N", "Sensação", "Intuição"],
    ["T", "F", "Pensamento", "Sentimento"],
    ["J", "P", "Julgamento", "Percepção"],
  ];

  const poles: TipologiaResult["poles"] = {};
  let typeCode = "";

  for (const [l, r, lLabel, rLabel] of pairs) {
    const { left, right } = poleScore(answers, l, r);
    const total = left + right || 1;
    const leftPct = Math.round((left / total) * 100);
    const rightPct = 100 - leftPct;
    const lean = left >= right ? l : r;
    typeCode += lean;
    poles[`${l}${r}`] = {
      left: lLabel,
      right: rLabel,
      lean,
      leftPct,
      rightPct,
    };
  }

  const dimensions = Object.entries(poles).map(([key, pole]) => ({
    key,
    label: `${pole.left} / ${pole.right}`,
    raw: pole.lean === key[0] ? pole.leftPct : pole.rightPct,
    max: 100,
    percentage: pole.lean === key[0] ? pole.leftPct : pole.rightPct,
  }));

  const narrative = buildTipologiaNarrative(typeCode, poles, dimensions);

  return {
    calculatedAt: new Date().toISOString(),
    answers,
    dimensions: narrative.dimensions,
    primaryLabel: narrative.primaryLabel,
    resultTitle: narrative.resultTitle,
    summary: narrative.summary,
    closingNote: narrative.closingNote,
    typeCode,
    poles,
  };
}
