# Mallet Synth

An instrument (`.inst`), available.

```js
note("c3 e3 g3 b3").inst("Mallet Synth:Acoustic String")
```

Accepted names: `malletsynth`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `tune` | Tune | -48 .. 48 st |
| `decay` | Decay | 0.05 .. 20 s (log) |
| `material` | Material | -1 .. 1 |
| `brightness` | Bright | -1 .. 1 |
| `stiffness` | Stiffness | 0 .. 1 % |
| `noiseAmount` | Noise | 0 .. 1 % |
| `noiseColor` | Color | 100 .. 12000 Hz (log) |
| `noiseDecay` | N Decay | 1 .. 500 ms (log) |
| `volume` | Volume | 0 .. 1 % |
| `res1Fine` | Fine | -50 .. 50 ct |
| `res1KeyTo` | Key | -2 .. 2 % |
| `res1Radius` | Radius | 0 .. 1 % |
| `res1Ratio` | Ratio | 0 .. 1 % |
| `res1Inharmonics` | Inharm | -1 .. 1 |
| `res1Opening` | Opening | 0 .. 1 % |
| `res1Bleed` | Bleed | 0 .. 1 % |
| `res1DecayOnNoteOff` | Off Decay | 0 .. 1 % |
| `res2Tune` | Tune 2 | -48 .. 48 st |
| `res2Fine` | Fine 2 | -50 .. 50 ct |
| `res2KeyTo` | Key 2 | -2 .. 2 % |
| `res2Decay` | Decay 2 | 0.05 .. 20 s (log) |
| `res2Material` | Material 2 | -1 .. 1 |
| `res2Brightness` | Bright 2 | -1 .. 1 |
| `res2Radius` | Radius 2 | 0 .. 1 % |
| `res2Ratio` | Ratio 2 | 0 .. 1 % |
| `res2Inharmonics` | Inharm 2 | -1 .. 1 |
| `res2Opening` | Opening 2 | 0 .. 1 % |
| `res2Bleed` | Bleed 2 | 0 .. 1 % |
| `res2Volume` | Vol 2 | 0 .. 1 % |
| `polyphony` | Voices | 1 .. 12 |
| `malletVolume` | M Volume | 0 .. 1 % |
| `malletVelVol` | Vol<Vel | -1 .. 1 |
| `malletKeyVol` | Vol<Key | -1 .. 1 |
| `malletVelStiff` | Stiff<Vel | -1 .. 1 |
| `malletKeyStiff` | Stiff<Key | -1 .. 1 |
| `malletVelNoise` | Noise<Vel | -1 .. 1 |
| `malletKeyNoise` | Noise<Key | -1 .. 1 |
| `noiseVolume` | N Volume | 0 .. 1 % |
| `noiseVelVol` | N Vol<Vel | -1 .. 1 |
| `noiseKeyVol` | N Vol<Key | -1 .. 1 |
| `noiseFreq` | N Freq | 0 .. 1 % |
| `noiseVelFreq` | Frq<Vel | -1 .. 1 |
| `noiseKeyFreq` | Frq<Key | -1 .. 1 |
| `noiseEnvFreq` | Frq<Env | -1 .. 1 |
| `noiseQ` | N Q | 0 .. 1 % |
| `noiseAttack` | N Attack | 0 .. 1 % |
| `noiseEnvDecay` | N Dec | 0 .. 1 % |
| `noiseSustain` | N Sus | 0 .. 1 % |
| `noiseRelease` | N Rel | 0 .. 1 % |
| `lfo1Rate` | Rate | 0 .. 1 % |
| `lfo1SyncRate` | S Rate | 0 .. 21 |
| `lfo1KeyToRate` | Rate<Key | -2 .. 2 |
| `lfo1Phase` | Phase | 0 .. 360 deg |
| `lfo1Amount` | Amount | 0 .. 1 % |
| `lfo1VelToAmount` | Amt<Vel | -1 .. 1 |
| `lfo1Target1Amt` | Amt A | -1 .. 1 |
| `lfo1Target2Amt` | Amt B | -1 .. 1 |
| `lfo2Rate` | Rate | 0 .. 1 % |
| `lfo2SyncRate` | S Rate | 0 .. 21 |
| `lfo2KeyToRate` | Rate<Key | -2 .. 2 |
| `lfo2Phase` | Phase | 0 .. 360 deg |
| `lfo2Amount` | Amount | 0 .. 1 % |
| `lfo2VelToAmount` | Amt<Vel | -1 .. 1 |
| `lfo2Target1Amt` | Amt A | -1 .. 1 |
| `lfo2Target2Amt` | Amt B | -1 .. 1 |
| `pbRange` | PB Range | 0 .. 24 st |
| `res1Volume` | Gain 1 | 0 .. 1 % |
| `res1VelDecay` | Dec<Vel | -1 .. 1 |
| `res1KeyDecay` | Dec<Key | -1 .. 1 |
| `res1VelDamp` | Mat<Vel | -1 .. 1 |
| `res1KeyDamp` | Mat<Key | -1 .. 1 |
| `res1VelRadius` | Rad<Vel | -1 .. 1 |
| `res1KeyRadius` | Rad<Key | -1 .. 1 |
| `res1VelInharm` | Inh<Vel | -1 .. 1 |
| `res1VelOpening` | Open<Vel | -1 .. 1 |
| `res1StartTranspose` | Pitch Env | -1 .. 1 |
| `res1VelStart` | PEnv<Vel | -1 .. 1 |
| `res1StartTime` | PEnv Time | 0 .. 1 % |
| `res1RandomHit` | Hit Rnd | 0 .. 1 % |
| `res2VelDecay` | Dec<Vel | -1 .. 1 |
| `res2KeyDecay` | Dec<Key | -1 .. 1 |
| `res2VelDamp` | Mat<Vel | -1 .. 1 |
| `res2KeyDamp` | Mat<Key | -1 .. 1 |
| `res2VelRadius` | Rad<Vel | -1 .. 1 |
| `res2KeyRadius` | Rad<Key | -1 .. 1 |
| `res2VelInharm` | Inh<Vel | -1 .. 1 |
| `res2VelOpening` | Open<Vel | -1 .. 1 |
| `res2StartTranspose` | Pitch Env | -1 .. 1 |
| `res2VelStart` | PEnv<Vel | -1 .. 1 |
| `res2StartTime` | PEnv Time | 0 .. 1 % |
| `res2RandomHit` | Hit Rnd | 0 .. 1 % |
| `res2DecayOnNoteOff` | Off Dec 2 | 0 .. 1 % |
| `res1ListenL` | Pos. L | 0 .. 1 % |
| `res1ListenR` | Pos. R | 0 .. 1 % |
| `res1Pan` | Pan | -1 .. 1 |
| `res1KeyPan` | Pan<Key | -1 .. 1 |
| `res2ListenL` | Pos. L | 0 .. 1 % |
| `res2ListenR` | Pos. R | 0 .. 1 % |
| `res2Pan` | Pan | -1 .. 1 |
| `res2KeyPan` | Pan<Key | -1 .. 1 |
| `mwAmount1` | MW Amt A | -1 .. 1 |
| `mwAmount2` | MW Amt B | -1 .. 1 |
| `cpAmount1` | Press Amt A | -1 .. 1 |
| `cpAmount2` | Press Amt B | -1 .. 1 |
| `cc74Amount1` | Slide Amt A | -1 .. 1 |
| `cc74Amount2` | Slide Amt B | -1 .. 1 |
| `pbAmount1` | PB Amt A | -1 .. 1 |
| `modWheel` | Mod Wheel | 0 .. 1 % |
| `perNoteBendRange` | Note PB Range | 0 .. 48 st |
| `res1HitRaw` | Res 1 Hit | 0 .. 1 % |
| `res2HitRaw` | Res 2 Hit | 0 .. 1 % |

## Factory presets

Acoustic String · Air Of Dread · Balafon Bright · Balafon Brushed · Bell Airy · Bell Plate Long · Bells Attack · Bells Deep · Bells Glass · Bells Mellow · Bells Random · Digital String · E-Piano Dreamy · Glockenspiel Basic · Glockenspiel Detuned · High Pad · Marimba Classic · Marimba Glassy · Marimba Sustain · Music Box Basic · Music Box Beam · Music Box Slide · Noisy Pad · Resonant Casing · Slow Pad · Toy Piano Bells · Tube Harp · Vibes Basic · Vibes Bright · Vibes Mellow · Vibes Modulated · Xylophone Basic · Xylophone Dark
