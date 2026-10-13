# 05 — INTERPRETATION-RULES.md

**Versão:** `editorial-v1`  
**Princípio:** textos pré-revisados + regras explícitas. Sem geração psicológica livre em runtime.

---

## Faixas Likert padrão

| Faixa | Regra |
|-------|--------|
| `low` | percentage &lt; 40 |
| `mid` | 40 ≤ percentage &lt; 65 |
| `high` | percentage ≥ 65 |

---

## 1. Big Five *(aprovado)*

- **Input:** % por E, A, C, N, O  
- **Título:** `Um perfil em que {top} ganha relevo`  
- **Badge:** `Mais aparente: {top}`  
- **Síntese:** top + second + contraste low  
- **Análise:** `analyses[key][band]`  
- **Combinações:** só ranking (sem perfil clínico)  
- **Arquivo:** `narratives/bigFiveNarratives.ts`

---

## 2. Autoestima (RSES)

- **Input:** total 10–50 (soma com reversão)  
- **Faixas:** ≤25 low · 26–39 mid · ≥40 high  
- **Título:** conforme faixa (`titles[band]`)  
- **Badge:** `Pontuação {total} de 50`  
- **Análise:** um bloco global `analyses[band]`  
- **Arquivo:** `narratives/autoestimaNarratives.ts`

---

## 3. Estilos de Apego

- **Input:** % ansiedade, % evitação  
- **Estilo (combinação sustentada):**  
  - anxiety &lt;45 e avoidance &lt;45 → mais seguro  
  - anxiety ≥55 e avoidance &lt;45 → mais ansioso  
  - anxiety &lt;45 e avoidance ≥55 → mais evitante  
  - ambos ≥55 → preocupado e distante  
  - senão → misto  
- **Título:** mapa `titleByStyle[styleHint]`  
- **Análise:** banda por dimensão (`anxietyCopy` / `avoidanceCopy`)  
- **Proibido:** inferir infância/trauma  
- **Arquivo:** `narratives/apegoNarratives.ts`

---

## 4. Inteligência Emocional

- **Input:** % por perception, managing_own, managing_others, utilization  
- **Badge:** média relativa das facetas  
- **Título:** ênfase na faceta top  
- **Análise:** `copy[facet][band]`  
- **Regra editorial:** sempre lembrar autorrelato ≠ desempenho  
- **Arquivo:** `narratives/eiNarratives.ts`

---

## 5. Vocacional RIASEC

- **Input:** % R,I,A,S,E,C  
- **Código:** concatenação das 3 keys com maior %  
- **Título:** `Código de interesses {code}: um mapa, não um destino`  
- **Análise:** `areaCopy[letter][band]` (inclui exemplos de ambientes)  
- **Proibido:** “profissão ideal”  
- **Arquivo:** `narratives/vocacionalNarratives.ts`

---

## 6. Tipologia-16

- **Input:** média por polo; lean = maior lado de cada dicotomia  
- **Código:** 4 letras (E/I, S/N, T/F, J/P)  
- **Título:** `Perfil tipológico exploratório {code}`  
- **Análise:** `letterNarratives[lean](pref, other)`  
- **Proibido:** apresentar como MBTI® oficial ou tipo definitivo  
- **Arquivo:** `narratives/tipologiaNarratives.ts`

---

## 7. Perfil Cognitivo

- **Input:** scoresByCategory, tempos, acertos  
- **Insights (ordem):**  
  1. `session-frame` (média + anti-QI)  
  2. `top-category` (com exemplo de tarefa)  
  3. `practice-category` se low ≠ top  
  4. `time-note` se média &gt; 45s na categoria mais lenta  
  5. `consistency` se amplitude ≤ 25  
- **Arquivo:** `server/cognitive/buildProfileCopy.ts`

---

## O que nunca fazer (todos)

- Diagnosticar / patologizar  
- Inventar biografia ou trauma  
- Trocar só o nome do perfil em texto genérico idêntico  
- Gerar interpretação ilimitada via LLM em runtime
