# Troca de cores · decisão 0036

As 24 cores mais usadas no app que ainda não têm token. O token sai do **papel** do elemento, não da cor mais parecida. Para as outras 229 cores, siga a mesma lógica.

| Cor no app | Usos | Onde aparece | Troque por |
| --- | --- | --- | --- |
| #46A302 | 36 | Sombra do botão verde 3D | `--color-brand-primary-pressed` (o botão vira primary) |
| | | Aba ativa em pílula | `--color-brand-primary-subtle` (fundo) e `--color-text-on-brand-subtle` (ícone e texto) |
| | | Borda ou texto de "concluído" | `--color-feedback-success` |
| #E0457F | 21 | Títulos do Caderno | `--color-text-primary` |
| | | Botões do Caderno | Button primary: `--color-brand-primary`, sombra `--color-brand-primary-pressed` |
| #5B4B4B | 19 | Textos do Caderno | `--color-text-primary` (é o marrom do traço das ilustrações; na arte continua) |
| #8A8A8A | 19 | Rótulos de abas, ícone de voltar | `--color-text-secondary` |
| #FFB3CF | 14 | Borda do banner e dos vazios do Caderno | `--color-category-pink-fg` (Por Onde Andei) ou `--color-border-default` (vazio) |
| #FFE3EE | 14 | Legendas e tags rosa do Caderno | `--color-category-pink-bg` |
| #F5F5F5 | 10 | Trilho de abas | `--color-bg-surface-sunken` |
| #8A6CF0 | 8 | "Adicionar meta" do Caderno | Button tonal: `--color-brand-primary-subtle` e `--color-text-on-brand-subtle` |
| #FFDFE0 | 8 | Avisos de erro | `--color-feedback-danger-subtle` |
| #F0FBE5 | 7 | Missão concluída (fundo) | `--color-bg-surface` (o check e o título riscado dizem "concluída", 0013) |
| #B8F28B | 7 | Legenda "top 3" da Liga | `--color-feedback-success` no divisor "Zona de promoção" |
| #FFF9FB | 7 | Fundo de telas do Caderno | `--color-bg-canvas` |
| #F3E6EC | 7 | Trilha da barra e folha do Caderno | Trilha: `--color-bg-surface-sunken`; folha: `--color-border-default` |
| #8B7CF6 | 7 | Não identificado | Ver o papel na tela; provavelmente `--color-category-lilac-fg` |
| #FFF0F0 | 6 | Mensagem de erro | `--color-feedback-danger-subtle` |
| #FFF0F6 | 6 | Banner e chip selecionado do Caderno | `--color-brand-primary-subtle` |
| #FF9CC0 | 6 | Categoria e chip selecionado (escuro) | `--color-category-pink-fg` |
| #FFF7FA | 6 | Banner e vazio do Caderno | `--color-bg-surface` |
| #E3D9FF | 6 | Botões do Recadinho (claro) | Button secondary: borda `--color-border-strong` |
| #B7E080 | 5 | Borda de missão concluída | `--color-border-default` |
| #F0FFF0 | 5 | Legenda da Liga | `--color-feedback-success-subtle` |
| #FFD6D6 | 5 | "Sair da conta", zona de rebaixamento | `--color-feedback-danger-subtle` |
| #3A3358 | 5 | Botões do Recadinho (escuro) | Button secondary: borda `--color-border-strong` |
| #A560E8 | 5 | Aba "Sonhos", card de frase | `--color-category-lilac-fg` (texto e borda) e `--color-category-lilac-bg` (fundo) |

## Como conferir
1. Depois de trocar, procure cada hex da tabela no código: a busca deve voltar vazia, fora das ilustrações.
2. Abra o Caderno de Bordo nos dois temas e compare com a página PassportCard do Figma.
3. Confira o contraste do texto sobre os fundos `category/*-bg`: os pares do sistema já passam de 4.5:1.
