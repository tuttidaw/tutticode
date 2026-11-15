# Contributing

Thanks for helping. The most useful things you can send:

- **Bug reports**: what you asked the agent, the program (`song.tc` or the `editUrl`), the command or MCP call, and the output of `npx tutticode doctor`.
- **Sounds that come out wrong**: a short program and what you expected to hear.
- **Pieces you made**: share them in Discussions, with the `editUrl`.
- **Skill improvements**: a mistake agents keep making, or a recipe that works. Open an issue or a pull request against `skills/`.

## How this repository is built

The CLI and MCP server are the [`tutticode`](https://www.npmjs.com/package/tutticode) npm package; their source lives in TuttiDAW's main repository. The `skills/` folder here is copied from the published package by [`scripts/sync-from-npm.mjs`](scripts/sync-from-npm.mjs), and a workflow keeps it in sync. A pull request that changes `skills/` is welcome: we carry the change into the package, and the next release brings it back here.

Examples (`examples/`) are kept as the models made them; we do not edit their code.

## Checking your change

```sh
node scripts/sync-from-npm.mjs --check     # is the repo on the latest npm version?
npx tutticode check examples/*/song.tc     # do the examples still compile?
```

The `e2e` workflow installs the package from npm, validates the plugin manifests, checks every example, and renders one in a headless Chrome.
