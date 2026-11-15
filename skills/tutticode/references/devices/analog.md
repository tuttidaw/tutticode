# Patina

An instrument (`.inst`), tested end to end.

```js
note("c3 e3 g3 b3").inst("Patina:80s VCO Brass")
```

Accepted names: `patina`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `osc1Octave` | Oct 1 | -3 .. 3 |
| `osc1Semi` | Semi 1 | -12 .. 12 st |
| `osc1Detune` | Det 1 | -100 .. 100 ct |
| `osc1PW` | PW 1 | 0 .. 1 % |
| `osc1Sub` | Sub 1 | 0 .. 1 % |
| `osc1Level` | Level 1 | 0 .. 1 % |
| `osc1Balance` | Bal 1 | 0 .. 1 % |
| `f1Freq` | F1 Freq | 20 .. 20000 Hz (log) |
| `f1Res` | F1 Res | 0 .. 1 % |
| `f1EnvAmt` | F1 Env | -6 .. 6 oct |
| `f1Key` | F1 Key | 0 .. 1 % |
| `f1Attack` | F1 Atk | 1 .. 10000 ms (log) |
| `f1Decay` | F1 Dec | 1 .. 20000 ms (log) |
| `f1Sustain` | F1 Sus | 0 .. 1 % |
| `f1Release` | F1 Rel | 1 .. 20000 ms (log) |
| `a1Attack` | A1 Atk | 1 .. 10000 ms (log) |
| `a1Decay` | A1 Dec | 1 .. 20000 ms (log) |
| `a1Sustain` | A1 Sus | 0 .. 1 % |
| `a1Release` | A1 Rel | 1 .. 20000 ms (log) |
| `amp1Level` | Amp 1 | 0 .. 1 % |
| `amp1Pan` | Pan 1 | 0 .. 1 % |
| `osc2Octave` | Oct 2 | -3 .. 3 |
| `osc2Semi` | Semi 2 | -12 .. 12 st |
| `osc2Detune` | Det 2 | -100 .. 100 ct |
| `osc2PW` | PW 2 | 0 .. 1 % |
| `osc2Sub` | Sub 2 | 0 .. 1 % |
| `osc2Level` | Level 2 | 0 .. 1 % |
| `osc2Balance` | Bal 2 | 0 .. 1 % |
| `f2Freq` | F2 Freq | 20 .. 20000 Hz (log) |
| `f2Res` | F2 Res | 0 .. 1 % |
| `f2EnvAmt` | F2 Env | -6 .. 6 oct |
| `f2Key` | F2 Key | 0 .. 1 % |
| `f2Attack` | F2 Atk | 1 .. 10000 ms (log) |
| `f2Decay` | F2 Dec | 1 .. 20000 ms (log) |
| `f2Sustain` | F2 Sus | 0 .. 1 % |
| `f2Release` | F2 Rel | 1 .. 20000 ms (log) |
| `a2Attack` | A2 Atk | 1 .. 10000 ms (log) |
| `a2Decay` | A2 Dec | 1 .. 20000 ms (log) |
| `a2Sustain` | A2 Sus | 0 .. 1 % |
| `a2Release` | A2 Rel | 1 .. 20000 ms (log) |
| `amp2Level` | Amp 2 | 0 .. 1 % |
| `amp2Pan` | Pan 2 | 0 .. 1 % |
| `f1Drive` | F1 Drive | 1 .. 6 |
| `f1KbdQ` | Q1<Key | -1 .. 1 |
| `f1LfoCutoff` | F1<LFO | -1 .. 1 |
| `f1LfoQ` | Q1<LFO | -1 .. 1 |
| `f1EnvQ` | Q1<Env | -1 .. 1 |
| `a1KbdAmp` | A1<Key | -1 .. 1 |
| `a1LfoAmp` | A1<LFO | -1 .. 1 |
| `a1KbdPan` | P1<Key | -1 .. 1 |
| `a1LfoPan` | P1<LFO | -1 .. 1 |
| `a1EnvPan` | P1<Env | -1 .. 1 |
| `lfo1Rate` | LFO 1 Rate | 0.01 .. 40 Hz (log) |
| `lfo1Phase` | LFO 1 Ph | 0 .. 1 % |
| `lfo1Delay` | LFO 1 Dly | 0 .. 1 % |
| `lfo1FadeIn` | LFO 1 Fade | 0 .. 1 % |
| `osc1EnvAmount` | P Env 1 | -1 .. 1 |
| `osc1EnvTime` | P Env 1 T | 0 .. 1 % |
| `osc1LfoPitch` | Pit1<LFO | -1 .. 1 |
| `osc1LfoPW` | PW1<LFO | -1 .. 1 |
| `f2Drive` | F2 Drive | 1 .. 6 |
| `f2KbdQ` | Q2<Key | -1 .. 1 |
| `f2LfoCutoff` | F2<LFO | -1 .. 1 |
| `f2LfoQ` | Q2<LFO | -1 .. 1 |
| `f2EnvQ` | Q2<Env | -1 .. 1 |
| `a2KbdAmp` | A2<Key | -1 .. 1 |
| `a2LfoAmp` | A2<LFO | -1 .. 1 |
| `a2KbdPan` | P2<Key | -1 .. 1 |
| `a2LfoPan` | P2<LFO | -1 .. 1 |
| `a2EnvPan` | P2<Env | -1 .. 1 |
| `lfo2Rate` | LFO 2 Rate | 0.01 .. 40 Hz (log) |
| `lfo2Phase` | LFO 2 Ph | 0 .. 1 % |
| `lfo2Delay` | LFO 2 Dly | 0 .. 1 % |
| `lfo2FadeIn` | LFO 2 Fade | 0 .. 1 % |
| `osc2EnvAmount` | P Env 2 | -1 .. 1 |
| `osc2EnvTime` | P Env 2 T | 0 .. 1 % |
| `osc2LfoPitch` | Pit2<LFO | -1 .. 1 |
| `osc2LfoPW` | PW2<LFO | -1 .. 1 |
| `noiseLevel` | Noise | 0 .. 1 % |
| `noiseColor` | N Color | 0 .. 1 % |
| `noiseBalance` | N Bal | 0 .. 1 % |
| `vibRate` | Vib Rate | 0.01 .. 20 Hz (log) |
| `vibAmount` | Vibrato | 0 .. 2 st |
| `transpose` | Transp | -48 .. 48 st |
| `volume` | Volume | 0 .. 1 % |
| `vibDelay` | Vib Dly | 0 .. 1 % |
| `vibFadeIn` | Vib Fade | 0 .. 1 % |
| `vibError` | Vib Err | 0 .. 1 % |
| `portaTime` | Porta T | 0 .. 1 % |
| `uniDetune` | Uni Det | 0 .. 1 % |
| `uniDelay` | Uni Dly | 0 .. 1 % |
| `kbdError` | Kbd Err | 0 .. 1 % |
| `kbdStretch` | Stretch | 0 .. 1 % |
| `kbdFine` | Fine | 0 .. 1 % |
| `octave` | Octave | -3 .. 3 |
| `pbRange` | PB Range | 0 .. 24 st |
| `polyphony` | Voices | 1 .. 32 |
| `f1ToF2` | F1>F2 | 0 .. 2 % |
| `osc1SyncRatio` | Sync 1 R | 1 .. 20 |
| `osc2SyncRatio` | Sync 2 R | 1 .. 20 |
| `amp1VelAmt` | A1 Vel | -1 .. 1 |
| `f1VelAmt` | F1 Vel | -1 .. 1 |
| `amp2VelAmt` | A2 Vel | -1 .. 1 |
| `f2VelAmt` | F2 Vel | -1 .. 1 |
| `lfo1SyncedRate` | LFO 1 S Rate | 0 .. 23 |
| `lfo2SyncedRate` | LFO 2 S Rate | 0 .. 23 |
| `v2F1Att` | F1 Att | 1 .. 30000 ms (log) |
| `v2F1Dec` | F1 Dec | 1 .. 60000 ms (log) |
| `v2F1Sus` | F1 Sus | 0 .. 1 % |
| `v2F1Rel` | F1 Rel | 1 .. 60000 ms (log) |
| `v2F1STime` | F1 S.Time | 0 .. 1000000 ms |
| `v2F1Slope` | F1 Slope | 0 .. 1 |
| `v2F1Loop` | F1 Loop | 0 .. 3 |
| `v2F1Free` | F1 Free | 0 .. 1 |
| `v2F1Legato` | F1 Legato | 0 .. 1 |
| `v2F1AttVel` | F1 Att<Vel | 0 .. 1 % |
| `v2A1Att` | A1 Att | 1 .. 30000 ms (log) |
| `v2A1Dec` | A1 Dec | 1 .. 60000 ms (log) |
| `v2A1Sus` | A1 Sus | 0 .. 1 % |
| `v2A1Rel` | A1 Rel | 1 .. 60000 ms (log) |
| `v2A1STime` | A1 S.Time | 0 .. 1000000 ms |
| `v2A1Slope` | A1 Slope | 0 .. 1 |
| `v2A1Loop` | A1 Loop | 0 .. 3 |
| `v2A1Free` | A1 Free | 0 .. 1 |
| `v2A1Legato` | A1 Legato | 0 .. 1 |
| `v2A1AttVel` | A1 Att<Vel | 0 .. 1 % |
| `v2F2Att` | F2 Att | 1 .. 30000 ms (log) |
| `v2F2Dec` | F2 Dec | 1 .. 60000 ms (log) |
| `v2F2Sus` | F2 Sus | 0 .. 1 % |
| `v2F2Rel` | F2 Rel | 1 .. 60000 ms (log) |
| `v2F2STime` | F2 S.Time | 0 .. 1000000 ms |
| `v2F2Slope` | F2 Slope | 0 .. 1 |
| `v2F2Loop` | F2 Loop | 0 .. 3 |
| `v2F2Free` | F2 Free | 0 .. 1 |
| `v2F2Legato` | F2 Legato | 0 .. 1 |
| `v2F2AttVel` | F2 Att<Vel | 0 .. 1 % |
| `v2A2Att` | A2 Att | 1 .. 30000 ms (log) |
| `v2A2Dec` | A2 Dec | 1 .. 60000 ms (log) |
| `v2A2Sus` | A2 Sus | 0 .. 1 % |
| `v2A2Rel` | A2 Rel | 1 .. 60000 ms (log) |
| `v2A2STime` | A2 S.Time | 0 .. 1000000 ms |
| `v2A2Slope` | A2 Slope | 0 .. 1 |
| `v2A2Loop` | A2 Loop | 0 .. 3 |
| `v2A2Free` | A2 Free | 0 .. 1 |
| `v2A2Legato` | A2 Legato | 0 .. 1 |
| `v2A2AttVel` | A2 Att<Vel | 0 .. 1 % |
| `f2Follow` | f2Follow | 0 .. 1 |
| `f2FollowRatio` | f2FollowRatio | 0 .. 10000 |
| `lfo1Retrig` | LFO1 Retrig | 0 .. 1 |
| `lfo2Retrig` | LFO2 Retrig | 0 .. 1 |
| `lfo1Width` | lfo1Width | 0 .. 1 |
| `lfo2Width` | lfo2Width | 0 .. 1 |
| `osc1Key` | osc1Key | 0 .. 1 |
| `osc2Key` | osc2Key | 0 .. 1 |
| `glideMs` | glideMs | 0 .. 60000 |
| `noiseColorHz` | noiseColorHz | 0 .. 24000 |
| `noiseGain` | noiseGain | 0 .. 100 |
| `uniVoices` | uniVoices | 0 .. 4 |
| `uniSpreadCt` | uniSpreadCt | 0 .. 1200 |
| `uniDelayMs` | uniDelayMs | 0 .. 60000 |
| `f1TypeLive` | f1TypeLive | 0 .. 9 |
| `f2TypeLive` | f2TypeLive | 0 .. 9 |

## Factory presets

80s VCO Brass · Accordion Unisono Pad · Bright Thin Sweep Pad · Charry Pad · Dual OSC Buzz Lead · Dual OSC Buzz Octaves Bass · Dual OSC Muted Sweep Lead · Dual OSC Plastic Bass · Dual OSC Reso Noise Bass · Dual OSC Rubber Bass · Dual OSC Sample & Hold Bass · Dual OSC Sync Bright Lead · Dual OSC Vibrato Bass · E-Piano Muted Pure · Fifth Pad · Fourths Lead · Glass High Strings Pad · Glass Low Strings Pad · Horn2 Hollow Brass · Kick Complex Perc · Mellow Notch Brass · Metalic Lead · Movie Pad · Muted Dark Bass · Muted Wow Bass · Nasal Mod Lead · Noise Hit Perc · Organ Church Slow · Organ Octaves Slow · Organ Percussive · Organ Vibrato · Overtones · Rhythmic Iron · Rhythmic Octaves Bass · S&H Games · S&H Muted Keys · S&H Pluck Slow Lead · Saw Complex Bass · Saw Detune Sync Lead · Saw Elegant Thick Keys · Saw Filter Bass · Saw Pure Brass · Saw Pure Muted Bass · Saw Sub Complex Bass · Shutter Games · Smooth SQU Bass · Soft Morning Keys · Square Dual Muted Bass · Square Percussive Bass · Square Pure Bass · Square Sync Lead · Square Sync Tremolo Pad · Strings Detuned Pad · Sweep Keys · Synth Organ Long Release · Thick Chord Pad · Tremolo Tines · Zap
