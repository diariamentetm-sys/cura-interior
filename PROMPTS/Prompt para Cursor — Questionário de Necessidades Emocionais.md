# Prompt para Cursor — Questionário de Necessidades Emocionais

Crie uma nova experiência dentro do projeto **Cura Interior** chamada:

# Descubra suas Necessidades Emocionais

O objetivo deste questionário é ajudar o usuário a perceber quais necessidades emocionais exercem maior influência sobre suas escolhas, relações, expectativas e reações.

A experiência deve investigar aquilo que a pessoa tende a buscar, consciente ou inconscientemente, para sentir:

- segurança;
- valor;
- pertencimento;
- autonomia;
- conexão;
- reconhecimento;
- controle;
- acolhimento;
- estabilidade;
- liberdade.

A linguagem deve ser simples, íntima e cotidiana.

O questionário não deve soar clínico, diagnóstico ou terapêutico.

A sensação deve ser de:

**“Agora eu consigo entender melhor o que realmente preciso.”**

---

# 1. Objetivo da experiência

Ao final, o usuário deve receber um **Mapa de Necessidades Emocionais**, mostrando:

- necessidade predominante;
- duas necessidades complementares;
- intensidade das demais necessidades;
- situações em que aquela necessidade costuma aparecer;
- como ela pode influenciar escolhas e relacionamentos;
- sinais de quando ela está suficientemente atendida;
- sinais de quando ela começa a ocupar espaço demais;
- perguntas para reflexão.

O resultado não deve dizer:

> “Você precisa disso porque tem um problema.”

Usar linguagem como:

> “Esta parece ser uma necessidade emocional importante para você.”

---

# 2. Dimensões

Trabalhar com 10 necessidades emocionais principais.

Usar os seguintes códigos:

```ts
SE = Segurança
RE = Reconhecimento
AU = Autonomia
PE = Pertencimento
CO = Conexão
CT = Controle
AC = Acolhimento
ES = Estabilidade
LI = Liberdade
SI = Significado
```

---

# 3. O que cada dimensão representa

## SE — Segurança

Mensagem interna:

**“Preciso sentir que estou seguro.”**

Observar:

- necessidade de proteção;
- previsibilidade;
- confiança;
- sensação de que algo ruim não está prestes a acontecer;
- importância de ter apoio em momentos difíceis.

---

## RE — Reconhecimento

Mensagem interna:

**“Preciso sentir que meu valor é percebido.”**

Observar:

- importância de elogios;
- validação;
- reconhecimento do esforço;
- desejo de sentir-se valorizado;
- impacto de passar despercebido.

---

## AU — Autonomia

Mensagem interna:

**“Preciso sentir que minhas escolhas são minhas.”**

Observar:

- independência;
- liberdade de decisão;
- resistência a imposições;
- necessidade de espaço;
- desconforto com interferência excessiva.

---

## PE — Pertencimento

Mensagem interna:

**“Preciso sentir que faço parte.”**

Observar:

- necessidade de inclusão;
- aceitação;
- identificação com grupos;
- medo de exclusão;
- importância de ter um lugar entre as pessoas.

---

## CO — Conexão

Mensagem interna:

**“Preciso sentir que existe vínculo verdadeiro.”**

Observar:

- intimidade;
- proximidade emocional;
- troca;
- desejo de ser conhecido profundamente;
- importância das relações significativas.

---

## CT — Controle

Mensagem interna:

**“Preciso sentir que consigo conduzir o que está acontecendo.”**

Observar:

- organização;
- antecipação;
- planejamento;
- previsibilidade;
- desconforto com caos e incerteza.

---

## AC — Acolhimento

Mensagem interna:

**“Preciso sentir que posso baixar a guarda.”**

Observar:

- desejo de ser cuidado;
- escuta;
- compreensão;
- permissão para descansar;
- necessidade de receber apoio sem precisar merecê-lo.

---

## ES — Estabilidade

Mensagem interna:

**“Preciso sentir que as coisas têm continuidade.”**

Observar:

- rotina;
- consistência;
- permanência;
- previsibilidade de longo prazo;
- dificuldade com mudanças frequentes.

---

## LI — Liberdade

Mensagem interna:

**“Preciso sentir que posso me mover e escolher outros caminhos.”**

Observar:

- espaço;
- espontaneidade;
- variedade;
- desejo de experimentar;
- desconforto com restrições.

---

## SI — Significado

Mensagem interna:

**“Preciso sentir que aquilo que vivo faz sentido.”**

Observar:

- propósito;
- coerência;
- profundidade;
- desejo de compreender experiências;
- necessidade de conectar acontecimentos a algo maior.

---

# 4. Estrutura do questionário

Criar 30 perguntas.

Cada pergunta deve ter 4 alternativas.

As perguntas devem explorar situações como:

- decisões;
- relações;
- trabalho;
- rotina;
- conflitos;
- mudanças;
- frustrações;
- elogios;
- críticas;
- incerteza;
- intimidade;
- pertencimento;
- escolhas pessoais;
- momentos difíceis.

Apresentar uma pergunta por tela.

Nunca mostrar qual necessidade está sendo pontuada.

---

# 5. Sistema de pontuação

Cada alternativa pode atribuir:

- 3 pontos para uma necessidade principal;
- 1 ponto para uma necessidade secundária;
- 0 para as demais.

Exemplo:

```ts
{
  text: "Fico mais tranquilo quando sei exatamente o que vai acontecer.",
  score: {
    SE: 3,
    CT: 1
  }
}
```

Normalizar os resultados:

```ts
percentage =
  (scoreObtido / scoreMaximoPossivelDaNecessidade) * 100;
```

Não comparar apenas pontuação bruta.

---

# 6. Questionário

## 01

Quando algo importante está indefinido, o que mais te ajudaria?

A. Saber que existe alguém em quem posso confiar.  
SE 3, AC 1

B. Ter mais informações sobre o que vai acontecer.  
CT 3, SE 1

C. Poder decidir sozinho o que fazer.  
AU 3, LI 1

D. Sentir que, de algum modo, aquilo ainda faz sentido.  
SI 3

---

## 02

Depois de uma semana muito difícil, o que mais tende a fazer falta?

A. Descansar sem precisar explicar nada.  
AC 3

B. Estar perto de alguém com quem posso ser totalmente eu.  
CO 3

C. Sentir que consegui dar conta do que precisava.  
RE 3, CT 1

D. Ter algum tempo só para mim.  
AU 3, LI 1

---

## 03

Quando você recebe uma crítica, o que mais ajuda a recuperar seu equilíbrio?

A. Entender exatamente o que aconteceu.  
CT 3

B. Saber que aquilo não muda o valor que as pessoas importantes enxergam em mim.  
RE 3, CO 1

C. Ter liberdade para decidir o que fazer com aquela crítica.  
AU 3

D. Conversar com alguém que realmente me compreenda.  
AC 3, CO 1

---

## 04

Em um relacionamento importante, o que mais te faria sentir falta de algo essencial?

A. Não conseguir conversar profundamente.  
CO 3

B. Sentir que minhas escolhas estão sendo controladas.  
AU 3, LI 1

C. Não saber se posso contar com a pessoa.  
SE 3

D. Sentir que não sou valorizado pelo que ofereço.  
RE 3

---

## 05

Qual dessas situações mais traz sensação de tranquilidade?

A. Saber o que esperar dos próximos dias.  
ES 3, SE 1

B. Ter pessoas próximas em quem confio.  
SE 3, CO 1

C. Ter liberdade para mudar de planos.  
LI 3

D. Sentir que estou no caminho certo para mim.  
SI 3

---

## 06

Quando você conquista algo importante...

A. Gosto de sentir que outras pessoas perceberam meu esforço.  
RE 3

B. Gosto de compartilhar com pessoas que fazem parte da minha vida.  
CO 3, PE 1

C. O mais importante é saber que escolhi aquele caminho por mim mesmo.  
AU 3

D. Fico especialmente feliz quando aquilo representa algo maior para mim.  
SI 3

---

## 07

Quando você chega a um lugar onde não conhece ninguém...

A. Procuro alguém com quem eu possa me conectar.  
PE 3, CO 1

B. Gosto de observar primeiro para entender como aquele ambiente funciona.  
SE 3, CT 1

C. Não me incomodo em ficar mais independente.  
AU 3

D. Quero sentir que posso agir naturalmente.  
LI 3

---

## 08

Quando você está confuso sobre uma decisão...

A. Preciso de tempo e espaço para ouvir a mim mesmo.  
AU 3, SI 1

B. Quero conversar com alguém que me conheça bem.  
CO 3, AC 1

C. Tento organizar as opções até enxergar um caminho seguro.  
CT 3, SE 1

D. Penso no que me deixará mais livre no futuro.  
LI 3

---

## 09

O que mais costuma incomodar em uma mudança inesperada?

A. Não saber o que vai acontecer.  
SE 3

B. Perder uma rotina que funcionava bem.  
ES 3

C. Sentir que não tive escolha.  
AU 3

D. Ter que reorganizar tudo rapidamente.  
CT 3

---

## 10

Quando você está emocionalmente cansado...

A. Preciso de alguém que me escute sem tentar resolver tudo.  
AC 3, CO 1

B. Preciso ficar sozinho por um tempo.  
AU 3, LI 1

C. Preciso recuperar minha rotina.  
ES 3

D. Preciso entender por que estou me sentindo daquele jeito.  
SI 3

---

## 11

Qual sensação costuma ser mais gratificante?

A. Ser reconhecido por algo que fiz bem.  
RE 3

B. Sentir que realmente pertenço a algum lugar.  
PE 3

C. Ter liberdade para escolher meu próprio caminho.  
LI 3, AU 1

D. Ter alguém com quem posso falar sobre qualquer coisa.  
CO 3

---

## 12

Quando alguém tenta decidir algo importante por você...

A. Fico bastante incomodado.  
AU 3

B. Quero entender por que a pessoa acha que sabe o que é melhor.  
CT 3

C. Tenho vontade de me afastar.  
LI 3

D. O que mais me incomoda é sentir que minha opinião não foi considerada.  
RE 3

---

## 13

Em uma amizade, o que mais pesa para você?

A. Saber que a pessoa estará presente quando eu precisar.  
SE 3

B. Poder falar sobre coisas que não falaria com qualquer pessoa.  
CO 3

C. Sentir que posso ser eu mesmo sem medo de julgamento.  
AC 3

D. Sentir que fazemos parte da vida um do outro.  
PE 3

---

## 14

Quando você pensa no futuro, qual cenário traz mais conforto?

A. Uma vida estável e previsível.  
ES 3, SE 1

B. Uma vida cheia de possibilidades e escolhas.  
LI 3, AU 1

C. Uma vida cercada por pessoas importantes.  
PE 3, CO 1

D. Uma vida que tenha significado para mim.  
SI 3

---

## 15

Quando você faz muito por alguém e isso não é percebido...

A. Fico bastante frustrado.  
RE 3

B. Começo a questionar se aquele vínculo é recíproco.  
CO 3

C. Penso que talvez eu esteja dando mais do que gostaria.  
AU 3

D. Fico pensando se ainda faz sentido continuar fazendo aquilo.  
SI 3

---

## 16

Quando a rotina muda demais...

A. Tenho dificuldade para me sentir centrado.  
ES 3

B. Tento criar rapidamente uma nova organização.  
CT 3

C. Às vezes gosto porque sinto que estou mais livre.  
LI 3

D. O que mais importa é sentir que continuo tendo apoio.  
SE 3

---

## 17

Quando você está em um grupo...

A. Gosto de sentir que minha presença é valorizada.  
RE 3, PE 1

B. Gosto de sentir que faço parte naturalmente.  
PE 3

C. Prefiro poder manter minha individualidade.  
AU 3

D. Gosto quando consigo criar uma conexão verdadeira com algumas pessoas.  
CO 3

---

## 18

Quando tudo parece fora do lugar...

A. Começo a organizar o que consigo.  
CT 3

B. Procuro algo familiar para recuperar a sensação de estabilidade.  
ES 3

C. Procuro alguém que me ajude a sentir que não estou sozinho.  
SE 3, AC 1

D. Preciso compreender o que aquela fase está tentando me mostrar.  
SI 3

---

## 19

Qual situação seria mais difícil para você?

A. Sentir que ninguém percebe seu esforço.  
RE 3

B. Sentir que não tem ninguém realmente próximo.  
CO 3

C. Sentir que não pertence a lugar nenhum.  
PE 3

D. Sentir que sua vida está sendo decidida por outras pessoas.  
AU 3

---

## 20

Quando você imagina um dia realmente bom...

A. As coisas acontecem de maneira tranquila e previsível.  
ES 3

B. Tenho tempo para fazer o que quiser.  
LI 3

C. Estou perto de pessoas que amo.  
CO 3, PE 1

D. Sinto que fiz algo importante ou significativo.  
SI 3, RE 1

---

## 21

Quando você está com medo...

A. Quero saber exatamente quais são as minhas opções.  
CT 3

B. Quero saber que alguém estará comigo.  
SE 3, AC 1

C. Quero ter espaço para tomar minha própria decisão.  
AU 3

D. Quero entender o que aquele medo está dizendo sobre mim.  
SI 3

---

## 22

Quando alguém te elogia...

A. Isso me faz sentir visto.  
RE 3

B. Fico feliz, mas não dependo muito disso.  
AU 3

C. Gosto especialmente quando vem de alguém com quem tenho vínculo.  
CO 3

D. Fico feliz quando percebo que estou contribuindo para algo maior.  
SI 3

---

## 23

Quando uma relação fica distante...

A. Sinto falta principalmente da intimidade.  
CO 3

B. Sinto falta de saber que aquela pessoa faz parte da minha vida.  
PE 3

C. Fico inseguro sobre o que aconteceu.  
SE 3

D. Tento entender se ainda faz sentido manter aquele vínculo.  
SI 3

---

## 24

Quando você está sobrecarregado...

A. Preciso que alguém cuide um pouco de mim também.  
AC 3

B. Preciso reorganizar tudo.  
CT 3

C. Preciso recuperar espaço para mim.  
AU 3, LI 1

D. Preciso voltar para uma rotina que me dê estabilidade.  
ES 3

---

## 25

Qual dessas frases parece mais importante para você?

A. “Quero saber que tenho onde me apoiar.”  
SE 3

B. “Quero sentir que aquilo que faço importa.”  
RE 3, SI 1

C. “Quero escolher minha própria direção.”  
AU 3

D. “Quero sentir que faço parte.”  
PE 3

---

## 26

Quando você se sente muito bem com alguém...

A. Sinto que posso baixar a guarda.  
AC 3

B. Sinto que sou realmente compreendido.  
CO 3

C. Sinto que aquela pessoa me valoriza.  
RE 3

D. Sinto que posso continuar sendo independente mesmo estando perto.  
AU 3

---

## 27

Qual dessas perdas te pareceria mais difícil?

A. Perder a sensação de segurança.  
SE 3

B. Perder liberdade de escolha.  
LI 3

C. Perder um vínculo emocional muito importante.  
CO 3

D. Perder aquilo que dá sentido à sua vida.  
SI 3

---

## 28

Quando você começa algo novo...

A. Quero saber que existe algum tipo de estabilidade por trás.  
ES 3, SE 1

B. Fico animado principalmente pelas possibilidades.  
LI 3

C. Gosto de saber que outras pessoas estão vivendo aquilo comigo.  
PE 3

D. Quero entender como aquilo se conecta ao que quero para minha vida.  
SI 3

---

## 29

Quando você pensa em uma casa ideal...

A. É um lugar onde me sinto protegido.  
SE 3

B. É um lugar onde posso descansar e ser cuidado.  
AC 3

C. É um lugar estável, organizado e previsível.  
ES 3, CT 1

D. É um lugar onde posso ser totalmente eu.  
AU 3, LI 1

---

## 30

Sem pensar demais, qual dessas frases fala mais com você?

A. “Quero sentir que estou seguro.”  
SE 3

B. “Quero sentir que sou importante.”  
RE 3

C. “Quero sentir que pertenço.”  
PE 3

D. “Quero sentir que minha vida faz sentido.”  
SI 3

---

# 7. Resultado principal

Título:

# O que seu coração mais procura

Subtítulo:

**Algumas necessidades emocionais aparecem com mais força na maneira como buscamos segurança, vínculo, reconhecimento e espaço no mundo.**

Mostrar:

### Sua necessidade predominante

Exemplo:

# Conexão

**81%**

Texto:

Você parece valorizar especialmente vínculos em que existe proximidade emocional, troca e sensação de ser verdadeiramente conhecido.

Não basta apenas estar cercado de pessoas.

Para você, a qualidade da relação parece importar mais do que a quantidade de relações.

---

# 8. Estrutura de cada necessidade

Criar:

```ts
{
  code: "CO",
  name: "Conexão",

  innerMessage:
    "Preciso sentir que existe vínculo verdadeiro.",

  description:
    "...",

  whatYouSeek:
    "...",

  whenItFeelsMet:
    "...",

  whenItFeelsMissing:
    "...",

  whenItBecomesDominant:
    "...",

  balancePath:
    "...",

  reflectionQuestions: [
    "...",
    "...",
    "..."
  ]
}
```

---

# 9. O que você busca

Mostrar:

### O que essa necessidade procura

Exemplo para Conexão:

- intimidade;
- reciprocidade;
- conversas profundas;
- presença emocional;
- sensação de ser compreendido.

---

# 10. Quando ela está atendida

Mostrar:

### Quando essa necessidade encontra espaço

Exemplo:

Você tende a sentir:

- proximidade;
- confiança;
- abertura;
- tranquilidade para compartilhar o que sente;
- sensação de não precisar enfrentar tudo sozinho.

---

# 11. Quando ela não está atendida

Mostrar:

### Quando essa necessidade fica em falta

Exemplo:

Podem aparecer:

- sensação de distância;
- solidão mesmo acompanhado;
- dúvida sobre a profundidade dos vínculos;
- busca intensa por proximidade;
- frustração com relações superficiais.

---

# 12. Quando ela ocupa espaço demais

Mostrar:

### Quando a necessidade começa a conduzir demais

Não tratar como patologia.

Exemplo:

A busca por conexão pode começar a pesar quando você sente que precisa estar emocionalmente próximo para se sentir seguro ou completo.

---

# 13. Caminho de equilíbrio

Mostrar:

### Dando espaço para essa necessidade sem ser conduzido por ela

Exemplo:

**Cultivar vínculos profundos sem abandonar a capacidade de permanecer inteiro nos momentos em que está sozinho.**

---

# 14. Necessidades complementares

Mostrar as próximas duas necessidades.

Exemplo:

**Acolhimento — 73%**

**Segurança — 68%**

Criar texto relacionando as três.

Exemplo:

> Para você, conexão parece caminhar junto da necessidade de sentir que existe um lugar seguro onde pode baixar a guarda e ser acolhido.

---

# 15. Mapa completo

Mostrar as 10 necessidades ordenadas:

```text
Conexão          81%
Acolhimento      73%
Segurança        68%
Pertencimento    64%
Significado      59%
Autonomia        55%
Reconhecimento   48%
Estabilidade     43%
Liberdade        39%
Controle         34%
```

Evitar aparência de ranking competitivo.

---

# 16. Mapa por famílias

Além da lista geral, agrupar as necessidades em quatro famílias:

## Vínculo

- Conexão
- Pertencimento
- Acolhimento

## Segurança

- Segurança
- Estabilidade
- Controle

## Identidade

- Autonomia
- Liberdade
- Reconhecimento

## Sentido

- Significado

Mostrar uma leitura simples de qual família aparece mais forte.

---

# 17. Equilíbrios importantes

Preparar o sistema para observar pares que podem gerar tensões interessantes.

Exemplos:

```text
Autonomia × Pertencimento
Liberdade × Estabilidade
Controle × Espontaneidade
Reconhecimento × Validação interna
Conexão × Independência
Segurança × Exploração
```

Nesta versão, usar apenas quando houver diferença relevante ou pontuação alta nos dois lados.

Exemplo:

### Um equilíbrio importante para você

**Autonomia × Pertencimento**

Você pode desejar profundamente fazer parte e, ao mesmo tempo, preservar a liberdade de tomar suas próprias decisões.

Não apresentar isso como contradição.

Apresentar como duas necessidades que precisam coexistir.

---

# 18. Perguntas para reflexão

Gerar três perguntas específicas para cada necessidade.

Exemplo para Segurança:

- O que faz você realmente se sentir seguro?
- Em quais situações você percebe que busca garantias antes de agir?
- Quanto da sua segurança vem de dentro e quanto depende do que está ao redor?

Exemplo para Reconhecimento:

- De quem você mais gostaria de ser reconhecido?
- O que acontece dentro de você quando seu esforço não é percebido?
- Quais conquistas continuam importantes mesmo quando ninguém vê?

Exemplo para Autonomia:

- Em quais áreas da sua vida é mais importante sentir que a decisão é sua?
- Quando ajuda começa a parecer interferência para você?
- O que você protege quando protege sua independência?

Exemplo para Pertencimento:

- Onde você sente que realmente pode ser parte sem precisar se adaptar demais?
- O que faz você sentir que pertence?
- Como você reage quando percebe que está ficando de fora?

Exemplo para Conexão:

- O que faz você sentir que alguém realmente te conhece?
- Que tipo de relação deixa você emocionalmente nutrido?
- O que você sente quando os vínculos parecem superficiais?

Exemplo para Controle:

- O que fica mais difícil quando você não consegue prever o que vai acontecer?
- Em que situações organizar tudo te traz segurança?
- O que seria possível deixar acontecer sem interferir imediatamente?

Exemplo para Acolhimento:

- Com quem você sente que pode descansar emocionalmente?
- Você consegue receber cuidado com a mesma facilidade com que oferece?
- O que você gostaria de ouvir quando está no limite?

Exemplo para Estabilidade:

- O que precisa permanecer para você sentir que sua vida tem chão?
- Quais mudanças costumam desorganizar você mais?
- Quanto de rotina te sustenta e quanto começa a limitar?

Exemplo para Liberdade:

- Em quais momentos você sente que precisa de mais espaço?
- Que tipos de compromisso começam a parecer prisão?
- Como preservar liberdade sem precisar abandonar aquilo que também é importante?

Exemplo para Significado:

- O que faz algo valer a pena para você?
- Quais experiências da sua vida parecem pedir compreensão?
- O que você precisa sentir para perceber que está vivendo de maneira coerente consigo?

---

# 19. Integração com Cura Interior

Adicionar esta experiência à área de questionários.

Card:

# Necessidades Emocionais

**Descubra o que você mais busca para se sentir seguro, valorizado, conectado e inteiro.**

CTA:

**Conhecer minhas necessidades**

Criar rotas:

```text
/necessidades-emocionais
/necessidades-emocionais/questionario
/necessidades-emocionais/resultado
```

---

# 20. Arquitetura

Criar:

```text
src/
  data/
    emotionalNeedsQuestions.ts
    emotionalNeeds.ts

  lib/
    emotionalNeedsScoring.ts

  types/
    emotionalNeeds.ts
```

Reutilizar os componentes visuais existentes dos demais questionários.

Não duplicar componentes desnecessariamente.

Manter a lógica de pontuação separada.

---

# 21. Persistência

Salvar:

```ts
{
  questionnaire: "emotional-needs",
  completedAt: Date,
  answers: [],
  scores: {},
  normalizedScores: {},
  dominantNeed: "",
  complementaryNeeds: [],
  dominantFamily: ""
}
```

Preparar a estrutura para futura persistência em banco.

---

# 22. Conexão com os demais questionários

Ao final, mostrar:

# Continue se conhecendo

Cards para:

- Arquétipos
- Sombra
- Persona

Se algum deles já tiver sido realizado, mostrar algo como:

**Resultado disponível**

e permitir acessar novamente.

---

# 23. Princípio central

A experiência deve ser construída em torno desta ideia:

```text
O QUE ACONTECE
      ↓
O QUE EU SINTO
      ↓
O QUE EU PRECISO
      ↓
O QUE EU BUSCO
      ↓
COMO EU AJO
```

O questionário deve ajudar o usuário a chegar principalmente à terceira camada:

# O que eu preciso?

Não apresentar necessidade emocional como fraqueza, dependência ou falta.

Necessidades fazem parte da experiência humana.

O objetivo é ampliar consciência sobre aquilo que exerce mais peso emocional nas escolhas do usuário.

---

# 24. Resultado esperado

Fluxo:

```text
Cura Interior
↓
Necessidades Emocionais
↓
Introdução
↓
30 perguntas
↓
Necessidade predominante
↓
O que você busca
↓
Quando essa necessidade está atendida
↓
Quando ela fica em falta
↓
Quando ocupa espaço demais
↓
Caminho de equilíbrio
↓
Necessidades complementares
↓
Mapa completo
↓
Família predominante
↓
Equilíbrios importantes
↓
Perguntas para reflexão
↓
Continue se conhecendo
```

Manter a identidade visual e a linguagem dos questionários anteriores do Cura Interior.

A interface deve continuar simples.

A profundidade deve vir da leitura resultante, não da quantidade de informação apresentada durante o questionário.