# 0017 · Tokens criados fora do documento original

**Data:** 9 a 11 nov 2026 · **Status:** Aceita

**Contexto.** Ao construir os componentes, alguns papéis não tinham token.

**Decisão.** Tokens acrescentados, cada um com motivo:
- `text/on-brand-subtle`: texto sobre o rosa suave (Button tonal, Tag).
- `text/on-danger`: ver 0005.
- `feedback/danger-pressed`, `brand/primary-subtle-pressed`, `border/strong-pressed`: estados pressionados.
- `feedback/success-subtle`, `feedback/danger-subtle`, `text/on-success-subtle`, `text/on-danger-subtle`, `text/on-success`: tags e fundos de status.
- `control/knob` e `control/knob-off`: a bolinha do Switch precisa ser branca nos dois temas.

**Alternativas.** Reaproveitar tokens com outro papel: funciona hoje e quebra na primeira troca de tema.

**Consequências.** Regra que fica: token novo só com motivo escrito no Changelog.
