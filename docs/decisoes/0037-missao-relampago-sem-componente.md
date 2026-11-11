# 0037 · Missão Relâmpago é uma variante do MissionCard

**Data:** 11 nov 2026 · **Status:** Aceita

**Contexto.** A Toca tem um card amarelo de "Missão Relâmpago" que não existia no Figma. Sem componente, ele não tinha regra de cor, estado nem acessibilidade.

**Decisão.** A Missão Relâmpago é a variante `State=flash` do MissionCard: mesma estrutura, mesmo checkbox e timer. Muda a borda e o ícone, que usam `game/trophy` (a cor de recompensa), e o ícone vira um raio. O detalhe diz o prazo e o prêmio: "termina em 2h · +20 XP".

**Alternativas.**
- Componente próprio: só valeria se ela tivesse estrutura diferente, e não tem.
- Usar `feedback/warning`: confundiria com missão atrasada.

**Consequências.**
- `game/trophy` e `feedback/warning` são do mesmo amarelo. O que separa as duas variantes é o ícone de raio e o texto com prazo e prêmio, nunca só a cor (0013).
- Leitor de tela: "Missão relâmpago: <título>, termina em 2 horas, vale 20 XP".
