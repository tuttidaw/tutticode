# TuttiDAW extensions

Load any TuttiDAW instrument, MIDI effect or audio effect with presets and parameters; voices, groups and Open in TuttiDAW.

Strudel controls such as `.lpf` or `.room` describe a sound in general terms.
TuttiDAW adds three methods that name **real devices** - the same ones you
find in the studio's browser - with their factory presets and parameters:

| Method | What it adds | Where it goes |
|---|---|---|
| `.inst(name, params)` | an instrument (one per voice) | the voice's instrument slot |
| `.midifx(name, params)` | a MIDI effect | before the instrument, in call order |
| `.fx(name, params)` | an audio effect | after the instrument, in call order |

Mixing adds more: `bus(name)` and `.send(bus, dB)` for shared effects,
`.mix({vol, pan, mute})` for a track's fader, `master` for the program's own
chain ([Mixing](mixing.md)), and `group(name)` / `.group(name)` for group tracks
([Mixing: groups](mixing-groups.md)).

All of these are TuttiDAW-only: strudel.cc has no such devices or tracks.
To take a program to strudel.cc, use "Export to Strudel" in the code page's
Export & Share tab: it lists what it leaves out, then opens the code without
the TuttiDAW-only calls, with `do re mi` turned into letters.

## Instruments: .inst

The name is a device, or a device and one of its factory presets joined by a
colon. Case and punctuation do not matter.

```js
setcpm(30)
bass: note("c2 [~ c2] eb2 [~ g1]").inst("Drift:Deep Bass")
keys: chord("<Cm7 Ab^7 Fm7 G7>").voicing().inst("Electric")
```

`.inst` decides the instrument, even when the voice also has an `s(...)`.
On a drum voice `s(...)` still picks the pads, so you can play the names on
any kit:

```js
s("bd*2 [~ bd] sd ~, hh*8").inst("Drum Rack:909 Core Kit")
```

## Audio effects: .fx

Effects are added after the instrument in the order you call them. Use
several `.fx` calls to build a chain.

```js
note("<[c3,eb3,g3] [bb2,d3,f3]>")
  .inst("Wavetable")
  .fx("Chorus:Wide Classic")
  .fx("Reverb:Large Hall", { decayTime: "4s", dryWetBalance: 0.35 })
```

## MIDI effects: .midifx

MIDI effects change the notes on their way into the instrument - for example
an Arpeggiator turns held chords into runs. The clip keeps the notes you
wrote; the effect plays them live, as in the studio.

```js
note("<[c3,eb3,g3] [ab2,c3,eb3]>")
  .midifx("Arpeggiator", { style: "UpDown", rate: "1/16" })
  .inst("Operator")
```

```js
note("c3 ~ f3 ~").midifx("Chord:Minor 7 Chord").inst("Electric")
```

## Parameters

The second argument is an object of parameter values:

- **Keys** are the device's parameter keys (`decayTime`, `cutoff`,
  `dryWetBalance`); a parameter's unique Live label works too. The
  [device catalogue](devices.md) lists every key with its range and unit.
- **Numbers** are in the parameter's own unit (Hz, ms, dB, semitones). A
  string with a unit is converted: `"250ms"`, `"2s"`, `"-6dB"`,
  `"1.2kHz"`, `"30%"`.
- **Choices** take their label (`"UpDown"`, `"1/16"`, `"Dorian"`) or a
  0-based index; switches take `true` or `false`.
- Two reserved keys: `on` switches the device on or off, `id` names a device
  when a voice uses the same one twice.

```js
s("bd*4, ~ sd, hh*8")
  .fx("Saturator", { drive: "6dB" })
  .fx("Compressor", { threshold: "-18dB", ratio: 4, attack: "10ms" })
```

Values outside a parameter's range are clamped, with a warning. A pattern
or a signal as a device parameter automates it: `{cutoff: "<300 600>"}`
changes the cutoff every cycle, `sine.range(300, 3000)` sweeps it (the
"Automation" lesson).

## Strudel controls and devices together

Strudel controls keep working next to devices: `.lpf(...)` still adds an
Auto Filter. When a voice names the same kind of device itself, the control
goes onto that device instead of adding a second one - `.room(0.4)` with
`.fx("Reverb:...")` sets that Reverb's mix.

## Inline controls: slider and toggle

`slider(value, min, max)` puts a small slider in the editor next to the
number; dragging it changes the program while it plays. `toggle(1)` (a
TuttiDAW addition) puts an on/off switch there.

```js
note("c2*8").s("sawtooth").lpf(slider(800, 200, 4000))
```

```js
stack(
  s("bd*4"),
  s("hh*8").mask(toggle(1))
)
```

## Voices become tracks

Each labelled voice of a program is one track. **Open in TuttiDAW** on
TuttiCode saves the program as a studio project:

- the program lives on a **group track**: its `{}` button opens the code,
  and evaluating there updates every voice;
- each voice is a track in the group, with its instrument, effects and a
  Pattern Clip holding that voice's code;
- moving controls become clip envelopes.

Editing a voice by hand - its notes, or a parameter the code set - detaches
that voice from the code, so your edit is kept. **Re-attach** gives it back
to the code. A single Pattern Clip (code in a MIDI clip without a group)
plays notes only: devices named in its code are not applied there.

Source: https://tuttidaw.com/code/learn/tuttidaw-extensions
