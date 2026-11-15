# Multiband Dynamics

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Multiband Dynamics:De-Mud Upward Low")
```

Accepted names: `multibanddynamics`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `lowMidHz` | Low-Mid | 30 .. 3000 Hz (log) |
| `midHighHz` | Mid-High | 300 .. 15000 Hz (log) |
| `amount` | Amount | 0 .. 1 % |
| `timeScale` | Time | 0.1 .. 10 x (log) |
| `masterDb` | Master | -24 .. 24 dB |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |
| `scFilterOn` | S/C EQ On | `true` / `false` |
| `scFilterMode` | S/C EQ Mode | `Low Shelf` `Bell` `High Shelf` `Low Pass` `Band Pass` `High Pass` |
| `scFilterFreq` | SC Freq | 30 .. 15000 Hz (log) |
| `scFilterQ` | SC Q | 0.1 .. 12 (log) |
| `scFilterGain` | SC EQ Gain | -15 .. 15 dB |
| `sideListen` | S/C Listen | `true` / `false` |
| `scMix` | SC Mix | 0 .. 1 % |
| `scGain` | SC Gain | -24 .. 24 dB |
| `scOn` | SC On | `true` / `false` |
| `bands.0.isOn` | Low Active | `true` / `false` |
| `bands.1.isOn` | Mid Active | `true` / `false` |
| `bands.2.isOn` | High Active | `true` / `false` |
| `softKnee` | Soft Knee | `true` / `false` |
| `peakMode` | Peak Mode | `true` / `false` |
| `bands.0.inputGainDb` | Low Input | -24 .. 24 dB |
| `bands.0.outputGainDb` | Low Output | -24 .. 24 dB |
| `bands.0.aboveThresholdDb` | Low Above Threshold | -80 .. 0 dB |
| `bands.0.belowThresholdDb` | Low Below Threshold | -80 .. 0 dB |
| `bands.0.aboveRatio` | Low Above Ratio | 0.5 .. 1000 |
| `bands.0.belowRatio` | Low Below Ratio | 0.25 .. 1000 |
| `bands.0.attackMs` | Low Attack | 0.1 .. 5000 ms (log) |
| `bands.0.releaseMs` | Low Release | 0.1 .. 5000 ms (log) |
| `bands.1.inputGainDb` | Mid Input | -24 .. 24 dB |
| `bands.1.outputGainDb` | Mid Output | -24 .. 24 dB |
| `bands.1.aboveThresholdDb` | Mid Above Threshold | -80 .. 0 dB |
| `bands.1.belowThresholdDb` | Mid Below Threshold | -80 .. 0 dB |
| `bands.1.aboveRatio` | Mid Above Ratio | 0.5 .. 1000 |
| `bands.1.belowRatio` | Mid Below Ratio | 0.25 .. 1000 |
| `bands.1.attackMs` | Mid Attack | 0.1 .. 5000 ms (log) |
| `bands.1.releaseMs` | Mid Release | 0.1 .. 5000 ms (log) |
| `bands.2.inputGainDb` | High Input | -24 .. 24 dB |
| `bands.2.outputGainDb` | High Output | -24 .. 24 dB |
| `bands.2.aboveThresholdDb` | High Above Threshold | -80 .. 0 dB |
| `bands.2.belowThresholdDb` | High Below Threshold | -80 .. 0 dB |
| `bands.2.aboveRatio` | High Above Ratio | 0.5 .. 1000 |
| `bands.2.belowRatio` | High Below Ratio | 0.25 .. 1000 |
| `bands.2.attackMs` | High Attack | 0.1 .. 5000 ms (log) |
| `bands.2.releaseMs` | High Release | 0.1 .. 5000 ms (log) |

Sidechain: `sidechain: "kick"` keys it by the voice labelled `kick:`, `"bus:verb"` by the bus `verb` and `"group:drums"` by the group `drums` of the program. `sidechainGain` (dB) sets how loud the source is to it; `sidechainFilter` (a frequency, e.g. `"150Hz"`, or `false`) lets only the source's lows key it.

## Factory presets

De-Mud Upward Low · Gentle Multiband Glue · Multiband Expander
