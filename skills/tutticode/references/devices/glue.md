# Bus Compressor

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Bus Compressor:Drum Buss Glue")
```

Accepted names: `buscompressor`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `threshold` | Thresh | -40 .. 0 dB |
| `rangeDb` | Range | 0 .. 70 dB |
| `makeupDb` | Makeup | 0 .. 20 dB |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |
| `scFilterFreq` | SC Freq | 30 .. 15000 Hz (log) |
| `scFilterQ` | SC Q | 0.1 .. 12 (log) |
| `scFilterGain` | SC EQ Gain | -15 .. 15 dB |
| `scFilterMode` | S/C EQ Mode | `Low Shelf` `Bell` `High Shelf` `Low Pass` `Band Pass` `High Pass` |
| `sideListen` | S/C Listen | `true` / `false` |
| `scMix` | SC Mix | 0 .. 1 % |
| `scGain` | SC Gain | -24 .. 24 dB |
| `attackIndex` | Attack | `0.01 ms` `0.1 ms` `0.3 ms` `1 ms` `3 ms` `10 ms` `30 ms` |
| `ratioIndex` | Ratio | `2 : 1` `4 : 1` `10 : 1` |
| `releaseIndex` | Release | `0.1 s` `0.2 s` `0.4 s` `0.6 s` `0.8 s` `1.2 s` |
| `autoRelease` | Auto Release | `true` / `false` |
| `softClip` | Soft Clip | `true` / `false` |
| `scFilterOn` | S/C EQ On | `true` / `false` |
| `scOn` | S/C On | `true` / `false` |

Sidechain: `sidechain: "kick"` keys it by the voice labelled `kick:`, `"bus:verb"` by the bus `verb` and `"group:drums"` by the group `drums` of the program. `sidechainGain` (dB) sets how loud the source is to it; `sidechainFilter` (a frequency, e.g. `"150Hz"`, or `false`) lets only the source's lows key it.

## Factory presets

Drum Buss Glue · Gentle Mix Bus · Parallel Crush
