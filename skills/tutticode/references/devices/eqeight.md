# EQ Eight

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("EQ Eight:Air Lift")
```

Accepted names: `eqeight`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `globalGain` | Output | -12 .. 12 dB |
| `scale` | Scale | -2 .. 2 % |
| `adaptiveQ` | Adaptive Q | `true` / `false` |
| `bands.0.freq` | A 1 Freq | 10 .. 22000 Hz (log) |
| `bands.0.gain` | A 1 Gain | -15 .. 15 dB |
| `bands.0.q` | A 1 Q | 0.1 .. 18 (log) |
| `bands.1.freq` | A 2 Freq | 10 .. 22000 Hz (log) |
| `bands.1.gain` | A 2 Gain | -15 .. 15 dB |
| `bands.1.q` | A 2 Q | 0.1 .. 18 (log) |
| `bands.2.freq` | A 3 Freq | 10 .. 22000 Hz (log) |
| `bands.2.gain` | A 3 Gain | -15 .. 15 dB |
| `bands.2.q` | A 3 Q | 0.1 .. 18 (log) |
| `bands.3.freq` | A 4 Freq | 10 .. 22000 Hz (log) |
| `bands.3.gain` | A 4 Gain | -15 .. 15 dB |
| `bands.3.q` | A 4 Q | 0.1 .. 18 (log) |
| `bands.4.freq` | A 5 Freq | 10 .. 22000 Hz (log) |
| `bands.4.gain` | A 5 Gain | -15 .. 15 dB |
| `bands.4.q` | A 5 Q | 0.1 .. 18 (log) |
| `bands.5.freq` | A 6 Freq | 10 .. 22000 Hz (log) |
| `bands.5.gain` | A 6 Gain | -15 .. 15 dB |
| `bands.5.q` | A 6 Q | 0.1 .. 18 (log) |
| `bands.6.freq` | A 7 Freq | 10 .. 22000 Hz (log) |
| `bands.6.gain` | A 7 Gain | -15 .. 15 dB |
| `bands.6.q` | A 7 Q | 0.1 .. 18 (log) |
| `bands.7.freq` | A 8 Freq | 10 .. 22000 Hz (log) |
| `bands.7.gain` | A 8 Gain | -15 .. 15 dB |
| `bands.7.q` | A 8 Q | 0.1 .. 18 (log) |
| `bandsB.0.freq` | B 1 Freq | 10 .. 22000 Hz (log) |
| `bandsB.0.gain` | B 1 Gain | -15 .. 15 dB |
| `bandsB.0.q` | B 1 Q | 0.1 .. 18 (log) |
| `bandsB.1.freq` | B 2 Freq | 10 .. 22000 Hz (log) |
| `bandsB.1.gain` | B 2 Gain | -15 .. 15 dB |
| `bandsB.1.q` | B 2 Q | 0.1 .. 18 (log) |
| `bandsB.2.freq` | B 3 Freq | 10 .. 22000 Hz (log) |
| `bandsB.2.gain` | B 3 Gain | -15 .. 15 dB |
| `bandsB.2.q` | B 3 Q | 0.1 .. 18 (log) |
| `bandsB.3.freq` | B 4 Freq | 10 .. 22000 Hz (log) |
| `bandsB.3.gain` | B 4 Gain | -15 .. 15 dB |
| `bandsB.3.q` | B 4 Q | 0.1 .. 18 (log) |
| `bandsB.4.freq` | B 5 Freq | 10 .. 22000 Hz (log) |
| `bandsB.4.gain` | B 5 Gain | -15 .. 15 dB |
| `bandsB.4.q` | B 5 Q | 0.1 .. 18 (log) |
| `bandsB.5.freq` | B 6 Freq | 10 .. 22000 Hz (log) |
| `bandsB.5.gain` | B 6 Gain | -15 .. 15 dB |
| `bandsB.5.q` | B 6 Q | 0.1 .. 18 (log) |
| `bandsB.6.freq` | B 7 Freq | 10 .. 22000 Hz (log) |
| `bandsB.6.gain` | B 7 Gain | -15 .. 15 dB |
| `bandsB.6.q` | B 7 Q | 0.1 .. 18 (log) |
| `bandsB.7.freq` | B 8 Freq | 10 .. 22000 Hz (log) |
| `bandsB.7.gain` | B 8 Gain | -15 .. 15 dB |
| `bandsB.7.q` | B 8 Q | 0.1 .. 18 (log) |

## Factory presets

Air Lift · Low Cut · Telephone
