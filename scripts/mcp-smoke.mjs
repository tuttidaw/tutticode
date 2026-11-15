#!/usr/bin/env node
// End-to-end smoke test of the MCP server exactly as the plugin starts it:
// reads the command from .mcp.json, speaks JSON-RPC over stdio, lists the
// tools and runs code_check on a small program (which goes through the
// bridge page in a headless browser).
//
//   node scripts/mcp-smoke.mjs
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const { command, args } = JSON.parse(
  readFileSync(join(root, '.mcp.json'), 'utf8')
).mcpServers.tutticode;
const EXPECTED = [
  'code_check',
  'code_render',
  'code_compare',
  'code_open',
  'code_reference',
  'code_account',
];
const PROGRAM = 'setcpm(30)\ndrums: s("bd sd, hh*8")\nbass: note("c2 eb2").s("sawtooth")';

const child = spawn(command, args, {
  stdio: ['pipe', 'pipe', 'inherit'],
  shell: process.platform === 'win32',
});
const pending = new Map();
let buffer = '';
child.stdout.on('data', (chunk) => {
  buffer += chunk;
  let nl;
  while ((nl = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, nl).trim();
    buffer = buffer.slice(nl + 1);
    if (!line) continue;
    const msg = JSON.parse(line);
    if (msg.id != null && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  }
});
let nextId = 1;
const request = (method, params, timeoutMs = 180_000) =>
  new Promise((resolve, reject) => {
    const id = nextId++;
    const timer = setTimeout(
      () => reject(new Error(`${method}: no answer in ${timeoutMs / 1000} s`)),
      timeoutMs
    );
    pending.set(id, (msg) => {
      clearTimeout(timer);
      if (msg.error) reject(new Error(`${method}: ${JSON.stringify(msg.error)}`));
      else resolve(msg.result);
    });
    child.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', id, method, params })}\n`);
  });

try {
  const init = await request('initialize', {
    protocolVersion: '2025-06-18',
    capabilities: {},
    clientInfo: { name: 'tutticode-repo-smoke', version: '1' },
  });
  console.log(`server: ${init.serverInfo?.name} ${init.serverInfo?.version}`);
  child.stdin.write(
    `${JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' })}\n`
  );
  const { tools } = await request('tools/list', {});
  const names = tools.map((t) => t.name);
  const missing = EXPECTED.filter((n) => !names.includes(n));
  if (missing.length) throw new Error(`missing tools: ${missing.join(', ')}`);
  console.log(`tools: ${names.join(', ')}`);

  const result = await request('tools/call', {
    name: 'code_check',
    arguments: { code: PROGRAM },
  });
  const text = result.content?.map((c) => c.text ?? '').join('\n') ?? '';
  if (result.isError) throw new Error(`code_check failed: ${text.slice(0, 2000)}`);
  console.log(`code_check: ok (${text.length} chars)`);
  console.log(text.slice(0, 600));
} finally {
  child.kill();
}
process.exit(0);
