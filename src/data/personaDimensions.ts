import type { PersonaCode, PersonaDimension, PersonaIndexBand } from "@/types/persona";

export const PERSONA_ORDER: PersonaCode[] = [
  "PE",
  "FO",
  "AG",
  "IN",
  "CO",
  "AD",
  "EX",
  "RE",
  "PR",
  "AU",
];

export const ROLE_PERSONA_CODES: PersonaCode[] = [
  "PE",
  "FO",
  "AG",
  "IN",
  "CO",
  "AD",
  "EX",
  "RE",
  "PR",
];

export const personaDimensions: Record<PersonaCode, PersonaDimension> = {
  PE: {
    code: "PE",
    name: "Pessoa Eficiente",
    socialMessage: "Eu dou conta.",
    description:
      "Você parece ter aprendido a ocupar um lugar de competência diante das outras pessoas. Resolver, entregar e demonstrar capacidade fazem parte da forma como você se apresenta e se sente reconhecido.",
    whatOthersSee: [
      "competência",
      "resolutividade",
      "preparo",
      "capacidade de dar conta",
    ],
    whatMayStayHidden: [
      "dúvida",
      "medo de parecer despreparado",
      "cansaço de precisar resolver",
      "dificuldade de admitir limites",
    ],
    underlyingNeed:
      "O desejo de continuar sendo visto como alguém capaz, útil e confiável.",
    whenItBecomesRigid:
      "A competência deixa de ser apenas uma qualidade e começa a se tornar uma obrigação: “Eu preciso dar conta.” Isso pode dificultar admitir que, em alguns momentos, você também não sabe ou precisa de apoio.",
    integrationPath:
      "Permitir-se pedir ajuda ou dizer “ainda não sei” em contextos seguros, sem sentir que isso apaga o seu valor.",
    reflectionQuestions: [
      "Quando você sentiu que precisava demonstrar que dava conta?",
      "O que muda em você quando alguém percebe que você ainda está aprendendo?",
      "Em quais situações a eficiência protege você — e em quais ela cansa?",
    ],
    shownTraits: ["CAPAZ", "RESOLUTIVO", "PREPARADO", "CONFIÁVEL"],
    hiddenTraits: ["DÚVIDA", "LIMITES", "CANSAÇO", "PEDIDO DE AJUDA"],
  },
  FO: {
    code: "FO",
    name: "Pessoa Forte",
    socialMessage: "Nada me derruba.",
    description:
      "Você parece ter aprendido a ocupar um lugar de força diante das outras pessoas. Mesmo em momentos difíceis, existe uma tendência a preservar uma imagem de estabilidade, resistência ou capacidade de suportar aquilo que está acontecendo. Isso pode fazer com que as pessoas enxerguem você como alguém em quem podem confiar. Mas também pode existir uma distância entre o quanto os outros percebem que você precisa de apoio e o quanto você realmente precisa.",
    whatOthersSee: [
      "estabilidade",
      "resistência",
      "autocontrole",
      "capacidade de enfrentar dificuldades",
    ],
    whatMayStayHidden: [
      "necessidade de apoio",
      "insegurança",
      "cansaço",
      "medo",
      "vontade de não precisar ser forte naquele momento",
    ],
    underlyingNeed:
      "O desejo de continuar sendo visto como alguém capaz de suportar aquilo que acontece.",
    whenItBecomesRigid:
      "A força deixa de ser apenas uma característica e começa a se tornar uma obrigação: “Eu preciso ser forte.” Isso pode dificultar reconhecer momentos em que você gostaria de receber aquilo que normalmente oferece aos outros.",
    integrationPath:
      "Permitir que pessoas seguras conheçam também as partes suas que não precisam estar sempre resolvidas.",
    reflectionQuestions: [
      "Quando você percebeu que precisava ser forte?",
      "Com quem você sente que pode baixar a guarda?",
      "O que aconteceria se alguém percebesse que você também precisa de apoio?",
    ],
    shownTraits: ["FORTE", "ESTÁVEL", "RESISTENTE", "CONFIÁVEL"],
    hiddenTraits: ["CANSAÇO", "DÚVIDA", "NECESSIDADE DE APOIO", "VULNERABILIDADE"],
  },
  AG: {
    code: "AG",
    name: "Pessoa Agradável",
    socialMessage: "É importante que gostem de mim.",
    description:
      "Você parece ter aprendido a ocupar um lugar de harmonia nas relações. Evitar atritos, cuidar do clima e ajustar-se às expectativas dos outros fazem parte da forma como você se apresenta para ser aceito e pertencer.",
    whatOthersSee: [
      "cordialidade",
      "disponibilidade",
      "cuidado com o outro",
      "facilidade de convívio",
    ],
    whatMayStayHidden: [
      "opiniões próprias",
      "irritação",
      "necessidade de discordar",
      "desejo de priorizar a si mesmo",
    ],
    underlyingNeed:
      "O desejo de pertencimento, aceitação e segurança relacional.",
    whenItBecomesRigid:
      "A agradabilidade deixa de ser apenas gentileza e começa a se tornar uma obrigação: “Eu não posso desagradar.” Isso pode afastar você daquilo que realmente pensa e precisa.",
    integrationPath:
      "Praticar pequenas verdades com respeito — dizer o que pensa sem abandonar o cuidado com o vínculo.",
    reflectionQuestions: [
      "Em quais situações você suaviza o que pensa para preservar a harmonia?",
      "O que você teme que aconteça se alguém não gostar de você?",
      "Como seria expressar uma preferência sua sem pedir desculpas por ela?",
    ],
    shownTraits: ["AGRADÁVEL", "HARMONIOSO", "ACESSÍVEL", "CUIDADOSO"],
    hiddenTraits: ["OPINIÃO", "LIMITE", "IRRITAÇÃO", "PREFERÊNCIA PRÓPRIA"],
  },
  IN: {
    code: "IN",
    name: "Pessoa Independente",
    socialMessage: "Eu não preciso de ninguém.",
    description:
      "Você parece ter aprendido a ocupar um lugar de autonomia diante das outras pessoas. Resolver sozinho, manter distância e não depender demais podem oferecer proteção — e também uma imagem de autossuficiência.",
    whatOthersSee: [
      "autonomia",
      "autossuficiência",
      "discrição",
      "capacidade de se virar",
    ],
    whatMayStayHidden: [
      "desejo de apoio",
      "cansaço de carregar sozinho",
      "medo de depender",
      "necessidade de proximidade",
    ],
    underlyingNeed:
      "O desejo de não se sentir vulnerável à falha, ausência ou julgamento do outro.",
    whenItBecomesRigid:
      "A independência deixa de ser liberdade e começa a se tornar uma obrigação: “Eu não posso precisar.” Isso pode dificultar receber cuidado, mesmo quando ele faria bem.",
    integrationPath:
      "Experimentar pedir algo pequeno a alguém seguro, sem exigir de si mesmo que já esteja tudo resolvido sozinho.",
    reflectionQuestions: [
      "O que a independência protege em você?",
      "Em quais momentos pedir ajuda parece mais difícil do que continuar sozinho?",
      "Como seria permitir que alguém cuidasse de você sem perder dignidade?",
    ],
    shownTraits: ["INDEPENDENTE", "AUTÔNOMO", "DISCRETO", "AUTOSSUFICIENTE"],
    hiddenTraits: ["PEDIDO DE AJUDA", "PROXIMIDADE", "CANSAÇO", "DEPENDÊNCIA"],
  },
  CO: {
    code: "CO",
    name: "Pessoa Controlada",
    socialMessage: "Eu estou sempre bem.",
    description:
      "Você parece ter aprendido a ocupar um lugar de compostura. Manter a forma, racionalizar e não deixar as emoções aparecerem demais fazem parte da imagem que você apresenta aos outros.",
    whatOthersSee: [
      "compostura",
      "equilíbrio aparente",
      "controle emocional",
      "serenidade",
    ],
    whatMayStayHidden: [
      "emoções intensas",
      "confusão",
      "tristeza",
      "necessidade de expressar o que sente",
    ],
    underlyingNeed:
      "O desejo de manter dignidade, estabilidade e proteção diante do olhar alheio.",
    whenItBecomesRigid:
      "O controle deixa de ser apenas contenção saudável e começa a se tornar uma obrigação: “Eu preciso parecer bem.” Isso pode criar distância entre o que você vive por dentro e o que os outros conhecem de você.",
    integrationPath:
      "Escolher uma pessoa de confiança e compartilhar algo verdadeiro que normalmente ficaria só com você.",
    reflectionQuestions: [
      "O que acontece com você quando alguém percebe que você não está bem?",
      "Que emoções você mais tenta manter longe dos olhos dos outros?",
      "Em que espaços você se sente mais livre para não precisar manter a forma?",
    ],
    shownTraits: ["CONTROLADO", "SERENO", "COMPOSTO", "EQUILIBRADO"],
    hiddenTraits: ["EMOÇÃO", "CONFUSÃO", "TRISTEZA", "INTENIDADE"],
  },
  AD: {
    code: "AD",
    name: "Pessoa Adaptável",
    socialMessage: "Eu consigo me encaixar.",
    description:
      "Você parece ter aprendido a ocupar um lugar de adequação. Perceber o ambiente, ajustar o próprio comportamento e circular entre diferentes expectativas fazem parte da forma como você se apresenta e se protege socialmente.",
    whatOthersSee: [
      "flexibilidade social",
      "facilidade de se encaixar",
      "sensibilidade ao ambiente",
      "versatilidade",
    ],
    whatMayStayHidden: [
      "preferências próprias",
      "opinião estável",
      "dificuldade de saber o que quer",
      "cansaço de se ajustar",
    ],
    underlyingNeed:
      "O desejo de pertencimento e de segurança ao circular entre pessoas e contextos diferentes.",
    whenItBecomesRigid:
      "A adaptação deixa de ser inteligência social e começa a se tornar uma obrigação: “Eu preciso me encaixar.” Isso pode dificultar reconhecer onde termina o que o ambiente espera e começa aquilo que você deseja.",
    integrationPath:
      "Praticar nomear uma preferência própria antes de ajustar automaticamente o que o grupo parece esperar.",
    reflectionQuestions: [
      "Em quais ambientes você mais muda o seu jeito?",
      "O que fica difícil de saber sobre você mesmo quando se adapta demais?",
      "Como seria permanecer um pouco mais em quem você é, mesmo mudando de contexto?",
    ],
    shownTraits: ["ADAPTÁVEL", "VERSÁTIL", "SENSÍVEL AO GRUPO", "ENCAIXADO"],
    hiddenTraits: ["PREFERÊNCIA", "DESEJO PRÓPRIO", "OPINIÃO", "IDENTIDADE ESTÁVEL"],
  },
  EX: {
    code: "EX",
    name: "Pessoa Exemplar",
    socialMessage: "Eu preciso fazer a coisa certa.",
    description:
      "Você parece ter aprendido a ocupar um lugar de responsabilidade e correção. Cumprir o esperado, não decepcionar e manter uma imagem confiável fazem parte da forma como você se apresenta ao mundo.",
    whatOthersSee: [
      "responsabilidade",
      "correção",
      "comprometimento",
      "confiabilidade",
    ],
    whatMayStayHidden: [
      "medo de falhar",
      "cansaço de corresponder",
      "desejo de escolher diferente",
      "dificuldade de decepcionar",
    ],
    underlyingNeed:
      "O desejo de ser visto como alguém correto, digno de confiança e à altura das expectativas.",
    whenItBecomesRigid:
      "O dever deixa de ser apenas compromisso e começa a se tornar uma obrigação: “Eu preciso fazer a coisa certa.” Isso pode tornar difícil escolher caminhos que sejam seus, mesmo quando não agradam a todos.",
    integrationPath:
      "Permitir-se uma escolha alinhada ao que você quer, mesmo que não seja a mais esperada por alguém importante.",
    reflectionQuestions: [
      "De quem as expectativas mais pesam nas suas decisões?",
      "O que aconteceria se você decepcionasse alguém importante?",
      "Como seria viver um período sem precisar ser exemplar o tempo todo?",
    ],
    shownTraits: ["EXEMPLAR", "RESPONSÁVEL", "CORRETO", "CONFIÁVEL"],
    hiddenTraits: ["MEDO DE FALHAR", "CANSAÇO", "DESEJO PRÓPRIO", "IMPERFEIÇÃO"],
  },
  RE: {
    code: "RE",
    name: "Pessoa Reconhecida",
    socialMessage: "Eu preciso ser percebido.",
    description:
      "Você parece ter aprendido a ocupar um lugar em que ser visto importa. Reconhecimento, reputação e a impressão causada nos outros fazem parte da forma como você constrói presença e valor social.",
    whatOthersSee: [
      "presença",
      "esforço visível",
      "desejo de contribuir",
      "preocupação com a impressão",
    ],
    whatMayStayHidden: [
      "medo de passar despercebido",
      "dúvida sobre o próprio valor",
      "necessidade de validação",
      "insegurança quando o esforço não é notado",
    ],
    underlyingNeed:
      "O desejo de sentir que sua existência, esforço e presença têm valor aos olhos dos outros.",
    whenItBecomesRigid:
      "O reconhecimento deixa de ser alegria e começa a se tornar uma obrigação: “Eu preciso ser percebido.” Isso pode fazer com que o valor pessoal fique excessivamente ligado à validação externa.",
    integrationPath:
      "Praticar reconhecer o próprio esforço internamente, antes de esperar que alguém o confirme.",
    reflectionQuestions: [
      "O que muda em você quando alguém reconhece aquilo que você fez?",
      "Em quais situações passar despercebido dói mais?",
      "Como seria valorizar uma conquista mesmo sem plateia?",
    ],
    shownTraits: ["PERCEBIDO", "PRESENTE", "COMPETENTE", "NOTÁVEL"],
    hiddenTraits: ["NECESSIDADE DE VALIDAÇÃO", "DÚVIDA", "INVISIBILIDADE", "MEDO DE IRRELEVÂNCIA"],
  },
  PR: {
    code: "PR",
    name: "Pessoa Protetora",
    socialMessage: "As pessoas podem contar comigo.",
    description:
      "Você parece ter aprendido a ocupar um lugar de cuidado e disponibilidade. Sentir-se necessário, assumir responsabilidades e oferecer apoio fazem parte da imagem que você apresenta — e, muitas vezes, da forma como se sente valioso.",
    whatOthersSee: [
      "cuidado",
      "disponibilidade",
      "responsabilidade afetiva",
      "capacidade de acolher",
    ],
    whatMayStayHidden: [
      "necessidade de ser cuidado",
      "cansaço",
      "dificuldade de receber",
      "limites pouco reconhecidos",
    ],
    underlyingNeed:
      "O desejo de ser necessário, pertencente e valorizado pelo cuidado que oferece.",
    whenItBecomesRigid:
      "O cuidado deixa de ser apenas generosidade e começa a se tornar uma obrigação: “As pessoas precisam poder contar comigo.” Isso pode dificultar receber aquilo que você costuma dar.",
    integrationPath:
      "Praticar receber cuidado em doses pequenas, sem sentir que precisa retribuir imediatamente.",
    reflectionQuestions: [
      "Quando você aprendeu que as pessoas poderiam contar com você?",
      "O que muda quando alguém cuida de você, em vez do contrário?",
      "Em quais situações dizer “não posso agora” parece mais difícil?",
    ],
    shownTraits: ["PROTETOR", "DISPONÍVEL", "NECESSÁRIO", "ACOLHEDOR"],
    hiddenTraits: ["NECESSIDADE DE CUIDADO", "CANSAÇO", "LIMITE", "RECEBER"],
  },
  AU: {
    code: "AU",
    name: "Pessoa Autêntica",
    socialMessage: "Quero conseguir ser quem sou.",
    description:
      "Você parece ter espaço para aproximar o que sente do que mostra. Discordar, reconhecer desejos próprios e circular com menos necessidade de adequação constante aparecem como forças na sua forma de se apresentar.",
    whatOthersSee: [
      "coerência",
      "espontaneidade relativa",
      "capacidade de discordar",
      "presença mais própria",
    ],
    whatMayStayHidden: [
      "ainda assim, momentos de adaptação",
      "cuidado com o vínculo",
      "hesitação em alguns contextos",
      "papéis que ainda ocupam espaço",
    ],
    underlyingNeed:
      "O desejo de viver com mais coerência entre a experiência interna e a expressão externa.",
    whenItBecomesRigid:
      "Mesmo a autenticidade pode se tornar uma imagem a manter: “Eu preciso ser autêntico o tempo todo.” O caminho mais vivo é permitir nuance — nem tudo precisa ser revelado a todos.",
    integrationPath:
      "Continuar escolhendo em quais contextos vale a pena mostrar mais de si, sem exigir exposição total em todos os espaços.",
    reflectionQuestions: [
      "Em quais espaços você se sente mais próximo de quem é?",
      "O que ainda fica difícil de mostrar, mesmo quando você se sente autêntico?",
      "Como a autenticidade e o cuidado com o outro podem coexistir em você?",
    ],
    shownTraits: ["COERENTE", "PRÓPRIO", "HONESTO", "PRESENTE"],
    hiddenTraits: ["ADAPTAÇÃO", "CUIDADO", "HESITAÇÃO", "NUANCE"],
  },
};

export function getPersonaDimension(code: PersonaCode): PersonaDimension {
  return personaDimensions[code];
}

export const PERSONA_INDEX_BANDS: Record<
  PersonaIndexBand,
  { label: string; description: string; min: number; max: number }
> = {
  flexible: {
    label: "Persona Flexível",
    min: 0,
    max: 30,
    description:
      "Existe uma proximidade maior entre aquilo que você sente internamente e aquilo que permite que as outras pessoas conheçam.",
  },
  adaptive: {
    label: "Persona Adaptativa",
    min: 31,
    max: 55,
    description:
      "Você adapta aspectos da sua expressão conforme o contexto, sem necessariamente perder contato com aquilo que deseja e sente.",
  },
  present: {
    label: "Persona Presente",
    min: 56,
    max: 75,
    description:
      "Os papéis que você ocupa e a percepção das outras pessoas parecem exercer uma influência importante sobre a forma como você se apresenta.",
  },
  dominant: {
    label: "Persona Dominante",
    min: 76,
    max: 100,
    description:
      "Existe uma forte identificação com os papéis e características através dos quais você aprendeu a ser reconhecido. Em alguns contextos, pode ser difícil separar “quem eu sou” de “quem aprendi que preciso ser”.",
  },
};

export function getPersonaIndexBand(value: number): PersonaIndexBand {
  if (value <= 30) return "flexible";
  if (value <= 55) return "adaptive";
  if (value <= 75) return "present";
  return "dominant";
}

export function buildPersonaRelationshipNote(codes: PersonaCode[]): string {
  const names = codes
    .slice(0, 3)
    .map((code) => personaDimensions[code].name.replace("Pessoa ", ""));

  if (names.length < 2) {
    return "Os papéis que aparecem aqui não são máscaras falsas — são formas aprendidas de circular pelo mundo.";
  }

  const [a, b, c] = names;
  if (c) {
    return `${a}, ${b.toLowerCase()} e ${c.toLowerCase()} parecem caminhar juntas na maneira como você aprendeu a ocupar seu espaço diante das outras pessoas.`;
  }

  return `${a} e ${b.toLowerCase()} parecem caminhar juntas na maneira como você aprendeu a ocupar seu espaço diante das outras pessoas.`;
}
