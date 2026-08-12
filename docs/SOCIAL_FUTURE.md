# Camada social futura — Cura Interior

O Cura Interior poderá, no futuro, permitir que usuários se conectem e compartilhem
partes escolhidas de seus mapas.

## Princípios

- **Privado por padrão.** Nenhum resultado é público automaticamente.
- **Granular.** A pessoa escolhe o que compartilhar (ex.: Arquétipos sim, Sombra não).
- **Voluntário.** Nunca presumir que todo resultado psicológico deve ser compartilhado.
- **Reversível.** O acesso compartilhado pode ser revogado a qualquer momento.

## Exemplo futuro (não implementado)

```text
Compartilhar com Douglas:

✓ Arquétipos
✓ Necessidades Emocionais
○ Persona
○ Conflitos Internos
○ Sombra
```

## Modelo preparado (sem UI)

Tabelas stub no Supabase: `cura_profile_visibility`, `cura_connections`,
`cura_friend_permissions`. Não criar feed, seguidores, amigos, comentários,
mensagens ou perfil público nesta fase.
