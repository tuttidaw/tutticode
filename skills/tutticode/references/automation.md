# Automation

Fades with ramp(), points and curves with env(), patterns and signals - device parameters, faders and sends that move over time, as the same automation Open in TuttiDAW shows.

A device parameter does not have to stay put. Give it a **pattern** and it
changes from cycle to cycle; give it a **signal** and it sweeps. This is
automation, written in code: "Open in TuttiDAW" shows it as an envelope on
the voice's clip, and the voice plays it the same way on /code.

| Value | What the device gets |
|---|---|
| `0.4`, `"4s"`, `slider(0.4)` | a setting that stays |
| `ramp(-60, 0, 4)` | a straight line from -60 to 0 over 4 bars, then again |
| `env("0:200 2:4000~.5 4:200")` | points joined by lines and curves |
| `"<0.1 0.6>"`, `"0 0.5 1 0.5"` | a step at each event: the value holds until the next one |
| `sine.range(300, 3000)` | a smooth sweep, sampled 16 times per cycle |

Like `.inst`, `.fx` and `.midifx` themselves, this is TuttiDAW-only.

## Fades: ramp

`ramp(from, to, bars)` is a straight line from one value to another over
a number of bars. A fade-in on the kick's fader, over four bars:

```js
kick: s("bd*4").mix({vol: ramp(-60, 0, 4)})
```

The ramp then starts again, like a pattern loops. Add `.once()` and it
plays once from the start of the program, then holds its last value:

```js
pad: note("<c3 eb3 g3 bb3>").s("sawtooth").release(0.3)
  .mix({vol: ramp(-60, -6, 8).once()})
```

The program's loop grows to cover a ramp or an envelope (here 8 bars), so
on /code you hear all of it.

## Points, lines and curves: env

`env("...")` draws any shape as points `position:value`, joined by
straight lines. Positions are in bars (`1.5`, `3/4`); values are in the
parameter's unit, units allowed (`"-6dB"`, `"2kHz"`):

```js
pad: note("c3").s("sawtooth")
  .fx("Auto Filter", {frequency: env("0:200 2:4000~.5 4:200")})
```

| Written | Means |
|---|---|
| `2:4000` | at bar 2 the value is 4000; a straight line leads there |
| `2:4000~.5` | the segment ending there bends (`-1..1`; positive stays near the start longer, like the studio's curve) |
| `_2:4000` | hold the value before until bar 2, then jump |
| `2:0 2:1` | two points at one position: a jump |

The envelope loops over its last position. A second argument makes the loop
longer: `env("0:0 2:1", 4)` rises for two bars and holds for two. Before
its first point it holds the first value.

## The exact form

The studio can also store a curve drawn as a Bezier (the envelope's curve handles).
Code writes it as a list of points, each `[position, value]` with an
optional segment: `{curve: k}`, `{curve: [x1, y1, x2, y2]}` or `"hold"`:

```js
lead: note("c4 eb4 g4").s("sawtooth")
  .mix({pan: env([[0, -1], [2, 1, {curve: [0.2, 0, 0.8, 1]}], [4, -1, "hold"]])})
```

You rarely write this by hand: "Copy as TuttiCode code" in the studio
writes the shortest form that keeps the automation exactly - a `ramp`,
an `env` string, or this list.

## A wetter reverb every other bar

`"<0.1 0.6>"` is 0.1 in the first cycle and 0.6 in the second:

```js
pad: note("<c3 eb3 g3 bb3>").s("sawtooth").release(0.3)
  .fx("Reverb", {dryWetBalance: "<0.1 0.6>", decayTime: "3s"})
```

`decayTime` is a constant, so it stays at 3 seconds. Several parameters
of one device can move at once, each with its own pattern.

## A filter sweep

A signal moves continuously. `sine.range(300, 3000)` goes from 300 Hz up to
3000 Hz and back once a cycle; `.slow(4)` stretches that over four:

```js
bass: note("c2*8").s("sawtooth")
  .fx("Auto Filter", {frequency: sine.range(300, 3000).slow(4)})
```

The program then loops after four cycles, like any pattern that changes
over four.

## Units, instruments and MIDI effects

Patterns take the same values as constants, in the parameter's unit:
strings with a unit convert (`"<-6dB 0dB>"`, `"<1s 4s>"`). Instrument
parameters automate too:

```js
lead: note("c4 eb4 g4 bb4").inst("Subtractive Synth", {cutoff: "<400 1200 2400 800>"})
  .fx("Utility", {gainDb: "<-6dB 0dB>"})
```

A choice parameter steps between its names. Arpeggiator's rate names
(`1/16`, `1/8`) read as names inside a pattern, not as a division:

```js
arp: note("[c3,e3,g3]").midifx("Arpeggiator", {style: "<Up Down>", rate: "<1/16 1/8>"})
```

Names with spaces (`"Up & Down"`) cannot be steps of a pattern: use their
index. A percentage (`"30%"`) works as a constant only, because `%` means
something else in mini-notation - write `0.3` in a pattern.

## Buses, groups and the master

A bus, a group and the master move the same way: their `.mix({vol, pan})`,
a group's `.send(bus, level)` and their devices' parameters take patterns
and signals too.

```js
bus("verb").fx("Reverb", {dryWetBalance: 1, decayTime: "<2s 6s>"})
  .mix({vol: sine.range(-18, -6).slow(4)})
group("drums").fx("Drum Shaper", {drive: "<0 20>"}).send("verb", "<-30 -12>")
master.mix({vol: "<0 -3>"})

kick: s("bd*4").group("drums")
pad:  note("<c3 eb3>").s("sawtooth").release(0.3).send("verb", -6)
```

These tracks have no clip of their own, so "Open in TuttiDAW" writes their
automation into the **Arrangement**: on the return track, the drums group
and the program's group (the master), one copy per loop across the span
the voice clips cover. Lengthen the clips and evaluate again: the
automation follows. The points the code wrote are the code's - edit one
and that bus, group or master is detached (Re-attach brings the code back).
Points you draw before or after that span are yours: the code never
touches them.

## What cannot move

- **Static settings** take a constant: an Ensemble part's `voice` or filter
  type. A pattern there is an error that lists the parameters that can move.
- A pattern of names for the device itself (`.fx("<Reverb Delay>")`) is an
  error: a voice has one chain.

## In the studio

The envelope belongs to the code, like the voice's other values: an
evaluate rewrites it, and the device shows the pattern's first value.
`ramp` and `env` arrive as real points with their curves, editable like
any envelope. One as long as the voice's clip loops with the clip; a
longer or shorter one is an unlinked clip envelope with its own loop, and
a `.once()` one an unlinked envelope with its loop switched off. Edit
the envelope by hand and the voice is detached from the code (Re-attach
brings the code back). An envelope holds at most 1024 points; a pattern
that changes more often is held on a coarser grid, with a warning.

Source: https://tuttidaw.com/code/learn/automation
