# Getting started

What TuttiCode is, how a program loops, and how to play your first line.

TuttiCode is a small language for writing music as text. You describe a
**pattern** (which notes or drum hits happen, and when), and TuttiDAW plays it
with its own instruments and effects. The pattern repeats, so a single line is
already a loop you can listen to while you change it.

The language is a superset of [Strudel](https://strudel.cc): most Strudel code
plays here as written, and TuttiDAW adds a few methods of its own for real
instruments and effects (see [TuttiDAW extensions](tuttidaw-extensions.md)).

## Your first line

Every example in this guide plays: press **Play** under it on the web page,
or paste it into TuttiCode at tuttidaw.com/code. Change a letter while it
plays and evaluate again (Ctrl/Cmd+Enter): the change starts on the next bar.

```js
note("c3 e3 g3 c4")
```

`note(...)` turns the text between the quotes into notes. Four names share
one bar equally, so you hear four quarter notes.

## Cycles

The unit of time is the **cycle**. In TuttiDAW one cycle is one bar. Every
pattern is squeezed into its cycle: more steps means shorter steps.

```js
note("c3 e3 g3 c4 e4 g4 c5 g4")
```

Eight names in one cycle play as eighth notes; the bar stays the same length.

## Tempo

`setcpm(n)` asks for `n` cycles per minute. Because a cycle is a 4/4 bar,
`setcpm(30)` is 120 BPM and `setcpm(25)` is 100 BPM.

```js
setcpm(25)
note("c3 e3 g3 c4")
```

## Several voices

A program can play several **voices** at once. Give each one a label followed
by a colon. A label that starts with `_` is muted, which is handy while you
work on another part.

```js
setcpm(30)
drums: s("bd sd bd sd")
bass: note("c2 c2 g1 bb1")
_lead: note("c4 e4 g4 e4")
```

`$:` also starts a voice without naming it. Named voices are better when you
take a program into the studio, because each label becomes a track name.

## Where code runs

- **TuttiCode** plays a whole program in your browser, without an
  account. Its **Open in TuttiDAW** button saves it as a studio project.
- **Pattern Clips** in the studio hold code in a MIDI clip; the notes are
  rendered from the code.
- **Muse**, TuttiDAW's AI assistant, can write, explain and fix code for you
  (see [Muse on /TuttiCode](muse.md)).

## Same code, same notes

Randomness in a program is seeded: the same code always gives the same notes,
on every computer and every time you open it. That is what lets a project
with code be shared and played back exactly.

Source: https://tuttidaw.com/code/learn/getting-started
