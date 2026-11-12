# Correções do app · 0.16.1

Dois arquivos para colar no app. Eles corrigem o que a conferência de 12 nov 2026 achou nos componentes Switch, Dialog e BottomSheet. Foram testados no app publicado, injetados direto no navegador, sem salvar nada.

| Arquivo | O que corrige |
|---|---|
| `slybunny-ds-correcoes.js` | O Switch vira `role="switch"` com `aria-checked` e ganha o nome da linha. O leitor de tela passa a dizer, por exemplo, "Notificações no celular, botão de alternância, ativado". |
| `slybunny-ds-correcoes.css` | Check na bolinha do Switch ligado (0013). Fundo escurecido com `overlay/scrim` (0031). Raio 24 (`radius/xl`) na folha e no Dialog, no lugar de 28. |

## Como instalar

1. Copie os dois arquivos para a mesma pasta dos outros `slybunny-ds-*`.
2. No `index.html`, coloque o CSS **depois** do último `slybunny-ds-*.css`:
   ```html
   <link rel="stylesheet" href="slybunny-ds-correcoes.css">
   ```
3. Coloque o JS **no fim do `<body>`**, depois dos outros `slybunny-ds-*.js`:
   ```html
   <script src="slybunny-ds-correcoes.js"></script>
   ```
4. Abra Perfil > Configurações e confira:
   - Os Switches ligados mostram um check rosa na bolinha.
   - No console, `document.querySelectorAll('[role=switch]').length` dá 2.

## Por que não vem tudo no CSS

O CSS muda só a aparência. Para o leitor de tela saber o que o botão é e se está ligado, ele precisa de atributos no HTML (`role` e `aria-checked`). Quem põe esses atributos é o JS, e ele acompanha o botão: quando você liga ou desliga, o atributo muda junto.

## Quando dá para apagar estes arquivos

Quando o código do app já fizer isso sozinho: o Switch com `role="switch"` e `aria-checked`, o fundo e os raios com os tokens. Esse é o caminho certo a longo prazo. Estes arquivos são um remendo por cima.

## O que fica de fora

- **Contador de diamantes mostrando 0 antes do valor certo:** precisa de mudança no código que carrega os dados (mostrar um Skeleton enquanto carrega). Não dá para resolver só com CSS.
- **Fundo do círculo do avatar (`.sb-pastel`):** é um tom da cor de cada avatar, misturado de propósito. Não é urgente.
