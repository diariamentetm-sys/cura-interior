import type { DimensionScore, ScoreBand } from "@/types/likert";
import { scoreBand } from "@/types/likert";

/** editorial-v1 — RIASEC / Holland (interesses ≠ profissão ideal) */
const areaCopy: Record<string, Record<ScoreBand, string>> = {
  R: {
    low: "A área Realista reúne interesse por tarefas práticas com objetos, máquinas, construção e ambientes concretos. Pontuação mais baixa nesta sessão sugere menor atração por esse tipo de atividade agora. Exemplo: preferir planejar a executar com ferramentas. O que não se conclui: falta de competência técnica — interesse não é aptidão.",
    mid: "Interesse Realista intermediário: abertura seletiva a montar, consertar ou operar equipamentos, sem que isso seja o centro do mapa. Exemplo: gostar de um projeto hands-on pontual e não querer carreira só “no chão”. O que não se conclui: vocação dividida como problema.",
    high: "Interesse Realista relativamente alto aponta gosto por ação concreta: construir, reparar, operar equipamentos ou resolver problemas tangíveis. Ambientes possíveis: ofícios, engenharia aplicada, campo, manutenção, laboratórios práticos. Ainda assim, alto R não define a “profissão ideal” — só uma família de interesses nesta sessão. O que não se conclui: que você deva abandonar atividades intelectuais ou sociais.",
  },
  I: {
    low: "A área Investigativa envolve pesquisa, análise e resolução de problemas complexos. Interesse mais baixo sugere menor puxão por investigação prolongada nesta leitura. Exemplo: preferir aplicar uma solução pronta a desenhar um estudo. O que não se conclui: baixa inteligência.",
    mid: "Interesse Investigativo intermediário: curiosidade pontual por causas e padrões, sem que a vida intelectual seja o único eixo. O que não se conclui: superficialidade.",
    high: "Interesse Investigativo alto aponta atração por perguntas, dados, hipóteses e problemas densos. Ambientes possíveis: ciência, análise, tecnologia, pesquisa aplicada. O risco de saturação é ficar só na teoria. O que não se conclui: carreira acadêmica obrigatória, nem que outros interesses sejam “menos sérios”.",
  },
  A: {
    low: "A área Artística envolve expressão, estética e criação simbólica. Interesse mais baixo sugere menor ênfase nisso como motor profissional nesta sessão. O que não se conclui: ausência de criatividade na vida pessoal.",
    mid: "Interesse Artístico intermediário: gosto seletivo por criar, escrever ou experimentar formas — às vezes como complemento. O que não se conclui: mediocridade criativa.",
    high: "Interesse Artístico relativamente alto aponta desejo de imaginar, compor, projetar ou comunicar de modo original. Ambientes possíveis: design, artes, conteúdo, arquitetura, inovação simbólica — e também papéis “não artísticos” que pedem inventividade. O que não se conclui: que você “tenha que viver de arte”, nem talento automático.",
  },
  S: {
    low: "A área Social envolve ensinar, cuidar, orientar e facilitar relações. Interesse mais baixo sugere menor atração por isso como atividade central. Preferir coisas, dados ou sistemas não impede empatia. O que não se conclui: frieza humana.",
    mid: "Interesse Social intermediário: prazer em ajudar em alguns contextos, sem que o cuidado seja o único eixo. O que não se conclui: egoísmo.",
    high: "Interesse Social alto aponta energia em orientar, ensinar e cuidar. Ambientes possíveis: educação, saúde, apoio comunitário, gestão de pessoas. Cuidado com desgaste por demanda alheia excessiva. O que não se conclui: que você deva “salvar” todo mundo, nem que outras letras do código sejam secundárias moralmente.",
  },
  E: {
    low: "A área Empreendedora envolve persuadir, negociar, vender ideias e liderar sob incerteza. Interesse mais baixo sugere menor gosto por esses movimentos nesta sessão. O que não se conclui: falta de ambição.",
    mid: "Interesse Empreendedor intermediário: abertura ocasional a influenciar e tocar projetos com visibilidade. O que não se conclui: indecisão crônica.",
    high: "Interesse Empreendedor relativamente alto aponta atração por liderar, negociar e iniciar iniciativas. Ambientes possíveis: negócios, vendas, política organizacional, inovação. Influência sem escuta vira ruído — o traço descreve interesse, não ética. O que não se conclui: que você “nasceu para liderar” ou que deva abrir um negócio agora.",
  },
  C: {
    low: "A área Convencional envolve ordem, registros, procedimentos e precisão administrativa. Interesse mais baixo sugere menor atração por rotinas formais nesta leitura. O que não se conclui: desorganização como falha de caráter.",
    mid: "Interesse Convencional intermediário: organização e sistemas agradam quando há propósito claro. O que não se conclui: burocracia como destino.",
    high: "Interesse Convencional alto aponta gosto por estrutura, dados organizados e qualidade no detalhe. Ambientes possíveis: finanças, operações, análise administrativa, gestão de informação. Estrutura bem usada pode liberar criatividade em vez de sufocá-la. O que não se conclui: que você seja “só administrativo”, nem a profissão única ideal.",
  },
};

export function buildVocacionalNarrative(
  dimensions: DimensionScore[],
  code: string,
): {
  resultTitle: string;
  primaryLabel: string;
  summary: string;
  closingNote: string;
  dimensions: DimensionScore[];
} {
  const top3 = [...dimensions]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3);
  const enriched = dimensions.map((dim) => ({
    ...dim,
    analysis:
      areaCopy[dim.key]?.[scoreBand(dim.percentage)] ??
      "Área de interesse relativa nesta sessão.",
  }));

  const labels = top3.map((d) => d.label).join(", ");

  return {
    resultTitle: code
      ? `Código de interesses ${code}: um mapa, não um destino`
      : "Seu mapa de interesses RIASEC",
    primaryLabel: `Código de interesses: ${code || "—"}`,
    summary: top3.length
      ? `Nesta sessão, seus interesses mais fortes foram ${labels}. O código ${code} resume essa combinação no modelo RIASEC de Holland: seis famílias de preferência profissional. Importante distinguir interesse (o que atrai) de aptidão (o que você faz bem), valores (o que importa) e mercado (o que há de oportunidade). Um código com duas ou três letras altas é comum e costuma gerar caminhos híbridos. Use o detalhe abaixo — inclusive as áreas mais baixas, que também informam o que tende a drenar energia. O que este resultado não faz: afirmar a profissão ideal da sua vida.`
      : "Complete o teste para ver o perfil.",
    dimensions: enriched,
    closingNote:
      "Interesses mudam com exposição e fase de vida. Se o código surpreendeu, experimente uma atividade pequena alinhada a ele antes de descartar ou idolatrar o resultado.",
  };
}
