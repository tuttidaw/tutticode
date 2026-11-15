# Drum Synth

An instrument (`.inst`), available.

```js
note("c3 e3 g3 b3").inst("Drum Synth:Clap DS")
```

Accepted names: `drumsynth`.

## Sound types and models

The constants `soundType` (a name below) and `model` (its index; default 0) pick the model and load its default settings, and the other params of the voice go over them. Each model gives `colorAmount` and `extra1`..`extra3` its own meaning. A preset named after the sound type and model does the same: `"Drum Synth:Snare TR"`.

- `Kick`: `0` DS (colorAmount = Overtone, extra1 = Envelope, extra2 = Drive, extra3 = Attack); `1` 78 (colorAmount = Drive, extra1 = Sweep, extra2 = Click); `2` 90x (colorAmount = Drive, extra1 = Sweep, extra2 = Attack); `3` FM (colorAmount = FM, extra1 = Ratio, extra2 = Sweep)
- `Snare`: `0` DS (colorAmount = Color, extra1 = Tone, extra2 = Filter); `1` TR (colorAmount = Snappy, extra1 = Tone, extra2 = Body); `2` Acoustic (colorAmount = Stick, extra1 = Wires, extra2 = Ring); `3` Modal (colorAmount = Bright, extra1 = Inharmonic)
- `Rimshot`: `0` TR (colorAmount = Drive, extra1 = Hollow); `1` Wood (colorAmount = Click, extra1 = Drop); `2` Zapp (colorAmount = Depth, extra1 = Time)
- `Hihat`: `0` DS (colorAmount = Tone, extra1 = Pitch, extra2 = Attack, extra3 = Pink); `1` TR (colorAmount = Tone, extra1 = Noise); `2` Digi (colorAmount = Crush, extra1 = Bits)
- `Clap`: `0` DS (colorAmount = Tone, extra1 = Tail, extra2 = Sloppy, extra3 = Spread); `1` TR (colorAmount = Tone, extra1 = Spread, extra2 = Tail); `2` Guiro (colorAmount = Tone, extra1 = Rate)
- `Tom`: `0` DS (colorAmount = Color, extra1 = Tone, extra2 = Bend); `1` 80x (colorAmount = Noise, extra1 = Sweep); `2` 90x (colorAmount = Drive, extra1 = Sweep)
- `Percussion`: `0` DS (colorAmount = Filter, extra1 = Noise, extra2 = Tone 1, extra3 = Tone 2); `1` Simple Drum (colorAmount = Noise, extra1 = Shape, extra2 = Sweep); `2` Bongo (colorAmount = Position, extra1 = Bend); `3` Timpani (colorAmount = Mallet, extra1 = Hit); `4` Metallic (colorAmount = Mallet, extra1 = Inharmonic)
- `Cymbal`: `0` DS (colorAmount = Tone, extra1 = Pitch); `1` TR (colorAmount = Tone, extra1 = Shimmer); `2` Ride (colorAmount = Air, extra1 = Bell)
- `FX`: `0` DS (colorAmount = Tone, extra1 = Mod, extra2 = Feedback, extra3 = Amount); `1` Cowbell (colorAmount = Tone); `2` Spark (colorAmount = Ring, extra1 = Density); `3` Liquid (colorAmount = Rise, extra1 = Glide)

## Parameters

| Key | Live label | Values |
|---|---|---|
| `tune` | Tune | -24 .. 24 st |
| `transpose` | Transpose | -48 .. 48 st |
| `decay` | Decay | 0 .. 100 % |
| `colorAmount` | Color | 0 .. 100 % |
| `volume` | Volume | -70 .. 6 dB |
| `velVol` | Vel > Vol | 0 .. 100 % |
| `velTimbre` | Vel > Timbre | -100 .. 100 % |
| `slideVol` | Slide > Vol | 0 .. 100 % |
| `slideTimbre` | Slide > Timbre | -100 .. 100 % |
| `extra1` | Extra 1 | 0 .. 100 % |
| `extra2` | Extra 2 | 0 .. 100 % |
| `extra3` | Extra 3 | 0 .. 100 % |
| `soundType` | Sound Type | `Kick` `Snare` `Rimshot` `Hihat` `Clap` `Tom` `Percussion` `Cymbal` `FX` (constant only) |
| `model` | Model | 0 .. 4 (constant only) |

## Factory presets

Clap DS · Clap Guiro · Clap TR · Cymbal DS · Cymbal Ride · Cymbal TR · FX Cowbell · FX DS · FX Liquid · FX Spark · Hihat DS · Hihat Digi · Hihat TR · Kick 78 · Kick 90x · Kick DS · Kick FM · Percussion Bongo · Percussion DS · Percussion Metallic · Percussion Simple Drum · Percussion Timpani · Rimshot TR · Rimshot Wood · Rimshot Zapp · Snare Acoustic · Snare DS · Snare Modal · Snare TR · Tom 80x · Tom 90x · Tom DS
