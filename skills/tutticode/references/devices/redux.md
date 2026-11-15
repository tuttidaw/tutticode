# Redux

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Redux:Chiptune")
```

Accepted names: `redux`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `sampleRate` | Rate | 200 .. 48000 Hz (log) |
| `bitDepth` | Bits | 1 .. 16 |
| `postFilterOn` | Post Filter | `true` / `false` |
| `dryWetBalance` | Dry/Wet | 0 .. 1 |
| `jitter` | Jitter | 0 .. 1 |
| `preFilterOn` | Pre Filter | `true` / `false` |
| `postFilterOctave` | Post Octave | -4 .. 4 |
| `quantizerShape` | Shape | 0 .. 1 |
| `dcShift` | DC Shift | `true` / `false` |

## Factory presets

Chiptune · Crushed · Vintage Sampler
