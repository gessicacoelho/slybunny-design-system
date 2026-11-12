# 0042 · Botões têm um só padrão de rótulo, cor e ícone

**Data:** 12 nov 2026 · **Status:** Aceita

**Contexto.** No app, os botões do Pomodoro e da oração de São Miguel seguem padrões diferentes:
- No Pomodoro: LAREIRA, PAUSAR e CONCLUIR em maiúsculas, com ícones feitos de caracteres (♫ ⏸ ✓). PAUSAR tem texto branco sobre o rosa.
- Na oração: "Continuar" num botão azul e em letras normais, com ▶; um botão só com ↺ e sem nome; e "CONCLUIR ORAÇÃO" com um escudo ilustrado.
- Na oração há dois botões cheios, o azul e o rosa, disputando a atenção.

**Decisão.** Todo botão do app é um Button ou um IconButton do sistema:
- **Rótulo:** estilo `label`, em maiúsculas e 14px. Verbo no infinitivo, de 1 a 3 palavras.
- **Cor:** só pelas variantes primary, secondary, tonal, ghost e danger. Um primary por tela. Não existe botão azul.
- **Ícone:** sempre um `icon/ui`, à esquerda do rótulo e na cor dele. Não se usam caracteres como ícone (♫ ⏸ ✓ ▶ ↺), nem ícones ilustrados (`icon/app`) dentro de botão.
- **Só ícone:** botão sem rótulo é IconButton e tem nome acessível, por exemplo "Recomeçar".
- **Texto sobre o rosa:** é escuro (0004).

**Alternativas.**
- Deixar cada tela com o seu estilo: é o que causou a diferença.
- Aceitar ícones ilustrados em botões especiais, como o escudo da oração: abre exceção para cada tela "especial", e o ilustrado é reservado para gamificação.

**Consequências.**
- Figma: ícones novos `icon/ui/play`, `pause`, `music` e `rotate-ccw`, agora são 37. Na página Button, o quadro "Botões no app · Pomodoro e Oração" mostra as duas telas no padrão.
- Código: os SVGs ficam em `app/icones-ui/` e usam `currentColor`, para pegar a cor do rótulo.
- App:
  - Pomodoro: Lareira secondary com `music`, Pausar primary com `pause` (vira Continuar com `play` quando pausado), Concluir secondary com `check`.
  - Oração: Continuar secondary com `play`, Recomeçar IconButton com `rotate-ccw`, Concluir oração primary lg com `check`.
