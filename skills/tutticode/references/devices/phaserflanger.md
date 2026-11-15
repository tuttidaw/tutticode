# Phaser-Flanger

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Phaser-Flanger:Doubler")
```

Accepted names: `phaserflanger`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `rate` | Rate | 0.01 .. 40 Hz (log) |
| `amount` | Amount | 0 .. 1 |
| `modPhase` | Phase | 0 .. 360 ° |
| `notches` | Notches | 1 .. 42 |
| `centerFreq` | Center | 70 .. 18500 Hz (log) |
| `spread` | Spread | 0 .. 1 |
| `modBlend` | Blend | 0 .. 1 |
| `flangeTimeMs` | Flange Time | 0.1 .. 20 ms (log) |
| `doublerTimeMs` | Doubler Time | 20 .. 150 ms (log) |
| `feedback` | Feedback | 0 .. 0.99 |
| `outputGainDb` | Output | -36 .. 6 dB |
| `dryWetBalance` | Dry/Wet | 0 .. 1 |
| `feedbackInvert` | FB Invert | `true` / `false` |
| `lfoWave` | LFO Waveform | `Sine` `Triangle` `Triangle Analog` `Triangle 8` `Triangle 16` `Saw Up` `Saw Down` `Rectangle` `Random` `Random S&H` |
| `lfoDuty` | Duty Cycle | -1 .. 1 |
| `spin` | Spin | 0 .. 0.5 |
| `lfoBlend` | LFO2 Mix | 0 .. 1 |
| `rate2` | LFO2 Freq | 0.01 .. 40 Hz (log) |
| `envAmount` | Env Amount | -1 .. 1 |
| `envAttackMs` | Env Attack | 0.1 .. 30 ms (log) |
| `envReleaseMs` | Env Release | 0.1 .. 400 ms (log) |
| `safeFreq` | Safe Bass | 5 .. 3000 Hz (log) |
| `warmth` | Warmth | 0 .. 1 |
| `legacyHipass` | Hi Pass | 20 .. 5000 Hz (log) |

## Factory presets

Doubler · Flanger · Jet Flange · Phaser · Slow Sweep
