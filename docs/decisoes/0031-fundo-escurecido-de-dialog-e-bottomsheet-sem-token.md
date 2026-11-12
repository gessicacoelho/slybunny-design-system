# 0031 · Fundo escurecido de Dialog e BottomSheet ganha o token overlay/scrim

**Data:** 11 nov 2026 (aberta) · 12 nov 2026 (aceita) · **Status:** Aceita (`overlay/on-art` criado depois pela 0041)

**Contexto.** O fundo escurecido atrás do Dialog e do BottomSheet usava neutral/950 a 70%: um primitivo com opacidade aplicado direto, fora da regra 0001. A proposta original também previa `overlay/on-art`, para uma trilha clara sobre a arte do HeroCard.

**Decisão.**
- Criar `overlay/scrim` agora: neutral/950 a 70%, o mesmo valor nos temas escuro e claro. Dialog e BottomSheet usam esse token.
- Não criar `overlay/on-art` por enquanto. No Figma, a trilha do HeroCard usa `bg/surface-sunken`, e não há outro uso de uma trilha clara sobre arte. O token entra quando esse uso existir.

**Alternativas.**
- Esperar um terceiro uso para criar o `overlay/scrim`: já são dois componentes, e o valor solto continuaria fora da regra 0001.
- Valores diferentes por tema: possível no futuro, mas hoje o escurecido é o mesmo nos dois, e mudar o visual não fazia parte desta decisão.

**Consequências.**
- Nada muda na tela: o valor é o mesmo de antes.
- Figma: variável `overlay/scrim` na coleção Color (Dark e Light). As camadas "Scrim" das páginas Dialog e BottomSheet usam a variável com opacidade da camada em 100%.
- Código: `--color-overlay-scrim` em `build/tokens.css`. No app, o fundo escurecido troca o valor solto por `var(--color-overlay-scrim)`.
- Se o escurecido precisar mudar, como ficar mais leve no tema claro, muda num lugar só.
- Mesma linha do Atlassian, que tem tokens próprios para o que fica por cima da tela (overlay).
