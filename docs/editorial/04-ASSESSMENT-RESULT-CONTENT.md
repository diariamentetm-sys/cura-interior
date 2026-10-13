# 04 — ASSESSMENT-RESULT-CONTENT.md

**Versão:** `editorial-v1`  
**Status:** Big Five aprovado; demais módulos expandidos na Etapa 4

Os textos canônicos vivem no código (`narratives/*` e `buildProfileCopy.ts`). Este documento resume a estrutura e aponta a fonte.

---

## Template comum de relatório (UI)

`InstrumentResultShell` / `CognitiveResultView`:

1. Título situacional  
2. Badge / síntese (~100–150 palavras)  
3. Análise por dimensão/faceta (~100–180 quando houver substância)  
4. Exemplos cotidianos + “o que não se conclui”  
5. Fechamento breve  
6. **Sobre este resultado** (colapsável)

---

## Big Five

Fonte: `narratives/bigFiveNarratives.ts` + `docs/editorial/04` (seção detalhada Etapa 2).  
**Aprovado.**

---

## Autoestima

Fonte: `narratives/autoestimaNarratives.ts`  
Títulos por faixa; um bloco analítico global; fechamento sem depreciação.

---

## Estilos de Apego

Fonte: `narratives/apegoNarratives.ts`  
Síntese com % + estilo combinado; análises de ansiedade e evitação; proibição explícita de etiologia infantil automática.

---

## Inteligência Emocional

Fonte: `narratives/eiNarratives.ts`  
Quatro facetas × três faixas; ênfase autorrelato ≠ desempenho.

---

## Vocacional RIASEC

Fonte: `narratives/vocacionalNarratives.ts`  
Código top-3; cada letra com ambientes/atividades; “mapa, não destino”.

---

## Tipologia-16

Fonte: `narratives/tipologiaNarratives.ts`  
Código de 4 letras; parágrafo por polo dominante; disclaimer MBTI®.

---

## Perfil Cognitivo

Fonte: `server/cognitive/buildProfileCopy.ts` + UI `CognitiveResultView`  
Insights encadeados com exemplos de raciocínio; sem QI padronizado.

---

## Sobre este resultado (registry)

Textos metodológicos por instrumento em `src/data/instruments/registry.ts` (`aboutText`).
