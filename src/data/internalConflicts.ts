import type {
  ConflictCode,
  ConflictPoleCode,
  InternalConflict,
} from "@/types/internalConflicts";

export const CONFLICT_ORDER: ConflictCode[] = [
  "LS",
  "CE",
  "PI",
  "RE",
  "EM",
  "RA",
  "CC",
  "AR",
  "PE",
  "PA",
];

export const POLE_ORDER: ConflictPoleCode[] = [
  "LS_FREEDOM",
  "LS_SECURITY",
  "CE_CONTROL",
  "CE_SURRENDER",
  "PI_BELONGING",
  "PI_INDIVIDUALITY",
  "RE_REASON",
  "RE_EMOTION",
  "EM_STABILITY",
  "EM_CHANGE",
  "RA_RECOGNITION",
  "RA_AUTHENTICITY",
  "CC_OTHERS",
  "CC_SELF",
  "AR_ACTION",
  "AR_WITHDRAWAL",
  "PE_PERFECTION",
  "PE_SPONTANEITY",
  "PA_CLOSENESS",
  "PA_AUTONOMY",
];

export const CONFLICT_POLES: Record<
  ConflictCode,
  { poleA: ConflictPoleCode; poleB: ConflictPoleCode }
> = {
  LS: { poleA: "LS_FREEDOM", poleB: "LS_SECURITY" },
  CE: { poleA: "CE_CONTROL", poleB: "CE_SURRENDER" },
  PI: { poleA: "PI_BELONGING", poleB: "PI_INDIVIDUALITY" },
  RE: { poleA: "RE_REASON", poleB: "RE_EMOTION" },
  EM: { poleA: "EM_STABILITY", poleB: "EM_CHANGE" },
  RA: { poleA: "RA_RECOGNITION", poleB: "RA_AUTHENTICITY" },
  CC: { poleA: "CC_OTHERS", poleB: "CC_SELF" },
  AR: { poleA: "AR_ACTION", poleB: "AR_WITHDRAWAL" },
  PE: { poleA: "PE_PERFECTION", poleB: "PE_SPONTANEITY" },
  PA: { poleA: "PA_CLOSENESS", poleB: "PA_AUTONOMY" },
};

export const internalConflicts: Record<ConflictCode, InternalConflict> = {
  LS: {
    code: "LS",
    name: "Liberdade × Segurança",
    relatedEmotionalNeeds: ["LI", "SE", "AU", "ES"],
    poleA: {
      code: "LS_FREEDOM",
      name: "Liberdade",
      innerMessage: "Quero poder escolher e me mover.",
      protects: [
        "autonomia",
        "movimento",
        "possibilidades",
        "identidade própria",
        "direito de escolher",
      ],
      whenDominates:
        "Pode surgir dificuldade em sustentar compromissos, rotinas ou escolhas que começam a parecer limitantes.",
    },
    poleB: {
      code: "LS_SECURITY",
      name: "Segurança",
      innerMessage: "Quero sentir que tenho chão.",
      protects: [
        "estabilidade",
        "continuidade",
        "proteção",
        "previsibilidade",
        "sensação de chão",
      ],
      whenDominates:
        "Pode surgir dificuldade em experimentar caminhos novos sem garantias suficientes.",
    },
    description:
      "Você parece desejar bastante espaço para escolher, experimentar e construir seu próprio caminho. Ao mesmo tempo, existe uma necessidade igualmente importante de sentir que há estabilidade, previsibilidade e algum tipo de chão antes de se mover. Por isso, algumas decisões podem parecer difíceis mesmo quando você sabe o que deseja: uma parte quer avançar; outra quer ter certeza de que será seguro.",
    integrationPath:
      "O objetivo não é escolher entre liberdade e segurança. É construir formas de experimentar movimento sem abandonar completamente aquilo que dá sustentação.",
    integrationQuestion: "Como posso me mover sem perder meu chão?",
    reflectionQuestions: [
      "Onde você sente que precisa escolher entre liberdade e estabilidade?",
      "O que precisa existir para você se sentir seguro o suficiente para experimentar algo novo?",
      "Em quais situações segurança começa a parecer prisão?",
    ],
  },
  CE: {
    code: "CE",
    name: "Controle × Entrega",
    relatedEmotionalNeeds: ["CT", "SE", "AC"],
    poleA: {
      code: "CE_CONTROL",
      name: "Controle",
      innerMessage: "Quero conduzir o que está acontecendo.",
      protects: [
        "clareza",
        "antecipação",
        "organização",
        "capacidade de conduzir",
        "redução da incerteza",
      ],
      whenDominates:
        "Pode surgir dificuldade em soltar o processo e aceitar o que não está sob influência imediata.",
    },
    poleB: {
      code: "CE_SURRENDER",
      name: "Entrega",
      innerMessage: "Quero confiar no que não posso controlar.",
      protects: [
        "confiança",
        "abertura ao processo",
        "aceitação do imprevisível",
        "alívio da hiperresponsabilidade",
        "espaço para o que flui",
      ],
      whenDominates:
        "Pode surgir dificuldade em assumir protagonismo ou organizar o que ainda depende de você.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: a vontade de organizar, antecipar e conduzir — e a necessidade de confiar, soltar e aceitar o que não está nas suas mãos.",
    integrationPath:
      "O objetivo não é abandonar o controle nem entregar tudo. É distinguir o que cabe a você conduzir e o que pode ser confiado ao processo.",
    integrationQuestion:
      "O que posso organizar — e o que posso deixar acontecer?",
    reflectionQuestions: [
      "O que você teme que aconteça quando não consegue controlar uma situação?",
      "Em quais áreas da vida você consegue confiar mais no processo?",
      "O que seria possível deixar acontecer sem tentar organizar imediatamente?",
    ],
  },
  PI: {
    code: "PI",
    name: "Pertencimento × Individualidade",
    relatedEmotionalNeeds: ["PE", "AU", "RE"],
    poleA: {
      code: "PI_BELONGING",
      name: "Pertencimento",
      innerMessage: "Quero sentir que faço parte.",
      protects: [
        "inclusão",
        "aceitação",
        "vínculo grupal",
        "sensação de lugar",
        "segurança relacional",
      ],
      whenDominates:
        "Pode surgir adaptação excessiva e dificuldade de expressar o que é próprio, por medo de exclusão.",
    },
    poleB: {
      code: "PI_INDIVIDUALITY",
      name: "Individualidade",
      innerMessage: "Quero continuar sendo eu.",
      protects: [
        "identidade própria",
        "autonomia de opinião",
        "expressão pessoal",
        "diferença",
        "coerência consigo",
      ],
      whenDominates:
        "Pode surgir distância dos grupos ou dificuldade de se deixar incluir sem sentir perda de si.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: o desejo de pertencer e ser aceito — e a necessidade de preservar quem você é sem se moldar demais.",
    integrationPath:
      "O objetivo não é escolher entre o grupo e você. É encontrar espaços em que pertença sem abandonar a própria diferença.",
    integrationQuestion:
      "Onde posso fazer parte sem deixar de ser eu?",
    reflectionQuestions: [
      "Em quais grupos você consegue pertencer sem precisar se adaptar demais?",
      "Quando ser aceito começa a custar alguma parte de você?",
      "O que você protege quando escolhe ser diferente?",
    ],
  },
  RE: {
    code: "RE",
    name: "Razão × Emoção",
    relatedEmotionalNeeds: ["SI", "CT", "CO"],
    poleA: {
      code: "RE_REASON",
      name: "Razão",
      innerMessage: "Quero compreender antes de agir.",
      protects: [
        "clareza",
        "análise",
        "organização mental",
        "discernimento",
        "decisões justificáveis",
      ],
      whenDominates:
        "Pode surgir dificuldade de escutar o que o corpo e os sentimentos já sabem, mesmo antes da explicação.",
    },
    poleB: {
      code: "RE_EMOTION",
      name: "Emoção",
      innerMessage: "Quero confiar no que sinto.",
      protects: [
        "intuição",
        "sensibilidade",
        "experiência interna",
        "vivacidade",
        "verdade subjetiva",
      ],
      whenDominates:
        "Pode surgir dificuldade de organizar decisões quando a intensidade emocional ocupa todo o espaço.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: a vontade de analisar e compreender — e a necessidade de confiar no que sente e intui.",
    integrationPath:
      "O objetivo não é silenciar a razão nem a emoção. É permitir que ambas informem a decisão, cada uma no seu tempo.",
    integrationQuestion:
      "Como posso pensar e sentir sem precisar escolher apenas um?",
    reflectionQuestions: [
      "Em quais decisões sua cabeça e seus sentimentos costumam discordar?",
      "Qual lado você aprendeu a confiar mais?",
      "O que mudaria se ambos tivessem espaço na decisão?",
    ],
  },
  EM: {
    code: "EM",
    name: "Estabilidade × Mudança",
    relatedEmotionalNeeds: ["ES", "LI", "SE"],
    poleA: {
      code: "EM_STABILITY",
      name: "Estabilidade",
      innerMessage: "Quero continuidade e chão.",
      protects: [
        "rotina",
        "continuidade",
        "segurança no conhecido",
        "consistência",
        "estruturas que sustentam",
      ],
      whenDominates:
        "Pode surgir dificuldade de renovar caminhos mesmo quando a vida pede movimento.",
    },
    poleB: {
      code: "EM_CHANGE",
      name: "Mudança",
      innerMessage: "Quero renovar e experimentar.",
      protects: [
        "renovação",
        "novidade",
        "transformação",
        "curiosidade",
        "quebra de ciclos",
      ],
      whenDominates:
        "Pode surgir dificuldade de sustentar o que já funciona, trocando demais antes de enraizar.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: o desejo de preservar o que é estável — e a necessidade de renovar, mudar e recomeçar.",
    integrationPath:
      "O objetivo não é ficar parado nem mudar por mudar. É preservar o que sustenta enquanto permite o que precisa se transformar.",
    integrationQuestion:
      "O que posso mudar sem perder o que me sustenta?",
    reflectionQuestions: [
      "O que você gostaria de mudar, mas teme perder?",
      "O que a estabilidade oferece que você não quer abandonar?",
      "Em que momento permanecer começa a pesar mais do que mudar?",
    ],
  },
  RA: {
    code: "RA",
    name: "Reconhecimento × Autenticidade",
    relatedEmotionalNeeds: ["RE", "AU", "SI"],
    poleA: {
      code: "RA_RECOGNITION",
      name: "Reconhecimento",
      innerMessage: "Quero ser percebido e valorizado.",
      protects: [
        "validação",
        "reputação",
        "sensação de valor",
        "pertencimento pelo esforço",
        "visibilidade",
      ],
      whenDominates:
        "Pode surgir dificuldade de escolher caminhos próprios quando o olhar externo pesa demais.",
    },
    poleB: {
      code: "RA_AUTHENTICITY",
      name: "Autenticidade",
      innerMessage: "Quero ser coerente comigo.",
      protects: [
        "coerência consigo",
        "expressão verdadeira",
        "escolhas próprias",
        "liberdade de ser diferente",
        "menor dependência do olhar externo",
      ],
      whenDominates:
        "Pode surgir isolamento ou dificuldade de receber reconhecimento sem suspeitar da própria imagem.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: o desejo de ser visto e reconhecido — e a necessidade de viver de forma coerente consigo, mesmo sem aprovação.",
    integrationPath:
      "O objetivo não é viver só para agradar nem ignorar o olhar do outro. É buscar reconhecimento sem abandonar a própria verdade.",
    integrationQuestion:
      "Como posso ser visto sem deixar de ser eu?",
    reflectionQuestions: [
      "Quais escolhas você faria diferente se ninguém estivesse olhando?",
      "De quem você mais busca aprovação?",
      "Onde reconhecimento e autenticidade conseguem coexistir?",
    ],
  },
  CC: {
    code: "CC",
    name: "Cuidar dos Outros × Cuidar de Si",
    relatedEmotionalNeeds: ["AC", "AU", "PE"],
    poleA: {
      code: "CC_OTHERS",
      name: "Cuidar dos Outros",
      innerMessage: "Quero estar presente para quem precisa.",
      protects: [
        "responsabilidade",
        "disponibilidade",
        "generosidade",
        "vínculo pelo cuidado",
        "sensação de ser necessário",
      ],
      whenDominates:
        "Pode surgir sobrecarga, ressentimento e dificuldade de receber o mesmo cuidado que oferece.",
    },
    poleB: {
      code: "CC_SELF",
      name: "Cuidar de Si",
      innerMessage: "Quero me preservar também.",
      protects: [
        "descanso",
        "limites",
        "autopreservação",
        "prioridade pessoal",
        "capacidade de dizer não",
      ],
      whenDominates:
        "Pode surgir culpa ou distância excessiva, mesmo quando o cuidado próprio é necessário.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: a vontade de cuidar e estar disponível — e a necessidade de se preservar, descansar e dizer não.",
    integrationPath:
      "O objetivo não é deixar de cuidar nem se isolar. É cuidar sem se abandonar — e se preservar sem abandonar o vínculo.",
    integrationQuestion:
      "Como posso cuidar sem me esquecer de mim?",
    reflectionQuestions: [
      "Quando cuidar começa a virar obrigação?",
      "O que você sente quando escolhe a si mesmo?",
      "Quem cuida de você quando você está cansado de cuidar?",
    ],
  },
  AR: {
    code: "AR",
    name: "Ação × Recolhimento",
    relatedEmotionalNeeds: ["CT", "AC", "AU"],
    poleA: {
      code: "AR_ACTION",
      name: "Ação",
      innerMessage: "Quero fazer e resolver.",
      protects: [
        "iniciativa",
        "movimento",
        "resolução",
        "produtividade",
        "sensação de avanço",
      ],
      whenDominates:
        "Pode surgir dificuldade de pausar, processar e simplesmente estar — mesmo quando o corpo pede silêncio.",
    },
    poleB: {
      code: "AR_WITHDRAWAL",
      name: "Recolhimento",
      innerMessage: "Quero pausar e processar.",
      protects: [
        "pausa",
        "silêncio",
        "processamento interno",
        "descanso",
        "observação antes da ação",
      ],
      whenDominates:
        "Pode surgir adiamento prolongado ou retraimento quando a vida também pede movimento.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: a vontade de agir e resolver — e a necessidade de se recolher, processar e descansar.",
    integrationPath:
      "O objetivo não é viver só em movimento nem só em pausa. É criar ritmos em que ação e recolhimento se alternem com honestidade.",
    integrationQuestion:
      "Quando é hora de agir — e quando é hora de parar?",
    reflectionQuestions: [
      "Como você percebe que chegou a hora de parar?",
      "Quando agir te ajuda e quando serve para evitar sentir?",
      "O que costuma aparecer quando você finalmente fica em silêncio?",
    ],
  },
  PE: {
    code: "PE",
    name: "Perfeição × Espontaneidade",
    relatedEmotionalNeeds: ["RE", "LI", "CT"],
    poleA: {
      code: "PE_PERFECTION",
      name: "Perfeição",
      innerMessage: "Quero fazer do jeito certo.",
      protects: [
        "qualidade",
        "preparação",
        "cuidado com o erro",
        "padrão elevado",
        "sensação de dignidade no trabalho",
      ],
      whenDominates:
        "Pode surgir demora para começar, autocrítica excessiva e dificuldade de entregar o “bom o bastante”.",
    },
    poleB: {
      code: "PE_SPONTANEITY",
      name: "Espontaneidade",
      innerMessage: "Quero tentar sem precisar ter certeza.",
      protects: [
        "improviso",
        "experimentação",
        "leveza",
        "liberdade para errar",
        "ação antes da certeza total",
      ],
      whenDominates:
        "Pode surgir impulsividade ou dificuldade de aprofundar e refinar o que também pediria mais cuidado.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: a vontade de fazer direito — e a necessidade de simplesmente tentar, improvisar e seguir.",
    integrationPath:
      "O objetivo não é abandonar o cuidado nem viver só no improviso. É permitir começar sem exigir perfeição — e refinar sem travar.",
    integrationQuestion:
      "Como posso tentar sem precisar estar perfeito?",
    reflectionQuestions: [
      "O que você faria hoje se não precisasse fazer perfeitamente?",
      "O que um erro parece significar para você?",
      "Em que situações improvisar traz liberdade?",
    ],
  },
  PA: {
    code: "PA",
    name: "Proximidade × Autonomia",
    relatedEmotionalNeeds: ["CO", "AU", "AC"],
    poleA: {
      code: "PA_CLOSENESS",
      name: "Proximidade",
      innerMessage: "Quero vínculo e intimidade.",
      protects: [
        "vínculo",
        "intimidade",
        "presença",
        "troca",
        "desejo de compartilhar",
      ],
      whenDominates:
        "Pode surgir medo de distância e dificuldade de respeitar o próprio espaço — ou o do outro.",
    },
    poleB: {
      code: "PA_AUTONOMY",
      name: "Autonomia",
      innerMessage: "Quero espaço sem me perder.",
      protects: [
        "espaço pessoal",
        "independência",
        "autossuficiência",
        "liberdade dentro dos vínculos",
        "não se sentir absorvido",
      ],
      whenDominates:
        "Pode surgir distância excessiva ou dificuldade de receber proximidade sem sentir perda de si.",
    },
    description:
      "Duas necessidades importantes parecem puxar você em direções diferentes: o desejo de proximidade e intimidade — e a necessidade de espaço, independência e não se sentir absorvido.",
    integrationPath:
      "O objetivo não é escolher entre perto e longe. É construir proximidade com espaço — e autonomia sem abandono.",
    integrationQuestion:
      "Como posso estar perto sem me perder?",
    reflectionQuestions: [
      "Quanto espaço você precisa para continuar se sentindo você dentro de uma relação?",
      "Em quais momentos proximidade começa a parecer invasão?",
      "O que ajuda você a permanecer conectado sem perder sua autonomia?",
    ],
  },
};

export function getInternalConflict(code: ConflictCode): InternalConflict {
  return internalConflicts[code];
}

export function buildConflictRelationshipNote(codes: ConflictCode[]): string {
  const names = codes.slice(0, 3).map((code) => internalConflicts[code].name);
  if (names.length < 2) {
    return "Conflitos internos não significam incoerência — são necessidades legítimas coexistindo.";
  }

  const [a, b, c] = names;
  if (c) {
    return `${a}, ${b} e ${c} parecem atravessar a forma como você negocia desejos que convivem lado a lado. Observá-los juntos ajuda a entender por que certas escolhas dividem por dentro.`;
  }

  return `${a} e ${b} parecem atravessar a forma como você negocia desejos que convivem lado a lado.`;
}
