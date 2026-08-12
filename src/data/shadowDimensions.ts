import type { ShadowCode, ShadowDimension } from "@/types/shadow";

export const SHADOW_ORDER: ShadowCode[] = [
  "CO",
  "VU",
  "AP",
  "RA",
  "CI",
  "LI",
  "PE",
  "RE",
  "EV",
  "PR",
];

export const shadowDimensions: Record<ShadowCode, ShadowDimension> = {
  CO: {
    code: "CO",
    name: "Necessidade de Controle",
    shortName: "Controle",
    description:
      "Tendência a buscar segurança por meio da organização, antecipação e influência sobre o que acontece ao redor.",
    resultIntro:
      "Você tende a se sentir mais seguro quando consegue compreender, organizar ou antecipar o que está acontecendo ao seu redor. Quando essa necessidade fica intensa, situações imprevisíveis podem gerar mais desconforto do que você gostaria de admitir.",
    hiddenNeed: "Segurança e previsibilidade.",
    shadowExpression: [
      "dificuldade de delegar",
      "irritação com mudanças",
      "excesso de planejamento",
      "necessidade de antecipar problemas",
      "dificuldade de confiar no processo",
    ],
    integrationPath:
      "Experimentar pequenos espaços de imprevisibilidade sem sentir que precisa imediatamente recuperar o controle.",
    reflectionQuestions: [
      "O que você imagina que poderia acontecer se não estivesse no controle?",
      "Em quais situações é mais difícil confiar que outra pessoa cuide das coisas?",
      "O que você sente quando algo importante não pode ser previsto?",
    ],
  },
  VU: {
    code: "VU",
    name: "Medo de Vulnerabilidade",
    shortName: "Vulnerabilidade",
    description:
      "Tendência a proteger-se da exposição emocional, da dependência e da possibilidade de parecer frágil.",
    resultIntro:
      "Há em você uma tendência a guardar o que dói e a resolver sozinho o que pesa. Mostrar necessidade, insegurança ou fragilidade pode parecer mais arriscado do que carregar sozinho.",
    hiddenNeed: "Ser visto com cuidado, sem perder dignidade ou força.",
    shadowExpression: [
      "dificuldade de pedir ajuda",
      "medo de parecer fraco",
      "dificuldade de admitir insegurança",
      "desconforto em depender de alguém",
      "tendência a esconder sentimentos",
    ],
    integrationPath:
      "Permitir-se pedir apoio em situações pequenas, sem exigir de si mesmo que já esteja tudo resolvido.",
    reflectionQuestions: [
      "O que você teme que aconteça se alguém perceber que você está fragilizado?",
      "Em quais momentos pedir ajuda parece mais difícil do que continuar sozinho?",
      "Que parte de você se sente menos segura quando depende de outra pessoa?",
    ],
  },
  AP: {
    code: "AP",
    name: "Busca de Aprovação",
    shortName: "Aprovação",
    description:
      "Tendência a ajustar escolhas, opiniões e presença para manter aceitação e evitar rejeição.",
    resultIntro:
      "A opinião das outras pessoas ocupa um lugar importante na forma como você se sente seguro. Evitar decepcionar, ser aceito e manter a harmonia podem pesar mais do que suas próprias preferências.",
    hiddenNeed: "Pertencimento e aceitação.",
    shadowExpression: [
      "preocupação com a opinião alheia",
      "adaptação para evitar rejeição",
      "dificuldade de contrariar pessoas",
      "medo de decepcionar",
      "dúvida diante de críticas ou desaprovação",
    ],
    integrationPath:
      "Praticar pequenas escolhas alinhadas a você, mesmo quando isso não agrada a todos.",
    reflectionQuestions: [
      "De quem a aprovação pesa mais nas suas decisões?",
      "O que você deixa de dizer ou fazer para não desapontar alguém?",
      "Como seria se sua escolha não precisasse ser bem vista por ninguém?",
    ],
  },
  RA: {
    code: "RA",
    name: "Raiva Reprimida",
    shortName: "Raiva reprimida",
    description:
      "Tendência a conter irritação, evitar confronto direto e expressar desconforto de formas indiretas.",
    resultIntro:
      "A raiva parece circular em você de forma contida. Em vez de aparecer de imediato, pode se transformar em silêncio, distância, ironia ou um acúmulo que só se revela mais tarde.",
    hiddenNeed: "Ser respeitado e ter espaço para dizer o que incomoda.",
    shadowExpression: [
      "evitar conflitos",
      "engolir irritação",
      "acumular ressentimento",
      "explosões depois de longos períodos",
      "sarcasmo ou afastamento como forma indireta de expressar raiva",
    ],
    integrationPath:
      "Nomear o incômodo mais cedo, em doses honestas e proporcionais, antes que ele se acumule.",
    reflectionQuestions: [
      "O que costuma acontecer com a sua irritação quando você não a expressa?",
      "Em quais situações é mais difícil admitir que algo te magoou ou irritou?",
      "Como você costuma mostrar raiva sem precisar dizer que está com raiva?",
    ],
  },
  CI: {
    code: "CI",
    name: "Comparação e Inveja",
    shortName: "Comparação e inveja",
    description:
      "Tendência a medir o próprio valor pelo sucesso, presença ou conquista de outras pessoas.",
    resultIntro:
      "O sucesso ou a facilidade de outras pessoas pode tocar um ponto sensível em você. Comparar-se, sentir-se para trás ou diminuir mentalmente aquilo que admira podem ser formas de lidar com esse desconforto.",
    hiddenNeed: "Sentir que também tem espaço, valor e possibilidade.",
    shadowExpression: [
      "comparação frequente",
      "desconforto com o sucesso alheio",
      "sensação de estar ficando para trás",
      "crítica como proteção contra insegurança",
      "dificuldade em reconhecer inveja",
    ],
    integrationPath:
      "Usar a comparação como pista do que você deseja para si, em vez de como prova do que falta.",
    reflectionQuestions: [
      "O que a conquista de outra pessoa revela sobre algo que você também deseja?",
      "Em quais áreas da vida a comparação aparece com mais força?",
      "O que muda quando você consegue admitir inveja sem se julgar por isso?",
    ],
  },
  LI: {
    code: "LI",
    name: "Dificuldade com Limites",
    shortName: "Limites",
    description:
      "Tendência a priorizar o outro, dizer sim com frequência e sentir culpa ao proteger o próprio espaço.",
    resultIntro:
      "Há em você uma dificuldade de colocar limites sem sentir que está falhando com alguém. Disponibilidade excessiva, culpa e depois ressentimento podem aparecer juntos.",
    hiddenNeed: "Cuidar de si sem perder o vínculo com o outro.",
    shadowExpression: [
      "dificuldade de dizer não",
      "assumir responsabilidades de outras pessoas",
      "culpa ao priorizar a si mesmo",
      "excesso de disponibilidade",
      "ressentimento por fazer mais do que gostaria",
    ],
    integrationPath:
      "Praticar um “não” claro e gentil, sem explicar demais nem se justificar em excesso.",
    reflectionQuestions: [
      "O que você teme que aconteça se disser não?",
      "Em quais relações é mais difícil proteger o seu tempo e energia?",
      "O que muda em você depois de aceitar algo que não queria aceitar?",
    ],
  },
  PE: {
    code: "PE",
    name: "Perfeccionismo",
    shortName: "Perfeccionismo",
    description:
      "Tendência a associar valor pessoal a desempenho impecável e a evitar o erro a qualquer custo.",
    resultIntro:
      "A exigência consigo mesmo aparece com força. Errar, entregar algo “apenas bom” ou ser visto no processo imperfeito pode gerar mais tensão do que parece na superfície.",
    hiddenNeed: "Sentir-se suficiente e digno, mesmo sem excelência constante.",
    shadowExpression: [
      "medo de errar",
      "procrastinação por excesso de exigência",
      "dificuldade de finalizar",
      "autocrítica",
      "sensação de nunca ser suficiente",
    ],
    integrationPath:
      "Permitir entregas boas o bastante e observar o que acontece quando o padrão não precisa ser perfeito.",
    reflectionQuestions: [
      "O que um erro costuma significar sobre você?",
      "Em quais situações “bom” parece não ser suficiente?",
      "O que você deixaria pronto hoje se não precisasse estar perfeito?",
    ],
  },
  RE: {
    code: "RE",
    name: "Necessidade de Reconhecimento",
    shortName: "Reconhecimento",
    description:
      "Tendência a vincular valor pessoal à validação externa, ao esforço notado e à percepção dos outros.",
    resultIntro:
      "Ser visto, valorizado e reconhecido pelo que faz importa profundamente para você. Quando o esforço passa despercebido, pode surgir frustração, dúvida ou vontade de provar o próprio valor.",
    hiddenNeed: "Sentir que sua contribuição e presença têm valor.",
    shadowExpression: [
      "desejo de ser percebido",
      "frustração quando o esforço passa despercebido",
      "necessidade de provar competência",
      "desconforto em não receber validação",
      "relação entre valor pessoal e desempenho",
    ],
    integrationPath:
      "Praticar reconhecer o próprio esforço internamente, antes de esperar que alguém o confirme.",
    reflectionQuestions: [
      "O que muda em você quando alguém reconhece o que você fez?",
      "Em quais situações a falta de validação dói mais?",
      "Como você poderia valorizar o próprio esforço sem depender do olhar externo?",
    ],
  },
  EV: {
    code: "EV",
    name: "Fuga e Evitação",
    shortName: "Evitação",
    description:
      "Tendência a adiar, suavizar ou se afastar daquilo que gera tensão emocional ou decisória.",
    resultIntro:
      "Quando algo fica difícil, o impulso de se afastar, adiar ou suavizar a situação pode aparecer com força. Evitar o desconforto oferece alívio rápido, mas também adia o encontro com o que precisa ser enfrentado.",
    hiddenNeed: "Proteção contra sobrecarga emocional e conflito.",
    shadowExpression: [
      "fuga de conversas difíceis",
      "adiamento",
      "distração",
      "afastamento emocional",
      "abandono de situações que geram desconforto",
    ],
    integrationPath:
      "Escolher um passo pequeno e concreto em direção àquilo que você costuma adiar, sem exigir resolução completa de uma vez.",
    reflectionQuestions: [
      "O que você costuma evitar quando a situação fica emocionalmente difícil?",
      "Que alívio a fuga oferece — e o que ela custa depois?",
      "Qual seria o menor passo possível em direção ao que você tem adiado?",
    ],
  },
  PR: {
    code: "PR",
    name: "Tendência à Projeção",
    shortName: "Projeção",
    description:
      "Tendência a perceber com intensidade nos outros aspectos que ainda são difíceis de reconhecer em si.",
    resultIntro:
      "Certas características nos outros podem despertar em você uma reação especialmente forte. Essa intensidade às vezes aponta para algo que também habita em você, ainda pouco reconhecido ou aceito.",
    hiddenNeed: "Manter uma imagem interna coerente sem confrontar partes desconfortáveis de si.",
    shadowExpression: [
      "críticas muito intensas",
      "reações desproporcionais a certas características alheias",
      "dificuldade de reconhecer em si aquilo que condena",
      "atribuição externa de emoções próprias",
      "defesa rápida diante de apontamentos",
    ],
    integrationPath:
      "Quando alguém te irrita fortemente, perguntar com curiosidade: “Em que medida isso também existe em mim?”",
    reflectionQuestions: [
      "Que tipo de pessoa desperta em você uma irritação especialmente forte?",
      "O que fica difícil de admitir quando alguém aponta algo sobre você?",
      "Em quais situações você atribui aos outros algo que também sente?",
    ],
  },
};

export function getShadowDimension(code: ShadowCode): ShadowDimension {
  return shadowDimensions[code];
}

export function buildRelationshipNote(codes: ShadowCode[]): string {
  const [first, second, third] = codes;
  if (!first || !second) {
    return "Os padrões que aparecem aqui não são rótulos fixos — são pistas sobre o que pode estar pedindo mais atenção e integração.";
  }

  const a = shadowDimensions[first].shortName.toLowerCase();
  const b = shadowDimensions[second].shortName.toLowerCase();
  const c = third ? shadowDimensions[third].shortName.toLowerCase() : null;

  if (c) {
    return `O padrão de ${a} pode aparecer junto de ${b} e de ${c}. Observá-los lado a lado ajuda a perceber como diferentes defesas e necessidades se reforçam na sua experiência.`;
  }

  return `O padrão de ${a} pode aparecer junto de ${b}. Observá-los juntos ajuda a perceber como diferentes defesas e necessidades se reforçam na sua experiência.`;
}
