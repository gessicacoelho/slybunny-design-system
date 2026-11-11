# 0018 · Button sem propriedade "Full width"

**Data:** 9 nov 2026 · **Status:** Aceita

**Contexto.** O documento pedia uma propriedade booleana "Full width". No Figma, um booleano não controla a largura de uma instância.

**Decisão.** Sem a propriedade. Para largura total, usa-se "Fill" na instância. No código, `width: 100%` no tamanho lg.

**Alternativas.** Variantes duplicadas só para largura: dobraria o número de variantes.

**Consequências.** Limitação da ferramenta, documentada na página do Button.
