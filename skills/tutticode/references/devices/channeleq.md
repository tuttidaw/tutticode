# Channel EQ

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Channel EQ:Air")
```

Accepted names: `channeleq`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `lowGainDb` | Low | -15 .. 15 dB |
| `midGainDb` | Mid | -12 .. 12 dB |
| `midFrequency` | Mid Freq | 120 .. 7500 Hz (log) |
| `highGainDb` | High | -15 .. 15 dB |
| `outputGainDb` | Output | -15 .. 15 dB |

## Factory presets

Air · Bass Boost · Vocal Presence
