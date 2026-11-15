# Privacy

This plugin runs the [`tutticode`](https://www.npmjs.com/package/tutticode) npm package on your computer. Here is what goes where.

## What stays on your computer

- **Your programs and your audio.** The agent hands the program to `tutticode`, which passes it over a WebSocket on `127.0.0.1` to the TuttiCode page in your own browser. The page renders it there and streams the audio back; `tutticode` writes the files. No program code and no audio are sent to TuttiDAW's servers.
- **Logs** in `~/.tutticode/logs`. They never contain your programs, audio or tokens.
- **Your sign-in**, if you made one, in `~/.tutticode/credentials`, readable only by you.

## What reaches tuttidaw.com

- The bridge page and its instruments, samples and effects load from tuttidaw.com like any web page.
- The page counts each render's length, format and outcome: with your account when you are signed in, otherwise as anonymous counts keyed by a random install id (`~/.tutticode/install-id`) that is not tied to you. This is how the limits for renders without sign-in are enforced.
- `tutticode` itself sends no telemetry.

## What reaches anyone else

- `npx` downloads the `tutticode` package from the npm registry.
- Your agent sends what it reads, including programs and render reports, to its own model provider, as it does for any tool.

## The `editUrl`

Every render returns a link such as `https://tuttidaw.com/code#…`. The program is encoded in the part after `#`, which browsers do not send to the server.

## More

TuttiDAW's privacy policy: <https://tuttidaw.com/page/privacy>. Questions: open an issue, or write to the address on that page.
