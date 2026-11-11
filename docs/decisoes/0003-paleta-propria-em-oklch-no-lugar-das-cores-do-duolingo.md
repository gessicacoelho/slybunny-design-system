# 0003 · Paleta própria em OKLCH no lugar das cores do Duolingo

**Data:** 9 nov 2026 · **Status:** Aceita

**Contexto.** O app usava os hex do Duolingo (#58CC02, #1CB0F6, #FF9600…). Isso deixava o app parecido com outro produto e cada cor tinha um peso visual diferente.

**Decisão.** Sete rampas próprias (pink, mint, sky, tangerine, lilac, honey, coral) mais neutros, geradas em OKLCH, para que o mesmo degrau tenha a mesma luminosidade percebida em todas as cores.

**Alternativas.** Manter os hex e só organizar: rápido, mas mantém a identidade emprestada.

**Consequências.** O app ganha cara própria. A migração no código exige trocar cada hex do Duolingo pelo token de papel (ver guia de ajustes).
