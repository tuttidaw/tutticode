# Time and structure

Functions that speed up, shift, reverse, repeat and combine patterns, and arrange them into sections.

Mini-notation writes one cycle. Methods - the `.name(...)` calls after a
pattern - change how it unfolds over time. They can be chained, and most
take patterns as arguments too.

## Speed: fast and slow

```js
note("c3 eb3 g3 bb3").fast(2)
```

```js
note("c3 eb3 g3 bb3").slow(2)
```

A patterned argument changes the speed from bar to bar:

```js
s("bd sd").fast("<1 2 4 2>")
```

## Shifting: early and late

`.late(t)` delays a pattern by `t` cycles; `.early(t)` moves it forward. A
quarter of a cycle is one beat.

```js
stack(
  s("bd*4"),
  s("cp*2").late(0.25)
)
```

## Reversing and rotating

`.rev()` plays each cycle backwards, `.palindrome()` alternates forwards and
backwards, and `.iter(n)` starts each cycle one step further into the pattern.

```js
note("c3 d3 e3 g3").iter(4)
```

```js
note("c3 d3 e3 g3 a3").palindrome()
```

## Repeating: ply

`.ply(n)` repeats every event `n` times within its own length - a quick way
to make rolls.

```js
s("bd sd bd [sd cp]").ply("<1 2>")
```

## Looping a piece: ribbon

`.ribbon(offset, cycles)` cuts `cycles` cycles out of the pattern, starting
`offset` cycles in, and loops that piece. `.rib` is its short name. On a
random pattern the offset picks which stretch of it repeats: try other
numbers until a loop sticks.

```js
note("<c3 d3 e3 f3>").ribbon(1, 2)
```

```js
n(irand(8).segment(4)).scale("C:minor:pentatonic").s("triangle").rib(37, 1)
```

The loop counts in absolute time, and an event that crosses its end is cut
there: with `.ribbon(0, 0.5)` the piece starts again every half cycle.

## Every few cycles: every, lastOf, chunk

`.every(n, f)` applies the change `f` on the first of every `n` cycles;
`.lastOf(n, f)` on the last one, which suits a fill at the end of a phrase.
`f` is a small function written with an arrow: `x => x.fast(2)`.

```js
s("bd sd bd sd").lastOf(4, x => x.ply(2))
```

`.chunk(n, f)` applies `f` to one quarter (one `n`th) of the cycle, moving
along each cycle.

```js
note("c3 d3 e3 f3").chunk(4, x => x.add(note(12)))
```

## Layering: off, superimpose, layer, jux

`.off(t, f)` adds a copy that is shifted by `t` and changed by `f` - an echo
with a twist.

```js
note("c3 eb3 g3 bb3").off(1/8, x => x.add(note(12)))
```

`.superimpose(f)` stacks a changed copy without moving it; `.jux(f)` puts the
original on the left and the changed copy on the right.

```js
note("c3 e3 g3 e3").superimpose(x => x.add(note(7)))
```

```js
s("bd hh sd hh").jux(rev)
```

## Echoes: echo

`.echo(times, time, feedback)` repeats each event, quieter each time.

```js
s("cp ~ ~ ~").echo(3, 1/8, 0.6)
```

## Rhythm from another pattern: struct, mask, euclid

`.struct("x ~ x x")` plays the values on the rhythm of `x`s.
`.mask("1 0 1 1")` silences the parts where the mask is 0. `.euclid(k, n)` is
the method form of `(k,n)`.

```js
note("[c3,eb3,g3]").struct("x ~ x x ~ x ~ ~")
```

```js
note("c2").euclid(5, 8)
```

## Swing

`.swingBy(amount, n)` divides the cycle into `n` slices and delays the second
half of each slice. `1/3` gives a triplet feel; `.swing(n)` is a shortcut for
it.

```js
s("hh*8").swingBy(1/3, 4)
```

## Combining patterns: stack, cat, seq

`stack(a, b)` plays patterns together, `cat(a, b)` plays one per cycle in turn
and `seq(a, b)` squeezes them into one cycle.

```js
cat(
  note("c3 e3 g3 e3"),
  note("a2 c3 e3 c3")
)
```

## Sections: arrange

`arrange([cycles, pattern], ...)` builds a song form: each pattern plays for
its number of cycles, then the next one, and the whole thing loops.

```js
const verse = note("c3 eb3 g3 eb3")
const chorus = note("ab2 c3 eb3 c3").fast(2)
arrange([4, verse], [2, chorus])
```

For a whole song - an intro, verses, choruses and an outro, each track's
sound written once - see [Songs and sections](songs-and-sections.md).

## Randomness that repeats

`.sometimes(f)` applies `f` to about half of the events, `.degradeBy(p)` drops
events with probability `p`. Like `?` and `|`, they are seeded, so a program
always plays the same way.

```js
s("hh*16").degradeBy(0.3).sometimes(x => x.velocity(0.5))
```

Source: https://tuttidaw.com/code/learn/time-and-structure
