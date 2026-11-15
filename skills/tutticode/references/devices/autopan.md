# Auto Pan-Tremolo

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Auto Pan-Tremolo:Chopper")
```

Accepted names: `autopantremolo`, `autopan`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `mode` | Mode | `Panning` `Tremolo` |
| `amount` | Amount | 0 .. 1 % |
| `waveform` | Waveform | `Sine` `Triangle` `Shark Tooth` `Saw Up` `Saw Down` `Square` `Random` `Wander` `S&H` |
| `timeMode` | Time Mode | `Rate` `Time` `Synced` `Triplet` `Dotted` `16th` |
| `frequency` | Freq | 0.1 .. 60 Hz (log) |
| `lfoTime` | Time | 0.1 .. 200 s (log) |
| `syncedRate` | Rate | `8` `6` `4` `3` `2` `3/2` `1` `3/4` `1/2` `3/8` `1/3` `5/16` `1/4` `3/16` `1/6` `1/8` `1/12` `1/16` `1/24` `1/32` `1/48` `1/64` |
| `sixteenth` | Sixteenths | 1 .. 64 16th |
| `phase` | Phase | 0 .. 360 ° |
| `stereoMode` | Stereo Mode | `Phase` `Spin` |
| `lfoSpin` | Spin | 0 .. 0.5 % |
| `lfoOffsetDeg` | Offset | 0 .. 360 ° |
| `lfoInvert` | Invert | `true` / `false` |
| `panningShape` | Shape | 0 .. 1 % |
| `tremoloShape` | Tremolo Shape | -1 .. 1 % |
| `attackTime` | Attack | 0 .. 5 s |
| `dynamicFreqMod` | Dynamic Freq Mod | -1 .. 1 % |
| `harmonic` | Harmonic | `true` / `false` |
| `vintage` | Vintage | `true` / `false` |

## Factory presets

Chopper · Synced Pan 1/8 · Tremolo
