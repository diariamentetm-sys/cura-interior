import type { DimensionScore, ScoreBand } from "@/types/likert";
import { scoreBand } from "@/types/likert";

/** editorial-v1 — ECR-S-like (ansiedade × evitação) */
const anxietyCopy: Record<ScoreBand, string> = {
  low: "Ansiedade de apego descreve o quanto a proximidade vem acompanhada de medo de rejeição ou abandono. Com pontuação relativa mais baixa nesta sessão, suas respostas sugerem menor intensificação crônica desse alerta. No cotidiano, isso pode aparecer como maior confiança de que o outro permanece mesmo com distância temporária — mensagem demorada, agenda cheia, silêncio que não precisa virar prova de desamor. Ainda assim, baixa ansiedade não elimina ciúme pontual ou preocupação realista. O que não se conclui: infância “perfeita”, ausência de história relacional, nem que você nunca precise de garantia. Também pode coexistir com evitação alta: pouco pânico de perda e, ao mesmo tempo, distância emocional.",
  mid: "Ansiedade em faixa intermediária descreve um meio-termo familiar: na maior parte do tempo há confiança, mas certas pistas — demora, frieza, ambiguidade — acionam alerta. Exemplo cotidiano: releitura ocasional de uma conversa ou necessidade pontual de ouvir “estamos bem” depois de um atrito. Nem sempre é “drama”; às vezes é o sistema de apego pedindo clareza. O que não se conclui: transtorno de ansiedade, dependência patológica ou que todos os seus vínculos funcionem assim.",
  high: "Ansiedade relativamente alta nesta sessão sugere que proximidade vem com vigilância: medo de perder carinho, preocupação com o quanto é querido(a), inquietação quando o outro se afasta. No cotidiano, isso pode aparecer como necessidade de confirmação, leitura intensa de mensagens ou dificuldade para se acalmar sozinho(a) depois de um conflito. Esses movimentos muitas vezes fazem sentido diante de inconsistências reais — não são “fraqueza”. O que não se conclui: diagnóstico clínico, causa automática na infância ou família, nem que este padrão descreva todos os relacionamentos da sua vida.",
};

const avoidanceCopy: Record<ScoreBand, string> = {
  low: "Evitação de apego descreve o custo interno de depender, mostrar afeto e permitir intimidade. Pontuação mais baixa nesta sessão aponta maior abertura a esses movimentos no autorrelato. Exemplo cotidiano: pedir apoio sem sentir que “pesou”, ou deixar-se ver em uma conversa difícil. Isso facilita reciprocidade — e pode tornar mais sensíveis os momentos em que o outro se fecha. O que não se conclui: ausência de limites saudáveis, nem que você nunca precise de espaço.",
  mid: "Evitação intermediária descreve alternância: há espaço para intimidade e também reflexo de se proteger quando a proximidade aperta. Em alguns vínculos você se abre; em outros, resolve sozinho(a) e mantém uma margem. Exemplo: conversar com profundidade com uma pessoa e, com outra, mudar de assunto quando a emoção sobe. Essa calibragem pode ser consciente — ou confusa se oscilar sem conversa. O que não se conclui: frieza essencial, nem um único “estilo” válido para todas as relações.",
  high: "Evitação relativamente alta nesta sessão sugere desconforto com dependência emocional e preferência por autonomia afetiva. Pedir ajuda, mostrar vulnerabilidade ou “ficar demais” pode parecer arriscado ou sufocante. No cotidiano, isso aparece como resolver sozinho(a), minimizar necessidades ou manter conversas em terreno seguro. Evitação elevada protege — e também pode impedir o tipo de proximidade que parte de você deseja. O que não se conclui: incapacidade de amar, indiferença real, nem etiologia traumática automática. O texto descreve tendência desta tentativa, não frieza essencial.",
};

export function buildApegoNarrative(
  dimensions: DimensionScore[],
  styleHint: string,
  anxiety: number,
  avoidance: number,
): {
  resultTitle: string;
  primaryLabel: string;
  summary: string;
  closingNote: string;
  dimensions: DimensionScore[];
} {
  const titleByStyle: Record<string, string> = {
    "mais seguro nesta sessão": "Um padrão mais seguro de proximidade nesta sessão",
    "mais ansioso nesta sessão": "Proximidade com mais alerta e necessidade de garantia",
    "mais evitante nesta sessão": "Proximidade com mais distância e autonomia",
    "mais preocupado e distante nesta sessão":
      "Um padrão que mistura inquietação e distância",
    "perfil misto nesta sessão": "Um padrão misto de apego nesta sessão",
  };

  const enriched = dimensions.map((dim) => ({
    ...dim,
    analysis:
      dim.key === "anxiety"
        ? anxietyCopy[scoreBand(dim.percentage)]
        : avoidanceCopy[scoreBand(dim.percentage)],
  }));

  const summary = `Com base nas suas respostas, a ansiedade de apego ficou em ${anxiety}% e a evitação em ${avoidance}% (pesos relativos nesta sessão). A leitura combinada aponta um padrão ${styleHint.replace("nesta sessão", "").trim()} — descrição orientativa, não diagnóstico clínico. Em termos simples: ansiedade fala do medo de rejeição e da busca por garantia; evitação fala do custo de depender e de se mostrar. Quando as duas sobem juntas, a pessoa pode querer proximidade e, ao mesmo tempo, se proteger dela. Quando as duas ficam mais baixas, o vínculo tende a parecer mais seguro nesta leitura. O detalhe abaixo situa cada dimensão no cotidiano. O que o conjunto não faz: atribuir automaticamente o resultado à infância, à família ou a um trauma específico — essas causas não foram investigadas aqui.`;

  return {
    resultTitle: titleByStyle[styleHint] ?? "Seu padrão de apego nesta sessão",
    primaryLabel: styleHint,
    summary,
    dimensions: enriched,
    closingNote:
      "Padrões de apego podem mudar com relações seguras, tempo e, quando fizer sentido, acompanhamento profissional. Se este mapa tocou feridas antigas, trate-o como convite à observação — não como laudo.",
  };
}
