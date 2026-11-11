# 0035 · Recadinho vazio com texto de convite

**Data:** 11 nov 2026 · **Status:** Aceita · **Altera:** o estado vazio do NoteCard (0029)

**Contexto.** O NoteCard foi desenhado para sumir quando não há recado. Numa conta nova, porém, o card some e a pessoa não descobre que pode escrever um.

**Decisão.** Conta nova mostra o NoteCard com o texto "Digite aqui o seu recado.". O card vazio é um convite, não um card em branco.

**Alternativas.** Esconder o card vazio, como no desenho original: mais limpo, mas esconde a função.

**Consequências.**
- O NoteCard ganha um estado "vazio" no Figma: texto de convite em `text/tertiary`, mesmo tamanho e pauta.
- A regra "nada de card em branco" continua valendo. Este card não está em branco: ele diz o que fazer.
