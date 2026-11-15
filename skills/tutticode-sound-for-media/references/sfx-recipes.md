# Sound-effect recipes

Each recipe compiles and renders (tested on every change). Render one with
the settings under it, read the report, then adapt it (*Vary*). A program
loops, so a one-shot effect is one bar long: `setcpm` sets the bar's
length (`setcpm(60)` = 1 s, `setcpm(30)` = 2 s). Render it with
`seconds` and a `tail` for its reverb. The loudness targets sit below the
music ones because short effects are peaky: a higher target fails with
`clip` at the -1 dBTP ceiling.

## Riser (`riser`)

Build-up into a reveal, a logo or a drop: 4 s of rising pitch and brightness.

```js
setcpm(15) // one bar = 4 s
cymbal: note("c4").s("gm_reverse_cymbal").gain(0.9)
sweep: note("c3").s("sawtooth").penv(24).pattack(4).attack(3.5).release(0.1).lpf(2000).gain(0.4)
```

Render: `tutticode render riser.tc -o riser.wav --seconds 4 --lufs -18`, or `code_render` with `{"seconds":4,"lufs":-18}`.

Vary: Length: change setcpm (setcpm(30) = 2 s) and pattack/attack with it. More tension: penv(36). Hit something at the end: render it, then place an impact on the next bar.

## Impact (`impact`)

A hit on a cut, a title slam, a logo landing: a sub boom with a bright crack and a short room.

```js
setcpm(30) // one bar = 2 s
boom: note("c1").s("sine").penv(24).pattack(0.001).pdecay(0.15).decay(1.5).sustain(0).gain(0.9)
crack: s("white").decay(0.25).sustain(0).hpf(1500).room(0.6).size(0.8)
```

Render: `tutticode render impact.tc -o impact.wav --seconds 2 --tail 1 --lufs -24`, or `code_render` with `{"seconds":2,"tail":1,"lufs":-24}`.

Vary: Bigger: decay(2.5) on the boom and size(0.95). Tighter for UI: drop the room and render 0.5 s.

## Whoosh (`whoosh`)

Something flying past, a swipe, a fast camera move: filtered noise swelling and fading in 1.5 s.

```js
setcpm(40) // one bar = 1.5 s
whoosh: s("pink").attack(0.6).decay(0.9).sustain(0).hpf(600).room(0.3)
```

Render: `tutticode render whoosh.tc -o whoosh.wav --seconds 1.5 --tail 0.5 --lufs -22`, or `code_render` with `{"seconds":1.5,"tail":0.5,"lufs":-22}`.

Vary: Faster: setcpm(80) with attack(0.3).decay(0.45). Darker: s("brown") and hpf(200).

## UI click (`ui-click`)

Buttons, toggles, key taps: a 20 ms square blip.

```js
setcpm(240) // one bar = 0.25 s
click: note("c6").s("square").decay(0.02).sustain(0).hpf(1000).gain(0.5)
```

Render: `tutticode render ui-click.tc -o ui-click.wav --seconds 0.25`, or `code_render` with `{"seconds":0.25}`.

Vary: Softer: s("sine") and note("g5"). A pair of states (on/off): render note("c6") and note("g5") as two files.

## UI confirm (`ui-confirm`)

Success, saved, done: two rising sine notes (a fifth).

```js
setcpm(120) // one bar = 0.5 s
confirm: note("e5 b5").s("sine").decay(0.25).sustain(0).room(0.2)
```

Render: `tutticode render ui-confirm.tc -o ui-confirm.wav --seconds 0.5 --tail 0.3 --lufs -22`, or `code_render` with `{"seconds":0.5,"tail":0.3,"lufs":-22}`.

Vary: Brighter: s("triangle"). Three steps: note("c5 e5 g5") with setcpm(80).

## UI error (`ui-error`)

Failed, invalid, denied: two falling low square notes (a fourth), muffled.

```js
setcpm(120) // one bar = 0.5 s
error: note("bb3 f3").s("square").decay(0.2).sustain(0).lpf(1500).gain(0.6)
```

Render: `tutticode render ui-error.tc -o ui-error.wav --seconds 0.5 --lufs -22`, or `code_render` with `{"seconds":0.5,"lufs":-22}`.

Vary: Gentler (a warning, not an error): s("triangle") and note("e4 c4").

## Notification (`notification`)

A message arrived, a reminder: an arpeggiated major triad with a short echo.

```js
setcpm(60) // one bar = 1 s
notify: note("c6 e6 g6 ~").s("triangle").decay(0.4).sustain(0).delay(0.3).delaytime(0.125).room(0.3)
```

Render: `tutticode render notification.tc -o notification.wav --seconds 1 --tail 0.5 --lufs -22`, or `code_render` with `{"seconds":1,"tail":0.5,"lufs":-22}`.

Vary: Another brand colour: another chord (note("a5 c6 e6 ~") is minor and softer). Shorter: drop the delay.

## Transition (downlifter) (`transition`)

Leaving a scene, closing a panel, the end of a section: a 2 s falling sweep.

```js
setcpm(30) // one bar = 2 s
sweep: note("c5").s("sawtooth").penv(-24).pattack(0.001).pdecay(1.5).decay(1.8).sustain(0).lpf(3000).room(0.5)
```

Render: `tutticode render transition.tc -o transition.wav --seconds 2 --tail 1 --lufs -22`, or `code_render` with `{"seconds":2,"tail":1,"lufs":-22}`.

Vary: Pair it with the riser for in/out transitions. Longer: setcpm(15) with pdecay(3).decay(3.5).

## Ambience bed (`ambience-bed`)

Room tone under a voice-over, a calm background for an app or a menu: waves and a soft pad, loops seamlessly.

```js
setcpm(15) // one bar = 4 s; loops every 2 bars
waves: note("c2").s("gm_seashore").gain(0.5)
pad: chord("<C^7 Am7>").voicing().s("supersaw").attack(1.5).release(2).lpf(900).gain(0.25).room(0.8).size(0.9)
```

Render: `tutticode render ambience-bed.tc -o ambience-bed.wav --loops 4 --fade-in 2 --fade-out 3 --lufs -20`, or `code_render` with `{"loops":4,"fadeIn":2,"fadeOut":3,"lufs":-20}`.

Vary: Rain instead of waves: s("gm_fx_rain"). For a loop file (game, app) render loops without fades.
