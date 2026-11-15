# Pitch Shifter

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Pitch Shifter:Barber Rise")
```

Accepted names: `pitchshifter`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `freqRingMode` | Freq/Ring Mode | `Freq` `Ring` |
| `pitch` | Pitch | -24 .. 24 st |
| `freqCoarseHz` | F. Coarse | -10000 .. 10000 Hz |
| `freqFineHz` | F. Fine | -500 .. 500 Hz |
| `ringHz` | Ring Freq | 1 .. 20000 Hz (log) |
| `ringDriveDb` | Ring Drive | 0 .. 15 dB |
| `fine` | Fine | -50 .. 50 ct |
| `formantShift` | F. Shift | -24 .. 24 st |
| `tonality` | Tonality | 0 .. 16000 Hz |
| `delayTimeMs` | Delay Time | 1 .. 2000 ms (log) |
| `feedback` | Feedback | 0 .. 0.95 |
| `tone` | Tone | 200 .. 18000 Hz (log) |
| `dryWetBalance` | Dry/Wet | 0 .. 1 |
| `formantOn` | Formant On | `true` / `false` |
| `ringDrive` | Drive | `true` / `false` |
| `wide` | Wide | `true` / `false` |
| `delaySync` | Delay Sync | `true` / `false` |
| `delayOn` | Delay On | `true` / `false` |
| `delayDivision` | Delay Division | `1/16` `1/8` `3/16` `1/4` `3/8` `1/2` `3/4` `1 Bar` |
| `lfoRateHz` | LFO Rate | 0.01 .. 50 Hz (log) |
| `lfoAmountPitch` | LFO Amt | 0 .. 24 st |
| `lfoAmountHz` | LFO Amt Hz | 0 .. 2232.732 Hz |
| `lfoDuty` | LFO Duty | -1 .. 1 |
| `lfoPhaseOffset` | LFO Phase | 0 .. 360 ° |
| `lfoSpinAmount` | LFO Spin | 0 .. 0.5 |
| `lfoSync` | LFO Sync | `true` / `false` |
| `lfoSpinOn` | LFO Spin On | `true` / `false` |
| `lfoWaveform` | LFO Wave | `Sine` `Triangle` `Triangle Analog` `Triangle 8` `Triangle 16` `Saw Up` `Saw Down` `Rectangle` `Random` `Random S&H` |
| `lfoOffset` | LFO Offset | 0 .. 360 ° |
| `lfoWidth` | LFO Width | 0 .. 1 |
| `envOn` | Env Fol | `true` / `false` |
| `envAttackMs` | Env Attack | 0.1 .. 1000 ms (log) |
| `envReleaseMs` | Env Release | 0.1 .. 1000 ms (log) |
| `envAmountPitch` | Env Amt | -24 .. 24 st |
| `envAmountHz` | Env Amt Hz | -5000 .. 5000 Hz |
| `glideMs` | Glide | 0 .. 5000 ms |
| `pbRange` | PB | 0 .. 24 st |
| `lfoSyncedRate` | LFO Sync Rate | `8/1` `6/1` `4/1` `3/1` `2/1` `1/1 D` `1/1` `1/2 D` `1/2` `1/4 D` `1/4` `1/8 D` `1/4 T` `1/8` `1/16 D` `1/8 T` `1/16` `1/32 D` `1/16 T` `1/32` `1/32 T` `1/64` |

## Factory presets

Barber Rise · Bell Ring · Chipmunk · Detune Thicken · Dive Echo · Fifth Up · Octave Down · Octave Up · Spiral Up · Vocal Up (Formant Kept)
