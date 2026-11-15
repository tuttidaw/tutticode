# Sampler

An instrument (`.inst`), tested end to end.

```js
note("c3 e3 g3 b3").inst("Sampler:808 BNYX Stopper")
```

Accepted names: `sampler`, `oneshotsampler`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `volume` | Volume | 0 .. 1 % |
| `attack` | Attack | 0.1 .. 20000 ms (log) |
| `release` | Release | 1 .. 60000 ms (log) |
| `transpose` | Transpose | -48 .. 48 st |
| `velToVol` | Vel>Vol | 0 .. 1 % |
| `decay` | Decay | 1 .. 60000 ms (log) |
| `sustain` | Sustain | 0 .. 1 % |
| `detuneFine` | Detune | -50 .. 50 ct |
| `pan` | Pan | -1 .. 1 |
| `panRnd` | Rnd Pan | 0 .. 1 % |
| `spread` | Spread | 0 .. 100 % |
| `glideMode` | Glide Mode | 0 .. 2 |
| `glideTime` | Glide Time | 0.1 .. 10000 ms (log) |
| `filterOn` | Filter On | 0 .. 1 |
| `filterType` | Filter Type | 0 .. 4 |
| `filterSlope` | Filter Slope | 0 .. 1 |
| `filterFreq` | Filter Freq | 30 .. 22000 Hz (log) |
| `filterRes` | Filter Res | 0 .. 1.25 |
| `filterDrive` | F Drive | 0 .. 24 dB |
| `filterMorph` | Morph | 0 .. 1 % |
| `filterKey` | F<Key | 0 .. 1 % |
| `filterVel` | F<Vel | 0 .. 1 % |
| `fEnvOn` | F Env On | 0 .. 1 |
| `fEnvAmount` | F Env Amt | -72 .. 72 st |
| `fEnvAttack` | F Env Att | 0.1 .. 20000 ms (log) |
| `fEnvDecay` | F Env Dec | 1 .. 60000 ms (log) |
| `fEnvSustain` | F Env Sus | -1 .. 1 % |
| `fEnvRelease` | F Env Rel | 1 .. 60000 ms (log) |
| `pEnvOn` | P Env On | 0 .. 1 |
| `pEnvAmount` | P Env Amt | -48 .. 48 st |
| `pEnvAttack` | P Env Att | 0.1 .. 20000 ms (log) |
| `pEnvDecay` | P Env Dec | 1 .. 60000 ms (log) |
| `pEnvSustain` | P Env Sus | -1 .. 1 % |
| `pEnvRelease` | P Env Rel | 1 .. 60000 ms (log) |
| `lfoOn` | LFO On | 0 .. 1 |
| `lfoRate` | LFO Rate | 0.01 .. 30 Hz (log) |
| `lfoToPitch` | LFO>Pitch | 0 .. 1 % |
| `lfoToFilter` | LFO>Filter | 0 .. 24 st |
| `lfoToVolume` | LFO>Vol | 0 .. 1 % |
| `lfoToPan` | LFO>Pan | 0 .. 1 % |
| `lfo2On` | LFO 2 | 0 .. 1 |
| `lfo2Shape` | Shape | 0 .. 5 |
| `lfo2Rate` | Rate | 0.01 .. 30 Hz (log) |
| `lfo2RateType` | Sync | 0 .. 1 |
| `lfo2BeatRate` | Beat | 0 .. 21 |
| `lfo2StereoMode` | Stereo | 0 .. 1 |
| `lfo2Phase` | Phase | 0 .. 360 deg |
| `lfo2Spin` | Spin | 0 .. 0.5 % |
| `lfo2Offset` | Offset | 0 .. 360 deg |
| `lfo2Attack` | Fade In | 0.1 .. 20000 ms (log) |
| `lfo2Retrig` | Retrig | 0 .. 1 |
| `lfo2KeyRate` | Rate<Key | 0 .. 1 % |
| `lfo2Smooth` | Smooth | 0 .. 1 % |
| `lfo2Width` | Width | 0 .. 1 % |
| `lfo2DstA` | Dest A | 0 .. 31 |
| `lfo2AmtA` | Amt A | -100 .. 100 % |
| `lfo2DstB` | Dest B | 0 .. 31 |
| `lfo2AmtB` | Amt B | -100 .. 100 % |
| `lfo3On` | LFO 3 | 0 .. 1 |
| `lfo3Shape` | Shape | 0 .. 5 |
| `lfo3Rate` | Rate | 0.01 .. 30 Hz (log) |
| `lfo3RateType` | Sync | 0 .. 1 |
| `lfo3BeatRate` | Beat | 0 .. 21 |
| `lfo3StereoMode` | Stereo | 0 .. 1 |
| `lfo3Phase` | Phase | 0 .. 360 deg |
| `lfo3Spin` | Spin | 0 .. 0.5 % |
| `lfo3Offset` | Offset | 0 .. 360 deg |
| `lfo3Attack` | Fade In | 0.1 .. 20000 ms (log) |
| `lfo3Retrig` | Retrig | 0 .. 1 |
| `lfo3KeyRate` | Rate<Key | 0 .. 1 % |
| `lfo3Smooth` | Smooth | 0 .. 1 % |
| `lfo3Width` | Width | 0 .. 1 % |
| `lfo3DstA` | Dest A | 0 .. 31 |
| `lfo3AmtA` | Amt A | -100 .. 100 % |
| `lfo3DstB` | Dest B | 0 .. 31 |
| `lfo3AmtB` | Amt B | -100 .. 100 % |
| `auxOn` | Aux Env | 0 .. 1 |
| `auxAttack` | Aux A | 0.1 .. 20000 ms (log) |
| `auxDecay` | Aux D | 1 .. 60000 ms (log) |
| `auxSustain` | Aux S | -1 .. 1 % |
| `auxRelease` | Aux R | 1 .. 60000 ms (log) |
| `auxAttackSlope` | Aux A Slope | -1 .. 1 |
| `auxDecaySlope` | Aux D Slope | -1 .. 1 |
| `auxReleaseSlope` | Aux R Slope | -1 .. 1 |
| `auxLoopMode` | Aux Loop | 0 .. 4 |
| `auxLoopTime` | Aux Loop T | 0.2 .. 20000 ms (log) |
| `auxRepeat` | Aux Repeat | 0 .. 14 |
| `auxDstA` | Aux Dst A | 0 .. 31 |
| `auxAmtA` | Aux Amt A | -100 .. 100 % |
| `auxDstB` | Aux Dst B | 0 .. 31 |
| `auxAmtB` | Aux Amt B | -100 .. 100 % |
| `attackSlope` | Vol A Slope | -1 .. 1 |
| `decaySlope` | Vol D Slope | -1 .. 1 |
| `releaseSlope` | Vol R Slope | -1 .. 1 |
| `envLoopMode` | Vol Loop | 0 .. 4 |
| `envLoopTime` | Vol Loop T | 0.2 .. 20000 ms (log) |
| `envRepeat` | Vol Repeat | 0 .. 14 |
| `fEnvAttackSlope` | F Env A Slope | -1 .. 1 |
| `fEnvDecaySlope` | F Env D Slope | -1 .. 1 |
| `fEnvReleaseSlope` | F Env R Slope | -1 .. 1 |
| `fEnvLoopMode` | F Env Loop | 0 .. 4 |
| `fEnvLoopTime` | F Env Loop T | 0.2 .. 20000 ms (log) |
| `fEnvRepeat` | F Env Repeat | 0 .. 14 |
| `pEnvAttackSlope` | P Env A Slope | -1 .. 1 |
| `pEnvDecaySlope` | P Env D Slope | -1 .. 1 |
| `pEnvReleaseSlope` | P Env R Slope | -1 .. 1 |
| `pEnvLoopMode` | P Env Loop | 0 .. 4 |
| `pEnvLoopTime` | P Env Loop T | 0.2 .. 20000 ms (log) |
| `pEnvRepeat` | P Env Repeat | 0 .. 14 |
| `keyDstA` | Key Dst A | 0 .. 31 |
| `keyAmtA` | Key Amt A | -100 .. 100 % |
| `keyDstB` | Key Dst B | 0 .. 31 |
| `keyAmtB` | Key Amt B | -100 .. 100 % |
| `velDstA` | Vel Dst A | 0 .. 31 |
| `velAmtA` | Vel Amt A | -100 .. 100 % |
| `velDstB` | Vel Dst B | 0 .. 31 |
| `velAmtB` | Vel Amt B | -100 .. 100 % |
| `midi0DstA` | MW Dst A | 0 .. 31 |
| `midi0AmtA` | MW Amt A | -100 .. 100 % |
| `midi0DstB` | MW Dst B | 0 .. 31 |
| `midi0AmtB` | MW Amt B | -100 .. 100 % |
| `midi1DstA` | Foot Dst A | 0 .. 31 |
| `midi1AmtA` | Foot Amt A | -100 .. 100 % |
| `midi1DstB` | Foot Dst B | 0 .. 31 |
| `midi1AmtB` | Foot Amt B | -100 .. 100 % |
| `midi2DstA` | AT Dst A | 0 .. 31 |
| `midi2AmtA` | AT Amt A | -100 .. 100 % |
| `midi2DstB` | AT Dst B | 0 .. 31 |
| `midi2AmtB` | AT Amt B | -100 .. 100 % |
| `midi3DstA` | PB Dst A | 0 .. 31 |
| `midi3AmtA` | PB Amt A | -100 .. 100 % |
| `midi3DstB` | PB Dst B | 0 .. 31 |
| `midi3AmtB` | PB Amt B | -100 .. 100 % |
| `midi4DstA` | Slide Dst A | 0 .. 31 |
| `midi4AmtA` | Slide Amt A | -100 .. 100 % |
| `midi4DstB` | Slide Dst B | 0 .. 31 |
| `midi4AmtB` | Slide Amt B | -100 .. 100 % |
| `midi5DstA` | CC Dst A | 0 .. 31 |
| `midi5AmtA` | CC Amt A | -100 .. 100 % |
| `midi5DstB` | CC Dst B | 0 .. 31 |
| `midi5AmtB` | CC Amt B | -100 .. 100 % |
| `roundRobin` | Rnd Robin | 0 .. 1 |
| `roundRobinMode` | RR Mode | 0 .. 3 |
| `lfoShape` | LFO Shape | 0 .. 5 |
| `lfoRetrig` | LFO Retrig | 0 .. 1 |
| `lfoOffset` | LFO Offset | 0 .. 360 deg |
| `lfoAttack` | LFO Att | 0 .. 20000 ms |
| `lfoKeyRate` | LFO<Key | 0 .. 1 % |
| `fEnvInit` | F Env Init | -1 .. 1 % |
| `fEnvEnd` | F Env End | -1 .. 1 % |
| `subOn` | Osc | 0 .. 1 |
| `subMode` | Osc Mode | 0 .. 1 |
| `subType` | Osc Wave | 0 .. 20 |
| `subVolume` | Osc Vol | 0 .. 1 % |
| `subVolVel` | Osc Vol<Vel | 0 .. 1 % |
| `subCoarse` | Osc Coarse | 0 .. 48 x |
| `subFine` | Osc Fine | -50 .. 50 ct |
| `subAttack` | Osc A | 0.1 .. 20000 ms (log) |
| `subDecay` | Osc D | 1 .. 60000 ms (log) |
| `subSustain` | Osc S | 0 .. 1 % |
| `subRelease` | Osc R | 1 .. 60000 ms (log) |
| `subAttackSlope` | Osc A Slope | -1 .. 1 |
| `subDecaySlope` | Osc D Slope | -1 .. 1 |
| `subReleaseSlope` | Osc R Slope | -1 .. 1 |
| `subLoopMode` | Osc Loop | 0 .. 4 |
| `subLoopTime` | Osc Loop T | 0.2 .. 20000 ms (log) |
| `subRepeat` | Osc Repeat | 0 .. 14 |
| `subInit` | Osc Env Init | 0 .. 1 % |
| `subEnd` | Osc Env End | 0 .. 1 % |
| `shaperOn` | Shaper | 0 .. 1 |
| `shaperType` | Shaper Type | 0 .. 3 |
| `shaperAmount` | Shaper Amt | 0 .. 100 % |
| `interpMode` | Interpol | 0 .. 3 |
| `numVoices` | Voices | 0 .. 32 |
| `retrigCut` | Retrigger | 0 .. 1 |
| `monoLegato` | Glide Voice | 0 .. 1 |
| `velVolModel` | Vel Law | 0 .. 2 |
| `subFixedOn` | Osc Fixed | 0 .. 1 |
| `subFreqFixed` | Osc Freq | 0.1 .. 20000 Hz (log) |
| `subFreqMul` | Osc Multi | 0.125 .. 64 (log) |
| `subTimeVel` | Osc Time<Vel | -100 .. 100 % |
| `shaperStructure` | Shaper Pos | 0 .. 1 |
| `driveModel` | Drive Law | 0 .. 2 |
| `modWheel` | Mod Wheel | 0 .. 1 % |
| `envInit` | Vol Initial | 0 .. 1 |
| `envEnd` | Vol End | 0 .. 1 |
| `envTime` | Time | -100 .. 100 % |
| `envTimeKey` | Time<Key | -100 .. 100 % |
| `envTimeVel` | Vol Time<Vel | -100 .. 100 % |
| `fEnvTimeVel` | F.Env Time<Vel | -100 .. 100 % |
| `pEnvTimeVel` | P.Env Time<Vel | -100 .. 100 % |
| `auxTimeVel` | Aux Time<Vel | -100 .. 100 % |
| `pEnvInit` | P.Env Initial | -1 .. 1 |
| `pEnvEnd` | P.Env End | -1 .. 1 |
| `auxInit` | Aux Initial | -1 .. 1 |
| `auxEnd` | Aux End | -1 .. 1 |
| `envPeak` | Vol Peak | 0 .. 1 |
| `fEnvPeak` | F.Env Peak | 0 .. 1 |
| `pEnvPeak` | P.Env Peak | 0 .. 1 |
| `auxPeak` | Aux Peak | 0 .. 1 |
| `subPeak` | Osc Env Peak | 0 .. 1 |
| `filterCircuit` | Circuit | `Clean` `OSR` `MS2` `SMP` `PRD` |
| `filterCircuitBp` | Circuit BP | `Clean` `OSR` |
| `lfoRateType` | LFO Hz/Sync | 0 .. 1 |
| `lfoBeatRate` | LFO Sync | 0 .. 21 |
| `keyZoneShift` | Zn Shft | -48 .. 48 st |
| `relVelDstA` | RelVel Dst A | 0 .. 31 |
| `relVelAmtA` | RelVel Amt A | -100 .. 100 % |
| `relVelDstB` | RelVel Dst B | 0 .. 31 |
| `relVelAmtB` | RelVel Amt B | -100 .. 100 % |

## Factory presets

808 BNYX Stopper · 808 Selector Rack · Ac Flugelhorn · Ac Strings Orch · Ac Strings Pizz Basic · Ac Strings Pizz Oct · Ac Strings Pizz Stage · Acid Meltdown Bass · Ambient Encounters Bass · Ambient Feeling · Ambient Swells · Ambiente Pad · Analog Stab Lead · Analogue Bass · Arp 5th Lead · Arp Poly Lead · B Bass · B Seven Bass · Big Modules Bass · Biig Saw Pad · Bit Growl Bass · Byte Sized Bass · Celeste · Ceramic Bowl · Ceramic Tiles · Childhood Home Piano · Chill Outzone · Chimes Finger Down · Choir Pad Avalon · Chord Floot Aboot Pad · Chord Soft Keys · Classical Keys · Clay Flute · Click And Finer Cuts · Click Noise · Cnarz FX · Dark Corner Pad · Dark One · Dark Thought Lead · Daysleeper Swells Pad · DnB Tools 1 Lead · DnB Tools 2 Lead · DnB Tools 3 Lead · Downstairs Pad · Drift Pad · Duetta Pad · E-Piano Cheap · Electric Bass Raw · Electric Bass Soft · Electroflow Keys · Fat Heavy Drone Pad · Fine Pulse Bass · Frozen Rings Pad · Galactica Pad · Git Proc Loop · Glide Square Bass · Glidesynth Lead 1 · Glidesynth Lead 2 · Good Old Vintage Phat 1 Lead · Good Old Vintage Phat 2 Lead · Good Old Vintage Phat Bass · Grand Piano · Grand Piano Single Sample · House Stab · Inclement Drone Pad · Independence Day · Indian Flute · Infected Bass · JX Chorus Bass · Jarble Ambience · Jarble Ambience Pad · Jarble Disto Bass · Klickering Lead Modern · LoFi Voodoo · LoFi Warp Drone · Lovely Keys · MPE Alder Waldgeist · MPE Bower Close · MPE Depth Pressure Pad · MPE Dream Grain Drone · MPE Dulcimatica · MPE FM Arp · MPE Inside Angel · MPE Pearlescent Tides Pad · MPE Sci-Fi Flicks · Machine Punk Bass · Mamas Bass · Marimba Concert · Marimba Maple · Megaphatness Pad · Metallic Love Keys · Metallo Shake · Mini 1 OSC Bass · Mini 1 OSC Reso Bass · Mini 2 OSC LFO Bass · Mini 2 OSC Solo Bass · Mini 3 OSC Bass · Mini 3 OSC Xectro Bass · Mini Wobble Bass · Mod Bass · Modular Organ Pad · Music Box · Muugy Bass · No 3O3 FM 1 Lead · No 3O3 FM 2 Lead · Nostalgic VHS Bells · PPP Pad · Panorama Pad · Phantasm Pad · Piano Bass · Pitched Ambience · Pitched Ambiente · Pixelated Bass · Plock Blip · Psycho Tables Pad · Pulse Bass · Reso Clicks · Revenge of Q Pad · Reverberant Keys · Rhyt Mo · Rhythmic Sine Saw Square · Ring Modular Lead · Sandblaster Lead · Saw Filtered Bass · Saw Percussion · Seashore Pad · Seashore Pad (Evolving) · Seashore Pad (Synth Pad) · Simple One Pad · Slow Drown Pad · Smooth Synth Keys · Soft Industry · Soover Lead · Space FlicFlac · Stab Dense · Stab Ibiza · Stab Proga · Stadium Pluck · Steel Pan · Strange Beats 1 · Strange Beats 2 · Strange Space Beats · Sub 808 Bass · Sunken Bells · Super Soover Lead · Supershort Blip · Supersine · Sweeper Saege Pad · Sweeper Saege Pad (Pad) · Sweeper Saege Pad (Synth Pad) · Tempo Steppe Keys · Textural Machine · The Greatest Pad · Thicket Wail Pad · Upright Bass · Vacuum Flute · Vibraphone · Vinyl Siren · Vocal Chop Ah · Vocal Chop Hey · Vocal Chop Oh · Warm Bubbly Pad · Wonk Bass · Zirp Sync Noiseloop
