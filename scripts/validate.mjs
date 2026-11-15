#!/usr/bin/env node
// Static checks of the repository: the plugin manifests agree with each other
// and with .mcp.json, the files they name exist, every skill has a SKILL.md
// with a name and a description, and every example has its files.
//
//   node scripts/validate.mjs
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const errors = [];
const read = (p) => readFileSync(join(root, p), 'utf8');
const json = (p) => JSON.parse(read(p));
const exists = (p) => existsSync(join(root, p));

const claude = json('.claude-plugin/plugin.json');
const codex = json('.codex-plugin/plugin.json');
const market = json('.claude-plugin/marketplace.json');
json('.agents/plugins/marketplace.json');
const mcp = read('.mcp.json');

if (claude.version !== codex.version) {
  errors.push(`version: claude ${claude.version} != codex ${codex.version}`);
}
if (!mcp.includes(`tutticode@${claude.version}`)) {
  errors.push(`.mcp.json does not pin tutticode@${claude.version}`);
}
const server = json('server.json');
if (
  server.version !== claude.version ||
  server.packages?.[0]?.version !== claude.version ||
  server.packages?.[0]?.identifier !== 'tutticode'
) {
  errors.push(`server.json does not list tutticode ${claude.version}`);
}
if (server.description.length > 100) {
  errors.push('server.json: the MCP Registry allows a description of 100 characters');
}
if (market.plugins?.[0]?.name !== claude.name) {
  errors.push('marketplace.json does not list the plugin');
}
for (const p of [claude.icon, codex.interface?.logo, ...(codex.interface?.screenshots ?? [])]) {
  if (p && !exists(p)) errors.push(`missing file ${p}`);
}
for (const p of claude.skills ?? []) {
  if (!exists(join(p, 'SKILL.md'))) errors.push(`missing ${p}/SKILL.md`);
}

for (const name of readdirSync(join(root, 'skills'))) {
  const file = join('skills', name, 'SKILL.md');
  if (!exists(file)) {
    errors.push(`missing ${file}`);
    continue;
  }
  const head = read(file).split('\n---')[0];
  if (!/^---\n[\s\S]*name:\s*\S/.test(head) || !/description:\s*\S/.test(head)) {
    errors.push(`${file}: frontmatter needs name and description`);
  }
}

// Every README's code sample has a play link (and the hero image links to
// it) whose program is the sample itself, comments aside.
const program = (code) =>
  code
    .split('\n')
    .map((line) => line.replace(/\s*\/\/.*$/, '').trimEnd())
    .filter(Boolean)
    .join('\n');
for (const file of readdirSync(root).filter((f) => /^README(\..+)?\.md$/.test(f))) {
  const text = read(file);
  const sample = /```js\n(setcpm[\s\S]*?)```\n\n\[▶[^\]]*\]\((https:\/\/tuttidaw\.com\/code#[^)]+)\)/.exec(text);
  if (!sample) {
    errors.push(`${file}: the code sample needs a "▶" play link right after it`);
    continue;
  }
  const linked = Buffer.from(decodeURIComponent(sample[2].split('#')[1]), 'base64').toString('utf8');
  if (program(linked) !== program(sample[1])) {
    errors.push(`${file}: the play link does not play the code sample above it`);
  }
  if (!text.includes(`](docs/images/hero.png)](${sample[2]})`)) {
    errors.push(`${file}: the hero image should link to the same program`);
  }
}

const examples = join(root, 'examples');
for (const name of existsSync(examples) ? readdirSync(examples) : []) {
  if (!statSync(join(examples, name)).isDirectory()) continue;
  for (const f of ['README.md', 'render.json']) {
    if (!exists(join('examples', name, f))) errors.push(`examples/${name}: missing ${f}`);
  }
  const renders = json(join('examples', name, 'render.json'));
  for (const r of renders) {
    if (!exists(join('examples', name, r.program))) {
      errors.push(`examples/${name}: missing ${r.program}`);
    }
  }
}

if (errors.length) {
  for (const e of errors) console.error(`error: ${e}`);
  process.exit(1);
}
console.log(`ok: tutticode ${claude.version}, ${readdirSync(join(root, 'skills')).length} skills`);
