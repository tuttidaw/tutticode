# Echo

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Echo:Diffused Cascades")
```

Accepted names: `echo`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `timeL` | L (ms) | 1 .. 2500 ms |
| `timeR` | R (ms) | 1 .. 2500 ms |
| `inputGainDb` | Input | -40 .. 40 dB |
| `outputGainDb` | Output | -18 .. 12 dB |
| `outputGain` | Output Gain | 0 .. 4 |
| `feedback` | Feedback | 0 .. 1.5 % |
| `hpFreq` | HP | 20 .. 20000 Hz (log) |
| `lpFreq` | LP | 20 .. 20000 Hz (log) |
| `modFreq` | Mod Rate | 0.01 .. 40 Hz (log) |
| `modPhase` | Mod Phase | 0 .. 180 ° |
| `modAmountDelay` | Mod Dly | 0 .. 1 % |
| `modAmountFilter` | Mod Filt | 0 .. 1 % |
| `offsetL` | L Offset | -0.33 .. 0.33 % |
| `offsetR` | R Offset | -0.33 .. 0.33 % |
| `stereoWidth` | Width | 0 .. 2 % |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |
| `gateThreshold` | Gate Threshold | -60 .. 0 dB |
| `gateRelease` | Gate Release | 0.1 .. 3000 ms (log) |
| `duckThresholdDb` | Ducking Threshold | -60 .. 0 dB |
| `duckReleaseMs` | Ducking Release | 20 .. 1500 ms (log) |
| `noiseAmount` | Noise Amount | 0 .. 1 % |
| `noiseMorph` | Noise Morph | 0 .. 1 % |
| `wobbleAmount` | Wobble Amount | 0 .. 1 % |
| `wobbleMorph` | Wobble Morph | 0 .. 1 % |
| `hpResonance` | HP Res | 0 .. 0.3 |
| `lpResonance` | LP Res | 0 .. 0.3 |
| `modEnvelopeMix` | Env Mix | 0 .. 1 % |
| `repitchSmoothing` | Smoothing Time | 0.01 .. 1 s (log) |
| `gateOn` | Gate On | `true` / `false` |
| `noiseOn` | Noise On | `true` / `false` |
| `wobbleOn` | Wobble On | `true` / `false` |
| `duckOn` | Ducking On | `true` / `false` |
| `clipperDry` | Clip Dry | `true` / `false` |
| `repitch` | Repitch | `true` / `false` |
| `reverbLevel` | Reverb Level | 0 .. 1 % |
| `modShape` | Mod Shape | `Sine` `Triangle` `Saw Up` `Saw Down` `Square` `Noise` |
| `channelMode` | Channel Mode | `Stereo` `Ping Pong` `Mid/Side` |
| `reverbLoc` | Reverb Location | `Pre` `Post` `Feedback` |

## Factory presets

Diffused Cascades · Dub Space · Ping Pong 1/8 · Tape Echo · Wide Eighths
