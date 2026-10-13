# 06 — CONTENT-VALIDATION.md

Checklist de consistência científica, editorial e técnica.

---

## Global

### Científico / metodológico

- [x] Instrumentos identificados com origem e limites
- [x] Sem diagnósticos implícitos nos templates `editorial-v1`
- [x] Sem etiologia não medida (apego sem infância automática)
- [x] Autorrelato ≠ desempenho (IE e cognitivo)
- [x] Itens validados preservados (correções de tradução documentadas na auditoria)
- [x] Scoring / nº itens / escalas não alterados nesta revisão

### Editorial

- [x] Guia `02-EDITORIAL-GUIDELINES.md`
- [x] Sem frases da lista proibida nos templates
- [x] Título ligado ao resultado
- [x] Síntese ampliada
- [x] Análise dimensional com cotidiano + o que não concluir
- [x] Fechamento sem exercício terapêutico obrigatório
- [x] Seção **Sobre este resultado**
- [x] Variação por faixa/ranking (não texto único genérico)

### Técnico

- [x] Editorial separado do cálculo (`narratives/*`)
- [x] Regras em `05-INTERPRETATION-RULES.md`
- [x] Fallback UI se `resultTitle` ausente (resultados antigos)
- [ ] Teste manual mobile ponta a ponta (recomendado pós-deploy)
- [ ] Review humano amostral de 1 resultado por faixa por instrumento

---

## Por módulo

| Módulo | Intro | Resultado | Regras | Status |
|--------|-------|-----------|--------|--------|
| Big Five | ok | ok | ok | **Aprovado** |
| Tipologia-16 | ok | ok | ok | Etapa 4 |
| IE | ok | ok | ok | Etapa 4 |
| Apego | ok | ok | ok | Etapa 4 |
| Autoestima | ok | ok | ok | Etapa 4 |
| RIASEC | ok | ok | ok | Etapa 4 |
| Cognitivo | ok | ok | ok | Etapa 4 |

---

## Próximo passo sugerido (Etapa 6)

1. Percorrer um fluxo real por instrumento (mobile + desktop).  
2. Conferir coerência pontuação ↔ texto nas bordas 39/40/64/65.  
3. Ajustes finos de prosa sob review humano, se necessário.
