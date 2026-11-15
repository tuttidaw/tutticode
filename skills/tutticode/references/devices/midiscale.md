# Scale

A MIDI effect (`.midifx`), tested end to end.

```js
note("c3 e3 g3 b3").midifx("Scale:Dorian")
```

Accepted names: `scale`, `midiscale`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `base` | Base | `C` `C#` `D` `D#` `E` `F` `F#` `G` `G#` `A` `A#` `B` |
| `internalScale` | Scale Name | `Custom` `Major` `Minor` `Dorian` `Mixolydian` `Lydian` `Phrygian` `Locrian` `Whole Tone` `Half-whole Dim.` `Whole-half Dim.` `Minor Blues` `Minor Pentatonic` `Major Pentatonic` `Harmonic Minor` `Harmonic Major` `Dorian #4` `Phrygian Dominant` `Melodic Minor` `Lydian Augmented` `Lydian Dominant` `Super Locrian` `8-Tone Spanish` `Bhairav` `Hungarian Minor` `Hirajoshi` `In-Sen` `Iwato` `Kumoi` `Pelog Selisir` `Pelog Tembung` `Messiaen 3` `Messiaen 4` `Messiaen 5` `Messiaen 6` `Messiaen 7` |
| `transpose` | Transpose | -36 .. 36 |
| `fold` | Fold | `true` / `false` |
| `lowest` | Lowest | 0 .. 127 |
| `range` | Range | 0 .. 128 |
| `useCurrentScale` | Use Current Scale | `true` / `false` |

## Factory presets

Dorian · Harmonic Minor · Minor · Pentatonic Minor
