import type { DimensionScore, ScoreBand } from "@/types/likert";
import { scoreBand } from "@/types/likert";

/** editorial-v1 — SSEIT-based facets (autorrelato ≠ desempenho) */
const copy: Record<string, Record<ScoreBand, string>> = {
  perception: {
    low: "Percepção emocional, neste inventário, é o quanto você se descreve capaz de notar o que sente e o que outras pessoas comunicam afetivamente. Pontuação relativa mais baixa nesta sessão sugere menor clareza autorrelatada no momento: emoções podem aparecer misturadas, atrasadas ou só depois do fato. Exemplo cotidiano: só nomear irritação no dia seguinte a uma conversa. Isso não implica falta de sensibilidade — às vezes a atenção está em tarefas ou normas. O que não se conclui: “alexitimia”, incapacidade empática ou um déficit clínico. Lembrete: isto é percepção declarada, não um teste de desempenho emocional.",
    mid: "Percepção intermediária: há reconhecimento frequente do clima interno e social, com zonas cegas ocasionais. Exemplo: captar bem o humor de um amigo e, sob sobrecarga, perder o próprio sinal emocional. O que não se conclui: competência emocional total, nem que oscilar seja falta de maturidade.",
    high: "Percepção relativamente alta aponta facilidade, no autorrelato, para notar expressão facial, tom de voz e mudanças internas. No cotidiano, isso pode favorecer empatia e antecipação de conflitos. Ainda assim, leitura fina não é certeza sobre o outro — precisa de pergunta e verificação. O que não se conclui: que você “sempre sabe” o que os outros sentem, nem um QI emocional objetivo.",
  },
  managing_own: {
    low: "Regulação das próprias emoções mais baixa nesta sessão sugere maior dificuldade autorrelatada para se acalmar, recuperar o ânimo ou manter estabilidade sob pressão. Exemplo: um contratempo ocupar a mente por horas, ou o humor comandar uma decisão impulsiva. Isso descreve um desafio de regulação nesta leitura — não falha de caráter. O que não se conclui: transtorno de humor, nem que estratégias concretas (pausa, conversa, movimento) não ajudem. Autorrelato baixo ≠ medição laboratorial de controle emocional.",
    mid: "Regulação intermediária: em muitos dias você se recupera bem; em outros, a emoção demora a assentar. Sono, carga e solidão pesam. Exemplo: retomar o eixo após uma crítica no trabalho e demorar mais depois de um atrito íntimo. O que não se conclui: regulação “fraca” como identidade.",
    high: "Regulação relativamente alta sugere que você se descreve capaz de influenciar o próprio estado — animar-se, conter impulsos, usar humor a favor da persistência. É recurso. Vale notar se às vezes “estar bem” vira desempenho em vez de processamento. O que não se conclui: ausência de necessidade de apoio, nem invulnerabilidade afetiva.",
  },
  managing_others: {
    low: "Influência emocional social mais baixa aponta menor ênfase autorrelatada em animar grupos, impressionar ou cuidar ativamente do clima alheio. Exemplo: preferir vínculos discretos a “aquecer a sala”. Pode ser limite saudável — e também deixar de lado certas formas de liderança afetiva. O que não se conclui: antipatia, nem incapacidade de cuidar quando a relação importa.",
    mid: "Faixa intermediária: há momentos em que você aquece o ambiente e momentos em que se retrai, conforme intimidade e energia. O que não se conclui: inconsistência moral.",
    high: "Pontuação relativa alta sugere disposição para elogiar, organizar convivência e ajudar outros a se sentirem melhor. No cotidiano, isso constrói confiança — e pode gerar cansaço se virar responsabilidade permanente pelo bem-estar alheio. O que não se conclui: que você seja responsável pelas emoções dos outros, nem generosidade sem limite.",
  },
  utilization: {
    low: "Uso da emoção no pensamento ficou mais baixo: menor hábito autorrelatado de transformar humor e sentimento em combustível para ideias ou persistência. Exemplo: separar rigidamente “sentir” de “pensar” até a emoção passar. Em alguns contextos isso evita vieses; em outros, perde-se informação útil (alerta, preferência, valor). O que não se conclui: falta de criatividade, nem racionalidade superior.",
    mid: "Uso intermediário: às vezes o bom humor abre soluções; às vezes a emoção só atrapalha até esfriar. Calibrar quando escutar o sentimento é habilidade prática — e esta faixa sugere que você já faz isso em parte. O que não se conclui: bloqueio criativo permanente.",
    high: "Uso relativamente alto sugere que mudanças de humor, no seu autorrelato, frequentemente acompanham novas ideias e reinterpretação de desafios. Emoção vira recurso cognitivo, não só ruído. O reverso possível é depender demais de “estar inspirado” para agir. O que não se conclui: genialidade afetiva, nem obrigação criativa permanente.",
  },
};

export function buildEiNarrative(dimensions: DimensionScore[]): {
  resultTitle: string;
  primaryLabel: string;
  summary: string;
  closingNote: string;
  dimensions: DimensionScore[];
} {
  const ranked = [...dimensions].sort((a, b) => b.percentage - a.percentage);
  const top = ranked[0];
  const overall =
    dimensions.length === 0
      ? 0
      : Math.round(
          dimensions.reduce((s, d) => s + d.percentage, 0) / dimensions.length,
        );

  const enriched = dimensions.map((dim) => ({
    ...dim,
    analysis:
      copy[dim.key]?.[scoreBand(dim.percentage)] ??
      "Faceta descritiva desta sessão com base no autorrelato.",
  }));

  return {
    resultTitle: top
      ? `Inteligência emocional com ênfase em ${top.label.toLowerCase()}`
      : "Seu autorrelato de inteligência emocional",
    primaryLabel: `Média relativa ${overall}%`,
    summary: top
      ? `Na média das facetas, suas respostas situaram-se em torno de ${overall}% nesta sessão. A área mais aparente foi ${top.label.toLowerCase()}. Inteligência emocional, neste instrumento inspirado na SSEIT (Schutte et al., 1998), não é um QI afetivo nem um certificado de maturidade: é um conjunto de hábitos autorrelatados — perceber, regular, influenciar e usar emoções. Números altos em uma faceta e mais baixos em outra são esperados. Leia cada bloco como hipótese sobre o seu jeito atual de lidar com o mundo afetivo. O que o relatório não faz: confundir percepção declarada de habilidade com desempenho comprovado em situação real.`
      : "Complete o questionário para ver o resultado.",
    dimensions: enriched,
    closingNote:
      "Autorrelato emocional é espelho parcial. Se uma faceta doeu ou surpreendeu, teste a hipótese na semana — sem transformar o gráfico em identidade fixa.",
  };
}
