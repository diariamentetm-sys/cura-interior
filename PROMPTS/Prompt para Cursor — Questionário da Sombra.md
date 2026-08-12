# Prompt para Cursor — Questionário da Sombra

Crie uma nova experiência dentro do projeto **Cura Interior** chamada:

# Conheça sua Sombra

O objetivo deste questionário é ajudar o usuário a reconhecer aspectos de si que tende a negar, esconder, reprimir, projetar nos outros ou evitar perceber.

A experiência deve ser inspirada no conceito de **Sombra** da psicologia analítica de Carl Jung.

O questionário não deve soar clínico, acusatório ou moralista.

A linguagem deve ser:

- simples;
- introspectiva;
- acolhedora;
- direta;
- sem jargões psicológicos excessivos;
- sem diagnosticar;
- sem classificar o usuário como “bom” ou “ruim”.

A sensação deve ser de descoberta, não de julgamento.

---

# 1. Objetivo da experiência

Ao final, o usuário deve receber um mapa mostrando quais aspectos da Sombra aparecem com mais força em suas respostas.

O resultado não deve ser:

> “Sua sombra é X.”

O resultado deve apresentar padrões como:

- necessidade de controle;
- medo de vulnerabilidade;
- busca de aprovação;
- raiva reprimida;
- comparação e inveja;
- dificuldade com limites;
- perfeccionismo;
- necessidade de reconhecimento;
- fuga e evitação;
- tendência à projeção;
- medo da rejeição;
- dificuldade de assumir desejos próprios.

---

# 2. Estrutura do questionário

Criar **30 perguntas**.

Cada pergunta deve:

- ser curta;
- usar linguagem cotidiana;
- apresentar situações reconhecíveis;
- evitar perguntas óbvias;
- evitar respostas socialmente desejáveis;
- não revelar qual padrão está sendo medido.

Cada pergunta terá 4 alternativas.

Apresentar uma pergunta por tela.

---

# 3. Dimensões da Sombra

O motor deve trabalhar com 10 dimensões principais.

Use os seguintes códigos:

```ts
CO = Controle
VU = Vulnerabilidade
AP = Aprovação
RA = Raiva Reprimida
CI = Comparação e Inveja
LI = Limites
PE = Perfeccionismo
RE = Reconhecimento
EV = Evitação
PR = Projeção
```

Cada dimensão deve possuir:

```ts
{
  code: "CO",
  name: "Necessidade de Controle",
  description: "...",
  hiddenNeed: "...",
  shadowExpression: "...",
  integrationPath: "..."
}
```

---

# 4. O que cada dimensão representa

## CO — Necessidade de Controle

Observar:

- desconforto com imprevisibilidade;
- necessidade de organizar tudo;
- dificuldade de delegar;
- tentativa de antecipar problemas;
- irritação quando outras pessoas fazem diferente.

---

## VU — Vulnerabilidade

Observar:

- dificuldade de pedir ajuda;
- medo de parecer fraco;
- dificuldade de admitir insegurança;
- desconforto em depender de alguém;
- tendência a esconder sentimentos.

---

## AP — Aprovação

Observar:

- necessidade de ser aceito;
- preocupação excessiva com opinião alheia;
- adaptação para evitar rejeição;
- dificuldade de contrariar pessoas;
- medo de decepcionar.

---

## RA — Raiva Reprimida

Observar:

- evitar conflitos;
- engolir irritação;
- acumular ressentimento;
- explosões depois de longos períodos;
- sarcasmo ou afastamento como forma indireta de expressar raiva.

---

## CI — Comparação e Inveja

Observar:

- comparação frequente;
- desconforto com o sucesso alheio;
- sensação de estar ficando para trás;
- crítica como proteção contra insegurança;
- dificuldade em reconhecer inveja.

---

## LI — Limites

Observar:

- dificuldade de dizer não;
- assumir responsabilidades de outras pessoas;
- culpa ao priorizar a si mesmo;
- excesso de disponibilidade;
- ressentimento por fazer mais do que gostaria.

---

## PE — Perfeccionismo

Observar:

- medo de errar;
- procrastinação por excesso de exigência;
- dificuldade de finalizar;
- autocrítica;
- sensação de nunca ser suficiente.

---

## RE — Necessidade de Reconhecimento

Observar:

- desejo de ser percebido;
- frustração quando esforço passa despercebido;
- necessidade de provar competência;
- desconforto em não receber validação;
- relação entre valor pessoal e desempenho.

---

## EV — Evitação

Observar:

- fuga de conversas difíceis;
- adiamento;
- distração;
- afastamento emocional;
- abandono de situações que geram desconforto.

---

## PR — Projeção

Observar:

- críticas muito intensas;
- características nos outros que despertam reação desproporcional;
- dificuldade de reconhecer em si aquilo que condena;
- atribuição externa de emoções próprias.

---

# 5. Sistema de pontuação

Cada alternativa pode atribuir:

- 3 pontos para uma dimensão principal;
- 1 ponto para uma dimensão secundária;
- 0 para as demais.

Exemplo:

```ts
{
  text: "Prefiro fazer sozinho para ter certeza de que será feito direito.",
  score: {
    CO: 3,
    PE: 1
  }
}
```

Normalizar os resultados ao final:

```ts
percentage =
  (scoreObtido / scoreMaximoPossivelDaDimensao) * 100
```

---

# 6. Perguntas

Cadastrar as seguintes perguntas.

## 01

Quando alguém faz uma tarefa de um jeito diferente do seu, o que costuma acontecer?

A. Fico com vontade de assumir e fazer do meu jeito.  
CO 3, PE 1

B. Tento entender se o jeito da pessoa também funciona.  
PR 1

C. Deixo a pessoa fazer, mas fico acompanhando de perto.  
CO 3

D. Se der errado, prefiro corrigir depois.  
EV 1

---

## 02

Quando você está passando por algo difícil...

A. Costumo tentar resolver sozinho.  
VU 3, CO 1

B. Procuro alguém de confiança.  
LI 1

C. Só conto quando a situação já ficou muito pesada.  
VU 3, EV 1

D. Evito falar porque não quero preocupar ninguém.  
VU 3, AP 1

---

## 03

Quando alguém não gosta de uma decisão sua...

A. Fico pensando bastante se deveria mudar de ideia.  
AP 3

B. Tento explicar até a pessoa entender.  
AP 1, CO 1

C. Consigo aceitar que ela pense diferente.  
LI 1

D. Evito o assunto para não gerar conflito.  
EV 3, AP 1

---

## 04

Quando alguém te irrita muito, você costuma...

A. Dizer diretamente o que está incomodando.  
LI 1

B. Guardar para evitar uma discussão.  
RA 3, EV 1

C. Me afastar da pessoa.  
EV 3, RA 1

D. Ficar mais irônico ou frio.  
RA 3, PR 1

---

## 05

Quando alguém próximo conquista algo que você também deseja...

A. Fico feliz, mas também me comparo.  
CI 3

B. Tento usar aquilo como inspiração.  
RE 1

C. Às vezes começo a procurar defeitos naquela conquista.  
CI 3, PR 1

D. Penso no que ainda preciso fazer para chegar lá.  
RE 3, PE 1

---

## 06

Quando alguém te pede ajuda e você já está cansado...

A. Ajudo mesmo assim.  
LI 3, AP 1

B. Digo que não consigo naquele momento.  
LI 1

C. Ajudo e depois fico irritado comigo mesmo.  
LI 3, RA 1

D. Tento encontrar uma forma de ajudar sem me sobrecarregar.  
LI 1

---

## 07

Quando você comete um erro...

A. Fico pensando nele por muito tempo.  
PE 3

B. Tento corrigir e seguir em frente.  
PE 1

C. Sinto vergonha de outras pessoas perceberem.  
PE 3, AP 1

D. Às vezes evito olhar para o problema.  
EV 3

---

## 08

Quando você se esforça muito e ninguém percebe...

A. Fico frustrado.  
RE 3

B. Tento não ligar, mas me incomoda.  
RE 3, AP 1

C. Sinto vontade de mostrar o quanto fiz.  
RE 3

D. Consigo ficar satisfeito mesmo sem reconhecimento externo.  
AP 1

---

## 09

Quando uma conversa pode gerar conflito...

A. Prefiro resolver logo.  
LI 1

B. Adio até não ser mais possível.  
EV 3

C. Tento deixar o clima mais leve e mudar de assunto.  
EV 3, AP 1

D. Penso muito no que vou dizer antes de conversar.  
AP 1, PE 1

---

## 10

Qual tipo de pessoa mais te irrita?

A. Quem quer controlar tudo.  
PR 3, CO 1

B. Quem precisa de atenção o tempo todo.  
PR 3, RE 1

C. Quem se acha melhor que os outros.  
PR 3, CI 1

D. Quem nunca assume responsabilidade.  
PR 3, CO 1

---

## 11

Quando você precisa pedir ajuda...

A. Peço quando percebo que realmente preciso.  
VU 1

B. Tento tudo sozinho antes.  
VU 3

C. Sinto certo desconforto em depender de alguém.  
VU 3

D. Prefiro evitar pedir.  
VU 3, EV 1

---

## 12

Quando alguém te critica...

A. Tento entender se existe algo verdadeiro na crítica.  
PR 1

B. Fico me defendendo mentalmente.  
PR 3

C. Aquilo fica na minha cabeça durante muito tempo.  
AP 3, PE 1

D. Tenho vontade de mostrar que a pessoa está errada.  
RE 3, PR 1

---

## 13

Quando você percebe que está com raiva...

A. Consigo reconhecer e falar sobre isso.  
RA 1

B. Tento me acalmar e deixar passar.  
RA 3

C. Digo que está tudo bem, mesmo quando não está.  
RA 3, AP 1

D. Me afasto até a irritação diminuir.  
EV 3, RA 1

---

## 14

Quando alguém diz “não” para você...

A. Aceito, mesmo que não goste.  
LI 1

B. Tento entender o motivo.  
CO 1

C. Posso sentir que a pessoa não se importa comigo.  
AP 3

D. Fico incomodado quando acho que ela poderia ter feito um esforço.  
RE 3, LI 1

---

## 15

Quando algo foge completamente do planejado...

A. Fico bastante ansioso.  
CO 3

B. Começo rapidamente a reorganizar tudo.  
CO 3, PE 1

C. Tento me adaptar à situação.  
CO 1

D. Fico irritado com quem causou o problema.  
CO 3, PR 1

---

## 16

Quando você não sabe fazer alguma coisa...

A. Pesquiso até aprender.  
PE 1

B. Tenho dificuldade de admitir que não sei.  
VU 3, RE 1

C. Tento descobrir sozinho antes de perguntar.  
VU 3

D. Pergunto sem grandes problemas.  
VU 1

---

## 17

Quando alguém recebe mais atenção que você em uma situação em que também participou...

A. Não me incomoda muito.  
RE 1

B. Fico um pouco frustrado.  
RE 3

C. Começo a comparar o que cada um fez.  
CI 3, RE 1

D. Penso que talvez meu trabalho não tenha sido bom o suficiente.  
PE 3, RE 1

---

## 18

Quando você diz “sim” querendo dizer “não”...

A. Normalmente é para não decepcionar alguém.  
AP 3, LI 1

B. Tenho medo de parecer egoísta.  
LI 3, AP 1

C. Penso que será mais fácil fazer do que explicar.  
EV 3, LI 1

D. Depois fico ressentido.  
RA 3, LI 1

---

## 19

Quando percebe uma característica sua que não gosta...

A. Tento trabalhar nela.  
PR 1

B. Tenho dificuldade de aceitar que sou assim.  
PR 3

C. Tento compensar sendo o oposto.  
PR 3, PE 1

D. Evito pensar muito nisso.  
EV 3, PR 1

---

## 20

Quando você procrastina algo importante, geralmente...

A. A tarefa parece grande demais.  
EV 3

B. Tenho medo de não fazer bem.  
PE 3, EV 1

C. Espero estar no momento certo.  
PE 3

D. Acabo encontrando outras coisas para fazer.  
EV 3

---

## 21

Quando alguém discorda fortemente de você...

A. Tento entender o ponto de vista da pessoa.  
PR 1

B. Sinto vontade de convencer a pessoa.  
CO 3

C. Posso interpretar como uma crítica pessoal.  
AP 3

D. Prefiro encerrar a conversa.  
EV 3

---

## 22

Quando você sente inveja de alguém...

A. Consigo reconhecer isso em mim.  
CI 1

B. Tento entender o que aquela pessoa tem que eu gostaria de ter.  
CI 3

C. Tenho dificuldade de admitir que é inveja.  
CI 3, PR 1

D. Posso começar a diminuir mentalmente aquilo que a pessoa conquistou.  
CI 3, PR 1

---

## 23

Quando você está emocionalmente machucado...

A. Falo sobre isso com alguém.  
VU 1

B. Fico mais quieto.  
VU 3

C. Tento agir como se nada tivesse acontecido.  
VU 3, EV 1

D. Posso ficar mais irritado com outras coisas.  
RA 3, PR 1

---

## 24

Quando sente que perdeu o controle de uma situação...

A. Tento recuperar rapidamente a organização.  
CO 3

B. Fico ansioso tentando prever o que pode acontecer.  
CO 3

C. Procuro alguém para dividir a responsabilidade.  
VU 1

D. Tenho dificuldade de pensar em outra coisa.  
CO 3, PE 1

---

## 25

Quando recebe um elogio...

A. Aceito e agradeço.  
RE 1

B. Costumo diminuir o que fiz.  
AP 3, VU 1

C. Fico feliz por ter sido reconhecido.  
RE 3

D. Às vezes penso que a pessoa está exagerando.  
PE 3, AP 1

---

## 26

Quando alguém demonstra muita segurança...

A. Admiro.  
CI 1

B. Às vezes me comparo.  
CI 3

C. Posso achar que a pessoa é arrogante.  
PR 3, CI 1

D. Penso no que me falta para me sentir assim.  
CI 3, PE 1

---

## 27

Quando você está sobrecarregado...

A. Peço ajuda.  
VU 1

B. Continuo assumindo coisas até não conseguir mais.  
LI 3, PE 1

C. Fico irritado porque sinto que ninguém percebe.  
RE 3, RA 1

D. Me afasto das pessoas.  
EV 3

---

## 28

Quando alguém aponta algo em você que não gostaria de admitir...

A. Tento refletir sobre aquilo.  
PR 1

B. Minha primeira reação é me defender.  
PR 3

C. Fico incomodado por bastante tempo.  
PR 3, AP 1

D. Procuro defeitos na pessoa também.  
PR 3, CI 1

---

## 29

Quando precisa tomar uma decisão importante...

A. Penso muito em como os outros vão reagir.  
AP 3

B. Quero ter certeza de que estou escolhendo certo.  
PE 3, CO 1

C. Tenho dificuldade de decidir quando não consigo prever as consequências.  
CO 3

D. Às vezes adio porque nenhuma opção parece segura.  
EV 3, PE 1

---

## 30

Qual destas frases parece mais difícil de admitir?

A. “Eu gosto de ter controle.”  
CO 3

B. “Eu quero ser reconhecido.”  
RE 3

C. “Às vezes sinto inveja.”  
CI 3

D. “Eu tenho medo de parecer fraco.”  
VU 3

---

# 7. Resultado

Ao finalizar o questionário, mostrar:

# Sua Sombra em evidência

Não usar linguagem como:

- problema;
- defeito;
- falha;
- diagnóstico;
- transtorno.

Usar:

- padrão;
- aspecto;
- tendência;
- defesa;
- necessidade;
- parte menos reconhecida.

---

# 8. Estrutura da página de resultado

Exemplo:

## O aspecto que mais aparece

### Necessidade de Controle — 82%

Você tende a se sentir mais seguro quando consegue compreender, organizar ou antecipar o que está acontecendo ao seu redor.

Quando essa necessidade fica intensa, situações imprevisíveis podem gerar mais desconforto do que você gostaria de admitir.

---

## O que pode existir por trás disso

Mostrar o campo:

`hiddenNeed`

Exemplo:

**Segurança e previsibilidade.**

---

## Quando essa Sombra aparece

Mostrar:

`shadowExpression`

Exemplo:

- dificuldade de delegar;
- irritação com mudanças;
- excesso de planejamento;
- necessidade de antecipar problemas;
- dificuldade de confiar no processo.

---

## Caminho de integração

Mostrar:

`integrationPath`

Exemplo:

**Experimentar pequenos espaços de imprevisibilidade sem sentir que precisa imediatamente recuperar o controle.**

---

# 9. Aspectos secundários

Mostrar os próximos dois resultados.

Exemplo:

**Perfeccionismo — 71%**

**Vulnerabilidade — 64%**

Adicionar um texto curto explicando como os três padrões podem se relacionar.

Exemplo:

> A necessidade de controlar pode aparecer junto de uma exigência elevada consigo mesmo e de uma dificuldade em mostrar incerteza para outras pessoas.

---

# 10. Mapa completo da Sombra

Mostrar as 10 dimensões ordenadas:

```text
Controle                 82%
Perfeccionismo           71%
Vulnerabilidade          64%
Reconhecimento           59%
Aprovação                52%
Evitação                 49%
Limites                  44%
Projeção                 41%
Comparação e inveja      36%
Raiva reprimida          31%
```

Usar visual discreto.

Não criar aparência de dashboard corporativo.

---

# 11. Perguntas para reflexão

Depois do resultado, gerar automaticamente 3 perguntas relacionadas à dimensão principal.

Para Controle:

- O que você imagina que poderia acontecer se não estivesse no controle?
- Em quais situações é mais difícil confiar que outra pessoa cuide das coisas?
- O que você sente quando algo importante não pode ser previsto?

Para Perfeccionismo:

- O que um erro costuma significar sobre você?
- Em quais situações “bom” parece não ser suficiente?
- O que você deixaria pronto hoje se não precisasse estar perfeito?

Criar perguntas equivalentes para todas as 10 dimensões.

---

# 12. Integração com o Cura Interior

Adicionar este questionário à Home ou área de experiências.

Card:

## Conheça sua Sombra

**Reconheça aspectos de si que podem estar escondidos por trás de reações, incômodos e padrões repetitivos.**

CTA:

**Explorar minha Sombra**

Criar rota:

```text
/sombra
```

Questionário:

```text
/sombra/questionario
```

Resultado:

```text
/sombra/resultado
```

---

# 13. Estrutura de dados

Criar:

```text
src/data/shadowQuestions.ts
src/data/shadowDimensions.ts
src/lib/shadowScoring.ts
```

Tipos:

```ts
type ShadowCode =
  | "CO"
  | "VU"
  | "AP"
  | "RA"
  | "CI"
  | "LI"
  | "PE"
  | "RE"
  | "EV"
  | "PR";
```

Criar componentes reutilizáveis sempre que possível.

Reutilizar a estrutura visual e mecânica do questionário de arquétipos, mas manter os dados e a lógica de pontuação separados.

---

# 14. Continuidade da experiência

Ao final do resultado, adicionar:

### Continue se conhecendo

Mostrar CTA para o questionário de arquétipos:

**Conhecer meus arquétipos**

E preparar a arquitetura para outros questionários futuros do Cura Interior.

Não implementar ainda os demais testes.

---

# 15. Resultado esperado

Fluxo:

```text
Cura Interior
↓
Conheça sua Sombra
↓
Introdução
↓
30 perguntas
↓
Resultado
↓
Aspecto predominante
↓
Necessidade oculta
↓
Como esse padrão aparece
↓
Caminho de integração
↓
2 aspectos secundários
↓
Mapa completo da Sombra
↓
Perguntas para reflexão
↓
Continuar se conhecendo
```

Manter a experiência contemplativa, elegante e simples de usar.

A profundidade deve estar na lógica e no conteúdo, não na complexidade da interface.