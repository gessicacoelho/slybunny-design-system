# 0037 · Missão Relâmpago sem componente

**Data:** 11 nov 2026 · **Status:** Em aberto

**Contexto.** A Toca tem um card amarelo de "Missão Relâmpago" que não existe no Figma. Sem componente, ele não tem regra de cor, estado nem acessibilidade, e foi a única peça da Toca que ficou de fora da aplicação.

**Opções.**
- Uma variante do MissionCard (por exemplo `State=flash`): mesma estrutura, com borda e ícone em `game/trophy` ou `feedback/warning` e um tempo restante.
- Um componente próprio, se a Missão Relâmpago tiver mais informação que uma missão comum (recompensa, contagem regressiva).

**Decidir:** variante do MissionCard ou componente novo. Atenção: o amarelo já significa troféu (0006) e atraso (0022), então a cor precisa de cuidado.
