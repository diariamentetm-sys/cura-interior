import type { DimensionScore } from "@/types/likert";

type TipologiaPoles = Record<
  string,
  {
    left: string;
    right: string;
    lean: string;
    leftPct: number;
    rightPct: number;
  }
>;

/** editorial-v1 — tipologia exploratória (não MBTI® oficial) */
const letterNarratives: Record<string, (pref: number, other: number) => string> =
  {
    E: (pref, other) =>
      `Nesta dicotomia, suas respostas inclinaram-se para Extroversão (${pref}% frente a ${other}% em Introversão). Isso sugere que interação e estímulo externo tendem a organizar sua energia com mais naturalidade nesta sessão. Exemplo cotidiano: pensar melhor conversando, ou se animar em um ambiente com movimento. Ainda assim, preferência por Extroversão não anula necessidade ocasional de silêncio. O que não se conclui: que você seja “o tipo social”, nem um diagnóstico de personalidade. Isto não é o MBTI® oficial.`,
    I: (pref, other) =>
      `A inclinação nesta sessão foi para Introversão (${pref}% frente a ${other}% em Extroversão). Recolher-se para processar, preferir profundidade a volume social e observar antes de entrar aparecem como movimentos naturais no autorrelato. Exemplo: uma conversa longa com poucas pessoas render mais do que um grupo grande. O que não se conclui: timidez patológica, nem incapacidade de liderar. Preferência de ritmo — não sentença.`,
    S: (pref, other) =>
      `Você se inclinou para Sensação (${pref}% frente a ${other}% em Intuição). Fatos concretos, experiência prática e detalhes do presente tendem a merecer mais confiança do que especulação ampla. Exemplo: pedir o passo a passo antes de comprar uma ideia “visionária”. O que não se conclui: falta de imaginação em todos os contextos.`,
    N: (pref, other) =>
      `A preferência relativa foi Intuição (${pref}% frente a ${other}% em Sensação). Padrões, possibilidades e significados futuros parecem puxar mais atenção do que o inventário puro do concreto. Exemplo: conectar dois temas distantes numa conversa antes de checar os números. O que não se conclui: que detalhes práticos sejam irrelevantes para você, nem “dom profético”.`,
    T: (pref, other) =>
      `Pensamento prevaleceu (${pref}% frente a ${other}% em Sentimento): decisões tendem a buscar critérios mais impessoais e justiça formal nesta leitura. Exemplo: separar “o que é justo na regra” de “o que dói na pessoa” — útil para clareza. O que não se conclui: frieza afetiva, nem ausência de valores.`,
    F: (pref, other) =>
      `Sentimento prevaleceu (${pref}% frente a ${other}% em Pensamento): valores, harmonia e impacto nas pessoas pesam mais na balança decisória desta sessão. Exemplo: hesitar em uma escolha tecnicamente ótima se ela prejudica alguém próximo. O que não se conclui: irracionalidade, nem incapacidade de análise.`,
    J: (pref, other) =>
      `Julgamento inclinou o eixo (${pref}% frente a ${other}% em Percepção): planos, fechamento e estrutura tendem a trazer alívio. Exemplo: preferir decidir a data e seguir, em vez de manter opções abertas. O que não se conclui: rigidez patológica, nem que você nunca improvise.`,
    P: (pref, other) =>
      `Percepção inclinou o eixo (${pref}% frente a ${other}% em Julgamento): manter opções abertas, improvisar e adaptar-se ao caminho aparecem com mais força. Exemplo: render melhor quando o plano pode mudar na última hora. O que não se conclui: irresponsabilidade, nem incapacidade de cumprir prazo quando necessário.`,
  };

export function buildTipologiaNarrative(
  typeCode: string,
  poles: TipologiaPoles,
  dimensions: DimensionScore[],
): {
  resultTitle: string;
  primaryLabel: string;
  summary: string;
  closingNote: string;
  dimensions: DimensionScore[];
} {
  const enriched = dimensions.map((dim) => {
    const pole = poles[dim.key];
    if (!pole) return dim;
    const prefPct = Math.max(pole.leftPct, pole.rightPct);
    const otherPct = Math.min(pole.leftPct, pole.rightPct);
    const writer = letterNarratives[pole.lean];
    return {
      ...dim,
      label: `${pole.left} ↔ ${pole.right}`,
      percentage: prefPct,
      analysis: writer
        ? writer(prefPct, otherPct)
        : `Preferência relativa pelo polo ${pole.lean} nesta dicotomia.`,
    };
  });

  const summary = `Seu código tipológico exploratório nesta sessão foi ${typeCode}. Cada letra resume o lado em que você se inclinou com mais força em quatro eixos: energia social, atenção à informação, critério de decisão e estilo de organização da vida. Diferente de um diagnóstico, o código é um atalho descritivo — fala de preferências autorrelatadas agora, não de um destino fixo nem de uma “essência” oculta. Preferências podem ser nítidas em um eixo e quase empatadas em outro; eixos empatados merecem leitura cuidadosa, porque o comportamento real mistura os dois polos conforme o contexto. Limite científico explícito: isto não é o MBTI® oficial nem o 16Personalities comercial, e os 16 tipos não são categorias psicológicas definitivas.`;

  return {
    resultTitle: `Perfil tipológico exploratório ${typeCode}`,
    primaryLabel: `Tipo exploratório: ${typeCode}`,
    summary,
    dimensions: enriched,
    closingNote:
      "Use o código como vocabulário para se observar, não como gaiola. Se uma letra não combinou com sua vivência, a discordância também informa: tipologias simplificam o que a vida complexifica.",
  };
}
