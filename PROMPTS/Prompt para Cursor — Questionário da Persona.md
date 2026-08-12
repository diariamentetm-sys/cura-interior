# Prompt para Cursor — Questionário da Persona

Crie uma nova experiência dentro do projeto **Cura Interior** chamada:

# Conheça sua Persona

O objetivo deste questionário é ajudar o usuário a perceber quanto da sua identidade cotidiana está relacionada à imagem que apresenta aos outros e quais papéis tende a assumir para ser aceito, reconhecido, respeitado, necessário ou protegido socialmente.

A experiência deve ser inspirada no conceito de **Persona** da psicologia analítica de Carl Gustav Jung.

Neste questionário, Persona representa a face social que construímos para circular pelo mundo: os papéis, comportamentos e características que aprendemos a apresentar em diferentes contextos.

O questionário deve explorar principalmente a relação entre:

**quem eu sinto que sou → quem aprendi que deveria ser → quem mostro aos outros**

A linguagem deve ser:

- simples;
- íntima;
- acolhedora;
- reflexiva;
- não clínica;
- não moralista;
- fácil de compreender.

Não diagnosticar o usuário.

Não apresentar a Persona como algo negativo. Ela faz parte da adaptação social e da construção da identidade.

O objetivo é ajudar o usuário a perceber **quando o papel social começa a ocupar espaço demais em relação à identidade pessoal**.

---

# 1. Objetivo da experiência

Ao final, o usuário deve receber um **Mapa da Persona**, mostrando quais papéis sociais aparecem com maior intensidade.

Trabalhar com 10 padrões:

```ts
PE = Pessoa Eficiente
FO = Pessoa Forte
AG = Pessoa Agradável
IN = Pessoa Independente
CO = Pessoa Controlada
AD = Pessoa Adaptável
EX = Pessoa Exemplar
RE = Pessoa Reconhecida
PR = Pessoa Protetora
AU = Pessoa Autêntica
```

Importante:

Esses nomes são categorias internas do Cura Interior para organizar os resultados do questionário.

Eles não devem ser apresentados como diagnósticos psicológicos.

---

# 2. Dimensões da Persona

Cada dimensão representa uma maneira de construir a própria imagem social.

## PE — Pessoa Eficiente

Imagem apresentada:

**“Eu dou conta.”**

Observar:

- necessidade de demonstrar competência;
- produtividade ligada à identidade;
- desconforto ao parecer despreparado;
- necessidade de resolver problemas;
- dificuldade de admitir incapacidade.

---

## FO — Pessoa Forte

Imagem apresentada:

**“Nada me derruba.”**

Observar:

- dificuldade de demonstrar fragilidade;
- esconder sofrimento;
- manter postura firme mesmo quando não está bem;
- resistência em pedir apoio;
- orgulho de suportar situações difíceis.

---

## AG — Pessoa Agradável

Imagem apresentada:

**“É importante que gostem de mim.”**

Observar:

- evitar conflitos;
- tentar manter harmonia;
- dificuldade de desagradar;
- adaptação às expectativas;
- preocupação com a percepção alheia.

---

## IN — Pessoa Independente

Imagem apresentada:

**“Eu não preciso de ninguém.”**

Observar:

- valorização extrema da autonomia;
- desconforto ao depender;
- resistência em pedir ajuda;
- necessidade de resolver sozinho;
- distanciamento como proteção.

---

## CO — Pessoa Controlada

Imagem apresentada:

**“Eu estou sempre bem.”**

Observar:

- controle emocional;
- dificuldade de demonstrar emoções intensas;
- preocupação em manter compostura;
- racionalização;
- separação entre experiência interna e comportamento externo.

---

## AD — Pessoa Adaptável

Imagem apresentada:

**“Eu consigo me encaixar.”**

Observar:

- mudança de comportamento conforme o ambiente;
- facilidade de perceber expectativas;
- adequação ao grupo;
- dificuldade de identificar preferências próprias;
- diferentes versões de si em contextos diferentes.

---

## EX — Pessoa Exemplar

Imagem apresentada:

**“Eu preciso fazer a coisa certa.”**

Observar:

- necessidade de corresponder às expectativas;
- responsabilidade elevada;
- medo de decepcionar;
- preocupação em ser correto;
- identidade ligada ao cumprimento de deveres.

---

## RE — Pessoa Reconhecida

Imagem apresentada:

**“Eu preciso ser percebido.”**

Observar:

- importância do reconhecimento;
- preocupação com reputação;
- desejo de causar boa impressão;
- identidade ligada às conquistas;
- desconforto em passar despercebido.

---

## PR — Pessoa Protetora

Imagem apresentada:

**“As pessoas podem contar comigo.”**

Observar:

- identidade ligada a cuidar;
- assumir responsabilidades;
- sentir-se necessário;
- colocar necessidades alheias antes das próprias;
- dificuldade de receber cuidado.

---

## AU — Pessoa Autêntica

Imagem apresentada:

**“Quero conseguir ser quem sou.”**

Observar:

- coerência entre experiência interna e expressão externa;
- capacidade de discordar;
- reconhecimento dos próprios desejos;
- menor necessidade de adequação;
- conforto em mostrar diferentes aspectos de si.

AU funciona também como indicador de **flexibilidade da Persona**.

---

# 3. Estrutura do questionário

Criar 30 perguntas.

Cada pergunta deve ter quatro alternativas.

As perguntas devem abordar situações comuns:

- trabalho;
- família;
- amizades;
- conflitos;
- redes sociais;
- reconhecimento;
- vulnerabilidade;
- decisões;
- expectativas;
- pertencimento;
- emoções;
- pedidos de ajuda.

Apresentar uma pergunta por tela.

Nunca mostrar qual dimensão está sendo medida.

---

# 4. Sistema de pontuação

Cada alternativa pode atribuir:

- 3 pontos à dimensão principal;
- 1 ponto a uma dimensão secundária;
- 0 às demais.

Exemplo:

```ts
{
  text: "Prefiro resolver sozinho antes de pedir ajuda.",
  score: {
    IN: 3,
    FO: 1
  }
}
```

Normalizar os resultados:

```ts
percentage =
  (scoreObtido / scoreMaximoPossivelDaDimensao) * 100;
```

Não comparar apenas pontuação bruta.

---

# 5. Questionário

## 01

Quando alguém pergunta como você está em um dia realmente difícil...

A. Costumo dizer que estou bem.  
CO 3, FO 1

B. Conto apenas para pessoas muito próximas.  
FO 3

C. Consigo dizer que não estou bem.  
AU 3

D. Tento mudar o assunto.  
CO 3, AD 1

---

## 02

Quando surge um problema em um grupo...

A. Minha tendência é tentar resolver.  
PE 3, PR 1

B. Espero para entender qual é meu papel.  
AD 3

C. Tento garantir que ninguém fique desconfortável.  
AG 3, PR 1

D. Digo o que realmente penso sobre a situação.  
AU 3

---

## 03

Quando você não sabe fazer alguma coisa...

A. Pergunto para alguém.  
AU 3

B. Tento descobrir sozinho antes que percebam.  
PE 3, IN 1

C. Fico desconfortável em admitir que não sei.  
PE 3, EX 1

D. Tento aprender rapidamente para resolver.  
PE 3

---

## 04

Quando percebe que alguém não gostou de você...

A. Tento entender o que fiz.  
AG 3

B. Fico incomodado, mesmo tentando não ligar.  
AG 3, RE 1

C. Aceito que nem todo mundo vai gostar de mim.  
AU 3

D. Tento mostrar uma versão melhor de mim numa próxima oportunidade.  
RE 3, AD 1

---

## 05

Quando você está emocionalmente abalado...

A. Pouquíssimas pessoas percebem.  
FO 3, CO 1

B. Continuo fazendo tudo normalmente.  
FO 3, PE 1

C. Procuro alguém com quem possa falar.  
AU 3

D. Prefiro ficar sozinho até passar.  
IN 3, FO 1

---

## 06

Em ambientes diferentes, você percebe que...

A. Meu jeito muda bastante dependendo das pessoas.  
AD 3

B. Algumas partes minhas aparecem mais que outras.  
AD 3, AU 1

C. Tento agir praticamente da mesma maneira.  
AU 3

D. Rapidamente percebo como devo me comportar naquele ambiente.  
AD 3, AG 1

---

## 07

Quando alguém depende de você...

A. Gosto de saber que posso ajudar.  
PR 3

B. Sinto responsabilidade por não deixar a pessoa na mão.  
PR 3, EX 1

C. Ajudo quando posso, mas reconheço meus limites.  
AU 3

D. Às vezes assumo mais do que gostaria.  
PR 3, AG 1

---

## 08

Quando você recebe um elogio pelo seu trabalho...

A. Fico especialmente feliz por meu esforço ter sido percebido.  
RE 3

B. Agradeço e sigo em frente.  
AU 3

C. Sinto que confirmei que sou competente.  
PE 3, RE 1

D. Penso imediatamente no que ainda poderia melhorar.  
EX 3, PE 1

---

## 09

Quando você precisa discordar de alguém importante...

A. Digo o que penso com respeito.  
AU 3

B. Tento encontrar uma forma de não gerar conflito.  
AG 3

C. Avalio bastante como aquela pessoa poderá reagir.  
AD 3, AG 1

D. Às vezes prefiro não dizer nada.  
AG 3, CO 1

---

## 10

Qual elogio mais mexeria com você?

A. “Você sempre dá conta.”  
PE 3

B. “Você é muito forte.”  
FO 3

C. “Todo mundo gosta de você.”  
AG 3

D. “Sempre podemos contar com você.”  
PR 3

---

## 11

Quando você precisa de ajuda...

A. Peço quando preciso.  
AU 3

B. Tento resolver sozinho primeiro.  
IN 3

C. Só peço quando realmente não tenho alternativa.  
IN 3, FO 1

D. Tenho mais facilidade em ajudar do que em ser ajudado.  
PR 3, IN 1

---

## 12

Quando alguém te vê chorando ou muito emocionado...

A. Não me incomoda tanto.  
AU 3

B. Tento me recompor rapidamente.  
CO 3

C. Fico constrangido.  
FO 3, CO 1

D. Prefiro viver essas emoções sozinho.  
IN 3, FO 1

---

## 13

Quando entra em um grupo novo...

A. Primeiro observo como as pessoas funcionam.  
AD 3

B. Tento encontrar rapidamente pontos em comum.  
AG 3, AD 1

C. Me comporto naturalmente e vejo o que acontece.  
AU 3

D. Tento causar uma boa primeira impressão.  
RE 3

---

## 14

Quando você pensa em suas responsabilidades...

A. Tenho orgulho de ser alguém confiável.  
EX 3, PR 1

B. Às vezes sinto que preciso dar conta de tudo.  
PE 3, EX 1

C. Tento separar aquilo que é realmente minha responsabilidade.  
AU 3

D. Tenho dificuldade de decepcionar quem espera algo de mim.  
EX 3, AG 1

---

## 15

Quando comete um erro diante de outras pessoas...

A. Admito e tento corrigir.  
AU 3

B. Fico muito preocupado com a impressão que causei.  
RE 3, EX 1

C. Tento explicar por que aquilo aconteceu.  
PE 3, RE 1

D. Tenho vontade de desaparecer por alguns minutos.  
EX 3, AG 1

---

## 16

Nas redes sociais, você tende a...

A. Mostrar apenas algumas partes da minha vida.  
CO 3

B. Pensar em como algo será percebido antes de publicar.  
RE 3, AD 1

C. Publicar coisas que realmente quero compartilhar.  
AU 3

D. Quase não mostrar aspectos pessoais.  
IN 3, CO 1

---

## 17

Quando alguém diz que esperava mais de você...

A. Isso mexe bastante comigo.  
EX 3

B. Quero entender onde falhei.  
PE 3, EX 1

C. Avalio se aquela expectativa também fazia sentido para mim.  
AU 3

D. Sinto necessidade de provar que consigo fazer melhor.  
RE 3, PE 1

---

## 18

Quando todos ao seu redor parecem concordar sobre alguma coisa...

A. Se penso diferente, digo.  
AU 3

B. Primeiro tento entender por que todos pensam assim.  
AD 3

C. Posso guardar minha opinião para evitar desgaste.  
AG 3

D. Às vezes começo a questionar se minha opinião está errada.  
AD 3, AG 1

---

## 19

Quando alguém te chama de forte...

A. Gosto porque me reconheço nisso.  
FO 3

B. Às vezes penso que não sabem tudo que acontece dentro de mim.  
FO 3, CO 1

C. Não sinto que preciso ser forte o tempo inteiro.  
AU 3

D. Sinto que não posso decepcionar essa imagem.  
FO 3, EX 1

---

## 20

Quando você está cansado e alguém precisa de você...

A. Normalmente tento ajudar.  
PR 3

B. Tenho dificuldade de dizer que não posso.  
AG 3, PR 1

C. Avalio se realmente consigo ajudar naquele momento.  
AU 3

D. Ajudo porque as pessoas sabem que podem contar comigo.  
PR 3, EX 1

---

## 21

Quando você consegue algo importante...

A. Gosto de compartilhar a conquista.  
RE 3

B. Fico feliz quando outras pessoas reconhecem.  
RE 3

C. Minha satisfação pessoal costuma ser suficiente.  
AU 3

D. Sinto que aquela conquista confirma meu valor.  
RE 3, PE 1

---

## 22

Quando precisa tomar uma decisão que pode decepcionar alguém...

A. Isso pesa bastante na decisão.  
AG 3

B. Tento encontrar uma solução que agrade a todos.  
AG 3, AD 1

C. Escuto as pessoas, mas considero o que quero.  
AU 3

D. Às vezes escolho o que esperam de mim.  
EX 3, AG 1

---

## 23

Quando você está inseguro...

A. Normalmente não demonstro.  
FO 3, CO 1

B. Procuro parecer mais confiante do que estou.  
FO 3, RE 1

C. Consigo admitir minha insegurança.  
AU 3

D. Tento me preparar muito para que ninguém perceba.  
PE 3, FO 1

---

## 24

Em qual situação você se sentiria mais desconfortável?

A. Ser visto como incompetente.  
PE 3

B. Ser visto como fraco.  
FO 3

C. Ser visto como egoísta.  
PR 3, AG 1

D. Ser rejeitado pelo grupo.  
AG 3, AD 1

---

## 25

Quando percebe que mudou de opinião...

A. Consigo dizer que mudei de ideia.  
AU 3

B. Fico um pouco desconfortável se defendi muito a opinião anterior.  
RE 3

C. Tento explicar cuidadosamente por que mudei.  
PE 3, RE 1

D. Dependendo da situação, posso simplesmente não comentar.  
CO 3, AD 1

---

## 26

Quando alguém pergunta o que você realmente quer...

A. Normalmente sei responder.  
AU 3

B. Às vezes penso primeiro no que seria melhor para todos.  
PR 3, AG 1

C. Depende muito das pessoas envolvidas.  
AD 3

D. Às vezes percebo que não sei exatamente.  
AD 3, EX 1

---

## 27

Qual destas situações mais mexeria com sua imagem de si mesmo?

A. Não conseguir resolver um problema importante.  
PE 3

B. Precisar depender de alguém por muito tempo.  
IN 3

C. Decepcionar pessoas importantes.  
EX 3, AG 1

D. Sentir que ninguém reconhece aquilo que faço.  
RE 3

---

## 28

Quando você está com pessoas muito diferentes entre si...

A. Consigo circular facilmente entre os grupos.  
AD 3

B. Percebo que diferentes versões minhas aparecem.  
AD 3, AU 1

C. Tento manter meu jeito independentemente do grupo.  
AU 3

D. Procuro rapidamente entender o que cada ambiente espera de mim.  
AD 3, AG 1

---

## 29

Se ninguém esperasse absolutamente nada de você por um ano...

A. Acho que faria algumas escolhas diferentes.  
EX 3, AU 1

B. Talvez demorasse para descobrir o que realmente quero.  
AD 3

C. Provavelmente continuaria vivendo de maneira parecida.  
AU 3

D. Sentiria um enorme alívio.  
EX 3, FO 1

---

## 30

Qual destas frases parece tocar em algo mais profundo?

A. “Preciso mostrar que sou capaz.”  
PE 3

B. “Não quero que percebam minhas fragilidades.”  
FO 3

C. “Não quero decepcionar as pessoas.”  
EX 3, AG 1

D. “Às vezes não sei onde termina o que esperam de mim e começa aquilo que eu quero.”  
AD 3, AU 1

---

# 6. Índice de Persona

Além das 10 dimensões, calcular um indicador geral chamado:

# Índice de Identificação com a Persona

O objetivo é observar quanto da identidade apresentada pelo usuário parece estar condicionada a expectativas, papéis e percepção externa.

Não utilizar simplesmente a soma de todas as dimensões.

Calcular o índice considerando principalmente:

- PE;
- FO;
- AG;
- IN;
- CO;
- AD;
- EX;
- RE;
- PR.

AU deve funcionar como contraponto de autenticidade/flexibilidade.

Criar uma função separada:

```ts
calculatePersonaIdentification()
```

Retornar valor entre 0 e 100.

O cálculo deve ser documentado no código para permitir ajustes futuros.

---

# 7. Faixas do Índice

Não utilizar termos como "baixo", "normal", "alto", "problemático" ou "saudável".

Usar:

## 0–30 — Persona Flexível

Existe uma proximidade maior entre aquilo que você sente internamente e aquilo que permite que as outras pessoas conheçam.

---

## 31–55 — Persona Adaptativa

Você adapta aspectos da sua expressão conforme o contexto, sem necessariamente perder contato com aquilo que deseja e sente.

---

## 56–75 — Persona Presente

Os papéis que você ocupa e a percepção das outras pessoas parecem exercer uma influência importante sobre a forma como você se apresenta.

---

## 76–100 — Persona Dominante

Existe uma forte identificação com os papéis e características através dos quais você aprendeu a ser reconhecido.

Em alguns contextos, pode ser difícil separar:

**“quem eu sou” de “quem aprendi que preciso ser”.**

---

# 8. Página de resultado

Título:

# A face que você mostra ao mundo

Subtítulo:

**Conheça os papéis que aparecem com mais força na construção da sua Persona.**

Mostrar:

### Seu Índice de Identificação com a Persona

Exemplo:

**68%**

**Persona Presente**

Adicionar explicação correspondente à faixa.

---

# 9. Persona predominante

Exemplo:

# A Pessoa Forte

**78%**

Texto:

Você parece ter aprendido a ocupar um lugar de força diante das outras pessoas.

Mesmo em momentos difíceis, existe uma tendência a preservar uma imagem de estabilidade, resistência ou capacidade de suportar aquilo que está acontecendo.

Isso pode fazer com que as pessoas enxerguem você como alguém em quem podem confiar.

Mas também pode existir uma distância entre:

**o quanto os outros percebem que você precisa de apoio**

e

**o quanto você realmente precisa.**

---

# 10. Estrutura de cada resultado

Cada Persona deve possuir:

```ts
{
  code: "FO",
  name: "Pessoa Forte",

  socialMessage:
    "Nada me derruba.",

  description:
    "...",

  whatOthersSee:
    "...",

  whatMayStayHidden:
    "...",

  underlyingNeed:
    "...",

  whenItBecomesRigid:
    "...",

  integrationPath:
    "...",

  reflectionQuestions: [
    "...",
    "...",
    "..."
  ]
}
```

---

# 11. O que os outros veem

Mostrar:

### O que você costuma mostrar

Exemplo para Pessoa Forte:

- estabilidade;
- resistência;
- autocontrole;
- capacidade de enfrentar dificuldades.

---

# 12. O que pode ficar escondido

Mostrar:

### O que talvez apareça menos

Exemplo:

- necessidade de apoio;
- insegurança;
- cansaço;
- medo;
- vontade de não precisar ser forte naquele momento.

---

# 13. A necessidade por trás da Persona

Mostrar:

### O que essa Persona pode proteger

Exemplo:

**O desejo de continuar sendo visto como alguém capaz de suportar aquilo que acontece.**

---

# 14. Quando a Persona fica rígida

Mostrar:

### Quando esse papel ocupa espaço demais

Exemplo:

A força deixa de ser apenas uma característica e começa a se tornar uma obrigação:

**“Eu preciso ser forte.”**

Isso pode dificultar reconhecer momentos em que você gostaria de receber aquilo que normalmente oferece aos outros.

---

# 15. Caminho de integração

Mostrar:

### Aproximando o que você sente do que você mostra

Exemplo:

**Permitir que pessoas seguras conheçam também as partes suas que não precisam estar sempre resolvidas.**

O objetivo não é abandonar a Persona.

É permitir que ela seja uma das suas formas de existir — e não a única.

---

# 16. Personas complementares

Mostrar as duas próximas dimensões.

Exemplo:

**Pessoa Eficiente — 72%**

**Pessoa Exemplar — 65%**

Criar um pequeno texto relacionando as três.

Exemplo:

> Força, competência e responsabilidade parecem caminhar juntas na maneira como você aprendeu a ocupar seu espaço diante das outras pessoas.

---

# 17. Mapa da Persona

Mostrar todas as dimensões:

```text
Pessoa Forte          78%
Pessoa Eficiente      72%
Pessoa Exemplar       65%
Pessoa Protetora      61%
Pessoa Adaptável      57%
Pessoa Reconhecida    52%
Pessoa Controlada     48%
Pessoa Independente   44%
Pessoa Agradável      39%
Pessoa Autêntica      36%
```

Não apresentar como ranking competitivo.

Usar visual contemplativo semelhante aos demais resultados do Cura Interior.

---

# 18. Visualização conceitual

Criar também uma pequena representação:

## Por dentro × Por fora

A interface deve apresentar duas áreas visualmente relacionadas:

### O que mostro

Características associadas às Personas predominantes.

Exemplo:

```text
FORTE
CAPAZ
CONFIÁVEL
RESPONSÁVEL
```

### O que posso esconder

Características derivadas dos campos `whatMayStayHidden`.

Exemplo:

```text
CANSAÇO
DÚVIDA
NECESSIDADE DE APOIO
VULNERABILIDADE
```

Não apresentar isso como oposição absoluta.

A intenção é mostrar possíveis diferenças entre expressão externa e experiência interna.

---

# 19. Perguntas para reflexão

Mostrar três perguntas relacionadas à Persona predominante.

Exemplo para Pessoa Forte:

**Quando você percebeu que precisava ser forte?**

**Com quem você sente que pode baixar a guarda?**

**O que aconteceria se alguém percebesse que você também precisa de apoio?**

Criar três perguntas específicas para cada uma das 10 dimensões.

---

# 20. Integração com o Cura Interior

Adicionar o questionário à página de experiências.

Card:

# Conheça sua Persona

**Descubra quais versões de você aparecem diante dos outros — e o quanto elas se aproximam daquilo que você sente por dentro.**

CTA:

**Conhecer minha Persona**

Criar rotas:

```text
/persona
/persona/questionario
/persona/resultado
```

---

# 21. Arquitetura

Criar:

```text
src/
  data/
    personaQuestions.ts
    personaDimensions.ts

  lib/
    personaScoring.ts

  types/
    persona.ts
```

Reutilizar os componentes existentes do sistema de questionários sempre que possível.

Não duplicar componentes apenas para alterar conteúdo.

A lógica específica de pontuação da Persona deve permanecer separada das lógicas de Arquétipos e Sombra.

---

# 22. Persistência

Salvar:

```ts
{
  questionnaire: "persona",
  completedAt: Date,
  answers: [],
  scores: {},
  normalizedScores: {},
  personaIdentificationIndex: number,
  dominantPersona: "",
  complementaryPersonas: []
}
```

Manter compatibilidade com futura persistência em banco de dados.

---

# 23. Conexão com os outros questionários

Ao final, mostrar:

# Continue se conhecendo

Se o usuário ainda não realizou:

**Arquétipos**

> Descubra quais padrões aparecem com mais força na maneira como você vive e se relaciona com o mundo.

CTA:

**Descobrir meus arquétipos**

E:

**Sombra**

> Observe aspectos de você que podem aparecer através de incômodos, defesas e padrões difíceis de reconhecer.

CTA:

**Conhecer minha Sombra**

Se os testes já tiverem sido realizados, manter seus resultados disponíveis.

---

# 24. Princípio central da experiência

Toda a experiência deve partir desta relação:

```text
EU INTERNO
     ↓
expectativas
papéis
adaptação
pertencimento
proteção
     ↓
PERSONA
     ↓
EU QUE O MUNDO CONHECE
```

Não apresentar Persona como falsidade.

Não utilizar linguagem como:

- máscara falsa;
- personalidade falsa;
- mentira;
- fingimento;
- identidade falsa.

A Persona deve ser apresentada como uma construção necessária para nossa relação com o mundo.

A reflexão acontece quando o usuário percebe que determinado papel pode ter se tornado tão importante que começa a confundi-lo com sua identidade inteira.

---

# 25. Resultado esperado

O fluxo deve ser:

```text
Cura Interior
↓
Conheça sua Persona
↓
Introdução
↓
30 perguntas
↓
Índice de Identificação com a Persona
↓
Persona predominante
↓
O que você mostra
↓
O que pode ficar escondido
↓
O que essa Persona protege
↓
Quando o papel fica rígido
↓
Caminho de integração
↓
Personas complementares
↓
Mapa da Persona
↓
Por dentro × Por fora
↓
Perguntas para reflexão
↓
Continue se conhecendo
```

Manter consistência visual e de interação com os questionários de Arquétipos e Sombra já existentes no Cura Interior.

A experiência deve continuar parecendo parte do mesmo produto, e não um teste independente.