#!/usr/bin/env node
// Syncs this repository with the published `tutticode` npm package.
//
// The CLI and MCP server are the npm package (`npx tutticode`); this repo
// holds what an agent installs from GitHub: the skills, the plugin manifests
// and the examples. The skills are copied verbatim from the package's
// dist/skills, so the repo always teaches exactly what the pinned CLI does.
//
//   node scripts/sync-from-npm.mjs            # latest version on npm
//   node scripts/sync-from-npm.mjs 0.3.1      # a given version
//   node scripts/sync-from-npm.mjs --check    # exit 1 if out of date
//
// Writes: skills/**, the version in the plugin manifests, and the pinned
// `tutticode@<version>` in .mcp.json. Needs Node 20+, npm and tar.
import { execFileSync } from 'node:child_process';
import {
  cpSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const args = process.argv.slice(2);
const check = args.includes('--check');
const wanted = args.find((a) => !a.startsWith('--')) ?? 'latest';
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const run = (cmd, argv, opts = {}) =>
  execFileSync(cmd, argv, {
    encoding: 'utf8',
    shell: process.platform === 'win32' && cmd === npm,
    ...opts,
  }).trim();

const version = run(npm, ['view', `tutticode@${wanted}`, 'version']);
const manifests = [
  '.claude-plugin/plugin.json',
  '.codex-plugin/plugin.json',
];
const current = JSON.parse(
  readFileSync(join(root, manifests[0]), 'utf8')
).version;

if (check) {
  if (current !== version) {
    console.log(`out of date: repo ${current}, npm ${version}`);
    process.exit(1);
  }
  console.log(`up to date: ${version}`);
  process.exit(0);
}

const work = mkdtempSync(join(tmpdir(), 'tutticode-sync-'));
try {
  const tgz = run(npm, ['pack', `tutticode@${version}`, '--silent'], {
    cwd: work,
  })
    .split('\n')
    .pop();
  run('tar', ['xzf', tgz], { cwd: work });
  const from = join(work, 'package', 'dist', 'skills');
  const names = readdirSync(from);
  if (!names.includes('tutticode')) {
    throw new Error(`tutticode@${version} ships no skills/tutticode`);
  }
  rmSync(join(root, 'skills'), { recursive: true, force: true });
  cpSync(from, join(root, 'skills'), { recursive: true });

  for (const file of manifests) {
    const path = join(root, file);
    const json = JSON.parse(readFileSync(path, 'utf8'));
    json.version = version;
    writeFileSync(path, `${JSON.stringify(json, null, 2)}\n`);
  }
  // the MCP Registry entry (server.json): its version and the npm package's
  const serverPath = join(root, 'server.json');
  const server = JSON.parse(readFileSync(serverPath, 'utf8'));
  server.version = version;
  for (const p of server.packages ?? [])
    if (p.identifier === 'tutticode') p.version = version;
  writeFileSync(serverPath, `${JSON.stringify(server, null, 2)}\n`);
  const mcpPath = join(root, '.mcp.json');
  const mcp = readFileSync(mcpPath, 'utf8').replace(
    /tutticode@[0-9A-Za-z.+-]+/g,
    `tutticode@${version}`
  );
  writeFileSync(mcpPath, mcp);
  console.log(
    `synced tutticode@${version} (was ${current}): skills ${names.join(', ')}`
  );
} finally {
  rmSync(work, { recursive: true, force: true });
}
