import type { QuestionnaireSlug } from "@/data/questionnaires";

export type BadgeSlug =
  | "primeiro-olhar"
  | "padroes"
  | "espelho-social"
  | "o-que-eu-preciso"
  | "entre-dois-caminhos"
  | "olhar-para-dentro"
  | "cinco-camadas"
  | "sem-pressa";

export type BadgeMeta = {
  slug: BadgeSlug;
  name: string;
  message: string;
  symbol: string;
  requires?: QuestionnaireSlug[];
  requiresCount?: number;
  requiresReturnVisit?: boolean;
};

export const badges: BadgeMeta[] = [
  {
    slug: "primeiro-olhar",
    name: "Primeiro Olhar",
    message: "Você iniciou seu mapa interior.",
    symbol: "◉",
    requiresCount: 1,
  },
  {
    slug: "padroes",
    name: "Padrões",
    message:
      "Você começou a reconhecer padrões que aparecem na sua forma de viver.",
    symbol: "✦",
    requires: ["arquetipos"],
  },
  {
    slug: "espelho-social",
    name: "Espelho Social",
    message: "Você observou como se apresenta ao mundo.",
    symbol: "◎",
    requires: ["persona"],
  },
  {
    slug: "o-que-eu-preciso",
    name: "O que eu preciso",
    message:
      "Você começou a reconhecer aquilo que sustenta emocionalmente suas escolhas.",
    symbol: "♡",
    requires: ["necessidades-emocionais"],
  },
  {
    slug: "entre-dois-caminhos",
    name: "Entre Dois Caminhos",
    message: "Você reconheceu tensões que existem entre diferentes partes de você.",
    symbol: "⇄",
    requires: ["conflitos-internos"],
  },
  {
    slug: "olhar-para-dentro",
    name: "Olhar para Dentro",
    message:
      "Você abriu espaço para observar aquilo que nem sempre aparece com facilidade.",
    symbol: "☾",
    requires: ["sombra"],
  },
  {
    slug: "cinco-camadas",
    name: "Cinco Camadas",
    message: "Seu primeiro mapa de autoconhecimento está formado.",
    symbol: "✧",
    requiresCount: 5,
  },
  {
    slug: "sem-pressa",
    name: "Sem Pressa",
    message: "Autoconhecimento não precisa acontecer de uma vez.",
    symbol: "∿",
    requiresReturnVisit: true,
  },
];

export function getBadge(slug: BadgeSlug): BadgeMeta | undefined {
  return badges.find((badge) => badge.slug === slug);
}
