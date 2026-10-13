import { instruments } from "@/data/instruments";

export type Experience = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const experiences: Experience[] = instruments.map((item) => ({
  id: item.slug,
  title: item.name,
  description: item.shortDescription,
  href: item.href,
  cta: "Começar",
}));
