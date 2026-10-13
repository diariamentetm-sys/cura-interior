/** editorial-v1 — RSES */
export function buildAutoestimaNarrative(total: number, percentage: number): {
  resultTitle: string;
  primaryLabel: string;
  summary: string;
  closingNote: string;
  analysis: string;
} {
  let bandKey: "low" | "mid" | "high" = "mid";
  if (total <= 25) bandKey = "low";
  else if (total >= 40) bandKey = "high";

  const titles = {
    low: "Uma autoavaliação mais severa nesta sessão",
    mid: "Uma autoestima em faixa intermediária",
    high: "Uma autoavaliação mais generosa consigo",
  } as const;

  const analyses = {
    low: `A Escala de Rosenberg resume uma impressão global de valor pessoal. Pontuações mais baixas nesta sessão sugerem que você se descreveu com crítica intensa, dúvida sobre o próprio valor ou sensação frequente de insuficiência. No cotidiano, isso pode aparecer como dificuldade para reconhecer uma conquista, comparação constante com outras pessoas ou hesitação em ocupar espaço — mesmo quando há competência real. Também pode coexistir com padrões altos: a exigência sobe e o reconhecimento raramente acompanha. O que não se conclui: diagnóstico de depressão, “baixa autoestima permanente” ou que você não tenha áreas de segurança. Oscilações com estresse, sono e rejeição recente são comuns. Se a severidade for persistente e dolorosa, apoio profissional é um cuidado proporcional — o questionário apenas nomeia um sinal desta leitura.`,
    mid: `Sua pontuação ficou em faixa intermediária: há reconhecimento de qualidades e também pontos em que a autocrítica ganha volume. Muitas pessoas vivem nessa tensão — sentir-se “ok” na maior parte do tempo e, sob avaliação externa, duvidar com mais força. Exemplo cotidiano: confiança ao executar uma tarefa conhecida e insegurança maior diante de feedback público ou comparação. O valor deste resultado não é classificar você como “alta” ou “baixa”, e sim tornar visível o tom médio da sua relação consigo nesta sessão. O que não se conclui: um número “ideal” de autoestima, nem o detalhe de cada domínio da vida (corpo, trabalho, vínculos), que esta escala global não separa.`,
    high: `Pontuações mais altas nesta sessão sugerem respeito próprio mais consistente no autorrelato: capacidade de reconhecer valor, qualidades e satisfação básica consigo. No cotidiano, isso pode facilitar pedir o que precisa, sustentar um limite e recuperar-se de uma crítica sem colapsar a autoimagem. Ainda assim, autoestima elevada no questionário não é arrogância automática — e não imuniza contra insegurança pontual em áreas específicas que a escala não detalha. O que não se conclui: que você nunca duvide de si, nem que escores altos sejam prova de bem-estar clínico.`,
  } as const;

  const summary = `Na Escala de Autoestima de Rosenberg (RSES), sua pontuação total foi ${total} em um intervalo de 10 a 50 (equivalente relativo de ${percentage}% nesta interface). ${
    bandKey === "low"
      ? "Isso situou suas respostas em uma faixa mais baixa nesta sessão, com autocrítica mais presente na forma como você se descreveu."
      : bandKey === "high"
        ? "Isso situou suas respostas em uma faixa mais alta nesta sessão, com uma avaliação de si relativamente mais positiva no autorrelato."
        : "Isso situou suas respostas em uma faixa intermediária: nem severidade extrema, nem positividade uniforme."
  } A escala captura uma impressão global — não o mapa completo da sua vida. O texto a seguir contextualiza o número sem transformá-lo em veredito definitivo.`;

  return {
    resultTitle: titles[bandKey],
    primaryLabel: `Pontuação ${total} de 50`,
    summary,
    analysis: analyses[bandKey],
    closingNote:
      "Autoestima flutua. Trate este resultado como um espelho momentâneo: o que ele ilumina pode ser observado com curiosidade — e, se pesar demais, com apoio adequado. Um escore não define quem você é.",
  };
}
