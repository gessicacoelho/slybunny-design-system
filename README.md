# SlyBunny Design System

Design system do **SlyBunny**, um app de hábitos com uma coelha esperta de olho em você. Tema escuro, Nunito, gamificação com significado.

Este repositório é a fonte de verdade em código: tokens, decisões e histórico de versões. O desenho fica no Figma e a documentação de uso no zeroheight.

| Onde | O quê |
| --- | --- |
| [Figma](https://www.figma.com/design/ojir1YFuLHGlRpyfp4G6er) | Componentes, telas montadas (página Padrões) e documentação visual |
| [zeroheight](https://contatogessicacoelho.zeroheight.com/styleguide/s/147916) | Documentação de uso: princípios, fundações e componentes, com imagens do Figma |
| `tokens/` | Cores, espaços, raios, tipografia e movimento em JSON (formato W3C) |
| `build/tokens.css` | As variáveis CSS geradas a partir dos tokens, prontas para o app |
| `docs/decisoes/` | O registro de decisões: o porquê de cada escolha |
| `CHANGELOG.md` | O que mudou em cada versão |

## Usar os tokens no app

Copie `build/tokens.css` para o projeto e importe no CSS global:

```css
@import "./tokens.css";

.card {
  background: var(--color-bg-surface);
  border: var(--border-width-default) solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-16);
}
```

O tema escuro é o padrão. Para o claro, coloque `data-theme="light"` no `<html>`.

Regra principal: componentes usam só os tokens semânticos (`--color-bg-*`, `--color-text-*`, `--color-brand-*`…). As primitivas (`--color-pink-400`) ficam para dentro do sistema. O motivo está na [decisão 0001](docs/decisoes/0001-tokens-em-duas-camadas-primitivos-e-semanticos.md).

## Mudar um token

1. Edite o JSON em `tokens/`.
2. Gere o CSS de novo:
   ```bash
   node scripts/build.mjs
   ```
3. Confira o resultado em `build/tokens.css`.
4. Se a mudança for uma decisão (cor nova, regra nova), registre em `docs/decisoes/`.
5. Anote em `CHANGELOG.md` e abra um pull request.

O script avisa se algum token apontar para outro que não existe.

## Como está organizado

```
tokens/
  primitives.json     cores cruas (rampas pink, mint, sky…)
  color.dark.json     papéis no tema escuro (padrão)
  color.light.json    só o que muda no tema claro
  dimension.json      espaço, raio, borda, elevação, ícone, toque, movimento
  typography.json     os 11 estilos de texto
scripts/build.mjs     gera build/tokens.css
docs/decisoes/        uma decisão por arquivo, numeradas
```

## Versões

Seguimos [versionamento semântico](https://semver.org/lang/pt-BR/):

- **MAJOR** (1.0 → 2.0): algo some ou muda de nome e quebra quem usa.
- **MINOR** (1.0 → 1.1): algo novo, sem quebrar nada.
- **PATCH** (1.0.0 → 1.0.1): correção de valor ou de texto.

Enquanto o sistema está em revisão, as versões ficam em 0.x.
