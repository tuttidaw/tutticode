# Voice Leveler

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Voice Leveler:Broadcast -23 LUFS")
```

Accepted names: `voiceleveler`, `leveler`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `target` | Target | -36 .. -6 LUFS |
| `maxGain` | Max Gain | 0 .. 30 dB |
| `maxCut` | Max Cut | 0 .. 30 dB |
| `gate` | Gate | -80 .. -20 LUFS |
| `speed` | Speed | 0.5 .. 20 s (log) |

## Factory presets

Broadcast -23 LUFS · Fast Rider · Gentle Rider · Podcast -16 LUFS
