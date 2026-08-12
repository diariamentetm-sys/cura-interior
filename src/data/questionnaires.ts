export type QuestionnaireSlug =
  | "arquetipos"
  | "persona"
  | "necessidades-emocionais"
  | "conflitos-internos"
  | "sombra";

export type DiscoveryStatus = "unexplored" | "discovering" | "known";

export type QuestionnaireMeta = {
  slug: QuestionnaireSlug;
  name: string;
  stage: 1 | 2 | 3 | 4 | 5;
  order: number;
  estimatedTime: string;
  description: string;
  guidingQuestion: string;
  href: string;
  questionnaireHref: string;
  resultHref: string;
  cta: string;
  storageNamespace: string;
};

export const questionnaires: QuestionnaireMeta[] = [
  {
    slug: "arquetipos",
    name: "Arquétipos",
    stage: 1,
    order: 1,
    estimatedTime: "cerca de 10 minutos",
    description:
      "Descubra quais padrões aparecem com mais força na maneira como você vive e se relaciona com o mundo.",
    guidingQuestion: "Como eu apareço no mundo?",
    href: "/arquetipos",
    questionnaireHref: "/arquetipos/questionario",
    resultHref: "/arquetipos/resultado",
    cta: "Descobrir meu arquétipo",
    storageNamespace: "archetypes",
  },
  {
    slug: "persona",
    name: "Persona",
    stage: 1,
    order: 2,
    estimatedTime: "cerca de 10 minutos",
    description:
      "Entenda quais versões de você aparecem diante das outras pessoas.",
    guidingQuestion: "Como eu apareço para os outros?",
    href: "/persona",
    questionnaireHref: "/persona/questionario",
    resultHref: "/persona/resultado",
    cta: "Conhecer minha Persona",
    storageNamespace: "persona",
  },
  {
    slug: "necessidades-emocionais",
    name: "Necessidades Emocionais",
    stage: 2,
    order: 3,
    estimatedTime: "cerca de 10 minutos",
    description:
      "Descubra o que você mais busca para se sentir seguro, conectado, valorizado e inteiro.",
    guidingQuestion: "O que eu realmente preciso?",
    href: "/necessidades-emocionais",
    questionnaireHref: "/necessidades-emocionais/questionario",
    resultHref: "/necessidades-emocionais/resultado",
    cta: "Conhecer minhas necessidades",
    storageNamespace: "emotional-needs",
  },
  {
    slug: "conflitos-internos",
    name: "Conflitos Internos",
    stage: 3,
    order: 4,
    estimatedTime: "cerca de 10 minutos",
    description:
      "Reconheça necessidades que puxam você em direções diferentes.",
    guidingQuestion: "Por que algumas escolhas me dividem?",
    href: "/conflitos-internos",
    questionnaireHref: "/conflitos-internos/questionario",
    resultHref: "/conflitos-internos/resultado",
    cta: "Conhecer meus conflitos",
    storageNamespace: "internal-conflicts",
  },
  {
    slug: "sombra",
    name: "Sombra",
    stage: 4,
    order: 5,
    estimatedTime: "cerca de 10 minutos",
    description:
      "Observe partes de você que podem estar menos reconhecidas.",
    guidingQuestion: "O que existe em mim que eu normalmente evito olhar?",
    href: "/sombra",
    questionnaireHref: "/sombra/questionario",
    resultHref: "/sombra/resultado",
    cta: "Explorar minha Sombra",
    storageNamespace: "shadow",
  },
];

export const RECOMMENDED_ORDER: QuestionnaireSlug[] = [
  "arquetipos",
  "persona",
  "necessidades-emocionais",
  "conflitos-internos",
  "sombra",
];

export function getQuestionnaire(
  slug: QuestionnaireSlug,
): QuestionnaireMeta | undefined {
  return questionnaires.find((item) => item.slug === slug);
}

export function getStatusLabel(status: DiscoveryStatus): string {
  switch (status) {
    case "unexplored":
      return "Ainda não explorado";
    case "discovering":
      return "Em descoberta";
    case "known":
      return "Conhecido";
  }
}
