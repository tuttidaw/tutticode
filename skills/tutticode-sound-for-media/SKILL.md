---
name: tutticode-sound-for-media
description: "Make music beds, loops, stems and sound effects (riser, impact, whoosh, UI click/confirm/error, notification, transition, ambience) for videos, apps and games with TuttiCode, rendered to files at an exact length and a platform loudness (-14 LUFS web/social, -16 podcasts, -23 broadcast) with the tutticode tools. Use when a video, app, game, podcast or presentation needs music or sound effects, or when asked to render audio of a given length or loudness."
---

# Sound for videos, apps and games with TuttiCode

Make music beds, loops, stems and sound effects for media in TuttiCode, and
deliver files at the right length and loudness. The language itself is in
the `tutticode` skill (install both: `tutticode skills install`); the tools
are `code_check`, `code_render`, `code_compare` from the local `tutticode`
MCP server or CLI (default: free, renders in the user's browser, writes
files) or TuttiDAW's web MCP (server renders, Muse points, 60 s, no files:
a `listenUrl`). Without sign-in,
the local tools render at most 60 s and tag renders over
30 s with a spoken "register at TuttiDAW": for a longer delivery, when a
render hits a limit (`limit` error, `watermark`), suggest
`tutticode login` (free) to the user (the `tutticode` skill says how an
agent gets the approval). Never change the program to remove the tag.

## Workflow

1. **Brief.** Pin down: what it is for (video, app UI, game, podcast),
   mood, exact length in seconds (or loop), where it plays (the loudness
   target below), whether it sits under speech, stems or not, file format.
   Ask only what you cannot infer.
2. **Pick a recipe** nearest the brief: `references/sfx-recipes.md` for
   effects, `references/music-recipes.md` for beds and loops. Recipes are
   tested to compile and render clean.
3. **Write**: adapt the recipe (key, chords, sounds, tempo, length). Label
   every voice (`drums:`, `pad:`): labels name the stems and the tracks.
4. **`code_check`**: fix every error, then the mix warnings.
5. **`code_render`** with the delivery settings: the exact length
   (`seconds`, or `loops` for a loop), `fadeIn` / `fadeOut`, a `tail` for
   reverbs, `lufs` for the platform, `stems: true` if the editor wants
   them, `out` with the extension of the format (`.wav`, `.flac`, `.mp3`).
6. **Read the stats** (the `tutticode` skill's `references/agent-loop.md`):
   loudness and true peak, clipping, silent bars, every voice's level,
   `barTimes` / `beatTimes` for syncing cuts.
7. **Revise** one thing at a time and render again; `code_compare` with
   `againstRenderId` says whether the edit moved what you meant.
8. **Deliver**: the file paths, the length and loudness, and the
   `editUrl` (local) or `listenUrl` (web).

Recipe index:

- Sound effects (`references/sfx-recipes.md`): `riser`, `impact`, `whoosh`, `ui-click`, `ui-confirm`, `ui-error`, `notification`, `transition`, `ambience-bed`
- Music beds (`references/music-recipes.md`): `lofi-bed`, `upbeat-pop-bed`, `cinematic-tension`, `ambient-bed`, `chiptune-loop`, `kick-ducked-bed`

## Loudness and length

| Where it plays | `lufs` |
| --- | --- |
| Web, social video, apps, games (music) | -14 |
| Podcasts, video beds | -16 |
| A bed under a voice-over | -20..-24 (or -16 and let the editor duck it) |
| Broadcast (EBU R128) | -23 |
| Short sound effects | -18..-26: peaky, see each recipe |

- True peak ceiling -1 dBTP (the default, `truePeak`). No file is written
  clipped: without `lufs`, a render that would pass the ceiling is lowered
  by one static gain (a negative `gainDb` and a line in `warnings`). `lufs`
  is one static gain: a peaky program (most drum programs at -14..-16)
  fails with `clip`. Then lower the target, lower the loudest voice's
  `.gain` and render again, end the program with
  `master.fx("Limiter", {gainDb: 3, ceiling: -3})` (the program's own bus
  catches the peaks before the gain, as the music recipes do), or add
  `limit: true` (`--limit`): the render's true-peak limiter holds the
  ceiling and reports the most it took off (`limitDb`). More than about
  6 dB of it flattens the drums: then lower the target instead.
- Exact durations: `seconds` cuts exactly. A one-shot effect is one bar
  long: `setcpm` sets the bar (`setcpm(60)` = 1 s, `setcpm(15)` = 4 s).
- Video beds: `fadeIn` 1-3 s, `fadeOut` 2-5 s, `tail` for the reverb.
- Loops for apps and games: `loops` N with `tail: 0`, no fades, so the file
  is exactly N loops and repeats in time; keep the last step short.
- Stems: `stems: true` writes one file per voice (named by the labels); the
  mix's static gain applies to the stems too, so they still sum to the mix.
  A stem that would clip on its own is lowered further (its `gainDb` in
  `voices`, a line in `warnings`); the limiter never touches stems.

## Quality bar: never deliver

- a render whose `check.diagnostics` has an `error`, or the `clip` error;
- clipping (`analysis.loudness.clipping`) or a true peak above -1 dBTP;
- a dead mix: integrated loudness null / -70, an unplanned silent bar, or a
  voice whose `lufs` is null;
- a length other than the one asked for (check `window.seconds`, plus the
  tail);
- without the `editUrl` (or `listenUrl`): always give it to the user, it
  opens the program in TuttiCode to keep editing;
- a render with a `watermark` (the anonymous voice tag) without telling
  the user it is there and that `tutticode login` removes it.

## Mixing a bed

With several voices, mix like a studio: one `bus("verb")` (and a
`bus("echo")`) that the voices `.send("verb", dB)` to, so they share one
room, instead of a `.room()` per voice; `.mix({vol: -6})` (dB) to balance
the voices; `master.fx("Limiter", ...)` last, so the loudness target fits
under the ceiling; `group("drums")` + `.group("drums")` for one drum fader.
Single-voice effects keep `.room` / `.delay`. Details: the `tutticode`
skill's `references/mixing.md`.

## Sound effects

Synth voices work everywhere. Noise is `s("white")`, `s("pink")` or
`s("brown")` (hard to soft), shaped by the envelope and filters like any
synth voice (`s("crackle")` is approximated). Pitch sweeps
use the pitch envelope (`.penv(semitones).pattack(s)` / `.pdecay(s)`),
swells the amplitude envelope (`.attack` / `.decay` / `.sustain(0)`), and
`gm_reverse_cymbal`, `gm_fx_rain`, `gm_seashore`, `gm_fx_sci_fi` are ready
riser, rain, waves and sci-fi textures (`note("c4").s(...)`).

## References

- `references/sfx-recipes.md`: riser, impact, whoosh, UI click / confirm /
  error, notification, transition, ambience bed; each with render settings.
- `references/music-recipes.md`: music beds and loops by mood, with their
  Muse style for `code_compare`.
- The `tutticode` skill: the language, `references/agent-loop.md` (every
  report field), functions and devices.
