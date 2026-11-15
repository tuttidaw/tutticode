# Sample operations

Play part of a sample, change its speed, cut it into slices, fit it to the tempo and choke it.

Drum sounds and your own samples are recordings, so you can play a window of
them, faster or slower, forwards or backwards. In TuttiDAW every variation
becomes its own pad in a Drum Rack, so the result opens in the studio exactly
as it sounds.

## Window: begin and end

`.begin(...)` and `.end(...)` set where a sample starts and stops, as a
fraction of its length (0 to 1).

```js
s("oh*4").end("<0.1 0.3 0.6 1>")
```

## Speed

`.speed(n)` plays a sample `n` times as fast: 2 is an octave up, 0.5 an
octave down, and a negative speed plays it backwards.

```js
s("cp*4").speed("1 2 0.5 -1")
```

## Gating and choke groups: clip and cut

A sample normally plays to its end. `.clip(1)` stops it at the end of its
step (`.clip(0.5)` halfway). `.cut(n)` puts sounds in a choke group: a new
hit stops the one still ringing, like an open hi-hat closed by a closed one.

```js
s("[oh hh]*4").cut(1)
```

```js
s("oh*8").clip("<1 0.25>")
```

## Cutting into parts: chop and striate

`.chop(n)` cuts every event, and its sample, into `n` parts played one after
another. `.striate(n)` plays the whole pattern `n` times, a later part of each
sample each time.

```js
s("cr").chop(8).speed("<1 -1>")
```

```js
s("bd sd").striate(4)
```

## Slices: slice and splice

`.slice(n, indices)` cuts a sample into `n` equal slices and plays the slices
the index pattern names - the classic way to rearrange a break. `.splice` does
the same and changes each slice's speed so it fills its step exactly.

```js
s("cr").slice(8, "0 7 2 5 4 3 6 1")
```

```js
s("oh").splice(4, "0 2 1 [3 3]")
```

## Fitting to the tempo: loopAt and fit

`.loopAt(n)` changes a sample's speed so it lasts exactly `n` cycles - ideal
for loops and breaks. `.fit()` makes each sample fill its own step. Both follow
the tempo, so the loop stays in time when you change `setcpm`.

```js
s("cr").loopAt(1).chop(4)
```

## Scrubbing

`.scrub("position:speed")` starts the sample at a position, like moving a
tape head.

```js
s("cr*4").scrub("0 0.5:2 0.25 0.75:0.5")
```

## With your own loops

These operations are at their best on your own recordings. Declare them with
`samples(...)` (see [Sounds](sounds.md#your-own-samples)) and slice away:

```js
samples({ break: "https://example.com/loops/break-120.wav" })
s("break").loopAt(2).slice(8, "0 1 <2 6> 3 [4 4] 5 6 <7 1>")
```

A pitched instrument - a synth or a General MIDI name - plays its notes as
written: these operations only change sampled drums and samples.

Source: https://tuttidaw.com/code/learn/sample-operations
