# Harmony and scales

Note names and octaves, scale degrees, transposition, chord symbols, voicings and arpeggios.

## Note names and octaves

A note name is a letter, an optional accidental (`#` sharp, `b` flat) and an
octave number. `c4` is MIDI 60, middle C; `a4` is 69 (440 Hz). Each octave
starts at C, so `b3` is just below `c4`.

A name without an octave is in octave 3: `note("c e g")` is the same as
`note("c3 e3 g3")`.

```js
note("c e g b")
```

TuttiDAW's piano roll uses the common DAW names, where MIDI 60 is **C3**. Code and the
clip disagree by one octave in the label only: the pitch is the same.

## Scale degrees: n and scale

`n("0 2 4")` writes numbers; `.scale("C:minor")` turns them into notes of a
scale. Degree 0 is the root, 1 the next note of the scale, and so on.
Numbers past the end of the scale continue in the next octave, and negative
numbers go down.

```js
n("0 1 2 3 4 5 6 7").scale("C:minor")
```

The root is in octave 3 unless you give one (`C4:minor`). Scale names
include `major`, `minor`, `dorian`, `mixolydian`, `lydian`, `phrygian`,
`blues` and `chromatic`. Join the root and every word of the name with
colons: `A:minor:pentatonic`, `C:harmonic:minor`. Inside double quotes a
space starts a new step, so `"C:harmonic minor"` is not one scale name.

```js
n("0 2 4 <7 6>").scale("<D:dorian G:mixolydian>")
```

Because the scale is a pattern too, a melody written in degrees follows the
chord changes on its own.

## Moving notes: add and transpose

`.transpose(n)` moves notes by semitones. `.add(...)` adds to the values: on
degrees it moves along the scale, on `note` patterns use `note(...)` inside.
`.trans(n)` is a short name for `.transpose(n)`.

```js
note("c3 e3 g3 e3").transpose("<0 5 7 0>")
```

```js
n("0 2 4 2".add("<0 3>")).scale("A:minor")
```

## Chord symbols: chord and voicing

`chord("...")` takes chord symbols such as `C`, `Am7`, `F^7`, `G7` or
`Bbm9`. `.voicing()` turns each symbol into notes, laid out so that the top
of the chord sits at or just below c5.

```js
chord("<C Am F G>").voicing()
```

Move the whole voicing with `.anchor(...)`: the chord is laid out below that
note instead.

```js
chord("<Dm7 G7 C^7 A7>").anchor("g4").voicing()
```

## Picking chord notes: n with chords

With a chord set, `n` picks notes of the voicing by index, from the bottom
up - an arpeggio that follows the changes.

```js
n("0 1 2 3 2 1").chord("<Cm7 Fm7 Bb7 Eb^7>").voicing()
```

## Bass lines: rootNotes

`.rootNotes(octave)` plays each chord's root, in the octave you give.

```js
stack(
  chord("<Am F C G>").voicing(),
  chord("<Am F C G>").rootNotes(2)
)
```

## Exact notes when you need them

Voicings follow their anchor note, not fixed shapes. When you need
exact pitches - a specific inversion, a doubled root - write the chord as a
stack of note names.

```js
note("<[a2,e3,a3,c4] [f2,c3,a3,c4] [c3,g3,c4,e4] [g2,d3,b3,d4]>")
```

Next: [Melodies with do re mi](melodies-with-do-re-mi.md) writes the same note
names, and scale roots, in solfège.

Source: https://tuttidaw.com/code/learn/harmony-and-scales
