export type ModuleSlug =
  | "personalidade"
  | "inteligencia-cognicao"
  | "relacionamentos"
  | "autopercepcao"
  | "carreira-proposito";

export type InstrumentSlug =
  | "big-five"
  | "tipologia-16"
  | "perfil-cognitivo"
  | "inteligencia-emocional"
  | "estilos-apego"
  | "autoestima"
  | "vocacional-riasec";

export type DiscoveryStatus = "unexplored" | "discovering" | "known";

export type InstrumentMeta = {
  slug: InstrumentSlug;
  moduleSlug: ModuleSlug;
  name: string;
  shortDescription: string;
  estimatedTime: string;
  href: string;
  questionnaireHref: string;
  resultHref: string;
  storageNamespace: string;
  instrumentLabel: string;
  aboutHref?: string;
  /** External tool with custom UI (e.g. cognitive). */
  external?: boolean;
};

export type ModuleMeta = {
  slug: ModuleSlug;
  order: number;
  name: string;
  shortDescription: string;
  href: string;
  instruments: InstrumentSlug[];
  upcoming: string[];
};

export const modules: ModuleMeta[] = [
  {
    slug: "personalidade",
    order: 1,
    name: "Personalidade",
    shortDescription: "Traços e tipologias que descrevem como você tende a ser.",
    href: "/modulos/personalidade",
    instruments: ["big-five", "tipologia-16"],
    upcoming: ["Eneagrama", "Arquétipos de Jung"],
  },
  {
    slug: "inteligencia-cognicao",
    order: 2,
    name: "Inteligência e Cognição",
    shortDescription: "Raciocínio e habilidades emocionais nesta sessão.",
    href: "/modulos/inteligencia-cognicao",
    instruments: ["perfil-cognitivo", "inteligencia-emocional"],
    upcoming: ["Outros testes cognitivos"],
  },
  {
    slug: "relacionamentos",
    order: 3,
    name: "Relacionamentos",
    shortDescription: "Padrões de vínculo e proximidade com outras pessoas.",
    href: "/modulos/relacionamentos",
    instruments: ["estilos-apego"],
    upcoming: ["Dependência Emocional", "Linguagens do Amor"],
  },
  {
    slug: "autopercepcao",
    order: 4,
    name: "Autopercepção",
    shortDescription: "Como você se avalia e se trata no dia a dia.",
    href: "/modulos/autopercepcao",
    instruments: ["autoestima"],
    upcoming: ["Autossabotagem", "Insegurança", "Persona", "Sombra"],
  },
  {
    slug: "carreira-proposito",
    order: 5,
    name: "Carreira e Propósito",
    shortDescription: "Interesses profissionais e direções de carreira.",
    href: "/modulos/carreira-proposito",
    instruments: ["vocacional-riasec"],
    upcoming: ["DISC", "Valores Pessoais", "Propósito de Vida"],
  },
];

export const instruments: InstrumentMeta[] = [
  {
    slug: "big-five",
    moduleSlug: "personalidade",
    name: "Teste de Personalidade (Big Five)",
    shortDescription: "Cinco dimensões amplas de personalidade.",
    estimatedTime: "cerca de 8 minutos",
    href: "/instrumentos/big-five",
    questionnaireHref: "/instrumentos/big-five/questionario",
    resultHref: "/instrumentos/big-five/resultado",
    storageNamespace: "big-five",
    instrumentLabel: "IPIP Big-Five Markers (50 itens)",
  },
  {
    slug: "tipologia-16",
    moduleSlug: "personalidade",
    name: "16 Personalidades",
    shortDescription: "Quatro preferências tipológicas exploratórias.",
    estimatedTime: "cerca de 10 minutos",
    href: "/instrumentos/tipologia-16",
    questionnaireHref: "/instrumentos/tipologia-16/questionario",
    resultHref: "/instrumentos/tipologia-16/resultado",
    storageNamespace: "tipologia-16",
    instrumentLabel: "OEJTS (tipologia junguiana aberta)",
  },
  {
    slug: "perfil-cognitivo",
    moduleSlug: "inteligencia-cognicao",
    name: "Perfil Cognitivo",
    shortDescription: "Desempenho em exercícios de raciocínio por categoria.",
    estimatedTime: "cerca de 25 a 35 minutos",
    href: "/habilidades-cognitivas",
    questionnaireHref: "/habilidades-cognitivas/avaliacao",
    resultHref: "/habilidades-cognitivas/resultado",
    storageNamespace: "cognitive",
    instrumentLabel: "Avaliação cognitiva exploratória Cura Interior",
    external: true,
  },
  {
    slug: "inteligencia-emocional",
    moduleSlug: "inteligencia-cognicao",
    name: "Inteligência Emocional",
    shortDescription: "Como você percebe e lida com emoções.",
    estimatedTime: "cerca de 8 minutos",
    href: "/instrumentos/inteligencia-emocional",
    questionnaireHref: "/instrumentos/inteligencia-emocional/questionario",
    resultHref: "/instrumentos/inteligencia-emocional/resultado",
    storageNamespace: "inteligencia-emocional",
    instrumentLabel: "SSEIT (Schutte et al.)",
  },
  {
    slug: "estilos-apego",
    moduleSlug: "relacionamentos",
    name: "Estilos de Apego",
    shortDescription: "Ansiedade e evitação nos relacionamentos próximos.",
    estimatedTime: "cerca de 5 minutos",
    href: "/instrumentos/estilos-apego",
    questionnaireHref: "/instrumentos/estilos-apego/questionario",
    resultHref: "/instrumentos/estilos-apego/resultado",
    storageNamespace: "estilos-apego",
    instrumentLabel: "ECR-S (Experiences in Close Relationships — Short)",
  },
  {
    slug: "autoestima",
    moduleSlug: "autopercepcao",
    name: "Autoestima",
    shortDescription: "Avaliação global de si mesmo.",
    estimatedTime: "cerca de 3 minutos",
    href: "/instrumentos/autoestima",
    questionnaireHref: "/instrumentos/autoestima/questionario",
    resultHref: "/instrumentos/autoestima/resultado",
    storageNamespace: "autoestima",
    instrumentLabel: "Rosenberg Self-Esteem Scale (RSES)",
  },
  {
    slug: "vocacional-riasec",
    moduleSlug: "carreira-proposito",
    name: "Teste Vocacional (RIASEC)",
    shortDescription: "Interesses profissionais em seis áreas.",
    estimatedTime: "cerca de 8 minutos",
    href: "/instrumentos/vocacional-riasec",
    questionnaireHref: "/instrumentos/vocacional-riasec/questionario",
    resultHref: "/instrumentos/vocacional-riasec/resultado",
    storageNamespace: "vocacional-riasec",
    instrumentLabel: "O*NET Interest Profiler (itens de domínio público)",
  },
];

export function getModule(slug: ModuleSlug): ModuleMeta | undefined {
  return modules.find((item) => item.slug === slug);
}

export function getInstrument(slug: InstrumentSlug): InstrumentMeta | undefined {
  return instruments.find((item) => item.slug === slug);
}

export function getInstrumentsForModule(moduleSlug: ModuleSlug): InstrumentMeta[] {
  return instruments.filter((item) => item.moduleSlug === moduleSlug);
}

const relatedInstruments: Record<InstrumentSlug, InstrumentSlug[]> = {
  "big-five": ["tipologia-16", "autoestima"],
  "tipologia-16": ["big-five", "inteligencia-emocional"],
  "perfil-cognitivo": ["inteligencia-emocional"],
  "inteligencia-emocional": ["estilos-apego", "autoestima"],
  "estilos-apego": ["inteligencia-emocional", "autoestima"],
  "autoestima": ["estilos-apego", "inteligencia-emocional"],
  "vocacional-riasec": ["big-five", "autoestima"],
};

const suggestionReasons: Record<string, string> = {
  "big-five:tipologia-16":
    "Os dois olham para personalidade com modelos diferentes: traços amplos e preferências tipológicas.",
  "big-five:autoestima":
    "Traços de personalidade e a avaliação que você faz de si costumam se iluminar mutuamente.",
  "tipologia-16:big-five":
    "Depois das preferências tipológicas, os cinco grandes traços descrevem tendências sem encaixar você num tipo.",
  "tipologia-16:inteligencia-emocional":
    "O modo de decidir e se organizar conversa com a forma como você percebe e regula emoções.",
  "perfil-cognitivo:inteligencia-emocional":
    "O perfil desta sessão descreve tarefas de raciocínio. A inteligência emocional observa como você lida com afetos — outra habilidade, não uma confirmação do desempenho.",
  "inteligencia-emocional:estilos-apego":
    "Perceber e regular emoções se relaciona com o modo de buscar proximidade nos vínculos.",
  "inteligencia-emocional:autoestima":
    "A relação com as próprias emoções e a avaliação global de si aparecem juntas no dia a dia.",
  "estilos-apego:inteligencia-emocional":
    "Padrões de vínculo ficam mais legíveis quando você também observa como nomeia e regula emoções.",
  "estilos-apego:autoestima":
    "A forma de se aproximar das pessoas e a forma de se avaliar costumam se influenciar.",
  "autoestima:estilos-apego":
    "A avaliação de si aparece com frequência na forma de pedir proximidade ou manter distância.",
  "autoestima:inteligencia-emocional":
    "Autoestima e percepção emocional descrevem facetas diferentes da relação consigo.",
  "vocacional-riasec:big-five":
    "Interesses profissionais não são personalidade. Os traços amplos ajudam a distinguir o que atrai do jeito de agir.",
  "vocacional-riasec:autoestima":
    "Interesse por uma área não mede valor pessoal. A autoestima observa essa outra pergunta.",
};

/** Sugere outra avaliação com relação temática. Prioriza as ainda não concluídas. */
export function getSuggestedInstrument(
  currentSlug: InstrumentSlug,
  completedSlugs: Iterable<string> = [],
): InstrumentMeta {
  const completed = new Set(completedSlugs);
  const related = (relatedInstruments[currentSlug] ?? [])
    .map((slug) => instruments.find((item) => item.slug === slug))
    .filter((item): item is InstrumentMeta => Boolean(item));
  const unexplored = related.find((item) => !completed.has(item.slug));
  if (unexplored) return unexplored;
  if (related[0]) return related[0];

  const others = instruments.filter((item) => item.slug !== currentSlug);
  return others[0] ?? instruments[0]!;
}

export function getSuggestionReason(
  currentSlug: InstrumentSlug,
  suggestedSlug: InstrumentSlug,
): string {
  return (
    suggestionReasons[`${currentSlug}:${suggestedSlug}`] ??
    "Esta avaliação conversa com o tema que você acabou de explorar."
  );
}

export function getStatusLabel(status: DiscoveryStatus): string {
  switch (status) {
    case "unexplored":
      return "Ainda não explorado";
    case "discovering":
      return "Em andamento";
    case "known":
      return "Concluído";
  }
}

/** @deprecated Prefer InstrumentSlug — kept for transitional imports */
export type QuestionnaireSlug = InstrumentSlug;
