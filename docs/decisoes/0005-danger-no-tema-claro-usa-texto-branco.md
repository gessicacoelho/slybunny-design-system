# 0005 · Danger no tema claro usa texto branco

**Data:** 9 nov 2026 · **Status:** Aceita

**Contexto.** No tema claro, o vermelho de erro é coral/700. Texto escuro sobre ele fica abaixo de 4.5:1.

**Decisão.** Token `text/on-danger` com valor escuro no Dark e branco no Light.

**Alternativas.** Mesmo texto nos dois temas: um dos dois reprovaria no contraste.

**Consequências.** É a exceção à regra "texto escuro sobre cor forte". Fica registrada no token, não em cada componente.
