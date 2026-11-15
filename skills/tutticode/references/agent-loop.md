# The agent loop: check, render, compare, revise

You cannot hear. `code_check`, `code_render` and `code_compare` give you
what a producer hears, as numbers. Both backends (local `tutticode`, web
MCP / `/api/code`) take the same requests and return the same fields;
differences are marked *local* or *web*.

## When to call which

| Situation | Call |
| --- | --- |
| After every edit | `code_check`. Fix every `error` before anything else |
| The check is clean and you need to know how it sounds | `code_render` (one loop is enough while sketching) |
| You have a target ("streaming loudness", "like house") | `code_compare` with `goals` or `goals.style` |
| You changed one thing: did it help? | `code_compare` with `renderId` (new) and `againstRenderId` (old) |
| *web*: `status: "queued"` / `"rendering"` | `code_render { renderId }` to wait |

## Reading `code_check`

- `diagnostics[]`: `severity`, `code`, `line`/`col` (1-based), `snippet`, a
  `fix` hint. `error` blocks rendering; `warning` means something was
  ignored or approximated; `info` is context. `device/legacy-name`: an old
  device name that still plays; write the current one the message gives.
- A second text part after the JSON report: your skills are older than
  tuttidaw.com. `code_reference` then searches the current reference; use it
  for anything you have not seen in the skill, and tell the user to update.
- `tempo.bpm` (`setcpm(n)` = n x 4 BPM in 4/4); `loop.bars` / `loop.seconds`:
  the program loop, what one loop of a render plays.
- `voices[]`: per labelled voice: notes per bar, polyphony, pitch range
  (MIDI, `c4` = 60), instrument and effects, gain, pan.
- `warnings[]`, read off the notes:

| Code | Means | Usual fix |
| --- | --- | --- |
| `mix/pitch-clash` | Two voices a semitone apart | Put both on the same chord or scale there |
| `mix/register-overlap` | Two pitched voices share a range | Move one an octave, or thin one |
| `mix/low-end-crowded` | Two voices below `c3` together | Keep one bass part |
| `density/very-dense` | Over 32 notes per bar in a voice | Fewer steps or `.slow()` |
| `density/silent-voice` | An unmuted voice plays nothing | Check the mini-notation and masks |
| `level/hot-voice` | A voice's gain above 1.2 | Turn it to 1 or less; lower the others |
| `level/clip-risk` | Voices hitting together sum above 3 | Lower the busiest voices to 0.5-0.8 |

## Reading `code_render`

*local* returns `files` (`audio`, `stems`: paths written on disk),
`editUrl`, `window` (`bars`, `seconds`, `bpm`), `loudness` (`lufs`,
`truePeak` of the delivered file, `gainDb` applied for a `lufs` target or
to avoid clipping, `limitDb` with `limit`), `warnings` (what was done to
the audio), `voices[]` (each voice's solo `lufs` and `truePeak`), `barTimes` /
`beatTimes` (seconds of each bar and beat: sync video cuts to them),
`check` and `analysis`. *web* returns `analysis`, a `listenUrl` (24 h) and
signed audio links.
*web* renders at most 16 bars and 60 s, and at most 320 track-seconds
(the tracks it plays x seconds; `check` reports them as
`stats.renderTracks`: one per audible voice, one per waveform of a
multi-waveform voice, four per Ensemble Set): a larger render is refused with
`CODE_RENDER_TOO_LARGE`, which says how many bars fit. Render fewer bars,
or mute (`_`) the voices you are not listening to.

`analysis` (both):

| Field | How to read it |
| --- | --- |
| `loudness.integratedLufs` | Overall loudness; halving every gain is about -6 LU |
| `loudness.truePeakDbtp`, `clipping` | Keep the peak at -1 dBTP or below; `clipping` must be false |
| `loudness.crestDb` | Peak minus RMS: under ~8 dB sounds squashed, over ~18 dB is peaky (a loudness target may not fit) |
| `bands.low/mid/high` | Energy below 250 Hz / 250 Hz-4 kHz / above 4 kHz; high under 0.03 sounds dull |
| `stereo.width`, `correlation` | Width 0.2-0.6 is typical; correlation below 0 is phase trouble |
| `groove.swing`, `timingErrorMs` | 0.5 straight, 0.67 triplet swing; code is sample-accurate |
| `silence`, `barLufs` | Leading/trailing silence, silent bars: a silent bar you did not plan is a bug |
| `voices[]` | Each voice's `lufs` (null = silent: a dead voice) and `share` of the mix |

## Loudness and length (*local* `code_render` / `tutticode render`)

- Length: `seconds` (exact, cut with a 10 ms fade), `bars`, or `loops`
  (whole loops ring out past their end). `tail` adds seconds after the
  length for reverbs and delays and makes the file exactly length + tail;
  `fadeIn` / `fadeOut` are linear, in seconds.
- No file is written clipped: without `lufs`, a render whose true peak
  would pass `truePeak` (default -1 dBTP) is lowered by one static gain
  (negative `gainDb`, a line in `warnings`); a stem that would clip on
  its own is lowered further (its `gainDb` in `voices[]`). *web* lowers
  the audio file the same way and says so in `warnings`; its `analysis`
  measures the program before that gain.
- `lufs` applies one static gain to that integrated loudness, the same on
  the stems. When the true peak would pass `truePeak` the render fails
  with code `clip`: ask for a lower `lufs`, make the program less peaky
  (lower its loudest voice), or add `limit: true` (`--limit`), a
  true-peak limiter on the mix (not the stems) that reports the most it
  took off in `limitDb`. Under 0.4 s there is no integrated loudness and
  `lufs` is ignored.
- Exit codes (CLI): 0 ok, 1 errors in the code or `clip`, 2 bridge or
  browser problem (run `tutticode doctor`), 3 usage, 4 not signed in
  (`whoami`), 5 `limit`, 6 `upgrade`.

## Sign-in, limits and the voice tag (*local*)

- **Limits.** A render without sign-in is at most 60 s, and a render
  over 30 s carries a spoken "register at TuttiDAW" tag throughout. A free account (`tutticode login`) lifts both. `code_account` (or `tutticode
  whoami --json`) says which applies (`limits.maxSeconds`,
  `limits.watermarkAfterSeconds`, null = never tagged): plan within it,
  for example keep an anonymous draft at 30 s or less.
- **`limit` error** (CLI exit 5), with `limit: {name, value,
  signedInValue}`: tell the user its message in one sentence and carry on
  within the limit. To get the user's approval without a terminal, run
  `tutticode login --device --no-wait --json`, give the user its
  `verificationUriComplete` link (or `verificationUri` and `userCode`),
  and keep working: the sign-in finishes in the background and later
  renders use it. Never wait on it.
- **`watermark`** in a report (`{reason, at: [start of each tag, s],
  removeWith}`, and one CLI line on stderr): the tag is in the file and in
  every stat (loudness, bands, voice levels, compare). It is not part of
  the program: do not change the code to remove it or to fix the stats it
  moves. Tell the user once that `tutticode login` (free) removes it.
- **`upgrade`** (exit 6): the user runs `npm i -g tutticode@latest`.
- The sign-in can only render with TuttiCode (no projects, account or
  billing). Never print or ask for tokens; CI sets `TUTTICODE_TOKEN` (an
  access token from the account page).

## Targets

| Goal | lufs |
| --- | --- |
| Sketch for the user | -16..-12, true peak -1 dBTP or below |
| Web, social, streaming | -14 |
| Podcasts, video beds under speech | -16 (beds under a voice -20..-24) |
| Broadcast (EBU R128) | -23 |
| A style's finished master | `goals.style` (house -9..-7, lofi-hip-hop -14..-11, ambient -20..-14) |

`goals.style` takes a Muse style id (`house`, `techno`, `trap`,
`modern-pop`, `lofi-hip-hop`, `ambient`, `cinematic`, `synthwave`,
`jazz-swing` and others); a render without a master chain sits a few LU
under a style's mastered loudness, so match its spectrum first.

A program mixes itself: shared effects on a bus the voices send to, levels
with `.mix`, and the program's own master chain, which every render goes
through. A limiter there lets a `lufs` target fit under the ceiling
without `limit: true`:

```js
bus("verb").fx("Reverb", {dryWetBalance: 1})
master.fx("Limiter", {gainDb: 3, ceiling: -3})
drums: s("bd*4, ~ cp, hh*8").bank("tr909").mix({vol: -3})
keys: chord("<Cm7 Fm7>").voicing().inst("Tine").send("verb", -10)
```

`group("drums")` + `.group("drums")` gives several voices one fader and
chain. `note("do re mi")` is `note("c d e")` (fixed do).

## Comparing

`code_compare` returns `deltas[]` (`metric`, `current`, `target`,
`verdict`: `ok` / `low` / `high`) and `suggestions[]`, most important
first, written as edits to the code. *local* compares renders of the same
session and goals; reference recordings (`referenceUrl`,
`referenceAudio`) need the *web* backend.
