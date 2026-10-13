export type BadgeSlug =
  | "primeiro-olhar"
  | "explorador"
  | "cinco-dimensoes"
  | "sem-pressa";

export type BadgeMeta = {
  slug: BadgeSlug;
  name: string;
  message: string;
  symbol: string;
  requiresCount?: number;
  requiresReturnVisit?: boolean;
};

export const badges: BadgeMeta[] = [
  {
    slug: "primeiro-olhar",
    name: "Primeiro Olhar",
    message: "Você registrou sua primeira avaliação no mapa.",
    symbol: "◉",
    requiresCount: 1,
  },
  {
    slug: "explorador",
    name: "Explorador",
    message: "Três avaliações diferentes já fazem parte do seu painel.",
    symbol: "✦",
    requiresCount: 3,
  },
  {
    slug: "cinco-dimensoes",
    name: "Cinco Dimensões",
    message: "Cinco avaliações concluídas no Meu Mapa.",
    symbol: "✧",
    requiresCount: 5,
  },
  {
    slug: "sem-pressa",
    name: "Sem Pressa",
    message: "Você voltou em outro dia. Sem pressa.",
    symbol: "∿",
    requiresReturnVisit: true,
  },
];
