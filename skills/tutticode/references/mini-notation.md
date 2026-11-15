# Mini-notation

The rhythm language inside the quotes - sequences, rests, groups, alternation, polymeter, Euclidean rhythms and chance.

Everything between double quotes is **mini-notation**: a compact way to write
rhythm. The same rules work for drum names, note names and numbers.

## Sequences and rests

Steps separated by spaces share the cycle equally. `~` (or `-`) is a rest.

```js
s("bd ~ ~ bd ~ ~ sd ~")
```

## Groups: [ ]

Square brackets squeeze several steps into the space of one.

```js
s("bd [sd sd] bd [~ sd]")
```

Groups can be nested as deep as you like: `[hh [hh hh]]` is an eighth note
followed by two sixteenths.

```js
s("hh [hh hh] hh [hh [hh hh]]")
```

## Faster and slower: * and /

`*n` plays a step `n` times in its own space; `/n` stretches it over `n`
cycles, so it only sounds every `n` bars.

```js
s("bd*2 sd, hh*8, cp/2")
```

## Alternation: < >

Angle brackets play **one** of their steps per cycle, in turn. They are the
easiest way to make a pattern change from bar to bar.

```js
note("<c3 a2 f2 g2>").s("sawtooth")
```

Combine them with `*` to step through the list faster:

```js
note("<c3 e3 g3 b3>*4")
```

## Chords and layers: ,

A comma plays its parts at the same time. Inside a group it makes a chord.

```js
note("[c3,e3,g3] [a2,c3,e3] [f2,a2,c3] [g2,b2,d3]")
```

## Longer and repeated steps: @ ! _

`@n` makes a step `n` times as long as the others. `!n` repeats a step `n`
times, each copy a full step. `_` extends the previous step by one step.

```js
note("c3@3 eb3 g3!2 bb3 _")
```

## Polymeter: { }

Curly brackets play layers of different lengths with the **same** step size,
so they drift against each other and meet again later. `%n` sets how many
steps fit in a cycle.

```js
note("{c3 eb3 g3, c4 d4 eb4 f4 g4}%4")
```

## Euclidean rhythms: (k,n)

`x(k,n)` spreads `k` hits as evenly as possible over `n` steps. Many
traditional rhythms are Euclidean: `(3,8)` is the tresillo, `(5,8)` the
cinquillo. A third number rotates the pattern.

```js
s("bd(3,8), hh(5,8,2), sd(2,8,4)")
```

## Chance: ? and |

`?` drops a step half of the time (`?0.2` drops it 20% of the time). `|`
chooses one of its options at random. Chance is seeded: the program plays
the same "random" notes every time you run it, until you change the code.

```js
s("hh*16?, bd [sd|cp]")
```

## Sample variants and number ranges: : and ..

`name:n` chooses variant `n` of a sound (`bd:3`). `a .. b` counts from `a` to
`b`.

```js
n("0 .. 7").scale("C:major")
```

## Mini-notation is a pattern everywhere

Any argument that takes a number also accepts a quoted pattern, so the same
syntax can drive speed, volume or a filter:

```js
s("hh*8").gain("0.9 0.4 0.6 0.4").fast("<1 2>")
```

Source: https://tuttidaw.com/code/learn/mini-notation
