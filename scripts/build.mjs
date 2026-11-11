// Gera build/tokens.css a partir dos arquivos em tokens/.
// Rode com: node scripts/build.mjs
// Sem dependências: dá para ler de cima a baixo e entender cada passo.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const load = (f) => JSON.parse(readFileSync(new URL(`../tokens/${f}`, import.meta.url), "utf8"));

// 1. Achata a árvore em pares "caminho.do.token" -> token, herdando o $type do grupo.
function flatten(tree, prefix = [], type, out = {}) {
  for (const [key, node] of Object.entries(tree)) {
    if (key.startsWith("$")) continue;
    const t = node.$type ?? type;
    if (node.$value !== undefined) out[[...prefix, key].join(".")] = { ...node, $type: t };
    else flatten(node, [...prefix, key], t, out);
  }
  return out;
}

// 2. Nome CSS: color.bg.surface -> --color-bg-surface
const cssName = (path) => "--" + path.replace(/\./g, "-");

// 3. Referência {color.pink.400} vira var(--color-pink-400): o CSS mantém a ligação entre camadas.
const ref = (v) => (typeof v === "string" ? v.replace(/\{([^}]+)\}/g, (_, p) => `var(${cssName(p)})`) : v);

function value(t) {
  const v = t.$value;
  if (t.$type === "cubicBezier") return `cubic-bezier(${v.join(", ")})`;
  if (t.$type === "fontFamily") return v.map((f) => (f.includes(" ") || f === "Nunito" ? `"${f}"` : f)).join(", ");
  return ref(v);
}

const block = (selector, tokens) =>
  `${selector} {\n` +
  Object.entries(tokens)
    .filter(([, t]) => t.$type !== "typography")
    .map(([p, t]) => `  ${cssName(p)}: ${value(t)};`)
    .join("\n") +
  "\n}\n";

const primitives = flatten(load("primitives.json"));
const dark = flatten(load("color.dark.json"));
const light = flatten(load("color.light.json"));
const dimension = flatten(load("dimension.json"));
const typography = flatten(load("typography.json"));

// 4. Confere se toda referência aponta para um token que existe.
const known = new Set(Object.keys({ ...primitives, ...dark, ...dimension, ...typography }));
for (const [p, t] of Object.entries({ ...dark, ...light, ...typography })) {
  for (const m of JSON.stringify(t.$value).matchAll(/\{([a-z0-9.-]+)\}/g)) {
    if (!known.has(m[1])) throw new Error(`${p} aponta para ${m[1]}, que não existe`);
  }
}

// 5. Estilos de texto viram classes .text-*
const textClasses = Object.entries(typography)
  .filter(([, t]) => t.$type === "typography")
  .map(([p, t]) => {
    const v = t.$value;
    const lines = [
      `font-family: ${ref(v.fontFamily)};`,
      `font-size: ${v.fontSize};`,
      `line-height: ${v.lineHeight};`,
      `font-weight: ${v.fontWeight};`,
      v.letterSpacing && `letter-spacing: ${v.letterSpacing};`,
      v.textTransform && `text-transform: ${v.textTransform};`,
      v.fontVariantNumeric && `font-variant-numeric: ${v.fontVariantNumeric};`,
    ].filter(Boolean);
    return `.${p.replace(/\./g, "-")} {\n  ${lines.join("\n  ")}\n}\n`;
  });

const css = [
  "/* Gerado por scripts/build.mjs a partir de tokens/. Não edite à mão. */\n",
  "/* Primitivos: não use direto em componentes (decisão 0001). */",
  block(":root", primitives),
  "/* Tema escuro (padrão). */",
  block(":root", { ...dark, ...dimension, ...typography }),
  "/* Tema claro: <html data-theme=\"light\"> */",
  block('[data-theme="light"]', light),
  "/* Estilos de texto */",
  ...textClasses,
].join("\n");

mkdirSync(new URL("../build/", import.meta.url), { recursive: true });
writeFileSync(new URL("../build/tokens.css", import.meta.url), css);
console.log(`build/tokens.css gerado: ${Object.keys({ ...primitives, ...dark, ...light, ...dimension }).length} variáveis.`);
