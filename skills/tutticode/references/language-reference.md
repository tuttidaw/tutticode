# TuttiCode language reference

The language spec in full detail, generated from the engine. Each section is
one reference id (spec-<id>).

## spec-grammar: Full EBNF grammar

The normative grammar with its lexical rules (tokens, strings and escapes, comments, mini tokenization), resource limits and syntax examples.

```text
(* PATTERN LANGUAGE 1.10.0
   Normative syntax; recursive-descent parsers remain the implementation.
   EBNF: , concatenation; | choice; [] optional; {} repetition; ? lexical ?.
   Whitespace/comments are skipped between JS tokens, except call "(" must
   not have a newline before it. Statements end with ";" or a newline/EOF.
   Newlines inside block comments do not end statements or prevent calls.
   Identifiers exclude the unsupported keywords listed below in expressions
   and labels (bindings and arrow parameters accept any identifier token).
   At statement start, let/const/var always begin a binding, not an expression.
   Lexical maximal munch applies. Resource limits and numeric constraints
   below are part of validity, not permission to expand without a budget.
   @example lang: const groove = s("bd sd"); $: groove.fast(2);
   @example lang: var a = [1, 2,]; let f = (x, i,) => { return x.transpose(i); }; note("c4").echoWith(2, 1/8, f)
   @example lang: ; note(0x3c + .5 * 2 % 2).velocity(1e-1)
   @example lang: note(`c4 e4`).every(4, x => x.rev())
   @example lang: note('c4').off(1/8, () => note("g4"))
   @example lang: setDefaultVoicings('ireal'); chord("C").anchor("D5").mode("below").offset(1).voicing().arp("0 1 2")
   @example lang: bass: note("c2").inst("Drift:Deep Bass", {cutoff: 600}).fx("Reverb", {decayTime: "4s", "dryWetBalance": 0.3,})
   @example lang: bus("verb").fx("Reverb"); master.fx("Limiter").mix({vol: -1}); keys: note("c3 e3").send("verb", -12).mix({pan: -0.3})
   @example lang: bus("verb"); group("drums").fx("Drum Buss").mix({vol: -3}).send("verb", -12); kick: s("bd*4").group("drums")
*)
program = { statement };
statement = ";" | binding, end | label, ":", expression, end | expression, end;
binding = ("let" | "const" | "var"), identifier, "=", expression;
label = ? label-identifier ?;
end = ";" | ? newline-or-eof ?;
expression = arrow | additive;
arrow = (identifier | "(", [parameters], ")"), "=>", (expression | "{", "return", expression, [";"], "}");
parameters = identifier, {",", identifier}, [","];
additive = multiplicative, {("+" | "-"), multiplicative};
multiplicative = unary, {("*" | "/" | "%"), unary};
unary = ("+" | "-"), unary | postfix;
postfix = primary, {".", identifier | ? same-line ? , "(", [arguments], ")"};
arguments = argument, {",", argument}, [","];
argument = expression | object;
primary = number | string | ? expression-identifier ? | "[", [arguments], "]" | "(", expression, ")";
object = "{", [property, {",", property}, [","]], "}";
property = (identifier | string), ":", argument;
identifier = ? identifier-token ?;
number = ? js-number-token ?;
string = ? js-string-token ?;
(* identifier-token: [A-Za-z_$][A-Za-z0-9_$]*; e.g. bass_2, $.
   expression-identifier excludes function class new for while do if import
   export await async this eval with delete yield try throw switch.
   label-identifier also excludes let const var (binding keywords).
   js-number-token: hexadecimal 0[xX][0-9a-fA-F]+, or
   (digits [ "." [digits] ] | "." digits) [ [eE] ["+"|"-"] digits ].
   Numeric literals must evaluate to finite numbers; full tokens are consumed
   regardless of length (subject to the compiler's source-length budget).
   js-string-token: matching single/double/backtick quotes. Single/double
   strings cannot contain an unescaped LF; backticks can. Backticks cannot
   contain unescaped ${. Backslash escapes n t r 0 b f v decode; other
   escapes decode to their following character (no JS unicode/hex decoding).
   Comments: // to LF, or closed slash-star ... star-slash.
   Strings in single quotes stay literal names; double/backtick strings
   become mini patterns when consumed as patterns.
   Object keys __proto__, prototype and constructor are refused.
*)

(* TuttiDAW device calls (1.1.0) are ordinary postfix method calls whose
   names and arguments the device catalogue checks, not new syntax:
     device-method = "." ("inst" | "fx" | "midifx"), "(", device-name, [",", param-object], ")";
     device-name   = string;   constant: "Device" | "Device:Preset" | unique preset
     param-object  = object;   keys: param keys, unique labels, on, id, sidechain
     value         = number | unit-string | boolean | pattern;
     unit-string   = '"' number unit '"';   "250ms" "2s" "-6dB" "1.2kHz" "30%"
   Enum values are their label strings or a 0-based index. Device methods
   are methods only: fx(...) is not a function.
*)

(* TuttiDAW mixing (1.2.0) is ordinary calls too: a bus statement and the
   name master are expressions whose value is no voice.
     mix-method    = "." "mix", "(", mix-object, ")" | "." "send", "(", string, ",", level, ")";
     mix-object    = object;   keys: vol (dB, -70..6), pan (-1..1), mute (boolean)
     bus-statement = "bus", "(", string, ")", { "." "fx" "(" ... ")" | mix-method };
     master-statement = "master", { "." "fx" "(" ... ")" | "." "mix", "(", mix-object, ")" };
     level         = number | pattern;   dB, -70..0 for a send
   Levels may be patterns or envelopes. A bus name: 1..64 characters, no
   mini-notation punctuation.
*)

(* Groups (1.3.0): group-statement = "group", "(", string, ")", { "." "fx" "(" ... ")" | mix-method };
   a voice joins with "." "group", "(", string, ")". No group in a
   group. *)

(* Device params may be patterns (1.4.0; buses/groups/master 1.6.0) and
   envelopes (1.7.0): ramp(from, to, bars); env("0:-60 3/4:0~.5 _2:-6",
   bars?) pos:value in bars, ~k curve -1..1, _ step, same pos jumps;
   env([[pos, value, {curve: k|[x1,y1,x2,y2]}|"hold"]]); .once() no loop. *)

(* 1.8.0: ensembleSet({...}) statement, constants. *)

(* Songs with sections (1.9.0), statements of ordinary calls:
     track-statement   = "track", "(", string, ")", { "." ("inst" | "fx" | "midifx") "(" ... ")" | mix-method };
     section-statement = "section", "(", string, ",", bars, ",", object, ")";   keys: track names, values: patterns
     form-statement    = "form", "(", string, ")";   section names in order; [..] group, !n repeat, @n bars
   A section name: letters, digits, _ (name#k overrides the k-th
   occurrence, which may leave out bars: it keeps the section's); bars
   1..256. Without form, sections play in order. *)

(* 1.10.0: no new syntax. A song (1.9.0 statements) opens in the studio
   as a program group: one clip per form occurrence, each owned by the
   program; a client of 1.9.0 must not evaluate or heal such a group. *)

(* Mini whitespace is skipped between tokens except where adjacency is
   specified for suffixes. Spaces distinguish standalone bang from replication.
   Layers may be empty; comma and pipe must not mix in one group.
   @example mini: bd sd [~ bd] sd, hh*8
   @example mini: <c4 e4 g4> [c4,e4,g4] [bd|sd]
   @example mini: {bd sd, hh hh hh}%4
   @example mini: 0 .. 3 . 3 .. 0
   @example mini: c4!2 _ c4 ! c4@2 c4?0.3
   @example mini: bd(3,8,1) hh*<2 3> sd/2 bd:1
   @example mini: . - ~ . [ ] < > { }
   @example mini: -2 .5 eb3 f#2 C^minor c'4
   @example mini: C-7b5 C-^7 C-6
*)
mini = layers;
layers = sequence, ( {",", sequence} | {"|", sequence} );
sequence = {dot}, [group], {dot, [group]};
group = step, {gap, step | hold | ? spaced-bang ? | numeric-range};
dot = ? mini-dot ?;
gap = ? optional-mini-space ?;
hold = ? mini-hold ?;
numeric-range = ? numeric-range-tail ?;
step = term, {modifier};
modifier = ("*" | "/"), gap, term
         | "!", [? adjacent-count ?]
         | "@", gap, ? positive-weight ?
         | "?", [? adjacent-probability ?]
         | "(", nonempty-sequence, ",", nonempty-sequence, [",", nonempty-sequence], ")"
         | ":", gap, term;
term = ? mini-number-or-word ? | "~" | "-"
     | "[", layers, "]" | "<", layers, ">"
     | "{", sequence, {",", sequence}, "}", ["%", gap, term];
nonempty-sequence = {dot}, group, {dot, [group]};
(* mini-number-or-word: maximal token from [A-Za-z0-9_#^'] plus internal
   "-" when the token begins with a letter (chord qualities like C-7b5), or a leading
   "-" or "." when starting a number and a decimal "." followed by digits.
   All-underscore words tokenize as separate holds, never as terms.
   Number classification: -?(digits["."digits] | "."digits); other tokens
   are words. Finite only. A trailing decimal dot is a group separator.
   mini-dot: "." with optional surrounding whitespace.
   mini-hold: "_" (including runs "__") with optional whitespace.
   spaced-bang: whitespace followed by "!" copies the previous event once;
   "!n" replication instead requires adjacency. No leading hold or bang:
   both need a previous event in the current dot-separated group.
   numeric-range-tail: ".." and a number; previous node must be a numeric
   atom; endpoints safe integers at most 1024 apart. E.g. "0 .. 3".
   adjacent-count: adjacent number, floor >= 1; copies charged before allocation.
   positive-weight: number > 0 and <= 1048576.
   adjacent-probability: adjacent number in [0,1]; default "?" is 0.5.
   "?", "(", ":" suffixes must be adjacent to the previous token.
   Euclid arguments are nonempty sequences, two or three total.
   "|" is forbidden directly inside braces; nested []/<> can use it.
   Depth: mini 48, JS 120; JS chains 400; compiler budgets additionally apply.
*)

```

## spec-signatures: Typed signatures

Every function, method and signal with argument kinds and arity.

```text
Argument kinds: number | pattern string | literal string | signal | function | pattern | pair | lookup | device name | params object.
Pattern means a previously built pattern. Pair means [number, pattern]. Lookup means a list of values/patterns or an object keyed by selector names.
Literal string means a single-quoted name, not a double-quoted mini pattern. setDefaultVoicings('ireal') is a statement, not a pattern source.
Optional args are marked ?. Variadic tails repeat. Zero-argument control methods name the receiver's values. Transform functions can be arrows or supported curried methods (e.g. rev).
aliasBank(bank: literal string | lookup, alias?: literal string) -> pattern; arity 1..2
all(fn: function) -> void; arity 1..1
arrange(...sections: pair) -> pattern; arity 1..*
bus(name: literal string) -> pattern; arity 1..1
cat(...patterns?: number | pattern string | signal | pattern) -> pattern; arity 0..*
chooseCycles(...patterns: number | pattern string | signal | pattern) -> pattern; arity 1..*
chord(symbols: number | pattern string | signal | pattern) -> pattern; arity 1..1
ensembleSet(sections: params object) -> pattern; arity 1..1
env(points: literal string | lookup, bars?: number) -> pattern; arity 1..2
fastcat(...patterns?: number | pattern string | signal | pattern) -> pattern; arity 0..*
form(order: literal string) -> pattern; arity 1..1
group(name: literal string) -> pattern; arity 1..1
hush() -> pattern; arity 0..0
irand(n: number) -> pattern; arity 1..1
pick(indices: number | pattern string | signal | pattern, listOrObject: lookup) -> pattern; arity 2..2
pure(value: number | pattern string | signal | pattern) -> pattern; arity 1..1
ramp(from: number | literal string, to: number | literal string, bars: number) -> pattern; arity 3..3
randcat(...patterns: number | pattern string | signal | pattern) -> pattern; arity 1..*
run(n: number | pattern string | signal) -> pattern; arity 1..1
section(name: literal string, bars: number | params object, tracks?: params object) -> pattern; arity 2..3
seq(...patterns?: number | pattern string | signal | pattern) -> pattern; arity 0..*
sequence(...patterns?: number | pattern string | signal | pattern) -> pattern; arity 0..*
setcpm(cpm: number) -> void; arity 1..1
setCpm(arg1: number) -> void; arity 1..1
setcps(cps: number) -> void; arity 1..1
setCps(arg1: number) -> void; arity 1..1
setDefault(control: literal string | lookup, value?: number | literal string) -> pattern; arity 1..2
setDefaultVoicings(name: literal string) -> void; arity 1..1
setGainCurve(fn: function) -> pattern; arity 1..1
slider(value: number, min?: number, max?: number, step?: number) -> pattern; arity 1..4
slowcat(...patterns?: number | pattern string | signal | pattern) -> pattern; arity 0..*
soundAlias(sound: literal string, alias: literal string) -> pattern; arity 2..2
squeeze(indices: number | pattern string | signal | pattern, listOrObject: lookup) -> pattern; arity 2..2
stack(...patterns?: number | pattern string | signal | pattern) -> pattern; arity 0..*
stepcat(...steps?: number | pattern string | signal | pattern | pair) -> pattern; arity 0..*
timecat(...steps?: number | pattern string | signal | pattern | pair) -> pattern; arity 0..*
timeCat(...steps?: number | pattern string | signal | pattern | pair) -> pattern; arity 0..*
toggle(value: number | pattern string | signal | pattern) -> pattern; arity 1..1 (Tutti extension, not in Strudel)
track(name: literal string) -> pattern; arity 1..1
._pianoroll() -> pattern; arity 0..*
._punchcard() -> pattern; arity 0..*
._scope() -> pattern; arity 0..*
._spectrum() -> pattern; arity 0..*
.add(x: number | pattern string | signal | pattern) -> pattern; arity 1..1
.almostAlways(f: function) -> pattern; arity 1..1
.almostNever(f: function) -> pattern; arity 1..1
.always(f: function) -> pattern; arity 1..1
.anchor(note: number | pattern string | signal | pattern) -> pattern; arity 1..1
.arp(indices: number | pattern string | signal | pattern) -> pattern; arity 1..1
.cat(...patterns: number | pattern string | signal | pattern) -> pattern; arity 1..*
.chop(parts: number | pattern string | signal) -> pattern; arity 1..1
.chord(symbols?: number | pattern string | signal | pattern) -> pattern; arity 0..1
.chunk(n: number | pattern string | signal, f: function) -> pattern; arity 2..2
.cpm(cyclesPerMinute: number | pattern string | signal) -> pattern; arity 1..1
.degrade() -> pattern; arity 0..0
.degradeBy(amount: number | pattern string | signal) -> pattern; arity 1..1
.density(factor: number | pattern string | signal) -> pattern; arity 1..1
.dict(name: literal string | pattern string | pattern) -> pattern; arity 1..1
.div(x: number | pattern string | signal | pattern) -> pattern; arity 1..1
.early(cycles: number | pattern string | signal) -> pattern; arity 1..1
.echo(times: number, time: number, feedback: number) -> pattern; arity 3..3
.echowith(times: number, time: number, f: function) -> pattern; arity 3..3
.echoWith(times: number, time: number, f: function) -> pattern; arity 3..3
.euclid(pulses: number | pattern string | signal, steps: number | pattern string | signal) -> pattern; arity 2..2
.euclidLegato(pulses: number | pattern string | signal, steps: number | pattern string | signal, rotation?: number | pattern string | signal) -> pattern; arity 2..3
.euclidLegatoRot(pulses: number | pattern string | signal, steps: number | pattern string | signal, rotation: number | pattern string | signal) -> pattern; arity 3..3
.euclidRot(pulses: number | pattern string | signal, steps: number | pattern string | signal, rotation: number | pattern string | signal) -> pattern; arity 3..3
.every(n: number | pattern string | signal, f: function) -> pattern; arity 2..2
.fast(factor: number | pattern string | signal) -> pattern; arity 1..1
.fastcat(...patterns: number | pattern string | signal | pattern) -> pattern; arity 1..*
.firstof(n: number | pattern string | signal, f: function) -> pattern; arity 2..2
.firstOf(n: number | pattern string | signal, f: function) -> pattern; arity 2..2
.fit() -> pattern; arity 0..0
.fmap(fn: function) -> pattern; arity 1..1
.fx(name: device name, params?: params object) -> pattern; arity 1..2 (Tutti extension, not in Strudel)
.group(name: literal string) -> pattern; arity 1..1
.hush() -> pattern; arity 0..0
.inhabit(listOrObject: lookup) -> pattern; arity 1..1
.inside(n: number, f: function) -> pattern; arity 2..2
.inst(name: device name, params?: params object) -> pattern; arity 1..2 (Tutti extension, not in Strudel)
.iter(n: number | pattern string | signal) -> pattern; arity 1..1
.iterback(n: number | pattern string | signal) -> pattern; arity 1..1
.iterBack(n: number | pattern string | signal) -> pattern; arity 1..1
.jux(f: function) -> pattern; arity 1..1
.lastof(n: number | pattern string | signal, f: function) -> pattern; arity 2..2
.lastOf(n: number | pattern string | signal, f: function) -> pattern; arity 2..2
.late(cycles: number | pattern string | signal) -> pattern; arity 1..1
.layer(...f: function) -> pattern; arity 1..*
.loopAt(cycles: number | pattern string | signal) -> pattern; arity 1..1
.mask(pattern: number | pattern string | signal | pattern) -> pattern; arity 1..1
.midifx(name: device name, params?: params object) -> pattern; arity 1..2 (Tutti extension, not in Strudel)
.mix(mixer: params object) -> pattern; arity 1..1
.mode(alignment: literal string | pattern string | pattern) -> pattern; arity 1..1
.mul(x: number | pattern string | signal | pattern) -> pattern; arity 1..1
.never(f: function) -> pattern; arity 1..1
.off(time: number | pattern string | signal, f: function) -> pattern; arity 2..2
.offset(n: number | pattern string | signal) -> pattern; arity 1..1
.often(f: function) -> pattern; arity 1..1
.once() -> pattern; arity 0..0
.outside(n: number, f: function) -> pattern; arity 2..2
.palindrome() -> pattern; arity 0..0
.pianoroll() -> pattern; arity 0..*
.pick(listOrObject: lookup) -> pattern; arity 1..1
.pickOut(listOrObject: lookup) -> pattern; arity 1..1
.pickRestart(listOrObject: lookup) -> pattern; arity 1..1
.pickSqueeze(listOrObject: lookup) -> pattern; arity 1..1
.ply(n: number | pattern string | signal) -> pattern; arity 1..1
.punchcard() -> pattern; arity 0..*
.range(min: number | pattern string | signal, max: number | pattern string | signal) -> pattern; arity 2..2
.range2(min: number | pattern string | signal, max: number | pattern string | signal) -> pattern; arity 2..2
.rangex(min: number | pattern string | signal, max: number | pattern string | signal) -> pattern; arity 2..2
.rarely(f: function) -> pattern; arity 1..1
.rev() -> pattern; arity 0..0
.rib(offset: number | pattern string | signal, cycles: number | pattern string | signal) -> pattern; arity 2..2
.ribbon(offset: number | pattern string | signal, cycles: number | pattern string | signal) -> pattern; arity 2..2
.rootNotes(octave?: number) -> pattern; arity 0..1
.scale(name: pattern string | pattern) -> pattern; arity 1..1
.scope() -> pattern; arity 0..*
.scrub(positions: number | pattern string | signal | pattern) -> pattern; arity 1..1
.seg(n: number | pattern string | signal) -> pattern; arity 1..1
.segment(n: number | pattern string | signal) -> pattern; arity 1..1
.send(bus: literal string, dB: number | pattern string | signal) -> pattern; arity 2..2
.seq(...patterns: number | pattern string | signal | pattern) -> pattern; arity 1..*
.set(pattern: number | pattern string | signal | pattern) -> pattern; arity 1..1
.slice(count: number | pattern string | signal | pattern, indices: number | pattern string | signal | pattern) -> pattern; arity 2..2
.slow(factor: number | pattern string | signal) -> pattern; arity 1..1
.slowcat(...patterns: number | pattern string | signal | pattern) -> pattern; arity 1..*
.someCycles(f: function) -> pattern; arity 1..1
.someCyclesBy(p: number | pattern string | signal, f: function) -> pattern; arity 2..2
.sometimes(f: function) -> pattern; arity 1..1
.sometimesBy(p: number | pattern string | signal, f: function) -> pattern; arity 2..2
.sparsity(factor: number | pattern string | signal) -> pattern; arity 1..1
.spectrum() -> pattern; arity 0..*
.splice(count: number | pattern string | signal, indices: number | pattern string | signal | pattern) -> pattern; arity 2..2
.squeeze(listOrObject: lookup) -> pattern; arity 1..1
.stack(...patterns: number | pattern string | signal | pattern) -> pattern; arity 1..*
.striate(parts: number | pattern string | signal) -> pattern; arity 1..1
.struct(pattern: number | pattern string | signal | pattern) -> pattern; arity 1..1
.stut(times: number, feedback: number, time: number) -> pattern; arity 3..3
.stutwith(times: number, time: number, f: function) -> pattern; arity 3..3
.stutWith(times: number, time: number, f: function) -> pattern; arity 3..3
.sub(x: number | pattern string | signal | pattern) -> pattern; arity 1..1
.superimpose(...f: function) -> pattern; arity 1..*
.swing(slices: number | pattern string | signal) -> pattern; arity 1..1
.swingBy(amount: number | pattern string | signal, slices: number | pattern string | signal) -> pattern; arity 2..2
.trans(semitones: number | pattern string | signal | pattern) -> pattern; arity 1..1
.transpose(semitones: number | pattern string | signal | pattern) -> pattern; arity 1..1
.undegrade() -> pattern; arity 0..0
.undegradeBy(amount: number | pattern string | signal) -> pattern; arity 1..1
.voicing() -> pattern; arity 0..0
.voicings(dictionary?: literal string | pattern string | pattern) -> pattern; arity 0..1
.withValue(fn: function) -> pattern; arity 1..1
cosine: signal
cosine2: signal
isaw: signal
isaw2: signal
perlin: signal
rand: signal
rand2: signal
saw: signal
saw2: signal
sine: signal
sine2: signal
square: signal
square2: signal
tri: signal
tri2: signal
Controls, each .name(value) and name(value) with value: number | pattern string | signal | pattern -> pattern, or .name() naming the receiver's values.
```

## spec-controls: Controls and their aliases

Every control and every alias of one (cutoff=lpf...).

```text
Controls, each .name(value) and name(value) with value: number | pattern string | signal | pattern -> pattern, or .name() naming the receiver's values: accelerate amp attack bank begin bpattack bpdecay bpenv bpf bpq bprelease bpsustain chorus clip coarse color compressor compressorAttack compressorKnee compressorRatio compressorRelease crush cut decay delay delayfeedback delaysync delaytime detune diode distort distortvol djf dry end fanchor fm fmattack fmdecay fmenv fmh fmsustain fmwave freq ftype gain hpattack hpdecay hpenv hpf hpq hprelease hpsustain iresponse kcutoff krush leslie loop lpattack lpdecay lpenv lpf lpq lprelease lpsustain n noise note orbit pan panchor pattack pcurve pdecay penv phaser phasercenter phaserdepth phasersweep postgain prelease psustain release room s shape size speed spread squiz sustain tremolo tremolodepth unison unit velocity vib vibmod vowel.
Control aliases: att=attack bandf=bpf bandq=bpq bp=bpf bpa=bpattack bpd=bpdecay bpe=bpenv bpr=bprelease bps=bpsustain colour=color ctf=lpf cutoff=lpf dec=decay delayfb=delayfeedback delays=delaysync delayt=delaytime dfb=delayfeedback dist=distort distortion=distortvol distvol=distortvol ds=delaysync dt=delaytime fmatt=fmattack fmdec=fmdecay fme=fmenv fmi=fm fmsus=fmsustain hcutoff=hpf hp=hpf hpa=hpattack hpd=hpdecay hpe=hpenv hpr=hprelease hps=hpsustain hresonance=hpq ir=iresponse legato=clip lp=lpf lpa=lpattack lpd=lpdecay lpe=lpenv lpr=lprelease lps=lpsustain o=orbit patt=pattack pdec=pdecay ph=phaser phasdp=phaserdepth phc=phasercenter phd=phaserdepth phs=phasersweep prel=prelease rel=release resonance=lpq roomsize=size sound=s sus=sustain sz=size trem=tremolo tremdepth=tremolodepth v=vib vel=velocity vibrato=vib vmod=vibmod.
```

## spec-devices: Devices in full

Every instrument, MIDI effect and audio effect for .inst/.midifx/.fx (the core names the most-used).

```text
voice.inst(name, params?) chooses the voice's instrument (one per voice); .midifx(name, params?) adds MIDI effects before it and .fx(name, params?) audio effects after it, in call order. TuttiDAW extensions: a program using them does not play on strudel.cc.
name: a constant string "Device" or "Device:Preset" (factory presets only), e.g. "Reverb:Large Hall", "Drift:Deep Bass", "Drum Rack:808 Core Kit". Unique bare preset names work; case/punctuation ignored.
params: an object {key: value}. Write the device's param keys (dryWetBalance, not the label "Dry/Wet"). Numbers are in the param's own unit (Hz, ms, dB, st...); unit strings convert: "250ms" "2s" "-6dB" "1.2kHz" "30%". Enums take their label ("UpDown", "1/16", "Dorian") or a 0-based index; on/off params take true/false. Out-of-range values are clamped with a warning. Reserved keys: on (device switch), id (a stable name for a repeated device: letters, digits, _ or -, not "instrument").
Params may be patterns or env/ramp (automation; "<1/16 1/8>" are labels), on buses/groups/master too.
Strudel controls keep their meaning: lpf/room/delay/... still add their devices; room/delay fold into an explicit Reverb/Delay of the voice. .inst beats s() for the instrument; s() still picks drum pads.
Devices apply where the code owns tracks: group programs and /code.
Mixing: bus(name).fx(...) is a return; voice.send(bus,-18..-10 dB) feeds it; .mix({vol,pan}) is the fader; master.fx(...) ends songs (Glue Compressor, Limiter). Voices sharing a reverb/delay: one wet bus (dryWetBalance:1) + sends, no copy per voice.
Ensemble parts: .inst("Ensemble:<Engine> <SOUND>", {...}) e.g. "Ensemble:Sample FLUTE"; part keys level atk dec sus rel pan chor dly rev (0..127, pan -64..63), engine controls by its labels (Physical: strc brit damp pos acc bow exc); their Sets: ensembleSet({reverb:{revSize:100}}).
Main keys: Drift: cutoff Hz, attack ms, release ms; Wavetable: cutoff Hz, attack ms, release ms; Analog: f1Freq Hz, a1Attack ms; Operator: aAttack ms, bLevel %; Reverb: decayTime ms, dryWetBalance; Delay: timeL ms, feedback %; Auto Filter: frequency Hz, Q; Compressor: threshold dB, ratio; Saturator: drive dB.
Instruments (.inst): Analog, Drift, Drum Rack, Ensemble, Operator, Sampler, Simpler, Wavetable; also Chimera Voice, Collision, Drum Synth, DS Clang, DS Clap, DS Cymbal, DS FM, DS HH, DS Kick, DS Snare, DS Tom, Electric, Impulse, Meld, SixOp, Synth, Tension.
MIDI effects (.midifx): Arpeggiator, Chord, Note Length, Scale; also FM Arp, Note Echo, Pitch, Random, Velocity.
Audio effects (.fx): Auto Filter, Auto Pan-Tremolo, Chorus, Compressor, Delay, Echo, EQ Eight, Glue Compressor, Redux, Reverb, Saturator, Utility; also Align Delay, Amp, Auto Shift, Beat Repeat, Cabinet, Channel EQ, Clipper, Corpus, Denoise, Drum Buss, Dynamic Tube, EQ Three, Erosion, Filter Delay, Gate, Grain Delay, Hybrid Reverb, Limiter, Looplet, Multiband Dynamics, Overdrive, Pedal, Phaser-Flanger, Pitch Shifter, Resonators, Roar, Spectral Resonator, Spectral Time, Transient Shaper, Vinyl Distortion, Vocoder, Voice Leveler.
Any other device (LFO, Looper, Tuner, racks, plug-ins...) is not available in code.
```
