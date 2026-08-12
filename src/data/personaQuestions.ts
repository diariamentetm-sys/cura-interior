import type { PersonaQuestion } from "@/types/persona";

export const personaQuestions: PersonaQuestion[] = [
  {
    id: 1,
    text: "Quando alguém pergunta como você está em um dia realmente difícil...",
    answers: [
      { id: "p1a", text: "Costumo dizer que estou bem.", score: { CO: 3, FO: 1 } },
      { id: "p1b", text: "Conto apenas para pessoas muito próximas.", score: { FO: 3 } },
      { id: "p1c", text: "Consigo dizer que não estou bem.", score: { AU: 3 } },
      { id: "p1d", text: "Tento mudar o assunto.", score: { CO: 3, AD: 1 } },
    ],
  },
  {
    id: 2,
    text: "Quando surge um problema em um grupo...",
    answers: [
      { id: "p2a", text: "Minha tendência é tentar resolver.", score: { PE: 3, PR: 1 } },
      { id: "p2b", text: "Espero para entender qual é meu papel.", score: { AD: 3 } },
      {
        id: "p2c",
        text: "Tento garantir que ninguém fique desconfortável.",
        score: { AG: 3, PR: 1 },
      },
      {
        id: "p2d",
        text: "Digo o que realmente penso sobre a situação.",
        score: { AU: 3 },
      },
    ],
  },
  {
    id: 3,
    text: "Quando você não sabe fazer alguma coisa...",
    answers: [
      { id: "p3a", text: "Pergunto para alguém.", score: { AU: 3 } },
      {
        id: "p3b",
        text: "Tento descobrir sozinho antes que percebam.",
        score: { PE: 3, IN: 1 },
      },
      {
        id: "p3c",
        text: "Fico desconfortável em admitir que não sei.",
        score: { PE: 3, EX: 1 },
      },
      {
        id: "p3d",
        text: "Tento aprender rapidamente para resolver.",
        score: { PE: 3 },
      },
    ],
  },
  {
    id: 4,
    text: "Quando percebe que alguém não gostou de você...",
    answers: [
      { id: "p4a", text: "Tento entender o que fiz.", score: { AG: 3 } },
      {
        id: "p4b",
        text: "Fico incomodado, mesmo tentando não ligar.",
        score: { AG: 3, RE: 1 },
      },
      {
        id: "p4c",
        text: "Aceito que nem todo mundo vai gostar de mim.",
        score: { AU: 3 },
      },
      {
        id: "p4d",
        text: "Tento mostrar uma versão melhor de mim numa próxima oportunidade.",
        score: { RE: 3, AD: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "Quando você está emocionalmente abalado...",
    answers: [
      {
        id: "p5a",
        text: "Pouquíssimas pessoas percebem.",
        score: { FO: 3, CO: 1 },
      },
      {
        id: "p5b",
        text: "Continuo fazendo tudo normalmente.",
        score: { FO: 3, PE: 1 },
      },
      {
        id: "p5c",
        text: "Procuro alguém com quem possa falar.",
        score: { AU: 3 },
      },
      {
        id: "p5d",
        text: "Prefiro ficar sozinho até passar.",
        score: { IN: 3, FO: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "Em ambientes diferentes, você percebe que...",
    answers: [
      {
        id: "p6a",
        text: "Meu jeito muda bastante dependendo das pessoas.",
        score: { AD: 3 },
      },
      {
        id: "p6b",
        text: "Algumas partes minhas aparecem mais que outras.",
        score: { AD: 3, AU: 1 },
      },
      {
        id: "p6c",
        text: "Tento agir praticamente da mesma maneira.",
        score: { AU: 3 },
      },
      {
        id: "p6d",
        text: "Rapidamente percebo como devo me comportar naquele ambiente.",
        score: { AD: 3, AG: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "Quando alguém depende de você...",
    answers: [
      {
        id: "p7a",
        text: "Gosto de saber que posso ajudar.",
        score: { PR: 3 },
      },
      {
        id: "p7b",
        text: "Sinto responsabilidade por não deixar a pessoa na mão.",
        score: { PR: 3, EX: 1 },
      },
      {
        id: "p7c",
        text: "Ajudo quando posso, mas reconheço meus limites.",
        score: { AU: 3 },
      },
      {
        id: "p7d",
        text: "Às vezes assumo mais do que gostaria.",
        score: { PR: 3, AG: 1 },
      },
    ],
  },
  {
    id: 8,
    text: "Quando você recebe um elogio pelo seu trabalho...",
    answers: [
      {
        id: "p8a",
        text: "Fico especialmente feliz por meu esforço ter sido percebido.",
        score: { RE: 3 },
      },
      {
        id: "p8b",
        text: "Agradeço e sigo em frente.",
        score: { AU: 3 },
      },
      {
        id: "p8c",
        text: "Sinto que confirmei que sou competente.",
        score: { PE: 3, RE: 1 },
      },
      {
        id: "p8d",
        text: "Penso imediatamente no que ainda poderia melhorar.",
        score: { EX: 3, PE: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "Quando você precisa discordar de alguém importante...",
    answers: [
      {
        id: "p9a",
        text: "Digo o que penso com respeito.",
        score: { AU: 3 },
      },
      {
        id: "p9b",
        text: "Tento encontrar uma forma de não gerar conflito.",
        score: { AG: 3 },
      },
      {
        id: "p9c",
        text: "Avalio bastante como aquela pessoa poderá reagir.",
        score: { AD: 3, AG: 1 },
      },
      {
        id: "p9d",
        text: "Às vezes prefiro não dizer nada.",
        score: { AG: 3, CO: 1 },
      },
    ],
  },
  {
    id: 10,
    text: "Qual elogio mais mexeria com você?",
    answers: [
      { id: "p10a", text: "“Você sempre dá conta.”", score: { PE: 3 } },
      { id: "p10b", text: "“Você é muito forte.”", score: { FO: 3 } },
      { id: "p10c", text: "“Todo mundo gosta de você.”", score: { AG: 3 } },
      {
        id: "p10d",
        text: "“Sempre podemos contar com você.”",
        score: { PR: 3 },
      },
    ],
  },
  {
    id: 11,
    text: "Quando você precisa de ajuda...",
    answers: [
      { id: "p11a", text: "Peço quando preciso.", score: { AU: 3 } },
      {
        id: "p11b",
        text: "Tento resolver sozinho primeiro.",
        score: { IN: 3 },
      },
      {
        id: "p11c",
        text: "Só peço quando realmente não tenho alternativa.",
        score: { IN: 3, FO: 1 },
      },
      {
        id: "p11d",
        text: "Tenho mais facilidade em ajudar do que em ser ajudado.",
        score: { PR: 3, IN: 1 },
      },
    ],
  },
  {
    id: 12,
    text: "Quando alguém te vê chorando ou muito emocionado...",
    answers: [
      { id: "p12a", text: "Não me incomoda tanto.", score: { AU: 3 } },
      {
        id: "p12b",
        text: "Tento me recompor rapidamente.",
        score: { CO: 3 },
      },
      {
        id: "p12c",
        text: "Fico constrangido.",
        score: { FO: 3, CO: 1 },
      },
      {
        id: "p12d",
        text: "Prefiro viver essas emoções sozinho.",
        score: { IN: 3, FO: 1 },
      },
    ],
  },
  {
    id: 13,
    text: "Quando entra em um grupo novo...",
    answers: [
      {
        id: "p13a",
        text: "Primeiro observo como as pessoas funcionam.",
        score: { AD: 3 },
      },
      {
        id: "p13b",
        text: "Tento encontrar rapidamente pontos em comum.",
        score: { AG: 3, AD: 1 },
      },
      {
        id: "p13c",
        text: "Me comporto naturalmente e vejo o que acontece.",
        score: { AU: 3 },
      },
      {
        id: "p13d",
        text: "Tento causar uma boa primeira impressão.",
        score: { RE: 3 },
      },
    ],
  },
  {
    id: 14,
    text: "Quando você pensa em suas responsabilidades...",
    answers: [
      {
        id: "p14a",
        text: "Tenho orgulho de ser alguém confiável.",
        score: { EX: 3, PR: 1 },
      },
      {
        id: "p14b",
        text: "Às vezes sinto que preciso dar conta de tudo.",
        score: { PE: 3, EX: 1 },
      },
      {
        id: "p14c",
        text: "Tento separar aquilo que é realmente minha responsabilidade.",
        score: { AU: 3 },
      },
      {
        id: "p14d",
        text: "Tenho dificuldade de decepcionar quem espera algo de mim.",
        score: { EX: 3, AG: 1 },
      },
    ],
  },
  {
    id: 15,
    text: "Quando comete um erro diante de outras pessoas...",
    answers: [
      {
        id: "p15a",
        text: "Admito e tento corrigir.",
        score: { AU: 3 },
      },
      {
        id: "p15b",
        text: "Fico muito preocupado com a impressão que causei.",
        score: { RE: 3, EX: 1 },
      },
      {
        id: "p15c",
        text: "Tento explicar por que aquilo aconteceu.",
        score: { PE: 3, RE: 1 },
      },
      {
        id: "p15d",
        text: "Tenho vontade de desaparecer por alguns minutos.",
        score: { EX: 3, AG: 1 },
      },
    ],
  },
  {
    id: 16,
    text: "Nas redes sociais, você tende a...",
    answers: [
      {
        id: "p16a",
        text: "Mostrar apenas algumas partes da minha vida.",
        score: { CO: 3 },
      },
      {
        id: "p16b",
        text: "Pensar em como algo será percebido antes de publicar.",
        score: { RE: 3, AD: 1 },
      },
      {
        id: "p16c",
        text: "Publicar coisas que realmente quero compartilhar.",
        score: { AU: 3 },
      },
      {
        id: "p16d",
        text: "Quase não mostrar aspectos pessoais.",
        score: { IN: 3, CO: 1 },
      },
    ],
  },
  {
    id: 17,
    text: "Quando alguém diz que esperava mais de você...",
    answers: [
      {
        id: "p17a",
        text: "Isso mexe bastante comigo.",
        score: { EX: 3 },
      },
      {
        id: "p17b",
        text: "Quero entender onde falhei.",
        score: { PE: 3, EX: 1 },
      },
      {
        id: "p17c",
        text: "Avalio se aquela expectativa também fazia sentido para mim.",
        score: { AU: 3 },
      },
      {
        id: "p17d",
        text: "Sinto necessidade de provar que consigo fazer melhor.",
        score: { RE: 3, PE: 1 },
      },
    ],
  },
  {
    id: 18,
    text: "Quando todos ao seu redor parecem concordar sobre alguma coisa...",
    answers: [
      {
        id: "p18a",
        text: "Se penso diferente, digo.",
        score: { AU: 3 },
      },
      {
        id: "p18b",
        text: "Primeiro tento entender por que todos pensam assim.",
        score: { AD: 3 },
      },
      {
        id: "p18c",
        text: "Posso guardar minha opinião para evitar desgaste.",
        score: { AG: 3 },
      },
      {
        id: "p18d",
        text: "Às vezes começo a questionar se minha opinião está errada.",
        score: { AD: 3, AG: 1 },
      },
    ],
  },
  {
    id: 19,
    text: "Quando alguém te chama de forte...",
    answers: [
      {
        id: "p19a",
        text: "Gosto porque me reconheço nisso.",
        score: { FO: 3 },
      },
      {
        id: "p19b",
        text: "Às vezes penso que não sabem tudo que acontece dentro de mim.",
        score: { FO: 3, CO: 1 },
      },
      {
        id: "p19c",
        text: "Não sinto que preciso ser forte o tempo inteiro.",
        score: { AU: 3 },
      },
      {
        id: "p19d",
        text: "Sinto que não posso decepcionar essa imagem.",
        score: { FO: 3, EX: 1 },
      },
    ],
  },
  {
    id: 20,
    text: "Quando você está cansado e alguém precisa de você...",
    answers: [
      {
        id: "p20a",
        text: "Normalmente tento ajudar.",
        score: { PR: 3 },
      },
      {
        id: "p20b",
        text: "Tenho dificuldade de dizer que não posso.",
        score: { AG: 3, PR: 1 },
      },
      {
        id: "p20c",
        text: "Avalio se realmente consigo ajudar naquele momento.",
        score: { AU: 3 },
      },
      {
        id: "p20d",
        text: "Ajudo porque as pessoas sabem que podem contar comigo.",
        score: { PR: 3, EX: 1 },
      },
    ],
  },
  {
    id: 21,
    text: "Quando você consegue algo importante...",
    answers: [
      {
        id: "p21a",
        text: "Gosto de compartilhar a conquista.",
        score: { RE: 3 },
      },
      {
        id: "p21b",
        text: "Fico feliz quando outras pessoas reconhecem.",
        score: { RE: 3 },
      },
      {
        id: "p21c",
        text: "Minha satisfação pessoal costuma ser suficiente.",
        score: { AU: 3 },
      },
      {
        id: "p21d",
        text: "Sinto que aquela conquista confirma meu valor.",
        score: { RE: 3, PE: 1 },
      },
    ],
  },
  {
    id: 22,
    text: "Quando precisa tomar uma decisão que pode decepcionar alguém...",
    answers: [
      {
        id: "p22a",
        text: "Isso pesa bastante na decisão.",
        score: { AG: 3 },
      },
      {
        id: "p22b",
        text: "Tento encontrar uma solução que agrade a todos.",
        score: { AG: 3, AD: 1 },
      },
      {
        id: "p22c",
        text: "Escuto as pessoas, mas considero o que quero.",
        score: { AU: 3 },
      },
      {
        id: "p22d",
        text: "Às vezes escolho o que esperam de mim.",
        score: { EX: 3, AG: 1 },
      },
    ],
  },
  {
    id: 23,
    text: "Quando você está inseguro...",
    answers: [
      {
        id: "p23a",
        text: "Normalmente não demonstro.",
        score: { FO: 3, CO: 1 },
      },
      {
        id: "p23b",
        text: "Procuro parecer mais confiante do que estou.",
        score: { FO: 3, RE: 1 },
      },
      {
        id: "p23c",
        text: "Consigo admitir minha insegurança.",
        score: { AU: 3 },
      },
      {
        id: "p23d",
        text: "Tento me preparar muito para que ninguém perceba.",
        score: { PE: 3, FO: 1 },
      },
    ],
  },
  {
    id: 24,
    text: "Em qual situação você se sentiria mais desconfortável?",
    answers: [
      {
        id: "p24a",
        text: "Ser visto como incompetente.",
        score: { PE: 3 },
      },
      {
        id: "p24b",
        text: "Ser visto como fraco.",
        score: { FO: 3 },
      },
      {
        id: "p24c",
        text: "Ser visto como egoísta.",
        score: { PR: 3, AG: 1 },
      },
      {
        id: "p24d",
        text: "Ser rejeitado pelo grupo.",
        score: { AG: 3, AD: 1 },
      },
    ],
  },
  {
    id: 25,
    text: "Quando percebe que mudou de opinião...",
    answers: [
      {
        id: "p25a",
        text: "Consigo dizer que mudei de ideia.",
        score: { AU: 3 },
      },
      {
        id: "p25b",
        text: "Fico um pouco desconfortável se defendi muito a opinião anterior.",
        score: { RE: 3 },
      },
      {
        id: "p25c",
        text: "Tento explicar cuidadosamente por que mudei.",
        score: { PE: 3, RE: 1 },
      },
      {
        id: "p25d",
        text: "Dependendo da situação, posso simplesmente não comentar.",
        score: { CO: 3, AD: 1 },
      },
    ],
  },
  {
    id: 26,
    text: "Quando alguém pergunta o que você realmente quer...",
    answers: [
      {
        id: "p26a",
        text: "Normalmente sei responder.",
        score: { AU: 3 },
      },
      {
        id: "p26b",
        text: "Às vezes penso primeiro no que seria melhor para todos.",
        score: { PR: 3, AG: 1 },
      },
      {
        id: "p26c",
        text: "Depende muito das pessoas envolvidas.",
        score: { AD: 3 },
      },
      {
        id: "p26d",
        text: "Às vezes percebo que não sei exatamente.",
        score: { AD: 3, EX: 1 },
      },
    ],
  },
  {
    id: 27,
    text: "Qual destas situações mais mexeria com sua imagem de si mesmo?",
    answers: [
      {
        id: "p27a",
        text: "Não conseguir resolver um problema importante.",
        score: { PE: 3 },
      },
      {
        id: "p27b",
        text: "Precisar depender de alguém por muito tempo.",
        score: { IN: 3 },
      },
      {
        id: "p27c",
        text: "Decepcionar pessoas importantes.",
        score: { EX: 3, AG: 1 },
      },
      {
        id: "p27d",
        text: "Sentir que ninguém reconhece aquilo que faço.",
        score: { RE: 3 },
      },
    ],
  },
  {
    id: 28,
    text: "Quando você está com pessoas muito diferentes entre si...",
    answers: [
      {
        id: "p28a",
        text: "Consigo circular facilmente entre os grupos.",
        score: { AD: 3 },
      },
      {
        id: "p28b",
        text: "Percebo que diferentes versões minhas aparecem.",
        score: { AD: 3, AU: 1 },
      },
      {
        id: "p28c",
        text: "Tento manter meu jeito independentemente do grupo.",
        score: { AU: 3 },
      },
      {
        id: "p28d",
        text: "Procuro rapidamente entender o que cada ambiente espera de mim.",
        score: { AD: 3, AG: 1 },
      },
    ],
  },
  {
    id: 29,
    text: "Se ninguém esperasse absolutamente nada de você por um ano...",
    answers: [
      {
        id: "p29a",
        text: "Acho que faria algumas escolhas diferentes.",
        score: { EX: 3, AU: 1 },
      },
      {
        id: "p29b",
        text: "Talvez demorasse para descobrir o que realmente quero.",
        score: { AD: 3 },
      },
      {
        id: "p29c",
        text: "Provavelmente continuaria vivendo de maneira parecida.",
        score: { AU: 3 },
      },
      {
        id: "p29d",
        text: "Sentiria um enorme alívio.",
        score: { EX: 3, FO: 1 },
      },
    ],
  },
  {
    id: 30,
    text: "Qual destas frases parece tocar em algo mais profundo?",
    answers: [
      {
        id: "p30a",
        text: "“Preciso mostrar que sou capaz.”",
        score: { PE: 3 },
      },
      {
        id: "p30b",
        text: "“Não quero que percebam minhas fragilidades.”",
        score: { FO: 3 },
      },
      {
        id: "p30c",
        text: "“Não quero decepcionar as pessoas.”",
        score: { EX: 3, AG: 1 },
      },
      {
        id: "p30d",
        text: "“Às vezes não sei onde termina o que esperam de mim e começa aquilo que eu quero.”",
        score: { AD: 3, AU: 1 },
      },
    ],
  },
];

export const TOTAL_PERSONA_QUESTIONS = personaQuestions.length;
