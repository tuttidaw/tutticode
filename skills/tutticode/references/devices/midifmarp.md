# FM Arp

A MIDI effect (`.midifx`), available.

```js
note("c3 e3 g3 b3").midifx("FM Arp:Ratchet Chance 32nd")
```

Accepted names: `fmarp`, `midifmarp`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `mode` | Mode | `Repeat` `Up+8` `Walk` |
| `hold` | Hold | `true` / `false` |
| `noteOrder` | Order | `Note` `Played` |
| `rate` | Rate | `1/128` `1/64T` `1/64` `1/32T` `1/32` `1/16T` `1/16` `1/8T` `1/8` `1/4T` `1/4` `1/2T` `1/2` `1 bar` `4 beats` `2 bars` `4 bars` |
| `octaves` | Octaves | 1 .. 4 |
| `gate` | Gate | 1 .. 100 |
| `swing` | Swing | 0 .. 100 |
| `probability` | Chance | 0 .. 127 |

## Factory presets

Ratchet Chance 32nd · Repeat 16th · Up+8 Swing 16th · Walk 2 Octaves
