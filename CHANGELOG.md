# Changelog

Todas as mudanças do SlyBunny DS. A versão mais nova fica no topo. O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [0.15.0] · 12 nov 2026

Revisão do app publicado contra o sistema. 20 componentes passam para Estável.

### Status dos componentes
- **Estável:** Accordion, Badge, BottomNav, Button, Card, Carousel, Checkbox, Chip, GoalCard, IconButton, Input, MissionCard, NoteCard, ProgressBar, RankingRow, SectionHeader, StatCard, Stepper, Tag, TopBar.
- **Em revisão por lacuna no sistema:** HeroCard, PassportCard, SpeechBubble, TrophyShelf.
- **Em revisão por não terem sido vistos no app:** Avatar, BottomSheet, Celebration, Dialog, EmptyState, SettingsRow, Skeleton, Switch, Toast.

### Adicionado
- `game/tier-bronze` e `game/tier-silver` (decisão 0038).
- `overlay/on-art`: neutral/950 a 24% (decisão 0041).

### Decisões
- 0038: cores de nível bronze e prata; o ouro usa `game/trophy`.
- 0039: o quarto da Toca é ilustração; textos e botões em cima dele seguem o sistema.
- 0040: a etiqueta "NOVA" é um Badge no canto da medalha.
- 0041: `overlay/on-art` para os painéis sobre a arte dos heróis (altera 0031).

### Documentação (zeroheight)
- Abertura da categoria Componentes com a tabela de status dos 33.
- Aberturas de Comece aqui e Linguagem visual e a capa: o texto do modelo em inglês saiu e entrou o conteúdo do SlyBunny. O guia passa a se chamar "SlyBunny Design System".
- Página Decisões com 0038 a 0041.

### Figma
- Status "Estável" nos 20 componentes, nas páginas e no índice.
- Variáveis `game/tier-bronze`, `game/tier-silver` e `overlay/on-art`.

## [0.14.0] · 12 nov 2026

As três decisões que estavam em aberto foram fechadas. Nenhuma decisão fica em aberto.

### Adicionado
- Token `overlay/scrim` (`--color-overlay-scrim`): neutral/950 a 70%, para o fundo escurecido de Dialog e BottomSheet.

### Decisões
- 0031: o fundo escurecido usa `overlay/scrim`. O `overlay/on-art` fica para quando houver um uso real.
- 0032: o logo continua verde e rosa.
- 0033: as rampas mantêm os nomes mint, sky, tangerine e os outros.

### Figma
- Variável `overlay/scrim` na coleção Color, ligada às camadas Scrim das páginas Dialog e BottomSheet. O visual não muda.

### Para o app
- Trocar o valor solto do fundo escurecido por `var(--color-overlay-scrim)`.

## [0.13.1] · 12 nov 2026

Documentação mais visual. Nenhum token, componente ou decisão mudou.

### Documentação (zeroheight)
- As páginas de fundações e os 33 componentes mostram imagens do Figma. Cada componente tem duas: anatomia e variantes.
- Nova página de abertura da categoria Princípios: os 9 princípios e as telas da página Padrões, com o que observar em cada uma.
- Nova categoria Padrões: abertura com as telas do app e as páginas Estados da tela, Navegação e Confirmar e desfazer.
- Nova categoria Recursos: links para o Figma, o repositório, os tokens, a tabela de troca de cores, o registro de decisões e o changelog.
- Introduções revisadas: sobras do modelo em inglês foram removidas.

### Figma
- Padrões: a `Toca · comemoração` passou para dentro de um frame com o mesmo nome, igual aos outros estados da Toca. Assim o zeroheight a reconhece como tela.

## [0.13.0] · 11 nov 2026

Decisões tomadas ao aplicar o sistema no app publicado.

### Decisões
- 0034: a TopBar mantém 5 itens, com o coelho verde (substitui 0024).
- 0035: o recadinho vazio mostra um texto de convite.
- 0036: as cores do app sem token viram tokens que já existem; o Caderno de Bordo usa as categorias; o verde #46A302 sai do app.
- 0037: a Missão Relâmpago é a variante `State=flash` do MissionCard.

### Adicionado
- `docs/migracao/cores-0036.md`: tabela de troca das 24 cores mais usadas.

### Figma (v0.13)
- TopBar com 5 itens; NoteCard com estado vazio; MissionCard `State=flash`; ícone `icon/ui/bolt`.

## [0.12.0] · 11 nov 2026

Primeira versão no GitHub. Reúne tudo o que foi feito no Figma de 9 a 11 de novembro.

### Adicionado
- Tokens em JSON (formato W3C): primitivos, cores dos temas escuro e claro, dimensões e tipografia.
- `scripts/build.mjs`, que gera `build/tokens.css`.
- Registro de decisões com 33 entradas (30 aceitas, 3 em aberto) em `docs/decisoes/`.

### Histórico do Figma (antes do repositório)
- **v0.12:** NoteCard; SettingsRow link; Badge no Button; fala da coelha no HeroCard; nota de uso no Carousel.
- **v0.11:** IconButton; regra de não repetir informação no hero.
- **v0.10:** página Padrões com as 5 abas e a boas-vindas montadas só com componentes.
- **v0.9:** TopBar, BottomNav, Dialog, BottomSheet, EmptyState, Skeleton, Celebration; Template/Screen completo.
- **v0.8:** Input, Switch, SettingsRow, Toast; tokens `control/knob`.
- **v0.1 a v0.7:** fundações (cor, tipografia, espaço, raio, elevação, ícones, ilustração, movimento, voz e tom) e os primeiros 20 componentes.
