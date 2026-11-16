# Device catalogue

Generated from TuttiDAW's device registry: every instrument, MIDI effect and
audio effect, the factory presets code can load and the parameters it can
set. Load one with `.inst("Device")` or `.inst("Device:Preset")` (and the
same for `.fx` and `.midifx`); see a device's page for its parameter keys,
ranges and units.

## Instruments: .inst(name, params)

| Device | Status | Presets | Parameters |
|---|---|---|---|
| [6-Operator FM](devices/sixop.md) | available | 0 | 172 |
| [Basic Synth](devices/synth.md) | available | 12 | 10 |
| [Clang Synth](devices/dsclang.md) | available | 0 | 8 |
| CLAP Instrument | not available in code: a CLAP plug-in runs plug-in code and exists only in the desktop app | 0 | 0 |
| [Clap Synth](devices/dsclap.md) | available | 0 | 7 |
| [Cymbal Synth](devices/dscymbal.md) | available | 0 | 4 |
| [Drum Grid](devices/drumrack.md) | tested end to end | 82 | 207 |
| [Drum Synth](devices/drumsynth.md) | available | 32 | 14 |
| [Electric Piano](devices/electric.md) | available | 17 | 32 |
| External Instrument | not available in code: it routes MIDI to hardware | 0 | 1 |
| [FM Drum](devices/dsfm.md) | available | 0 | 7 |
| [FM Synth](devices/operator.md) | tested end to end | 331 | 145 |
| [Hat Synth](devices/dshh.md) | available | 0 | 5 |
| [Kick Synth](devices/dskick.md) | available | 0 | 7 |
| [Kit Sampler](devices/impulse.md) | available | 13 | 139 |
| [Layer Synth](devices/meld.md) | available | 84 | 221 |
| [Mallet Synth](devices/collision.md) | available | 33 | 111 |
| [Mini Sampler](devices/simpler.md) | tested end to end | 38 | 212 |
| [Multi-Engine Synth](devices/ensemble.md) | tested end to end | 367 | 92 |
| [Sampler](devices/sampler.md) | tested end to end | 164 | 210 |
| [Snare Synth](devices/dssnare.md) | available | 0 | 5 |
| [String Model](devices/tension.md) | available | 107 | 99 |
| [Subtractive Synth](devices/drift.md) | tested end to end | 89 | 64 |
| [Tom Synth](devices/dstom.md) | available | 0 | 6 |
| [Virtual Analog](devices/analog.md) | tested end to end | 58 | 162 |
| [Vocal Synth](devices/chimera.md) | available | 0 | 14 |
| [Wavetable](devices/wavetable.md) | tested end to end | 270 | 110 |

## MIDI effects: .midifx(name, params)

| Device | Status | Presets | Parameters |
|---|---|---|---|
| [Arpeggiator](devices/arpeggiator.md) | tested end to end | 3 | 19 |
| CC Control | not available in code yet: it sends controller data, which needs a target | 0 | 16 |
| [Chord](devices/midichord.md) | tested end to end | 6 | 28 |
| Expression Control | not available in code yet: modulators need mapping targets, which come in a later version | 0 | 95 |
| [Extended Arpeggiator](devices/midifmarp.md) | available | 4 | 8 |
| MIDI Envelope | not available in code yet: modulators need mapping targets, which come in a later version | 2 | 15 |
| MIDI Monitor | not available in code: it only displays the notes | 0 | 1 |
| MIDI Shaper | not available in code yet: modulators need mapping targets, which come in a later version | 1 | 11 |
| MPE Control | not available in code yet: MPE control comes in a later version | 7 | 47 |
| [Note Echo](devices/midinoteecho.md) | available | 9 | 12 |
| [Note Length](devices/midinotelength.md) | tested end to end | 4 | 9 |
| [Pitch](devices/midipitch.md) | available | 3 | 8 |
| [Random](devices/midirandom.md) | available | 3 | 6 |
| [Scale](devices/midiscale.md) | tested end to end | 4 | 7 |
| [Velocity](devices/midivelocity.md) | available | 3 | 9 |

## Audio effects: .fx(name, params)

| Device | Status | Presets | Parameters |
|---|---|---|---|
| [3-Band EQ](devices/eqthree.md) | available | 2 | 9 |
| [Amp](devices/amp.md) | available | 12 | 7 |
| [Auto Filter](devices/filter.md) | tested end to end | 3 | 37 |
| [Auto Pan-Tremolo](devices/autopan.md) | tested end to end | 3 | 19 |
| [Auto Pitch](devices/autoshift.md) | available | 4 | 48 |
| [Bitcrusher](devices/redux.md) | tested end to end | 3 | 9 |
| [Bus Compressor](devices/glue.md) | tested end to end | 3 | 18 |
| [Cabinet](devices/cabinet.md) | available | 11 | 1 |
| [Channel EQ](devices/channeleq.md) | available | 3 | 5 |
| [Chorus](devices/chorus.md) | tested end to end | 3 | 13 |
| CLAP Plugin | not available in code: a CLAP plug-in runs plug-in code and exists only in the desktop app | 0 | 0 |
| [Clipper](devices/clipper.md) | available | 4 | 6 |
| [Compressor](devices/compressor.md) | tested end to end | 4 | 22 |
| [Convolution Reverb](devices/hybrid-reverb.md) | available | 6 | 4 |
| [Delay](devices/delay.md) | tested end to end | 6 | 19 |
| [Denoise](devices/denoise.md) | available | 4 | 1 |
| [Drum Shaper](devices/drumbuss.md) | available | 3 | 11 |
| [Echo](devices/echo.md) | tested end to end | 5 | 38 |
| Envelope Follower | not available in code yet: modulators need mapping targets, which come in a later version | 5 | 8 |
| External Audio Effect | not available in code: it routes audio to hardware | 0 | 3 |
| [Filter Delay](devices/filterdelay.md) | available | 4 | 19 |
| [Gate](devices/gate.md) | available | 3 | 18 |
| [Granular Delay](devices/graindelay.md) | available | 4 | 8 |
| LFO | not available in code yet: modulators need mapping targets, which come in a later version | 4 | 14 |
| [Limiter](devices/limiter.md) | available | 3 | 8 |
| Looper | not available in code: it records and loops live audio; a program written as code has no live input to loop | 6 | 2 |
| [Micro Looper](devices/looplet.md) | available | 4 | 42 |
| [Multi Distortion](devices/roar.md) | available | 4 | 52 |
| Multi-Engine Bus | not available in code: an Ensemble Set's buses are set with ensembleSet({...}) | 0 | 9 |
| Multi-Engine Master | not available in code: an Ensemble Set's master is set with ensembleSet({...}) | 0 | 26 |
| [Multiband Dynamics](devices/multibanddynamics.md) | available | 3 | 44 |
| [Noise Distortion](devices/erosion.md) | available | 3 | 4 |
| [Overdrive](devices/overdrive.md) | available | 4 | 6 |
| [Parametric EQ](devices/eqeight.md) | tested end to end | 3 | 51 |
| [Pedal](devices/pedal.md) | available | 3 | 8 |
| [Phaser-Flanger](devices/phaserflanger.md) | available | 5 | 24 |
| [Pitch Shifter](devices/pitchshifter.md) | available | 10 | 38 |
| Rack | not available in code yet: racks and their macros come in a later version | 3 | 1 |
| [Resonant Body](devices/corpus.md) | available | 4 | 31 |
| [Resonator](devices/resonator.md) | available | 5 | 31 |
| [Reverb](devices/reverb.md) | tested end to end | 79 | 25 |
| [Saturator](devices/saturator.md) | tested end to end | 3 | 6 |
| Shaper | not available in code yet: modulators need mapping targets, which come in a later version | 2 | 12 |
| [Spectral Delay](devices/spectraltime.md) | available | 5 | 27 |
| [Spectral Resonator](devices/spectralresonator.md) | available | 6 | 24 |
| Spectrum | not available in code: it only displays the signal | 10 | 0 |
| [Stutter](devices/beatrepeat.md) | available | 5 | 17 |
| [Time Align](devices/aligndelay.md) | available | 4 | 10 |
| [Transient Shaper](devices/transientshaper.md) | available | 7 | 8 |
| [Tube Drive](devices/dynamic-tube.md) | available | 2 | 8 |
| Tuner | not available in code: it only displays the pitch | 0 | 0 |
| [Utility](devices/utility.md) | tested end to end | 3 | 11 |
| [Vinyl Wear](devices/vinyl.md) | available | 4 | 13 |
| [Vocoder](devices/vocoder.md) | available | 5 | 23 |
| [Voice Leveler](devices/leveler.md) | available | 4 | 5 |
