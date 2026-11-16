# Multi Distortion

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Multi Distortion:Feedback Growl")
```

Accepted names: `multidistortion`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `inputGain` | Drive | 0.05 .. 16 (log) |
| `toneAmount` | Tone | -1 .. 1 |
| `toneFreq` | Tone Freq | 40 .. 18000 Hz (log) |
| `lowMidHz` | Low/Mid | 20 .. 5000 Hz (log) |
| `midHighHz` | Mid/High | 200 .. 18000 Hz (log) |
| `fbAmount` | Feedback | 0 .. 1 % |
| `fbFreq` | FB Freq | 40 .. 15000 Hz (log) |
| `compAmount` | Compression | 0 .. 1 % |
| `outputGain` | Output | 0.004 .. 4 (log) |
| `dryWet` | Dry/Wet | 0 .. 1 % |
| `stage1ShaperAmt` | S1 Amount | 0 .. 1 % |
| `stage1FilterFreq` | S1 Freq | 20 .. 22000 Hz (log) |
| `stage1FilterRes` | S1 Res | 0 .. 1 % |
| `stage2ShaperAmt` | S2 Amount | 0 .. 1 % |
| `stage2FilterFreq` | S2 Freq | 20 .. 22000 Hz (log) |
| `stage2FilterRes` | S2 Res | 0 .. 1 % |
| `stage3ShaperAmt` | S3 Amount | 0 .. 1 % |
| `stage3FilterFreq` | S3 Freq | 20 .. 22000 Hz (log) |
| `stage3FilterRes` | S3 Res | 0 .. 1 % |
| `blend` | Blend | 0 .. 1 % |
| `stage1ShaperBias` | S1 Bias | -1 .. 1 |
| `stage1ShaperTrim` | S1 Level | 0.063 .. 15.849 (log) |
| `stage1FilterMorph` | S1 Morph | 0 .. 1 |
| `stage1FilterPeakGain` | S1 Peak Gain | 0.251 .. 3.981 (log) |
| `stage2ShaperBias` | S2 Bias | -1 .. 1 |
| `stage2ShaperTrim` | S2 Level | 0.063 .. 15.849 (log) |
| `stage2FilterMorph` | S2 Morph | 0 .. 1 |
| `stage2FilterPeakGain` | S2 Peak Gain | 0.251 .. 3.981 (log) |
| `stage3ShaperBias` | S3 Bias | -1 .. 1 |
| `stage3ShaperTrim` | S3 Level | 0.063 .. 15.849 (log) |
| `stage3FilterMorph` | S3 Morph | 0 .. 1 |
| `stage3FilterPeakGain` | S3 Peak Gain | 0.251 .. 3.981 (log) |
| `fbTimeS` | FB Time | 0.001 .. 2 (log) |
| `fbNote` | FB Note | 0 .. 127 |
| `fbBandwidth` | FB Width | 0.5 .. 9 |
| `modGlobal` | Global Amount | 0 .. 2 |
| `lfo1Rate` | LFO 1 Rate | 0.01 .. 40 Hz (log) |
| `lfo2Rate` | LFO 2 Rate | 0.01 .. 40 Hz (log) |
| `lfo1Morph` | LFO 1 Morph | -1 .. 1 |
| `lfo1Smooth` | LFO 1 Smooth | 0 .. 1 |
| `lfo2Morph` | LFO 2 Morph | -1 .. 1 |
| `lfo2Smooth` | LFO 2 Smooth | 0 .. 1 |
| `noiseRate` | Noise Rate | 0.01 .. 40 Hz (log) |
| `noiseSmooth` | Noise Smooth | 0 .. 1 |
| `envAttack` | Env Attack | 0 .. 0.1 |
| `envRelease` | Env Release | 0 .. 10 |
| `envThreshold` | Env Thresh | 0 .. 1 |
| `envGain` | Env Gain | 1 .. 63.096 (log) |
| `envFreq` | Env Freq | 20 .. 20000 Hz (log) |
| `envWidth` | Env Width | 0.1 .. 9 |
| `scMix` | SC Mix | 0 .. 1 |
| `scGain` | SC Gain | -70 .. 24 dB |

## Factory presets

Feedback Growl · Multiband Glow · Serial Crunch · Warm Drive
