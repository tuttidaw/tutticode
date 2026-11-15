# Operator

An instrument (`.inst`), tested end to end.

```js
note("c3 e3 g3 b3").inst("Operator:12 String Guitar")
```

Accepted names: `operator`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `feedback` | Feedback | 0 .. 1 % |
| `aCoarse` | A Coarse | 0 .. 48 |
| `aFixedFreq` | A Freq | 0.1 .. 20000 Hz (log) |
| `aFine` | A Fine | 0 .. 1000 |
| `aLevel` | A Level | 0 .. 1 % |
| `aWave` | A Wave | 0 .. 22 |
| `aAttack` | A Atk | 1 .. 5000 ms (log) |
| `aDecay` | A Dec | 1 .. 60000 ms (log) |
| `aSustain` | A Sus | 0 .. 1 % |
| `aRelease` | A Rel | 1 .. 60000 ms (log) |
| `bCoarse` | B Coarse | 0 .. 48 |
| `bFixedFreq` | B Freq | 0.1 .. 20000 Hz (log) |
| `bFine` | B Fine | 0 .. 1000 |
| `bLevel` | B Level | 0 .. 1 % |
| `bWave` | B Wave | 0 .. 22 |
| `bAttack` | B Atk | 1 .. 5000 ms (log) |
| `bDecay` | B Dec | 1 .. 60000 ms (log) |
| `bSustain` | B Sus | 0 .. 1 % |
| `bRelease` | B Rel | 1 .. 60000 ms (log) |
| `cCoarse` | C Coarse | 0 .. 48 |
| `cFixedFreq` | C Freq | 0.1 .. 20000 Hz (log) |
| `cFine` | C Fine | 0 .. 1000 |
| `cLevel` | C Level | 0 .. 1 % |
| `cWave` | C Wave | 0 .. 22 |
| `cAttack` | C Atk | 1 .. 5000 ms (log) |
| `cDecay` | C Dec | 1 .. 60000 ms (log) |
| `cSustain` | C Sus | 0 .. 1 % |
| `cRelease` | C Rel | 1 .. 60000 ms (log) |
| `dCoarse` | D Coarse | 0 .. 48 |
| `dFixedFreq` | D Freq | 0.1 .. 20000 Hz (log) |
| `dFine` | D Fine | 0 .. 1000 |
| `dLevel` | D Level | 0 .. 1 % |
| `dWave` | D Wave | 0 .. 22 |
| `dAttack` | D Atk | 1 .. 5000 ms (log) |
| `dDecay` | D Dec | 1 .. 60000 ms (log) |
| `dSustain` | D Sus | 0 .. 1 % |
| `dRelease` | D Rel | 1 .. 60000 ms (log) |
| `cutoff` | Cutoff | 20 .. 20000 Hz (log) |
| `resonance` | Res | 0 .. 1 % |
| `lfoRate` | LFO Rate | 0.01 .. 125.44 Hz (log) |
| `lfoAmount` | Vibrato | 0 .. 12 st |
| `transpose` | Transp | -48 .. 48 st |
| `volume` | Volume | 0 .. 2 % |
| `aFixedMul` | A Multi | 0 .. 1000 (log) |
| `bFixedMul` | B Multi | 0 .. 1000 (log) |
| `cFixedMul` | C Multi | 0 .. 1000 (log) |
| `dFixedMul` | D Multi | 0 .. 1000 (log) |
| `pbRange` | PB Range | 0 .. 24 st |
| `pitchEnvAmount` | P.Env Amt | -48 .. 48 st |
| `pitchEnvAttack` | P.Env Atk | 0.1 .. 20000 ms (log) |
| `pitchEnvDecay` | P.Env Dec | 1 .. 60000 ms (log) |
| `pitchEnvSustain` | P.Env Sus | 0 .. 1 % |
| `pitchEnvRelease` | P.Env Rel | 1 .. 60000 ms (log) |
| `envTime` | Time | -100 .. 100 % |
| `aVelScale` | A Vel | -100 .. 100 % |
| `bVelScale` | B Vel | -100 .. 100 % |
| `cVelScale` | C Vel | -100 .. 100 % |
| `dVelScale` | D Vel | -100 .. 100 % |
| `aKeyScale` | A Key | -100 .. 100 % |
| `bKeyScale` | B Key | -100 .. 100 % |
| `cKeyScale` | C Key | -100 .. 100 % |
| `dKeyScale` | D Key | -100 .. 100 % |
| `aFeedback` | A Feedb | 0 .. 100 % |
| `bFeedback` | B Feedb | 0 .. 100 % |
| `cFeedback` | C Feedb | 0 .. 100 % |
| `dFeedback` | D Feedb | 0 .. 100 % |
| `aPhase` | A Phase | 0 .. 100 % |
| `bPhase` | B Phase | 0 .. 100 % |
| `cPhase` | C Phase | 0 .. 100 % |
| `dPhase` | D Phase | 0 .. 100 % |
| `lfoSync` | LFO Sync | 0 .. 14 |
| `lfoToA` | LFO>A | -1 .. 1 % |
| `lfoToB` | LFO>B | -1 .. 1 % |
| `lfoToC` | LFO>C | -1 .. 1 % |
| `lfoToD` | LFO>D | -1 .. 1 % |
| `lfoToFilter` | LFO>Filt | -4 .. 4 oct |
| `filterDrive` | Drive | 0 .. 24 dB |
| `tone` | Tone | 0 .. 1 % |
| `spread` | Spread | 0 .. 100 % |
| `portaTime` | Porta Time | 0.1 .. 10000 ms (log) |
| `aAttackSlope` | A Atk Slope | -1 .. 1 |
| `bAttackSlope` | B Atk Slope | -1 .. 1 |
| `cAttackSlope` | C Atk Slope | -1 .. 1 |
| `dAttackSlope` | D Atk Slope | -1 .. 1 |
| `aDecaySlope` | A Dec Slope | -1 .. 1 |
| `bDecaySlope` | B Dec Slope | -1 .. 1 |
| `cDecaySlope` | C Dec Slope | -1 .. 1 |
| `dDecaySlope` | D Dec Slope | -1 .. 1 |
| `aReleaseSlope` | A Rel Slope | -1 .. 1 |
| `bReleaseSlope` | B Rel Slope | -1 .. 1 |
| `cReleaseSlope` | C Rel Slope | -1 .. 1 |
| `dReleaseSlope` | D Rel Slope | -1 .. 1 |
| `aTimeVel` | A Time<Vel | -100 .. 100 % |
| `bTimeVel` | B Time<Vel | -100 .. 100 % |
| `cTimeVel` | C Time<Vel | -100 .. 100 % |
| `dTimeVel` | D Time<Vel | -100 .. 100 % |
| `aLoopTime` | A Loop Time | 0.2 .. 20000 ms (log) |
| `bLoopTime` | B Loop Time | 0.2 .. 20000 ms (log) |
| `cLoopTime` | C Loop Time | 0.2 .. 20000 ms (log) |
| `dLoopTime` | D Loop Time | 0.2 .. 20000 ms (log) |
| `aVelCoarse` | A Osc<Vel | -100 .. 100 % |
| `bVelCoarse` | B Osc<Vel | -100 .. 100 % |
| `cVelCoarse` | C Osc<Vel | -100 .. 100 % |
| `dVelCoarse` | D Osc<Vel | -100 .. 100 % |
| `envTimeKey` | Time<Key | -100 .. 100 % |
| `filterEnvAmount` | Freq<Env | -100 .. 100 % |
| `filterEnvAttack` | F.Env Atk | 0.1 .. 20000 ms (log) |
| `filterEnvDecay` | F.Env Dec | 1 .. 60000 ms (log) |
| `filterEnvSustain` | F.Env Sus | 0 .. 1 % |
| `filterEnvRelease` | F.Env Rel | 1 .. 60000 ms (log) |
| `filterFreqVel` | Freq<Vel | -100 .. 100 % |
| `filterFreqKey` | Freq<Key | -200 .. 200 % |
| `pan` | Pan | -1 .. 1 |
| `panKey` | Pan<Key | 0 .. 100 % |
| `panRnd` | Pan<Rnd | 0 .. 100 % |
| `midiVelAmtA` | Vel A Amt | -100 .. 100 % |
| `midiVelAmtB` | Vel B Amt | -100 .. 100 % |
| `midiKeyAmtA` | Key A Amt | -100 .. 100 % |
| `midiKeyAmtB` | Key B Amt | -100 .. 100 % |
| `midiAtAmtA` | AT A Amt | -100 .. 100 % |
| `midiAtAmtB` | AT B Amt | -100 .. 100 % |
| `midiPbAmtA` | PB A Amt | -100 .. 100 % |
| `midiPbAmtB` | PB B Amt | -100 .. 100 % |
| `midiMwAmtA` | MW A Amt | -100 .. 100 % |
| `midiMwAmtB` | MW B Amt | -100 .. 100 % |
| `lfoAmtB` | LFO Dest B Amt | -100 .. 100 % |
| `pitchEnvAmtB` | P.Env Dest B Amt | -100 .. 100 % |
| `midiNeutralKey` | Neutral Key | 0 .. 127 |
| `lfoRateKey` | Rate<Key | 0 .. 1 % |
| `aInitial` | A Initial | 0 .. 1 % |
| `aPeak` | A Peak | 0 .. 1 % |
| `bInitial` | B Initial | 0 .. 1 % |
| `bPeak` | B Peak | 0 .. 1 % |
| `cInitial` | C Initial | 0 .. 1 % |
| `cPeak` | C Peak | 0 .. 1 % |
| `dInitial` | D Initial | 0 .. 1 % |
| `dPeak` | D Peak | 0 .. 1 % |
| `filterEnvInitial` | F.Env Initial | 0 .. 1 % |
| `filterEnvPeak` | F.Env Peak | 0 .. 1 % |
| `lfoEnvAttack` | LFO Env Atk | 0.1 .. 60000 ms (log) |
| `pitchEnvTimeVel` | P.Env Time<Vel | -100 .. 100 % |
| `lfoEnvTimeVel` | LFO Env Time<Vel | -100 .. 100 % |
| `modWheel` | Mod Wheel | 0 .. 1 % |
| `aftertouch` | Aftertouch | 0 .. 1 % |
| `pitchEnvAmtA` | P.Env Amt A | -100 .. 100 % |

## Factory presets

12 String Guitar · 5ths Detuned Pad · 5ths Filter Sweep Pad · 5ths Glass Motion Pad · Acid Bass · Agenda Lead · Analog Bouquet Brass · Analog HiHat Bleep · Analog Slow Sweep Pad · Atom Lead · Azimuth Bass · Azimuth Brass · BD 1 Kick · Basscycle Aftertouch · Bell String Detuned Pad · Bells & Thin Pad · Bells Brushed Hits · Bells Classic Basic · Bells Classic Bright · Bells Classic Muffled · Bells Damped · Bells FM Simple · Bells Fifths · Bells Leslie · Bells Noisy Attack · Bells Pitch Mod · Bells Plain Octaves · Bells Rattling · Bells Sun · Bells Tinkle Dry · Bells Tinkle Fine · Bells Tinkle Noisy · Bells Tinkle Rich · Bells Tinkle Toy · Bells Vibrant · Bright Brass · Bright Filterless Sweep Pad · Bright Overtone Lead · Buzz Aftertouch Noise Lead · Buzz Bass 16ths · Buzz Lead 4ths · Buzz Overtones Lead · Buzz Release Keys · Buzz Reso Stereo Pad · Buzz Slow Motion Pad · Buzz Slow Sweep Pad · Buzz Sweep Lead · Buzz Wide Motion Pad · Celesta Sustained · Choir Metal Bright · Choir Metal Muted · Choir Reverb · Choir Steam · Chord FM Keys · Chord Mod Keys 1 · Chord Mod Keys 2 · Chorus & Strings Sweep Pad · Clav Filtered · Clav Lo Fi  · Creep Bass · Cut Pad · Delay Bleep Pluck · Detuned Attack Bass · Detuned Broad Pad · Detuned Instable Pad · Detuned Lowpass Bass · Detuned Sustain Pad · Disto FM Bass · Distorted Keys · Distortion Bright Bass · Distortion Filtered Bass · Drip · Dub Filter FX · Dynamic Buzz Keys · Dynamic Filter Bass · Dynamic Harmonics Bass · Dynamic Inharmonics · Dynamic Pitch Keys · E-Ride Cymbal Bell · Electric FM Fuzz Bass · Electric FM Muffled Bass · Electric FM Wow Bass · FM Basic Pluck · FM Filterless Sweep Lead · FM Glide Lead · FM Harpsichord · FM Harpsichord Lead · FM Koto · FM Piano Bright · FM Piano Classic · FM Piano Decay · FM Piano Dirty · FM Piano Filtered · FM Piano Rubber · FM Piano Simple · FM Shimmering Release Lead · FM Short Lead · FM Sitar · Face Bass · Fast Filter Attack Bass · Filtered Style Pad · Filterless Sweep Lead · Fizzling Pad · Flute Basic · Flute Double · Flute Hard · Flute Mellow · Flutter Ambience · Fog Pad · Full Perc Pluck 16ths · Fuzz Pad · Geigerzaehler Bleep · Glass Detuned Fast Attack Pad · Glass Thin Pad · Glass Thin Pure Pad · Glass Unpitched Pad · Glass Vibrato Pad · Glass Wah Pad · Glockenspiel Tremolo · Gnarly S&H Filter · Grow & Shine · Growl Bass · Guitar Bass · Harp Plastic · Harsh FM Bass · Harsh Keys · High & Low · Highpass Sweep Pad · Hollow Reso Pad · Hollow Sweep Pad · Hollow Synth 16ths · House Bass · Housy Bass · Inharmonic Release Keys · Juicy Ladder Bass · Kalimba Plastic · King Bass · Klong Bass Machine · Kototar · LoFi Sines Lead · Low Pass Filter · Major 3rd Lead · Marimba Long · Marimba Plastic · Marimba Wood · Metal Pluck 8ths · Metallic Basic Bass · Metallic Dynamic · Metallic FM · Metallic Hit · Metallic Mallet Bass · Minor 7th Chord Lead · Muted Chorus Pad · Muted Motion Pad · Muted Noise Sweep Pad · Muted Soft Shimmer Pad · Muted Upper Sweep Pad · Nasal Chorus Keys · Nasal Formant Lead · Nasal Pitch Scoop Pad · Nasal Tines · Neaww Bass · Nebulae Keys · Noise Hit Attack · Noise Perc Percussion · Noise Slow Sweep Pad · Noisy Fourth Beat Pad · Noisy Keys Machine · Noisy Triple Beat Pad · Noisy Wood Percussion · OP Bass · Ocarina Basic · One Harmonic Bleep · Orchestral Sweep Pad · Organ Basic · Organ Bass · Organ Clicky · Organ Clicky Sine · Organ Dance · Organ Formant · Organ Plucky · Organ Slow Decay · Organ Stereo · Pan Flute Basic · Perc Blip Bleep · Percussive Keys · Pitch Attack Pad · Pitchy Gong · Pitchy Release Pluck · Plain & Simple Brass · Plucked Keys · Poly Detuned Pad · Poly Release Keys · Portamento Female Nasal · Portamento Female Pure · Portamento Male · Power Chords Guitar · Pure Bell 8ths · Pure Muted Pad · Pure Reso Sweep Pad · Q Thud Hi · Recorder Keys · Release Bass · Release Brass · Reso Envelope Pad · Resonant Pad · Resonant Sweep Pad · Rhythmic Bass & Bell · Rhythmic Bass & Hihat Basic · Rhythmic Bass & Hihat Sweep · Rhythmic Bass & Perc Full · Rhythmic Bells & Noise · Rhythmic Pong Bass · Rhythmic SciFi Pluck · Rhythmic Square Synth Buzz · Rhythmic Sweep Synth Buzz · Rhythmic Synth Buzz · Rhythmic Tines Pad · Rhythmic Wow Bass · Rubber Pluck · S&H Filtered Noise · Sandy Pad · Saw 3 Waveforms · Sax Lead · SciFi Machine · Selekta Bass · Short Decay Saw Bass · Short Decay Sine Bass · Short Decay Wah Bass · Short Metallic Spectral · Shout Cowbell Percussion · Sine Blip Attack · Sine Blip Filter Attack · Sine Mono Glide Waveforms · Sine Noise Attack Lead · Sine Notch Sweep Waveforms · Sine Vibrato Lead · Sine Waveforms · Sinelike Basic Bass · Slight Vibrato Brass · Slow Sweep Pad · Smack Kick · Sneaky Bass · Sneaky Sync Bass · Soft 5ths Brass · Soft FM Sweep Brass · Soft Shimmer Filter Sweep Pad · Soft Warm Brass · Solo Female Fast Att · Solo Female Long Rel · Solo Female Reso · Solo Male Fast Attack · Solo Male Metal Echo · Square 16 Waveforms · Square 3 Waveforms · Square 32 Waveforms · Square 4 Waveforms · Square 6 Waveforms · Square 64 Waveforms · Square 8 Waveforms · Square D Waveforms · Square Dirty Lead · Square Filter Sweep Lead · Square Glide Lead · Square Reso Pad · Square Sweep · Squeek & Loop Bleep · Squishy Bleep · Still Sky Pad · Strings 5ths Pad · Strings Basis Pad · Strings Filter Pad · Strings Keys Attack Pad · Strings Vibrato Pad · Sub Clicky Bass · Sub Sine Bass · Suitar Guitar · Sweep & Wobble · Sweep Chorus Brass · Sweep Flange Bass · Sweep Pitch FX · Sweep Rhythmic Lead · Sweep Slow Bass · Sweep Unison Bass · Sweep Upwards Lead · Sweeping SciFi Cymbals · Swept Organ Pad · Swooshy · Syncy Lead · Synth Buzz 8ths · Synth Reso Buzz 16ths · Synth Reso Sweep 16ths · Tesseract Pitch Fall · Tesseract Unpredictable Velocity · Thick Organ Pad · Thin Buzz Fast Attack Pad · Thin Buzz Motion Lead · Thin Pad Filter Sweep · Thin Perc 8ths · Three Op Bass · Tin Bowl · Tine Pad · Toy Glass Pad · Toy Keys Attack Pad · Tremolo Synth Piano · Triangle Waveforms · Tubular Bells · Unison FM Lead · Unison Filter Velo Lead · Unison Saw Lead · Unison Square Lead · Vibes Pure · Vibraphone Plastic · Vintage Sampler Noise Pad · Vocal Choral Muted Pad · Vocal Choral Stereo Sweep Pad · Vocal Motion Filter Sweep Pad · Vocal Vowel Slow Sweep Pad · WahWah Bass · Warble Rhythm Noise Pad · Warm Chime Keys · Whistler Winds · Wind Machine · Wineglass High Pass · Wobbly Flag Bass · Wood Percussion · World Scape Pad · Wow Attack Lead · Wow Vibrato · Wurp Bass · Zapp Kick
