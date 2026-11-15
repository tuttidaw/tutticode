# Melodies with do re mi

Write notes in solfège (do re mi fa sol la si) wherever a note name goes; Export to Strudel gives letters.

## Solfège is a note name

Wherever a note name goes, you can write its solfège name instead:
`do re mi fa sol la si`. TuttiCode uses fixed do: `do` is always C, `re` is D,
`sol` is G, whatever the key. `so` and `ti` work too (the same as `sol` and
`si`).

```js
note("do re mi fa sol la si do4")
```

Only the name differs: `note("do re mi")` plays exactly what `note("c d e")`
plays.

## Sharps, flats and octaves

Add sharps, flats and octaves as you would to a letter: `do#4`, `mib` (E flat),
`sib3` (B flat), `fa#`. A name without an octave is in octave 3, like `c`.
Capitals work too: `Do`, `SOL`.

```js
note("<do4 mib4 sol4 sib4> [fa#3 la3]").s("piano")
```

## Scales and chords

Scale roots take solfège: `.scale("re:minor")`. Stack names with commas to
play a chord.

```js
n("0 2 4 <7 6>").scale("<re:dorian sol:mixolydian>")
```

```js
note("<[do3,mi3,sol3] [la2,do3,mi3] [fa2,la2,do3] [sol2,si2,re3]>").s("piano")
```

Chord symbols (`chord("C^7")`, `.voicings()`) keep their letters: there `do`
already means D diminished (`D` and `o`).

## A folk tune

Many songs are learned as do re mi. Here is the opening of the Chinese folk
song *Mo Li Hua* ("Jasmine Flower"), which uses only five notes: do re mi
sol la.

```js
setcpm(20)
note("mi4 [mi4 sol4] [la4 do5] [do5 la4] sol4 [sol4 la4] sol4 ~").s("piano")
```

Those five notes are the pentatonic scale. Write the tune as steps of the
scale with `n()` and `.scale("do4:pentatonic")` (0 is do, 1 re, 2 mi,
3 sol, 4 la, 5 the next do), and a new root moves the whole tune:

```js
setcpm(20)
n("2 [2 3] [4 5] [5 4] 3 [3 4] 3 ~").scale("<do4:pentatonic sol3:pentatonic>").s("piano")
```

## A first song: do re mi and drums

Give the melody a beat. The drums go in a group with one fader
(`group` and `.group`, see [Mixing: groups](mixing-groups.md)), so the whole
kit sits under the tune:

```js
setcpm(25)
group("drums").mix({vol: -6})

kick: s("bd*2 ~ bd").bank("tr808").group("drums")
hats: s("hh*8").bank("tr808").group("drums").mix({vol: -6})
tune: note("<[do4 mi4 sol4 mi4] [la4 sol4 mi4 re4]>").s("piano")
bass: note("<do2 la1>").s("sawtooth").lpf(500)
```

## Where a word is not a note

In `s()` and `sound()` words are sound names, so `s("do")` looks for a sound
called "do". `n()` is also a sample or soundfont index, so `n("do")` is a
word too: write `note("do")`. Solfège means a pitch only in `note()` /
`.note()`, `.scale()` roots, `.mode()` and `.anchor()`, and `.add()` /
`.sub()` / `.transpose()` on notes.

## Exporting to Strudel

strudel.cc reads letter names only. "Export to Strudel" (the code page's Export
& Share tab) rewrites solfège to letters for you (`"do re mi"` becomes
`"c d e"`), so the program plays the same there.

Source: https://tuttidaw.com/code/learn/melodies-with-do-re-mi
