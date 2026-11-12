# 0039 · O quarto da Toca é ilustração; o que fica em cima dele segue o sistema

**Data:** 12 nov 2026 · **Status:** Aceita

**Contexto.** O herói da Toca mostra o quarto da coelha com uma paleta quente própria (marrons e beges). O painel embaixo do quarto ("A coelha exige (com drama)", Decorar, Bolsinha, ofensiva) usava essa mesma paleta nos textos e botões, com textos de 8 a 10px.

**Decisão.**
- O quarto é ilustração (0014): pode ter a paleta que quiser, como qualquer arte do app.
- Tudo o que é interface em cima ou embaixo da arte segue o sistema: textos e botões usam os tokens do tema claro (o HeroCard fixa o modo claro, 0015) e a escala de texto (0009), sem nada abaixo de 11px.
- O balão de fala da coelha no quarto é um SpeechBubble, com texto `caption` (12px).

**Alternativas.**
- Criar uma paleta "Toca" com tokens próprios: tokens para um único lugar, e a interface ficaria diferente das outras abas.
- Tirar a paleta quente da arte: perde o clima do quarto, que é parte da identidade.

**Consequências.**
- App: o painel do herói da Toca troca #C47A1A, #8A5A30, #9A7B5A, #3C3C3C, #FFF4E4 e #F1E2CC por tokens do tema claro.
- A mesma regra vale para qualquer herói novo com arte.
- O HeroCard continua Em revisão até o painel da Toca estar no Figma.
