# Limiter

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Limiter:Fast")
```

Accepted names: `limiter`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `gainDb` | Gain | -24 .. 24 dB |
| `ceiling` | Ceiling | -24 .. 0 dB |
| `release` | Release | 0.01 .. 3000 ms (log) |
| `lookahead` | Lookahead | 1.5 .. 6 ms |
| `link` | Link | 0 .. 1 |
| `linkMidSide` | Link M/S | 0 .. 1 |
| `maximizeThreshold` | Threshold | -24 .. 0 dB |
| `maximizeOutput` | Output | -24 .. 0 dB |

## Factory presets

Fast · Loud · Master Safe
