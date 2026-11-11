# 0034 · TopBar mantém 5 itens, com o coelho verde

**Data:** 11 nov 2026 · **Status:** Aceita · **Substitui:** 0024

**Contexto.** Ao aplicar o design system no app, a TopBar de 4 itens (0024) foi testada contra a versão publicada. A Gessica preferiu manter a barra como está: o coelho verde à esquerda abre "Sobre o SlyBunny" e é parte da identidade do app.

**Decisão.** A TopBar continua com 5 itens: coelho verde (abre "Sobre o SlyBunny"), ofensiva, anel do progresso do dia (44px), diamantes e avatar retangular de 28 × 36px com raio de 8px. Seguem os tokens só o fundo (`bg/canvas`) e a borda inferior de 2px (`border/default`). Como ajuste óptico, o número da ofensiva fica 6px mais perto da chama e o dos diamantes 2px mais perto do diamante.

**Alternativas.** A TopBar de 4 itens da decisão 0024: um papel por item, mas sem o coelho que abre "Sobre".

**Consequências.**
- O Figma precisa refletir o app: atualizar a página TopBar e a linha "TopBar com 5 itens" do guia de ajustes.
- Exceção à decisão 0016 (avatar sempre redondo): na TopBar o avatar fica retangular.
- Os ícones da TopBar ocupam a caixa de 36px de jeitos diferentes. Se forem redesenhados para preencher a caixa por igual, os recuos ópticos de 6px e 2px devem sair.
