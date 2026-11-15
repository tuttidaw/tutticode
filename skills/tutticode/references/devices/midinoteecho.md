# Note Echo

A MIDI effect (`.midifx`), available.

```js
note("c3 e3 g3 b3").midifx("Note Echo:Arcade Repeat")
```

Accepted names: `noteecho`, `midinoteecho`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `sync` | Sync | `true` / `false` |
| `division` | Delay Time | `1` `2` `3` `4` `5` `6` `8` `16` |
| `delayPct` | Delay Time % | -33.33 .. 33.33 |
| `timeDelay` | Delay Time ms | 10 .. 6000 ms (log) |
| `feedback` | Feedback | 0 .. 0.95 % |
| `pitch` | Pitch | -12 .. 12 |
| `repeats` | Repeats | 1 .. 16 |
| `inputMute` | Input Mute | `true` / `false` |
| `mpe` | MPE | `true` / `false` |
| `pressFeedback` | Press | 0 .. 1 % |
| `slideFeedback` | Slide | 0 .. 1 % |
| `pitchFeedback` | Note PB | 0 .. 1 % |

## Factory presets

Arcade Repeat · Dotted 8th Echo · Downwards Flutter · Fifth Stage · Karplus Shimmer · Keys Mute · Octave Cascade · Rapid Response · Thirds Stacked
