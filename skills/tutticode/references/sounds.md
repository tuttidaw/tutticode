# Sounds

Drum kits and banks, synth waveforms, General MIDI instrument names, Ensemble sounds and your own samples.

A voice's sound decides which TuttiDAW instrument plays it. You can name
sounds the Strudel way with `s(...)`, or load any TuttiDAW instrument by name
with `.inst(...)` (next chapters).

## Drum kits

Drum names (`bd sd rim cp hh oh cr rd ht mt lt sh cb`) play the pads of a
Drum Grid device. Without a bank the voice uses the 808 Core Kit; `.bank(...)`
chooses another factory kit by its machine (`tr909`, `tr707`, `tr606`,
`tr505`, `linn`, `dmx`, `cr78`).

```js
setcpm(30)
kit: s("bd [~ bd] sd ~, [~ hh]*4, ~ ~ ~ oh").bank("tr909")
```

Strudel's banked names such as `RolandTR909_bd` are read as that drum. A
number after a colon (`bd:2`) or `.n(...)` picks another variant of the same
drum where the kit has one.

## Synth waveforms

`sine`, `triangle`, `square` and `sawtooth` (short: `sin`, `tri`, `sqr`,
`saw`) play on a TuttiDAW synth whose envelope is set to match Strudel's
built-in synth. `supersaw` is a detuned stack of saws.

```js
note("c2 [~ c2] eb2 [g1 bb1]").s("sawtooth").lpf(700)
```

```js
note("<[c3,eb3,g3] [ab2,c3,eb3]>").s("supersaw").gain(0.6)
```

`white`, `pink` and `brown` are noise, from bright to soft (pink falls
3 dB per octave, brown 6 dB). They take the envelope and filters like the
waveforms: short noise bursts make hats. `crackle` is approximated with
Vinyl Wear's crackle.

```js
s("<white pink brown>*8").decay(0.04).sustain(0)
```

## Instrument names

`piano` plays TuttiDAW's sampled grand piano. General MIDI names in Strudel's
`gm_` style play the closest TuttiDAW instrument: for example `gm_piano`,
`gm_epiano1`, `gm_acoustic_bass`, `gm_violin`, `gm_vibraphone`, `gm_flute`,
`gm_pad_warm`, and the Asian instruments `gm_koto`, `gm_dulcimer` and
`gm_shakuhachi`.

```js
setcpm(22)
koto: n("0 2 4 <7 5> 4 2").scale("D:minor:pentatonic").s("gm_koto")
bass: note("<d2 a1 bb1 c2>").s("gm_acoustic_bass")
```

A name TuttiDAW does not know still plays: drum-like names fall back to a
drum pad, everything else to a synth, with a warning in the diagnostics.

## Ensemble sounds

Ensemble is TuttiDAW's multi-engine sound module (Physical, Sample, Duo, FM6
and more). Its factory sounds are named `<Engine> <SOUND>`, for example
`Physical PLUCK` or `Sample FLUTE`, and are loaded with `.inst`:

```js
setcpm(24)
pluck: n("0 2 4 6 4 2").scale("E:minor").inst("Ensemble:Physical PLUCK")
flute: note("<b4 a4 g4 e4>").inst("Ensemble:Sample FLUTE")
```

Ensemble parts play inside an Ensemble Set with its own chorus, delay and
reverb. On TuttiCode up to four Ensemble voices share one Set; **Open in
TuttiDAW** builds the same Set in your project. The [device
catalogue](devices.md) lists every Ensemble sound.

### The Set's chorus, delay and reverb

A part sends to the Set's shared effects with its own `chor`, `dly` and
`rev` (0..127). `ensembleSet({...})` sets those effects, and the Set's
master, for every Ensemble Set the program plays in:

```js
setcpm(24)
ensembleSet({reverb: {revType: "HALL", revSize: 110}, delay: {dlyTime: "1/8D", dlyFdbk: 40}})
pluck: n("0 2 4 6 4 2").scale("E:minor").inst("Ensemble:Physical PLUCK", {rev: 50, dly: 30})
flute: note("<b4 a4 g4 e4>").inst("Ensemble:Sample FLUTE", {rev: 70})
```

| Section | Keys |
|---|---|
| `chorus` | `choRate`, `choDepth` (0..127) |
| `delay` | `dlyTime` (`"1/4"`, `"1/8"`, `"1/8D"`, `"1/4D"`, `"8T"`...), `dlyFdbk` (0..120), `dlyColor`, `dlyMix` (0..127) |
| `reverb` | `revType` (`"ROOM"`, `"SPRING"`, `"HALL"`), `revSize`, `revDamp` (0..127) |
| `master` | `master` (level, 0..127), `lowcut` (`"OFF"`, `"LOWCUT"`, `"BASS+"`), `tune` (cents, -50..50) |

Leave out what you do not change: a new Set's values stay. Write one
`ensembleSet` per program, with numbers and names, not patterns. The
code writes these values each time it runs, so in the studio a change
you make by hand lasts until the next evaluate. A Learn example opened in
TuttiCode starts with its lesson's `ensembleSet`.

## Your own samples

`samples(...)` declares audio files hosted on the web (HTTPS). The names you
declare then work in `s(...)` like the built-in ones. A `github:user/repo`
shortcut reads the `strudel.json` sample map at the root of that repository.

```js
samples({ stab: "https://example.com/sounds/stab.wav" })
s("stab ~ stab [~ stab]")
```

What TuttiDAW does with them:

- **Nothing is downloaded until you ask.** TuttiCode loads new samples
  only when you press **Play** or **Evaluate** yourself; typing never starts a
  download, and Muse's edits never do either.
- Files are fetched by your browser from where they are hosted, kept in
  memory for the session, and never uploaded to TuttiDAW. A saved project
  stores the links, not the audio.
- Limits keep pages safe: at most 8 MB per file, 32 MB in total, 10 seconds
  per download, mono or stereo audio up to 120 seconds.
- If a file cannot load, the voice plays a built-in sound and the diagnostics
  say which file failed.

Only use samples you are allowed to use; TuttiDAW plays them from their host
and does not check their licence.

Source: https://tuttidaw.com/code/learn/sounds
