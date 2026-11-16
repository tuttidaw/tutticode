# Music-bed recipes

Loopable background music for videos, apps and games. Each recipe compiles
and renders (tested on every change). Start from the one nearest the brief,
change the key, chords and sounds, then check and render. `style` is the
Muse style id to compare with (`code_compare { goals: { style } }`); a
bed without a master chain sits a few LU under a style's mastered loudness,
so compare its spectrum and balance, and set the level with `lufs`.

## Lo-fi bed (`lofi-bed`)

Study, cooking, vlog and tutorial backgrounds: 80 BPM, swung drums, electric piano, soft bass. Style: `lofi-hip-hop`.

```js
setcpm(20) // 80 BPM
drums: s("bd ~ [~ bd] ~, ~ sd, hh*8").bank("tr808").swingBy(1/6, 4).gain(0.45)
keys: chord("<Fm9 Bbm9>").voicing().inst("Electric Piano").gain(0.7)
bass: n("<0 -4>").scale("F2:minor").s("sawtooth").lpf(400).gain(0.8)
master.fx("Limiter", {gainDb: 3, ceiling: -3}) // fewer peaks at the loudness target
```

Render: `tutticode render lofi-bed.tc -o lofi-bed.wav --loops 8 --fade-out 3 --lufs -19`, or `code_render` with `{"loops":8,"fadeOut":3,"lufs":-19}`.

Vary: Another key: change the chords and the scale together. Under speech: drop the keys gain to 0.4 and render at -22 LUFS.

## Upbeat pop bed (`upbeat-pop-bed`)

App promos, product launches, upbeat social videos: 120 BPM four-on-the-floor, I-V-vi-IV. Style: `modern-pop`.

```js
setcpm(30) // 120 BPM
drums: s("bd*4, ~ cp ~ cp, hh*8").bank("tr909").gain(0.6)
chords: chord("<C G Am F>").voicing().s("supersaw").release(0.2).lpf(2500).gain(0.2)
bass: note("<c2 g1 a1 f1>").ply(4).s("sawtooth").lpf(600).gain(0.6)
lead: n("<[0 2 4 2] [4 6 8 6] [5 7 9 7] [3 5 7 5]>").scale("C5:major").s("triangle").gain(0.4)
master.fx("Limiter", {gainDb: 3, ceiling: -3})
```

Render: `tutticode render upbeat-pop-bed.tc -o upbeat-pop-bed.wav --loops 2 --fade-out 2 --lufs -17`, or `code_render` with `{"loops":2,"fadeOut":2,"lufs":-17}`.

Vary: The lead arpeggiates each chord (scale degrees of the chord tones): keep that relation when you change the chords. Under a voice-over: mute the lead (_lead:).

## Cinematic tension (`cinematic-tension`)

Trailers, reveals, suspense, game menus: a low drone, slow minor strings and a ticking pulse at 60 BPM. Style: `cinematic`.

```js
setcpm(15) // 60 BPM
bus("verb").fx("Reverb", {dryWetBalance: 1, decayTime: "4s"}) // one room for every voice
master.fx("Limiter", {gainDb: 3, ceiling: -3})
drone: note("c2").s("sawtooth").lpf(300).attack(1).release(1).mix({vol: -6}).send("verb", -18)
strings: chord("<Cm Ab>").voicing().s("supersaw").attack(2).release(2).lpf(1200).mix({vol: -10}).send("verb", -4)
pulse: note("c6*8").s("sine").decay(0.1).sustain(0).mix({vol: -8}).send("verb", -14)
```

Render: `tutticode render cinematic-tension.tc -o cinematic-tension.wav --loops 3 --tail 3 --fade-out 4 --lufs -18`, or `code_render` with `{"loops":3,"tail":3,"fadeOut":4,"lufs":-18}`.

Vary: Rising tension: double the pulse (c6*16) for the last loop, or render the riser over the end. Bigger space: raise the sends, not the voices.

## Ambient bed (`ambient-bed`)

Meditation, wellness, slow product shots: a wide pad and sparse echoing bells at 48 BPM. Style: `ambient`.

```js
setcpm(12) // 48 BPM
bus("verb").fx("Reverb", {dryWetBalance: 1, decayTime: "6s"})
bus("echo").fx("Delay", {feedback: 0.4}).mix({vol: -6})
master.fx("Limiter", {gainDb: 3, ceiling: -3})
pad: chord("<Dm F>").voicing().s("supersaw").attack(2).release(3).lpf(1000).mix({vol: -10}).send("verb", -3)
bells: n("0 2 4 7 4 2").scale("D5:minor").s("sine").decay(0.8).sustain(0).mix({vol: -8}).send("echo", -6).send("verb", -12)
```

Render: `tutticode render ambient-bed.tc -o ambient-bed.wav --loops 3 --tail 4 --fade-in 3 --fade-out 5 --lufs -20`, or `code_render` with `{"loops":3,"tail":4,"fadeIn":3,"fadeOut":5,"lufs":-20}`.

Vary: The bells play chord tones of both chords (d f a): keep them on tones the chords share when you change the harmony.

## Chiptune game loop (`chiptune-loop`)

Retro and casual games, pixel-art videos: 150 BPM square-wave lead and bass that loop seamlessly.

```js
setcpm(37.5) // 150 BPM
lead: n("<[0 2 4 7] [4 2 0 ~]>*2").scale("C4:major").s("square").decay(0.12).sustain(0.3).gain(0.35)
bass: note("<c2 a1 f1 g1>").ply(8).s("square").lpf(800).gain(0.45)
drums: s("bd ~ sd ~, hh*8").bank("tr808").gain(0.6)
master.fx("Limiter", {gainDb: 3, ceiling: -3})
```

Render: `tutticode render chiptune-loop.tc -o chiptune-loop.wav --loops 2 --tail 0 --lufs -19`, or `code_render` with `{"loops":2,"tail":0,"lufs":-19}`.

Vary: A game loop file has no fades and `tail: 0`: exactly N loops, so it repeats in time. A boss level: setcpm(45) and a minor scale.

## Kick-ducked bed (`kick-ducked-bed`)

Fitness, sport, fashion and dance promos: a 120 BPM house pulse whose pad and bass duck under every kick (sidechain), so the kick punches through.

```js
setcpm(30) // 120 BPM
kick: s("bd*4").bank("tr909").gain(0.8)
hats: s("~ hh ~ hh, hh*8").bank("tr909").gain(0.3)
pad: chord("<Am F C G>").voicing().s("supersaw").release(0.3).lpf(2500).gain(0.3)
  .fx("Compressor", {threshold: -30, ratio: 8, attack: 1, release: 120, sidechain: "kick", sidechainFilter: "150Hz"})
bass: note("<a1 f1 c2 g1>").ply(8).s("sawtooth").lpf(500).gain(0.5)
  .fx("Compressor", {threshold: -30, ratio: 6, attack: 1, release: 100, sidechain: "kick"})
master.fx("Limiter", {gainDb: 3, ceiling: -3})
```

Render: `tutticode render kick-ducked-bed.tc -o kick-ducked-bed.wav --loops 4 --fade-out 2 --lufs -16`, or `code_render` with `{"loops":4,"fadeOut":2,"lufs":-16}`.

Vary: More or less pump: release (shorter = tighter) and ratio. Duck the whole bed at once: put pad and bass in group("bed") and key one Compressor on the group. Under speech: drop the hats and render at -20 LUFS.
