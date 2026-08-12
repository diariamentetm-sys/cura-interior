import type { Question } from "@/types/questionnaire";

export const questions: Question[] = [
  {
    id: 1,
    text: "Quando algo importante muda inesperadamente, qual costuma ser sua primeira reação?",
    dimension: "behavior",
    answers: [
      {
        id: "1a",
        text: "Tento manter a calma e acreditar que as coisas vão se resolver.",
        score: { IN: 3, PC: 1 },
      },
      {
        id: "1b",
        text: "Quero entender o que aconteceu antes de decidir o que fazer.",
        score: { SA: 3, MA: 1 },
      },
      {
        id: "1c",
        text: "Procuro agir rapidamente para recuperar o controle da situação.",
        score: { GO: 3, HE: 1 },
      },
      {
        id: "1d",
        text: "Vejo a mudança como uma oportunidade de seguir por outro caminho.",
        score: { EX: 3, MA: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "O que mais faz você sentir que está vivendo uma vida que vale a pena?",
    dimension: "motivation",
    answers: [
      {
        id: "2a",
        text: "Ter liberdade para escolher meu próprio caminho.",
        score: { EX: 3, CR: 1 },
      },
      {
        id: "2b",
        text: "Construir relações profundas com as pessoas que amo.",
        score: { AM: 3, CU: 1 },
      },
      {
        id: "2c",
        text: "Fazer algo significativo e deixar minha contribuição.",
        score: { CR: 3, HE: 1 },
      },
      {
        id: "2d",
        text: "Ter paz e conseguir aproveitar as coisas simples.",
        score: { IN: 3, PC: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "Quando alguém próximo está passando por um problema, você tende a...",
    dimension: "behavior",
    answers: [
      {
        id: "3a",
        text: "Acolher e tentar ajudar no que for possível.",
        score: { CU: 3, AM: 1 },
      },
      {
        id: "3b",
        text: "Ajudar a pessoa a entender melhor o que está acontecendo.",
        score: { SA: 3, MA: 1 },
      },
      {
        id: "3c",
        text: "Incentivá-la a reagir e enfrentar a situação.",
        score: { HE: 3, CU: 1 },
      },
      {
        id: "3d",
        text: "Tentar fazê-la enxergar a situação por outra perspectiva.",
        score: { MA: 3, BO: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "Você percebe que uma regra não faz sentido. O que mais se aproxima da sua reação?",
    dimension: "behavior",
    answers: [
      {
        id: "4a",
        text: "Questiono por que essa regra existe.",
        score: { SA: 3, RE: 1 },
      },
      {
        id: "4b",
        text: "Procuro uma maneira melhor de fazer as coisas.",
        score: { CR: 3, MA: 1 },
      },
      {
        id: "4c",
        text: "Se estiver prejudicando alguém, tenho vontade de confrontá-la.",
        score: { RE: 3, HE: 1 },
      },
      {
        id: "4d",
        text: "Tento entender como lidar com ela sem criar conflitos desnecessários.",
        score: { PC: 3, CU: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "Qual destas situações mais incomodaria você?",
    dimension: "fear",
    answers: [
      {
        id: "5a",
        text: "Sentir que minha vida está sendo controlada por outras pessoas.",
        score: { EX: 3, RE: 1 },
      },
      {
        id: "5b",
        text: "Descobrir que passei muito tempo acreditando em algo que não era verdade.",
        score: { SA: 3, GO: 1 },
      },
      {
        id: "5c",
        text: "Sentir que não fui capaz de enfrentar uma situação importante.",
        score: { HE: 3, GO: 1 },
      },
      {
        id: "5d",
        text: "Perceber que estou vivendo uma vida que não parece realmente minha.",
        score: { CR: 3, EX: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "Quando você entra em um ambiente onde não conhece ninguém...",
    dimension: "behavior",
    answers: [
      {
        id: "6a",
        text: "Tento encontrar alguém com quem eu tenha algo em comum.",
        score: { PC: 3, AM: 1 },
      },
      {
        id: "6b",
        text: "Primeiro observo as pessoas e o ambiente.",
        score: { SA: 3, GO: 1 },
      },
      {
        id: "6c",
        text: "Costumo conversar e criar algum tipo de aproximação.",
        score: { AM: 3, PC: 1 },
      },
      {
        id: "6d",
        text: "Não me incomodo em ficar sozinho até encontrar alguém interessante.",
        score: { EX: 3, BO: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "Quando pensa no futuro, o que mais gostaria de sentir?",
    dimension: "motivation",
    answers: [
      { id: "7a", text: "Liberdade.", score: { EX: 3 } },
      { id: "7b", text: "Segurança.", score: { IN: 3, GO: 1 } },
      { id: "7c", text: "Realização.", score: { HE: 3, CR: 1 } },
      { id: "7d", text: "Amor.", score: { AM: 3 } },
    ],
  },
  {
    id: 8,
    text: "Quando existe um problema difícil para resolver, o que costuma acontecer?",
    dimension: "behavior",
    answers: [
      {
        id: "8a",
        text: "Pesquiso, penso e tento compreender todas as partes.",
        score: { SA: 3 },
      },
      {
        id: "8b",
        text: "Experimento possibilidades até alguma coisa funcionar.",
        score: { CR: 3, GO: 1 },
      },
      {
        id: "8c",
        text: "Assumo a responsabilidade e organizo o que precisa ser feito.",
        score: { GO: 3, HE: 1 },
      },
      {
        id: "8d",
        text: "Confio bastante na minha percepção e tento enxergar algo que os outros ainda não perceberam.",
        score: { MA: 3, SA: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "Qual destas críticas provavelmente mexeria mais com você?",
    dimension: "fear",
    answers: [
      {
        id: "9a",
        text: "“Você desistiu quando as coisas ficaram difíceis.”",
        score: { HE: 3 },
      },
      {
        id: "9b",
        text: "“Você está vivendo de acordo com o que os outros esperam.”",
        score: { EX: 3, RE: 1 },
      },
      {
        id: "9c",
        text: "“Você pensa muito, mas não vive as coisas.”",
        score: { SA: 3, BO: 1 },
      },
      {
        id: "9d",
        text: "“Você se preocupa tanto com os outros que esquece de si.”",
        score: { CU: 3, GO: 1 },
      },
    ],
  },
  {
    id: 10,
    text: "Quando você conquista alguma coisa importante, o que costuma trazer mais satisfação?",
    dimension: "motivation",
    answers: [
      {
        id: "10a",
        text: "Saber que consegui superar algo difícil.",
        score: { HE: 3 },
      },
      {
        id: "10b",
        text: "Poder compartilhar aquilo com pessoas importantes para mim.",
        score: { AM: 3, PC: 1 },
      },
      {
        id: "10c",
        text: "Perceber que consegui criar algo que antes não existia.",
        score: { CR: 3 },
      },
      {
        id: "10d",
        text: "Sentir que agora tenho mais autonomia sobre minha própria vida.",
        score: { EX: 3, GO: 1 },
      },
    ],
  },
  {
    id: 11,
    text: "Imagine que você pudesse tirar um ano inteiro para fazer o que quisesse. O que mais atrairia você?",
    dimension: "motivation",
    answers: [
      {
        id: "11a",
        text: "Viajar e conhecer lugares, pessoas e modos de vida diferentes.",
        score: { EX: 3, BO: 1 },
      },
      {
        id: "11b",
        text: "Estudar profundamente assuntos que sempre despertaram minha curiosidade.",
        score: { SA: 3, MA: 1 },
      },
      {
        id: "11c",
        text: "Criar um projeto totalmente meu.",
        score: { CR: 3, GO: 1 },
      },
      {
        id: "11d",
        text: "Passar mais tempo perto das pessoas e das coisas que amo.",
        score: { AM: 3, CU: 1 },
      },
    ],
  },
  {
    id: 12,
    text: "Quando você se sente preso em uma situação, qual pensamento aparece com mais facilidade?",
    dimension: "behavior",
    answers: [
      {
        id: "12a",
        text: "“Preciso encontrar uma saída.”",
        score: { EX: 3, RE: 1 },
      },
      {
        id: "12b",
        text: "“Preciso entender por que isso está acontecendo.”",
        score: { SA: 3 },
      },
      {
        id: "12c",
        text: "“Alguma coisa precisa mudar.”",
        score: { RE: 3, MA: 1 },
      },
      {
        id: "12d",
        text: "“Eu consigo enfrentar isso.”",
        score: { HE: 3 },
      },
    ],
  },
  {
    id: 13,
    text: "Em um grupo que precisa tomar uma decisão importante, você tende a...",
    dimension: "behavior",
    answers: [
      {
        id: "13a",
        text: "Organizar as possibilidades para que alguém tome uma decisão.",
        score: { GO: 3 },
      },
      {
        id: "13b",
        text: "Fazer perguntas que talvez ninguém esteja fazendo.",
        score: { SA: 3 },
      },
      {
        id: "13c",
        text: "Tentar garantir que todos sejam considerados.",
        score: { PC: 3, CU: 1 },
      },
      {
        id: "13d",
        text: "Propor algo diferente quando as alternativas parecem ruins.",
        score: { CR: 3, RE: 1 },
      },
    ],
  },
  {
    id: 14,
    text: "O que você mais valoriza em uma amizade?",
    dimension: "integration",
    answers: [
      {
        id: "14a",
        text: "Lealdade e presença.",
        score: { PC: 3, CU: 1 },
      },
      {
        id: "14b",
        text: "Intimidade e conexão verdadeira.",
        score: { AM: 3 },
      },
      {
        id: "14c",
        text: "Liberdade para sermos quem somos.",
        score: { EX: 3 },
      },
      {
        id: "14d",
        text: "Leveza e capacidade de rir juntos.",
        score: { BO: 3, PC: 1 },
      },
    ],
  },
  {
    id: 15,
    text: "Quando você sente que alguém está tentando controlar suas escolhas...",
    dimension: "behavior",
    answers: [
      {
        id: "15a",
        text: "Minha vontade é me afastar.",
        score: { EX: 3, RE: 1 },
      },
      {
        id: "15b",
        text: "Eu confronto a situação.",
        score: { RE: 3, HE: 1 },
      },
      {
        id: "15c",
        text: "Tento conversar e estabelecer limites.",
        score: { PC: 3, GO: 1 },
      },
      {
        id: "15d",
        text: "Procuro entender o que está motivando aquela pessoa.",
        score: { SA: 3, AM: 1 },
      },
    ],
  },
  {
    id: 16,
    text: "Quando alguma coisa dá muito errado, você costuma...",
    dimension: "behavior",
    answers: [
      {
        id: "16a",
        text: "Tentar acreditar que amanhã será diferente.",
        score: { IN: 3 },
      },
      {
        id: "16b",
        text: "Procurar uma solução prática imediatamente.",
        score: { HE: 3, GO: 1 },
      },
      {
        id: "16c",
        text: "Questionar se aquilo não está mostrando que alguma coisa precisa mudar.",
        score: { MA: 3, RE: 1 },
      },
      {
        id: "16d",
        text: "Buscar apoio nas pessoas em quem confio.",
        score: { PC: 3, AM: 1 },
      },
    ],
  },
  {
    id: 17,
    text: "Qual frase mais combina com a maneira como você gostaria de viver?",
    dimension: "motivation",
    answers: [
      {
        id: "17a",
        text: "Quero conhecer o mundo e descobrir quem sou nele.",
        score: { EX: 3 },
      },
      {
        id: "17b",
        text: "Quero compreender melhor a vida e a mim mesmo.",
        score: { SA: 3, MA: 1 },
      },
      {
        id: "17c",
        text: "Quero construir algo que tenha a minha marca.",
        score: { CR: 3 },
      },
      {
        id: "17d",
        text: "Quero viver cercado de relações que realmente tenham significado.",
        score: { AM: 3 },
      },
    ],
  },
  {
    id: 18,
    text: "Quando percebe que uma pessoa de quem gosta está tomando uma decisão ruim...",
    dimension: "behavior",
    answers: [
      {
        id: "18a",
        text: "Tento protegê-la das consequências.",
        score: { CU: 3 },
      },
      {
        id: "18b",
        text: "Digo o que penso, mesmo que ela não goste.",
        score: { RE: 3, HE: 1 },
      },
      {
        id: "18c",
        text: "Faço perguntas para ajudá-la a perceber a situação sozinha.",
        score: { SA: 3, MA: 1 },
      },
      {
        id: "18d",
        text: "Respeito que ela precisa viver as próprias experiências.",
        score: { EX: 3 },
      },
    ],
  },
  {
    id: 19,
    text: "O que mais desperta sua admiração em alguém?",
    dimension: "motivation",
    answers: [
      { id: "19a", text: "Coragem.", score: { HE: 3 } },
      {
        id: "19b",
        text: "Inteligência e profundidade.",
        score: { SA: 3, MA: 1 },
      },
      { id: "19c", text: "Originalidade.", score: { CR: 3 } },
      { id: "19d", text: "Generosidade.", score: { CU: 3 } },
    ],
  },
  {
    id: 20,
    text: "Em momentos difíceis, qual comportamento você reconhece mais em si?",
    dimension: "fear",
    answers: [
      {
        id: "20a",
        text: "Tento assumir o controle de tudo.",
        score: { GO: 3 },
      },
      {
        id: "20b",
        text: "Quero desaparecer por algum tempo e ficar sozinho.",
        score: { EX: 3 },
      },
      {
        id: "20c",
        text: "Cuido de todo mundo antes de olhar para mim.",
        score: { CU: 3 },
      },
      {
        id: "20d",
        text: "Questiono tudo e sinto vontade de romper com o que estava estabelecido.",
        score: { RE: 3 },
      },
    ],
  },
  {
    id: 21,
    text: "Qual destas sensações é mais difícil para você suportar?",
    dimension: "fear",
    answers: [
      { id: "21a", text: "Não ter escolha.", score: { EX: 3 } },
      {
        id: "21b",
        text: "Não ser amado.",
        score: { AM: 3, PC: 1 },
      },
      {
        id: "21c",
        text: "Não saber o que está acontecendo.",
        score: { SA: 3 },
      },
      {
        id: "21d",
        text: "Sentir que não tenho poder para mudar nada.",
        score: { RE: 3, HE: 1 },
      },
    ],
  },
  {
    id: 22,
    text: "Quando você imagina deixar alguma coisa sua no mundo, o que vem primeiro à cabeça?",
    dimension: "motivation",
    answers: [
      {
        id: "22a",
        text: "Algo que eu tenha criado.",
        score: { CR: 3 },
      },
      {
        id: "22b",
        text: "Pessoas que foram melhores porque passei pela vida delas.",
        score: { CU: 3, AM: 1 },
      },
      {
        id: "22c",
        text: "Uma mudança que ajude outras pessoas a viver de maneira diferente.",
        score: { RE: 3, MA: 1 },
      },
      {
        id: "22d",
        text: "Algo sólido que continue existindo depois de mim.",
        score: { GO: 3, CR: 1 },
      },
    ],
  },
  {
    id: 23,
    text: "Quando tudo fica sério demais...",
    dimension: "behavior",
    answers: [
      {
        id: "23a",
        text: "Tento trazer um pouco de humor para a situação.",
        score: { BO: 3 },
      },
      {
        id: "23b",
        text: "Prefiro manter o foco até resolver o problema.",
        score: { HE: 3, GO: 1 },
      },
      {
        id: "23c",
        text: "Procuro lembrar às pessoas que aquilo vai passar.",
        score: { IN: 3, BO: 1 },
      },
      {
        id: "23d",
        text: "Tento mudar a energia do ambiente de alguma forma.",
        score: { MA: 3, BO: 1 },
      },
    ],
  },
  {
    id: 24,
    text: "Qual dessas situações faria você se sentir mais realizado?",
    dimension: "motivation",
    answers: [
      {
        id: "24a",
        text: "Superar algo que durante muito tempo achei impossível.",
        score: { HE: 3 },
      },
      {
        id: "24b",
        text: "Descobrir algo que muda profundamente minha maneira de enxergar a vida.",
        score: { SA: 3, MA: 1 },
      },
      {
        id: "24c",
        text: "Criar algo que represente exatamente quem eu sou.",
        score: { CR: 3 },
      },
      {
        id: "24d",
        text: "Construir uma vida estável e poder cuidar das pessoas importantes para mim.",
        score: { CU: 3, GO: 1 },
      },
    ],
  },
  {
    id: 25,
    text: "O que você costuma fazer quando percebe que não está feliz com a própria vida?",
    dimension: "behavior",
    answers: [
      {
        id: "25a",
        text: "Procuro descobrir o que precisa mudar.",
        score: { EX: 3 },
      },
      {
        id: "25b",
        text: "Tento entender quando comecei a me sentir assim.",
        score: { SA: 3 },
      },
      {
        id: "25c",
        text: "Começo a imaginar uma vida diferente.",
        score: { CR: 3 },
      },
      {
        id: "25d",
        text: "Tento recuperar as coisas que antes me faziam bem.",
        score: { IN: 3, AM: 1 },
      },
    ],
  },
  {
    id: 26,
    text: "Qual medo parece mais difícil de enfrentar?",
    dimension: "fear",
    answers: [
      {
        id: "26a",
        text: "Perder minha liberdade.",
        score: { EX: 3 },
      },
      {
        id: "26b",
        text: "Ser abandonado por quem amo.",
        score: { AM: 3 },
      },
      {
        id: "26c",
        text: "Fracassar quando realmente importa.",
        score: { HE: 3 },
      },
      {
        id: "26d",
        text: "Passar pela vida sem descobrir quem realmente sou.",
        score: { CR: 3, MA: 1 },
      },
    ],
  },
  {
    id: 27,
    text: "Quando você olha para uma fase difícil que já viveu, o que costuma procurar nela?",
    dimension: "integration",
    answers: [
      { id: "27a", text: "O que aprendi.", score: { SA: 3 } },
      {
        id: "27b",
        text: "O que aquilo mudou em mim.",
        score: { MA: 3 },
      },
      {
        id: "27c",
        text: "Como consegui superar.",
        score: { HE: 3 },
      },
      {
        id: "27d",
        text: "O que eu faria diferente hoje.",
        score: { CR: 3, GO: 1 },
      },
    ],
  },
  {
    id: 28,
    text: "Qual dessas forças você mais reconhece em você?",
    dimension: "behavior",
    answers: [
      {
        id: "28a",
        text: "Consigo cuidar das pessoas.",
        score: { CU: 3 },
      },
      {
        id: "28b",
        text: "Consigo enxergar possibilidades que outras pessoas não percebem.",
        score: { MA: 3, CR: 1 },
      },
      {
        id: "28c",
        text: "Consigo seguir em frente mesmo quando tenho medo.",
        score: { HE: 3 },
      },
      {
        id: "28d",
        text: "Consigo questionar coisas que parecem estabelecidas.",
        score: { RE: 3 },
      },
    ],
  },
  {
    id: 29,
    text: "Quando você está realmente bem consigo mesmo...",
    dimension: "motivation",
    answers: [
      {
        id: "29a",
        text: "Sinto vontade de explorar coisas novas.",
        score: { EX: 3 },
      },
      {
        id: "29b",
        text: "Sinto vontade de criar.",
        score: { CR: 3 },
      },
      {
        id: "29c",
        text: "Sinto vontade de estar perto das pessoas que amo.",
        score: { AM: 3 },
      },
      {
        id: "29d",
        text: "Sinto uma tranquilidade que não depende tanto do que está acontecendo fora.",
        score: { IN: 3 },
      },
    ],
  },
  {
    id: 30,
    text: "Sem pensar demais: qual destas ideias parece falar mais diretamente com você?",
    dimension: "motivation",
    answers: [
      {
        id: "30a",
        text: "“Quero ser livre.”",
        score: { EX: 3 },
      },
      {
        id: "30b",
        text: "“Quero compreender.”",
        score: { SA: 3 },
      },
      {
        id: "30c",
        text: "“Quero amar e ser amado.”",
        score: { AM: 3 },
      },
      {
        id: "30d",
        text: "“Quero deixar algo meu no mundo.”",
        score: { CR: 3 },
      },
    ],
  },
];

export const TOTAL_QUESTIONS = questions.length;
