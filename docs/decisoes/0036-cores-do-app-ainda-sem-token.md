# 0036 · Cores do app sem token: como trocar

**Data:** 11 nov 2026 · **Status:** Aceita

**Contexto.** Depois da primeira aplicação, o código do app ainda tem 253 cores de interface fora da tabela do guia, com 602 usos. Por faixa: 24 cores com 5 usos ou mais, 85 com 2 a 4 usos e 144 com um uso só. Dois padrões aparecem:
- Boa parte vem do **Caderno de Bordo**, que tem uma paleta rosa e lilás própria (#E0457F, #FFB3CF, #FFE3EE, #8A6CF0, #A560E8…).
- Muitas cores ficam a uma distância de 1 a 6 de uma primitiva que já existe: são quase iguais, provavelmente variações acidentais.

O caso mais urgente é o verde **#46A302** (36 usos, em borda, texto e sombra). É a cor mais usada e a mais distante de qualquer primitiva (Δ39 de mint/500).

**Decisão.**
1. **Nenhuma cor nova.** Toda cor do app vira um token que já existe, escolhido pelo papel do elemento e não pela cor mais parecida.
2. **Caderno de Bordo usa as categorias.** Metas 2027 → `category/mint`, Sonhos → `category/lilac`, Por Onde Andei → `category/pink`. Títulos e botões do Caderno seguem os mesmos tokens do resto do app (`text/primary`, `brand/primary`). Não criamos tokens `passport/*`.
3. **#46A302 sai do app.** Era a sombra do botão verde do Duolingo e o contorno da aba ativa. Como sombra de botão, vira `brand/primary-pressed`, porque o botão vira primary (0004). Em "concluído", vira `feedback/success` (0006). A pílula verde da aba ativa vira `brand/primary-subtle` (0025).
4. **Cores com Δ até 6** trocam direto pelo token do papel.
5. **Cores com um uso só:** cada uma cai nos passos 2 a 4; se alguma não couber, é sinal de um papel novo e volta para decisão.

A tabela de troca das 24 mais usadas está em [`docs/migracao/cores-0036.md`](../migracao/cores-0036.md).

**Alternativas.**
- Tokens próprios para o Caderno de Bordo: preservariam a paleta atual, mas criariam uma segunda linguagem de cor dentro do app.
- Trocar pela primitiva mais próxima: mais rápido, mas fura a regra 0001 (componentes só usam semânticos).

**Consequências.** O Caderno de Bordo fica um pouco menos "rosa e lilás" e mais alinhado ao resto do app. A tabela serve como receita para as 85 cores de 2 a 4 usos e as 144 de um uso.
