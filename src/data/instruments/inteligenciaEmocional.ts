import type { LikertAnswer, LikertItem, LikertResultBase } from "@/types/likert";
import { scoreLikertDimensions } from "@/lib/likertScoring";
import { buildEiNarrative } from "./narratives/eiNarratives";

/**
 * SSEIT-inspired facet scoring (Schutte et al., 1998).
 * Itens em português para uso exploratório com citação do instrumento original.
 */
export const eiLabels: Record<string, string> = {
  perception: "Percepção emocional",
  managing_own: "Regulação das próprias emoções",
  managing_others: "Influência emocional social",
  utilization: "Uso da emoção",
};

export const eiItems: LikertItem[] = [
  { id: 1, text: "Sei quando falar sobre meus problemas pessoais a outras pessoas.", key: "perception" },
  { id: 2, text: "Quando estou de bom humor, é fácil resolver problemas.", key: "utilization" },
  { id: 3, text: "Acho fácil reconhecer minhas emoções à medida que as vivo.", key: "perception" },
  { id: 4, text: "Espero coisas boas na maior parte do tempo.", key: "managing_own" },
  { id: 5, text: "As pessoas procuram facilmente em mim como companhia.", key: "managing_others" },
  { id: 6, text: "Gosto de compartilhar minhas emoções com outras pessoas.", key: "perception" },
  { id: 7, text: "Quando meu humor muda, vejo novas possibilidades.", key: "utilization" },
  { id: 8, text: "As emoções são uma das coisas que fazem a vida valer a pena.", key: "utilization" },
  { id: 9, text: "Estou ciente das emoções não verbais que envio.", key: "perception" },
  { id: 10, text: "Apresento-me de um modo que deixa boa impressão.", key: "managing_others" },
  { id: 11, text: "Quando estou de bom humor, consigo gerar novas ideias.", key: "utilization" },
  { id: 12, text: "Sei reconhecer as emoções nas expressões faciais.", key: "perception" },
  { id: 13, text: "Sei por que minhas emoções mudam.", key: "perception" },
  { id: 14, text: "Consigo me animar quando estou para baixo.", key: "managing_own" },
  { id: 15, text: "Organizo eventos dos quais os outros gostam de participar.", key: "managing_others" },
  { id: 16, text: "Procuro atividades que me deixam feliz.", key: "managing_own" },
  { id: 17, text: "Elogio os outros quando fazem algo bem.", key: "managing_others" },
  { id: 18, text: "Estou ciente das emoções não verbais que outras pessoas enviam.", key: "perception" },
  { id: 19, text: "Quando enfrento um desafio, lembro de momentos em que enfrentei dificuldades semelhantes.", key: "utilization" },
  { id: 20, text: "Quando estou de bom humor, sou capaz de ter novas ideias.", key: "utilization" },
  { id: 21, text: "Controlo minhas emoções.", key: "managing_own" },
  { id: 22, text: "Reconheço facilmente minhas emoções à medida que as vivo.", key: "perception" },
  { id: 23, text: "Motivo a mim mesmo imaginando um bom resultado nas tarefas.", key: "utilization" },
  { id: 24, text: "Elogio outras pessoas quando fazem um bom trabalho.", key: "managing_others" },
  { id: 25, text: "Estou ciente das emoções que outras pessoas demonstram.", key: "perception" },
  { id: 26, text: "Quando outra pessoa me conta sobre um evento importante na vida dela, quase sinto como se eu tivesse vivido o evento.", key: "perception" },
  { id: 27, text: "Quando sinto uma mudança de emoções, tendo a gerar novas ideias.", key: "utilization" },
  { id: 28, text: "Quando enfrento um obstáculo, lembro de vezes em que enfrentei obstáculos semelhantes e os superei.", key: "utilization" },
  { id: 29, text: "Sei se uma pessoa está triste ou feliz olhando sua expressão facial.", key: "perception" },
  { id: 30, text: "Ajudo outras pessoas a se sentirem melhor quando estão para baixo.", key: "managing_others" },
  { id: 31, text: "Uso o bom humor para me ajudar a continuar tentando diante de obstáculos.", key: "managing_own" },
  { id: 32, text: "Posso dizer como as pessoas estão se sentindo ouvindo o tom de voz delas.", key: "perception" },
  { id: 33, text: "É fácil para mim entender por que as pessoas se sentem do jeito que se sentem.", key: "perception" },
];

export type EiResult = LikertResultBase;

export function calculateEi(answers: LikertAnswer[]): EiResult {
  const dimensions = scoreLikertDimensions(eiItems, answers, eiLabels);
  const narrative = buildEiNarrative(dimensions);

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
