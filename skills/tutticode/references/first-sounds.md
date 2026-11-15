# First sounds

Drums with s(), pitches with note(), and the difference between them.

There are two ways to make a voice sound: name a **sound** with `s(...)`, or
play **pitches** with `note(...)`.

## Drums with s()

`s` (or its long name `sound`) picks sounds by name. Short names stand for
the parts of a drum kit:

| Name | Sound | Name | Sound |
|---|---|---|---|
| `bd` | bass drum | `oh` | open hi-hat |
| `sd` | snare | `cr` | crash |
| `rim` | rimshot | `rd` | ride |
| `cp` | clap | `ht` `mt` `lt` | high, mid, low tom |
| `hh` | closed hi-hat | `sh` `cb` | shaker, cowbell |

```js
s("bd hh sd hh")
```

A comma inside the quotes plays two rows at the same time:

```js
s("bd ~ sd ~, hh hh hh hh hh hh hh hh")
```

`~` is a rest: the step is there, but nothing plays.

## Choosing a drum machine

`.bank(...)` picks the drum machine the names play on. TuttiDAW maps the
classic machines to its factory kits: `tr808`, `tr909`, `tr707`, `tr606`,
`tr505`, `linn`, `dmx` and `cr78` (Strudel's long names such as
`RolandTR909` work too).

```js
s("bd*2 [~ bd] sd ~, hh*8").bank("tr909")
```

## Pitches with note()

`note` plays pitches. Write note names (`c`, `d`, `eb`, `f#`) with an octave
number, or MIDI numbers.
Solfège works too: `note("do re mi")` plays `c d e` (see
[Melodies with do re mi](melodies-with-do-re-mi.md)).

```js
note("c3 eb3 g3 bb3")
```

```js
note("48 51 55 58")
```

Both lines play the same four notes. In code, `c4` is MIDI 60 (middle C).
TuttiDAW's piano roll follows the common DAW convention that labels MIDI 60
as **C3**, so a note written `c4` in code shows as C3 in the clip.

## Giving notes a sound

A `note` voice without a sound plays a simple synth. Add `.s(...)` to pick
another one: the basic waveforms `sine`, `triangle`, `square`, `sawtooth`, or
an instrument name such as `piano`.

```js
note("c3 e3 g3 b3").s("sawtooth")
```

```js
note("c4 e4 g4 c5").s("piano")
```

The [Sounds](sounds.md) chapter lists the instruments you can name, and
[TuttiDAW extensions](tuttidaw-extensions.md) shows how to load any TuttiDAW
instrument with its presets.

## Volume and velocity

`.gain(...)` sets the loudness of a voice. `.velocity(...)` (0 to 1) sets how
hard each note is played, as a MIDI velocity: it is kept when you freeze code
to MIDI.

```js
s("hh*8").gain(0.5).velocity("1 0.6 0.8 0.6")
```

Source: https://tuttidaw.com/code/learn/first-sounds
