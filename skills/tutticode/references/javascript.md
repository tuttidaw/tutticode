# JavaScript in code

Variables, functions, loops and register - and the sandbox, determinism and limits that keep shared code safe.

A program is JavaScript. Most programs only chain pattern methods, but you
can use variables, functions, arrays, loops and conditions to build them.

## Variables and functions

`const` names a pattern so you can reuse it. A function can build a pattern
from arguments.

```js
const groove = s("bd [~ bd] sd ~, hh*8")
const riff = (root) => n("0 2 4 2").scale(`${root}:minor`)
drums: groove.bank("tr909")
lead: cat(riff("C"), riff("F"), riff("G"), riff("C"))
```

## Double and single quotes

Double quotes (and backticks) are mini-notation: `"c3 e3"` is a pattern of
two notes. Single quotes are a plain string that is not read as
mini-notation - useful for names that contain spaces.

```js
n("0 1 2 3").scale('C minor')
```

## Loops and arrays

Ordinary JavaScript can generate patterns. Here an array of degrees is built
with a loop and joined into mini-notation:

```js
const steps = []
for (let i = 0; i < 8; i++) steps.push(i % 3 === 0 ? i : "~")
n(steps.join(" ")).scale("A:minor").s("triangle")
```

## Your own methods: register

`register(name, fn)` adds a method you can chain like the built-in ones. The
pattern comes last in the function's arguments.

```js
register('dub', (amount, pat) => pat.delay(amount).delayfeedback(0.6).room(0.3))
note("c3 ~ ~ eb3 ~ ~ g3 ~").s("square").dub(0.5)
```

## The sandbox

Code arrives in shared projects and links, so TuttiDAW never runs it as
ordinary page script. Simple programs are read by TuttiDAW's own interpreter;
anything else runs in a sealed JavaScript sandbox (QuickJS in WebAssembly)
whose only ability is building patterns:

- there is no network, no page, no storage, no timers and no `eval`;
- `import(...)` and `fetch` are not available; external audio is declared with
  `samples(...)` and only loaded by the player when you press Play;
- every program has a work budget and a time limit, so an endless loop stops
  with an error instead of freezing the page.

## Determinism

The same code always plays the same notes - on your computer, a
collaborator's, in an export:

- `Math.random()` and the pattern functions `rand`, `?`, `|`,
  `sometimes` and friends are seeded;
- the clock is stopped: `Date.now()` always returns the same moment;
- every render starts fresh, so state kept in variables does not carry over
  from one play to the next.

```js
const pick = Math.floor(Math.random() * 4)
n(`<${pick} 2 4 6>`).scale("E:minor")
```

This program picks the same "random" note every time it is run.

## Limits

- a program can be up to 100,000 characters (a TuttiCode link up to 20,000);
- a cycle can hold up to 2,048 events in one voice.

A program over a limit reports an error at the code that caused it; the other
voices keep playing.

Source: https://tuttidaw.com/code/learn/javascript
