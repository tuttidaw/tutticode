# Random

A MIDI effect (`.midifx`), available.

```js
note("c3 e3 g3 b3").midifx("Random:Chaos")
```

Accepted names: `random`, `midirandom`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `chance` | Chance | 0 .. 1 % |
| `choices` | Choices | 1 .. 24 |
| `scale` | Interval | 1 .. 24 |
| `alternate` | Alt | `true` / `false` |
| `sign` | Sign | `Add` `Sub` `Bi` |
| `useCurrentScale` | Use Current Scale | `true` / `false` |

## Factory presets

Chaos · Fifth · Random Octaves
