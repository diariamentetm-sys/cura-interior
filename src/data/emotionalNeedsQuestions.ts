import type { EmotionalNeedQuestion } from "@/types/emotionalNeeds";

export const emotionalNeedsQuestions: EmotionalNeedQuestion[] = [
  {
    id: 1,
    text: "Quando algo importante está indefinido, o que mais te ajudaria?",
    answers: [
      {
        id: "n1a",
        text: "Saber que existe alguém em quem posso confiar.",
        score: { SE: 3, AC: 1 },
      },
      {
        id: "n1b",
        text: "Ter mais informações sobre o que vai acontecer.",
        score: { CT: 3, SE: 1 },
      },
      {
        id: "n1c",
        text: "Poder decidir sozinho o que fazer.",
        score: { AU: 3, LI: 1 },
      },
      {
        id: "n1d",
        text: "Sentir que, de algum modo, aquilo ainda faz sentido.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 2,
    text: "Depois de uma semana muito difícil, o que mais tende a fazer falta?",
    answers: [
      {
        id: "n2a",
        text: "Descansar sem precisar explicar nada.",
        score: { AC: 3 },
      },
      {
        id: "n2b",
        text: "Estar perto de alguém com quem posso ser totalmente eu.",
        score: { CO: 3 },
      },
      {
        id: "n2c",
        text: "Sentir que consegui dar conta do que precisava.",
        score: { RE: 3, CT: 1 },
      },
      {
        id: "n2d",
        text: "Ter algum tempo só para mim.",
        score: { AU: 3, LI: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "Quando você recebe uma crítica, o que mais ajuda a recuperar seu equilíbrio?",
    answers: [
      {
        id: "n3a",
        text: "Entender exatamente o que aconteceu.",
        score: { CT: 3 },
      },
      {
        id: "n3b",
        text: "Saber que aquilo não muda o valor que as pessoas importantes enxergam em mim.",
        score: { RE: 3, CO: 1 },
      },
      {
        id: "n3c",
        text: "Ter liberdade para decidir o que fazer com aquela crítica.",
        score: { AU: 3 },
      },
      {
        id: "n3d",
        text: "Conversar com alguém que realmente me compreenda.",
        score: { AC: 3, CO: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "Em um relacionamento importante, o que mais te faria sentir falta de algo essencial?",
    answers: [
      {
        id: "n4a",
        text: "Não conseguir conversar profundamente.",
        score: { CO: 3 },
      },
      {
        id: "n4b",
        text: "Sentir que minhas escolhas estão sendo controladas.",
        score: { AU: 3, LI: 1 },
      },
      {
        id: "n4c",
        text: "Não saber se posso contar com a pessoa.",
        score: { SE: 3 },
      },
      {
        id: "n4d",
        text: "Sentir que não sou valorizado pelo que ofereço.",
        score: { RE: 3 },
      },
    ],
  },
  {
    id: 5,
    text: "Qual dessas situações mais traz sensação de tranquilidade?",
    answers: [
      {
        id: "n5a",
        text: "Saber o que esperar dos próximos dias.",
        score: { ES: 3, SE: 1 },
      },
      {
        id: "n5b",
        text: "Ter pessoas próximas em quem confio.",
        score: { SE: 3, CO: 1 },
      },
      {
        id: "n5c",
        text: "Ter liberdade para mudar de planos.",
        score: { LI: 3 },
      },
      {
        id: "n5d",
        text: "Sentir que estou no caminho certo para mim.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 6,
    text: "Quando você conquista algo importante...",
    answers: [
      {
        id: "n6a",
        text: "Gosto de sentir que outras pessoas perceberam meu esforço.",
        score: { RE: 3 },
      },
      {
        id: "n6b",
        text: "Gosto de compartilhar com pessoas que fazem parte da minha vida.",
        score: { CO: 3, PE: 1 },
      },
      {
        id: "n6c",
        text: "O mais importante é saber que escolhi aquele caminho por mim mesmo.",
        score: { AU: 3 },
      },
      {
        id: "n6d",
        text: "Fico especialmente feliz quando aquilo representa algo maior para mim.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 7,
    text: "Quando você chega a um lugar onde não conhece ninguém...",
    answers: [
      {
        id: "n7a",
        text: "Procuro alguém com quem eu possa me conectar.",
        score: { PE: 3, CO: 1 },
      },
      {
        id: "n7b",
        text: "Gosto de observar primeiro para entender como aquele ambiente funciona.",
        score: { SE: 3, CT: 1 },
      },
      {
        id: "n7c",
        text: "Não me incomodo em ficar mais independente.",
        score: { AU: 3 },
      },
      {
        id: "n7d",
        text: "Quero sentir que posso agir naturalmente.",
        score: { LI: 3 },
      },
    ],
  },
  {
    id: 8,
    text: "Quando você está confuso sobre uma decisão...",
    answers: [
      {
        id: "n8a",
        text: "Preciso de tempo e espaço para ouvir a mim mesmo.",
        score: { AU: 3, SI: 1 },
      },
      {
        id: "n8b",
        text: "Quero conversar com alguém que me conheça bem.",
        score: { CO: 3, AC: 1 },
      },
      {
        id: "n8c",
        text: "Tento organizar as opções até enxergar um caminho seguro.",
        score: { CT: 3, SE: 1 },
      },
      {
        id: "n8d",
        text: "Penso no que me deixará mais livre no futuro.",
        score: { LI: 3 },
      },
    ],
  },
  {
    id: 9,
    text: "O que mais costuma incomodar em uma mudança inesperada?",
    answers: [
      {
        id: "n9a",
        text: "Não saber o que vai acontecer.",
        score: { SE: 3 },
      },
      {
        id: "n9b",
        text: "Perder uma rotina que funcionava bem.",
        score: { ES: 3 },
      },
      {
        id: "n9c",
        text: "Sentir que não tive escolha.",
        score: { AU: 3 },
      },
      {
        id: "n9d",
        text: "Ter que reorganizar tudo rapidamente.",
        score: { CT: 3 },
      },
    ],
  },
  {
    id: 10,
    text: "Quando você está emocionalmente cansado...",
    answers: [
      {
        id: "n10a",
        text: "Preciso de alguém que me escute sem tentar resolver tudo.",
        score: { AC: 3, CO: 1 },
      },
      {
        id: "n10b",
        text: "Preciso ficar sozinho por um tempo.",
        score: { AU: 3, LI: 1 },
      },
      {
        id: "n10c",
        text: "Preciso recuperar minha rotina.",
        score: { ES: 3 },
      },
      {
        id: "n10d",
        text: "Preciso entender por que estou me sentindo daquele jeito.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 11,
    text: "Qual sensação costuma ser mais gratificante?",
    answers: [
      {
        id: "n11a",
        text: "Ser reconhecido por algo que fiz bem.",
        score: { RE: 3 },
      },
      {
        id: "n11b",
        text: "Sentir que realmente pertenço a algum lugar.",
        score: { PE: 3 },
      },
      {
        id: "n11c",
        text: "Ter liberdade para escolher meu próprio caminho.",
        score: { LI: 3, AU: 1 },
      },
      {
        id: "n11d",
        text: "Ter alguém com quem posso falar sobre qualquer coisa.",
        score: { CO: 3 },
      },
    ],
  },
  {
    id: 12,
    text: "Quando alguém tenta decidir algo importante por você...",
    answers: [
      {
        id: "n12a",
        text: "Fico bastante incomodado.",
        score: { AU: 3 },
      },
      {
        id: "n12b",
        text: "Quero entender por que a pessoa acha que sabe o que é melhor.",
        score: { CT: 3 },
      },
      {
        id: "n12c",
        text: "Tenho vontade de me afastar.",
        score: { LI: 3 },
      },
      {
        id: "n12d",
        text: "O que mais me incomoda é sentir que minha opinião não foi considerada.",
        score: { RE: 3 },
      },
    ],
  },
  {
    id: 13,
    text: "Em uma amizade, o que mais pesa para você?",
    answers: [
      {
        id: "n13a",
        text: "Saber que a pessoa estará presente quando eu precisar.",
        score: { SE: 3 },
      },
      {
        id: "n13b",
        text: "Poder falar sobre coisas que não falaria com qualquer pessoa.",
        score: { CO: 3 },
      },
      {
        id: "n13c",
        text: "Sentir que posso ser eu mesmo sem medo de julgamento.",
        score: { AC: 3 },
      },
      {
        id: "n13d",
        text: "Sentir que fazemos parte da vida um do outro.",
        score: { PE: 3 },
      },
    ],
  },
  {
    id: 14,
    text: "Quando você pensa no futuro, qual cenário traz mais conforto?",
    answers: [
      {
        id: "n14a",
        text: "Uma vida estável e previsível.",
        score: { ES: 3, SE: 1 },
      },
      {
        id: "n14b",
        text: "Uma vida cheia de possibilidades e escolhas.",
        score: { LI: 3, AU: 1 },
      },
      {
        id: "n14c",
        text: "Uma vida cercada por pessoas importantes.",
        score: { PE: 3, CO: 1 },
      },
      {
        id: "n14d",
        text: "Uma vida que tenha significado para mim.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 15,
    text: "Quando você faz muito por alguém e isso não é percebido...",
    answers: [
      {
        id: "n15a",
        text: "Fico bastante frustrado.",
        score: { RE: 3 },
      },
      {
        id: "n15b",
        text: "Começo a questionar se aquele vínculo é recíproco.",
        score: { CO: 3 },
      },
      {
        id: "n15c",
        text: "Penso que talvez eu esteja dando mais do que gostaria.",
        score: { AU: 3 },
      },
      {
        id: "n15d",
        text: "Fico pensando se ainda faz sentido continuar fazendo aquilo.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 16,
    text: "Quando a rotina muda demais...",
    answers: [
      {
        id: "n16a",
        text: "Tenho dificuldade para me sentir centrado.",
        score: { ES: 3 },
      },
      {
        id: "n16b",
        text: "Tento criar rapidamente uma nova organização.",
        score: { CT: 3 },
      },
      {
        id: "n16c",
        text: "Às vezes gosto porque sinto que estou mais livre.",
        score: { LI: 3 },
      },
      {
        id: "n16d",
        text: "O que mais importa é sentir que continuo tendo apoio.",
        score: { SE: 3 },
      },
    ],
  },
  {
    id: 17,
    text: "Quando você está em um grupo...",
    answers: [
      {
        id: "n17a",
        text: "Gosto de sentir que minha presença é valorizada.",
        score: { RE: 3, PE: 1 },
      },
      {
        id: "n17b",
        text: "Gosto de sentir que faço parte naturalmente.",
        score: { PE: 3 },
      },
      {
        id: "n17c",
        text: "Prefiro poder manter minha individualidade.",
        score: { AU: 3 },
      },
      {
        id: "n17d",
        text: "Gosto quando consigo criar uma conexão verdadeira com algumas pessoas.",
        score: { CO: 3 },
      },
    ],
  },
  {
    id: 18,
    text: "Quando tudo parece fora do lugar...",
    answers: [
      {
        id: "n18a",
        text: "Começo a organizar o que consigo.",
        score: { CT: 3 },
      },
      {
        id: "n18b",
        text: "Procuro algo familiar para recuperar a sensação de estabilidade.",
        score: { ES: 3 },
      },
      {
        id: "n18c",
        text: "Procuro alguém que me ajude a sentir que não estou sozinho.",
        score: { SE: 3, AC: 1 },
      },
      {
        id: "n18d",
        text: "Preciso compreender o que aquela fase está tentando me mostrar.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 19,
    text: "Qual situação seria mais difícil para você?",
    answers: [
      {
        id: "n19a",
        text: "Sentir que ninguém percebe seu esforço.",
        score: { RE: 3 },
      },
      {
        id: "n19b",
        text: "Sentir que não tem ninguém realmente próximo.",
        score: { CO: 3 },
      },
      {
        id: "n19c",
        text: "Sentir que não pertence a lugar nenhum.",
        score: { PE: 3 },
      },
      {
        id: "n19d",
        text: "Sentir que sua vida está sendo decidida por outras pessoas.",
        score: { AU: 3 },
      },
    ],
  },
  {
    id: 20,
    text: "Quando você imagina um dia realmente bom...",
    answers: [
      {
        id: "n20a",
        text: "As coisas acontecem de maneira tranquila e previsível.",
        score: { ES: 3 },
      },
      {
        id: "n20b",
        text: "Tenho tempo para fazer o que quiser.",
        score: { LI: 3 },
      },
      {
        id: "n20c",
        text: "Estou perto de pessoas que amo.",
        score: { CO: 3, PE: 1 },
      },
      {
        id: "n20d",
        text: "Sinto que fiz algo importante ou significativo.",
        score: { SI: 3, RE: 1 },
      },
    ],
  },
  {
    id: 21,
    text: "Quando você está com medo...",
    answers: [
      {
        id: "n21a",
        text: "Quero saber exatamente quais são as minhas opções.",
        score: { CT: 3 },
      },
      {
        id: "n21b",
        text: "Quero saber que alguém estará comigo.",
        score: { SE: 3, AC: 1 },
      },
      {
        id: "n21c",
        text: "Quero ter espaço para tomar minha própria decisão.",
        score: { AU: 3 },
      },
      {
        id: "n21d",
        text: "Quero entender o que aquele medo está dizendo sobre mim.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 22,
    text: "Quando alguém te elogia...",
    answers: [
      {
        id: "n22a",
        text: "Isso me faz sentir visto.",
        score: { RE: 3 },
      },
      {
        id: "n22b",
        text: "Fico feliz, mas não dependo muito disso.",
        score: { AU: 3 },
      },
      {
        id: "n22c",
        text: "Gosto especialmente quando vem de alguém com quem tenho vínculo.",
        score: { CO: 3 },
      },
      {
        id: "n22d",
        text: "Fico feliz quando percebo que estou contribuindo para algo maior.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 23,
    text: "Quando uma relação fica distante...",
    answers: [
      {
        id: "n23a",
        text: "Sinto falta principalmente da intimidade.",
        score: { CO: 3 },
      },
      {
        id: "n23b",
        text: "Sinto falta de saber que aquela pessoa faz parte da minha vida.",
        score: { PE: 3 },
      },
      {
        id: "n23c",
        text: "Fico inseguro sobre o que aconteceu.",
        score: { SE: 3 },
      },
      {
        id: "n23d",
        text: "Tento entender se ainda faz sentido manter aquele vínculo.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 24,
    text: "Quando você está sobrecarregado...",
    answers: [
      {
        id: "n24a",
        text: "Preciso que alguém cuide um pouco de mim também.",
        score: { AC: 3 },
      },
      {
        id: "n24b",
        text: "Preciso reorganizar tudo.",
        score: { CT: 3 },
      },
      {
        id: "n24c",
        text: "Preciso recuperar espaço para mim.",
        score: { AU: 3, LI: 1 },
      },
      {
        id: "n24d",
        text: "Preciso voltar para uma rotina que me dê estabilidade.",
        score: { ES: 3 },
      },
    ],
  },
  {
    id: 25,
    text: "Qual destas frases parece mais importante para você?",
    answers: [
      {
        id: "n25a",
        text: "“Quero saber que tenho onde me apoiar.”",
        score: { SE: 3 },
      },
      {
        id: "n25b",
        text: "“Quero sentir que aquilo que faço importa.”",
        score: { RE: 3, SI: 1 },
      },
      {
        id: "n25c",
        text: "“Quero escolher minha própria direção.”",
        score: { AU: 3 },
      },
      {
        id: "n25d",
        text: "“Quero sentir que faço parte.”",
        score: { PE: 3 },
      },
    ],
  },
  {
    id: 26,
    text: "Quando você se sente muito bem com alguém...",
    answers: [
      {
        id: "n26a",
        text: "Sinto que posso baixar a guarda.",
        score: { AC: 3 },
      },
      {
        id: "n26b",
        text: "Sinto que sou realmente compreendido.",
        score: { CO: 3 },
      },
      {
        id: "n26c",
        text: "Sinto que aquela pessoa me valoriza.",
        score: { RE: 3 },
      },
      {
        id: "n26d",
        text: "Sinto que posso continuar sendo independente mesmo estando perto.",
        score: { AU: 3 },
      },
    ],
  },
  {
    id: 27,
    text: "Qual dessas perdas te pareceria mais difícil?",
    answers: [
      {
        id: "n27a",
        text: "Perder a sensação de segurança.",
        score: { SE: 3 },
      },
      {
        id: "n27b",
        text: "Perder liberdade de escolha.",
        score: { LI: 3 },
      },
      {
        id: "n27c",
        text: "Perder um vínculo emocional muito importante.",
        score: { CO: 3 },
      },
      {
        id: "n27d",
        text: "Perder aquilo que dá sentido à sua vida.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 28,
    text: "Quando você começa algo novo...",
    answers: [
      {
        id: "n28a",
        text: "Quero saber que existe algum tipo de estabilidade por trás.",
        score: { ES: 3, SE: 1 },
      },
      {
        id: "n28b",
        text: "Fico animado principalmente pelas possibilidades.",
        score: { LI: 3 },
      },
      {
        id: "n28c",
        text: "Gosto de saber que outras pessoas estão vivendo aquilo comigo.",
        score: { PE: 3 },
      },
      {
        id: "n28d",
        text: "Quero entender como aquilo se conecta ao que quero para minha vida.",
        score: { SI: 3 },
      },
    ],
  },
  {
    id: 29,
    text: "Quando você pensa em uma casa ideal...",
    answers: [
      {
        id: "n29a",
        text: "É um lugar onde me sinto protegido.",
        score: { SE: 3 },
      },
      {
        id: "n29b",
        text: "É um lugar onde posso descansar e ser cuidado.",
        score: { AC: 3 },
      },
      {
        id: "n29c",
        text: "É um lugar estável, organizado e previsível.",
        score: { ES: 3, CT: 1 },
      },
      {
        id: "n29d",
        text: "É um lugar onde posso ser totalmente eu.",
        score: { AU: 3, LI: 1 },
      },
    ],
  },
  {
    id: 30,
    text: "Sem pensar demais, qual dessas frases fala mais com você?",
    answers: [
      {
        id: "n30a",
        text: "“Quero sentir que estou seguro.”",
        score: { SE: 3 },
      },
      {
        id: "n30b",
        text: "“Quero sentir que sou importante.”",
        score: { RE: 3 },
      },
      {
        id: "n30c",
        text: "“Quero sentir que pertenço.”",
        score: { PE: 3 },
      },
      {
        id: "n30d",
        text: "“Quero sentir que minha vida faz sentido.”",
        score: { SI: 3 },
      },
    ],
  },
];

export const TOTAL_EMOTIONAL_NEEDS_QUESTIONS = emotionalNeedsQuestions.length;
