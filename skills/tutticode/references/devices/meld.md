# Twine

An instrument (`.inst`), available.

```js
note("c3 e3 g3 b3").inst("Twine:Acid Kick")
```

Accepted names: `twine`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `aMacro1` | A Macro 1 | 0 .. 1 % |
| `aMacro2` | A Macro 2 | 0 .. 1 % |
| `aOctave` | A Oct | -3 .. 3 |
| `aScaleDegrees` | A Degrees | -48 .. 48 sd |
| `aTranspose` | A Transp | -12 .. 12 st |
| `aDetune` | A Det | -50 .. 50 ct |
| `aLevel` | A Level | 0 .. 1 % |
| `aCutoff` | A Cutoff | 20 .. 20000 Hz (log) |
| `aRes` | A Res | 0 .. 1 % |
| `aEnvToCutoff` | A Env>F | -10 .. 10 oct |
| `aAttack` | A Atk | 1 .. 20000 ms (log) |
| `aDecay` | A Dec | 1 .. 20000 ms (log) |
| `aSustain` | A Sus | 0 .. 1 % |
| `aRelease` | A Rel | 1 .. 20000 ms (log) |
| `aFDecay` | A F Dec | 1 .. 20000 ms (log) |
| `aFSustain` | A F Sus | 0 .. 1 % |
| `bMacro1` | B Macro 1 | 0 .. 1 % |
| `bMacro2` | B Macro 2 | 0 .. 1 % |
| `bOctave` | B Oct | -3 .. 3 |
| `bScaleDegrees` | B Degrees | -48 .. 48 sd |
| `bTranspose` | B Transp | -12 .. 12 st |
| `bDetune` | B Det | -50 .. 50 ct |
| `bLevel` | B Level | 0 .. 1 % |
| `bCutoff` | B Cutoff | 20 .. 20000 Hz (log) |
| `bRes` | B Res | 0 .. 1 % |
| `bEnvToCutoff` | B Env>F | -10 .. 10 oct |
| `bAttack` | B Atk | 1 .. 20000 ms (log) |
| `bDecay` | B Dec | 1 .. 20000 ms (log) |
| `bSustain` | B Sus | 0 .. 1 % |
| `bRelease` | B Rel | 1 .. 20000 ms (log) |
| `bFDecay` | B F Dec | 1 .. 20000 ms (log) |
| `bFSustain` | B F Sus | 0 .. 1 % |
| `drive` | Drive | 0 .. 1 % |
| `lfoRate` | LFO Rate | 0.01 .. 30 Hz (log) |
| `lfoToPitch` | LFO>Pitch | -12 .. 12 st |
| `lfoToCutoff` | LFO>Filt | -6 .. 6 oct |
| `lfoToMacro` | LFO>Macro | -1 .. 1 |
| `transpose` | Transp | -48 .. 48 st |
| `volume` | Volume | 0 .. 1 % |
| `aFilterMorph` | A L-B-H-N | 0 .. 3 |
| `aFilterDrive` | A F Drive | 1 .. 16 |
| `aTone` | A Tone | -1 .. 1 |
| `aVolumeDb` | A Vol | -50 .. 24 dB |
| `aSlopeA` | A A Slope | -1 .. 1 |
| `aSlopeD` | A D Slope | -1 .. 1 |
| `aSlopeR` | A R Slope | -1 .. 1 |
| `aFAttack` | A F Atk | 0 .. 20000 ms |
| `aFRelease` | A F Rel | 1 .. 20000 ms (log) |
| `aModInitial` | A Initial | 0 .. 1 % |
| `aModPeak` | A Peak | 0 .. 1 % |
| `aModFinal` | A Final | 0 .. 1 % |
| `aFSlopeA` | A FA Slope | -1 .. 1 |
| `aFSlopeD` | A FD Slope | -1 .. 1 |
| `aFSlopeR` | A FR Slope | -1 .. 1 |
| `aLfo1Rate` | A LFO1 Rate | 0.01 .. 200 Hz (log) |
| `aLfo1Phase` | A LFO1 Ph | 0 .. 1 % |
| `aLfo1Pitch` | A LFO1>Pit | -60 .. 60 st |
| `aLfo1Filter` | A LFO1>Flt | -10 .. 10 oct |
| `aLfo1Macro1` | A LFO1>M1 | -1 .. 1 |
| `aLfo1Macro2` | A LFO1>M2 | -1 .. 1 |
| `aLfo2Rate` | A LFO2 Rate | 0.01 .. 200 Hz (log) |
| `aLfo2Phase` | A LFO2 Ph | 0 .. 1 % |
| `aLfo2Pitch` | A LFO2>Pit | -60 .. 60 st |
| `aLfo2Filter` | A LFO2>Flt | -10 .. 10 oct |
| `aLfo2Macro1` | A LFO2>M1 | -1 .. 1 |
| `aLfo2Macro2` | A LFO2>M2 | -1 .. 1 |
| `bFilterMorph` | B L-B-H-N | 0 .. 3 |
| `bFilterDrive` | B F Drive | 1 .. 16 |
| `bTone` | B Tone | -1 .. 1 |
| `bVolumeDb` | B Vol | -50 .. 24 dB |
| `bSlopeA` | B A Slope | -1 .. 1 |
| `bSlopeD` | B D Slope | -1 .. 1 |
| `bSlopeR` | B R Slope | -1 .. 1 |
| `bFAttack` | B F Atk | 0 .. 20000 ms |
| `bFRelease` | B F Rel | 1 .. 20000 ms (log) |
| `bModInitial` | B Initial | 0 .. 1 % |
| `bModPeak` | B Peak | 0 .. 1 % |
| `bModFinal` | B Final | 0 .. 1 % |
| `bFSlopeA` | B FA Slope | -1 .. 1 |
| `bFSlopeD` | B FD Slope | -1 .. 1 |
| `bFSlopeR` | B FR Slope | -1 .. 1 |
| `bLfo1Rate` | B LFO1 Rate | 0.01 .. 200 Hz (log) |
| `bLfo1Phase` | B LFO1 Ph | 0 .. 1 % |
| `bLfo1Pitch` | B LFO1>Pit | -60 .. 60 st |
| `bLfo1Filter` | B LFO1>Flt | -10 .. 10 oct |
| `bLfo1Macro1` | B LFO1>M1 | -1 .. 1 |
| `bLfo1Macro2` | B LFO1>M2 | -1 .. 1 |
| `bLfo2Rate` | B LFO2 Rate | 0.01 .. 200 Hz (log) |
| `bLfo2Phase` | B LFO2 Ph | 0 .. 1 % |
| `bLfo2Pitch` | B LFO2>Pit | -60 .. 60 st |
| `bLfo2Filter` | B LFO2>Flt | -10 .. 10 oct |
| `bLfo2Macro1` | B LFO2>M1 | -1 .. 1 |
| `bLfo2Macro2` | B LFO2>M2 | -1 .. 1 |
| `glideTime` | Glide | 0 .. 20 s |
| `bGlideTime` | B Glide | 0 .. 20 s |
| `spread` | Spread | 0 .. 1 % |
| `voices` | Voices | 1 .. 12 |
| `stackVoices` | Stack | 1 .. 4 |
| `stackDetune` | Stack Det | 0 .. 1 % |
| `pbRange` | PB Range | 0 .. 24 st |
| `velToVol` | Vol Vel | 0 .. 2 % |
| `aEnvToPitch` | A Env>Pit | -60 .. 60 st |
| `bEnvToPitch` | B Env>Pit | -60 .. 60 st |
| `limDriveDb` | Lim Drive | 0 .. 60 dB |
| `limCeil` | Lim Ceil | 0 .. 4 |
| `aFxEnvVol` | A FxEnv>Vol | -2 .. 2 |
| `aFxEnvCut` | A FxEnv>Flt | -10 .. 10 oct |
| `aFxEnvTau` | A FxEnv Tau | 0 .. 120 s |
| `bFxEnvVol` | B FxEnv>Vol | -2 .. 2 |
| `bFxEnvCut` | B FxEnv>Flt | -10 .. 10 oct |
| `bFxEnvTau` | B FxEnv Tau | 0 .. 120 s |
| `aLfo1Quant` | A LFO1 Qnt | 0 .. 256 |
| `bLfo1Quant` | B LFO1 Qnt | 0 .. 256 |
| `aFxT1Type` | A FX1 Type | 0 .. 18 |
| `aFxT1Val` | A FX1 Val | -120 .. 120 |
| `aFxT2Type` | A FX2 Type | 0 .. 18 |
| `aFxT2Val` | A FX2 Val | -120 .. 120 |
| `bFxT1Type` | B FX1 Type | 0 .. 18 |
| `bFxT1Val` | B FX1 Val | -120 .. 120 |
| `bFxT2Type` | B FX2 Type | 0 .. 18 |
| `bFxT2Val` | B FX2 Val | -120 .. 120 |
| `aXTapM1` | A X>M1 | -4 .. 4 |
| `aXTapM2` | A X>M2 | -4 .. 4 |
| `aXTapCut` | A X>Flt | -10 .. 10 oct |
| `bXTapM1` | B X>M1 | -4 .. 4 |
| `bXTapM2` | B X>M2 | -4 .. 4 |
| `bXTapCut` | B X>Flt | -10 .. 10 oct |
| `aFilterModalDry` | A Res Dry | 0 .. 4 |
| `bFilterModalDry` | B Res Dry | 0 .. 4 |
| `aLfo1Gm2Lfo2` | A L2>Gm2 | -2 .. 2 |
| `bLfo1Gm2Lfo2` | B L2>Gm2 | -2 .. 2 |
| `aDecayCurve` | A Dec Crv | -8 .. 8 |
| `bDecayCurve` | B Dec Crv | -8 .. 8 |
| `aRelCurve` | A Rel Crv | -8 .. 8 |
| `bRelCurve` | B Rel Crv | -8 .. 8 |
| `aAttackCurve` | A Atk Crv | -7.5 .. 7.5 |
| `bAttackCurve` | B Atk Crv | -7.5 .. 7.5 |
| `chipRateHz` | Chip Rate | 0 .. 200 Hz |
| `chipPitchSpan` | Chip Pitch | 0 .. 48 st |
| `chipDutyDepth` | Chip PWM | 0 .. 0.49 |
| `chipGate` | Chip Gate | 0 .. 1 % |
| `fEnvCurve` | F Env Curve | 0 .. 15 |
| `chipDcHz` | Chip DC Cut | 0 .. 100 Hz |
| `euclidStepsMin` | Euclid Minimum | 2 .. 16 |
| `euclidStepsSpan` | Euclid Span | 0 .. 16 |
| `noisyRoughFold` | Rough Fold | 0 .. 8 |
| `noisyDcHz` | Noisy DC Cut | 0 .. 100 Hz |
| `noisyGain` | Noisy Gain | 0 .. 2 |
| `noisyShapeTail` | Noisy Shape Tail | 0 .. 1 |
| `morphResShape` | Classic Resonance Taper | -1 .. 10 |
| `chipArpCarry` | Chip Step Carry | 0 .. 1 |
| `chipReleaseKneeMs` | Chip Release Knee | 0 .. 100 |
| `toneLowHz` | Tone Low Endpoint | 1 .. 1000 |
| `toneOctaves` | Tone Octave Span | 0 .. 14 |
| `driveInputOffsetDb` | Drive Input Offset | -24 .. 24 dB |
| `driveInputSlopeDb` | Drive Input Slope | -24 .. 48 dB |
| `driveOutputOffsetDb` | Drive Makeup Offset | -24 .. 24 dB |
| `driveOutputSlopeDb` | Drive Makeup Slope | -48 .. 24 dB |
| `aV2FM1` | A Filter Macro 1 | 0 .. 1 % |
| `aV2FM2` | A Filter Macro 2 | 0 .. 1 % |
| `bV2FM1` | B Filter Macro 1 | 0 .. 1 % |
| `bV2FM2` | B Filter Macro 2 | 0 .. 1 % |
| `aPan` | A Pan | -1 .. 1 |
| `bPan` | B Pan | -1 .. 1 |
| `aSprDetune` | A Spread>Det | -1200 .. 1200 |
| `aSprPan` | A Spread>Pan | -2 .. 2 |
| `aSprCut` | A Spread>Flt | -10 .. 10 |
| `aSprM1` | A Spread>M1 | -2 .. 2 |
| `aSprM2` | A Spread>M2 | -2 .. 2 |
| `bSprDetune` | B Spread>Det | -1200 .. 1200 |
| `bSprPan` | B Spread>Pan | -2 .. 2 |
| `bSprCut` | B Spread>Flt | -10 .. 10 |
| `bSprM1` | B Spread>M1 | -2 .. 2 |
| `bSprM2` | B Spread>M2 | -2 .. 2 |
| `modWheel` | Mod Wheel | 0 .. 1 % |
| `aEnvToM1` | A Env>M1 | -1 .. 1 |
| `aRandomMacro1` | A Random>M1 | -1 .. 1 |
| `aRandomMacro2` | A Random>M2 | -1 .. 1 |
| `aFxPitchQuant` | A FX>Pitch Quant | -48 .. 48 |
| `aFxQuantSteps` | A FX Steps | 0 .. 256 |
| `aFxFadeTime` | A FX Fade In | 0 .. 120 s |
| `aEnvToM2` | A Env>M2 | -1 .. 1 |
| `aAmpToPitch` | A Amp>Pit | -60 .. 60 st |
| `aAmpToCutoff` | A Amp>Flt | -10 .. 10 oct |
| `aAmpToM1` | A Amp>M1 | -1 .. 1 |
| `aAmpToM2` | A Amp>M2 | -1 .. 1 |
| `aKeyToCutoff` | A Key>Flt | -2 .. 2 |
| `aPitchKeytrack` | A Keytrack | -2 .. 2 |
| `aLfo1Vol` | A LFO1>Vol | -1 .. 1 |
| `aLfo2Vol` | A LFO2>Vol | -1 .. 1 |
| `aFilterBpX` | A F BPX | 0 .. 255 |
| `aLfo1Gm1` | A LFO1 GM1 | 0 .. 1 % |
| `aLfo1Gm2` | A LFO1 GM2 | 0 .. 1 % |
| `aLfo1RateEnv` | A LFO1 R Env | -12 .. 12 oct |
| `aLfo1RateTau` | A LFO1 R Tau | 0 .. 120 s |
| `aLfo1Skew` | A LFO1 Skew | 0 .. 8 |
| `aFilterModalDamp` | A F M Damp | 0 .. 1 % |
| `bEnvToM1` | B Env>M1 | -1 .. 1 |
| `bRandomMacro1` | B Random>M1 | -1 .. 1 |
| `bRandomMacro2` | B Random>M2 | -1 .. 1 |
| `bFxPitchQuant` | B FX>Pitch Quant | -48 .. 48 |
| `bFxQuantSteps` | B FX Steps | 0 .. 256 |
| `bFxFadeTime` | B FX Fade In | 0 .. 120 s |
| `bEnvToM2` | B Env>M2 | -1 .. 1 |
| `bAmpToPitch` | B Amp>Pit | -60 .. 60 st |
| `bAmpToCutoff` | B Amp>Flt | -10 .. 10 oct |
| `bAmpToM1` | B Amp>M1 | -1 .. 1 |
| `bAmpToM2` | B Amp>M2 | -1 .. 1 |
| `bKeyToCutoff` | B Key>Flt | -2 .. 2 |
| `bPitchKeytrack` | B Keytrack | -2 .. 2 |
| `bLfo1Vol` | B LFO1>Vol | -1 .. 1 |
| `bLfo2Vol` | B LFO2>Vol | -1 .. 1 |
| `bFilterBpX` | B F BPX | 0 .. 255 |
| `bLfo1Gm1` | B LFO1 GM1 | 0 .. 1 % |
| `bLfo1Gm2` | B LFO1 GM2 | 0 .. 1 % |
| `bLfo1RateEnv` | B LFO1 R Env | -12 .. 12 oct |
| `bLfo1RateTau` | B LFO1 R Tau | 0 .. 120 s |
| `bLfo1Skew` | B LFO1 Skew | 0 .. 8 |
| `bFilterModalDamp` | B F M Damp | 0 .. 1 % |
| `driveCeil` | Drive Ceil | 0 .. 1 % |
| `gateVolDb` | Gate Vol dB | -60 .. 60 dB |

## Factory presets

Acid Kick · Avantchord · B-Stock · Bad Geometry Lead · Bad Maths Arp · Balkan Kid · Bassic · Beard Comb · Bully Bass · Carbon String · Carioto Bass · Chair of Board · Chords R Us · Club Kick · ColFm2 · Comb Bass · Cosmic Summer · Cracked Piano · Cycle · Darting Particulate · Death Kicks · Detuned String Machine · Don't Laugh · Drivetime Sine · Dusty Chords · Elizabethan Gloom · Exquisite Wasteland · Extrakick · FM Organ · Fatal Bass · Flab · Flutish · Gametal · Geld · Glitter · Gotta Catchem · Granny State · Happy Chords · Held · Hooka Shade · House Chords · HyperGlass Lead · Itchy Sub · Jigsaw Approaching · Kaneda Sunrise · Key Ups · Late Reply · Lively Ringer · Megatripolis · Myloacid · Neurotimbre · Old School Raver · One Way Chords · Outskirts · Percolator · Plastic Lead · Plate Kick · PolyPlucks · Random Keys · Rich N Reich · Riga · Rim Membrane · Sawstyle · Shining Light · Sines By The Sea · Slow Burn · Sonic Stuffing · Speedy Snares · Stab Twice for Murder · Starchestra · Stellar Saws · Strange Rain · Sugar Bass · Tap It Hold It · Tarpaulin · The Rhythm · Theatrical Swell · Thunder Kick · Tiran Sines · Velvet Hourglass · Vertical Bass · Werkstuecktraeger · Whley · Woozy Bass
