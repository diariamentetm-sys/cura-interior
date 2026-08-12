# Prompt para Cursor — Portal Cura Interior

Crie a estrutura principal do portal **Cura Interior**, transformando os questionários existentes em uma experiência contínua de autoconhecimento.

O Cura Interior não deve parecer apenas uma plataforma de testes.

Ele deve funcionar como um **portal pessoal de autoconhecimento e autoaprendizado**, no qual cada experiência concluída revela uma nova camada do usuário.

A pessoa pode acessar e realizar qualquer questionário livremente, mesmo sem seguir uma ordem específica.

Porém, a plataforma deve apresentar uma **trajetória recomendada de descoberta**, ajudando o usuário a compreender a si mesmo de maneira gradual, organizada e acolhedora.

O objetivo é evitar a sensação de:

- excesso de informação;
- necessidade de “resolver tudo”;
- competição;
- pressão para terminar;
- avalanche de interpretações psicológicas.

A experiência deve transmitir:

**“Você não precisa descobrir tudo de uma vez.”**

Cada questionário é apenas mais uma parte do mapa.

---

# 1. Conceito central do produto

O usuário começa conhecendo partes mais visíveis e acessíveis de si mesmo.

Conforme avança, entra gradualmente em camadas mais profundas.

A trajetória deve seguir aproximadamente esta lógica:

```text
COMO EU APAREÇO
↓
COMO EU FUNCIONO
↓
O QUE EU PRECISO
↓
O QUE ME DIVIDE
↓
O QUE EU ESCONDO
↓
COMO TUDO ISSO SE CONECTA
```

O portal deve visualmente representar essa evolução.

---

# 2. Estrutura principal da experiência

Criar cinco áreas principais:

```text
Início
Meu Mapa
Explorar
Conquistas
Perfil
```

Se o usuário não estiver autenticado:

```text
Início
Explorar
Entrar
```

---

# 3. Home pública

A Home deve apresentar o conceito sem exigir login.

Headline sugerida:

# Conhecer a si mesmo é um caminho.

Texto:

**Explore diferentes partes da sua personalidade, emoções e padrões através de experiências de autoconhecimento construídas para revelar uma camada de cada vez.**

CTA principal:

**Começar a me conhecer**

CTA secundário:

**Explorar questionários**

Adicionar seção:

# Por onde começar?

Apresentar a trajetória sugerida.

---

# 4. A trajetória de autoconhecimento

Criar uma experiência visual chamada:

# Seu caminho de descoberta

A trajetória inicial deve ter cinco etapas.

---

## Etapa 1 — Como você se apresenta ao mundo

Texto:

**Comece pelas partes de você que aparecem com mais facilidade nas relações, escolhas e comportamentos cotidianos.**

Questionários:

### Arquétipos

**Descubra quais padrões aparecem com mais força na maneira como você vive e se relaciona com o mundo.**

### Persona

**Entenda quais versões de você aparecem diante das outras pessoas.**

Mensagem da etapa:

**Como eu apareço no mundo?**

---

## Etapa 2 — O que existe por trás das suas escolhas

Texto:

**Depois de observar como você funciona, comece a perceber aquilo que sustenta suas decisões e reações.**

Questionário:

### Necessidades Emocionais

**Descubra o que você mais busca para se sentir seguro, conectado, valorizado e inteiro.**

Mensagem:

**O que eu realmente preciso?**

---

## Etapa 3 — Quando duas partes querem coisas diferentes

Texto:

**Nem todas as partes de você desejam a mesma coisa ao mesmo tempo.**

Questionário:

### Conflitos Internos

**Reconheça necessidades que puxam você em direções diferentes.**

Mensagem:

**Por que algumas escolhas me dividem?**

---

## Etapa 4 — Aquilo que nem sempre quero enxergar

Texto:

**Algumas características aparecem de maneira menos evidente — através de incômodos, reações, defesas e projeções.**

Questionário:

### Sombra

**Observe partes de você que podem estar menos reconhecidas.**

Mensagem:

**O que existe em mim que eu normalmente evito olhar?**

---

## Etapa 5 — Seu mapa começa a se formar

Quando os questionários anteriores forem concluídos, desbloquear uma área chamada:

# Integração

Ainda não criar novo questionário nesta etapa.

Mostrar uma síntese dos resultados já obtidos.

Mensagem:

**Nenhum resultado conta sua história sozinho. Agora podemos começar a observar como essas partes se relacionam.**

---

# 5. Livre exploração

Apesar da trajetória recomendada, criar também:

# Explorar

Exibir todos os questionários disponíveis.

Nunca bloquear questionários.

O usuário deve poder começar pela Sombra, por exemplo, se desejar.

Adicionar apenas uma indicação discreta:

**Recomendado para começar**

ou:

**Parte da etapa 3 do seu caminho**

Não impedir acesso.

---

# 6. Login

Os questionários devem funcionar sem login.

Porém, após o usuário concluir o primeiro questionário, apresentar convite:

# Quer guardar essa descoberta?

Texto:

**Crie seu perfil para acompanhar seus resultados e construir seu mapa pessoal ao longo do tempo.**

CTA:

**Criar meu mapa**

CTA secundário:

**Continuar sem conta**

Não interromper o resultado.

Não usar modal agressivo.

---

# 7. Autenticação

Implementar autenticação usando Supabase.

Permitir inicialmente:

- Google;
- email e senha.

Preparar arquitetura para outros métodos futuramente.

Criar:

```text
/login
/cadastro
/recuperar-senha
```

---

# 8. Usuário não autenticado

Salvar temporariamente resultados em localStorage.

Quando o usuário criar uma conta após realizar um questionário:

migrar os resultados locais para o perfil autenticado.

Não obrigar o usuário a refazer o teste.

---

# 9. Meu Mapa

Criar a principal área autenticada:

```text
/meu-mapa
```

Título:

# Seu mapa interior

Texto:

**Cada experiência concluída acrescenta uma nova camada à forma como você pode compreender a si mesmo.**

Essa página deve funcionar como o centro emocional da plataforma.

---

# 10. Avatar de autoconhecimento

Criar uma representação visual central do usuário.

Nesta primeira versão, não exigir fotografia.

Usar um avatar abstrato ou silhueta humana elegante.

O avatar deve evoluir visualmente conforme o usuário conclui experiências.

A ideia é que:

```text
pouco conhecimento
→ figura simples

mais experiências
→ novas camadas

mais integração
→ figura mais completa
```

---

# 11. Aura de progresso

Ao redor do avatar, criar uma representação visual semelhante a uma aura.

Essa aura deve crescer e ganhar detalhes à medida que o usuário avança.

Não utilizar uma barra comum de progresso como representação principal.

O progresso deve parecer:

- orgânico;
- simbólico;
- contemplativo;
- visualmente bonito.

Exemplo conceitual:

```text
          ✦
      ╭────────╮
   ✦  │        │
      │ AVATAR │  ✦
      │        │
   ✦  ╰────────╯
          ✦
```

Cada nova área compreendida adiciona um elemento visual.

---

# 12. Pontos de autoconhecimento

Ao redor do avatar, mostrar pontos correspondentes às áreas já exploradas.

Exemplo:

```text
Arquétipos
Persona
Necessidades
Conflitos
Sombra
```

Estados:

```text
não iniciado
em descoberta
descoberto
```

Visualmente:

```text
○ não iniciado
◐ iniciado
● concluído
```

Nunca utilizar linguagem:

- incompleto;
- atrasado;
- faltando;
- pendente.

Usar:

- ainda não explorado;
- em descoberta;
- conhecido.

---

# 13. Evolução visual

Criar cinco níveis visuais iniciais.

## Nível 0

Nenhuma experiência concluída.

Avatar simples.

Mensagem:

**Todo mapa começa com um primeiro ponto.**

---

## Nível 1

1 questionário concluído.

Adicionar primeira camada de aura.

Mensagem:

**Uma parte de você começa a ganhar forma.**

---

## Nível 2

2 questionários concluídos.

Aura mais definida.

Adicionar pequenos pontos conectados.

Mensagem:

**Alguns padrões começam a se encontrar.**

---

## Nível 3

3 questionários concluídos.

Adicionar novos elementos ao redor do avatar.

Mensagem:

**Seu mapa está ficando mais profundo.**

---

## Nível 4

4 questionários concluídos.

Maior complexidade visual.

Mensagem:

**Você já consegue enxergar diferentes camadas de si.**

---

## Nível 5

Todos os questionários iniciais concluídos.

Avatar visualmente completo.

Aura mais rica.

Mensagem:

# Seu primeiro mapa está completo.

Texto:

**Isso não significa que você terminou de se conhecer. Significa apenas que agora possui mais pontos para observar quem está se tornando.**

---

# 14. Não transformar em gamificação infantil

O progresso deve gerar satisfação, mas não parecer videogame.

Evitar:

- moedas;
- pontos;
- ranking;
- XP;
- streaks obrigatórios;
- competição;
- cronômetros;
- mensagens de pressão.

A plataforma deve incentivar curiosidade, não compulsão.

---

# 15. Conquistas

Criar:

```text
/conquistas
```

Título:

# Suas descobertas

Usar badges simbólicos.

Os badges devem representar momentos importantes da trajetória.

---

# 16. Badges iniciais

Criar inicialmente:

## Primeiro Olhar

Desbloqueado ao concluir o primeiro questionário.

Mensagem:

**Você iniciou seu mapa interior.**

---

## Padrões

Concluir Arquétipos.

**Você começou a reconhecer padrões que aparecem na sua forma de viver.**

---

## Espelho Social

Concluir Persona.

**Você observou como se apresenta ao mundo.**

---

## O que eu preciso

Concluir Necessidades Emocionais.

**Você começou a reconhecer aquilo que sustenta emocionalmente suas escolhas.**

---

## Entre Dois Caminhos

Concluir Conflitos Internos.

**Você reconheceu tensões que existem entre diferentes partes de você.**

---

## Olhar para Dentro

Concluir Sombra.

**Você abriu espaço para observar aquilo que nem sempre aparece com facilidade.**

---

## Cinco Camadas

Concluir os cinco questionários principais.

**Seu primeiro mapa de autoconhecimento está formado.**

---

## Sem Pressa

Conceder quando o usuário retorna à plataforma em outro dia e continua seu processo.

Não usar streak.

Não exigir dias consecutivos.

Mensagem:

**Autoconhecimento não precisa acontecer de uma vez.**

---

# 17. Visual dos badges

Os badges devem parecer:

- símbolos;
- selos;
- pequenos artefatos;
- elementos colecionáveis sofisticados.

Evitar medalhas esportivas.

Cada badge pode utilizar:

- símbolo abstrato;
- forma geométrica;
- desenho orgânico;
- pequeno elemento inspirado no tema.

Criar versões:

```text
locked
unlocked
```

Locked deve aparecer discretamente, sem sensação de falha.

---

# 18. Dashboard pessoal

Após login, a página inicial deve se adaptar.

Em vez da Home pública, mostrar:

# Olá, [nome]

Mensagem dinâmica:

**Seu mapa continua daqui.**

Mostrar:

1. avatar;
2. aura;
3. nível atual;
4. próxima experiência recomendada;
5. questionários realizados;
6. badges recentes.

---

# 19. Próximo passo recomendado

Criar componente:

```text
NextDiscoveryCard
```

Exemplo:

# Seu próximo olhar

Você já observou seus Arquétipos.

Agora pode ser interessante entender:

## Sua Persona

**Como você aparece diante das outras pessoas?**

CTA:

**Continuar minha descoberta**

---

# 20. Ritmo da experiência

Nunca mostrar mais de um próximo passo como obrigação.

Evitar listas como:

```text
Você ainda precisa fazer:
- Persona
- Necessidades
- Conflitos
- Sombra
```

Preferir:

# Se quiser continuar...

**O próximo ponto do seu mapa pode ser sua Persona.**

---

# 21. Pausa consciente

Após concluir um questionário, não recomendar automaticamente outro imediatamente.

Exibir primeiro o resultado.

Depois:

### Fique um pouco com essa descoberta.

Texto:

**Você pode voltar ao seu mapa quando quiser.**

CTA:

**Ir para meu mapa**

CTA secundário:

**Continuar explorando**

Isso deve ajudar a manter o ritmo contemplativo da plataforma.

---

# 22. Histórico

Criar dentro do perfil:

```text
/meu-mapa/historico
```

Mostrar:

```text
Arquétipos
Concluído em [data]

Persona
Concluído em [data]

Necessidades Emocionais
Concluído em [data]
```

Permitir abrir resultados anteriores.

Preparar arquitetura para refazer avaliações futuramente.

---

# 23. Resultado atualizado

No futuro, o usuário poderá repetir questionários.

Preparar os dados para manter:

```ts
{
  questionnaireId: "",
  completedAt: "",
  version: "",
  result: {}
}
```

Não sobrescrever necessariamente resultados antigos.

---

# 24. Síntese do perfil

Quando houver pelo menos três questionários concluídos, mostrar no Meu Mapa:

# O que seu mapa começa a mostrar

Criar uma síntese simples baseada nos resultados disponíveis.

Não usar IA nesta primeira versão.

Construir com templates condicionais.

Exemplo:

```text
Seu arquétipo predominante aponta uma forte busca por autonomia.

Nas suas necessidades emocionais, liberdade também aparece com destaque.

Ao mesmo tempo, seu mapa de conflitos mostra uma tensão importante entre liberdade e segurança.
```

A síntese deve conectar resultados sem produzir diagnóstico.

---

# 25. Estrutura do banco de dados

Criar tabelas Supabase aproximadamente assim:

```text
profiles
questionnaires
questionnaire_results
user_progress
user_badges
```

---

# 26. Profiles

```ts
{
  id,
  user_id,
  display_name,
  avatar_type,
  created_at,
  updated_at
}
```

---

# 27. Questionnaire results

```ts
{
  id,
  user_id,
  questionnaire_slug,
  questionnaire_version,
  completed_at,
  raw_answers,
  normalized_scores,
  primary_result,
  secondary_results
}
```

Usar JSONB quando apropriado.

---

# 28. User progress

```ts
{
  user_id,
  completed_questionnaires,
  discovery_level,
  next_recommended_questionnaire,
  updated_at
}
```

---

# 29. User badges

```ts
{
  id,
  user_id,
  badge_slug,
  unlocked_at
}
```

---

# 30. Questionários disponíveis

Cadastrar inicialmente:

```text
arquetipos
persona
necessidades-emocionais
conflitos-internos
sombra
```

Metadados:

```ts
{
  slug: "persona",
  name: "Persona",
  stage: 1,
  order: 2,
  estimatedTime: "...",
  description: "...",
  guidingQuestion: "Como eu apareço para os outros?"
}
```

---

# 31. Ordem recomendada

Configurar:

```text
1. Arquétipos
2. Persona
3. Necessidades Emocionais
4. Conflitos Internos
5. Sombra
```

Essa ordem é recomendada, não obrigatória.

---

# 32. Explorar questionários

Criar:

```text
/explorar
```

Cards dos cinco questionários.

Cada card deve mostrar:

- nome;
- frase de descoberta;
- status;
- estágio;
- CTA.

Exemplo:

## Persona

**Como eu apareço para os outros?**

Entenda quais versões de você aparecem nas relações e ambientes que fazem parte da sua vida.

Status:

**Ainda não explorado**

CTA:

**Conhecer minha Persona**

---

# 33. Visualização geral do mapa

Dentro de `/meu-mapa`, mostrar também um mapa conceitual.

Centro:

```text
VOCÊ
```

Ao redor:

```text
ARQUÉTIPOS
PERSONA
NECESSIDADES
CONFLITOS
SOMBRA
```

Conectar visualmente apenas áreas concluídas.

Exemplo:

```text
                    PERSONA ●
                       │
                       │
ARQUÉTIPOS ● ─────── VOCÊ ─────── ○ SOMBRA
                       │
                       │
              NECESSIDADES ●
                       │
                       ◐
                  CONFLITOS
```

Não criar diagrama técnico.

Deve parecer uma representação visual íntima e orgânica.

---

# 34. Avatar

Criar arquitetura para futuramente permitir:

```text
abstract
initials
photo
generated
```

Nesta versão implementar apenas:

```text
abstract
initials
```

Não exigir foto.

---

# 35. Perfil

Criar:

```text
/perfil
```

Permitir:

- alterar nome;
- escolher avatar;
- visualizar data de entrada;
- gerenciar conta.

Adicionar:

# Meu caminho

Mostrar quantidade de experiências realizadas e badges.

---

# 36. Privacidade

Os resultados são privados por padrão.

Adicionar indicação clara:

**Seu mapa pertence a você.**

Nenhum resultado deve ser público automaticamente.

Preparar arquitetura para funcionalidades sociais futuras, mas não implementar nenhuma exposição pública.

---

# 37. Preparação para futura rede social

Preparar o modelo de dados para futuramente existir:

```text
connections
profile_visibility
shared_insights
friend_permissions
```

Não implementar telas sociais agora.

Não criar:

- feed;
- seguidores;
- amigos;
- comentários;
- mensagens;
- perfil público.

Apenas garantir que a arquitetura futura não exija reconstrução completa.

---

# 38. Filosofia futura da camada social

Adicionar documentação interna explicando:

No futuro, o Cura Interior poderá permitir que usuários se conectem e compartilhem partes escolhidas de seus mapas.

Nunca presumir que todo resultado psicológico deve ser compartilhado.

Compartilhamento deverá ser:

- granular;
- voluntário;
- reversível;
- privado por padrão.

Exemplo futuro:

```text
Compartilhar com Douglas:

✓ Arquétipos
✓ Necessidades Emocionais
○ Persona
○ Conflitos Internos
○ Sombra
```

Não implementar agora.

---

# 39. Design system

Manter a direção visual já existente:

- editorial;
- contemplativa;
- sofisticada;
- acolhedora;
- orgânica.

Evitar estética:

- clínica;
- hospitalar;
- corporativa;
- dashboard SaaS;
- wellness genérico;
- astrologia;
- gamificação infantil.

---

# 40. Movimento

Usar animações muito sutis.

A aura do avatar pode:

- respirar suavemente;
- expandir alguns pixels;
- apresentar brilho discreto;
- ganhar novas camadas ao desbloquear descobertas.

Não usar:

- partículas excessivas;
- efeitos chamativos;
- confete;
- animações rápidas.

Quando um novo ponto for adicionado ao mapa, criar um pequeno momento visual de descoberta.

---

# 41. Microcopy

Usar frases como:

**Mais uma parte do seu mapa ganhou forma.**

**Você pode continuar quando sentir vontade.**

**Ainda há lugares seus que você não explorou por aqui.**

**Não existe pressa para se conhecer.**

**Seu mapa continua mudando com você.**

**Algumas respostas aparecem rápido. Outras precisam de tempo.**

Evitar:

**Complete seu perfil.**

**Você está em 60%.**

**Faltam dois testes.**

**Continue sua sequência.**

**Você está quase terminando.**

---

# 42. Arquitetura de componentes

Criar componentes reutilizáveis:

```text
DiscoveryPath
DiscoveryStage
QuestionnaireCard
QuestionnaireStatus
InnerMap
InnerMapNode
UserAura
UserAvatar
DiscoveryLevel
BadgeCard
BadgeGrid
NextDiscoveryCard
RecentDiscovery
ProfileSummary
ContinueExploring
```

---

# 43. Estrutura de rotas

```text
/
 /explorar

 /login
 /cadastro
 /recuperar-senha

 /meu-mapa
 /meu-mapa/historico

 /conquistas
 /perfil

 /arquetipos
 /arquetipos/questionario
 /arquetipos/resultado

 /persona
 /persona/questionario
 /persona/resultado

 /necessidades-emocionais
 /necessidades-emocionais/questionario
 /necessidades-emocionais/resultado

 /conflitos-internos
 /conflitos-internos/questionario
 /conflitos-internos/resultado

 /sombra
 /sombra/questionario
 /sombra/resultado
```

---

# 44. Navegação autenticada

Desktop:

```text
Cura Interior

Meu Mapa
Explorar
Conquistas

[Avatar]
```

Mobile:

bottom navigation com:

```text
Mapa
Explorar
Conquistas
Perfil
```

---

# 45. Navegação pública

```text
Cura Interior

Como funciona
Explorar

Entrar
```

CTA:

**Começar**

---

# 46. Responsividade

Mobile first.

O avatar e o mapa devem funcionar muito bem em telas pequenas.

No mobile, o Inner Map pode reorganizar seus pontos radialmente ou verticalmente.

Não reduzir o mapa desktop até ficar ilegível.

Criar representação própria para mobile.

---

# 47. Estados

Preparar estados:

```text
anonymous
authenticated-new
authenticated-in-progress
authenticated-complete
```

---

# 48. Usuário autenticado novo

Mostrar:

# Seu mapa começa aqui

Avatar ainda simples.

Primeiro ponto sugerido:

**Arquétipos**

CTA:

**Fazer minha primeira descoberta**

---

# 49. Usuário em progresso

Mostrar:

- avatar evoluído;
- pontos descobertos;
- próximo passo;
- badges;
- resultados recentes.

---

# 50. Todos os questionários concluídos

Não apresentar sensação de fim.

Mostrar:

# Seu primeiro mapa interior

Texto:

**Você percorreu todas as experiências disponíveis neste momento. Agora pode revisitar suas descobertas e observar como elas se conectam.**

CTA:

**Explorar meu mapa**

Nunca:

**Parabéns! Você completou o Cura Interior.**

---

# 51. Princípio estrutural

Toda a plataforma deve seguir:

```text
DESCOBRIR
↓
REGISTRAR
↓
RELACIONAR
↓
REFLETIR
↓
VOLTAR QUANDO QUISER
```

Não:

```text
TESTAR
↓
PONTUAR
↓
TERMINAR
```

---

# 52. Visão de longo prazo

Documentar no projeto:

O Cura Interior deve evoluir de:

```text
questionários
↓
mapa pessoal
↓
histórico de autoconhecimento
↓
relações entre descobertas
↓
aprendizado sobre si
↓
compartilhamento consciente
↓
rede de compreensão entre pessoas
```

Por enquanto, implementar somente:

```text
questionários
+
mapa pessoal
+
trajetória
+
perfil
+
badges
+
histórico
```

---

# 53. Resultado esperado do MVP

O usuário deve conseguir:

```text
Entrar no Cura Interior
↓
Explorar sem cadastro
↓
Responder um questionário
↓
Ver seu resultado
↓
Criar conta opcionalmente
↓
Salvar sua descoberta
↓
Entrar no Meu Mapa
↓
Ver seu avatar começar a ganhar forma
↓
Receber uma próxima experiência recomendada
↓
Escolher seguir a recomendação ou explorar livremente
↓
Realizar novas experiências
↓
Ganhar badges
↓
Ver novos pontos aparecerem no mapa
↓
Revisitar resultados
↓
Começar a perceber relações entre diferentes partes de si
```

O portal deve transmitir continuamente a sensação:

# “Estou construindo um mapa de mim.”

E não:

# “Estou completando uma lista de testes.”