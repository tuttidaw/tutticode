# Drum Shaper

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Drum Shaper:808 Boom")
```

Accepted names: `drumshaper`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `drive` | Drive | 0 .. 100 % |
| `crunch` | Crunch | 0 .. 100 % |
| `transients` | Transients | -100 .. 100 % |
| `boomFreq` | Boom Freq | 0.081 .. 1.103 % |
| `boomAmt` | Boom | 0 .. 1 % |
| `boomDecay` | Decay | 0 .. 1 % |
| `damp` | Damp | 500 .. 20000 Hz (log) |
| `trim` | Trim | -70 .. 0 dB |
| `output` | Output | -18 .. 18 dB |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |
| `compressorOn` | Comp | `true` / `false` |

## Factory presets

808 Boom · Crunch Smash · Punch Bus
