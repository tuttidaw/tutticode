# Auto Filter

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Auto Filter:Auto Filter Sweep")
```

Accepted names: `autofilter`, `filter`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `frequency` | Filter | 20 .. 20000 Hz (log) |
| `Q` | Q | 0.1 .. 18 |
| `resonance` | Resonance | 0 .. 1.25 |
| `gain` | Gain | -12 .. 12 dB |
| `filterTypeIndex` | Type | `Low-pass` `High-pass` `Band-pass` `Notch` `All-pass` `Peaking` `Low Shelf` `High Shelf` |
| `slope24` | Slope | `true` / `false` |
| `lfoAmount` | LFO Amount | 0 .. 1 |
| `lfoRateHz` | LFO Rate | 0.1 .. 60 Hz (log) |
| `lfoWave` | Wave | `Sine` `Triangle` `Saw` `Square` `Ramp Up` `Ramp Down` `Wander` `S & H` |
| `lfoMorph` | LFO Morph | -1 .. 1 |
| `lfoQuantizationMode` | Quantize | `None` `Steps` `S&H` |
| `lfoStereoMode` | Stereo Mode | `Phase` `Spin` |
| `envAmount` | Env Amount | -1 .. 1 |
| `envAttackMs` | Env Attack | 0 .. 100 ms |
| `envReleaseMs` | Env Release | 0 .. 3000 ms |
| `envHold` | Hold | `true` / `false` |
| `envSahOn` | Env S&H | `true` / `false` |
| `scOn` | SC On | `true` / `false` |
| `scMix` | SC Mix | 0 .. 1 % |
| `scGain` | SC Gain | -70 .. 24 dB |
| `circuit` | Circuit | `SVF` `DFM` `MS2` `SMP` `PRD` |
| `drive` | Drive | 0 .. 1 |
| `softClip` | Clip | `true` / `false` |
| `dryWet` | Dry/Wet | 0 .. 1 |
| `output` | Output | 0 .. 1 |
| `scFilterOn` | SC Filter | `true` / `false` |
| `scFilterMode` | SC Filter Type | `Low-pass` `Low Shelf` `Band-pass` `Peaking` `High Shelf` `High-pass` |
| `scFilterFreq` | SC Frequency | 30 .. 15000 Hz (log) |
| `scFilterQ` | SC Q | 0.1 .. 12 (log) |
| `scFilterGain` | SC EQ Gain | -15 .. 15 dB |
| `lfoPhaseDeg` | LFO Phase | 0 .. 360 deg |
| `lfoOffsetDeg` | LFO Offset | 0 .. 360 deg |
| `lfoSmoothing` | LFO Smoothing | 0 .. 1 |
| `lfoSpin` | LFO Spin | 0 .. 0.5 |
| `lfoSahRate` | LFO S&H Rate | -6 .. 0 |
| `envSahRate` | Env S&H Rate | -6 .. 0 |
| `djControl` | Control | -1 .. 1 |

Sidechain: `sidechain: "kick"` keys it by the voice labelled `kick:`, `"bus:verb"` by the bus `verb` and `"group:drums"` by the group `drums` of the program. `sidechainGain` (dB) sets how loud the source is to it; `sidechainFilter` (a frequency, e.g. `"150Hz"`, or `false`) lets only the source's lows key it.

## Factory presets

Auto Filter Sweep · Auto Wah · Low Cut
