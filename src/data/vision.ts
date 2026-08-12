/**
 * Visão de longo prazo — Cura Interior
 *
 * Evolução pretendida:
 * questionários → mapa pessoal → histórico → relações entre descobertas
 * → aprendizado sobre si → compartilhamento consciente → rede de compreensão
 *
 * Camada social futura (não implementada na UI):
 * - connections / profile_visibility / friend_permissions / shared_insights
 * - compartilhamento granular, voluntário, reversível e privado por padrão
 * - nunca presumir que todo resultado psicológico deve ser compartilhado
 *
 * MVP atual:
 * questionários + mapa pessoal + trajetória + perfil + badges + histórico
 */

export const CURA_LONG_TERM_VISION = {
  current: [
    "questionarios",
    "mapa-pessoal",
    "trajetoria",
    "perfil",
    "badges",
    "historico",
  ],
  future: [
    "relacoes-entre-descobertas",
    "compartilhamento-consciente",
    "rede-de-compreensao",
  ],
  socialPrinciples: [
    "privado-por-padrao",
    "granular",
    "voluntario",
    "reversivel",
  ],
} as const;
