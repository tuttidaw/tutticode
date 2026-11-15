# Auto Shift

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Auto Shift:Hard Tune")
```

Accepted names: `autoshift`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `correctStrength` | Correct | 0 .. 1 |
| `correctSmooth` | Smooth | 0 .. 1 |
| `pitchShift` | Pitch | -12 .. 12 st |
| `pitchFine` | Fine | -100 .. 100 ct |
| `formantShift` | Formant | -1 .. 1 oct |
| `formantFollow` | F.Follow | 0 .. 1 |
| `vibratoRate` | Vib Rate | 2 .. 15 Hz |
| `vibratoDepth` | Vib Depth | 0 .. 2 |
| `lfoRate` | LFO Rate | 0.01 .. 20 Hz |
| `lfoToPitch` | LFO>Pitch | 0 .. 6 |
| `lfoToFormant` | LFO>Form | -1 .. 1 |
| `lfoToVolume` | LFO>Vol | 0 .. 1 |
| `lfoToPan` | LFO>Pan | 0 .. 1 |
| `gainDb` | Gain | -24 .. 24 dB |
| `inputGainDb` | Input Gain | -24 .. 24 dB |
| `dryWet` | Dry/Wet | 0 .. 1 |
| `smoothingTimeMs` | Smooth Time | 0 .. 200 ms |
| `shiftScaleDegrees` | Scale Shift | -12 .. 12 sd |
| `lfoDelay` | LFO Delay | 0 .. 1.5 s |
| `lfoAttack` | LFO Attack | 0 .. 2 s |
| `vibratoAttack` | Vibrato Fade In | 0 .. 2 s |
| `midiGlide` | MIDI Glide | 0 .. 2 s |
| `midiAttack` | MIDI Attack | 0 .. 1 s |
| `midiRelease` | MIDI Release | 0 .. 5 s |
| `midiPitchBendRange` | PB Range | 0 .. 48 st |
| `modPitchAmount` | MIDI>Pitch | 0 .. 12 st |
| `modFormantAmount` | MIDI>Form | -1 .. 1 |
| `modVolumeAmount` | MIDI>Vol | 0 .. 1 |
| `modPanAmount` | MIDI>Pan | 0 .. 1 |
| `quantizerActive` | Quantizer | `true` / `false` |
| `quantizerSmooth` | Smooth On | `true` / `false` |
| `useScale` | Use Song Scale | `true` / `false` |
| `lfoEnabled` | LFO On | `true` / `false` |
| `lfoRetrigger` | LFO Retrigger | `true` / `false` |
| `lfoSync` | LFO Sync | `true` / `false` |
| `vibratoHumanize` | Vib Natural | `true` / `false` |
| `midiEnabled` | MIDI On | `true` / `false` |
| `midiEnvelope` | MIDI Envelope | `true` / `false` |
| `midiLatch` | Note Latch | `true` / `false` |
| `root` | Root | `C` `C#` `D` `D#` `E` `F` `F#` `G` `G#` `A` `A#` `B` |
| `internalScale` | Scale | `Custom` `Major` `Minor` `Dorian` `Mixolydian` `Lydian` `Phrygian` `Locrian` `Whole Tone` `Half-whole Dim.` `Whole-half Dim.` `Minor Blues` `Minor Pentatonic` `Major Pentatonic` `Harmonic Minor` `Harmonic Major` `Dorian #4` `Phrygian Dominant` `Melodic Minor` `Lydian Augmented` `Lydian Dominant` `Super Locrian` `8-Tone Spanish` `Bhairav` `Hungarian Minor` `Hirajoshi` `In-Sen` `Iwato` `Kumoi` `Pelog Selisir` `Pelog Tembung` `Messiaen 3` `Messiaen 4` `Messiaen 5` `Messiaen 6` `Messiaen 7` |
| `inputType` | Input Type | `Bass` `Mid` `High` |
| `lfoWaveform` | LFO Shape | `Sine` `Triangle` `Shark Tooth (Legacy)` `Saw Up` `Saw Down` `Square` `Random` `Wander (Legacy)` `Random S&H` `Triangle 8` `Triangle 16` |
| `lfoSyncedRate` | LFO Synced Rate | `8/1` `6/1` `4/1` `3/1` `2/1` `1/1 D` `1/1` `1/2 D` `1/2` `1/4 D` `1/4` `1/8 D` `1/4 T` `1/8` `1/16 D` `1/8 T` `1/16` `1/32 D` `1/16 T` `1/32` `1/32 T` `1/64` |
| `modPitchSource` | Pitch Mod Src | `None` `Velocity` `Pressure` `Mod Wheel` `Pitch Bend` `Note PB` `Slide` |
| `modFormantSource` | Formant Mod Src | `None` `Velocity` `Pressure` `Mod Wheel` `Pitch Bend` `Note PB` `Slide` |
| `modVolumeSource` | Volume Mod Src | `None` `Velocity` `Pressure` `Mod Wheel` `Pitch Bend` `Note PB` `Slide` |
| `modPanSource` | Pan Mod Src | `None` `Velocity` `Pressure` `Mod Wheel` `Pitch Bend` `Note PB` `Slide` |

## Factory presets

Hard Tune · Init · Octave Up + Formant · Vibrato Wobble
