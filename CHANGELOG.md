# Changelog

Todas as mudanças do SlyBunny DS. A versão mais nova fica no topo. O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [0.17.0] · 12 nov 2026

O HeroCard passa para Estável, e o app ganha um pacote de correções pronto para colar.

### Adicionado (Figma)
- Ícone `icon/ui/chevron-up`.
- HeroCard com a propriedade `Collapse`: botão tonal com seta para recolher a arte. Só a toca usa.
- Na página HeroCard, o exemplo "Toca no app", montado com o conteúdo real e com a tabela do app para os tokens.
- Quadro "Como foi construído" do HeroCard gerado de novo, já com o `Collapse`. O quadro de ícones de interface passa a ter 33 ícones.

### Documentação
- zeroheight: página HeroCard com a imagem do exemplo "Toca no app" e uma linha sobre o `Collapse` no resumo. Arquivo do Figma sincronizado.
- Doc de ajustes: resultado do script de conferência rodado nas cinco abas do app.

### Adicionado (app)
- `app/correcoes-0.16.1/`: CSS e JS com o Switch acessível, o fundo escurecido com `overlay/scrim` e o raio 24 na folha e no Dialog. Testado no app publicado.

### Status
- HeroCard passa para Estável. A variante `Theme=room` já era o herói da Toca, com o painel claro, porque o HeroCard fica sempre no modo Light. Faltava só o botão de recolher.
- Ficam 27 estáveis e 6 em revisão: BottomSheet, Celebration, Dialog, EmptyState, Skeleton e Toast.

### Para o app
- O painel da Toca usa o creme e o marrom certos, mas com valores soltos: #FFF4E4, #E8C9A0, #C47A1A, raio 20. A troca pelos tokens do modo Light está na página HeroCard do Figma. O painel fica dentro de um shadow DOM, então a mudança tem que ser feita no código dele.

## [0.16.1] · 12 nov 2026

Conferência no app dos componentes que ainda não tinham sido vistos. Nenhum token mudou.

### Status
- Switch, SettingsRow e Avatar passam para Estável. Foram vistos em Perfil > Configurações e no seletor "Trocar avatar", e batem com o Figma: Switch 48×28 com bolinha de 20, trilha `brand/primary`, bolinha `control/knob`; SettingsRow em `bg/surface` com raio 16 e borda `border/default`; Avatar redondo de 56 com a escolha marcada em rosa.
- Ficam 26 estáveis e 7 em revisão: HeroCard, BottomSheet, Celebration, Dialog, EmptyState, Skeleton e Toast.
- Toast, BottomSheet e Dialog existem no código do app (`.sb-cad-toast`, `.sb-cx-dtoast`, `.sb-cad-sheet`, `[role=dialog]`), mas só aparecem depois de salvar, apagar ou mudar algo. Não foram abertos para não mexer nos dados da conta.
- O Skeleton não existe no app: a tela carrega direto.

### Para o app
- Switch: falta `role="switch"` e `aria-checked`, então o leitor de tela não sabe se está ligado. Falta o check na bolinha quando ligado (0013).
- Fundo escurecido (`.modal-overlay`): preto a 50%. Trocar por `var(--color-overlay-scrim)` (0031).
- Folha (`.sb-cad-sheet`) e Dialog: raio 28. Trocar por `var(--radius-xl)` (24).
- Pacote pronto em `app/correcoes-0.16.1/` (CSS e JS) com as três primeiras correções, testado no app publicado. O `LEIA-ME.md` explica como instalar.
- O fundo do círculo do avatar (`.sb-pastel`) é um tom da cor de cada avatar, misturado de propósito. Fica para depois.
- O contador de diamantes mostra 0 por um instante antes do valor certo. Mostrar um Skeleton no lugar do número até carregar.

## [0.16.0] · 12 nov 2026

Figma mais didático e a biblioteca de ícones do app.

### Adicionado (Figma)
- Quadro "Para entender" em todas as páginas: o que é, por que é importante e como funciona no SlyBunny.
- Quadro "Como foi construído" nas 33 páginas de componentes, no formato do Guidelines do Align UI: estrutura em auto layout com os tokens, camadas, propriedades e passo a passo de uso. É gerado a partir do próprio componente.
- 104 ícones do app (`icon/app/`), tirados do app publicado como vetor e organizados pela aba onde aparecem, na página Utilitários.

- Página Padrões: Caderno de Bordo com as 3 variações (Metas 2027, Sonhos, Por Onde Andei).
- TrophyItem com `Tier` (none, bronze, silver, gold, só em past) e `Nova` (ponto de Badge), aplicando 0038 e 0040.
- PassportCard com a propriedade `Fala`; SpeechBubble com a regra de posição.
- Página Changelog do Figma com as versões 0.13.1 a 0.16.

### Status
- TrophyShelf, PassportCard e SpeechBubble passam para Estável: 23 estáveis, 10 em revisão.

### Documentação (zeroheight)
- Página Ícones com os ícones do app; tabela de status atualizada.

### Corrigido (Figma)
- Os 32 ícones de interface (`icon/ui/`) não apareciam no fundo claro da página Utilitários. Agora ficam num quadro escuro, com o nome de cada um.

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
