import type { ShadowQuestion } from "@/types/shadow";

export const shadowQuestions: ShadowQuestion[] = [
  {
    id: 1,
    text: "Quando alguém faz uma tarefa de um jeito diferente do seu, o que costuma acontecer?",
    answers: [
      {
        id: "s1a",
        text: "Fico com vontade de assumir e fazer do meu jeito.",
        score: { CO: 3, PE: 1 },
      },
      {
        id: "s1b",
        text: "Tento entender se o jeito da pessoa também funciona.",
        score: { PR: 1 },
      },
      {
        id: "s1c",
        text: "Deixo a pessoa fazer, mas fico acompanhando de perto.",
        score: { CO: 3 },
      },
      {
        id: "s1d",
        text: "Se der errado, prefiro corrigir depois.",
        score: { EV: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "Quando você está passando por algo difícil...",
    answers: [
      {
        id: "s2a",
        text: "Costumo tentar resolver sozinho.",
        score: { VU: 3, CO: 1 },
      },
      {
        id: "s2b",
        text: "Procuro alguém de confiança.",
        score: { LI: 1 },
      },
      {
        id: "s2c",
        text: "Só conto quando a situação já ficou muito pesada.",
        score: { VU: 3, EV: 1 },
      },
      {
        id: "s2d",
        text: "Evito falar porque não quero preocupar ninguém.",
        score: { VU: 3, AP: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "Quando alguém não gosta de uma decisão sua...",
    answers: [
      {
        id: "s3a",
        text: "Fico pensando bastante se deveria mudar de ideia.",
        score: { AP: 3 },
      },
      {
        id: "s3b",
        text: "Tento explicar até a pessoa entender.",
        score: { AP: 1, CO: 1 },
      },
      {
        id: "s3c",
        text: "Consigo aceitar que ela pense diferente.",
        score: { LI: 1 },
      },
      {
        id: "s3d",
        text: "Evito o assunto para não gerar conflito.",
        score: { EV: 3, AP: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "Quando alguém te irrita muito, você costuma...",
    answers: [
      {
        id: "s4a",
        text: "Dizer diretamente o que está incomodando.",
        score: { LI: 1 },
      },
      {
        id: "s4b",
        text: "Guardar para evitar uma discussão.",
        score: { RA: 3, EV: 1 },
      },
      {
        id: "s4c",
        text: "Me afastar da pessoa.",
        score: { EV: 3, RA: 1 },
      },
      {
        id: "s4d",
        text: "Ficar mais irônico ou frio.",
        score: { RA: 3, PR: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "Quando alguém próximo conquista algo que você também deseja...",
    answers: [
      {
        id: "s5a",
        text: "Fico feliz, mas também me comparo.",
        score: { CI: 3 },
      },
      {
        id: "s5b",
        text: "Tento usar aquilo como inspiração.",
        score: { RE: 1 },
      },
      {
        id: "s5c",
        text: "Às vezes começo a procurar defeitos naquela conquista.",
        score: { CI: 3, PR: 1 },
      },
      {
        id: "s5d",
        text: "Penso no que ainda preciso fazer para chegar lá.",
        score: { RE: 3, PE: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "Quando alguém te pede ajuda e você já está cansado...",
    answers: [
      {
        id: "s6a",
        text: "Ajudo mesmo assim.",
        score: { LI: 3, AP: 1 },
      },
      {
        id: "s6b",
        text: "Digo que não consigo naquele momento.",
        score: { LI: 1 },
      },
      {
        id: "s6c",
        text: "Ajudo e depois fico irritado comigo mesmo.",
        score: { LI: 3, RA: 1 },
      },
      {
        id: "s6d",
        text: "Tento encontrar uma forma de ajudar sem me sobrecarregar.",
        score: { LI: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "Quando você comete um erro...",
    answers: [
      {
        id: "s7a",
        text: "Fico pensando nele por muito tempo.",
        score: { PE: 3 },
      },
      {
        id: "s7b",
        text: "Tento corrigir e seguir em frente.",
        score: { PE: 1 },
      },
      {
        id: "s7c",
        text: "Sinto vergonha de outras pessoas perceberem.",
        score: { PE: 3, AP: 1 },
      },
      {
        id: "s7d",
        text: "Às vezes evito olhar para o problema.",
        score: { EV: 3 },
      },
    ],
  },
  {
    id: 8,
    text: "Quando você se esforça muito e ninguém percebe...",
    answers: [
      {
        id: "s8a",
        text: "Fico frustrado.",
        score: { RE: 3 },
      },
      {
        id: "s8b",
        text: "Tento não ligar, mas me incomoda.",
        score: { RE: 3, AP: 1 },
      },
      {
        id: "s8c",
        text: "Sinto vontade de mostrar o quanto fiz.",
        score: { RE: 3 },
      },
      {
        id: "s8d",
        text: "Consigo ficar satisfeito mesmo sem reconhecimento externo.",
        score: { AP: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "Quando uma conversa pode gerar conflito...",
    answers: [
      {
        id: "s9a",
        text: "Prefiro resolver logo.",
        score: { LI: 1 },
      },
      {
        id: "s9b",
        text: "Adio até não ser mais possível.",
        score: { EV: 3 },
      },
      {
        id: "s9c",
        text: "Tento deixar o clima mais leve e mudar de assunto.",
        score: { EV: 3, AP: 1 },
      },
      {
        id: "s9d",
        text: "Penso muito no que vou dizer antes de conversar.",
        score: { AP: 1, PE: 1 },
      },
    ],
  },
  {
    id: 10,
    text: "Qual tipo de pessoa mais te irrita?",
    answers: [
      {
        id: "s10a",
        text: "Quem quer controlar tudo.",
        score: { PR: 3, CO: 1 },
      },
      {
        id: "s10b",
        text: "Quem precisa de atenção o tempo todo.",
        score: { PR: 3, RE: 1 },
      },
      {
        id: "s10c",
        text: "Quem se acha melhor que os outros.",
        score: { PR: 3, CI: 1 },
      },
      {
        id: "s10d",
        text: "Quem nunca assume responsabilidade.",
        score: { PR: 3, CO: 1 },
      },
    ],
  },
  {
    id: 11,
    text: "Quando você precisa pedir ajuda...",
    answers: [
      {
        id: "s11a",
        text: "Peço quando percebo que realmente preciso.",
        score: { VU: 1 },
      },
      {
        id: "s11b",
        text: "Tento tudo sozinho antes.",
        score: { VU: 3 },
      },
      {
        id: "s11c",
        text: "Sinto certo desconforto em depender de alguém.",
        score: { VU: 3 },
      },
      {
        id: "s11d",
        text: "Prefiro evitar pedir.",
        score: { VU: 3, EV: 1 },
      },
    ],
  },
  {
    id: 12,
    text: "Quando alguém te critica...",
    answers: [
      {
        id: "s12a",
        text: "Tento entender se existe algo verdadeiro na crítica.",
        score: { PR: 1 },
      },
      {
        id: "s12b",
        text: "Fico me defendendo mentalmente.",
        score: { PR: 3 },
      },
      {
        id: "s12c",
        text: "Aquilo fica na minha cabeça durante muito tempo.",
        score: { AP: 3, PE: 1 },
      },
      {
        id: "s12d",
        text: "Tenho vontade de mostrar que a pessoa está errada.",
        score: { RE: 3, PR: 1 },
      },
    ],
  },
  {
    id: 13,
    text: "Quando você percebe que está com raiva...",
    answers: [
      {
        id: "s13a",
        text: "Consigo reconhecer e falar sobre isso.",
        score: { RA: 1 },
      },
      {
        id: "s13b",
        text: "Tento me acalmar e deixar passar.",
        score: { RA: 3 },
      },
      {
        id: "s13c",
        text: "Digo que está tudo bem, mesmo quando não está.",
        score: { RA: 3, AP: 1 },
      },
      {
        id: "s13d",
        text: "Me afasto até a irritação diminuir.",
        score: { EV: 3, RA: 1 },
      },
    ],
  },
  {
    id: 14,
    text: "Quando alguém diz “não” para você...",
    answers: [
      {
        id: "s14a",
        text: "Aceito, mesmo que não goste.",
        score: { LI: 1 },
      },
      {
        id: "s14b",
        text: "Tento entender o motivo.",
        score: { CO: 1 },
      },
      {
        id: "s14c",
        text: "Posso sentir que a pessoa não se importa comigo.",
        score: { AP: 3 },
      },
      {
        id: "s14d",
        text: "Fico incomodado quando acho que ela poderia ter feito um esforço.",
        score: { RE: 3, LI: 1 },
      },
    ],
  },
  {
    id: 15,
    text: "Quando algo foge completamente do planejado...",
    answers: [
      {
        id: "s15a",
        text: "Fico bastante ansioso.",
        score: { CO: 3 },
      },
      {
        id: "s15b",
        text: "Começo rapidamente a reorganizar tudo.",
        score: { CO: 3, PE: 1 },
      },
      {
        id: "s15c",
        text: "Tento me adaptar à situação.",
        score: { CO: 1 },
      },
      {
        id: "s15d",
        text: "Fico irritado com quem causou o problema.",
        score: { CO: 3, PR: 1 },
      },
    ],
  },
  {
    id: 16,
    text: "Quando você não sabe fazer alguma coisa...",
    answers: [
      {
        id: "s16a",
        text: "Pesquiso até aprender.",
        score: { PE: 1 },
      },
      {
        id: "s16b",
        text: "Tenho dificuldade de admitir que não sei.",
        score: { VU: 3, RE: 1 },
      },
      {
        id: "s16c",
        text: "Tento descobrir sozinho antes de perguntar.",
        score: { VU: 3 },
      },
      {
        id: "s16d",
        text: "Pergunto sem grandes problemas.",
        score: { VU: 1 },
      },
    ],
  },
  {
    id: 17,
    text: "Quando alguém recebe mais atenção que você em uma situação em que também participou...",
    answers: [
      {
        id: "s17a",
        text: "Não me incomoda muito.",
        score: { RE: 1 },
      },
      {
        id: "s17b",
        text: "Fico um pouco frustrado.",
        score: { RE: 3 },
      },
      {
        id: "s17c",
        text: "Começo a comparar o que cada um fez.",
        score: { CI: 3, RE: 1 },
      },
      {
        id: "s17d",
        text: "Penso que talvez meu trabalho não tenha sido bom o suficiente.",
        score: { PE: 3, RE: 1 },
      },
    ],
  },
  {
    id: 18,
    text: "Quando você diz “sim” querendo dizer “não”...",
    answers: [
      {
        id: "s18a",
        text: "Normalmente é para não decepcionar alguém.",
        score: { AP: 3, LI: 1 },
      },
      {
        id: "s18b",
        text: "Tenho medo de parecer egoísta.",
        score: { LI: 3, AP: 1 },
      },
      {
        id: "s18c",
        text: "Penso que será mais fácil fazer do que explicar.",
        score: { EV: 3, LI: 1 },
      },
      {
        id: "s18d",
        text: "Depois fico ressentido.",
        score: { RA: 3, LI: 1 },
      },
    ],
  },
  {
    id: 19,
    text: "Quando percebe uma característica sua que não gosta...",
    answers: [
      {
        id: "s19a",
        text: "Tento trabalhar nela.",
        score: { PR: 1 },
      },
      {
        id: "s19b",
        text: "Tenho dificuldade de aceitar que sou assim.",
        score: { PR: 3 },
      },
      {
        id: "s19c",
        text: "Tento compensar sendo o oposto.",
        score: { PR: 3, PE: 1 },
      },
      {
        id: "s19d",
        text: "Evito pensar muito nisso.",
        score: { EV: 3, PR: 1 },
      },
    ],
  },
  {
    id: 20,
    text: "Quando você procrastina algo importante, geralmente...",
    answers: [
      {
        id: "s20a",
        text: "A tarefa parece grande demais.",
        score: { EV: 3 },
      },
      {
        id: "s20b",
        text: "Tenho medo de não fazer bem.",
        score: { PE: 3, EV: 1 },
      },
      {
        id: "s20c",
        text: "Espero estar no momento certo.",
        score: { PE: 3 },
      },
      {
        id: "s20d",
        text: "Acabo encontrando outras coisas para fazer.",
        score: { EV: 3 },
      },
    ],
  },
  {
    id: 21,
    text: "Quando alguém discorda fortemente de você...",
    answers: [
      {
        id: "s21a",
        text: "Tento entender o ponto de vista da pessoa.",
        score: { PR: 1 },
      },
      {
        id: "s21b",
        text: "Sinto vontade de convencer a pessoa.",
        score: { CO: 3 },
      },
      {
        id: "s21c",
        text: "Posso interpretar como uma crítica pessoal.",
        score: { AP: 3 },
      },
      {
        id: "s21d",
        text: "Prefiro encerrar a conversa.",
        score: { EV: 3 },
      },
    ],
  },
  {
    id: 22,
    text: "Quando você sente inveja de alguém...",
    answers: [
      {
        id: "s22a",
        text: "Consigo reconhecer isso em mim.",
        score: { CI: 1 },
      },
      {
        id: "s22b",
        text: "Tento entender o que aquela pessoa tem que eu gostaria de ter.",
        score: { CI: 3 },
      },
      {
        id: "s22c",
        text: "Tenho dificuldade de admitir que é inveja.",
        score: { CI: 3, PR: 1 },
      },
      {
        id: "s22d",
        text: "Posso começar a diminuir mentalmente aquilo que a pessoa conquistou.",
        score: { CI: 3, PR: 1 },
      },
    ],
  },
  {
    id: 23,
    text: "Quando você está emocionalmente machucado...",
    answers: [
      {
        id: "s23a",
        text: "Falo sobre isso com alguém.",
        score: { VU: 1 },
      },
      {
        id: "s23b",
        text: "Fico mais quieto.",
        score: { VU: 3 },
      },
      {
        id: "s23c",
        text: "Tento agir como se nada tivesse acontecido.",
        score: { VU: 3, EV: 1 },
      },
      {
        id: "s23d",
        text: "Posso ficar mais irritado com outras coisas.",
        score: { RA: 3, PR: 1 },
      },
    ],
  },
  {
    id: 24,
    text: "Quando sente que perdeu o controle de uma situação...",
    answers: [
      {
        id: "s24a",
        text: "Tento recuperar rapidamente a organização.",
        score: { CO: 3 },
      },
      {
        id: "s24b",
        text: "Fico ansioso tentando prever o que pode acontecer.",
        score: { CO: 3 },
      },
      {
        id: "s24c",
        text: "Procuro alguém para dividir a responsabilidade.",
        score: { VU: 1 },
      },
      {
        id: "s24d",
        text: "Tenho dificuldade de pensar em outra coisa.",
        score: { CO: 3, PE: 1 },
      },
    ],
  },
  {
    id: 25,
    text: "Quando recebe um elogio...",
    answers: [
      {
        id: "s25a",
        text: "Aceito e agradeço.",
        score: { RE: 1 },
      },
      {
        id: "s25b",
        text: "Costumo diminuir o que fiz.",
        score: { AP: 3, VU: 1 },
      },
      {
        id: "s25c",
        text: "Fico feliz por ter sido reconhecido.",
        score: { RE: 3 },
      },
      {
        id: "s25d",
        text: "Às vezes penso que a pessoa está exagerando.",
        score: { PE: 3, AP: 1 },
      },
    ],
  },
  {
    id: 26,
    text: "Quando alguém demonstra muita segurança...",
    answers: [
      {
        id: "s26a",
        text: "Admiro.",
        score: { CI: 1 },
      },
      {
        id: "s26b",
        text: "Às vezes me comparo.",
        score: { CI: 3 },
      },
      {
        id: "s26c",
        text: "Posso achar que a pessoa é arrogante.",
        score: { PR: 3, CI: 1 },
      },
      {
        id: "s26d",
        text: "Penso no que me falta para me sentir assim.",
        score: { CI: 3, PE: 1 },
      },
    ],
  },
  {
    id: 27,
    text: "Quando você está sobrecarregado...",
    answers: [
      {
        id: "s27a",
        text: "Peço ajuda.",
        score: { VU: 1 },
      },
      {
        id: "s27b",
        text: "Continuo assumindo coisas até não conseguir mais.",
        score: { LI: 3, PE: 1 },
      },
      {
        id: "s27c",
        text: "Fico irritado porque sinto que ninguém percebe.",
        score: { RE: 3, RA: 1 },
      },
      {
        id: "s27d",
        text: "Me afasto das pessoas.",
        score: { EV: 3 },
      },
    ],
  },
  {
    id: 28,
    text: "Quando alguém aponta algo em você que não gostaria de admitir...",
    answers: [
      {
        id: "s28a",
        text: "Tento refletir sobre aquilo.",
        score: { PR: 1 },
      },
      {
        id: "s28b",
        text: "Minha primeira reação é me defender.",
        score: { PR: 3 },
      },
      {
        id: "s28c",
        text: "Fico incomodado por bastante tempo.",
        score: { PR: 3, AP: 1 },
      },
      {
        id: "s28d",
        text: "Procuro defeitos na pessoa também.",
        score: { PR: 3, CI: 1 },
      },
    ],
  },
  {
    id: 29,
    text: "Quando precisa tomar uma decisão importante...",
    answers: [
      {
        id: "s29a",
        text: "Penso muito em como os outros vão reagir.",
        score: { AP: 3 },
      },
      {
        id: "s29b",
        text: "Quero ter certeza de que estou escolhendo certo.",
        score: { PE: 3, CO: 1 },
      },
      {
        id: "s29c",
        text: "Tenho dificuldade de decidir quando não consigo prever as consequências.",
        score: { CO: 3 },
      },
      {
        id: "s29d",
        text: "Às vezes adio porque nenhuma opção parece segura.",
        score: { EV: 3, PE: 1 },
      },
    ],
  },
  {
    id: 30,
    text: "Qual destas frases parece mais difícil de admitir?",
    answers: [
      {
        id: "s30a",
        text: "“Eu gosto de ter controle.”",
        score: { CO: 3 },
      },
      {
        id: "s30b",
        text: "“Eu quero ser reconhecido.”",
        score: { RE: 3 },
      },
      {
        id: "s30c",
        text: "“Às vezes sinto inveja.”",
        score: { CI: 3 },
      },
      {
        id: "s30d",
        text: "“Eu tenho medo de parecer fraco.”",
        score: { VU: 3 },
      },
    ],
  },
];

export const TOTAL_SHADOW_QUESTIONS = shadowQuestions.length;
