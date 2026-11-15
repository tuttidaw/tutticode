# Compressor

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Compressor:Acoustic")
```

Accepted names: `compressor`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `threshold` | Thresh | -70 .. 6 dB |
| `ratio` | Ratio | 1 .. ∞ |
| `attack` | Attack | 0.01 .. 1000 ms (log) |
| `release` | Release | 1 .. 3000 ms (log) |
| `knee` | Knee | 0 .. 18 dB |
| `makeupDb` | Out | -36 .. 36 dB |
| `expansionRatio` | Exp | 1 .. 2 |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |
| `scFilterFreq` | SC Freq | 30 .. 15000 Hz (log) |
| `scFilterQ` | SC Q | 0.1 .. 12 (log) |
| `scFilterGain` | SC EQ Gain | -15 .. 15 dB |
| `scMix` | SC Mix | 0 .. 1 % |
| `scGain` | SC Gain | -70 .. 24 dB |
| `scFilterOn` | S/C EQ On | `true` / `false` |
| `autoMakeup` | Makeup | `true` / `false` |
| `autoRelease` | Auto Release | `true` / `false` |
| `model` | Model | `Peak` `RMS` `Expand` |
| `envMode` | Env Mode | `Lin` `Log` |
| `scFilterMode` | S/C EQ Mode | `Low Shelf` `Bell` `High Shelf` `Low Pass` `Band Pass` `High Pass` |
| `scOn` | S/C On | `true` / `false` |
| `sideListen` | S/C Listen | `true` / `false` |
| `lookahead` | Lookahead | `0 ms` `1 ms` `10 ms` |

Sidechain: `sidechain: "kick"` keys it by the voice labelled `kick:`, `"bus:verb"` by the bus `verb` and `"group:drums"` by the group `drums` of the program. `sidechainGain` (dB) sets how loud the source is to it; `sidechainFilter` (a frequency, e.g. `"150Hz"`, or `false`) lets only the source's lows key it.

## Factory presets

Acoustic · Acoustic Kick · Gentle Glue · Vocal Leveler
