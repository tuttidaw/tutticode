# Chorus

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Chorus:Ensemble")
```

Accepted names: `chorus`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `mode` | Mode | `Classic` `Ensemble` `Vibrato` |
| `hpfOn` | HPF On | `true` / `false` |
| `shape` | Shape | 0 .. 1 % |
| `rateHz` | Rate | 0.1 .. 15 Hz (log) |
| `amount` | Amount | 0 .. 1 % |
| `feedback` | Feedback | 0 .. 1 % |
| `offsetDeg` | Offset | 0 .. 180 ° |
| `hpfFreq` | HPF Freq | 20 .. 2000 Hz (log) |
| `width` | Width | 0 .. 2 % |
| `warmth` | Warmth | 0 .. 1 % |
| `outputGainDb` | Gain | -36 .. 6 dB |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |
| `feedbackInvert` | FB Invert | `true` / `false` |

## Factory presets

Ensemble · Vibrato · Wide Classic
