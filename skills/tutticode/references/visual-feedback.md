# Visual feedback

Piano rolls, punchcards, oscilloscopes and spectrums drawn in the editor while the program plays - see what a voice plays and how it sounds.

A visual is a method on a voice that draws it while the program plays. It
never changes the sound: the voice plays exactly as it would without it.
Visuals draw on TuttiCode (tuttidaw.com/code) only; a Pattern Clip in the
studio plays the same program and draws nothing.

Each visual has two forms:

- with an underscore, `._pianoroll()`, it draws **in the code**: a strip
  under the line where the call ends. Several can show at once, each next
  to its voice.
- without one, `.pianoroll()`, it draws faintly **behind the editor**, so the
  code stays readable on top.

## What the notes do: pianoroll and punchcard

`._pianoroll()` scrolls the voice's notes past a playhead: time runs left
to right, higher notes sit higher, and the note that sounds now is
outlined at the playhead.

```js
note("c3 [e3 g3] a3 <f3 b3>").s("triangle")._pianoroll()
```

Options go in one object. `cycles` is how many cycles fit across (4),
`playhead` where the playhead sits (0 left .. 1 right, 0.5), `vertical: 1`
turns the roll so time runs downwards. The roll under a line spans the
notes it shows; give `minMidi` / `maxMidi` for a fixed range.

```js
n("0 2 4 <6 7>").scale("C:minor").s("sawtooth").lpf(1200)
  ._pianoroll({cycles: 2, playhead: 0.25})
```

`._punchcard()` draws the same notes as rounded cells, without a playhead
line: good for drum patterns.

```js
s("bd*2, ~ sd, hh*8")._punchcard()
```

## What the sound does: scope and spectrum

`._scope()` is an oscilloscope: the voice's waveform as it plays. It shows
that voice's own output, after its effects and its fader, not the whole
mix. Options: `color`, `thickness` (3), `scale` (0.25), `pos` (0 top .. 1
bottom), `align` and `trigger`.

```js
note("c2 c2 eb2 g1").s("sawtooth").lpf(600)._scope()
```

`._spectrum()` draws the voice's frequencies as one line, low on the left,
high on the right. Options: `color`, `thickness`, `min` and `max` (in dB,
-80 and 0).

```js
note("<[c3,eb3,g3] [ab2,c3,eb3]>").s("sawtooth").lpf(2000)._spectrum()
```

## See the filter move

A [slider](tuttidaw-extensions.md#inline-controls-slider-and-toggle) changes
the program while it plays; a scope on the same voice shows what it does.
Drag the cutoff down and the saw's corners round off into a sine-like
wave:

```js
note("a1*8").s("sawtooth").lpf(slider(2000, 100, 6000))._scope()
```

The same with `._spectrum()` shows the highs falling away.

## Behind the editor

The plain forms draw one view behind the whole editor; it does not catch
clicks, so you can keep typing.

```js
bass: note("c2*4").s("sawtooth").lpf(400).pianoroll()
hats: s("hh*8").gain(0.5)
```

## Limits

- `spiral` / `_spiral` are accepted and draw nothing yet.
- A scope or spectrum shows one voice (the one that carries the call). To
  see two voices, call it on each.
- Some options are accepted and not drawn yet: the pianoroll's `labels`,
  `smear`, fill and stroke switches, and the spectrum's `speed`.

Source: https://tuttidaw.com/code/learn/visual-feedback
