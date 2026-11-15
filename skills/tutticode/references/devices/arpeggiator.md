# Arpeggiator

A MIDI effect (`.midifx`), tested end to end.

```js
note("c3 e3 g3 b3").midifx("Arpeggiator:Classic UpDown 8th")
```

Accepted names: `arpeggiator`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `style` | Style | `Up` `Down` `UpDown` `DownUp` `Up & Down` `Down & Up` `Converge` `Diverge` `Con & Diverge` `Pinky Up` `Pinky UpDown` `Thumb Up` `Thumb UpDown` `Play Order` `Chord Trigger` `Random` `Random Other` `Random Once` |
| `hold` | Hold | `true` / `false` |
| `groove` | Groove | `Straight` `Swing 8` `Swing 16` `Swing 32` |
| `sync` | Sync | `true` / `false` |
| `rate` | Rate | `1/128` `1/64T` `1/64` `1/32T` `1/32` `1/16T` `1/16` `1/8T` `1/8` `1/4T` `1/4` `1/2T` `1/2` `1 bar` |
| `freeRate` | Free Rate | 10 .. 1000 ms (log) |
| `gate` | Gate | 1 .. 200 |
| `retrigger` | Retrigger | `Off` `Note` `Beat` |
| `transposeMode` | Transpose Mode | `Chromatic` `Major` `Minor` `Dorian` `Mixolydian` `Lydian` `Phrygian` `Locrian` `Whole Tone` `Half-whole Dim.` `Whole-half Dim.` `Minor Blues` `Minor Pentatonic` `Major Pentatonic` `Harmonic Minor` `Harmonic Major` `Dorian #4` `Phrygian Dominant` `Melodic Minor` `Lydian Augmented` `Lydian Dominant` `Super Locrian` `8-Tone Spanish` `Bhairav` `Hungarian Minor` `Hirajoshi` `In-Sen` `Iwato` `Kumoi` `Pelog Selisir` `Pelog Tembung` `Messiaen 3` `Messiaen 4` `Messiaen 5` `Messiaen 6` `Messiaen 7` |
| `transposeKey` | Transpose Key | `C` `C#` `D` `D#` `E` `F` `F#` `G` `G#` `A` `A#` `B` |
| `useCurrentScale` | Use Current Scale | `true` / `false` |
| `transposeSteps` | Steps | 0 .. 8 |
| `transposeDistance` | Distance | -24 .. 24 |
| `patternOffset` | Offset | -8 .. 8 |
| `repeats` | Repeats | 0 .. 16 |
| `velocitySwitch` | Velocity | `true` / `false` |
| `retriggerVelocity` | Vel Retrigger | `true` / `false` |
| `velocityDecay` | Decay | 10 .. 60000 ms (log) |
| `velocityTarget` | Target | 0 .. 127 |

## Factory presets

Classic UpDown 8th · Random 16th · Up 16th
