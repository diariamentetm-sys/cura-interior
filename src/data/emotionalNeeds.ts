import type {
  EmotionalNeed,
  EmotionalNeedCode,
  NeedBalance,
  NeedFamilyId,
} from "@/types/emotionalNeeds";

export const EMOTIONAL_NEED_ORDER: EmotionalNeedCode[] = [
  "SE",
  "RE",
  "AU",
  "PE",
  "CO",
  "CT",
  "AC",
  "ES",
  "LI",
  "SI",
];

export const NEED_FAMILIES: Record<
  NeedFamilyId,
  { name: string; codes: EmotionalNeedCode[] }
> = {
  vinculo: {
    name: "Vínculo",
    codes: ["CO", "PE", "AC"],
  },
  seguranca: {
    name: "Segurança",
    codes: ["SE", "ES", "CT"],
  },
  identidade: {
    name: "Identidade",
    codes: ["AU", "LI", "RE"],
  },
  sentido: {
    name: "Sentido",
    codes: ["SI"],
  },
};

export const emotionalNeeds: Record<EmotionalNeedCode, EmotionalNeed> = {
  SE: {
    code: "SE",
    name: "Segurança",
    family: "seguranca",
    innerMessage: "Preciso sentir que estou seguro.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Sentir proteção, confiança e a sensação de que não está prestes a acontecer algo difícil demais ocupa um lugar central na forma como você busca equilíbrio.",
    whatYouSeek: [
      "proteção",
      "previsibilidade",
      "confiança",
      "apoio em momentos difíceis",
      "sensação de que há chão sob os pés",
    ],
    whenItFeelsMet: [
      "tranquilidade",
      "confiança no entorno",
      "maior abertura",
      "capacidade de respirar sem alerta constante",
      "sensação de poder contar com alguém ou algo",
    ],
    whenItFeelsMissing: [
      "hipervigilância",
      "ansiedade diante do incerto",
      "dificuldade de relaxar",
      "busca intensa por garantias",
      "medo de ficar desprotegido",
    ],
    whenItBecomesDominant:
      "A busca por segurança pode começar a pesar quando você sente que precisa de muitas garantias antes de agir, confiar ou se abrir.",
    balancePath:
      "Cultivar bases reais de apoio sem exigir que a vida esteja totalmente previsível para você se permitir viver.",
    reflectionQuestions: [
      "O que faz você realmente se sentir seguro?",
      "Em quais situações você percebe que busca garantias antes de agir?",
      "Quanto da sua segurança vem de dentro e quanto depende do que está ao redor?",
    ],
  },
  RE: {
    code: "RE",
    name: "Reconhecimento",
    family: "identidade",
    innerMessage: "Preciso sentir que meu valor é percebido.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Sentir que seu esforço, presença e contribuição são percebidos ocupa um lugar relevante na forma como você se sente valorizado.",
    whatYouSeek: [
      "validação",
      "elogios genuínos",
      "reconhecimento do esforço",
      "sensação de ser visto",
      "confirmação de valor",
    ],
    whenItFeelsMet: [
      "motivação",
      "sensação de valor",
      "entusiasmo para continuar",
      "orgulho saudável",
      "presença mais segura",
    ],
    whenItFeelsMissing: [
      "frustração",
      "sensação de invisibilidade",
      "dúvida sobre o próprio valor",
      "cansaço de se esforçar sem retorno",
      "necessidade intensa de ser notado",
    ],
    whenItBecomesDominant:
      "A busca por reconhecimento pode começar a pesar quando o valor pessoal passa a depender demais do olhar externo para se sustentar.",
    balancePath:
      "Receber reconhecimento com abertura e, ao mesmo tempo, praticar valorizar o próprio esforço mesmo quando ninguém vê.",
    reflectionQuestions: [
      "De quem você mais gostaria de ser reconhecido?",
      "O que acontece dentro de você quando seu esforço não é percebido?",
      "Quais conquistas continuam importantes mesmo quando ninguém vê?",
    ],
  },
  AU: {
    code: "AU",
    name: "Autonomia",
    family: "identidade",
    innerMessage: "Preciso sentir que minhas escolhas são minhas.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Sentir que suas decisões, espaços e caminhos nascem de você — e não de imposições externas — ocupa um lugar central na sua forma de se sentir inteiro.",
    whatYouSeek: [
      "independência",
      "liberdade de decisão",
      "espaço próprio",
      "respeito à sua vontade",
      "ausência de interferência excessiva",
    ],
    whenItFeelsMet: [
      "clareza",
      "autoridade interna",
      "respiração mais ampla",
      "confiança nas próprias escolhas",
      "sensação de direção própria",
    ],
    whenItFeelsMissing: [
      "irritação com imposições",
      "sensação de engessamento",
      "vontade de se afastar",
      "dificuldade de aceitar ajuda",
      "medo de perder a si mesmo",
    ],
    whenItBecomesDominant:
      "A busca por autonomia pode começar a pesar quando qualquer aproximação ou apoio passa a parecer ameaça à sua independência.",
    balancePath:
      "Preservar o direito de escolher sem abrir mão de vínculos e apoios que também nutrem a vida.",
    reflectionQuestions: [
      "Em quais áreas da sua vida é mais importante sentir que a decisão é sua?",
      "Quando ajuda começa a parecer interferência para você?",
      "O que você protege quando protege sua independência?",
    ],
  },
  PE: {
    code: "PE",
    name: "Pertencimento",
    family: "vinculo",
    innerMessage: "Preciso sentir que faço parte.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Sentir inclusão, aceitação e um lugar real entre as pessoas ocupa um espaço central na forma como você busca se sentir em casa no mundo.",
    whatYouSeek: [
      "inclusão",
      "aceitação",
      "identificação com um grupo",
      "sensação de ter um lugar",
      "participação genuína",
    ],
    whenItFeelsMet: [
      "acolhimento grupal",
      "naturalidade",
      "sensação de comunidade",
      "tranquilidade social",
      "permissão para existir sem se forçar",
    ],
    whenItFeelsMissing: [
      "sensação de exclusão",
      "esforço para se encaixar",
      "medo de ficar de fora",
      "dúvida sobre o próprio lugar",
      "solidão social",
    ],
    whenItBecomesDominant:
      "A busca por pertencimento pode começar a pesar quando você adapta demais quem é para não perder o lugar no grupo.",
    balancePath:
      "Buscar espaços de inclusão onde você possa fazer parte sem precisar abandonar aquilo que é próprio de você.",
    reflectionQuestions: [
      "Onde você sente que realmente pode ser parte sem precisar se adaptar demais?",
      "O que faz você sentir que pertence?",
      "Como você reage quando percebe que está ficando de fora?",
    ],
  },
  CO: {
    code: "CO",
    name: "Conexão",
    family: "vinculo",
    innerMessage: "Preciso sentir que existe vínculo verdadeiro.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Você parece valorizar especialmente vínculos em que existe proximidade emocional, troca e sensação de ser verdadeiramente conhecido. Não basta apenas estar cercado de pessoas. Para você, a qualidade da relação parece importar mais do que a quantidade de relações.",
    whatYouSeek: [
      "intimidade",
      "reciprocidade",
      "conversas profundas",
      "presença emocional",
      "sensação de ser compreendido",
    ],
    whenItFeelsMet: [
      "proximidade",
      "confiança",
      "abertura",
      "tranquilidade para compartilhar o que sente",
      "sensação de não precisar enfrentar tudo sozinho",
    ],
    whenItFeelsMissing: [
      "sensação de distância",
      "solidão mesmo acompanhado",
      "dúvida sobre a profundidade dos vínculos",
      "busca intensa por proximidade",
      "frustração com relações superficiais",
    ],
    whenItBecomesDominant:
      "A busca por conexão pode começar a pesar quando você sente que precisa estar emocionalmente próximo para se sentir seguro ou completo.",
    balancePath:
      "Cultivar vínculos profundos sem abandonar a capacidade de permanecer inteiro nos momentos em que está sozinho.",
    reflectionQuestions: [
      "O que faz você sentir que alguém realmente te conhece?",
      "Que tipo de relação deixa você emocionalmente nutrido?",
      "O que você sente quando os vínculos parecem superficiais?",
    ],
  },
  CT: {
    code: "CT",
    name: "Controle",
    family: "seguranca",
    innerMessage: "Preciso sentir que consigo conduzir o que está acontecendo.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Organizar, antecipar e ter clareza sobre o que está acontecendo ajudam você a se sentir mais capaz de conduzir a própria experiência.",
    whatYouSeek: [
      "organização",
      "antecipação",
      "planejamento",
      "previsibilidade",
      "capacidade de conduzir situações",
    ],
    whenItFeelsMet: [
      "clareza mental",
      "sensação de domínio",
      "menos ansiedade",
      "capacidade de agir com direção",
      "conforto com o que está sob sua influência",
    ],
    whenItFeelsMissing: [
      "desconforto com o caos",
      "necessidade de reorganizar tudo",
      "irritação com imprevistos",
      "dificuldade de soltar",
      "alerta constante",
    ],
    whenItBecomesDominant:
      "A busca por controle pode começar a pesar quando a imprevisibilidade passa a parecer inaceitável e tudo precisa ser antecipado para você se sentir bem.",
    balancePath:
      "Manter organização e clareza sem exigir que tudo esteja sob condução imediata para você confiar no processo.",
    reflectionQuestions: [
      "O que fica mais difícil quando você não consegue prever o que vai acontecer?",
      "Em que situações organizar tudo te traz segurança?",
      "O que seria possível deixar acontecer sem interferir imediatamente?",
    ],
  },
  AC: {
    code: "AC",
    name: "Acolhimento",
    family: "vinculo",
    innerMessage: "Preciso sentir que posso baixar a guarda.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Sentir que pode descansar, ser escutado e receber cuidado — sem precisar merecer — ocupa um lugar central na sua busca por alívio emocional.",
    whatYouSeek: [
      "cuidado",
      "escuta",
      "compreensão",
      "permissão para descansar",
      "apoio sem exigência",
    ],
    whenItFeelsMet: [
      "alívio",
      "suavidade",
      "sensação de poder baixar a guarda",
      "conforto emocional",
      "espaço para não precisar ser forte o tempo todo",
    ],
    whenItFeelsMissing: [
      "cansaço acumulado",
      "sensação de carregar sozinho",
      "dificuldade de pedir",
      "desejo intenso de ser cuidado",
      "frustração por sempre oferecer e pouco receber",
    ],
    whenItBecomesDominant:
      "A busca por acolhimento pode começar a pesar quando você sente que só consegue relaxar se alguém estiver cuidando ativamente de você.",
    balancePath:
      "Permitir-se receber cuidado e, ao mesmo tempo, cultivar pequenas formas de se acolher também por conta própria.",
    reflectionQuestions: [
      "Com quem você sente que pode descansar emocionalmente?",
      "Você consegue receber cuidado com a mesma facilidade com que oferece?",
      "O que você gostaria de ouvir quando está no limite?",
    ],
  },
  ES: {
    code: "ES",
    name: "Estabilidade",
    family: "seguranca",
    innerMessage: "Preciso sentir que as coisas têm continuidade.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Rotina, consistência e a sensação de que algo permanece ajudam você a sentir que a vida tem chão e continuidade.",
    whatYouSeek: [
      "rotina",
      "consistência",
      "permanência",
      "previsibilidade de longo prazo",
      "continuidade nas relações e nos dias",
    ],
    whenItFeelsMet: [
      "centramento",
      "confiança no amanhã",
      "ritmo interno mais calmo",
      "sensação de base",
      "menos dispersão",
    ],
    whenItFeelsMissing: [
      "desorganização interna",
      "dificuldade com mudanças frequentes",
      "anseio por algo que dure",
      "sensação de chão instável",
      "cansaço com recomeços constantes",
    ],
    whenItBecomesDominant:
      "A busca por estabilidade pode começar a pesar quando qualquer mudança passa a parecer ameaça, mesmo quando a vida pede movimento.",
    balancePath:
      "Preservar bases e rotinas que sustentam você, sem impedir os ajustes necessários ao crescimento.",
    reflectionQuestions: [
      "O que precisa permanecer para você sentir que sua vida tem chão?",
      "Quais mudanças costumam desorganizar você mais?",
      "Quanto de rotina te sustenta e quanto começa a limitar?",
    ],
  },
  LI: {
    code: "LI",
    name: "Liberdade",
    family: "identidade",
    innerMessage: "Preciso sentir que posso me mover e escolher outros caminhos.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Espaço, espontaneidade e a possibilidade de mudar de direção ajudam você a sentir que a vida continua aberta e habitável.",
    whatYouSeek: [
      "espaço",
      "espontaneidade",
      "variedade",
      "possibilidade de experimentar",
      "ausência de restrições excessivas",
    ],
    whenItFeelsMet: [
      "leveza",
      "expansão",
      "criatividade",
      "sensação de ar",
      "entusiasmo por possibilidades",
    ],
    whenItFeelsMissing: [
      "sensação de prisão",
      "irritação com compromissos rígidos",
      "vontade de escapar",
      "restrição",
      "perda de espontaneidade",
    ],
    whenItBecomesDominant:
      "A busca por liberdade pode começar a pesar quando qualquer vínculo ou compromisso passa a parecer limitação, mesmo aqueles que também nutrem você.",
    balancePath:
      "Preservar espaço e movimento sem precisar abandonar aquilo que também é importante e sustentador.",
    reflectionQuestions: [
      "Em quais momentos você sente que precisa de mais espaço?",
      "Que tipos de compromisso começam a parecer prisão?",
      "Como preservar liberdade sem precisar abandonar aquilo que também é importante?",
    ],
  },
  SI: {
    code: "SI",
    name: "Significado",
    family: "sentido",
    innerMessage: "Preciso sentir que aquilo que vivo faz sentido.",
    description:
      "Esta parece ser uma necessidade emocional importante para você. Propósito, coerência e a sensação de que as experiências se conectam a algo maior ocupam um lugar central na forma como você avalia a própria vida.",
    whatYouSeek: [
      "propósito",
      "coerência",
      "profundidade",
      "compreensão das experiências",
      "conexão com algo maior",
    ],
    whenItFeelsMet: [
      "direção",
      "integridade",
      "sensação de alinhamento",
      "motivação profunda",
      "paz com as próprias escolhas",
    ],
    whenItFeelsMissing: [
      "vazio",
      "sensação de superficialidade",
      "questionamentos intensos",
      "desmotivação",
      "dificuldade de ver sentido no cotidiano",
    ],
    whenItBecomesDominant:
      "A busca por significado pode começar a pesar quando tudo precisa parecer profundo ou justificado para valer a pena — inclusive o que é simplesmente humano e cotidiano.",
    balancePath:
      "Buscar coerência e propósito sem exigir que cada momento da vida carregue um sentido grandioso.",
    reflectionQuestions: [
      "O que faz algo valer a pena para você?",
      "Quais experiências da sua vida parecem pedir compreensão?",
      "O que você precisa sentir para perceber que está vivendo de maneira coerente consigo?",
    ],
  },
};

export function getEmotionalNeed(code: EmotionalNeedCode): EmotionalNeed {
  return emotionalNeeds[code];
}

export const POSSIBLE_BALANCES: Array<
  Omit<NeedBalance, "left" | "right"> & {
    left: EmotionalNeedCode;
    right: EmotionalNeedCode;
  }
> = [
  {
    id: "autonomy-belonging",
    title: "Autonomia × Pertencimento",
    left: "AU",
    right: "PE",
    description:
      "Você pode desejar profundamente fazer parte e, ao mesmo tempo, preservar a liberdade de tomar suas próprias decisões. Essas duas necessidades precisam coexistir — não se anulam.",
  },
  {
    id: "freedom-stability",
    title: "Liberdade × Estabilidade",
    left: "LI",
    right: "ES",
    description:
      "Parte de você busca espaço e movimento; outra parte precisa de continuidade e chão. O equilíbrio está em preservar base sem perder ar.",
  },
  {
    id: "control-freedom",
    title: "Controle × Liberdade",
    left: "CT",
    right: "LI",
    description:
      "Organizar o que acontece e, ao mesmo tempo, deixar espaço para o espontâneo podem ser duas forças vivas em você. Não é contradição — é tensão criativa.",
  },
  {
    id: "recognition-autonomy",
    title: "Reconhecimento × Autonomia",
    left: "RE",
    right: "AU",
    description:
      "Você pode querer ser visto e, ao mesmo tempo, não querer que o olhar externo conduza demais as suas escolhas. Validação e soberania interna pedem diálogo.",
  },
  {
    id: "connection-autonomy",
    title: "Conexão × Autonomia",
    left: "CO",
    right: "AU",
    description:
      "Aproximar-se profundamente e preservar espaço próprio podem aparecer juntos. Intimidade não precisa significar perda de si.",
  },
  {
    id: "security-freedom",
    title: "Segurança × Liberdade",
    left: "SE",
    right: "LI",
    description:
      "Proteger-se e explorar o novo podem coexistir. Segurança não precisa ser prisão, e liberdade não precisa ser desamparo.",
  },
];

export function buildNeedRelationshipNote(codes: EmotionalNeedCode[]): string {
  const names = codes.slice(0, 3).map((code) => emotionalNeeds[code].name);
  if (names.length < 2) {
    return "As necessidades que aparecem aqui não são fraquezas — são forças que influenciam escolhas, vínculos e reações.";
  }

  const [a, b, c] = names;
  if (c) {
    return `Para você, ${a.toLowerCase()} parece caminhar junto da necessidade de ${b.toLowerCase()} e de ${c.toLowerCase()}. Observá-las juntas ajuda a entender o que realmente pesa nas suas escolhas.`;
  }

  return `Para você, ${a.toLowerCase()} parece caminhar junto da necessidade de ${b.toLowerCase()}. Observá-las juntas ajuda a entender o que realmente pesa nas suas escolhas.`;
}
