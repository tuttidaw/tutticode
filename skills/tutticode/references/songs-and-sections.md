# Songs and sections

Write a whole song as sections - intro, verse, chorus - played in a form, with each track's sound written once.

A loop repeats one idea. A song moves through **sections**: an intro, a
verse, a chorus, the verse again, an outro. Each section has its own parts,
and the song is the order they play in, its **form**. TuttiCode writes a song
that way: what each section plays in one block, the form on one line, and
each track's sound once.

| Code | What it is |
|---|---|
| `track(name)` | a track of the song and its sound: `.inst`, `.fx`, `.mix`, `.send` |
| `section(name, bars, {track: pattern})` | everything one section plays |
| `form("...")` | the order the sections play in |

These are TuttiDAW-only, like `bus` and `group`. For a loop that changes
over a few cycles, `arrange` in [Time and structure](time-and-structure.md#sections-arrange)
is enough; for a whole song, use sections.

## A first song

Two sections, each listing what its tracks play. Without a `form`, the
sections play in the order they are written, and then the song starts again.

```js
section("verse", 4, {
  drums: s("bd ~ sd ~, hh*8"),
  bass: note("<c2 eb2 g1 bb1>*4").s("sawtooth").lpf(600),
})
section("chorus", 4, {
  drums: s("bd sd bd sd, hh*16"),
  bass: note("<ab1 bb1 c2 c2>*8").s("sawtooth").lpf(900),
})
```

The keys of the block (`drums`, `bass`) are the song's tracks. A track the
section does not list is silent there. Each pattern starts at the section's
first bar and loops inside it, so a 4-bar pattern always begins with the
section, wherever the section falls in the song.

## Tracks: the sound, written once

`track("bass")` gives a track its instrument, effects and mix, on one line.
The sections then hold only the notes, so changing the bass sound edits one
line, not every section.

```js
track("bass").inst("Drift").mix({vol: -3})
track("keys").inst("Electric").fx("Reverb", {dryWetBalance: 0.3})

section("verse", 4, {
  bass: note("<c2 eb2 g1 bb1>*4"),
})
section("chorus", 4, {
  bass: note("<ab1 bb1 c2 c2>*8"),
  keys: note("<[c3,eb3,g3] [bb2,d3,f3]>"),
})
```

A track no `track(...)` line declares still plays: its patterns use their
own sounds (`.s(...)`), as in the first song.

## The form: order and repeats

`form("...")` says the order, in [mini-notation](mini-notation.md): names in a
row play one after another, `[...]` groups them, `!n` repeats, and `name@n`
gives that one occurrence its own number of bars. There is one `form` per
program.

```js
section("intro", 2, {
  drums: s("hh*8"),
})
section("verse", 4, {
  drums: s("bd ~ sd ~, hh*8"),
  bass: note("<c2 eb2 g1 bb1>*4").s("sawtooth").lpf(600),
})
section("chorus", 4, {
  drums: s("bd sd bd sd, hh*16"),
  bass: note("<ab1 bb1 c2 c2>*8").s("sawtooth").lpf(900),
})
section("outro", 4, {
  drums: s("bd ~ ~ ~"),
})
form("intro [verse chorus]!2 outro@2")
```

This plays intro, verse, chorus, verse, chorus, outro: 22 bars, the last
section cut to 2 bars. The whole form is the program's loop. Other
mini-notation (`*`, `< >`, `,`) has no meaning in a form and is reported.

## A part through the whole song

A labelled voice is not in any section, so it plays through the whole form -
a pad, a click, a drone under everything.

```js
section("verse", 4, {
  drums: s("bd ~ sd ~, hh*8"),
})
section("chorus", 4, {
  drums: s("bd sd bd sd, hh*16"),
})
form("verse chorus")

pad: note("<[c3,eb3,g3] [ab2,c3,eb3]>").s("sawtooth").lpf(800).slow(2)
```

## Sharing parts and changing one occurrence

A `const` holds a part several sections play, so it is written once.
`section("verse#2", {...})` changes only the second verse: the tracks it lists
play its patterns there, the others keep the verse's. It may leave out the
bars, since it keeps the verse's length.

```js
const groove = s("bd ~ sd ~, hh*8")

section("verse", 4, {
  drums: groove,
  bass: note("<c2 eb2 g1 bb1>*4").s("sawtooth").lpf(600),
})
section("chorus", 4, {
  drums: groove.fast(2),
  bass: note("<ab1 bb1 c2 c2>*8").s("sawtooth").lpf(900),
})
section("verse#2", {
  bass: note("<c2 c3 eb2 eb3>*8").s("sawtooth").lpf(600),
})
form("[verse chorus]!2")
```

## Limits

- A song on TuttiCode plays up to 128 bars; a longer form plays its first
  128 and says so.
- Every section needs its bars, `section("verse", 8, {...})`; only a
  `name#k` override may leave them out.
- "Open in TuttiDAW" opens the song in the studio: one clip per track each
  time a section plays, a locator at each section, and the project loop
  over the whole form. A clip you edit by hand there becomes yours, and the
  code stops changing it; Re-attach gives it back to the code.

Source: https://tuttidaw.com/code/learn/songs-and-sections
