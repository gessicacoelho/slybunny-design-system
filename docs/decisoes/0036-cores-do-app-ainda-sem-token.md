# 0036 · Cores do app ainda sem token

**Data:** 11 nov 2026 · **Status:** Em aberto

**Contexto.** Depois da primeira aplicação, o código do app ainda tem 253 cores de interface fora da tabela do guia, com 602 usos. Por faixa: 24 cores com 5 usos ou mais, 85 com 2 a 4 usos e 144 com um uso só. Dois padrões aparecem:
- Boa parte vem do **Caderno de Bordo**, que tem uma paleta rosa e lilás própria (#E0457F, #FFB3CF, #FFE3EE, #8A6CF0, #A560E8…).
- Muitas cores ficam a uma distância de 1 a 6 de uma primitiva que já existe: são quase iguais, provavelmente variações acidentais.

O caso mais urgente é o verde **#46A302** (36 usos, em borda, texto e sombra). É a cor mais usada e a mais distante de qualquer primitiva (Δ39 de mint/500).

**Proposta.**
1. Cores com Δ até 6: trocar pelo token do papel, usando a primitiva mais próxima como guia. Exemplo: #FFF0F0 em mensagem de erro vira `feedback/danger-subtle`.
2. #46A302: como sombra de botão, vira `brand/primary-pressed`. Em borda ou texto de "concluído", vira `feedback/success`. A aba ativa verde em pílula sai, pela decisão 0025.
3. Caderno de Bordo: usar as categorias `category/pink`, `category/lilac` e `category/mint`. Se o Caderno precisar de mais tons, criar tokens `passport/*` com motivo escrito, não hex soltos.
4. Cores com um uso só: revisar uma a uma. A maioria deve cair nos passos 1 ou 3.

**Decidir:** aprovar a proposta, ou decidir o Caderno de Bordo à parte, porque é a maior família.
