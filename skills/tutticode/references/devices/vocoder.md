# Vocoder

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Vocoder:Init")
```

Accepted names: `vocoder`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `bands` | Bands | `4` `5` `6` `7` `8` `9` `10` `11` `12` `13` `14` `15` `16` `17` `18` `19` `20` `21` `22` `23` `24` `25` `26` `27` `28` `29` `30` `31` `32` `33` `34` `35` `36` `37` `38` `39` `40` |
| `bandMinHz` | Range Low | 20 .. 2000 Hz (log) |
| `bandMaxHz` | Range High | 200 .. 18000 Hz (log) |
| `bandWidth` | BW | 0.1 .. 2 (log) |
| `retro` | Retro | `true` / `false` |
| `gate` | Gate | -60 .. 12 dB |
| `depth` | Depth | 0 .. 2 |
| `attack` | Attack | 1 .. 1000 ms (log) |
| `release` | Release | 10 .. 30000 ms (log) |
| `channelMode` | Mono/Stereo | `Mono` `Stereo` `L/R` |
| `formant` | Formant | -36 .. 36 st |
| `enhance` | Enhance | `true` / `false` |
| `unvoiced` | Unvoiced | 0 .. 1 |
| `sens` | Sens. | 0 .. 1 |
| `slow` | Slow | `true` / `false` |
| `noiseRate` | Noise Rate | 100 .. 20000 Hz (log) |
| `noiseCrackle` | Noise Density | 0 .. 1 |
| `pitchLow` | Pitch Low | 30 .. 300 Hz (log) |
| `pitchHigh` | Pitch High | 300 .. 3000 Hz (log) |
| `oscPitch` | Pitch | -36 .. 36 st |
| `oscWaveform` | Waveform | `Saw` `Pulse 1` `Pulse 2` `Pulse 3` |
| `gainDb` | Level | -24 .. 24 dB |
| `dryWet` | Dry/Wet | 0 .. 1 |

## Factory presets

Init · Robot Voice · Self Vocode · Talkbox Lead · Whisper Choir
