# 01 — CONTENT-AUDIT.md

**Projeto:** Cura Interior  
**Data:** 2026-10-13  
**Escopo:** textos de introdução, itens e resultados dos sete instrumentos atuais  
**Status:** Etapa 1 (auditoria) — proposta Big Five em aprovação (Etapa 2–3)

---

## 1. Mapa técnico (onde mora o conteúdo)

| Tipo | Local |
|------|--------|
| Catálogo / metadados | `src/data/instruments.ts` |
| Itens + scoring Likert | `src/data/instruments/*.ts` |
| Registry (about + calculate) | `src/data/instruments/registry.ts` |
| Intros editoriais | `src/data/instruments/editorialIntros.ts` |
| Narrativas de resultado | `src/data/instruments/narratives/*` |
| UI intro | `src/components/instruments/InstrumentIntro.tsx` |
| UI resultado | `src/components/instruments/InstrumentResultShell.tsx` |
| Flow Likert | `src/components/instruments/LikertFlow.tsx` |
| Cognitivo (intro/resultado/insights) | `src/app/habilidades-cognitivas/*`, `src/server/cognitive/buildProfileCopy.ts` |

**Pontuação:** não alterada nesta revisão editorial (algoritmos, nº de itens e escalas preservados).

---

## 2. Classificação metodológica dos instrumentos

| Instrumento | Natureza | Itens | Pode reescrever itens? |
|-------------|----------|-------|-------------------------|
| Big Five (IPIP-50) | Domínio público / pesquisa | 50 | Não (só tradução problemática documentada) |
| Tipologia-16 (OEJTS-like) | Exploratório | 32 | Sim, com documentação |
| Perfil Cognitivo | Exploratório (Cura) | 30 | Só clareza de instruções; preservar lógica |
| Inteligência Emocional (SSEIT-based) | Autorrelato citado | 33 | Preservar sentido; correções gramaticais pontuais |
| Estilos de Apego (ECR-S-like) | Estrutura alinhada / educacional | 12 | Preservar dimensões; não inventar etiologia |
| Autoestima (RSES) | Clássico / uso com citação | 10 | Preservar itens |
| Vocacional RIASEC (O*NET-style) | Domínio público / Holland | 30 | Preservar modelo; redação de interesse ok se constructo intacto |

---

## 3. Problemas editoriais encontrados (estado pré-revisão / residual)

### 3.1 Introduções
- Superficiais: nome + uma linha + tempo.
- Sem despertar curiosidade temática.
- Metodologia ausente ou reduzida a disclaimer genérico.
- Orientações de resposta quase inexistentes.
- Informações práticas incompletas (escala, pausa, natureza do instrumento).

### 3.2 Resultados
- Síntese de 1–2 frases; insuficiente para compreender pontuações.
- Dimensões só com barra/% — sem análise.
- Poucos ou nenhum exemplo cotidiano.
- Fechamento inexistente ou genérico.
- “Sobre este teste” técnico demais ou curto demais; nomenclatura do brief: **Sobre este resultado**.
- Títulos genéricos (“Seu desempenho…”, “Perfil Big Five”) sem relação ao resultado obtido.

### 3.3 Personalização
- Textos quase iguais trocando só o nome da dimensão dominante.
- Sem faixas interpretativas explícitas (low/mid/high) documentadas.
- Risco de leitura como “frases automáticas”.

### 3.4 Linguagem
- Mistura de tom frio-técnico e frases vagas.
- Tradução literal residual (ex.: IPIP “feel blue” → “azul” em PT).
- Typos/gramática em itens SSEIT-based.
- Risco de linguagem de laudo ou de autoajuda se não houver guia.

### 3.5 Consistência entre módulos
- Estruturas de intro/resultado diferentes.
- Sem guia de voz compartilhado.
- Tipologia e cognitivo com limitações científicas pouco enfatizadas na UX.

### 3.6 Interpretações sem sustentação (a evitar / vigiar)
- Inferir infância/trauma a partir de apego.
- Tratar RSES baixo como diagnóstico.
- Tratar código tipológico como “quem você é”.
- Inferir QI global no cognitivo.
- Afirmar “profissão ideal” no RIASEC.

---

## 4. O que já foi feito fora da ordem ideal

Com um brief **incompleto** (cortado na §4.3), a implementação anterior expandiu intros/resultados para **todos** os sete módulos.

Conforme o brief completo (§11):

- **Etapa 2–3:** apenas Big Five deve ser proposto e **aprovado** antes da expansão.
- Demais módulos: tratados como **rascunho provisório** até aprovação do Big Five.
- Próximo passo após aprovação: alinhar/refinar os outros seis ao guia e aos entregáveis 03–05.

---

## 5. Correções técnicas pontuais já documentadas (não psicométricas)

| Local | Problema | Ação |
|-------|----------|------|
| Big Five item 49 | “Sinto-me frequentemente azul.” | Tradução PT-BR: “para baixo” (sentido de *feel blue*) |
| SSEIT-based item 8 | Frase agramatical | Correção gramatical preservando sentido |
| SSEIT-based item 28 | “supereri” | Typo → “superei” |

**Não alterados:** algoritmos de scoring, quantidade de itens, escalas 1–5, navegação, design system.

---

## 6. Prioridade

1. Fechar auditoria (este documento).  
2. Aprovar **introdução + relatório Big Five** (Etapa 2–3).  
3. Só então expandir/alinhar os demais módulos e fechar entregáveis 03–05 completos.
