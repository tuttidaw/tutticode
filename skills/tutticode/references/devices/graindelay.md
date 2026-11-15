# Granular Delay

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Granular Delay:Falling Cloud")
```

Accepted names: `granulardelay`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `time` | Time | 1 .. 128 ms |
| `syncOffset` | Offset | -0.333 .. 0.333 % |
| `spray` | Spray | 0 .. 500 ms |
| `freqHz` | Frequency | 1 .. 150 Hz (log) |
| `pitch` | Pitch | -36 .. 12 st |
| `randomPitch` | Random | 0 .. 1 % |
| `feedback` | Feedback | 0 .. 0.95 % |
| `dryWet` | Dry/Wet | 0 .. 1 % |

## Factory presets

Falling Cloud · Grain Scatter · Pitch Spiral Up · Shimmer Wash
