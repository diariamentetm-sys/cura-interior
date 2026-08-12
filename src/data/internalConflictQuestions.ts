import type { InternalConflictQuestion } from "@/types/internalConflicts";

export const internalConflictQuestions: InternalConflictQuestion[] = [
  {
    id: 1,
    text: "Quando aparece uma oportunidade que pode mudar bastante sua vida...",
    answers: [
      {
        id: "c1a",
        text: "Fico animado com a possibilidade de algo novo.",
        score: { EM_CHANGE: 3, LS_FREEDOM: 1 },
      },
      {
        id: "c1b",
        text: "Primeiro penso no que posso perder.",
        score: { LS_SECURITY: 3, EM_STABILITY: 1 },
      },
      {
        id: "c1c",
        text: "Quero entender todas as consequências antes de decidir.",
        score: { CE_CONTROL: 3, RE_REASON: 1 },
      },
      {
        id: "c1d",
        text: "Costumo perceber primeiro como aquilo me faz sentir.",
        score: { RE_EMOTION: 3 },
      },
    ],
  },
  {
    id: 2,
    text: "Quando seus planos mudam de última hora...",
    answers: [
      {
        id: "c2a",
        text: "Tento reorganizar tudo imediatamente.",
        score: { CE_CONTROL: 3 },
      },
      {
        id: "c2b",
        text: "Fico incomodado porque gosto de saber o que vai acontecer.",
        score: { EM_STABILITY: 3, LS_SECURITY: 1 },
      },
      {
        id: "c2c",
        text: "Dependendo da mudança, posso achar até interessante.",
        score: { EM_CHANGE: 3 },
      },
      {
        id: "c2d",
        text: "Tento aceitar e ver o que acontece.",
        score: { CE_SURRENDER: 3 },
      },
    ],
  },
  {
    id: 3,
    text: "Quando você está em um grupo e pensa diferente da maioria...",
    answers: [
      {
        id: "c3a",
        text: "Costumo dizer o que penso.",
        score: { PI_INDIVIDUALITY: 3, RA_AUTHENTICITY: 1 },
      },
      {
        id: "c3b",
        text: "Avalio se vale a pena criar um conflito.",
        score: { PI_BELONGING: 3, RE_REASON: 1 },
      },
      {
        id: "c3c",
        text: "Posso começar a questionar minha própria opinião.",
        score: { PI_BELONGING: 3 },
      },
      {
        id: "c3d",
        text: "Prefiro manter minha posição, mesmo sem falar.",
        score: { PI_INDIVIDUALITY: 3 },
      },
    ],
  },
  {
    id: 4,
    text: "Quando precisa tomar uma decisão importante...",
    answers: [
      {
        id: "c4a",
        text: "Faço listas, comparo possibilidades e tento ser racional.",
        score: { RE_REASON: 3, CE_CONTROL: 1 },
      },
      {
        id: "c4b",
        text: "Percebo qual opção parece mais certa por dentro.",
        score: { RE_EMOTION: 3 },
      },
      {
        id: "c4c",
        text: "Tento combinar o que faz sentido com o que sinto.",
        score: { RE_REASON: 1, RE_EMOTION: 1 },
      },
      {
        id: "c4d",
        text: "Adio um pouco quando razão e emoção apontam direções diferentes.",
        score: { RE_REASON: 1, RE_EMOTION: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "Quando uma rotina começa a ficar previsível demais...",
    answers: [
      {
        id: "c5a",
        text: "Sinto tranquilidade.",
        score: { EM_STABILITY: 3 },
      },
      {
        id: "c5b",
        text: "Começo a sentir necessidade de alguma novidade.",
        score: { EM_CHANGE: 3 },
      },
      {
        id: "c5c",
        text: "Gosto da estabilidade, mas preciso de pequenos espaços de mudança.",
        score: { EM_STABILITY: 2, EM_CHANGE: 2 },
      },
      {
        id: "c5d",
        text: "Tenho vontade de romper completamente com a rotina.",
        score: { EM_CHANGE: 3, LS_FREEDOM: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "Quando alguém importante desaprova uma escolha sua...",
    answers: [
      {
        id: "c6a",
        text: "Isso pesa bastante para mim.",
        score: { RA_RECOGNITION: 3, PI_BELONGING: 1 },
      },
      {
        id: "c6b",
        text: "Escuto, mas tento manter o que faz sentido para mim.",
        score: { RA_AUTHENTICITY: 3 },
      },
      {
        id: "c6c",
        text: "Tenho vontade de explicar até a pessoa entender.",
        score: { RA_RECOGNITION: 2, RA_AUTHENTICITY: 1 },
      },
      {
        id: "c6d",
        text: "Prefiro fazer minha escolha sem precisar justificar demais.",
        score: { RA_AUTHENTICITY: 3, LS_FREEDOM: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "Quando você está cansado e alguém precisa da sua ajuda...",
    answers: [
      {
        id: "c7a",
        text: "Minha primeira reação é tentar ajudar.",
        score: { CC_OTHERS: 3 },
      },
      {
        id: "c7b",
        text: "Avalio se tenho energia antes de responder.",
        score: { CC_SELF: 3 },
      },
      {
        id: "c7c",
        text: "Ajudo, mas às vezes fico ressentido depois.",
        score: { CC_OTHERS: 3, CC_SELF: 1 },
      },
      {
        id: "c7d",
        text: "Tenho aprendido a dizer que não posso naquele momento.",
        score: { CC_SELF: 3 },
      },
    ],
  },
  {
    id: 8,
    text: "Quando algo está te incomodando...",
    answers: [
      {
        id: "c8a",
        text: "Quero fazer alguma coisa logo.",
        score: { AR_ACTION: 3 },
      },
      {
        id: "c8b",
        text: "Preciso ficar sozinho e entender o que estou sentindo.",
        score: { AR_WITHDRAWAL: 3 },
      },
      {
        id: "c8c",
        text: "Tento resolver e depois penso sobre o que aconteceu.",
        score: { AR_ACTION: 3, AR_WITHDRAWAL: 1 },
      },
      {
        id: "c8d",
        text: "Espero até sentir que estou pronto para agir.",
        score: { AR_WITHDRAWAL: 3 },
      },
    ],
  },
  {
    id: 9,
    text: "Quando precisa entregar algo importante...",
    answers: [
      {
        id: "c9a",
        text: "Quero revisar até sentir que está realmente bom.",
        score: { PE_PERFECTION: 3 },
      },
      {
        id: "c9b",
        text: "Prefiro entregar e melhorar depois.",
        score: { PE_SPONTANEITY: 3 },
      },
      {
        id: "c9c",
        text: "Tenho dificuldade de saber quando parar.",
        score: { PE_PERFECTION: 3 },
      },
      {
        id: "c9d",
        text: "Às vezes começo antes de saber exatamente como vou fazer.",
        score: { PE_SPONTANEITY: 3 },
      },
    ],
  },
  {
    id: 10,
    text: "Em relações muito próximas...",
    answers: [
      {
        id: "c10a",
        text: "Gosto de compartilhar bastante da minha vida.",
        score: { PA_CLOSENESS: 3 },
      },
      {
        id: "c10b",
        text: "Preciso preservar bastante espaço para mim.",
        score: { PA_AUTONOMY: 3 },
      },
      {
        id: "c10c",
        text: "Quero proximidade, mas posso me sentir sufocado se não tiver espaço.",
        score: { PA_CLOSENESS: 2, PA_AUTONOMY: 2 },
      },
      {
        id: "c10d",
        text: "Tenho facilidade em ficar próximo sem abrir mão da minha independência.",
        score: { PA_AUTONOMY: 2, PA_CLOSENESS: 1 },
      },
    ],
  },
  {
    id: 11,
    text: "Qual dessas situações te deixa mais dividido?",
    answers: [
      {
        id: "c11a",
        text: "Uma escolha segura que limita minhas possibilidades.",
        score: { LS_FREEDOM: 3, LS_SECURITY: 3 },
      },
      {
        id: "c11b",
        text: "Uma escolha livre que traz muita incerteza.",
        score: { LS_FREEDOM: 3, LS_SECURITY: 3 },
      },
      {
        id: "c11c",
        text: "Uma decisão em que tenho pouco controle.",
        score: { CE_CONTROL: 3 },
      },
      {
        id: "c11d",
        text: "Uma decisão em que preciso abrir mão de algo estável.",
        score: { EM_STABILITY: 3, EM_CHANGE: 1 },
      },
    ],
  },
  {
    id: 12,
    text: "Quando algo foge totalmente das suas mãos...",
    answers: [
      {
        id: "c12a",
        text: "Tento encontrar alguma parte que ainda consigo controlar.",
        score: { CE_CONTROL: 3 },
      },
      {
        id: "c12b",
        text: "Fico bastante desconfortável.",
        score: { CE_CONTROL: 3, LS_SECURITY: 1 },
      },
      {
        id: "c12c",
        text: "Tento aceitar que nem tudo depende de mim.",
        score: { CE_SURRENDER: 3 },
      },
      {
        id: "c12d",
        text: "Às vezes sinto alívio por não precisar decidir tudo.",
        score: { CE_SURRENDER: 3 },
      },
    ],
  },
  {
    id: 13,
    text: "Quando você entra em um grupo novo...",
    answers: [
      {
        id: "c13a",
        text: "Quero encontrar um lugar em que me sinta incluído.",
        score: { PI_BELONGING: 3 },
      },
      {
        id: "c13b",
        text: "Quero conseguir continuar sendo eu mesmo.",
        score: { PI_INDIVIDUALITY: 3 },
      },
      {
        id: "c13c",
        text: "Primeiro observo como o grupo funciona.",
        score: { PI_BELONGING: 2, RE_REASON: 1 },
      },
      {
        id: "c13d",
        text: "Posso me adaptar no início e mostrar mais de mim aos poucos.",
        score: { PI_BELONGING: 2, PI_INDIVIDUALITY: 1 },
      },
    ],
  },
  {
    id: 14,
    text: "Quando seu coração e sua cabeça discordam...",
    answers: [
      {
        id: "c14a",
        text: "Normalmente sigo a cabeça.",
        score: { RE_REASON: 3 },
      },
      {
        id: "c14b",
        text: "Normalmente sigo o que sinto.",
        score: { RE_EMOTION: 3 },
      },
      {
        id: "c14c",
        text: "Fico dividido até conseguir justificar emocionalmente e racionalmente.",
        score: { RE_REASON: 3, RE_EMOTION: 3 },
      },
      {
        id: "c14d",
        text: "Depende muito da importância da decisão.",
        score: { RE_REASON: 1, RE_EMOTION: 1 },
      },
    ],
  },
  {
    id: 15,
    text: "Quando algo funciona bem há muito tempo...",
    answers: [
      {
        id: "c15a",
        text: "Prefiro não mexer sem necessidade.",
        score: { EM_STABILITY: 3 },
      },
      {
        id: "c15b",
        text: "Começo a pensar em como poderia ser diferente.",
        score: { EM_CHANGE: 3 },
      },
      {
        id: "c15c",
        text: "Gosto de melhorar aos poucos.",
        score: { EM_STABILITY: 2, EM_CHANGE: 1 },
      },
      {
        id: "c15d",
        text: "Às vezes tenho vontade de começar tudo de novo.",
        score: { EM_CHANGE: 3 },
      },
    ],
  },
  {
    id: 16,
    text: "Quando percebe que está fazendo algo principalmente para agradar...",
    answers: [
      {
        id: "c16a",
        text: "Continuo se aquilo for importante para a relação.",
        score: { RA_RECOGNITION: 3, PI_BELONGING: 1 },
      },
      {
        id: "c16b",
        text: "Isso costuma me incomodar.",
        score: { RA_AUTHENTICITY: 3 },
      },
      {
        id: "c16c",
        text: "Tento encontrar um meio-termo.",
        score: { RA_RECOGNITION: 2, RA_AUTHENTICITY: 2 },
      },
      {
        id: "c16d",
        text: "Tenho vontade de parar e perguntar o que eu realmente quero.",
        score: { RA_AUTHENTICITY: 3 },
      },
    ],
  },
  {
    id: 17,
    text: "Quando você percebe que está colocando todo mundo antes de si...",
    answers: [
      {
        id: "c17a",
        text: "Sinto que é minha responsabilidade.",
        score: { CC_OTHERS: 3 },
      },
      {
        id: "c17b",
        text: "Começo a perceber que preciso me preservar.",
        score: { CC_SELF: 3 },
      },
      {
        id: "c17c",
        text: "Tenho dificuldade de saber onde termina cuidado e começa sobrecarga.",
        score: { CC_OTHERS: 3, CC_SELF: 3 },
      },
      {
        id: "c17d",
        text: "Tento reorganizar meus limites.",
        score: { CC_SELF: 3 },
      },
    ],
  },
  {
    id: 18,
    text: "Quando está passando por uma fase difícil...",
    answers: [
      {
        id: "c18a",
        text: "Preciso continuar fazendo coisas para não parar.",
        score: { AR_ACTION: 3 },
      },
      {
        id: "c18b",
        text: "Tenho vontade de me afastar e ficar quieto.",
        score: { AR_WITHDRAWAL: 3 },
      },
      {
        id: "c18c",
        text: "Oscilo entre querer resolver tudo e desaparecer por algum tempo.",
        score: { AR_ACTION: 3, AR_WITHDRAWAL: 3 },
      },
      {
        id: "c18d",
        text: "Tento criar espaços de ação e descanso.",
        score: { AR_ACTION: 1, AR_WITHDRAWAL: 1 },
      },
    ],
  },
  {
    id: 19,
    text: "Quando começa um projeto novo...",
    answers: [
      {
        id: "c19a",
        text: "Quero entender tudo antes de começar.",
        score: { PE_PERFECTION: 3, CE_CONTROL: 1 },
      },
      {
        id: "c19b",
        text: "Prefiro começar e descobrir durante o caminho.",
        score: { PE_SPONTANEITY: 3 },
      },
      {
        id: "c19c",
        text: "Tenho vontade de começar rápido, mas depois fico corrigindo muito.",
        score: { PE_SPONTANEITY: 2, PE_PERFECTION: 2 },
      },
      {
        id: "c19d",
        text: "Demoro para começar porque quero fazer direito.",
        score: { PE_PERFECTION: 3 },
      },
    ],
  },
  {
    id: 20,
    text: "Quando gosta muito de alguém...",
    answers: [
      {
        id: "c20a",
        text: "Quero estar bastante presente.",
        score: { PA_CLOSENESS: 3 },
      },
      {
        id: "c20b",
        text: "Mesmo gostando, preciso de muito espaço pessoal.",
        score: { PA_AUTONOMY: 3 },
      },
      {
        id: "c20c",
        text: "Às vezes quero proximidade e distância quase ao mesmo tempo.",
        score: { PA_CLOSENESS: 3, PA_AUTONOMY: 3 },
      },
      {
        id: "c20d",
        text: "Tento construir proximidade sem abrir mão da minha individualidade.",
        score: { PA_CLOSENESS: 2, PA_AUTONOMY: 2 },
      },
    ],
  },
  {
    id: 21,
    text: "Qual frase parece mais próxima de uma tensão sua?",
    answers: [
      {
        id: "c21a",
        text: "“Quero liberdade, mas tenho medo de perder meu chão.”",
        score: { LS_FREEDOM: 3, LS_SECURITY: 3 },
      },
      {
        id: "c21b",
        text: "“Quero confiar mais, mas sinto que preciso controlar.”",
        score: { CE_CONTROL: 3, CE_SURRENDER: 3 },
      },
      {
        id: "c21c",
        text: "“Quero pertencer, mas não quero deixar de ser eu.”",
        score: { PI_BELONGING: 3, PI_INDIVIDUALITY: 3 },
      },
      {
        id: "c21d",
        text: "“Quero sentir, mas também preciso entender.”",
        score: { RE_REASON: 3, RE_EMOTION: 3 },
      },
    ],
  },
  {
    id: 22,
    text: "Qual dessas situações parece mais familiar?",
    answers: [
      {
        id: "c22a",
        text: "Querer estabilidade e ao mesmo tempo desejar uma mudança grande.",
        score: { EM_STABILITY: 3, EM_CHANGE: 3 },
      },
      {
        id: "c22b",
        text: "Querer reconhecimento, mas não querer viver para agradar.",
        score: { RA_RECOGNITION: 3, RA_AUTHENTICITY: 3 },
      },
      {
        id: "c22c",
        text: "Querer cuidar das pessoas, mas estar cansado de sempre cuidar.",
        score: { CC_OTHERS: 3, CC_SELF: 3 },
      },
      {
        id: "c22d",
        text: "Querer agir, mas sentir necessidade de parar.",
        score: { AR_ACTION: 3, AR_WITHDRAWAL: 3 },
      },
    ],
  },
  {
    id: 23,
    text: "Quando algo não sai perfeito...",
    answers: [
      {
        id: "c23a",
        text: "Fico bastante incomodado.",
        score: { PE_PERFECTION: 3 },
      },
      {
        id: "c23b",
        text: "Tento aceitar que faz parte.",
        score: { PE_SPONTANEITY: 3 },
      },
      {
        id: "c23c",
        text: "Sei que não precisa estar perfeito, mas mesmo assim me cobro.",
        score: { PE_PERFECTION: 3, PE_SPONTANEITY: 1 },
      },
      {
        id: "c23d",
        text: "Às vezes prefiro nem começar se acho que não vou fazer bem.",
        score: { PE_PERFECTION: 3 },
      },
    ],
  },
  {
    id: 24,
    text: "Quando uma relação começa a ocupar muito espaço na sua vida...",
    answers: [
      {
        id: "c24a",
        text: "Gosto da proximidade.",
        score: { PA_CLOSENESS: 3 },
      },
      {
        id: "c24b",
        text: "Começo a sentir necessidade de recuperar meu espaço.",
        score: { PA_AUTONOMY: 3 },
      },
      {
        id: "c24c",
        text: "Posso sentir medo de perder minha individualidade.",
        score: { PA_AUTONOMY: 3, PI_INDIVIDUALITY: 1 },
      },
      {
        id: "c24d",
        text: "Posso sentir medo de criar distância demais.",
        score: { PA_CLOSENESS: 3, PI_BELONGING: 1 },
      },
    ],
  },
  {
    id: 25,
    text: "Ao imaginar uma vida ideal...",
    answers: [
      {
        id: "c25a",
        text: "Quero ter segurança sem me sentir preso.",
        score: { LS_SECURITY: 3, LS_FREEDOM: 3 },
      },
      {
        id: "c25b",
        text: "Quero ter estrutura sem precisar controlar tudo.",
        score: { CE_CONTROL: 3, CE_SURRENDER: 3 },
      },
      {
        id: "c25c",
        text: "Quero fazer parte sem precisar me adaptar demais.",
        score: { PI_BELONGING: 3, PI_INDIVIDUALITY: 3 },
      },
      {
        id: "c25d",
        text: "Quero conseguir pensar e sentir sem precisar escolher apenas um.",
        score: { RE_REASON: 3, RE_EMOTION: 3 },
      },
    ],
  },
  {
    id: 26,
    text: "Quando pensa em mudar alguma coisa importante na sua vida...",
    answers: [
      {
        id: "c26a",
        text: "Quero sentir segurança antes.",
        score: { EM_STABILITY: 3, LS_SECURITY: 1 },
      },
      {
        id: "c26b",
        text: "Sinto entusiasmo com a possibilidade de recomeçar.",
        score: { EM_CHANGE: 3 },
      },
      {
        id: "c26c",
        text: "Fico dividido entre preservar o que construí e experimentar algo novo.",
        score: { EM_STABILITY: 3, EM_CHANGE: 3 },
      },
      {
        id: "c26d",
        text: "Costumo esperar até a mudança parecer inevitável.",
        score: { EM_STABILITY: 3 },
      },
    ],
  },
  {
    id: 27,
    text: "Quando percebe que as pessoas esperam algo de você...",
    answers: [
      {
        id: "c27a",
        text: "Quero corresponder.",
        score: { RA_RECOGNITION: 3 },
      },
      {
        id: "c27b",
        text: "Quero saber primeiro se aquilo combina comigo.",
        score: { RA_AUTHENTICITY: 3 },
      },
      {
        id: "c27c",
        text: "Posso querer corresponder e ao mesmo tempo sentir vontade de fazer diferente.",
        score: { RA_RECOGNITION: 3, RA_AUTHENTICITY: 3 },
      },
      {
        id: "c27d",
        text: "Tenho dificuldade de separar minha vontade da expectativa dos outros.",
        score: { RA_RECOGNITION: 3, RA_AUTHENTICITY: 2 },
      },
    ],
  },
  {
    id: 28,
    text: "Quando você precisa escolher entre ajudar alguém e cuidar de você...",
    answers: [
      {
        id: "c28a",
        text: "Normalmente escolho ajudar.",
        score: { CC_OTHERS: 3 },
      },
      {
        id: "c28b",
        text: "Tenho aprendido a me escolher também.",
        score: { CC_SELF: 3 },
      },
      {
        id: "c28c",
        text: "Qualquer escolha costuma trazer culpa.",
        score: { CC_OTHERS: 3, CC_SELF: 3 },
      },
      {
        id: "c28d",
        text: "Tento avaliar quem realmente precisa mais naquele momento.",
        score: { CC_OTHERS: 1, CC_SELF: 1 },
      },
    ],
  },
  {
    id: 29,
    text: "Quando você sente que precisa de uma pausa...",
    answers: [
      {
        id: "c29a",
        text: "Paro quando consigo.",
        score: { AR_WITHDRAWAL: 3 },
      },
      {
        id: "c29b",
        text: "Tenho dificuldade porque sempre existe algo para fazer.",
        score: { AR_ACTION: 3 },
      },
      {
        id: "c29c",
        text: "Mesmo descansando, fico pensando no que deveria estar fazendo.",
        score: { AR_ACTION: 3, AR_WITHDRAWAL: 2 },
      },
      {
        id: "c29d",
        text: "Preciso me afastar bastante para realmente descansar.",
        score: { AR_WITHDRAWAL: 3 },
      },
    ],
  },
  {
    id: 30,
    text: "Sem pensar demais, qual dessas tensões parece mais familiar?",
    answers: [
      {
        id: "c30a",
        text: "“Quero fazer direito, mas também queria conseguir simplesmente tentar.”",
        score: { PE_PERFECTION: 3, PE_SPONTANEITY: 3 },
      },
      {
        id: "c30b",
        text: "“Quero estar perto, mas também preciso do meu espaço.”",
        score: { PA_CLOSENESS: 3, PA_AUTONOMY: 3 },
      },
      {
        id: "c30c",
        text: "“Quero cuidar das pessoas, mas também preciso cuidar de mim.”",
        score: { CC_OTHERS: 3, CC_SELF: 3 },
      },
      {
        id: "c30d",
        text: "“Quero agir, mas também sinto que preciso parar.”",
        score: { AR_ACTION: 3, AR_WITHDRAWAL: 3 },
      },
    ],
  },
];

export const TOTAL_INTERNAL_CONFLICT_QUESTIONS =
  internalConflictQuestions.length;
