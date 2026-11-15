# Pitch

A MIDI effect (`.midifx`), available.

```js
note("c3 e3 g3 b3").midifx("Pitch:+ 12")
```

Accepted names: `pitch`, `midipitch`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `pitch` | Pitch | -128 .. 128 |
| `pitchScaleDegrees` | Pitch Degrees | -30 .. 30 |
| `lowest` | Lowest | 0 .. 127 |
| `range` | Range | 0 .. 127 |
| `rangeMode` | Range Mode | `Block` `Fold` `Limit` |
| `stepWidth` | Step Width | 1 .. 48 |
| `stepWidthScaleDegrees` | Step Width Degrees | 1 .. 30 |
| `useCurrentScale` | Use Current Scale | `true` / `false` |

## Factory presets

+ 12 · + 24 · - 12
