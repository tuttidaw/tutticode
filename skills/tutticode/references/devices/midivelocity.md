# Velocity

A MIDI effect (`.midifx`), available.

```js
note("c3 e3 g3 b3").midifx("Velocity:Add some Random")
```

Accepted names: `velocity`, `midivelocity`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `drive` | Drive | -1 .. 1 |
| `compand` | Comp. | -1 .. 1 |
| `random` | Random | 0 .. 64 |
| `outHi` | Out Hi | 0 .. 127 |
| `outLow` | Out Low | 0 .. 127 |
| `range` | Range | 0 .. 127 |
| `lowest` | Lowest | 0 .. 127 |
| `mode` | Mode | `Clip` `Gate` `Fixed` |
| `operation` | Operation | `Velocity` `Note Off` `Both` |

## Factory presets

Add some Random · Compression I · Cut Above 64
