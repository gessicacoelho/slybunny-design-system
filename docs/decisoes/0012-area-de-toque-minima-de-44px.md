# 0012 · Área de toque mínima de 44px

**Data:** 9 nov 2026 · **Status:** Aceita

**Contexto.** O timer e o checkbox de 26px ficavam colados, e a pessoa marcava a missão quando queria abrir o timer.

**Decisão.** Todo alvo de toque tem pelo menos 44 × 44px, mesmo com visual menor (checkbox 28px, botão sm 36px, IconButton sm 32px).

**Alternativas.** Visual de 44px em tudo: os cards ficariam pesados.

**Consequências.** Menos toques errados (lei de Fitts). O espaço invisível precisa ser respeitado no código.
