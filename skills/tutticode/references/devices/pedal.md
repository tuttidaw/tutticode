# Pedal

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Pedal:Distortion")
```

Accepted names: `pedal`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `gainAmt` | Gain | 0 .. 1 |
| `bass` | Bass | -1 .. 1 |
| `mid` | Mid | -1 .. 1 |
| `treble` | Treble | -1 .. 1 |
| `output` | Output | -20 .. 20 dB |
| `dryWetBalance` | Dry/Wet | 0 .. 1 |
| `midFreq` | Mid Freq | `Low` `Mid` `High` |
| `sub` | Sub | `true` / `false` |

## Factory presets

Distortion · Fuzz · Overdrive
