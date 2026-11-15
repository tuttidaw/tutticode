# Function reference

Generated from TuttiDAW's pattern engine: every function, method and signal
it knows, with a short description and an example that compiles. Names
marked *(TuttiDAW only)* are extensions that strudel.cc does not have.

## Functions

### `aliasBank(bank, alias?)`

Gives a drum machine bank another name for bank(); also takes an object { bank: alias }.

```js
aliasBank("RolandTR909", "nine")
s("bd*4, hh*8").bank("nine")
```

### `all(fn)`

Applies one transformation to every program voice.

```js
all(x => x.fast(2)); $: note("60 64")
```

### `arrange(...sections)`

Sections played back to back for the given cycles, looping.

```js
arrange([4, note("c e")], [2, note("f a")])
```

### `bus(name)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: declares a bus, a return track of the program; give it .fx(...) and .mix(...), and send voices to it with .send(name, dB).

```js
bus("verb").fx("Reverb:Large Hall", {dryWetBalance: 1})
keys: note("c3 e3 g3").send("verb", -12)
```

### `cat(...patterns)`

One pattern per cycle, in turn.

```js
cat(note("c e"), note("g b"))
```

### `chooseCycles(...patterns)`

Picks one pattern at random each cycle.

```js
chooseCycles(s("bd"), s("hh"), s("sd")).fast(4)
```

### `chord(symbols)`

Sets chord symbols; also available as .chord(symbols) or .chord().

```js
chord("<Bbm9 Fm9>/4").dict("ireal").voicing()
```

### `ensembleSet(sections)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: sets the shared effects of the program's Ensemble Sets (the Sets its .inst("Ensemble:...") voices play in): the Chorus, Delay and Reverb buses and the Set's master, in the devices' own values; once per program, constants only.

```js
ensembleSet({reverb: {revType: "HALL", revSize: 100}, delay: {dlyTime: "1/8D", dlyFdbk: 40}})
flute: note("g4 a4 c5 d5").inst("Ensemble:Sample FLUTE", {rev: 60})
```

### `env(points, bars?)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: automation as points "position:value" (positions in bars), joined by straight lines and looped over the last position (or bars); ~k (-1..1) bends the segment ending at a point, _ before a position holds until it, two points at one position jump. A list [[position, value, segment]] is the exact form.

```js
pad: note("c3").fx("Auto Filter", {frequency: env("0:200 4:4000~.5 8:200")})
```

### `form(order)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: the order the section(...) blocks play in, once per program: section names in order, [..] to group, !n to repeat, name@n for the bars of that one occurrence. The whole form is the program loop (up to 128 bars on TuttiCode).

```js
section("verse", 8, {drums: s("bd ~ sd ~")})
section("chorus", 8, {drums: s("bd sd bd sd")})
form("[verse chorus]!2 verse@4")
```

### `group(name)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: declares a group, a group track inside the program; give it .fx(...), .mix(...) and .send(bus, dB). On a voice, .group(name) puts its track in that group (a name the program does not declare is a warning).

```js
group("drums").fx("Drum Shaper").mix({vol: -3})
kick: s("bd*4").group("drums")
snare: s("~ sd").group("drums")
```

### `hush()`

Silence.

```js
stack(s("bd").hush(), s("hh*4"))
```

### `irand(n)`

Random whole numbers from 0 to n-1 (continuous).

```js
n(irand(8).segment(4)).scale("C:minor")
```

### `master`

TuttiDAW extension, not in Strudel: the program's own bus, which every voice and bus feeds; give it .fx(...) and .mix(...).

```js
master.fx("Limiter").mix({vol: -1})
$: s("bd sd")
```

### `n(numbers)`

Numbers: scale degrees with .scale(), sample variants with s().

```js
n("0 2 4").scale("C:minor")
```

### `note(notes)`

Plays pitches: note names (c4, eb3), solfège (do re mi, sol4, sib) or MIDI numbers (60).

```js
note("c3 e3 g3 b3")
```

### `pure(value)`

One event per cycle with the value.

```js
note(pure(60))
```

### `ramp(from, to, bars)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: a straight line from one value to another over a number of bars, then again (a loop); as a mixer level, a send or a device param it is automation with real points. Add .once() to play it once and hold the end.

```js
kick: s("bd*4").mix({vol: ramp(-60, 0, 4)})
```

### `register(name, fn)`

Defines a new method (and a function) from your own code; the pattern comes last.

```js
register('dub', (pat) => pat.room(0.5))
$: note("c3 e3").dub()
```

### `run(n)`

The numbers 0 to n-1 in one cycle.

```js
n(run(4)).scale("C:major")
```

### `s(sounds)`

Picks the sound: drum names (bd sd hh) or a synth (sawtooth, piano).

```js
s("bd sd [~ bd] sd")
```

### `samples(mapOrManifest, base?)`

Declares external sample references; browser consumers load audio explicitly.

```js
samples('github:user/repo')
```

### `section(name, bars, tracks?)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: a section of a song - everything each track plays in it, in one block. Each pattern starts at the section's first bar and loops in it; a track it does not list is silent there. "verse#2" changes only the second verse (the tracks it lists). Sections play in form(...) order, else in the order they are written.

```js
section("verse", 16, {drums: s("bd ~ sd ~, hh*8"), bass: note("<c2 eb2 g1 bb1>*4")})
section("chorus", 16, {drums: s("bd sd bd sd, hh*16"), bass: note("<c2 ab1>*8")})
form("verse chorus verse chorus")
```

### `seq(...patterns)`

Squeezes all patterns into one cycle, one after another.

```js
seq(s("bd"), s("sd sd"))
```

### `setcpm(cpm)`

Asks for a tempo in cycles per minute (one cycle = one bar).

```js
setcpm(30)
```

### `setcps(cps)`

Asks for a tempo in cycles per second.

```js
setcps(0.5)
```

### `setDefault(control, value?)`

A value every event plays with unless it sets that control itself; also takes an object of controls.

```js
setDefault({ room: 0.3, lpf: 2000 })
note("c3 e3 g3").s("sawtooth")
```

### `setDefaultVoicings(name)`

Sets the default voicing dictionary for this program only.

```js
setDefaultVoicings('ireal'); chord("Cm9").voicing()
```

### `setGainCurve(fn)`

Passes every gain and velocity value through a function, e.g. x => x * x for a quadratic curve.

```js
setGainCurve(x => x * x)
s("hh*8").gain(".4 1")
```

### `silence`

A pattern with no events.

```js
cat(s("bd"), silence)
```

### `slider(value, min = 0, max = 1, step?)`

A numeric pattern with an inline literal control.

```js
note(slider(60, 48, 72, 1))
```

### `soundAlias(sound, alias)`

Gives a sound another name for s(); every voice can use it.

```js
soundAlias("RolandTR808_bd", "kick")
s("kick*4")
```

### `squeeze(indices, listOrObject)`

Squeezes selected cycles into selector events; also a method.

```js
note(squeeze("0 1", ["60 64", "67 72"]))
```

### `stack(...patterns)`

Plays patterns at the same time.

```js
stack(s("bd*4"), note("c2 g2"))
```

### `timeCat(...steps)`

Sequence in one cycle with relative lengths; a bare "..." pattern weighs its number of steps.

```js
timeCat([3, s("bd")], [1, s("sd")])
```

### `toggle(value)` *(TuttiDAW only)*

A value pattern with an inline on/off control (Tutti extension, not in Strudel).

```js
note("60 64").mask(toggle(1))
```

### `track(name)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: declares a track of a song with sections and its sound, once - give it .inst(...), .fx(...), .midifx(...), .mix(...), .send(bus, dB) and .group(name). What it plays goes in the section(...) blocks; a track no section lists plays nothing.

```js
track("bass").inst("Ember:Deep Bass").mix({vol: -3})
section("verse", 8, {bass: note("<c2 eb2>*4")})
```

## Methods

### `.accelerate(amount?)`

Glides a sample's pitch over its note: from its speed to speed + accelerate.

```js
s("bd*2 sd").accelerate("<-0.5 1>")
```

### `.add(x)`

Adds to every value; on note()/n() patterns add note(...) / n(...).

```js
n("0 2 4".add("<0 3>")).scale("C:major")
```

### `.almostAlways(f)`

Applies f to about 90% of the events.

```js
s("hh*8").almostAlways(x => x.gain(0.7))
```

### `.almostNever(f)`

Applies f to about 10% of the events.

```js
s("hh*8").almostNever(x => x.ply(2))
```

### `.always(f)`

Always applies f.

```js
s("hh*4").always(x => x.fast(2))
```

### `.amp(level?)`

Linear level, multiplied with gain (1 = unchanged).

```js
note("c3*4").s("sawtooth").amp("<1 0.5>")
```

### `.anchor(note)`

Aligns the voicing to a note name or MIDI pitch (default C5).

```js
chord("C").anchor("D5").voicing()
```

### `.arp(indices)`

Sequences chord tones inside each event, wrapping indices without octaving.

```js
chord("C").voicing().arp("0 1 2 3")
```

### `.attack(time?)`

Envelope attack time in seconds.

```js
note("c e").s("sawtooth").attack(0.1)
```

### `.bank(name?)`

Drum machine bank for s(), e.g. "RolandTR909".

```js
s("bd sd").bank("RolandTR909")
```

### `.begin(position?)`

Where a sample starts, 0..1 of its length.

```js
s("hh*4").begin("<0 0.25>")
```

### `.bpattack(time?)`

Band-pass filter envelope attack in seconds.

```js
note("c2 e2").s("sawtooth").bpf(500).bpattack(0.3).bpenv(3)
```

### `.bpdecay(time?)`

Band-pass filter envelope decay in seconds.

```js
note("c2*4").s("sawtooth").bpf(400).bpenv(4).bpdecay(0.2)
```

### `.bpenv(depth?)`

Band-pass filter envelope depth in octaves (negative sweeps down).

```js
note("c2 e2 f2 g2").s("sawtooth").bpf(500).bpattack(0.5).bpenv("<4 -2>")
```

### `.bpf(frequency?)`

Band-pass filter center in Hz ("1000:4" also sets its Q).

```js
s("hh*8").bpf(2000)
```

### `.bpq(q?)`

Band-pass filter Q.

```js
s("hh*8").bpf(1500).bpq(4)
```

### `.bprelease(time?)`

Band-pass filter envelope release in seconds.

```js
note("c2 ~").s("sawtooth").bpf(400).bpenv(3).bprelease(0.5)
```

### `.bpsustain(level?)`

Band-pass filter envelope sustain level, 0..1.

```js
note("c2*2").s("sawtooth").bpf(400).bpenv(3).bpdecay(0.2).bpsustain(0.5)
```

### `.chop(parts)`

Cuts each event and its sample into equal parts played in turn.

```js
s("bd sd").chop(4)
```

### `.chorus(amount?)`

Chorus amount, 0..1.

```js
note("c e g").s("sawtooth").chorus(0.5)
```

### `.chunk(n, f)`

Applies f to one of n slices of the cycle, a different slice each cycle.

```js
note("c d e f").chunk(4, x => x.add(note(12)))
```

### `.clip(factor?)`

Multiplies note length (1 = full step); a sample stops at the note end.

```js
note("c a f e").clip(0.5)
```

### `.coarse(factor?)`

Sample-rate reduction: higher is coarser.

```js
s("bd sd").coarse(8)
```

### `.color(color?)`

The voice's colour (a CSS name, #hex or rgb()), as the nearest clip colour.

```js
note("c3 e3 g3").color("orange")
```

### `.compressor(threshold?)`

Compressor threshold in dB ("thr:ratio:knee:attack:release").

```js
s("bd sd").compressor("-20:20:10:.002:.02")
```

### `.compressorAttack(time?)`

Compressor attack in seconds.

```js
s("bd sd").compressor(-20).compressorAttack(0.01)
```

### `.compressorKnee(knee?)`

Compressor knee in dB.

```js
s("bd sd").compressor(-20).compressorKnee(6)
```

### `.compressorRatio(ratio?)`

Compressor ratio.

```js
s("bd sd").compressor(-20).compressorRatio(8)
```

### `.compressorRelease(time?)`

Compressor release in seconds.

```js
s("bd sd").compressor(-20).compressorRelease(0.2)
```

### `.cpm(cyclesPerMinute)`

Plays the pattern at this many cycles per minute, relative to the program tempo.

```js
note("c e g").cpm(45)
```

### `.crush(bits?)`

Bit crusher: lower is crunchier.

```js
s("bd sd").crush(4)
```

### `.cut(group?)`

Cut group: a hit stops the playing samples of its group.

```js
s("[oh hh]*4").cut(1)
```

### `.decay(time?)`

Envelope decay time in seconds.

```js
note("c e").s("square").decay(0.2)
```

### `.degrade()`

Drops half of the events at random.

```js
s("hh*8").degrade()
```

### `.degradeBy(amount)`

Drops events at random with the given probability.

```js
s("hh*8").degradeBy(0.3)
```

### `.delay(amount?)`

Delay wet amount, 0..1 ("0.5:0.25:0.7" also sets time and feedback).

```js
s("cp").delay(0.5)
```

### `.delayfeedback(amount?)`

Delay feedback, 0..1.

```js
s("cp").delay(0.5).delayfeedback(0.6)
```

### `.delaysync(cycles?)`

Delay time in cycles; a whole number of 16ths plays synced to the tempo.

```js
s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
```

### `.delaytime(time?)`

Delay time in cycles.

```js
s("cp").delay(0.5).delaytime(0.125)
```

### `.detune(amount?)`

Unison detune of the voice (supersaw).

```js
note("c3 e3").s("supersaw").detune(0.3)
```

### `.dict(name)`

Selects default, ireal, lefthand or legacy voicing shapes.

```js
chord("C7").dict("lefthand").voicing()
```

### `.diode(amount?)`

Diode distortion (Saturator Digital Clip); "amount:volume" sets distortvol too.

```js
note("a1*4").s("sine").diode("<1 3>")
```

### `.distort(amount?)`

Distortion amount.

```js
note("c2*4").s("sawtooth").distort(2)
```

### `.distortvol(volume?)`

Level after distort or diode, linear (Saturator Output, at most 0 dB).

```js
s("bd*4").distort(4).distortvol(.5)
```

### `.div(x)`

Divides every value.

```js
n("8 4".div(2)).scale("C:major")
```

### `.djf(position?)`

DJ filter, 0..1: low-pass below 0.5, open at 0.5, high-pass above (Auto Filter DJ).

```js
n("0 2 4 7").scale("d:minor").s("supersaw").djf("<.5 .3 .2 .75>")
```

### `.dry(level?)`

Level of the direct sound beside room and delay, 0 (only the effect) .. 1.

```js
n("[0,3,7](3,8)").s("triangle").room(.7).dry("<0 .5 1>")
```

### `.early(cycles)`

Shifts the pattern earlier by a fraction of a cycle.

```js
s("hh*2").early(0.125)
```

### `.echo(times, time, feedback)`

Repeats each event, quieter each time.

```js
s("bd sd").echo(3, 1/8, 0.7)
```

### `.echoWith(times, time, f)`

Repeats the pattern, applying f(pattern, index) to each copy.

```js
note("c").echoWith(3, 1/8, (p, i) => p.add(i * 2))
```

### `.end(position?)`

Where a sample stops, 0..1 of its length.

```js
s("oh*4").end(0.3)
```

### `.euclid(pulses, steps)`

Euclidean rhythm: pulses spread evenly over steps.

```js
note("c3").euclid(3, 8)
```

### `.euclidLegato(pulses, steps, rotation?)`

Euclidean rhythm where each pulse lasts until the next.

```js
note("c3").euclidLegato(3, 8)
```

### `.euclidLegatoRot(pulses, steps, rotation)`

Rotated euclidean rhythm where each pulse lasts until the next, across the cycle boundary.

```js
note("c3").euclidLegatoRot(3, 8, 1)
```

### `.euclidRot(pulses, steps, rotation)`

Euclidean rhythm, rotated by some steps.

```js
note("c3").euclidRot(3, 8, 2)
```

### `.every(n, f)`

Applies f on the first of every n cycles.

```js
note("c d e g").every(4, x => x.rev())
```

### `.fanchor(anchor = 0)`

Centre of a filter envelope: 0 sweeps up from the cutoff (default), 0.5 around it, 1 down to it.

```js
note("f2*8").s("sawtooth").lpf(1000).lpenv(8).fanchor("<0 0.5 1>")
```

### `.fast(factor)`

Speeds the pattern up by the factor (may be a pattern).

```js
note("c e g").fast("<1 2>")
```

### `.firstOf(n, f)`

Applies f on cycle 0, n, 2n, ...

```js
note("c d e g").firstOf(4, x => x.rev())
```

### `.fit()`

Plays each sample (its begin..end window) at the speed that fills its event.

```js
s("bd/2").fit()
```

### `.fm(index?)`

FM modulation index.

```js
note("c e g").fm(2)
```

### `.fmap(fn)`

Maps each raw event value, retaining its times and source ranges.

```js
note("60 64".fmap(x => x + 12))
```

### `.fmattack(time?)`

FM envelope attack in seconds.

```js
note("c e").fm(4).fmattack(0.1)
```

### `.fmdecay(time?)`

FM envelope decay in seconds.

```js
note("c e").fm(4).fmdecay(0.2)
```

### `.fmenv(curve = "lin")`

FM envelope ramps: "lin" (0) or "exp" (1).

```js
note("c e g b").fm(4).fmdecay(0.2).fmsustain(0).fmenv("<exp lin>")
```

### `.fmh(ratio?)`

FM modulator-to-carrier ratio.

```js
note("c e g").fm(2).fmh(1.5)
```

### `.fmsustain(level?)`

FM envelope sustain level, 0..1.

```js
note("c e").fm(4).fmdecay(0.2).fmsustain(0.3)
```

### `.fmwave(wave?)`

The FM modulator's waveform: sine, sawtooth, square or triangle (Operator's modulator).

```js
n("0 2 4 7").scale("d:minor").s("sine").fm(4).fmh(2).fmwave("square")
```

### `.freq(hertz?)`

Pitch in Hz instead of a note (rounded to the nearest semitone).

```js
freq("220 275 330 440").s("triangle")
```

### `.ftype(type?)`

Filter type: "12db" (0), "ladder" (1) or "24db" (2).

```js
note("c2 eb2 g2").s("sawtooth").lpf(500).lpenv(4).ftype("<0 1 2>")
```

### `.fx(name, params?)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: adds an audio effect after the instrument of the voice, in call order; patterns automate params.

```js
note("c4 e4").fx("Auto Filter", {frequency: sine.range(300, 3000).slow(4)})
```

### `.gain(level?)`

Volume, 0..1 and up.

```js
s("hh*8").gain(0.6)
```

### `.hpattack(time?)`

High-pass filter envelope attack in seconds.

```js
note("c2 e2").s("sawtooth").hpf(500).hpattack("<0.5 0.1>").hpenv(4)
```

### `.hpdecay(time?)`

High-pass filter envelope decay in seconds.

```js
note("c2*4").s("sawtooth").hpf(300).hpenv(4).hpdecay(0.2)
```

### `.hpenv(depth?)`

High-pass filter envelope depth in octaves (negative sweeps down).

```js
note("c2 e2 f2 g2").s("sawtooth").hpf(500).hpattack(0.5).hpenv("<4 2 -2>")
```

### `.hpf(frequency?)`

High-pass filter cutoff in Hz.

```js
s("hh*8").hpf(2000)
```

### `.hpq(resonance?)`

High-pass filter resonance.

```js
s("hh*8").hpf(1200).hpq(4)
```

### `.hprelease(time?)`

High-pass filter envelope release in seconds.

```js
note("c2 ~").s("sawtooth").hpf(300).hpenv(3).hprelease(0.5)
```

### `.hpsustain(level?)`

High-pass filter envelope sustain level, 0..1.

```js
note("c2*2").s("sawtooth").hpf(300).hpenv(3).hpdecay(0.2).hpsustain(0.5)
```

### `.inhabit(listOrObject)`

Squeezes one selected cycle into each selector event.

```js
note("0 1".inhabit(["60 64", "67 72"]))
```

### `.inside(n, f)`

Applies f as if the cycle were n cycles long.

```js
note("c d e f").inside(2, rev)
```

### `.inst(name, params?)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: plays the voice on a TuttiDAW instrument ("Device" or "Device:Preset"), params in the device units; patterns automate params.

```js
note("c2 eb2").inst("Ember:Deep Bass", {cutoff: 600})
```

### `.iresponse(name?)`

Impulse response of the reverb: a library IR by name, or category:index like a sample.

```js
s("bd sd [~ bd] sd").room(.6).iresponse("teaching-room")
```

### `.iter(n)`

Starts each cycle one subdivision later in the pattern.

```js
note("c d e f").iter(4)
```

### `.iterBack(n)`

Like .iter(), going the other way.

```js
note("c d e f").iterBack(4)
```

### `.jux(f)`

Original panned left, f of it panned right.

```js
s("bd sd hh").jux(rev)
```

### `.kcutoff(frequency?)`

Low-pass cutoff in Hz after krush.

```js
s("bd*4, ~ sd").krush(4).kcutoff(1200)
```

### `.krush(amount?)`

Heavy drive (Saturator Hard Curve); kcutoff adds its low-pass. Not played by strudel.cc.

```js
s("bd*4, ~ sd").krush(4)
```

### `.lastOf(n, f)`

Applies f on the last of every n cycles.

```js
note("c d e g").lastOf(4, x => x.fast(2))
```

### `.late(cycles)`

Shifts the pattern later by a fraction of a cycle.

```js
s("hh*2").late(0.125)
```

### `.layer(...f)`

Plays f of the pattern for each f, without the original.

```js
note("c e").layer(x => x.add(7), x => x.add(12))
```

### `.leslie(amount?)`

Rotary speaker amount, 0..1 (Chorus-Ensemble Doppler + Auto Pan rotor). Not played by strudel.cc.

```js
note("<[c3,e3,g3] [a2,c3,e3]>").s("square").leslie(0.8)
```

### `.loop(on?)`

Loops a sample until its note ends (1 = on).

```js
s("hh:4 ~").loop(1).end(0.1)
```

### `.loopAt(cycles)`

Slows the pattern down and plays the sample at the speed that makes it last that many cycles.

```js
s("bd").loopAt(2)
```

### `.lpattack(time?)`

Filter envelope attack in seconds.

```js
note("c2 e2").s("sawtooth").lpf(300).lpenv(4).lpattack(0.2)
```

### `.lpdecay(time?)`

Filter envelope decay in seconds.

```js
note("c2 e2").s("sawtooth").lpf(300).lpenv(4).lpdecay(0.2)
```

### `.lpenv(depth?)`

Low-pass filter envelope depth.

```js
note("c2 e2").s("sawtooth").lpf(300).lpenv(4)
```

### `.lpf(frequency?)`

Low-pass filter cutoff in Hz ("800:4" also sets resonance).

```js
note("c2*4").s("sawtooth").lpf(800)
```

### `.lpq(resonance?)`

Low-pass filter resonance.

```js
note("c2*4").s("sawtooth").lpf(600).lpq(8)
```

### `.lprelease(time?)`

Filter envelope release in seconds.

```js
note("c2 e2").s("sawtooth").lpf(300).lpenv(4).lprelease(0.5)
```

### `.lpsustain(level?)`

Filter envelope sustain level, 0..1.

```js
note("c2 e2").s("sawtooth").lpf(300).lpenv(4).lpsustain(0.3)
```

### `.mask(pattern)`

Silences the parts where the mask is 0 or ~.

```js
note("c d e f").mask("1 0 1 1")
```

### `.midifx(name, params?)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: adds a MIDI effect before the instrument of the voice; the notes stay as written.

```js
note("[c3,e3,g3]").midifx("Arpeggiator", {style: "UpDown", rate: "1/16"})
```

### `.mix(mixer)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: the voice's mixer: vol in dB (-70..6), pan -1..1, mute true / false; a bus's, a group's and the master's too. Patterns automate vol and pan.

```js
note("c3 e3").mix({vol: -6, pan: -0.3})
```

### `.mode(alignment)`

Aligns above, below, duck or root; oldabove and oldroot are legacy modes.

```js
chord("C").mode("root:g2").voicing()
```

### `.mul(x)`

Multiplies every value.

```js
n("1 2 3".mul(2)).scale("C:major")
```

### `.never(f)`

Never applies f.

```js
s("hh*4").never(x => x.fast(2))
```

### `.noise(amount?)`

Noise mixed into the synth oscillator, 0..1.

```js
note("c3").s("sawtooth").noise("<0.1 0.25 0.5>")
```

### `.off(time, f)`

Adds a copy shifted later by time with f applied.

```js
note("c3 eb3 g3").off(1/8, x => x.add(7))
```

### `.offset(n)`

Moves by whole voicing positions; wrapping the dictionary changes octave.

```js
chord("C*4").offset("0 1 2 3").voicing()
```

### `.often(f)`

Applies f to about 75% of the events.

```js
s("hh*8").often(x => x.gain(0.4))
```

### `.once()` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: an env() or ramp() plays once from the start, then holds its last value.

```js
kick: s("bd*4").mix({vol: ramp(-60, 0, 8).once()})
```

### `.orbit(orbit?)`

Voices on one orbit share its delay and reverb settings.

```js
stack(s("hh*6").delay(.5).delaytime(.25).orbit(1), s("~ sd ~ sd").delay(.5).orbit(1))
```

### `.outside(n, f)`

Applies f as if n cycles were one.

```js
note("<c d> e").outside(2, rev)
```

### `.palindrome()`

Forwards on even cycles, backwards on odd ones.

```js
note("c d e g").palindrome()
```

### `.pan(position?)`

Stereo position, 0 = left, 1 = right.

```js
s("hh*4").pan("<0 1>")
```

### `.panchor(anchor?)`

Where the pitch envelope sits around the note: 0 sweeps up from it, 1 down to it; default the psustain level.

```js
note("c3 c4").penv(12).panchor("<0 0.5 1>")
```

### `.pattack(time?)`

Pitch envelope attack in seconds.

```js
note("c3").penv(12).pattack(0.1)
```

### `.pcurve(curve = 0)`

Pitch envelope curve: 0 linear (default), 1 exponential, good for kicks.

```js
note("g1*4").s("sine").pdecay(0.5).penv(32).pcurve("<0 1>")
```

### `.pdecay(time?)`

Pitch envelope decay in seconds.

```js
note("c2*4").penv(24).pdecay(0.1)
```

### `.penv(semitones?)`

Pitch envelope amount in semitones.

```js
note("c2*4").s("sine").penv(24).pdecay(0.1)
```

### `.phaser(rate?)`

Phaser speed in Hz.

```js
note("c e g").s("sawtooth").phaser(2)
```

### `.phasercenter(frequency?)`

Phaser center frequency in Hz.

```js
note("c e g").s("sawtooth").phaser(2).phasercenter(2000)
```

### `.phaserdepth(depth?)`

Phaser depth, 0..1.

```js
note("c e g").s("sawtooth").phaser(2).phaserdepth(0.5)
```

### `.phasersweep(width = 2000)`

How far the phaser sweeps around its center, in Hz (default 2000).

```js
n(run(8)).scale("D:pentatonic").s("sawtooth").phaser(2).phasersweep("<800 4000>")
```

### `.pianoroll()`

Draws a scrolling piano roll of the voice's notes behind the code.

```js
note("c e g b").pianoroll()
```

### `.pick(listOrObject)`

Selects a pattern, preserving its timing; list indices clamp to the ends.

```js
note("<0 1>".pick(["60 64", "67 72"]))
```

### `.pickOut(listOrObject)`

Keeps each selector event and plays the selected pattern value at its start.

```js
note("<0 1>".pickOut(["60 64", "67 72"]))
```

### `.pickRestart(listOrObject)`

Selects a pattern and restarts it at each selector onset.

```js
note("0 1".pickRestart(["60 64", "67 72"]))
```

### `.ply(n)`

Repeats every event n times within its own length.

```js
s("bd ~ sd cp").ply(2)
```

### `.postgain(level?)`

Volume after the effects.

```js
s("bd").postgain(0.8)
```

### `.prelease(time?)`

Pitch envelope release in seconds.

```js
note("c3").penv(12).prelease(0.3)
```

### `.psustain(level?)`

Pitch envelope sustain level, 0..1.

```js
note("c3").penv(12).pdecay(0.1).psustain(0.5)
```

### `.punchcard()`

Draws the voice's notes as a scrolling punchcard behind the code.

```js
note("c e g b").punchcard()
```

### `.range(min, max)`

Maps a 0..1 signal to min..max.

```js
s("hh*8").lpf(sine.range(300, 3000))
```

### `.range2(min, max)`

Maps a -1..1 signal to min..max.

```js
note("c*4").pan(sine2.range2(0, 1))
```

### `.rangex(min, max)`

Like .range() on an exponential curve (good for frequencies).

```js
s("hh*8").lpf(saw.rangex(200, 4000))
```

### `.rarely(f)`

Applies f to about 25% of the events.

```js
note("c*8").rarely(x => x.add(7))
```

### `.release(time?)`

Envelope release time in seconds.

```js
note("c e").s("sawtooth").release(0.5)
```

### `.rev()`

Plays each cycle backwards.

```js
note("c d e g").rev()
```

### `.ribbon(offset, cycles)`

Loops a piece of the pattern: the cycles that start at offset.

```js
note("<c d e f>").ribbon(1, 2)
```

### `.room(amount?)`

Reverb amount, 0..1 ("0.5:3" also sets size).

```js
s("cp").room(0.5)
```

### `.rootNotes(octave = 2)`

Plays each chord root in the requested scientific octave.

```js
chord("C Am F G").rootNotes(2)
```

### `.scale(name)`

Turns n degrees into notes of a scale like "C:minor" (root in octave 3).

```js
n("0 2 4 6").scale("<C:major A:minor>")
```

### `.scope()`

Draws an oscilloscope of the voice's sound behind the code.

```js
note("c e g b").scope()
```

### `.scrub(positions)`

Starts the sample at each position (0..1); "position:speed" sets the speed too.

```js
s("bd").scrub("0 0.5:2 0.25")
```

### `.segment(n)`

Samples the pattern n times per cycle (turns signals into notes).

```js
n(saw.range(0, 7).segment(8)).scale("C:major")
```

### `.send(bus, dB)` *(TuttiDAW only)*

TuttiDAW extension, not in Strudel: sends the voice to a bus at a level in dB (-70 is off, 0 the most); one level per bus, a pattern moves it.

```js
bus("verb").fx("Reverb")
$: note("c3 e3").send("verb", -12)
```

### `.set(pattern)`

Merges values from another pattern while retaining this pattern rhythm.

```js
n("0 1 2 3").set(chord("<C Am>")).voicing()
```

### `.shape(amount?)`

Waveshaping drive, 0..1.

```js
s("bd*4").shape(0.4)
```

### `.size(size?)`

Reverb room size.

```js
s("cp").room(0.5).size(4)
```

### `.slice(count, indices)`

Plays slice i of count equal slices of the sample for each index event (or a list of 0..1 cut points).

```js
s("bd").slice(4, "0 2 1 3")
```

### `.slow(factor)`

Stretches the pattern over more cycles.

```js
note("c e g b").slow(2)
```

### `.someCycles(f)`

Applies f to about half of the cycles.

```js
s("bd*4").someCycles(x => x.fast(2))
```

### `.someCyclesBy(p, f)`

Applies f to whole cycles with probability p.

```js
s("bd*4").someCyclesBy(0.3, x => x.fast(2))
```

### `.sometimes(f)`

Applies f to about half of the events.

```js
s("hh*8").sometimes(x => x.gain(0.5))
```

### `.sometimesBy(p, f)`

Applies f to events with probability p.

```js
note("c*8").sometimesBy(0.3, x => x.add(12))
```

### `.spectrum()`

Draws a spectrum of the voice's sound behind the code.

```js
note("c e g b").spectrum()
```

### `.speed(speed?)`

Sample playback speed; 2 is an octave up, negative plays backwards.

```js
s("bd*4").speed("1 2 -1 0.5")
```

### `.splice(count, indices)`

Like slice, with each slice sped up or slowed down to fill its event.

```js
s("bd").splice(4, "0 2 1 3")
```

### `.spread(amount?)`

Stereo spread of the synth voices, 0 (mono) .. 1 (wide).

```js
note("d f a").s("supersaw").spread("<0 0.3 1>")
```

### `.squiz(factor?)`

Squeezes each wave cycle: 2 is an octave up, 4 two (Shifter). Not played by strudel.cc.

```js
note("c3 e3 g3").s("sawtooth").squiz("<1 2 4>")
```

### `.striate(parts)`

Plays the pattern parts times per cycle, a further part of each sample each time.

```js
s("bd sd").striate(4)
```

### `.struct(pattern)`

Plays the values on the rhythm of a pattern of x / ~.

```js
note("c,e,g").struct("x ~ x x")
```

### `.stut(times, feedback, time)`

Like .echo() with the last two arguments swapped.

```js
s("bd sd").stut(3, 0.7, 1/8)
```

### `.sub(x)`

Subtracts from every value.

```js
n("7 5 3".sub(1)).scale("C:minor")
```

### `.superimpose(...f)`

Adds f of the pattern on top of the original.

```js
note("c e g").superimpose(x => x.add(12))
```

### `.sustain(level?)`

Envelope sustain level, 0..1.

```js
note("c e").s("square").sustain(0.3)
```

### `.swingBy(amount, slices)`

Splits each cycle into slices and delays events in the second half of each slice (0 = straight, 1/3 = triplet swing).

```js
s("hh*8").swingBy(1/3, 4)
```

### `.transpose(semitones)`

Moves notes up or down by semitones.

```js
note("c e g").transpose("<0 5>")
```

### `.tremolo(rate?)`

Tremolo speed in Hz: the level rises and falls (Auto Pan in Tremolo mode).

```js
note("d d d# d").fast(4).s("supersaw").tremolo("<3 2 8>")
```

### `.tremolodepth(depth = 1)`

Tremolo depth, 0..1 (default 1: down to silence).

```js
note("a1*8").s("square").tremolo(4).tremolodepth("<1 .5>")
```

### `.undegrade()`

Keeps exactly the events .degrade() drops.

```js
s("hh*8").undegrade()
```

### `.undegradeBy(amount)`

Keeps exactly the events .degradeBy(amount) drops.

```js
s("hh*8").undegradeBy(0.3)
```

### `.unison(voices?)`

Number of unison voices (supersaw).

```js
note("c3 e3").s("supersaw").unison(5)
```

### `.unit(unit?)`

With "c", speed counts whole samples per cycle (as loopAt and fit set it).

```js
s("bd").speed(0.5).unit("c")
```

### `.velocity(velocity?)`

Note velocity, 0..1.

```js
note("c e g").velocity("<1 0.5>")
```

### `.vib(rate?)`

Vibrato rate in Hz ("5:0.5" also sets its depth).

```js
note("a e").vib(5)
```

### `.vibmod(depth?)`

Vibrato depth in semitones.

```js
note("a e").vib(5).vibmod(0.3)
```

### `.voicing()`

Turns chord symbols into pitched voicings, or indexes them with n.

```js
n("0 1 2 3").chord("<C Am F G>").voicing()
```

### `.voicings(dictionary = "ireal")`

Voicing with an optional dictionary (legacy spelling).

```js
"C7 G7".voicings("lefthand").note()
```

### `.vowel(vowel?)`

Formant filter: a, e, i, o or u.

```js
note("c2*4").s("sawtooth").vowel("<a e i o>")
```

## Signals

### `cosine`

Sine shifted a quarter cycle: starts at 1.

```js
note("c*8").pan(cosine)
```

### `cosine2`

Cosine from -1 to 1.

```js
note("c*4").pan(cosine2.range2(0, 1))
```

### `isaw`

Ramp from 1 down to 0 every cycle.

```js
s("hh*8").gain(isaw)
```

### `isaw2`

Falling saw from -1 to 1.

```js
note("c*4").pan(isaw2.range2(0, 1))
```

### `perlin`

Smooth random values from 0 to 1.

```js
s("hh*8").lpf(perlin.range(500, 4000))
```

### `rand`

Random values from 0 to 1 (seeded, repeatable).

```js
s("hh*8").gain(rand.range(0.4, 1))
```

### `rand2`

Random values from -1 to 1.

```js
note("c*4").pan(rand2.range2(0, 1))
```

### `saw`

Ramp from 0 up to 1 every cycle.

```js
n(saw.range(0, 7).segment(8)).scale("C:major")
```

### `saw2`

Saw from -1 to 1.

```js
note("c*4").pan(saw2.range2(0, 1))
```

### `sine`

Smooth wave from 0 to 1, starting at 0.5.

```js
note("c*8").lpf(sine.range(300, 2000))
```

### `sine2`

Sine from -1 to 1.

```js
note("c*4").add(sine2.range2(0, 12).segment(4))
```

### `square`

0 for the first half of the cycle, 1 for the second.

```js
s("hh*8").gain(square.range(0.3, 1))
```

### `square2`

Square from -1 to 1.

```js
note("c*4").pan(square2.range2(0, 1))
```

### `tri`

Up from 0 to 1 and back in each cycle.

```js
note("c*8").pan(tri)
```

### `tri2`

Triangle from -1 to 1.

```js
note("c*4").pan(tri2.range2(0, 1))
```

## Other names for the same thing

- `att`: Same as .attack().
- `bandf`: Same as .bpf().
- `bandq`: Same as .bpq().
- `bp`: Same as .bpf().
- `bpa`: Same as .bpattack().
- `bpd`: Same as .bpdecay().
- `bpe`: Same as .bpenv().
- `bpr`: Same as .bprelease().
- `bps`: Same as .bpsustain().
- `colour`: Same as .color().
- `ctf`: Same as .lpf().
- `cutoff`: Same as .lpf().
- `dec`: Same as .decay().
- `delayfb`: Same as .delayfeedback().
- `delays`: Same as .delaysync().
- `delayt`: Same as .delaytime().
- `density`: Same as .fast().
- `dfb`: Same as .delayfeedback().
- `dist`: Same as .distort().
- `distortion`: Same as .distortvol().
- `distvol`: Same as .distortvol().
- `ds`: Same as .delaysync().
- `dt`: Same as .delaytime().
- `echowith`: Same as .echoWith().
- `fastcat`: Same as seq().
- `firstof`: Same as .firstOf().
- `fmatt`: Same as .fmattack().
- `fmdec`: Same as .fmdecay().
- `fme`: Same as .fmenv().
- `fmi`: Same as .fm().
- `fmsus`: Same as .fmsustain().
- `hcutoff`: Same as .hpf().
- `hp`: Same as .hpf().
- `hpa`: Same as .hpattack().
- `hpd`: Same as .hpdecay().
- `hpe`: Same as .hpenv().
- `hpr`: Same as .hprelease().
- `hps`: Same as .hpsustain().
- `hresonance`: Same as .hpq().
- `ir`: Same as .iresponse().
- `iterback`: Same as .iterBack().
- `lastof`: Same as .lastOf().
- `legato`: Same as .clip().
- `lp`: Same as .lpf().
- `lpa`: Same as .lpattack().
- `lpd`: Same as .lpdecay().
- `lpe`: Same as .lpenv().
- `lpr`: Same as .lprelease().
- `lps`: Same as .lpsustain().
- `o`: Same as .orbit().
- `patt`: Same as .pattack().
- `pdec`: Same as .pdecay().
- `ph`: Same as .phaser().
- `phasdp`: Same as .phaserdepth().
- `phc`: Same as .phasercenter().
- `phd`: Same as .phaserdepth().
- `phs`: Same as .phasersweep().
- `pickSqueeze`: Same as inhabit.
- `prel`: Same as .prelease().
- `randcat`: Same as chooseCycles().
- `rel`: Same as .release().
- `resonance`: Same as .lpq().
- `rib`: Same as .ribbon().
- `roomsize`: Same as .size().
- `seg`: Same as .segment().
- `sequence`: Same as seq().
- `slowcat`: Same as cat().
- `sound`: Same as s().
- `sparsity`: Same as .slow().
- `stepcat`: Same as timeCat().
- `stutwith`: Same as .echoWith().
- `stutWith`: Same as .echoWith().
- `sus`: Same as .sustain().
- `swing`: Same as .swingBy(1/3, slices).
- `sz`: Same as .size().
- `timecat`: Same as timeCat().
- `trans`: Same as .transpose().
- `trem`: Same as .tremolo().
- `tremdepth`: Same as .tremolodepth().
- `v`: Same as .vib().
- `vel`: Same as .velocity().
- `vibrato`: Same as .vib().
- `vmod`: Same as .vibmod().
- `withValue`: Same as fmap: maps raw values, not the pattern itself.

## Accepted for Strudel compatibility

These names are accepted so that Strudel code runs, but they do not change
what TuttiDAW plays yet (the diagnostics say so):
`_spiral`, `analyze`, `channel`, `id`, `log`, `markcss`, `pw`, `pwr`, `pwrate`, `pws`, `pwsweep`, `spiral`, `tag`, `warp`, `warpmode`, `warpsync`, `wavetablePosition`, `wavetableWarp`, `wavetableWarpMode`, `wt`.

## Not needed in TuttiDAW

Strudel setup calls that are accepted and have nothing to do here:

- `loadSamples`: Not needed in TuttiDAW: samples(...) declares sample packs and the studio loads them when they play.
- `initAudio`: Not needed in TuttiDAW: audio starts when you press Play.
