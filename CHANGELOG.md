# Changelog

Versions of the [`tutticode`](https://www.npmjs.com/package/tutticode) npm package, which this plugin pins in [`.mcp.json`](.mcp.json). The skills in `skills/` are the ones shipped with that version.

## 0.3.1 (2026-11-13)

- Skills: a "Visual feedback" reference and the performance function names.

## 0.3.0 (2026-11-08)

- Whole songs: `track()`, `section()` and `form()`; `render` renders one pass of the form by default.
- Completion of track and section names.

## 0.2.2 (2026-11-05)

- Says that the limits for renders without sign-in now apply.

## 0.2.1 (2026-11-05)

- Windows: sign-in no longer fails.

## 0.2.0 (2026-11-05)

- Sign-in: `login` (browser or `--device` code), `logout`, `whoami`; `code_account` tool. A free account renders up to 5 minutes without the voice tag.

## 0.1.1 (2026-11-05)

- Never writes a clipped file: a render over the true-peak ceiling is lowered by one static gain; `--limit` adds a true-peak limiter instead.
- `open --headless` prints the link.

## 0.1.0 (2026-11-05)

- First release: `check`, `render`, `open`, `doctor`, `skills install` and the MCP server (`code_check`, `code_render`, `code_compare`, `code_open`, `code_reference`), rendering in your own browser.
