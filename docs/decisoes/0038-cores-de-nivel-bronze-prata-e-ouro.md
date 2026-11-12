# 0038 · Cores de nível: bronze, prata e ouro

**Data:** 12 nov 2026 · **Status:** Aceita

**Contexto.** A revisão do app de 12 nov encontrou bronze e prata em dois lugares sem token: os marcos de 400 e 700 XP da Liga e os selos "Nível 4" e "Nível 5" das Conquistas no Perfil. Cada lugar usava um tom diferente.

**Decisão.**
- `game/tier-bronze` (#D98C4A) e `game/tier-silver` (#AEB8C8), iguais nos dois temas.
- O ouro usa `game/trophy`, que já existe. Não há token de ouro separado.
- O nível aparece sempre também em texto ("Nível 4", "Bronze"), nunca só pela cor (0013).

**Alternativas.**
- Criar rampas novas de bronze e prata nos primitivos: dez degraus cada para um uso de um tom só.
- Usar tangerine e neutral para bronze e prata: confundiria com a ofensiva, que é tangerine (0006).

**Consequências.**
- Figma: variáveis `game/tier-bronze` e `game/tier-silver` na coleção Color.
- App: os marcos da Liga e os selos de nível passam a usar `--color-game-tier-bronze`, `--color-game-tier-silver` e `--color-game-trophy`.
- O TrophyShelf ganha as cores de nível na próxima revisão do componente.
