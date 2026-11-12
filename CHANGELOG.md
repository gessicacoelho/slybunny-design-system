# Changelog

Todas as mudanças do SlyBunny DS. A versão mais nova fica no topo. O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

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
