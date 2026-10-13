import type { DimensionScore, ScoreBand } from "@/types/likert";
import { scoreBand } from "@/types/likert";

/** editorial-v1 — textos pré-revisados por dimensão × faixa */
const analyses: Record<string, Record<ScoreBand, string>> = {
  E: {
    low: "Extroversão descreve quanto a interação e o estímulo social tendem a energizar. Com pontuação relativa mais baixa nesta sessão, suas respostas sugerem conforto com ritmos mais contidos: observar antes de entrar, conversas em grupos menores ou tempo a sós para reorganizar a atenção. No cotidiano, isso pode aparecer na preferência por poucos vínculos densos ou por trabalho concentrado em silêncio — e em certo cansaço depois de ambientes muito estimulantes. Ainda assim, baixa extroversão relativa não implica frieza nem incapacidade de falar em público. O que não se conclui: timidez patológica, falta de interesse pelas pessoas ou proibição de liderança.",
    mid: "Sua extroversão ficou em faixa intermediária nesta sessão: há alternância natural entre presença social e recolhimento, conforme o contexto. Em alguns dias a conversa anima; em outros, o silêncio restitui. Exemplo cotidiano: participar com naturalidade de uma reunião e, à noite, preferir ficar em casa sem sentir que “falhou” socialmente. Essa flexibilidade de ritmo é comum. O que não se conclui: inconsistência de caráter, nem um “nível ideal” fixo de sociabilidade.",
    high: "Com extroversão relativamente alta nesta sessão, suas respostas apontam gosto por troca, estímulo e presença compartilhada. No cotidiano, isso costuma estar associado à facilidade para iniciar conversas, ao interesse por atividades em grupo ou à preferência por ambientes movimentados. Ainda assim, pessoas com alta extroversão nesta leitura também podem apreciar momentos de silêncio e recolhimento — o traço fala de preferência de ritmo, não de ausência de vida interior. O que não se conclui: que você seja “melhor” socialmente, que lidere por natureza, ou que nunca se canse de gente.",
  },
  A: {
    low: "Amabilidade descreve inclinação a cooperação, empatia e suavidade interpessoal. Uma pontuação mais baixa nesta sessão sugere maior disposição a priorizar autonomia, franqueza direta ou proteção de interesses próprios. No cotidiano, isso pode aparecer ao dizer “não” cedo, sem rodeios, ou ao questionar pedidos que outros aceitariam por cortesia — útil em negociação, e por vezes abrupto para quem espera calor constante. O que não se conclui: falta de ética, ausência de empatia ou indiferença afetiva permanente.",
    mid: "Sua amabilidade ficou equilibrada nesta sessão: há espaço tanto para acolher quanto para estabelecer limite. Em situações reais, isso costuma aparecer como cooperação seletiva — você colabora quando há reciprocidade e se afasta quando sente abuso de generosidade. Exemplo: ajudar um colega e, no mesmo mês, recusar um pedido que atravessa seu limite. O que não se conclui: um “nível ideal” de bondade, nem que oscilar entre calor e firmeza seja hipocrisia.",
    high: "Amabilidade relativamente alta nesta sessão sugere atenção ao bem-estar dos outros, disposição a suavizar atritos e interesse pelo que as pessoas sentem. No cotidiano, isso pode facilitar confiança, cuidado e mediação — elogiar, acolher, evitar escaladas desnecessárias. Ainda assim, alta amabilidade pode coexistir com cansaço se o cuidado for unilateral, ou com culpa ao frustrar expectativas. O que não se conclui: generosidade infinita, ausência de raiva ou obrigação de agradar sempre.",
  },
  C: {
    low: "Conscienciosidade envolve organização, persistência e cuidado com obrigações. Pontuação mais baixa nesta sessão aponta maior fluidez, improvisação ou dificuldade com rotinas rígidas. No cotidiano, isso pode aparecer ao começar com entusiasmo e renegociar o plano no meio do caminho, ou ao preferir resolver no impulso a planejar com folga — o que favorece adaptação e também gera atrito com prazos e detalhes. O que não se conclui: “falta de caráter”, preguiça essencial ou incapacidade de entregar quando a estrutura externa é clara.",
    mid: "Sua conscienciosidade ficou em faixa intermediária: há capacidade de organizar e cumprir, sem que a ordem seja o centro absoluto da identidade. Em alguns contextos você é metódico; em outros, tolera o caos se a tarefa pedir velocidade ou exploração. Exemplo: disciplina firme no trabalho e improvisação em casa — ou o inverso. O que não se conclui: preguiça disfarçada, nem que flexibilidade seja falta de seriedade.",
    high: "Conscienciosidade relativamente alta nesta sessão sugere apreço por ordem, responsabilidade e acabamento. No cotidiano, isso pode aparecer em listas, prazos com folga e revisão antes de entregar — o que sustenta confiabilidade. O custo possível é rigidez, autocrítica excessiva ou dificuldade para pausar quando o plano muda. O que não se conclui: superioridade moral, nem que descanso deliberado seja falha.",
  },
  N: {
    low: "Estabilidade emocional, nesta interface, reflete itens de neuroticismo com pontuação revertida: valores mais baixos sugerem maior reatividade autorrelatada a estresse, preocupação ou variações de humor. No cotidiano, isso pode aparecer como antecipação de problemas, irritabilidade sob pressão ou dificuldade para “desligar” depois de um atrito — por exemplo, uma mensagem ambígua ocupando a mente por mais tempo. O que não se conclui: diagnóstico de ansiedade, depressão ou qualquer transtorno clínico.",
    mid: "Sua estabilidade emocional ficou em faixa intermediária: há resiliência na maior parte do tempo, com momentos em que preocupação ou irritação ganham volume. Exemplo cotidiano: recuperar-se rápido numa semana comum e reagir com mais intensidade sob prazo apertado ou avaliação social. Isso é frequentemente situacional. O que não se conclui: fragilidade de personalidade ou um quadro clínico.",
    high: "Estabilidade emocional relativamente alta nesta sessão sugere maior capacidade, no autorrelato, de manter compostura e recuperar o eixo diante de pressão. No cotidiano, isso pode parecer calma sob crítica ou facilidade para relativizar um contratempo sem ruminação longa. Não significa ausência de emoção — e sim menor intensificação prolongada nesta leitura. O que não se conclui: invulnerabilidade; eventos extremos e cansaço podem alterar o quadro.",
  },
  O: {
    low: "Abertura à experiência descreve interesse por ideias novas, imaginação e exploração estética ou intelectual. Pontuação mais baixa nesta sessão sugere preferência pelo concreto, pelo familiar e pelo que já foi testado. No cotidiano, você talvez valorize métodos comprovados e sinta impaciência com discussões muito especulativas. Preferência por estabilidade cognitiva não é falta de inteligência; é um modo de filtrar novidade. O que não se conclui: ausência de criatividade em todos os contextos.",
    mid: "Sua abertura ficou intermediária: há curiosidade seletiva. Você explora o novo quando enxerga utilidade ou fascínio claro, e preserva rotinas quando a novidade parece ruído. Exemplo: aberto a livros e ideias e mais conservador em ferramentas de trabalho — ou o contrário. O que não se conclui: mediocridade criativa, nem obrigação de “ser inovador” o tempo todo.",
    high: "Abertura relativamente alta nesta sessão aponta vivacidade imaginativa, gosto por ideias abstratas e interesse em ampliar repertório. No cotidiano, isso pode aparecer como conectar temas diferentes numa conversa, fascínio por arte ou vontade de experimentar um caminho pouco óbvio. O reverso possível é dispersão ou dificuldade para fechar ciclos. O que não se conclui: que você “seja artístico” por definição, nem uma obrigação permanente de reinventar tudo.",
  },
};

export function bigFiveDimensionAnalysis(
  key: string,
  percentage: number,
): string {
  const byBand = analyses[key];
  if (!byBand) {
    return "Esta dimensão resume uma tendência relativa das suas respostas nesta sessão.";
  }
  return byBand[scoreBand(percentage)];
}

export function buildBigFiveNarrative(dimensions: DimensionScore[]): {
  resultTitle: string;
  primaryLabel: string;
  summary: string;
  closingNote: string;
  dimensions: DimensionScore[];
} {
  const ranked = [...dimensions].sort((a, b) => b.percentage - a.percentage);
  const top = ranked[0];
  const second = ranked[1];
  const low = ranked[ranked.length - 1];

  const enriched = dimensions.map((dim) => ({
    ...dim,
    analysis: bigFiveDimensionAnalysis(dim.key, dim.percentage),
  }));

  const resultTitle = top
    ? `Um perfil em que ${top.label.toLowerCase()} ganha relevo`
    : "Seu perfil Big Five nesta sessão";

  const primaryLabel = top
    ? `Mais aparente: ${top.label}`
    : "Perfil Big Five";

  const summary = top
    ? `Nesta sessão, a dimensão com maior peso relativo foi ${top.label.toLowerCase()}${
        second ? `, seguida de ${second.label.toLowerCase()}` : ""
      }. No modelo Big Five, isso não significa um “tipo” único de personalidade: significa que, entre as cinco áreas avaliadas, essas foram as que mais se destacaram nas suas respostas de agora. ${
        low && low.key !== top.key
          ? `Em contraste, ${low.label.toLowerCase()} apareceu com menor intensidade relativa — um contraste que ajuda a ler o conjunto, não um defeito a corrigir. `
          : ""
      }O mapa abaixo explica o que cada pontuação pode sugerir no cotidiano, sempre como tendência descritiva desta tentativa, sensível a humor e contexto.`
    : "Complete o questionário para ver o perfil.";

  const closingNote =
    "Personalidade, neste sentido, é um conjunto de tendências — não uma sentença. Se algo ecoou com força, use como ponto de observação nos próximos dias; se algo soou estranho, isso também é informação: autorrelatos oscilam, e um único questionário não esgota quem você é.";

  return {
    resultTitle,
    primaryLabel,
    summary,
    closingNote,
    dimensions: enriched,
  };
}
