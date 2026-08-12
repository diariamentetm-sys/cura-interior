# Prompt para Cursor — Projeto Cura Interior

Crie um projeto web responsivo chamado **Cura Interior**, focado em autoconhecimento por meio de um questionário baseado em arquétipos inspirados na psicologia analítica de Carl Jung.

O objetivo desta primeira versão é permitir que o usuário:

1. conheça brevemente a proposta do portal;
2. inicie um questionário de 30 perguntas;
3. responda de forma simples e fluida;
4. tenha suas respostas pontuadas de acordo com 12 arquétipos;
5. receba ao final um resultado com:
   - arquétipo predominante;
   - dois arquétipos complementares;
   - percentual de afinidade com cada arquétipo;
   - breve leitura introdutória do resultado.

---

## 1. Stack

Use:

- Next.js com App Router
- TypeScript
- Tailwind CSS
- componentes reutilizáveis
- arquitetura simples e escalável
- dados do questionário separados da camada visual
- lógica de pontuação separada dos componentes de interface

Não implemente backend nesta primeira versão.

Persistir respostas temporariamente no estado da aplicação e, se necessário, em localStorage para evitar perda caso o usuário atualize a página.

---

# 2. Direção visual

A interface deve transmitir:

- introspecção;
- delicadeza;
- profundidade;
- acolhimento;
- mistério sutil;
- sofisticação editorial.

Evitar estética:

- esotérica exagerada;
- mística genérica;
- “teste de revista”;
- visual infantil;
- excesso de ícones;
- excesso de elementos decorativos;
- gradientes chamativos;
- estética de aplicativo de astrologia.

A referência deve estar mais próxima de uma experiência editorial de psicologia, arte e autoconhecimento.

## Paleta sugerida

Trabalhar com tons como:

- off-white;
- bege claro;
- areia;
- terracota suave;
- vinho queimado;
- verde oliva dessaturado;
- marrom profundo;
- preto suave.

Use bastante espaço em branco.

## Tipografia

Usar combinação editorial:

- serifada sofisticada para títulos;
- sans-serif limpa para textos e interface.

Priorizar excelente legibilidade.

---

# 3. Estrutura de páginas

Criar:

```text
/
├── Home
├── /questionario
├── /resultado
└── /sobre
```

---

# 4. Home

A Home deve apresentar o conceito de forma simples.

Headline:

**Conheça os padrões que habitam em você.**

Texto de apoio:

**O Cura Interior é um espaço de autoconhecimento inspirado em conceitos da psicologia analítica. Responda algumas perguntas e descubra quais arquétipos aparecem com mais força na forma como você pensa, sente e se relaciona com o mundo.**

CTA principal:

**Descobrir meu arquétipo**

Adicionar abaixo uma breve seção explicando:

### O que são arquétipos?

Texto curto e acessível sobre padrões simbólicos recorrentes que representam diferentes formas de perceber, agir e se relacionar com a vida.

Adicionar uma segunda seção:

### Como funciona

Usar três etapas:

1. Responda às perguntas.
2. Observe seus padrões.
3. Conheça seu perfil arquetípico.

Adicionar CTA final:

**Começar questionário**

---

# 5. Questionário

Criar uma experiência de uma pergunta por tela.

Exibir:

- número da pergunta;
- barra de progresso;
- pergunta;
- quatro alternativas;
- botão continuar apenas após seleção;
- botão voltar;
- transição suave entre perguntas.

Não mostrar o arquétipo associado às respostas.

O usuário não deve perceber como o sistema está pontuando.

---

# 6. Arquétipos

Usar os seguintes códigos:

```ts
IN = Inocente
EX = Explorador
SA = Sábio
HE = Herói
RE = Rebelde
MA = Mago
PC = Pessoa Comum
AM = Amante
BO = Bobo da Corte
CU = Cuidador
CR = Criador
GO = Governante
```

---

# 7. Sistema de pontuação

Cada alternativa pode atribuir:

- 3 pontos para um arquétipo primário;
- 1 ponto para um arquétipo secundário;
- 0 para os demais.

Criar estrutura semelhante a:

```ts
type ArchetypeCode =
  | "IN"
  | "EX"
  | "SA"
  | "HE"
  | "RE"
  | "MA"
  | "PC"
  | "AM"
  | "BO"
  | "CU"
  | "CR"
  | "GO";

type ScoreMap = Partial<Record<ArchetypeCode, number>>;

type Answer = {
  id: string;
  text: string;
  score: ScoreMap;
};

type Question = {
  id: number;
  text: string;
  dimension:
    | "motivation"
    | "fear"
    | "behavior"
    | "integration";
  answers: Answer[];
};
```

---

# 8. Questionário completo

Cadastrar as seguintes 30 perguntas.

## Pergunta 1

Quando algo importante muda inesperadamente, qual costuma ser sua primeira reação?

A. Tento manter a calma e acreditar que as coisas vão se resolver.  
Pontuação: IN 3, PC 1

B. Quero entender o que aconteceu antes de decidir o que fazer.  
Pontuação: SA 3, MA 1

C. Procuro agir rapidamente para recuperar o controle da situação.  
Pontuação: GO 3, HE 1

D. Vejo a mudança como uma oportunidade de seguir por outro caminho.  
Pontuação: EX 3, MA 1

---

## Pergunta 2

O que mais faz você sentir que está vivendo uma vida que vale a pena?

A. Ter liberdade para escolher meu próprio caminho.  
EX 3, CR 1

B. Construir relações profundas com as pessoas que amo.  
AM 3, CU 1

C. Fazer algo significativo e deixar minha contribuição.  
CR 3, HE 1

D. Ter paz e conseguir aproveitar as coisas simples.  
IN 3, PC 1

---

## Pergunta 3

Quando alguém próximo está passando por um problema, você tende a...

A. Acolher e tentar ajudar no que for possível.  
CU 3, AM 1

B. Ajudar a pessoa a entender melhor o que está acontecendo.  
SA 3, MA 1

C. Incentivá-la a reagir e enfrentar a situação.  
HE 3, CU 1

D. Tentar fazê-la enxergar a situação por outra perspectiva.  
MA 3, BO 1

---

## Pergunta 4

Você percebe que uma regra não faz sentido. O que mais se aproxima da sua reação?

A. Questiono por que essa regra existe.  
SA 3, RE 1

B. Procuro uma maneira melhor de fazer as coisas.  
CR 3, MA 1

C. Se estiver prejudicando alguém, tenho vontade de confrontá-la.  
RE 3, HE 1

D. Tento entender como lidar com ela sem criar conflitos desnecessários.  
PC 3, CU 1

---

## Pergunta 5

Qual destas situações mais incomodaria você?

A. Sentir que minha vida está sendo controlada por outras pessoas.  
EX 3, RE 1

B. Descobrir que passei muito tempo acreditando em algo que não era verdade.  
SA 3, GO 1

C. Sentir que não fui capaz de enfrentar uma situação importante.  
HE 3, GO 1

D. Perceber que estou vivendo uma vida que não parece realmente minha.  
CR 3, EX 1

---

## Pergunta 6

Quando você entra em um ambiente onde não conhece ninguém...

A. Tento encontrar alguém com quem eu tenha algo em comum.  
PC 3, AM 1

B. Primeiro observo as pessoas e o ambiente.  
SA 3, GO 1

C. Costumo conversar e criar algum tipo de aproximação.  
AM 3, PC 1

D. Não me incomodo em ficar sozinho até encontrar alguém interessante.  
EX 3, BO 1

---

## Pergunta 7

Quando pensa no futuro, o que mais gostaria de sentir?

A. Liberdade.  
EX 3

B. Segurança.  
IN 3, GO 1

C. Realização.  
HE 3, CR 1

D. Amor.  
AM 3

---

## Pergunta 8

Quando existe um problema difícil para resolver, o que costuma acontecer?

A. Pesquiso, penso e tento compreender todas as partes.  
SA 3

B. Experimento possibilidades até alguma coisa funcionar.  
CR 3, GO 1

C. Assumo a responsabilidade e organizo o que precisa ser feito.  
GO 3, HE 1

D. Confio bastante na minha percepção e tento enxergar algo que os outros ainda não perceberam.  
MA 3, SA 1

---

## Pergunta 9

Qual destas críticas provavelmente mexeria mais com você?

A. “Você desistiu quando as coisas ficaram difíceis.”  
HE 3

B. “Você está vivendo de acordo com o que os outros esperam.”  
EX 3, RE 1

C. “Você pensa muito, mas não vive as coisas.”  
SA 3, BO 1

D. “Você se preocupa tanto com os outros que esquece de si.”  
CU 3, GO 1

---

## Pergunta 10

Quando você conquista alguma coisa importante, o que costuma trazer mais satisfação?

A. Saber que consegui superar algo difícil.  
HE 3

B. Poder compartilhar aquilo com pessoas importantes para mim.  
AM 3, PC 1

C. Perceber que consegui criar algo que antes não existia.  
CR 3

D. Sentir que agora tenho mais autonomia sobre minha própria vida.  
EX 3, GO 1

---

## Pergunta 11

Imagine que você pudesse tirar um ano inteiro para fazer o que quisesse. O que mais atrairia você?

A. Viajar e conhecer lugares, pessoas e modos de vida diferentes.  
EX 3, BO 1

B. Estudar profundamente assuntos que sempre despertaram minha curiosidade.  
SA 3, MA 1

C. Criar um projeto totalmente meu.  
CR 3, GO 1

D. Passar mais tempo perto das pessoas e das coisas que amo.  
AM 3, CU 1

---

## Pergunta 12

Quando você se sente preso em uma situação, qual pensamento aparece com mais facilidade?

A. “Preciso encontrar uma saída.”  
EX 3, RE 1

B. “Preciso entender por que isso está acontecendo.”  
SA 3

C. “Alguma coisa precisa mudar.”  
RE 3, MA 1

D. “Eu consigo enfrentar isso.”  
HE 3

---

## Pergunta 13

Em um grupo que precisa tomar uma decisão importante, você tende a...

A. Organizar as possibilidades para que alguém tome uma decisão.  
GO 3

B. Fazer perguntas que talvez ninguém esteja fazendo.  
SA 3

C. Tentar garantir que todos sejam considerados.  
PC 3, CU 1

D. Propor algo diferente quando as alternativas parecem ruins.  
CR 3, RE 1

---

## Pergunta 14

O que você mais valoriza em uma amizade?

A. Lealdade e presença.  
PC 3, CU 1

B. Intimidade e conexão verdadeira.  
AM 3

C. Liberdade para sermos quem somos.  
EX 3

D. Leveza e capacidade de rir juntos.  
BO 3, PC 1

---

## Pergunta 15

Quando você sente que alguém está tentando controlar suas escolhas...

A. Minha vontade é me afastar.  
EX 3, RE 1

B. Eu confronto a situação.  
RE 3, HE 1

C. Tento conversar e estabelecer limites.  
PC 3, GO 1

D. Procuro entender o que está motivando aquela pessoa.  
SA 3, AM 1

---

## Pergunta 16

Quando alguma coisa dá muito errado, você costuma...

A. Tentar acreditar que amanhã será diferente.  
IN 3

B. Procurar uma solução prática imediatamente.  
HE 3, GO 1

C. Questionar se aquilo não está mostrando que alguma coisa precisa mudar.  
MA 3, RE 1

D. Buscar apoio nas pessoas em quem confio.  
PC 3, AM 1

---

## Pergunta 17

Qual frase mais combina com a maneira como você gostaria de viver?

A. Quero conhecer o mundo e descobrir quem sou nele.  
EX 3

B. Quero compreender melhor a vida e a mim mesmo.  
SA 3, MA 1

C. Quero construir algo que tenha a minha marca.  
CR 3

D. Quero viver cercado de relações que realmente tenham significado.  
AM 3

---

## Pergunta 18

Quando percebe que uma pessoa de quem gosta está tomando uma decisão ruim...

A. Tento protegê-la das consequências.  
CU 3

B. Digo o que penso, mesmo que ela não goste.  
RE 3, HE 1

C. Faço perguntas para ajudá-la a perceber a situação sozinha.  
SA 3, MA 1

D. Respeito que ela precisa viver as próprias experiências.  
EX 3

---

## Pergunta 19

O que mais desperta sua admiração em alguém?

A. Coragem.  
HE 3

B. Inteligência e profundidade.  
SA 3, MA 1

C. Originalidade.  
CR 3

D. Generosidade.  
CU 3

---

## Pergunta 20

Em momentos difíceis, qual comportamento você reconhece mais em si?

A. Tento assumir o controle de tudo.  
GO 3

B. Quero desaparecer por algum tempo e ficar sozinho.  
EX 3

C. Cuido de todo mundo antes de olhar para mim.  
CU 3

D. Questiono tudo e sinto vontade de romper com o que estava estabelecido.  
RE 3

---

## Pergunta 21

Qual destas sensações é mais difícil para você suportar?

A. Não ter escolha.  
EX 3

B. Não ser amado.  
AM 3, PC 1

C. Não saber o que está acontecendo.  
SA 3

D. Sentir que não tenho poder para mudar nada.  
RE 3, HE 1

---

## Pergunta 22

Quando você imagina deixar alguma coisa sua no mundo, o que vem primeiro à cabeça?

A. Algo que eu tenha criado.  
CR 3

B. Pessoas que foram melhores porque passei pela vida delas.  
CU 3, AM 1

C. Uma mudança que ajude outras pessoas a viver de maneira diferente.  
RE 3, MA 1

D. Algo sólido que continue existindo depois de mim.  
GO 3, CR 1

---

## Pergunta 23

Quando tudo fica sério demais...

A. Tento trazer um pouco de humor para a situação.  
BO 3

B. Prefiro manter o foco até resolver o problema.  
HE 3, GO 1

C. Procuro lembrar às pessoas que aquilo vai passar.  
IN 3, BO 1

D. Tento mudar a energia do ambiente de alguma forma.  
MA 3, BO 1

---

## Pergunta 24

Qual dessas situações faria você se sentir mais realizado?

A. Superar algo que durante muito tempo achei impossível.  
HE 3

B. Descobrir algo que muda profundamente minha maneira de enxergar a vida.  
SA 3, MA 1

C. Criar algo que represente exatamente quem eu sou.  
CR 3

D. Construir uma vida estável e poder cuidar das pessoas importantes para mim.  
CU 3, GO 1

---

## Pergunta 25

O que você costuma fazer quando percebe que não está feliz com a própria vida?

A. Procuro descobrir o que precisa mudar.  
EX 3

B. Tento entender quando comecei a me sentir assim.  
SA 3

C. Começo a imaginar uma vida diferente.  
CR 3

D. Tento recuperar as coisas que antes me faziam bem.  
IN 3, AM 1

---

## Pergunta 26

Qual medo parece mais difícil de enfrentar?

A. Perder minha liberdade.  
EX 3

B. Ser abandonado por quem amo.  
AM 3

C. Fracassar quando realmente importa.  
HE 3

D. Passar pela vida sem descobrir quem realmente sou.  
CR 3, MA 1

---

## Pergunta 27

Quando você olha para uma fase difícil que já viveu, o que costuma procurar nela?

A. O que aprendi.  
SA 3

B. O que aquilo mudou em mim.  
MA 3

C. Como consegui superar.  
HE 3

D. O que eu faria diferente hoje.  
CR 3, GO 1

---

## Pergunta 28

Qual dessas forças você mais reconhece em você?

A. Consigo cuidar das pessoas.  
CU 3

B. Consigo enxergar possibilidades que outras pessoas não percebem.  
MA 3, CR 1

C. Consigo seguir em frente mesmo quando tenho medo.  
HE 3

D. Consigo questionar coisas que parecem estabelecidas.  
RE 3

---

## Pergunta 29

Quando você está realmente bem consigo mesmo...

A. Sinto vontade de explorar coisas novas.  
EX 3

B. Sinto vontade de criar.  
CR 3

C. Sinto vontade de estar perto das pessoas que amo.  
AM 3

D. Sinto uma tranquilidade que não depende tanto do que está acontecendo fora.  
IN 3

---

## Pergunta 30

Sem pensar demais: qual destas ideias parece falar mais diretamente com você?

A. “Quero ser livre.”  
EX 3

B. “Quero compreender.”  
SA 3

C. “Quero amar e ser amado.”  
AM 3

D. “Quero deixar algo meu no mundo.”  
CR 3

---

# 9. Dimensões das perguntas

Cadastrar também a dimensão de cada pergunta.

## Motivation

Perguntas:

```text
2, 7, 10, 11, 17, 19, 22, 24, 29, 30
```

## Fear

Perguntas:

```text
5, 9, 20, 21, 26
```

## Behavior

Perguntas:

```text
1, 3, 4, 6, 8, 12, 13, 15, 16, 18, 23, 25, 28
```

## Integration

Perguntas:

```text
14, 27
```

---

# 10. Normalização dos resultados

Não comparar apenas os pontos brutos dos arquétipos.

Como alguns arquétipos aparecem mais vezes no questionário, calcular a pontuação proporcional.

Para cada arquétipo:

```ts
percentage =
  (scoreObtido / scoreMaximoPossivelDoArquetipo) * 100;
```

Limitar o resultado entre 0 e 100.

Ordenar os arquétipos pela porcentagem final.

---

# 11. Página de resultado

Criar uma página visualmente marcante, mas elegante.

Topo:

**Seu arquétipo predominante**

Exemplo:

# Explorador

**84% de afinidade**

Mostrar uma representação visual do arquétipo usando inicialmente formas abstratas ou elementos gráficos. Não depender de imagens externas.

Adicionar texto introdutório.

Exemplo para Explorador:

**Existe em você uma forte necessidade de descobrir o que existe além do caminho conhecido. Autonomia, movimento e liberdade aparecem como elementos importantes na forma como você toma decisões e constrói sua relação com o mundo.**

---

## Arquétipos complementares

Mostrar os dois seguintes.

Exemplo:

**Sábio — 76%**

Sua curiosidade não está apenas em experimentar, mas em compreender.

**Criador — 69%**

Existe também uma necessidade de dar forma própria às experiências e ideias que atravessam sua vida.

---

# 12. Mapa dos 12 arquétipos

Abaixo do resultado principal, mostrar todos os arquétipos ordenados por porcentagem.

Exemplo:

```text
Explorador        84%
Sábio             76%
Criador           69%
Mago              61%
Rebelde           58%
Herói             54%
Amante            49%
Pessoa Comum      46%
Cuidador          42%
Governante        39%
Inocente          34%
Bobo da Corte     28%
```

Pode usar barras horizontais discretas.

Evitar aparência de dashboard corporativo.

---

# 13. Leitura por dimensão

Preparar o código para calcular separadamente:

- motivação;
- medo;
- comportamento;
- integração.

Nesta primeira versão, mostrar no resultado apenas:

### O que mais move você

Arquétipo predominante nas perguntas de motivação.

### Como você tende a agir

Arquétipo predominante nas perguntas comportamentais.

### O que mais desestabiliza você

Arquétipo predominante nas perguntas relacionadas ao medo.

Isso deve ser calculado automaticamente a partir das mesmas respostas.

---

# 14. Dados dos arquétipos

Criar um arquivo:

```text
/data/archetypes.ts
```

Cada arquétipo deve possuir:

```ts
{
  code: "EX",
  name: "Explorador",
  title: "O Explorador",
  keywords: ["liberdade", "autonomia", "descoberta"],
  motivation: "...",
  fear: "...",
  description: "...",
  light: "...",
  shadow: "..."
}
```

Preencher os 12 arquétipos com textos curtos provisórios coerentes com o conceito.

Esses textos deverão ser fáceis de editar depois.

---

# 15. Estrutura recomendada

Organizar aproximadamente assim:

```text
src/
  app/
    page.tsx
    questionario/
      page.tsx
    resultado/
      page.tsx
    sobre/
      page.tsx

  components/
    Header.tsx
    Footer.tsx
    QuestionCard.tsx
    ProgressBar.tsx
    AnswerOption.tsx
    ArchetypeResult.tsx
    ArchetypeBar.tsx
    DimensionResult.tsx

  data/
    questions.ts
    archetypes.ts

  lib/
    scoring.ts
    storage.ts

  types/
    archetypes.ts
    questionnaire.ts
```

---

# 16. Regras de UX

O questionário deve:

- ser totalmente responsivo;
- funcionar muito bem em mobile;
- ter uma pergunta por vez;
- permitir voltar sem perder respostas;
- manter a alternativa selecionada ao voltar;
- mostrar progresso;
- impedir avanço sem resposta;
- não recarregar a página entre perguntas;
- não mostrar pontuação durante o teste;
- não revelar qual resposta pertence a qual arquétipo;
- salvar automaticamente o progresso.

Ao finalizar:

- calcular o resultado;
- salvar resultado localmente;
- navegar para `/resultado`.

Adicionar opção:

**Refazer questionário**

Ao clicar:

- apagar respostas anteriores;
- reiniciar teste.

---

# 17. Acessibilidade

Garantir:

- contraste adequado;
- foco visível;
- navegação por teclado;
- botões com tamanho confortável;
- labels semânticos;
- HTML semântico;
- suporte adequado a leitores de tela;
- não depender apenas de cor para indicar seleção.

---

# 18. Responsividade

Mobile first.

No desktop:

- conteúdo centralizado;
- largura de leitura confortável;
- bastante espaço negativo.

No mobile:

- alternativas em cards empilhados;
- CTA facilmente acessível;
- textos sem linhas excessivamente longas.

---

# 19. Componentização

Não colocar todas as perguntas diretamente no componente da página.

Separar:

- conteúdo;
- lógica;
- interface;
- cálculo.

O objetivo é facilitar mudanças futuras nas perguntas, pesos e arquétipos sem precisar alterar a interface.

---

# 20. Resultado esperado desta implementação

Ao terminar, o projeto deve permitir este fluxo completo:

```text
Home
↓
Começar questionário
↓
30 perguntas
↓
Cálculo automático
↓
Resultado
↓
Arquétipo predominante
↓
2 arquétipos complementares
↓
Mapa dos 12 arquétipos
↓
Leitura por motivação, comportamento e medo
↓
Refazer questionário
```

Priorizar nesta primeira implementação:

1. qualidade da experiência;
2. clareza do código;
3. precisão da pontuação;
4. boa responsividade;
5. refinamento visual.

Não adicionar funcionalidades além deste escopo sem necessidade.