import "server-only";

import {
  CATEGORY_LABELS,
  type CategoryScore,
  type CognitiveAnswerRecord,
  type CognitiveProfileInsight,
  type CognitiveQuestion,
} from "@/types/cognitive";

/** editorial-v1 — desempenho da sessão; sem QI padronizado */
const categoryMeaning: Record<string, string> = {
  abstract:
    "padrões, analogias e regras em material não verbal — “ver a lógica” sem depender só de texto",
  numeric:
    "relações quantitativas, proporções e operações embutidas em problemas",
  spatial: "rotação mental, encaixe e visualização de formas no espaço",
  verbal:
    "compreensão de enunciados, relações entre palavras e inferência a partir da linguagem",
  deductive:
    "encadear premissas e chegar a conclusões consistentes com as regras dadas",
};

const categoryEveryday: Record<string, string> = {
  abstract:
    "perceber a regra de uma sequência visual ou completar um padrão incompleto",
  numeric:
    "estimar uma proporção, comparar magnitudes ou seguir uma relação numérica sem calculadora",
  spatial:
    "imaginar como uma peça encaixa após girar, ou ler um mapa mentalmente",
  verbal:
    "entender um enunciado denso ou escolher a relação de palavras que preserva o mesmo vínculo",
  deductive:
    "seguir “se A, então B” até a única conclusão compatível com as premissas",
};

export function buildProfileInsights(
  scores: CategoryScore[],
  answers: CognitiveAnswerRecord[],
  questions: CognitiveQuestion[],
): CognitiveProfileInsight[] {
  const insights: CognitiveProfileInsight[] = [];
  const sorted = [...scores].sort((a, b) => b.percentage - a.percentage);
  const top = sorted[0];
  const low = sorted[sorted.length - 1];
  const overall =
    scores.length === 0
      ? 0
      : Math.round(
          scores.reduce((sum, item) => sum + item.percentage, 0) / scores.length,
        );

  insights.push({
    id: "session-frame",
    text: `Nesta sessão, seu desempenho médio relativo entre as dimensões respondidas ficou em torno de ${overall}%. Isso resume acertos desta tentativa com esta bateria — não um QI padronizado, não uma classificação clínica e não uma medida estável de inteligência global. Sono, familiaridade com o formato e ansiedade situacional podem deslocar o mesmo perfil em outro dia. O que não se conclui: o teto da sua capacidade, nem comparação normativa com a população.`,
  });

  if (top) {
    const meaning = categoryMeaning[top.category] ?? "esta família de tarefas";
    const everyday =
      categoryEveryday[top.category] ?? "esse tipo de exercício";
    insights.push({
      id: "top-category",
      text:
        top.percentage >= 70
          ? `A dimensão mais forte agora foi ${CATEGORY_LABELS[top.category]} (${top.percentage}%). Em termos práticos, aponta maior facilidade relativa com ${meaning}. Exemplo do que isso envolve: ${everyday}. No cotidiano, pessoas com esse destaque nesta sessão tendem a se sentir mais à vontade quando o problema “se encaixa” nesse tipo de raciocínio — o que não elimina esforço em outras áreas. O que não se conclui: genialidade global.`
          : `Entre as dimensões desta sessão, ${CATEGORY_LABELS[top.category]} foi onde você mais acertou (${top.percentage}%). O destaque é relativo ao seu próprio conjunto de respostas e fala de ${meaning}. Exemplo de tarefa típica: ${everyday}. Mesmo sem uma pontuação altíssima, o contraste com as demais áreas já descreve um perfil útil para prática deliberada.`,
    });
  }

  if (low && low.category !== top?.category) {
    const meaning = categoryMeaning[low.category] ?? "essas tarefas";
    const everyday =
      categoryEveryday[low.category] ?? "itens semelhantes";
    insights.push({
      id: "practice-category",
      text: `${CATEGORY_LABELS[low.category]} ficou entre as mais exigentes nesta tentativa (${low.percentage}%). Isso descreve atrito com ${meaning} — nesta bateria, neste momento. Exemplo do tipo de item que pode ter pesado: ${everyday}. Vale treinar com exercícios semelhantes e revisar as explicações ao final: muitas vezes o gargalo é formato ou estratégia, não um teto fixo. O que não se conclui: “você é ruim” nessa área para sempre.`,
    });
  }

  const timed = answers.filter((a) => a.timeSpentMs > 0);
  if (timed.length > 0) {
    const byCat = new Map<string, number[]>();
    for (const a of timed) {
      const q = questions.find((item) => item.id === a.questionId);
      if (!q) continue;
      const list = byCat.get(q.category) ?? [];
      list.push(a.timeSpentMs);
      byCat.set(q.category, list);
    }
    let slowest: { category: string; avg: number } | null = null;
    for (const [category, times] of byCat) {
      const avg = times.reduce((s, n) => s + n, 0) / times.length;
      if (!slowest || avg > slowest.avg) {
        slowest = { category, avg };
      }
    }
    if (slowest && slowest.avg > 45000) {
      insights.push({
        id: "time-note",
        text: `Você dedicou, em média, mais tempo às tarefas de ${CATEGORY_LABELS[slowest.category as keyof typeof CATEGORY_LABELS]?.toLowerCase() ?? slowest.category}. Ritmo mais lento pode indicar cuidado, menor familiaridade ou maior carga cognitiva — não qualidade inferior. O que não se conclui: lentidão como traço fixo; observar se o tempo cai com prática ajuda a separar dificuldade de formato.`,
      });
    }
  }

  const consistency =
    scores.length > 0
      ? Math.max(...scores.map((s) => s.percentage)) -
        Math.min(...scores.map((s) => s.percentage))
      : 0;
  if (consistency <= 25 && scores.every((s) => s.answered > 0)) {
    insights.push({
      id: "consistency",
      text: "O desempenho ficou relativamente equilibrado entre as dimensões nesta sessão. Perfis homogêneos sugerem que nenhuma área “carregou” sozinha o resultado — útil se você busca versatilidade, e também um convite a escolher deliberadamente onde aprofundar a prática. O que não se conclui: ausência de pontos fortes; o equilíbrio é do conjunto desta tentativa.",
    });
  }

  return insights;
}

export function buildRecommendations(scores: CategoryScore[]): string[] {
  const sorted = [...scores].sort((a, b) => a.percentage - b.percentage);
  const recs: string[] = [];

  for (const score of sorted.slice(0, 2)) {
    recs.push(
      `No gabarito comentado, revise os itens de ${CATEGORY_LABELS[score.category].toLowerCase()} em que a alternativa escolhida não era a correta. O foco é entender a resolução, não memorizar a resposta.`,
    );
  }

  recs.push(
    "Repita a avaliação em outro dia para ver o que permanece estável e o que oscila com contexto — comparação entre sessões é mais informativa do que um único número. Nenhum destes passos produz um QI clínico.",
  );

  return recs;
}
