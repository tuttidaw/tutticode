# Chord

A MIDI effect (`.midifx`), tested end to end.

```js
note("c3 e3 g3 b3").midifx("Chord:Fifth Chord")
```

Accepted names: `chord`, `midichord`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `shift1` | Shift 1 | -36 .. 36 |
| `shift2` | Shift 2 | -36 .. 36 |
| `shift3` | Shift 3 | -36 .. 36 |
| `shift4` | Shift 4 | -36 .. 36 |
| `shift5` | Shift 5 | -36 .. 36 |
| `shift6` | Shift 6 | -36 .. 36 |
| `shiftScaleDegrees1` | Shift 1 Degrees | -36 .. 36 |
| `shiftScaleDegrees2` | Shift 2 Degrees | -36 .. 36 |
| `shiftScaleDegrees3` | Shift 3 Degrees | -36 .. 36 |
| `shiftScaleDegrees4` | Shift 4 Degrees | -36 .. 36 |
| `shiftScaleDegrees5` | Shift 5 Degrees | -36 .. 36 |
| `shiftScaleDegrees6` | Shift 6 Degrees | -36 .. 36 |
| `velocity1` | Velocity 1 | 0.01 .. 2 |
| `velocity2` | Velocity 2 | 0.01 .. 2 |
| `velocity3` | Velocity 3 | 0.01 .. 2 |
| `velocity4` | Velocity 4 | 0.01 .. 2 |
| `velocity5` | Velocity 5 | 0.01 .. 2 |
| `velocity6` | Velocity 6 | 0.01 .. 2 |
| `chance1` | Chance 1 | 0 .. 1 % |
| `chance2` | Chance 2 | 0 .. 1 % |
| `chance3` | Chance 3 | 0 .. 1 % |
| `chance4` | Chance 4 | 0 .. 1 % |
| `chance5` | Chance 5 | 0 .. 1 % |
| `chance6` | Chance 6 | 0 .. 1 % |
| `strum` | Strum | -400 .. 400 ms |
| `strumTension` | Tension | -1 .. 1 % |
| `crescendo` | Crescendo | -1 .. 1 % |
| `useCurrentScale` | Use Current Scale | `true` / `false` |

## Factory presets

Fifth Chord · Major 7 Chord · Major Triad · Minor 7 Chord · Minor Triad · Octave Doubler
