# 0041 · overlay/on-art para painéis sobre a arte do herói

**Data:** 12 nov 2026 · **Status:** Aceita · **Altera:** 0031

**Contexto.** A 0031 deixou o `overlay/on-art` para quando houvesse um uso real. A revisão do app de 12 nov achou dois: os painéis translúcidos sobre a arte dos heróis da Liga (preto a 26%) e dos Mimos (preto a 22%).

**Decisão.** Criar `overlay/on-art`: neutral/950 a 24%, igual nos dois temas. Os dois painéis usam esse token.

**Alternativas.**
- Manter os dois valores: dois tons quase iguais para a mesma função.
- Usar `overlay/scrim` (70%): escuro demais, esconderia a arte.

**Consequências.**
- Figma: variável `overlay/on-art` na coleção Color.
- Código: `--color-overlay-on-art` em `build/tokens.css`.
- App: os painéis da Liga e dos Mimos trocam o preto a 22% e 26% por `var(--color-overlay-on-art)`. Conferir o contraste do texto em cima do painel, principalmente sobre arte clara.
