# Overdrive

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Overdrive:Distort")
```

Accepted names: `overdrive`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `midFreq` | Freq | 80 .. 20000 Hz (log) |
| `bandWidth` | Width | 0.5 .. 9 |
| `drive` | Drive | 0 .. 100 % |
| `tone` | Tone | 0 .. 100 % |
| `preserveDynamics` | Dynamics | 0 .. 1 |
| `dryWetBalance` | Dry/Wet | 0 .. 1 |

## Factory presets

Distort · Enhance · Mids Distort · Mids Overdrive
