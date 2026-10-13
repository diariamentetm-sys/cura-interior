# 02 — EDITORIAL-GUIDELINES.md

**Guia de linguagem — Cura Interior**  
**Versão editorial:** `editorial-v1`  
**Status:** proposta (aprovar junto com o Big Five)

---

## 1. Tom de voz

O Cura Interior escreve como alguém que entende comportamento humano e explica com clareza, inteligência e acolhimento.

| Ser | Sem |
|-----|-----|
| Próximo | Intimidade excessiva |
| Acolhedor | Infantilização |
| Inteligente | Academicismo |
| Sensível | Sentimentalismo |
| Lúdico | Entretenimento vazio |
| Explicativo | Prolixo |
| Objetivo | Superficial |
| Instigante | Suspense artificial |

**Analogia de leitura:** bom texto de divulgação científica sobre comportamento — não laudo, não coach, não feed motivacional.

---

## 2. Proibições explícitas

Não usar (nem paráfrases):

- “Você é uma pessoa incrível.”
- “Seu potencial é ilimitado.”
- “Descubra sua verdadeira essência.”
- “Você nasceu para liderar.”
- “Seu resultado revela quem você realmente é.”

Evitar também: autoajuda genérica, diagnósticos disfarçados, determinismo, adjetivos em excesso, conclusões que serviriam para qualquer pessoa, alegar que a plataforma “conhece” o usuário a fundo por um teste.

---

## 3. Linguagem de incerteza (obrigatória)

Preferir:

- “nesta sessão”, “nas suas respostas”, “tendência relativa”, “sugere”, “pode aparecer”, “costuma estar associado”

Evitar:

- “você sempre”, “você é”, “seu inconsciente”, “seu trauma”, “prova que”

---

## 4. Tratamento de pontuações

- Percentuais Likert = **peso relativo das respostas nesta sessão**, não norma clínica (salvo quando houver norma documentada — hoje não há).
- Faixas padrão do motor editorial `editorial-v1`:
  - **low:** &lt; 40%
  - **mid:** 40–64%
  - **high:** ≥ 65%
- Nunca apresentar faixa como diagnóstico.
- Sempre dizer o que **não** se pode concluir daquela pontuação.

---

## 5. Estrutura de introdução (todos os instrumentos)

A. Tema (curiosidade + por que importa)  
B. Metodologia (origem, o que mede, dimensões, como pontua, limites) — **sem inventar história científica**  
C. Orientações (autorrelato vs cognitivo)  
D. Práticos (nº questões, tempo, formato, pausa, natureza)  
Fecho: **“Quando estiver pronto, podemos começar.”**

Sem tela extra: integrar na página de intro existente.

---

## 6. Estrutura de resultado

1. **Título** ligado ao resultado obtido (não genérico).  
2. **Síntese** ~100–150 palavras.  
3. **Análise por dimensão** ~100–180 palavras quando houver substância (significado, pontuação, cotidiano, nuances, o que não concluir).  
4. **Exemplos cotidianos** ilustrando tendências (não biografia inventada).  
5. **Fechamento** breve do conjunto — sem exercícios terapêuticos nem motivação.  
6. **Sobre este resultado** (discreto): instrumento, dimensões, método, limites, referências.

Profundidade pela qualidade da explicação, não por alongamento artificial.

---

## 7. Estilo de títulos

- Curtos, concretos, ligados ao padrão observado.
- Sem clickbait (“O segredo da sua alma”).
- Exemplos bons: “Um perfil em que conscienciosidade ganha relevo”; “Proximidade com mais alerta e necessidade de garantia”.

---

## 8. Exemplos cotidianos

- Ilustram **tendências**, não afirmam fatos não medidos.
- Preferir situações reconhecíveis (trabalho, conversa, rotina, decisão).
- Incluir nuance (“ainda assim…”, “também pode…”).

---

## 9. Terminologia compartilhada

| Preferir | Evitar |
|----------|--------|
| dimensão / faceta / área de interesse | “seu tipo definitivo” |
| sessão / nesta leitura | “seu perfil eterno” |
| autorrelato | “prova objetiva de quem você é” |
| tendência / preferência | “diagnóstico” (salvo contexto clínico real — fora do escopo) |
| exploratório / educacional | “cientificamente comprovado para você” |

Nomes de instrumentos: Big Five / IPIP, RSES, ECR-S, SSEIT, RIASEC / Holland, OEJTS-like, Perfil Cognitivo Cura — sempre com limitação explícita quando não forem o instrumento comercial oficial.

---

## 10. Motor de interpretação (princípios)

- Textos **pré-escritos** + regras de faixa/combinação.
- Sem LLM gerando interpretação psicológica ilimitada em runtime.
- Combinações entre dimensões só quando teoricamente sustentadas (ex.: ansiedade × evitação no apego; top-3 RIASEC).
- Versão de conteúdo: campo `editorialVersion: "editorial-v1"` nos payloads futuros.
- Não inferir traumas, transtornos, família ou causas não investigadas.

---

## 11. Particularidades por módulo (resumo)

Ver §6 do brief. Em uma frase:

- **Big Five:** intensidades, sem rótulo fixo.  
- **IE:** autorrelato ≠ desempenho.  
- **Apego:** ansiedade/evitação; sem etiologia infantil automática.  
- **Autoestima:** global; sem depreciação/diagnóstico.  
- **RIASEC:** interesses e ambientes; sem “profissão ideal”.  
- **Tipologia-16:** preferências + limites científicos; não MBTI® oficial.  
- **Cognitivo:** desempenho da sessão; sem QI padronizado.
