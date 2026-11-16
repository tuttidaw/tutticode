# Subtractive Synth

An instrument (`.inst`), tested end to end.

```js
note("c3 e3 g3 b3").inst("Subtractive Synth:80s Tape")
```

Accepted names: `subtractivesynth`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `osc1Shape` | Shape | 0 .. 1 % |
| `osc2Octave` | Oct 2 | -2 .. 2 |
| `osc2Detune` | Detune | -700 .. 700 ct |
| `oscMix` | Mix | 0 .. 1 % |
| `cutoff` | Cutoff | 20 .. 20000 Hz (log) |
| `resonance` | Res | 0 .. 1 % |
| `drive` | Drive | 0 .. 1 % |
| `keyTrack` | Key Trk | 0 .. 1 % |
| `envToCutoff` | Env>Filt | -12 .. 12 oct |
| `lfoToCutoff` | LFO>Filt | -12 .. 12 oct |
| `lfoToPitch` | LFO>Pitch | -12 .. 12 st |
| `lfoRate` | LFO Rate | 0.01 .. 1700 Hz (log) |
| `attack` | Attack | 1 .. 5000 ms (log) |
| `decay` | Decay | 1 .. 10000 ms (log) |
| `sustain` | Sustain | 0 .. 1 % |
| `release` | Release | 1 .. 10000 ms (log) |
| `attack2` | Atk 2 | 1 .. 5000 ms (log) |
| `decay2` | Dec 2 | 1 .. 10000 ms (log) |
| `sustain2` | Sus 2 | 0 .. 1 % |
| `release2` | Rel 2 | 1 .. 10000 ms (log) |
| `glide` | Glide | 0 .. 2000 ms |
| `unisonDetune` | Uni Det | 0 .. 50 ct |
| `transpose` | Transp | -48 .. 48 st |
| `volume` | Volume | 0 .. 1 % |
| `osc1Gain` | Gain 1 | 0 .. 2 % |
| `osc2Gain` | Gain 2 | 0 .. 2 % |
| `noiseGain` | Noise | 0 .. 2 % |
| `hpFreq` | HP | 10 .. 20480 Hz |
| `osc1Octave` | Oct 1 | -2 .. 3 |
| `lfoRatio` | Ratio | 0.25 .. 16 |
| `lfoTime` | Time | 0.1 .. 60 s (log) |
| `lfoSyncedRate` | LFO Sync | 0 .. 27 |
| `lfoAmount` | LFO Amt | 0 .. 1 % |
| `velVol` | Vel<Vol | 0 .. 1 % |
| `driftDepth` | Drift | 0 .. 1 % |
| `pbRange` | PB Range | 0 .. 24 st |
| `cycRate` | Cyc Rate | 0.05 .. 1700 Hz (log) |
| `cycRatio` | Cyc Ratio | 0.25 .. 16 |
| `cycTime` | Cyc Time | 0.1 .. 60 s (log) |
| `cycSyncedRate` | Cyc Sync | 0 .. 27 |
| `cycMidPoint` | Tilt | 0 .. 1 % |
| `cycHold` | Hold | 0 .. 1 % |
| `pmAmt1` | Pitch Amt 1 | -1 .. 1 |
| `pmAmt2` | Pitch Amt 2 | -1 .. 1 |
| `shapeModAmt` | Shape Amt | -1 .. 1 |
| `m1Amt` | Mod 1 Amt | -1 .. 1 |
| `m2Amt` | Mod 2 Amt | -1 .. 1 |
| `m3Amt` | Mod 3 Amt | -1 .. 1 |
| `voiceDepth` | Voice Depth | 0 .. 1 % |
| `env1ToCutoff` | Env1>Filt | -12 .. 12 oct |
| `keyToCutoff` | Key>Filt | -21.4 .. 21.4 oct |
| `velToCutoff` | Vel>Filt | -21.4 .. 21.4 oct |
| `lfoAmtModAmt` | LFO Amt Mod | -1 .. 1 |
| `satAmt` | Saturation | 0 .. 4 |
| `noiseColor` | Noise Color | 0 .. 10 oct |
| `dualDetune` | Dual Detune | 0 .. 50 ct |
| `dualPan` | Dual Pan | 0 .. 1 |
| `lfoNoteAnchor` | LFO Anchor | 0 .. 2 |
| `pressureToCutoff` | Pressure>Filt | -24 .. 24 oct |
| `slideToCutoff` | Slide>Filt | -24 .. 24 oct |
| `resHpScale` | Res HP Scale | 0 .. 4 |
| `modWheel` | Mod Wheel | 0 .. 1 % |
| `wheelToCutoff` | Wheel>Filt | -24 .. 24 oct |
| `driftSerial` | Drift Serial | 0 .. 8388607 |

## Factory presets

80s Tape · AG Bass · Airfare Bass · Analog Ride · Analog Tom · Arcade Split · Atlas Keys · Beating Vibraphone · Bell Wave · Bellatine · Big Floor Stab · Bloom Pad · Chirp Pluck · Church Bell · Climb The Ladder · Clob Bass · Crunch Arcade · Darkened Strings · Deep Bass · Delta Polylogue · Dub Techno Bass · Dub Wob Bass · Echo Bells · Echo Pulse · Euphoria Lead · FM Four Pluck · FM Halfstep Clang · FM Halfstep Sticks · FM Halfstep Whirr · Floom · Floot Bass · Flutter Pad · Foglie Pad · Game Console · Gear Shift · Gentle Pulse Pad · Gentle Sixty · Glacial Tolerance · Grimer Bass · Hickory Bells · Hubus Lead · Kentucky Lead · Keynell · La String Machine · Light Frost · Lo-Fi Metal Hit · Lo-Fi Tech Tom · Majestic FM Bells · Metallic Flutter Pad · Metallic Strings · Metallic Swell Pad · Monday Morning · Morning Chorus Pad · Not Enough Bass · Numan Keystrike · Orbit Ray · Paddles Out · Passing By · Pitch Rise Strings · Prime Brass · Pulsating Pad · Ranger Bells · Rectangular Bliss · Retro Bell Keys · Rising Fog Pad · Rogue · Rubber Bell · Scape Shape Pad · Seventy Two Bass · Shark Pad · Slip Sliding · Slow Roll Strings · Sol Bass · Star Dust Strings · Star Talk Pad · Stereo Saw · Sweet Tooth · Synth Piano · Synth on Screen · Synthetic Xylophone · Tiny Echoes · Toy Helicopter · Toy Xylophone · Transistor Reeds · Trinidad Plucks · Vanguard Brass · Vintage Chorus Bass · Wave Pad · Zonk Pluck
