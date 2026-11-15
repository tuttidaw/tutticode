# Clipper

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Clipper:Drum Smash")
```

Accepted names: `clipper`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `inputDb` | Input | -24 .. 24 dB |
| `ceilingDb` | Ceiling | -18 .. 0 dB |
| `lift` | Lift | 0 .. 1 |
| `outputDb` | Output | -24 .. 24 dB |
| `soft` | Soft | `true` / `false` |
| `delta` | Delta | `true` / `false` |

## Factory presets

Drum Smash · Peak Shaver · Soft Glue · Thick Lift
