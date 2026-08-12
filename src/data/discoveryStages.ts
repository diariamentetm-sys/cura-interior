import type { QuestionnaireSlug } from "@/data/questionnaires";

export type DiscoveryStage = {
  id: number;
  title: string;
  text: string;
  message: string;
  questionnaires: QuestionnaireSlug[];
  isIntegration?: boolean;
};

export const discoveryStages: DiscoveryStage[] = [
  {
    id: 1,
    title: "Como você se apresenta ao mundo",
    text: "Comece pelas partes de você que aparecem com mais facilidade nas relações, escolhas e comportamentos cotidianos.",
    message: "Como eu apareço no mundo?",
    questionnaires: ["arquetipos", "persona"],
  },
  {
    id: 2,
    title: "O que existe por trás das suas escolhas",
    text: "Depois de observar como você funciona, comece a perceber aquilo que sustenta suas decisões e reações.",
    message: "O que eu realmente preciso?",
    questionnaires: ["necessidades-emocionais"],
  },
  {
    id: 3,
    title: "Quando duas partes querem coisas diferentes",
    text: "Nem todas as partes de você desejam a mesma coisa ao mesmo tempo.",
    message: "Por que algumas escolhas me dividem?",
    questionnaires: ["conflitos-internos"],
  },
  {
    id: 4,
    title: "Aquilo que nem sempre quero enxergar",
    text: "Algumas características aparecem de maneira menos evidente — através de incômodos, reações, defesas e projeções.",
    message: "O que existe em mim que eu normalmente evito olhar?",
    questionnaires: ["sombra"],
  },
  {
    id: 5,
    title: "Seu mapa começa a se formar",
    text: "Nenhum resultado conta sua história sozinho. Agora podemos começar a observar como essas partes se relacionam.",
    message: "Como tudo isso se conecta?",
    questionnaires: [],
    isIntegration: true,
  },
];

export const discoveryLevelMessages: Record<number, string> = {
  0: "Todo mapa começa com um primeiro ponto.",
  1: "Uma parte de você começa a ganhar forma.",
  2: "Alguns padrões começam a se encontrar.",
  3: "Seu mapa está ficando mais profundo.",
  4: "Você já consegue enxergar diferentes camadas de si.",
  5: "Seu primeiro mapa está completo.",
};
