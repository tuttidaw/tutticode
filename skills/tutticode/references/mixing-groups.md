# Mixing: groups

Put voices in a group with its own effects, fader and sends - a drum bus inside the program, the same group track Open in TuttiDAW makes.

A **group** gathers voices so you can treat them as one: a compressor on all
the drums, one fader for the whole kit, one send to the reverb. "Open in
TuttiDAW" makes it a group track inside the program's group, with those
voices in it.

| Code | What it is | In the studio |
|---|---|---|
| `group(name)` | a group of voices | a group track inside the program's group |
| `.group(name)` | puts a voice in a group | the voice's track becomes a child of that group |

Like `bus` and `.send`, these are TuttiDAW-only. "Export to Strudel" (the
code page's Export & Share tab) opens the program on strudel.cc without them,
after listing what it leaves out: there every voice plays on its own, without
the group's effects and fader.

## A drum group

Declare the group on its own line, give it effects with `.fx` and a fader
with `.mix`, and put voices in it with `.group(name)`:

```js
group("drums").fx("Drum Buss").mix({vol: -3})

kick: s("bd*4").bank("tr909").group("drums")
snare: s("~ sd").bank("tr909").group("drums")
hats: s("hh*8").bank("tr909").group("drums").mix({vol: -8})
bass: note("<c2 g1 a1 f1>").ply(4).s("sawtooth").lpf(600)
```

The kick, snare and hats play through the Drum Buss, then through the
group's fader: `-3` lowers all three by 3 dB. Each voice keeps its own
`.mix` too - the hats are 8 dB down inside the group.

## Sends from a group

A group sends to a bus like a voice does, with a level in dB. The whole
group goes to the bus at that level - here the drums share one room while
the bass stays dry:

```js
bus("room").fx("Reverb", {dryWetBalance: 1, decayTime: "1.5s"})
group("drums").send("room", -14)

kick: s("bd*4").group("drums")
snare: s("~ sd").group("drums")
bass: note("c2 ~ c2 g1").s("sawtooth").lpf(500)
```

Buses belong to the program: a group can send to any bus the program
declares, and its voices can still send on their own too.

A group's fader, pan, send levels and device params can be patterns, like
a voice's: they become the group track's automation (see Automation). A
group cannot be put inside another group.

## A voice without a group

`.group("drums")` with no `group("drums")` in the program is a warning: the
editor offers to add the declaration, and until then the voice plays in the
program's group like any other.

## In the studio

The group track sits inside the program's group, with its voices as its
children. Its effects, fader and sends belong to the code, like a bus's:
change one by hand and the group is detached from the code (Re-attach
brings it back). Move a voice out of its group by hand and that voice is
detached. Remove `.group("drums")` from a voice and its track moves back
to the program's group; remove `group("drums")` itself and the group track
stays, marked "not in code", while its voices move back.

Source: https://tuttidaw.com/code/learn/mixing-groups
