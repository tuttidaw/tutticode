# Mixing: buses and master

Shared reverbs and delays on buses, sends from the voices, each voice's fader and pan, sidechain ducking, and the program's master chain - the same tracks Open in TuttiDAW makes.

A program can mix itself the way a studio project is mixed: **buses** for
shared effects, **sends** from the voices into them, a **fader and pan** per
voice, and a **master** that everything goes through. "Open in TuttiDAW"
makes exactly these tracks.

| Code | What it is | In the studio |
|---|---|---|
| `bus(name)` | a shared effect track | a return track inside the program's group |
| `.send(bus, dB)` | how much of a voice goes to a bus | the voice track's send knob |
| `.mix({vol, pan, mute})` | a voice's (or a bus's) mixer | the track's fader, pan and mute |
| `master` | the program's own bus | the program group's devices and fader |

These are TuttiDAW-only, like `.fx`. "Export to Strudel" (the code page's
Export & Share tab) opens the program on strudel.cc without them, after
listing what it leaves out: there the voices play dry, each at its own level.

## Buses and sends

Declare a bus with `bus("name")` on its own line and give it effects with
`.fx`. A bus usually holds a "wet only" effect (Dry/Wet at 100%): the voices
keep their dry sound and send some of it to the bus.

```js
bus("verb").fx("Reverb:Large Hall", {dryWetBalance: 1})

drums: s("bd*2 [~ bd] sd ~, hh*8").bank("tr909")
keys: chord("<Cm7 Fm7>").voicing().inst("Electric").send("verb", -10)
lead: n("0 2 4 7").scale("C4:minor").s("triangle").send("verb", -18)
```

`.send(bus, dB)` takes a level in dB: `0` is the most, `-70` is off. Send
from as many voices as you like, and from one voice to several buses:

```js
bus("verb").fx("Reverb", {dryWetBalance: 1, decayTime: "3s"})
bus("echo").fx("Delay", {feedback: 0.4}).mix({vol: -6})

keys: note("<c3 e3 g3>").inst("Drift").send("verb", -10).send("echo", -20)
```

A pattern moves the level - here the reverb opens up every other bar:

```js
bus("verb").fx("Reverb", {dryWetBalance: 1})
keys: note("c3 e3 g3 e3").s("sine").send("verb", "<-24 -6>")
```

A send to a bus the program does not declare is a warning, and the editor
offers to add `bus("...")` for you.

Why buses? Two voices that share one reverb sound like they are in one
room, and you change the room in one place. Strudel's `.room()` still works
too: it gives that voice its own reverb.

## A voice's fader, pan and mute

`.mix()` sets the voice's mixer: `vol` in dB (`0` leaves it as it is, `-6`
is half as loud, `-70` is silent), `pan` from `-1` (left) to `1` (right),
`mute` on or off.

```js
bass: note("c2 ~ c2 g1").s("sawtooth").lpf(500).mix({vol: -3})
hats: s("hh*8").mix({vol: -12, pan: 0.4})
perc: s("~ rim").mix({pan: -0.4, mute: true})
```

`vol` and `pan` can be patterns too. When a voice has both `.pan()` (Strudel)
and `.mix({pan})`, the `.mix` value wins.

## The master

`master` is the program's own bus: every voice and bus goes through it.
Give it effects and a fader like any bus - a gentle compressor to glue the
mix and a limiter at the end are a common start:

```js
master.fx("Glue Compressor", {threshold: -12}).fx("Limiter")
master.mix({vol: -1})

drums: s("bd*4, ~ cp, hh*8").bank("tr909")
bass: note("<c2 g1 a1 f1>").ply(4).s("sawtooth").lpf(600)
```

On this page the master is what you hear. In a project, a program lives in
its own group track, so `master` is that group's chain; it feeds the
project's master like any other track. A bus's and the master's `vol`,
`pan` and device params can be patterns too (see Automation).

## Sidechain: duck under the kick

A compressor normally listens to the sound it compresses. With
`sidechain` it listens to another voice instead: give the pad's compressor
`sidechain: "kick"` and the pad gets quieter on every kick hit, then comes
back - the "pumping" of dance music, and room for the kick in any mix.

```js
kick: s("bd*4").bank("tr909")
pad: chord("<Am F C G>").voicing().s("supersaw").lpf(2500).gain(0.3)
  .fx("Compressor", {threshold: -30, ratio: 8, attack: 1, release: 120, sidechain: "kick"})
```

`release` sets how fast the pad comes back (shorter pumps harder), and
`threshold` and `ratio` how deep it ducks. Name the source like this:

| `sidechain:` | listens to |
|---|---|
| `"kick"` | the voice labelled `kick:` |
| `"bus:verb"` | the bus `bus("verb")` |
| `"group:drums"` | the group `group("drums")` |

Two more keys shape what the compressor hears: `sidechainGain` (dB, how
loud the source is to the detector) and `sidechainFilter` (a frequency:
only the source's lows below it key the compressor, so the kick's low thump
ducks the pad and the hats do not; `false` turns the filter off):

```js
group("drums")
kick: s("bd*4").bank("tr909").group("drums")
hats: s("hh*8").bank("tr909").group("drums")
bass: note("<a1 f1 c2 g1>").ply(8).s("sawtooth").lpf(500)
  .fx("Compressor", {threshold: -30, ratio: 6, sidechain: "group:drums", sidechainFilter: "150Hz"})
```

Devices with a sidechain input take it: Compressor, Glue Compressor, Gate,
Auto Filter and Multiband Dynamics. A source the program does not have is a
warning, and the sidechain stays off; a voice cannot key itself.

## In the studio

Open the program in TuttiDAW and you get its group with one track per
voice, the buses as return tracks inside the group, and the master chain on
the group, each sidechain routed from its source's track. The values the
code sets belong to the code: change one by hand (a device param, a
sidechain source, a fader, pan or mute, or a device added, removed or moved
on a bus or the master) and that voice, bus or master is detached from the
code (Re-attach brings it back). Remove
a bus from the code and its return track stays, marked "not in code".

Source: https://tuttidaw.com/code/learn/mixing
