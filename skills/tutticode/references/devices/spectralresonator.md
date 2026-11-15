# Partials

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Partials:Init")
```

Accepted names: `partials`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `freqMode` | Note Mode | `true` / `false` |
| `freq` | Freq | 8.2 .. 2000 Hz (log) |
| `freqNote` | Note | 0 .. 96 |
| `harmonics` | Harmonics | 1 .. 256 (log) |
| `stretch` | Stretch | -1 .. 1 % |
| `shift` | Shift | -48 .. 48 st |
| `decay` | Decay | 0.001 .. 20 s (log) |
| `hfDamp` | HF Damp | 0 .. 1 % |
| `lfDamp` | LF Damp | 0 .. 1 % |
| `unison` | Unison | `1` `2` `4` `8` |
| `unisonAmount` | Uni. Amt | 0 .. 1 % |
| `inputSend` | Input Send | -24 .. 24 dB |
| `dryWet` | Dry/Wet | 0 .. 1 % |
| `pitchMode` | Pitch Mode | `Internal` `MIDI` |
| `transpose` | Transp. | -48 .. 48 st |
| `transposeScaleDegrees` | SD Shift | -28 .. 28 sd |
| `polyMode` | Mono/Poly | `Mono` `Poly` |
| `polyphony` | Polyphony | `2` `4` `8` `16` |
| `midiGate` | MIDI Gate | `true` / `false` |
| `glide` | Glide | 0 .. 20 |
| `pbRange` | PB | 0 .. 24 st |
| `modMode` | Mod Mode | `None` `Chorus` `Wander` `Granular` |
| `modRate` | Mod Rate | 0 .. 1 % |
| `pitchMod` | Pch. Mod | 0 .. 4 st |

## Factory presets

Init · Long Drone · Metallic Ping · Square Bells · Sub Hum · Vowel Pad
