import type { InstrumentSlug } from "@/data/instruments";

/** Legacy discovery stages — home now uses modules. Kept for reference only. */
export type DiscoveryStage = {
  id: number;
  title: string;
  text: string;
  message: string;
  questionnaires: InstrumentSlug[];
  isIntegration?: boolean;
};

export const discoveryStages: DiscoveryStage[] = [];

export const discoveryLevelMessages: Record<number, string> = {
  0: "Todo mapa começa com um primeiro ponto.",
  1: "Uma avaliação já faz parte do seu mapa.",
  2: "Duas dimensões exploradas — o painel começa a ganhar forma.",
  3: "Três avaliações registradas. Continue no seu ritmo.",
  4: "Quatro dimensões exploradas no mapa.",
  5: "Cinco ou mais avaliações no seu painel.",
};
