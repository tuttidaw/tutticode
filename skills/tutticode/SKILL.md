---
name: tutticode
description: "Write, fix, check and render TuttiCode (TuttiDAW Code): Strudel-compatible live-coding pattern programs (mini-notation, note/s/n, scales, chords, effects, samples) that play on TuttiDAW instruments and effects, plus TuttiCode-only .inst/.fx/.midifx devices. Covers the code_check / code_render / code_compare tools of the local tutticode CLI/MCP and the TuttiDAW web MCP. Use when asked for Strudel, TuttiCode or TuttiDAW code, a beat/melody/loop as code, a tuttidaw.com/code link, a Pattern Clip, rendering code to audio, or when a pattern program errors."
---

# TuttiCode

TuttiCode (TuttiDAW Code) is a pattern language for music: a superset of
Strudel (strudel.cc) that plays on TuttiDAW's instruments and effects. A
program is JavaScript built from pattern functions; double-quoted strings are
mini-notation. It loops: one cycle = one bar.

## Core syntax

```js
setcpm(30)                                   // cycles (bars) per minute: 30 = 120 BPM in 4/4
drums: s("bd [~ bd] sd ~, hh*8").bank("tr909") // a labelled voice = one track
bass: note("c2 [~ c2] eb2 g1").s("sawtooth").lpf(800)
chords: chord("<Cm7 Ab^7 Fm7 G7>").voicing().inst("Tine").fx("Reverb:Large Hall")
_lead: n("0 2 4 7").scale("C:minor")         // a leading _ mutes a voice
```

- Mini-notation: `a b c` steps share a cycle; `~` rest; `[a b]` one step;
  `<a b>` one per cycle; `a,b` together; `*n` `/n` faster/slower; `@n`
  longer; `!n` repeat; `x(3,8)` Euclidean; `?` maybe; `a|b` random choice;
  `{a b c, d e}` polymeter; `bd:3` variant.
- Pitches: `note("c4")` = MIDI 60; no octave = octave 3. `n("0 2 4").scale("C:minor")`
  plays scale degrees (root in octave 3). `chord("Am7").voicing()` voices chord symbols.
- Time: `.fast` `.slow` `.early` `.late` `.rev` `.ply` `.iter` `.every(n, f)`
  `.lastOf(n, f)` `.off(t, f)` `.superimpose(f)` `.struct("x ~ x")`
  `.mask("1 0")` `.swingBy(1/3, 4)`; combine with `stack` `cat` `seq`
  `arrange([4, a], [2, b])`. `f` is an arrow function: `x => x.fast(2)`.
  A whole song: `track` + `section` blocks + `form` (`references/songs-and-sections.md`).
- Sound: `s("bd sd hh cp oh")` drums (`.bank("tr808")`), waveforms
  `sine triangle square sawtooth supersaw`, `piano`, `gm_*` names.
- Controls: `.gain` `.velocity` `.pan` `.lpf` `.hpf` `.lpq` `.room` `.size`
  `.delay` `.delaytime` `.delayfeedback` `.shape` `.crush` `.attack`
  `.decay` `.sustain` `.release`; signals `sine saw tri perlin rand` with
  `.range(a, b)` `.slow(n)` `.segment(n)`.
- TuttiDAW only: `.inst("Device:Preset", {key: value})` instrument,
  `.midifx(...)` before it, `.fx(...)` after it, in call order. Params use the
  device's keys and units (`"4s"`, `"-6dB"`, `"1/16"`); a pattern automates.
  Mixing: voices sharing a reverb/delay get one `bus("verb").fx("Reverb", {dryWetBalance: 1})` and a `.send("verb", -12)` each,
  not an `.fx`/`.room` per voice; `.mix({vol, pan, mute})`; finish a piece with `master.fx("Limiter")`; `group("drums")` + `.group("drums")`.
  `toggle(1)` is an inline switch; `note("do re mi")` = `note("c d e")`; `ensembleSet({reverb: {revSize: 100}})` sets the Ensemble Sets' buses/master.

## Top mistakes

1. **Octaves**: code `c4` is MIDI 60, but TuttiDAW's piano roll (like
   many DAWs) labels MIDI 60 as C3. Write code names; a request for "C3"
   from someone reading the piano roll may mean MIDI 60.
2. **Arithmetic on controls**: `note("c e").add(12)` does nothing (warning);
   write `note("c e").add(note(12))` or `n("0 2".add(7))`.
3. **Multi-word scales** need colons inside quotes: `"C:harmonic:minor"`,
   `"A:minor:pentatonic"`. `"C:harmonic minor"` is two steps.
4. **Device calls inside callbacks** fail: `every(2, x => x.fx(...))` is an
   error; a voice has one chain. Put `.inst/.fx/.midifx` on the voice.
5. **Automation**: `.mix({vol: ramp(-60, 0, 4)})` fades over 4 bars (`.once()`: no loop); `env("0:200 2:4000~.5 _4:0")`
   is points pos:value (`~k` curve, `_` step); patterns `"<300 900>"` step. On a bus/group/master: Arrangement lanes.
6. **One `.inst` per voice**; a second is an error. Use another voice.
7. **Single vs double quotes**: double quotes are mini-notation; single
   quotes are plain strings (`register('name', ...)`, `.scale('C minor')`).
8. **No browser APIs**: no `fetch`, `import`, timers or DOM; code runs in a deterministic sandbox (seeded `Math.random`, fixed `Date`).
9. **Unknown sound names** fall back with a warning; check
   `references/sounds.md` and `references/devices.md`. Noise is
   `s("white")`, `s("pink")` or `s("brown")` (hard to soft).
10. **Voice labels** become track names: label every voice
    (`kick:`, `bass:`) instead of `$:` when the program goes to the studio.

## Tools: two backends, one API

The same tools and report shapes run on two backends; prefer the local one.

- **Local `tutticode`** (default; free): the `tutticode` CLI
  and MCP server (`npm i -g tutticode`, `tutticode mcp`) render in the
  user's own browser with the tuttidaw.com/code engine and write files to
  disk, up to 300 s (60 s without sign-in, below). Its tool descriptions
  say "Runs locally". Without MCP, call the CLI: `tutticode check prog.tc`, `tutticode render prog.tc -o
  out.wav --seconds 12 --lufs -16 --json`, `tutticode open prog.tc`.
  Program code goes only to the user's browser, never to TuttiDAW's servers.
- **Web**: TuttiDAW's MCP server (`https://tuttidaw.com/api/mcp`, OAuth) or
  HTTP (`POST https://tuttidaw.com/api/code/check|render|compare`). Renders
  on TuttiDAW's servers (signed in, costs Muse points, 16 bars / 60 s) and
  returns a `listenUrl` instead of files. Only this backend compares with a
  reference recording.

| tool | what it does |
| --- | --- |
| `code_check` | compile and plan, no audio: diagnostics, voices, mix warnings. Free, deterministic |
| `code_render` | render and measure: loudness, true peak, bands, groove, per-voice levels |
| `code_compare` | a render against goals (or a Muse `style`), or two renders (A/B) |
| `code_open` | (local) open the program in a visible TuttiCode tab for the user |
| `code_reference` | (local) search these references |
| `code_account` | (local) signed in or not, the length limits, today's usage |

**Without sign-in**, local renders stop at 60 s (error `limit`) and over 30 s carry a
spoken "register at TuttiDAW" tag (`watermark`; never edit code to remove it).
Tell the user once; `tutticode login` (free) lifts both. Agents: run
`tutticode login --device --no-wait --json` and give the user its link.

## Workflow: write -> check -> render -> revise

1. **Write** the smallest program that does the job; label each voice.
2. **`code_check`** after every edit; fix every `error` diagnostic (line,
   column and a `fix` hint), then the mix `warnings`. Never render to find
   syntax errors. Without tools, compare every name with
   `references/functions.md` and `references/devices.md`.
3. **`code_render`** once the check is clean, then read the numbers
   (`references/agent-loop.md`): loudness, clipping, silent bars, which
   voice dominates. Change one thing at a time; `code_compare` tells you
   whether it moved what you meant.
4. **Hand over** the `editUrl` (local) or `listenUrl` (web) with the
   files: it opens the program in TuttiCode, where **Open in TuttiDAW**
   saves it as a project with one track per voice. Without tools, link
   `https://tuttidaw.com/code#` + `encodeURIComponent(btoa(utf8 code))`.

Pattern Clips in an open TuttiDAW project are edited with the web MCP's
`read_pattern` / `write_pattern` (notes only; devices apply on /code and in
group programs). Sound for videos, apps and games: the
`tutticode-sound-for-media` skill.

## References

Read only what the task needs:

- `references/agent-loop.md`: reading the code_check / code_render / code_compare reports, loudness targets, lengths and the `clip` error, on both backends.
- `references/getting-started.md`: Getting started. What TuttiCode is, how a program loops, and how to play your first line.
- `references/first-sounds.md`: First sounds. Drums with s(), pitches with note(), and the difference between them.
- `references/mini-notation.md`: Mini-notation. The rhythm language inside the quotes - sequences, rests, groups, alternation, polymeter, Euclidean rhythms and chance.
- `references/time-and-structure.md`: Time and structure. Functions that speed up, shift, reverse, repeat and combine patterns, and arrange them into sections.
- `references/songs-and-sections.md`: Songs and sections. Write a whole song as sections - intro, verse, chorus - played in a form, with each track's sound written once.
- `references/harmony-and-scales.md`: Harmony and scales. Note names and octaves, scale degrees, transposition, chord symbols, voicings and arpeggios.
- `references/melodies-with-do-re-mi.md`: Melodies with do re mi. Write notes in solfège (do re mi fa sol la si) wherever a note name goes; Export to Strudel gives letters.
- `references/sounds.md`: Sounds. Drum kits and banks, synth waveforms, General MIDI instrument names, Ensemble sounds and your own samples.
- `references/effect-controls.md`: Effect controls. Filters, reverb, delay, distortion, panning, envelopes and synth controls - and moving them with signals.
- `references/visual-feedback.md`: Visual feedback. Piano rolls, punchcards, oscilloscopes and spectrums drawn in the editor while the program plays - see what a voice plays and how it sounds.
- `references/sample-operations.md`: Sample operations. Play part of a sample, change its speed, cut it into slices, fit it to the tempo and choke it.
- `references/tuttidaw-extensions.md`: TuttiDAW extensions. Load any TuttiDAW instrument, MIDI effect or audio effect with presets and parameters; voices, groups and Open in TuttiDAW.
- `references/automation.md`: Automation. Fades with ramp(), points and curves with env(), patterns and signals - device parameters, faders and sends that move over time, as the same automation Open in TuttiDAW shows.
- `references/mixing.md`: Mixing: buses and master. Shared reverbs and delays on buses, sends from the voices, each voice's fader and pan, sidechain ducking, and the program's master chain - the same tracks Open in TuttiDAW makes.
- `references/mixing-groups.md`: Mixing: groups. Put voices in a group with its own effects, fader and sends - a drum bus inside the program, the same group track Open in TuttiDAW makes.
- `references/javascript.md`: JavaScript in code. Variables, functions, loops and register - and the sandbox, determinism and limits that keep shared code safe.
- `references/muse.md`: Muse on /TuttiCode. Ask TuttiDAW's AI assistant to write, explain, fix or restyle your program, from text, a Strudel tune, a screenshot or a reference track.
- `references/for-agents.md`: TuttiCode for agents. Let Claude Code, Copilot, Codex or any MCP client write TuttiCode and render it to audio files in your own browser, with the tutticode CLI, MCP server and skills.
- `references/functions.md`: every function, method and signal, with signature, description and example; `references/language-reference.md`: the full EBNF grammar, typed signatures, control aliases (both generated from the engine).
- `references/devices.md`: every instrument and effect for `.inst/.fx/.midifx`, with `references/devices/<id>.md` per device: param keys, ranges, units, presets (generated from the device catalogue).

Language: PATTERN LANGUAGE 1.10.0, engine 24. When a tool result says tuttidaw.com runs a newer one, look up what you have not seen here with `code_reference` (it then searches the current reference, also at https://tuttidaw.com/skills/tutticode/SKILL.md) and tell the user once to update.
Human guide: https://tuttidaw.com/code/learn; agents: https://tuttidaw.com/code/learn/for-agents
