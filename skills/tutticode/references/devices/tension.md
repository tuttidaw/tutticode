# String Model

An instrument (`.inst`), available.

```js
note("c3 e3 g3 b3").inst("String Model:12 String Chorus Guitar")
```

Accepted names: `stringmodel`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `excColor` | Exc Color | 0 .. 1 % |
| `decay` | Decay | 0.05 .. 35 s (log) |
| `damping` | Damping | 0 .. 1 % |
| `pickupPos` | Pickup | 0 .. 1 % |
| `vibratoRate` | Vib Rate | 0.01 .. 20 Hz (log) |
| `vibratoAmount` | Vibrato | 0 .. 2 st |
| `damper` | Damper | 0 .. 1 % |
| `bowLevel` | Bow Level | 0 .. 1 % |
| `transpose` | Transp | -48 .. 48 st |
| `volume` | Volume | 0 .. 1 % |
| `excStiffness` | Exc Stiff | 0 .. 1 % |
| `excVelocityParam` | Exc Vel | 0 .. 1 % |
| `excParameterX` | Exc X | 0 .. 1 % |
| `excDamping` | Exc Damp | 0 .. 1 % |
| `excPosition` | Exc Pos | 0 .. 1 % |
| `stringDecayRatio` | Ratio | 0.02 .. 1 % |
| `stringInharmonicity` | Inharm | 0 .. 1 % |
| `stringDampingKbd` | Damp<Key | -1 .. 1 |
| `stringDecayKbd` | Dec<Key | -1 .. 1 |
| `damperVelocity` | D Vel | 0 .. 1 % |
| `damperMass` | D Mass | 0 .. 1 % |
| `damperStiffness` | D Stiff | 0 .. 1 % |
| `damperPosition` | D Pos | 0 .. 1 % |
| `damperDamping` | D Damp | 0 .. 1 % |
| `termFingerStiff` | Fing Stiff | 0 .. 1 % |
| `termFingerForce` | Fing Force | 0 .. 1 % |
| `termFretStiff` | Fret Stiff | 0 .. 1 % |
| `bodyDecay` | B Decay | 0 .. 1 % |
| `bodyLowCut` | Low Cut | 0 .. 1 % |
| `bodyHighCut` | High Cut | 0 .. 1 % |
| `bodyLevel` | B Level | 0 .. 1 % |
| `bodyMix` | B Mix | 0 .. 1 % |
| `polyphony` | Voices | 1 .. 8 |
| `kbdError` | Error | 0 .. 1 % |
| `octave` | Octave | -3 .. 3 |
| `keyboardFineTune` | Fine | 0 .. 1 % |
| `filterCutoff` | F Freq | 0 .. 1 % |
| `filterQ` | F Res | 0 .. 1 % |
| `filterKbd` | F<Key | -1 .. 1 |
| `filterEnvMod` | F<Env | -1 .. 1 |
| `filterLfoMod` | F<LFO | -1 .. 1 |
| `fEnvAttack` | F Atk | 0 .. 1 % |
| `fEnvDecay` | F Dec | 0 .. 1 % |
| `fEnvSustain` | F Sus | 0 .. 1 % |
| `fEnvRelease` | F Rel | 0 .. 1 % |
| `lfoRate` | LFO Rate | 0 .. 1 % |
| `lfoSyncedRate` | LFO S Rate | 0 .. 23 |
| `lfoDelay` | LFO Delay | 0 .. 1 % |
| `lfoFadeIn` | LFO Fade | 0 .. 1 % |
| `vibDelay` | Vib Delay | 0 .. 1 % |
| `vibFadeIn` | Vib Fade | 0 .. 1 % |
| `vibError` | Vib Error | 0 .. 1 % |
| `portaTime` | P Time | 0 .. 1 % |
| `uniAmount` | Uni Det | 0 .. 1 % |
| `uniDelay` | Uni Delay | 0 .. 1 % |
| `keyboardStretch` | Stretch | 0 .. 1 % |
| `cpAmount1` | Press Amt A | -1 .. 1 |
| `cpAmount2` | Press Amt B | -1 .. 1 |
| `slideAmount1` | Slide Amt A | -1 .. 1 |
| `slideAmount2` | Slide Amt B | -1 .. 1 |
| `vibratoModWheel` | Vib<MW | 0 .. 1 % |
| `modWheel` | Mod Wheel | 0 .. 1 % |
| `perNoteBendRange` | Note PB Range | 0 .. 48 st |
| `pbRange` | PB Range | 0 .. 12 st |
| `v2ExcX` | Exc Force/Mass | 0 .. 1 % |
| `v2ExcXVel` | Exc X<Vel | -1 .. 1 |
| `v2ExcXKbd` | Exc X<Key | -1 .. 1 |
| `v2ExcStiff` | Exc Stiff/Fric | 0 .. 1 % |
| `v2ExcStiffVel` | Exc Stiff<Vel | -1 .. 1 |
| `v2ExcStiffKbd` | Exc Stiff<Key | -1 .. 1 |
| `v2ExcVel` | Exc Velocity | 0 .. 1 % |
| `v2ExcVelVel` | Exc Vel<Vel | -1 .. 1 |
| `v2ExcVelKbd` | Exc Vel<Key | -1 .. 1 |
| `v2ExcDamp` | Exc Damping | 0 .. 1 % |
| `v2ExcPos` | Exc Position | 0 .. 1 % |
| `v2ExcPosVel` | Exc Pos<Vel | -1 .. 1 |
| `v2ExcPosKbd` | Exc Pos<Key | -1 .. 1 |
| `v2Decay` | Str Decay | 0 .. 1 % |
| `v2DecayKbd` | Str Decay<Key | -1 .. 1 |
| `v2Ratio` | Str Ratio | 0 .. 1 % |
| `v2Inharm` | Str Inharm | 0 .. 1 % |
| `v2Damping` | Str Damping | 0 .. 1 % |
| `v2DampingKbd` | Str Damp<Key | -1 .. 1 |
| `v2DmpMass` | Dmp Mass | 0 .. 1 % |
| `v2DmpMassKbd` | Dmp Mass<Key | -1 .. 1 |
| `v2DmpStiff` | Dmp Stiff | 0 .. 1 % |
| `v2DmpStiffKbd` | Dmp Stiff<Key | -1 .. 1 |
| `v2DmpVel` | Dmp Velocity | 0 .. 1 % |
| `v2DmpVelKbd` | Dmp Vel<Key | -1 .. 1 |
| `v2DmpPos` | Dmp Position | 0 .. 1 % |
| `v2DmpPosKbd` | Dmp Pos<Key | -1 .. 1 |
| `v2DmpPosVel` | Dmp Pos<Vel | -1 .. 1 |
| `v2DmpDamp` | Dmp Damping | 0 .. 1 % |
| `v2FingerMass` | Finger Mass | 0 .. 1 % |
| `v2FingerMassVel` | Fing Mass<Vel | -1 .. 1 |
| `v2FingerMassKbd` | Fing Mass<Key | -1 .. 1 |
| `v2FingerStiff` | Finger Stiff | 0 .. 1 % |
| `v2FretStiff` | Fret Stiff | 0 .. 1 % |
| `v2PickupPos` | Pickup Pos | 0 .. 1 % |

## Factory presets

12 String Chorus Guitar · Acoustic Synth Bass · Ambient Drops Hold · Attack Keys · Attack Pad · Banjo · Bright Wah Bass · Cat Gut Bass · Cello Strings · Chord Bouncing · Clav Bright · Clav Celesta · Clav Clean · Clav Clicky · Clav Electric · Clav Mellow · Clav Session · Clav Thin · Clav Wah · Clavcimer · Clean Basic Guitar · Clean Bright Guitar · Clean Chorus Guitar · Clicky Organ Bass · Crackling Strings Abstract · Eastern Harp 1 · Eastern Harp 2 · Electric Basic Bass · Electric Damped Bass · Electric Driven Bass · Electric Nylon Guitar · Ensemble Strings · Fretless Bass · Hard Picked Guitar · Harmonics Unpitched · Harp Release · Harp Short · Harp Soft · Hollow Bass · Ice Ballad Keys · Jazz Basic Guitar · Jazz Bright Guitar · Jazz Soft Guitar · Kalimba Big · Koto · Meow Keys · Metal Arp Pluck · Metal Reso Pluck · Moving Filter Pad · Moving Space Alarm · Moving String Pad · Mute Snap Guitar · New Age String · Nice Harp · Nylon Basic Guitar · Nylon Flamenco Guitar · Nylon Mute Guitar · Nylon Old Guitar · Pizz Strings · Pizzicato · Prepared Piano Ambient · Prepared Piano Harmonics · Prepared Piano Mute · Random Rhythm Pad · Random Rhythmic String Abstract · Reggae Chords Guitar · Reverse Guitar · Robot Voice · Saw Bass · Shamisen · Single Coil Guitar · Sitar Basic · Sitar Delay · Sitar Far · Slap Bass · Slow String Pad · Soft Buzz Bass · Square Harp · Square Wah Bass · Steel Basic Guitar · Steel Direct Guitar · Steel Picked Guitar · Strat Bright Guitar · Strat Hollow Guitar · Strat Muted Guitar · String Delay Pad · String Tube Bass · Strings Quartet · Sub Sharp Bass · Synth String Bass · Tarang · Tension Rubber Bass · Tiny Tonal Drums · Tuned Noise · Upright Ambient Bass · Upright Basic Bass · Upright Close Bass · Upright Far Bass · Velo Drive Bass · Vintage Strings · Violin Strings · Wah Tube Bass · Wire Noise · Wood Bass · Wow Pad · Wurli Mellow · Zheng
