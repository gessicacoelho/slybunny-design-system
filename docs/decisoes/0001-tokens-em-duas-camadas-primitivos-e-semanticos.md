# 0001 · Tokens em duas camadas: primitivos e semânticos

**Data:** 9 nov 2026 · **Status:** Aceita

**Contexto.** O app usava 104 cores soltas no código. Trocar o rosa ou criar um tema claro exigia caçar hex arquivo por arquivo.

**Decisão.** Duas camadas de variáveis. **Primitives** guarda as rampas de cor (pink/400, neutral/900) e fica escondida da biblioteca. **Color** guarda os papéis (bg/surface, text/primary, brand/primary), sempre apontando para um primitivo. Componentes usam só a camada semântica. Cada variável tem escopo (texto só aparece no seletor de texto) e code syntax (`var(--color-bg-surface)`).

**Alternativas.** Uma camada só, com nomes de cor (pink-400) nos componentes: mais simples no começo, mas trocar o tema vira uma troca manual em cada componente.

**Consequências.** Mudar uma cor é mudar um lugar. Trocar o tema é trocar o modo. O custo é aprender os nomes semânticos e resistir a usar um primitivo "só dessa vez".
