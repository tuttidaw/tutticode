# EQ Three

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("EQ Three:Boost HiHats")
```

Accepted names: `eqthree`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `gainLo` | GainLow | 0 .. 2 |
| `gainMid` | GainMid | 0 .. 2 |
| `gainHi` | GainHi | 0 .. 2 |
| `freqLo` | FreqLow | 50 .. 5000 Hz (log) |
| `freqHi` | FreqHi | 200 .. 18000 Hz (log) |
| `lowOn` | Low On | `true` / `false` |
| `midOn` | Mid On | `true` / `false` |
| `highOn` | High On | `true` / `false` |
| `slope` | Slope | `24 dB` `48 dB` |

## Factory presets

Boost HiHats · Kill Bass
