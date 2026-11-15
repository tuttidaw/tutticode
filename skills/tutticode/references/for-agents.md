# TuttiCode for agents

Let Claude Code, Copilot, Codex or any MCP client write TuttiCode and render it to audio files in your own browser, with the tutticode CLI, MCP server and skills.

AI agents can write TuttiCode as well as you can, but they cannot hear it.
**tutticode** gives them ears and a mixing desk: a command-line tool and an
MCP server that check a program, render it to WAV, FLAC or MP3 with the
same engine as this page, and measure the result (loudness, peaks, balance,
groove) so the agent can fix what it cannot hear. Two skills teach agents
the language and how to make sound for videos, apps and games.

## Install

You need Node 20 or newer and Google Chrome or Microsoft Edge.

```sh
npm i -g tutticode
tutticode skills install
tutticode doctor
```

`skills install` copies the two skills, `tutticode` (the language) and
`tutticode-sound-for-media` (music beds, loops and sound effects at the
right length and loudness), into the skill folders of Claude Code
(`~/.claude/skills`), Copilot CLI (`~/.copilot/skills`) and Codex
(`~/.codex/skills`): every one that exists on your computer, or the ones
you name with `--claude`, `--copilot`, `--codex`, or any folder with
`--dir <path>`.

For MCP clients, add the server, for example in Claude Code:

```sh
claude mcp add tutticode -- tutticode mcp
```

## Two backends, one API

The tools have the same names everywhere: `code_check` (compile, no
audio), `code_render` (render and measure) and `code_compare` (compare with
a target or an earlier render). Only where the audio is made differs:

- **tutticode on your computer** (the default): renders in your own browser
  and writes the files to your disk. Free, up to 5 minutes of audio per
  render with a free account (`tutticode login`); without sign-in, up to
  60 seconds, and renders
  over 30 seconds carry a spoken "register at TuttiDAW" tag. It also offers `code_open` (open a program here for you to hear),
  `code_reference` (search the language reference) and `code_account`
  (signed in or not, and the limits).
- **TuttiDAW's web MCP** (`https://tuttidaw.com/api/mcp`) and the HTTP API
  (`/api/code/check`, `/api/code/render`, `/api/code/compare`): for agents
  that cannot run programs on your computer. Renders on our servers, needs
  you to be signed in, costs Muse points, at most 60 seconds, and returns a
  link to listen to instead of files.

## Example: a riser for a video

1. Ask your agent: "Make a 4 second riser for the start of my video,
   normalised for YouTube, and save it as riser.wav."
2. The agent picks the riser recipe from the media skill, writes the
   program and runs `code_check` until it has no errors:

```js
setcpm(15) // one bar = 4 s
cymbal: note("c4").s("gm_reverse_cymbal").gain(0.9)
sweep: note("c3").s("sawtooth").penv(24).pattack(4).attack(3.5).release(0.1).lpf(2000).gain(0.4)
```

3. It renders the file and reads the numbers before it hands it over:

```sh
tutticode render riser.tc -o riser.wav --seconds 4 --lufs -18 --json
```

You get `riser.wav`, its loudness and true peak, and an `editUrl` that
opens the program here, so you can listen, change it and render it again
yourself. Press play above to hear what the agent made.

## Example: a bed that mixes itself

For music with several voices the agent mixes in the code, as in the
[Mixing](mixing.md) lesson: one shared reverb on a bus that the voices send
to, each voice's level with `.mix`, and a limiter on the `master` so the
loudness target fits under the peak ceiling:

```js
setcpm(15) // 60 BPM
bus("verb").fx("Reverb", {dryWetBalance: 1, decayTime: "4s"})
master.fx("Limiter", {gainDb: 3, ceiling: -3})
drone: note("c2").s("sawtooth").lpf(300).attack(1).release(1).mix({vol: -6}).send("verb", -18)
strings: chord("<Cm Ab>").voicing().s("supersaw").attack(2).release(2).lpf(1200).mix({vol: -10}).send("verb", -4)
pulse: note("c6*8").s("sine").decay(0.1).sustain(0).mix({vol: -8}).send("verb", -14)
```

```sh
tutticode render tension.tc -o tension.wav --loops 3 --tail 3 --fade-out 4 --lufs -18 --json
```

Each voice's `lufs` in the report (`voices`) says whether the balance is
what the agent meant; it changes a `.mix` or a `.send` and renders again.
Drums can share one fader with `group("drums")` and `.group("drums")`
([Mixing: groups](mixing-groups.md)), and melodies can be written as
`note("do re mi")` ([Melodies with do re mi](melodies-with-do-re-mi.md)).

## Privacy

tutticode renders on your computer: the program goes from the agent to the
TuttiCode page in your own browser and nowhere else. The bridge sends no
program code and no audio to our servers, and tutticode sends no telemetry.
Its logs stay in `~/.tutticode/logs` and never contain your programs or
audio. The page itself loads from tuttidaw.com like any web page, with its
instruments and samples. The web MCP is different: there the program is
sent to TuttiDAW to be rendered.

## The browser permission

The TuttiCode page talks to tutticode over your own computer
(`127.0.0.1`), which Chrome and Edge treat as your local network:

- By default tutticode starts a hidden browser with its own profile and
  allows this for tuttidaw.com only; you see nothing.
- With `--show` (the default when you type a command yourself) it uses a
  tab in your normal browser. The first time, the page asks whether this
  agent may render sound with TuttiCode, and the browser asks whether
  tuttidaw.com may access devices on your local network: allow both.
- `tutticode setup` (optional) explains, asks, and then sets one browser
  policy for your user so that the second question does not come back:
  local network access for `https://tuttidaw.com` only.
  `tutticode setup --undo` removes exactly that entry.

## Troubleshooting

Run `tutticode doctor` first: it checks Node, the browser, the page, the
connection and the engine version, and says what to fix.

- **No browser found**: install Chrome or Edge, or point tutticode at one
  with `--browser <path>` or the `TUTTICODE_BROWSER` variable.
- **The page never connects** (exit code 2): allow the local network
  question in the browser (or run `tutticode setup`), and check that no
  extension or company policy blocks tuttidaw.com.
- **Errors in the code** (exit code 1): the report lists each one with its
  line, column and a fix; the agent should run `code_check` until it is
  clean.
- **`clip`**: the loudness asked for would push the peaks past -1 dBTP.
  Ask for a lower `--lufs`, or turn down the loudest voice.
- **A render that runs too long**: give it more time with `--timeout`, or
  render fewer loops.

Source: https://tuttidaw.com/code/learn/for-agents
