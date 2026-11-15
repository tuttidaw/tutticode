# Gate

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Gate:Drum Gate")
```

Accepted names: `gate`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `threshold` | Threshold | -40 .. 3 dB |
| `hysteresis` | Return | 0 .. 24 dB |
| `attack` | Attack | 0.02 .. 150 ms (log) |
| `hold` | Hold | 1 .. 1500 ms (log) |
| `release` | Release | 0.1 .. 750 ms (log) |
| `floor` | Floor | -75 .. 0 dB |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |
| `scFilterFreq` | SC Freq | 30 .. 15000 Hz (log) |
| `scFilterQ` | SC Q | 0.1 .. 12 (log) |
| `scFilterGain` | SC EQ Gain | -15 .. 15 dB |
| `scMix` | SC Mix | 0 .. 1 % |
| `scGain` | SC Gain | -70 .. 24 dB |
| `flip` | Flip | `true` / `false` |
| `scFilterOn` | SC EQ On | `true` / `false` |
| `scOn` | SC On | `true` / `false` |
| `sideListen` | SC Listen | `true` / `false` |
| `lookahead` | Lookahead | `0 ms` `1 ms` `10 ms` |
| `scFilterMode` | SC EQ Mode | `Low Shelf` `Bell` `High Shelf` `Low Pass` `Band Pass` `High Pass` |

Sidechain: `sidechain: "kick"` keys it by the voice labelled `kick:`, `"bus:verb"` by the bus `verb` and `"group:drums"` by the group `drums` of the program. `sidechainGain` (dB) sets how loud the source is to it; `sidechainFilter` (a frequency, e.g. `"150Hz"`, or `false`) lets only the source's lows key it.

## Factory presets

Drum Gate · Flipside · Soft Cleanup
