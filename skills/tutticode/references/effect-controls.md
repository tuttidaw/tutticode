# Effect controls

Filters, reverb, delay, distortion, panning, envelopes and synth controls - and moving them with signals.

Controls are methods that shape the sound of every event: `.lpf(800)`,
`.room(0.4)`. In TuttiDAW each control is played by a real device on the
voice's track - a filter control adds an Auto Filter, `room` a Reverb - so
what you hear is what you get when you open the program in the studio.

## Filters

`.lpf(hz)` is a low-pass filter (it removes highs), `.hpf(hz)` a high-pass
(it removes lows), `.bpf(hz)` a band-pass. `.lpq(...)` / `.hpq(...)` add
resonance.

```js
note("c2*8").s("sawtooth").lpf("<300 600 1200 2400>").lpq(6)
```

```js
s("hh*16").hpf(6000).gain(0.6)
```

`.vowel("a e i o u")` is a formant filter that makes a sound talk.

```js
note("c2*4").s("sawtooth").vowel("<a e i o>")
```

## Space: room and delay

`.room(amount)` sends the voice into a reverb; `.size(...)` makes the room
bigger. `.delay(amount)` adds an echo, with `.delaytime(cycles)` and
`.delayfeedback(0..1)`.

```js
s("~ cp ~ cp").room(0.6).size(4)
```

```js
note("<c4 eb4> ~ ~ ~").s("triangle").delay(0.5).delaytime(3/16).delayfeedback(0.55)
```

`.delaysync(cycles)` (short `.ds`) sets the echo time in cycles instead,
so it follows the tempo: `1/8` is an eighth of a cycle, half a beat.

```js
note("<c4 eb4> ~ ~ ~").s("triangle").delay(0.5).delaysync(3/16).delayfeedback(0.5)
```

`.room` and `.delay` give each voice its own reverb or echo. For one reverb
shared by several voices, so they sound like one room, use a bus and send to
it: see [Mixing](mixing.md).

## Drive and lo-fi

`.shape(0..1)` and `.distort(...)` add drive; `.crush(bits)` reduces the bit
depth (lower is crunchier) and `.coarse(n)` the sample rate.

```js
s("bd*4, ~ sd").shape(0.5)
```

```js
note("c3 eb3 g3 bb3").s("square").crush(5)
```

`.diode(amount)` is a hard, clipped distortion. A second number after a
colon, `.diode("3:.4")` or `.distort("8:.4")`, is the level after the
distortion (`.distortvol(0.4)` sets it on its own); without a distortion it
changes nothing.

```js
note("a1*8").s("sawtooth").lpf(900).diode("3:.4")
```

`diode` plays on a Saturator's Digital Clip, an approximation: its soft
knee at small amounts and its dead zone at large ones are not reproduced.

## Level and stereo

`.gain(...)` is the level into the effects, `.postgain(...)` after them.
`.pan(0..1)` places the voice from left (0) to right (1).

```js
s("hh*8").pan("0 1 0.25 0.75").gain(0.7)
```

To set a voice's level and pan on its track's fader instead, the way you
balance a mix, use `.mix({vol: -6, pan: -0.3})` (vol in dB): see
[Mixing](mixing.md).

## Modulation effects

`.phaser(rate)` and `.chorus(amount)` add movement; `.compressor(...)`
evens out the level.

```js
note("[c3,g3,bb3]*2").s("sawtooth").phaser(1).lpf(1800)
```

## Envelopes

`.attack`, `.decay`, `.sustain` and `.release` shape each note's volume, in
seconds (sustain is a level, 0 to 1). A slow attack and long release make a
pad; a short decay with no sustain makes a pluck.

```js
note("<[c3,eb3,g3] [bb2,d3,f3]>").s("sawtooth").attack(0.4).release(1).lpf(1500)
```

```js
note("c4 g4 eb4 g4").s("square").decay(0.12).sustain(0)
```

## Synth controls

These play on the TuttiDAW synth that stands in for the waveform:

- `.lpenv(depth)` with `.lpattack` / `.lpdecay` / `.lpsustain` / `.lprelease`:
  an envelope on the filter cutoff;
- `.fm(index)` with `.fmh(ratio)` and `.fmdecay(...)`: FM brightness (the
  voice moves onto Carrier);
- `.penv(semitones)` with `.pdecay(...)`: a pitch sweep, good for kicks and
  zaps;
- `.vib(rate)` with `.vibmod(semitones)`: vibrato;
- `.detune(...)` and `.unison(voices)` on `supersaw`.

```js
note("c2 ~ c2 [~ c3]").s("sawtooth").lpf(250).lpenv(4).lpdecay(0.15).lpsustain(0)
```

```js
note("c3 e3 g3 c4").s("sine").fm(3).fmh(2).fmdecay(0.3)
```

```js
note("c2*4").s("sine").penv(24).pdecay(0.08)
```

`.fmwave(name)` sets the FM modulator's waveform: `sine` (the default),
`sawtooth`, `square` or `triangle`. It only matters with `.fm`. The noise
names (`white`, `pink`, `brown`, `crackle`) are accepted and leave the
modulator a sine.

```js
note("c3 e3 g3 c4").s("sine").fm(2).fmwave("square")
```

Strudel's pulse and wavetable controls (`.pw`, `.pwrate`, `.pwsweep`,
`.wt`, `.warp`, `.warpmode`) are accepted with a warning and do not change
the sound: TuttiDAW's synths have no such oscillators.

Each of these is an approximation of Strudel's synth on a TuttiDAW
instrument; the diagnostics list say which device plays it.

## Moving values: signals

A **signal** is a value that moves continuously through the cycle. `sine`,
`cosine`, `saw`, `tri` and `square` go from 0 to 1; `perlin` and `rand`
move smoothly or randomly. `.range(min, max)` scales a signal, `.slow(n)`
stretches it over `n` cycles.

```js
note("c2*16").s("sawtooth").lpf(sine.range(300, 3000).slow(4))
```

```js
s("hh*16").gain(perlin.range(0.3, 0.9))
```

`.segment(n)` samples a signal `n` times per cycle, which turns it into
notes:

```js
n(saw.range(0, 8).segment(8)).scale("C:minor")
```

## In the studio: automation

When you **Open in TuttiDAW**, a control that changes over time - a pattern
like `"<300 600>"` or a signal - becomes a clip envelope on the device
parameter, so you can see and edit the movement like any other automation.

Source: https://tuttidaw.com/code/learn/effect-controls
