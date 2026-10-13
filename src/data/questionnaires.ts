/**
 * Compatibility shim — catalog moved to instruments/modules.
 * Prefer importing from `@/data/instruments`.
 */
export {
  instruments as questionnaires,
  getInstrument as getQuestionnaire,
  getStatusLabel,
  type InstrumentSlug as QuestionnaireSlug,
  type DiscoveryStatus,
  type InstrumentMeta as QuestionnaireMeta,
} from "@/data/instruments";

export const RECOMMENDED_ORDER = [
  "big-five",
  "inteligencia-emocional",
  "estilos-apego",
  "autoestima",
  "vocacional-riasec",
  "tipologia-16",
  "perfil-cognitivo",
] as const;
