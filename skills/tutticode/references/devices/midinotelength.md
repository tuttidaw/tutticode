# Note Length

A MIDI effect (`.midifx`), tested end to end.

```js
note("c3 e3 g3 b3").midifx("Note Length:16th Notes")
```

Accepted names: `notelength`, `midinotelength`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `triggerOff` | Note Off | `true` / `false` |
| `latch` | Latch | `true` / `false` |
| `sync` | Sync | `true` / `false` |
| `gate` | Gate | 1 .. 200 |
| `syncedLength` | Length | `1/64T` `1/64` `1/32T` `1/32` `1/16T` `1/16` `1/8T` `1/8` `1/4T` `1/4` |
| `timeLength` | Time Length | 10 .. 60000 ms (log) |
| `balance` | Rel Vel | 0 .. 100 |
| `decayTime` | Decay | 10 .. 60000 ms (log) |
| `decayKeyScale` | Key Scale | -1 .. 1 |

## Factory presets

16th Notes · Note Off · Staccato · Ten Milliseconds
