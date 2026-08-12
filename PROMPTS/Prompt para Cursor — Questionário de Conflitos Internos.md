# Prompt para Cursor — Questionário de Conflitos Internos

Crie uma nova experiência dentro do projeto **Cura Interior** chamada:

# Descubra seus Conflitos Internos

O objetivo deste questionário é ajudar o usuário a reconhecer tensões internas recorrentes entre necessidades, desejos, medos, valores e formas de agir que coexistem dentro dele.

A experiência deve investigar conflitos como:

- liberdade × segurança;
- controle × entrega;
- pertencimento × individualidade;
- razão × emoção;
- estabilidade × mudança;
- reconhecimento × autenticidade;
- cuidado com os outros × cuidado consigo;
- ação × recolhimento;
- perfeição × espontaneidade;
- proximidade × autonomia.

O questionário deve mostrar que conflitos internos não significam incoerência.

Eles surgem quando duas necessidades legítimas coexistem e disputam espaço.

A linguagem deve ser:

- simples;
- acolhedora;
- direta;
- íntima;
- não clínica;
- não moralista;
- fácil de responder;
- sem jargões excessivos.

O objetivo deve ser provocar a sensação:

**“Agora eu entendo melhor por que algumas escolhas parecem me dividir por dentro.”**

---

# 1. Objetivo da experiência

Ao final, o usuário deve receber um **Mapa de Conflitos Internos**, mostrando:

- conflito predominante;
- lado A;
- lado B;
- intensidade de cada polo;
- como essa tensão costuma aparecer;
- o que cada lado tenta proteger;
- o que acontece quando um polo domina;
- como integrar os dois lados;
- dois conflitos complementares;
- mapa completo;
- perguntas para reflexão.

O resultado não deve dizer:

> “Você é contraditório.”

Usar:

> “Duas necessidades importantes parecem puxar você em direções diferentes.”

---

# 2. Polaridades principais

Trabalhar com 10 conflitos internos.

Usar os seguintes códigos:

```ts
LS = Liberdade × Segurança
CE = Controle × Entrega
PI = Pertencimento × Individualidade
RE = Razão × Emoção
EM = Estabilidade × Mudança
RA = Reconhecimento × Autenticidade
CC = Cuidar dos Outros × Cuidar de Si
AR = Ação × Recolhimento
PE = Perfeição × Espontaneidade
PA = Proximidade × Autonomia
```

---

# 3. Estrutura de cada conflito

Cada conflito deve possuir:

```ts
{
  code: "LS",
  name: "Liberdade × Segurança",

  poleA: {
    name: "Liberdade",
    innerMessage: "Quero poder escolher e me mover."
  },

  poleB: {
    name: "Segurança",
    innerMessage: "Quero sentir que tenho chão."
  },

  description: "...",
  whatPoleAProtects: "...",
  whatPoleBProtects: "...",
  whenPoleADominates: "...",
  whenPoleBDominates: "...",
  integrationPath: "...",
  reflectionQuestions: ["...", "...", "..."]
}
```

---

# 4. O que cada conflito representa

## LS — Liberdade × Segurança

Polo A — Liberdade

Observar:

- desejo de escolha;
- necessidade de espaço;
- espontaneidade;
- abertura a possibilidades;
- resistência a restrições.

Polo B — Segurança

Observar:

- previsibilidade;
- proteção;
- continuidade;
- estabilidade;
- necessidade de saber onde pisa.

---

## CE — Controle × Entrega

Polo A — Controle

Observar:

- planejamento;
- antecipação;
- organização;
- necessidade de conduzir;
- desconforto com incerteza.

Polo B — Entrega

Observar:

- confiança;
- aceitação do imprevisível;
- abertura ao processo;
- capacidade de não controlar tudo;
- tolerância ao não saber.

---

## PI — Pertencimento × Individualidade

Polo A — Pertencimento

Observar:

- desejo de fazer parte;
- aceitação;
- identificação com grupos;
- importância de vínculos;
- medo de exclusão.

Polo B — Individualidade

Observar:

- desejo de preservar identidade própria;
- autonomia de opinião;
- expressão pessoal;
- diferença;
- resistência a se moldar demais.

---

## RE — Razão × Emoção

Polo A — Razão

Observar:

- análise;
- lógica;
- busca de clareza;
- organização mental;
- tentativa de compreender antes de agir.

Polo B — Emoção

Observar:

- intuição;
- sentimento;
- sensibilidade;
- percepção subjetiva;
- decisões guiadas por experiência interna.

---

## EM — Estabilidade × Mudança

Polo A — Estabilidade

Observar:

- rotina;
- continuidade;
- segurança no conhecido;
- consistência;
- valorização de estruturas.

Polo B — Mudança

Observar:

- renovação;
- novidade;
- transformação;
- curiosidade;
- desejo de romper ciclos.

---

## RA — Reconhecimento × Autenticidade

Polo A — Reconhecimento

Observar:

- desejo de ser percebido;
- importância da aprovação;
- reconhecimento do esforço;
- reputação;
- validação externa.

Polo B — Autenticidade

Observar:

- coerência consigo;
- expressão verdadeira;
- escolhas próprias;
- menor dependência do olhar externo;
- liberdade de ser diferente.

---

## CC — Cuidar dos Outros × Cuidar de Si

Polo A — Cuidar dos Outros

Observar:

- responsabilidade;
- disponibilidade;
- generosidade;
- ajuda;
- necessidade de estar presente.

Polo B — Cuidar de Si

Observar:

- descanso;
- limites;
- autopreservação;
- prioridade pessoal;
- capacidade de dizer não.

---

## AR — Ação × Recolhimento

Polo A — Ação

Observar:

- iniciativa;
- movimento;
- resolução;
- produtividade;
- necessidade de fazer.

Polo B — Recolhimento

Observar:

- pausa;
- silêncio;
- processamento interno;
- descanso;
- necessidade de observar antes de agir.

---

## PE — Perfeição × Espontaneidade

Polo A — Perfeição

Observar:

- exigência;
- preparação;
- medo de errar;
- padrão elevado;
- necessidade de fazer certo.

Polo B — Espontaneidade

Observar:

- improviso;
- experimentação;
- leveza;
- liberdade para errar;
- ação antes da certeza.

---

## PA — Proximidade × Autonomia

Polo A — Proximidade

Observar:

- vínculo;
- intimidade;
- presença;
- troca;
- desejo de compartilhar.

Polo B — Autonomia

Observar:

- espaço pessoal;
- independência;
- autossuficiência;
- liberdade dentro dos vínculos;
- necessidade de não se sentir absorvido.

---

# 5. Sistema de pontuação

Cada resposta deve poder pontuar:

- 3 pontos em um polo principal;
- 1 ponto em um polo secundário;
- 0 nos demais.

Exemplo:

```ts
{
  text: "Prefiro ter certeza antes de mudar algo importante.",
  score: {
    "LS_SECURITY": 3,
    "EM_STABILITY": 1
  }
}
```

Criar tipos separados para os polos.

Exemplo:

```ts
type ConflictPoleCode =
  | "LS_FREEDOM"
  | "LS_SECURITY"
  | "CE_CONTROL"
  | "CE_SURRENDER"
  | "PI_BELONGING"
  | "PI_INDIVIDUALITY"
  | "RE_REASON"
  | "RE_EMOTION"
  | "EM_STABILITY"
  | "EM_CHANGE"
  | "RA_RECOGNITION"
  | "RA_AUTHENTICITY"
  | "CC_OTHERS"
  | "CC_SELF"
  | "AR_ACTION"
  | "AR_WITHDRAWAL"
  | "PE_PERFECTION"
  | "PE_SPONTANEITY"
  | "PA_CLOSENESS"
  | "PA_AUTONOMY";
```

Normalizar cada polo:

```ts
percentage =
  (scoreObtido / scoreMaximoPossivelDoPolo) * 100;
```

---

# 6. Como calcular o conflito

O sistema não deve considerar apenas qual polo é mais alto.

Um conflito interno é mais relevante quando:

- os dois polos possuem pontuação significativa;
- existe tensão real entre eles.

Criar:

```ts
calculateConflictIntensity()
```

Sugestão inicial:

```ts
conflictIntensity =
  min(poleAPercentage, poleBPercentage)
```

Isso significa:

Liberdade 82%  
Segurança 76%

Intensidade do conflito:

76%

Mas:

Liberdade 84%  
Segurança 23%

não deve ser considerado um conflito tão forte, porque um lado é claramente dominante.

Também calcular:

```ts
poleDifference =
  Math.abs(poleAPercentage - poleBPercentage);
```

Quanto menor a diferença e maiores os dois valores, maior a tensão entre os polos.

Documentar a fórmula para ajustes futuros.

---

# 7. Questionário

Criar 30 perguntas.

Cada pergunta deve explorar situações comuns e oferecer alternativas que façam sentido sem parecer que existe resposta melhor.

---

## 01

Quando aparece uma oportunidade que pode mudar bastante sua vida...

A. Fico animado com a possibilidade de algo novo.  
EM_CHANGE 3, LS_FREEDOM 1

B. Primeiro penso no que posso perder.  
LS_SECURITY 3, EM_STABILITY 1

C. Quero entender todas as consequências antes de decidir.  
CE_CONTROL 3, RE_REASON 1

D. Costumo perceber primeiro como aquilo me faz sentir.  
RE_EMOTION 3

---

## 02

Quando seus planos mudam de última hora...

A. Tento reorganizar tudo imediatamente.  
CE_CONTROL 3

B. Fico incomodado porque gosto de saber o que vai acontecer.  
EM_STABILITY 3, LS_SECURITY 1

C. Dependendo da mudança, posso achar até interessante.  
EM_CHANGE 3

D. Tento aceitar e ver o que acontece.  
CE_SURRENDER 3

---

## 03

Quando você está em um grupo e pensa diferente da maioria...

A. Costumo dizer o que penso.  
PI_INDIVIDUALITY 3, RA_AUTHENTICITY 1

B. Avalio se vale a pena criar um conflito.  
PI_BELONGING 3, RE_REASON 1

C. Posso começar a questionar minha própria opinião.  
PI_BELONGING 3

D. Prefiro manter minha posição, mesmo sem falar.  
PI_INDIVIDUALITY 3

---

## 04

Quando precisa tomar uma decisão importante...

A. Faço listas, comparo possibilidades e tento ser racional.  
RE_REASON 3, CE_CONTROL 1

B. Percebo qual opção parece mais certa por dentro.  
RE_EMOTION 3

C. Tento combinar o que faz sentido com o que sinto.  
RE_REASON 1, RE_EMOTION 1

D. Adio um pouco quando razão e emoção apontam direções diferentes.  
RE_REASON 1, RE_EMOTION 1

---

## 05

Quando uma rotina começa a ficar previsível demais...

A. Sinto tranquilidade.  
EM_STABILITY 3

B. Começo a sentir necessidade de alguma novidade.  
EM_CHANGE 3

C. Gosto da estabilidade, mas preciso de pequenos espaços de mudança.  
EM_STABILITY 2, EM_CHANGE 2

D. Tenho vontade de romper completamente com a rotina.  
EM_CHANGE 3, LS_FREEDOM 1

---

## 06

Quando alguém importante desaprova uma escolha sua...

A. Isso pesa bastante para mim.  
RA_RECOGNITION 3, PI_BELONGING 1

B. Escuto, mas tento manter o que faz sentido para mim.  
RA_AUTHENTICITY 3

C. Tenho vontade de explicar até a pessoa entender.  
RA_RECOGNITION 2, RA_AUTHENTICITY 1

D. Prefiro fazer minha escolha sem precisar justificar demais.  
RA_AUTHENTICITY 3, LS_FREEDOM 1

---

## 07

Quando você está cansado e alguém precisa da sua ajuda...

A. Minha primeira reação é tentar ajudar.  
CC_OTHERS 3

B. Avalio se tenho energia antes de responder.  
CC_SELF 3

C. Ajudo, mas às vezes fico ressentido depois.  
CC_OTHERS 3, CC_SELF 1

D. Tenho aprendido a dizer que não posso naquele momento.  
CC_SELF 3

---

## 08

Quando algo está te incomodando...

A. Quero fazer alguma coisa logo.  
AR_ACTION 3

B. Preciso ficar sozinho e entender o que estou sentindo.  
AR_WITHDRAWAL 3

C. Tento resolver e depois penso sobre o que aconteceu.  
AR_ACTION 3, AR_WITHDRAWAL 1

D. Espero até sentir que estou pronto para agir.  
AR_WITHDRAWAL 3

---

## 09

Quando precisa entregar algo importante...

A. Quero revisar até sentir que está realmente bom.  
PE_PERFECTION 3

B. Prefiro entregar e melhorar depois.  
PE_SPONTANEITY 3

C. Tenho dificuldade de saber quando parar.  
PE_PERFECTION 3

D. Às vezes começo antes de saber exatamente como vou fazer.  
PE_SPONTANEITY 3

---

## 10

Em relações muito próximas...

A. Gosto de compartilhar bastante da minha vida.  
PA_CLOSENESS 3

B. Preciso preservar bastante espaço para mim.  
PA_AUTONOMY 3

C. Quero proximidade, mas posso me sentir sufocado se não tiver espaço.  
PA_CLOSENESS 2, PA_AUTONOMY 2

D. Tenho facilidade em ficar próximo sem abrir mão da minha independência.  
PA_AUTONOMY 2, PA_CLOSENESS 1

---

## 11

Qual dessas situações te deixa mais dividido?

A. Uma escolha segura que limita minhas possibilidades.  
LS_FREEDOM 3, LS_SECURITY 3

B. Uma escolha livre que traz muita incerteza.  
LS_FREEDOM 3, LS_SECURITY 3

C. Uma decisão em que tenho pouco controle.  
CE_CONTROL 3

D. Uma decisão em que preciso abrir mão de algo estável.  
EM_STABILITY 3, EM_CHANGE 1

---

## 12

Quando algo foge totalmente das suas mãos...

A. Tento encontrar alguma parte que ainda consigo controlar.  
CE_CONTROL 3

B. Fico bastante desconfortável.  
CE_CONTROL 3, LS_SECURITY 1

C. Tento aceitar que nem tudo depende de mim.  
CE_SURRENDER 3

D. Às vezes sinto alívio por não precisar decidir tudo.  
CE_SURRENDER 3

---

## 13

Quando você entra em um grupo novo...

A. Quero encontrar um lugar em que me sinta incluído.  
PI_BELONGING 3

B. Quero conseguir continuar sendo eu mesmo.  
PI_INDIVIDUALITY 3

C. Primeiro observo como o grupo funciona.  
PI_BELONGING 2, RE_REASON 1

D. Posso me adaptar no início e mostrar mais de mim aos poucos.  
PI_BELONGING 2, PI_INDIVIDUALITY 1

---

## 14

Quando seu coração e sua cabeça discordam...

A. Normalmente sigo a cabeça.  
RE_REASON 3

B. Normalmente sigo o que sinto.  
RE_EMOTION 3

C. Fico dividido até conseguir justificar emocionalmente e racionalmente.  
RE_REASON 3, RE_EMOTION 3

D. Depende muito da importância da decisão.  
RE_REASON 1, RE_EMOTION 1

---

## 15

Quando algo funciona bem há muito tempo...

A. Prefiro não mexer sem necessidade.  
EM_STABILITY 3

B. Começo a pensar em como poderia ser diferente.  
EM_CHANGE 3

C. Gosto de melhorar aos poucos.  
EM_STABILITY 2, EM_CHANGE 1

D. Às vezes tenho vontade de começar tudo de novo.  
EM_CHANGE 3

---

## 16

Quando percebe que está fazendo algo principalmente para agradar...

A. Continuo se aquilo for importante para a relação.  
RA_RECOGNITION 3, PI_BELONGING 1

B. Isso costuma me incomodar.  
RA_AUTHENTICITY 3

C. Tento encontrar um meio-termo.  
RA_RECOGNITION 2, RA_AUTHENTICITY 2

D. Tenho vontade de parar e perguntar o que eu realmente quero.  
RA_AUTHENTICITY 3

---

## 17

Quando você percebe que está colocando todo mundo antes de si...

A. Sinto que é minha responsabilidade.  
CC_OTHERS 3

B. Começo a perceber que preciso me preservar.  
CC_SELF 3

C. Tenho dificuldade de saber onde termina cuidado e começa sobrecarga.  
CC_OTHERS 3, CC_SELF 3

D. Tento reorganizar meus limites.  
CC_SELF 3

---

## 18

Quando está passando por uma fase difícil...

A. Preciso continuar fazendo coisas para não parar.  
AR_ACTION 3

B. Tenho vontade de me afastar e ficar quieto.  
AR_WITHDRAWAL 3

C. Oscilo entre querer resolver tudo e desaparecer por algum tempo.  
AR_ACTION 3, AR_WITHDRAWAL 3

D. Tento criar espaços de ação e descanso.  
AR_ACTION 1, AR_WITHDRAWAL 1

---

## 19

Quando começa um projeto novo...

A. Quero entender tudo antes de começar.  
PE_PERFECTION 3, CE_CONTROL 1

B. Prefiro começar e descobrir durante o caminho.  
PE_SPONTANEITY 3

C. Tenho vontade de começar rápido, mas depois fico corrigindo muito.  
PE_SPONTANEITY 2, PE_PERFECTION 2

D. Demoro para começar porque quero fazer direito.  
PE_PERFECTION 3

---

## 20

Quando gosta muito de alguém...

A. Quero estar bastante presente.  
PA_CLOSENESS 3

B. Mesmo gostando, preciso de muito espaço pessoal.  
PA_AUTONOMY 3

C. Às vezes quero proximidade e distância quase ao mesmo tempo.  
PA_CLOSENESS 3, PA_AUTONOMY 3

D. Tento construir proximidade sem abrir mão da minha individualidade.  
PA_CLOSENESS 2, PA_AUTONOMY 2

---

## 21

Qual frase parece mais próxima de uma tensão sua?

A. “Quero liberdade, mas tenho medo de perder meu chão.”  
LS_FREEDOM 3, LS_SECURITY 3

B. “Quero confiar mais, mas sinto que preciso controlar.”  
CE_CONTROL 3, CE_SURRENDER 3

C. “Quero pertencer, mas não quero deixar de ser eu.”  
PI_BELONGING 3, PI_INDIVIDUALITY 3

D. “Quero sentir, mas também preciso entender.”  
RE_REASON 3, RE_EMOTION 3

---

## 22

Qual dessas situações parece mais familiar?

A. Querer estabilidade e ao mesmo tempo desejar uma mudança grande.  
EM_STABILITY 3, EM_CHANGE 3

B. Querer reconhecimento, mas não querer viver para agradar.  
RA_RECOGNITION 3, RA_AUTHENTICITY 3

C. Querer cuidar das pessoas, mas estar cansado de sempre cuidar.  
CC_OTHERS 3, CC_SELF 3

D. Querer agir, mas sentir necessidade de parar.  
AR_ACTION 3, AR_WITHDRAWAL 3

---

## 23

Quando algo não sai perfeito...

A. Fico bastante incomodado.  
PE_PERFECTION 3

B. Tento aceitar que faz parte.  
PE_SPONTANEITY 3

C. Sei que não precisa estar perfeito, mas mesmo assim me cobro.  
PE_PERFECTION 3, PE_SPONTANEITY 1

D. Às vezes prefiro nem começar se acho que não vou fazer bem.  
PE_PERFECTION 3

---

## 24

Quando uma relação começa a ocupar muito espaço na sua vida...

A. Gosto da proximidade.  
PA_CLOSENESS 3

B. Começo a sentir necessidade de recuperar meu espaço.  
PA_AUTONOMY 3

C. Posso sentir medo de perder minha individualidade.  
PA_AUTONOMY 3, PI_INDIVIDUALITY 1

D. Posso sentir medo de criar distância demais.  
PA_CLOSENESS 3, PI_BELONGING 1

---

## 25

Ao imaginar uma vida ideal...

A. Quero ter segurança sem me sentir preso.  
LS_SECURITY 3, LS_FREEDOM 3

B. Quero ter estrutura sem precisar controlar tudo.  
CE_CONTROL 3, CE_SURRENDER 3

C. Quero fazer parte sem precisar me adaptar demais.  
PI_BELONGING 3, PI_INDIVIDUALITY 3

D. Quero conseguir pensar e sentir sem precisar escolher apenas um.  
RE_REASON 3, RE_EMOTION 3

---

## 26

Quando pensa em mudar alguma coisa importante na sua vida...

A. Quero sentir segurança antes.  
EM_STABILITY 3, LS_SECURITY 1

B. Sinto entusiasmo com a possibilidade de recomeçar.  
EM_CHANGE 3

C. Fico dividido entre preservar o que construí e experimentar algo novo.  
EM_STABILITY 3, EM_CHANGE 3

D. Costumo esperar até a mudança parecer inevitável.  
EM_STABILITY 3

---

## 27

Quando percebe que as pessoas esperam algo de você...

A. Quero corresponder.  
RA_RECOGNITION 3

B. Quero saber primeiro se aquilo combina comigo.  
RA_AUTHENTICITY 3

C. Posso querer corresponder e ao mesmo tempo sentir vontade de fazer diferente.  
RA_RECOGNITION 3, RA_AUTHENTICITY 3

D. Tenho dificuldade de separar minha vontade da expectativa dos outros.  
RA_RECOGNITION 3, RA_AUTHENTICITY 2

---

## 28

Quando você precisa escolher entre ajudar alguém e cuidar de você...

A. Normalmente escolho ajudar.  
CC_OTHERS 3

B. Tenho aprendido a me escolher também.  
CC_SELF 3

C. Qualquer escolha costuma trazer culpa.  
CC_OTHERS 3, CC_SELF 3

D. Tento avaliar quem realmente precisa mais naquele momento.  
CC_OTHERS 1, CC_SELF 1

---

## 29

Quando você sente que precisa de uma pausa...

A. Paro quando consigo.  
AR_WITHDRAWAL 3

B. Tenho dificuldade porque sempre existe algo para fazer.  
AR_ACTION 3

C. Mesmo descansando, fico pensando no que deveria estar fazendo.  
AR_ACTION 3, AR_WITHDRAWAL 2

D. Preciso me afastar bastante para realmente descansar.  
AR_WITHDRAWAL 3

---

## 30

Sem pensar demais, qual dessas tensões parece mais familiar?

A. “Quero fazer direito, mas também queria conseguir simplesmente tentar.”  
PE_PERFECTION 3, PE_SPONTANEITY 3

B. “Quero estar perto, mas também preciso do meu espaço.”  
PA_CLOSENESS 3, PA_AUTONOMY 3

C. “Quero cuidar das pessoas, mas também preciso cuidar de mim.”  
CC_OTHERS 3, CC_SELF 3

D. “Quero agir, mas também sinto que preciso parar.”  
AR_ACTION 3, AR_WITHDRAWAL 3

---

# 8. Resultado principal

Título:

# A tensão que mais aparece em você

Exemplo:

# Liberdade × Segurança

**Intensidade do conflito: 78%**

Mostrar os dois polos:

**Liberdade — 84%**

**Segurança — 78%**

Texto:

Você parece desejar bastante espaço para escolher, experimentar e construir seu próprio caminho.

Ao mesmo tempo, existe uma necessidade igualmente importante de sentir que há estabilidade, previsibilidade e algum tipo de chão antes de se mover.

Por isso, algumas decisões podem parecer difíceis mesmo quando você sabe o que deseja:

uma parte quer avançar;

outra quer ter certeza de que será seguro.

---

# 9. O que cada lado tenta proteger

Mostrar dois blocos.

## Liberdade tenta proteger

- autonomia;
- movimento;
- possibilidades;
- identidade própria;
- direito de escolher.

## Segurança tenta proteger

- estabilidade;
- continuidade;
- proteção;
- previsibilidade;
- sensação de chão.

---

# 10. Quando um lado domina

Mostrar:

### Quando a Liberdade ocupa espaço demais

Exemplo:

Pode surgir dificuldade em sustentar compromissos, rotinas ou escolhas que começam a parecer limitantes.

### Quando a Segurança ocupa espaço demais

Exemplo:

Pode surgir dificuldade em experimentar caminhos novos sem garantias suficientes.

---

# 11. Integração

Título:

# Quando os dois lados começam a conversar

Texto exemplo:

O objetivo não é escolher entre liberdade e segurança.

É construir formas de experimentar movimento sem abandonar completamente aquilo que dá sustentação.

Pergunta-chave:

**“Como posso me mover sem perder meu chão?”**

---

# 12. Conflitos complementares

Mostrar os dois próximos conflitos mais intensos.

Exemplo:

**Controle × Entrega — 71%**

**Pertencimento × Individualidade — 65%**

Criar um pequeno texto relacionando os três conflitos.

---

# 13. Mapa completo

Mostrar:

```text
Liberdade × Segurança               78%
Controle × Entrega                  71%
Pertencimento × Individualidade     65%
Reconhecimento × Autenticidade      61%
Ação × Recolhimento                 58%
Proximidade × Autonomia             55%
Estabilidade × Mudança              49%
Perfeição × Espontaneidade          46%
Cuidar dos Outros × Cuidar de Si    42%
Razão × Emoção                      39%
```

Não usar aparência de ranking competitivo.

---

# 14. Visualização dos polos

Para cada conflito, criar uma representação horizontal:

```text
LIBERDADE ━━━━━━━━━━━●━━━━ SEGURANÇA
```

Mas não representar simplesmente um ponto entre dois extremos.

Como os dois polos podem ser altos simultaneamente, mostrar duas intensidades.

Exemplo:

```text
Liberdade   ████████████████ 84%
Segurança   ███████████████  78%
```

O objetivo é mostrar coexistência, não oposição exclusiva.

---

# 15. Tipo de conflito

Criar três categorias de leitura:

## Assimétrico

Um polo aparece claramente mais forte.

Exemplo:

Liberdade 82%  
Segurança 39%

---

## Equilibrado

Os dois polos aparecem em intensidade semelhante e moderada.

Exemplo:

Liberdade 59%  
Segurança 55%

---

## Tensão elevada

Os dois polos aparecem fortes simultaneamente.

Exemplo:

Liberdade 86%  
Segurança 81%

Esse terceiro cenário deve receber maior destaque.

---

# 16. Perguntas para reflexão

Criar três perguntas específicas para cada conflito.

## Liberdade × Segurança

- Onde você sente que precisa escolher entre liberdade e estabilidade?
- O que precisa existir para você se sentir seguro o suficiente para experimentar algo novo?
- Em quais situações segurança começa a parecer prisão?

## Controle × Entrega

- O que você teme que aconteça quando não consegue controlar uma situação?
- Em quais áreas da vida você consegue confiar mais no processo?
- O que seria possível deixar acontecer sem tentar organizar imediatamente?

## Pertencimento × Individualidade

- Em quais grupos você consegue pertencer sem precisar se adaptar demais?
- Quando ser aceito começa a custar alguma parte de você?
- O que você protege quando escolhe ser diferente?

## Razão × Emoção

- Em quais decisões sua cabeça e seus sentimentos costumam discordar?
- Qual lado você aprendeu a confiar mais?
- O que mudaria se ambos tivessem espaço na decisão?

## Estabilidade × Mudança

- O que você gostaria de mudar, mas teme perder?
- O que a estabilidade oferece que você não quer abandonar?
- Em que momento permanecer começa a pesar mais do que mudar?

## Reconhecimento × Autenticidade

- Quais escolhas você faria diferente se ninguém estivesse olhando?
- De quem você mais busca aprovação?
- Onde reconhecimento e autenticidade conseguem coexistir?

## Cuidar dos Outros × Cuidar de Si

- Quando cuidar começa a virar obrigação?
- O que você sente quando escolhe a si mesmo?
- Quem cuida de você quando você está cansado de cuidar?

## Ação × Recolhimento

- Como você percebe que chegou a hora de parar?
- Quando agir te ajuda e quando serve para evitar sentir?
- O que costuma aparecer quando você finalmente fica em silêncio?

## Perfeição × Espontaneidade

- O que você faria hoje se não precisasse fazer perfeitamente?
- O que um erro parece significar para você?
- Em que situações improvisar traz liberdade?

## Proximidade × Autonomia

- Quanto espaço você precisa para continuar se sentindo você dentro de uma relação?
- Em quais momentos proximidade começa a parecer invasão?
- O que ajuda você a permanecer conectado sem perder sua autonomia?

---

# 17. Integração com Cura Interior

Adicionar esta experiência à área de questionários.

Card:

# Conflitos Internos

**Descubra quais necessidades parecem puxar você em direções diferentes — e por que algumas escolhas são tão difíceis.**

CTA:

**Conhecer meus conflitos**

Criar rotas:

```text
/conflitos-internos
/conflitos-internos/questionario
/conflitos-internos/resultado
```

---

# 18. Arquitetura

Criar:

```text
src/
  data/
    internalConflictQuestions.ts
    internalConflicts.ts

  lib/
    internalConflictScoring.ts

  types/
    internalConflicts.ts
```

Reutilizar componentes existentes do sistema de questionários sempre que possível.

Manter a lógica de conflitos separada das outras experiências porque este questionário trabalha com pares de polos.

---

# 19. Persistência

Salvar:

```ts
{
  questionnaire: "internal-conflicts",
  completedAt: Date,
  answers: [],
  poleScores: {},
  normalizedPoleScores: {},
  conflictScores: {},
  dominantConflict: "",
  complementaryConflicts: [],
  dominantConflictType: ""
}
```

---

# 20. Conexão com Necessidades Emocionais

Preparar a arquitetura para futuramente relacionar os resultados deste questionário com **Necessidades Emocionais**.

Exemplo:

Se o usuário possui:

Autonomia alta  
Segurança alta

e apresenta:

Liberdade × Segurança como conflito predominante,

o sistema poderá futuramente criar uma leitura combinada.

Não implementar ainda interpretação automática entre questionários.

Apenas preparar estrutura de dados para permitir isso futuramente.

---

# 21. Conexão com os demais questionários

Ao final:

# Continue se conhecendo

Mostrar cards para:

- Arquétipos
- Sombra
- Persona
- Necessidades Emocionais

Indicar resultados já concluídos.

---

# 22. Princípio central

Toda a experiência deve partir desta ideia:

```text
UMA PARTE DE MIM QUER...
        ↘
         TENSÃO
        ↗
OUTRA PARTE DE MIM TAMBÉM QUER...
```

Não existe necessariamente um lado certo.

Os dois polos podem proteger necessidades importantes.

O objetivo é:

```text
RECONHECER
↓
COMPREENDER
↓
NEGOCIAR
↓
INTEGRAR
```

---

# 23. Resultado esperado

Fluxo:

```text
Cura Interior
↓
Conflitos Internos
↓
Introdução
↓
30 perguntas
↓
Conflito predominante
↓
Intensidade dos dois polos
↓
O que cada lado protege
↓
Quando cada polo domina
↓
Caminho de integração
↓
Conflitos complementares
↓
Mapa completo
↓
Perguntas para reflexão
↓
Continue se conhecendo
```

Manter consistência visual e textual com os demais questionários do Cura Interior.

A interface deve continuar simples e contemplativa.

A complexidade deve estar na leitura das tensões internas, não na experiência de responder.