import {
  questionnaires,
  type QuestionnaireSlug,
} from "@/data/questionnaires";

export type Experience = {
  id: QuestionnaireSlug;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const experiences: Experience[] = questionnaires.map((item) => ({
  id: item.slug,
  title: item.name,
  description: item.description,
  href: item.href,
  cta: item.cta,
}));
