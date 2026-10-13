import type { LikertAnswer, LikertItem, LikertResultBase } from "@/types/likert";
import type { InstrumentSlug } from "@/data/instruments";
import { bigFiveItems, calculateBigFive } from "./bigFive";
import { autoestimaItems, calculateAutoestima } from "./autoestima";
import { apegoItems, calculateApego } from "./estilosApego";
import { vocacionalItems, calculateVocacional } from "./vocacional";
import { eiItems, calculateEi } from "./inteligenciaEmocional";
import { tipologiaItems, calculateTipologia } from "./tipologia16";

export type LikertInstrumentConfig = {
  slug: InstrumentSlug;
  items: LikertItem[];
  aboutText: string;
  calculate: (answers: LikertAnswer[]) => LikertResultBase;
};

const configs: Partial<Record<InstrumentSlug, LikertInstrumentConfig>> = {
  "big-five": {
    slug: "big-five",
    items: bigFiveItems,
    aboutText:
      "Instrumento: IPIP Big-Five Markers (50 itens), domínio público (Goldberg / International Personality Item Pool). Dimensões: extroversão, amabilidade, conscienciosidade, estabilidade emocional e abertura. Método: pontuação por dimensão com itens revertidos; porcentagens relativas a esta sessão (não a normas clínicas). Limitações: autorrelato breve, sensível ao contexto; não é o NEO-PI-R nem avaliação profissional. Referências de orientação: literatura Big Five / Five-Factor Model; IPIP.",
    calculate: calculateBigFive,
  },
  autoestima: {
    slug: "autoestima",
    items: autoestimaItems,
    aboutText:
      "Instrumento: Escala de Autoestima de Rosenberg (RSES), 10 itens; uso livre com citação. Dimensão: autoestima global. Método: soma dos itens (com reversão) em escala 1–5 nesta interface; faixas descritivas desta sessão. Limitações: escore único; não diagnostica depressão nem outros quadros. Referência: Rosenberg, M. (1965) e literatura subsequente da RSES.",
    calculate: calculateAutoestima,
  },
  "estilos-apego": {
    slug: "estilos-apego",
    items: apegoItems,
    aboutText:
      "Instrumento: estrutura alinhada ao ECR-S (Experiences in Close Relationships — Short). Dimensões: ansiedade de apego e evitação de apego. Método: pontuações relativas por dimensão; combinação descritiva (mais seguro / ansioso / evitante / misto) nesta sessão. Limitações: educacional/exploratório; não diagnostica; não atribui causa à infância automaticamente. Referências de orientação: Brennan, Clark & Shaver; Wei et al. (formas curtas ECR).",
    calculate: calculateApego,
  },
  "vocacional-riasec": {
    slug: "vocacional-riasec",
    items: vocacionalItems,
    aboutText:
      "Instrumento: interesses RIASEC (Holland) com itens no espírito do O*NET Interest Profiler (domínio público). Dimensões: R, I, A, S, E, C. Método: ranking relativo; código pelas três áreas mais altas. Limitações: interesse ≠ aptidão ≠ mercado; não define profissão ideal. Não é o Self-Directed Search comercial. Referências: Holland; O*NET Interest Profiler.",
    calculate: calculateVocacional,
  },
  "inteligencia-emocional": {
    slug: "inteligencia-emocional",
    items: eiItems,
    aboutText:
      "Instrumento: baseado na SSEIT (Schutte et al., 1998). Facetas: percepção emocional, regulação das próprias emoções, influência emocional social, uso da emoção. Método: pontuações relativas de autorrelato nesta sessão. Limitações: autorrelato ≠ desempenho comprovado; não diagnostica competência emocional. Referência: Schutte, N. S., et al. (1998).",
    calculate: calculateEi,
  },
  "tipologia-16": {
    slug: "tipologia-16",
    items: tipologiaItems,
    aboutText:
      "Instrumento: tipologia exploratória em quatro dicotomias, no espírito de escalas junguianas abertas (OEJTS-like). Dimensões: E–I, S–N, T–F, J–P. Método: preferência relativa por polo; código de quatro letras desta sessão. Limitações: não é MBTI® oficial nem 16Personalities; tipos não são categorias definitivas. Preferências variam com contexto.",
    calculate: calculateTipologia,
  },
};

export function getLikertConfig(
  slug: string,
): LikertInstrumentConfig | undefined {
  return configs[slug as InstrumentSlug];
}

export const LIKERT_INSTRUMENT_SLUGS = Object.keys(configs) as InstrumentSlug[];
