# Wavetable

An instrument (`.inst`), tested end to end.

```js
note("c3 e3 g3 b3").inst("Wavetable:12 CC's and Counting")
```

Accepted names: `wavetable`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `osc1Pos` | Pos 1 | 0 .. 1 % |
| `osc1Transpose` | Transp 1 | -24 .. 24 st |
| `osc1Detune` | Det 1 | -100 .. 100 ct |
| `osc1Level` | Level 1 | 0 .. 1 % |
| `osc2Pos` | Pos 2 | 0 .. 1 % |
| `osc2Transpose` | Transp 2 | -24 .. 24 st |
| `osc2Detune` | Det 2 | -100 .. 100 ct |
| `osc2Level` | Level 2 | 0 .. 1 % |
| `subLevel` | Sub | 0 .. 1 % |
| `subOctave` | Sub Oct | -2 .. 0 |
| `cutoff` | Cutoff | 20 .. 20000 Hz (log) |
| `resonance` | Res | 0 .. 1 % |
| `attack` | Attack | 1 .. 5000 ms (log) |
| `decay` | Decay | 1 .. 10000 ms (log) |
| `sustain` | Sustain | 0 .. 1 % |
| `release` | Release | 1 .. 10000 ms (log) |
| `attack2` | Atk 2 | 1 .. 600000 ms (log) |
| `decay2` | Dec 2 | 1 .. 120000 ms (log) |
| `sustain2` | Sus 2 | 0 .. 1 % |
| `release2` | Rel 2 | 1 .. 120000 ms (log) |
| `env2ToPos` | Env>Pos | -1 .. 1 |
| `env2ToCutoff` | Env>Filt | -10 .. 10 oct |
| `lfoRate` | LFO Rate | 0.01 .. 30 Hz (log) |
| `lfoToPos` | LFO>Pos | -1 .. 1 |
| `lfoToPitch` | LFO>Pitch | -48 .. 48 st |
| `lfoToCutoff` | LFO>Filt | -10 .. 10 oct |
| `transpose` | Transp | -48 .. 48 st |
| `volume` | Volume | 0 .. 1 % |
| `filter1Drive` | F1 Drive | 0 .. 24 dB |
| `filter1Morph` | F1 Morph | 0 .. 1 % |
| `filter2Freq` | F2 Freq | 20 .. 20000 Hz (log) |
| `filter2Res` | F2 Res | 0 .. 1.25 % |
| `filter2Drive` | F2 Drive | 0 .. 24 dB |
| `filter2Morph` | F2 Morph | 0 .. 1 % |
| `attack3` | Atk 3 | 1 .. 600000 ms (log) |
| `decay3` | Dec 3 | 1 .. 120000 ms (log) |
| `sustain3` | Sus 3 | 0 .. 1 % |
| `release3` | Rel 3 | 1 .. 120000 ms (log) |
| `env1AttackSlope` | A Slope | -1 .. 1 |
| `env1DecaySlope` | D Slope | -1 .. 1 |
| `env1ReleaseSlope` | R Slope | -1 .. 1 |
| `env2AttackSlope` | A2 Slope | -1 .. 1 |
| `env2DecaySlope` | D2 Slope | -1 .. 1 |
| `env2ReleaseSlope` | R2 Slope | -1 .. 1 |
| `env3AttackSlope` | A3 Slope | -1 .. 1 |
| `env3DecaySlope` | D3 Slope | -1 .. 1 |
| `env3ReleaseSlope` | R3 Slope | -1 .. 1 |
| `lfo1Amount` | LFO Amt | 0 .. 1 % |
| `lfo1PhaseOffset` | LFO Ph | 0 .. 360 deg |
| `lfo1Attack` | LFO Atk | 0 .. 20 s |
| `lfo1Shaping` | LFO Shaping | -1 .. 1 |
| `lfo2Rate` | LFO 2 Rate | 0.01 .. 30 Hz (log) |
| `lfo2Amount` | LFO 2 Amt | 0 .. 1 % |
| `lfo2PhaseOffset` | LFO 2 Ph | 0 .. 360 deg |
| `lfo2Attack` | LFO 2 Atk | 0 .. 20 s |
| `lfo2Shaping` | LFO 2 Shaping | -1 .. 1 |
| `lfo1SyncedRate` | LFO S Rate | 0 .. 21 |
| `lfo2SyncedRate` | LFO 2 S Rate | 0 .. 21 |
| `mod1Amount` | M1 Amt | -1 .. 1 |
| `mod2Amount` | M2 Amt | -1 .. 1 |
| `mod3Amount` | M3 Amt | -1 .. 1 |
| `mod4Amount` | M4 Amt | -1 .. 1 |
| `mod5Amount` | M5 Amt | -1 .. 1 |
| `mod6Amount` | M6 Amt | -1 .. 1 |
| `mod7Amount` | M7 Amt | -1 .. 1 |
| `mod8Amount` | M8 Amt | -1 .. 1 |
| `mod9Amount` | M9 Amt | -1 .. 1 |
| `mod10Amount` | M10 Amt | -1 .. 1 |
| `mod11Amount` | M11 Amt | -1 .. 1 |
| `mod12Amount` | M12 Amt | -1 .. 1 |
| `mod13Amount` | M13 Amt | -1 .. 1 |
| `mod14Amount` | M14 Amt | -1 .. 1 |
| `mod15Amount` | M15 Amt | -1 .. 1 |
| `mod16Amount` | M16 Amt | -1 .. 1 |
| `mod17Amount` | M17 Amt | -1 .. 1 |
| `mod18Amount` | M18 Amt | -1 .. 1 |
| `mod19Amount` | M19 Amt | -1 .. 1 |
| `mod20Amount` | M20 Amt | -1 .. 1 |
| `mod21Amount` | M21 Amt | -1 .. 1 |
| `mod22Amount` | M22 Amt | -1 .. 1 |
| `mod23Amount` | M23 Amt | -1 .. 1 |
| `mod24Amount` | M24 Amt | -1 .. 1 |
| `mod25Amount` | M25 Amt | -1 .. 1 |
| `mod26Amount` | M26 Amt | -1 .. 1 |
| `mod27Amount` | M27 Amt | -1 .. 1 |
| `mod28Amount` | M28 Amt | -1 .. 1 |
| `mod29Amount` | M29 Amt | -1 .. 1 |
| `mod30Amount` | M30 Amt | -1 .. 1 |
| `mod31Amount` | M31 Amt | -1 .. 1 |
| `mod32Amount` | M32 Amt | -1 .. 1 |
| `uniVoices` | Uni Voices | 2 .. 8 |
| `uniAmount` | Uni Amt | 0 .. 1 % |
| `glide` | Glide | 0 .. 20 s |
| `subTone` | Sub Tone | 0 .. 1 % |
| `volVelAmount` | Vol<Vel | 0 .. 1 % |
| `polyVoices` | Voices | 1 .. 16 |
| `osc1Effect1` | Osc1 FX 1 | -1 .. 1 |
| `osc1Effect2` | Osc1 FX 2 | 0 .. 1 |
| `osc2Effect1` | Osc2 FX 1 | -1 .. 1 |
| `osc2Effect2` | Osc2 FX 2 | 0 .. 1 |
| `env2Initial` | E2 Init | 0 .. 1 % |
| `env2Peak` | E2 Peak | 0 .. 1 % |
| `env2Final` | E2 Final | 0 .. 1 % |
| `env3Initial` | E3 Init | 0 .. 1 % |
| `env3Peak` | E3 Peak | 0 .. 1 % |
| `env3Final` | E3 Final | 0 .. 1 % |
| `osc1Pan` | Osc1 Pan | -1 .. 1 |
| `osc2Pan` | Osc2 Pan | -1 .. 1 |
| `modTime` | Time | -1 .. 1 % |
| `modAmount` | Amount | 0 .. 2 % |

## Factory presets

12 CC's and Counting · 37th Street · A Brief History of Chime · A Degree Of Synth · A Soft Chord · A Thick Wave · A Wobble Modwheel · Aaghra Keys · Abdominal Bass · After Fade · Air Flute Magnus · Airlite · Airplane Wave · Alien Cesarian · Alphalog Brass · Altered Harmonic Bass · Amber Low Glow · Ambient Element · Analog Soft Pad · Andreas Wide Pad · Anger Management · Anna Pad · Aqueous Pad · Arpeggiate Me · Arr Matey Lead · Asure Skies · Atmos Pad · Banjorific · Bass Grinder · Bastille Basher · Battery Acid · Bees & Snakeskin · Before The Plunge · Bell Degrees · Bell Prelude · Bob's Place Bass · Bright SAW Lead · Brutal Quad Saw · Bunker Kick · Calculated Bass · Callibrated Solo · Carpentry Skills · Change The Table Keys · Chaotica · Chasing The LFO · Chatterbox · Chouncer · Classic Analog Clavinette · Classic JX Wave · Classic Juno Wave · Clear My Throat Lead · Cletterling · Collateral Damage · Concatenation · Crockhausen · Crossover Syn Bass · Crystal Labyrinth Keys · Darknet · Descenting Dreams · Detuney Sustained Keys · Diagraph Persona · Digi Race · Digitalcable · DiveBomb Lead Drop · Drifting Ambient Pad · Dulcimore Keys · Eastern Dream Pluck · Eastern Fifth · Echo Bay · Echoic Chamber · Effing Bass · Ele Webble · Embellish The Dead Zone · Endomorph · Enjoy the Show FX · Epilogue Bass · Evolution · FM Piano Detuned · Face Melter · Fadestepper Pad · Fake Reverb · Fizz Bells · Flexibell · Fluffy zap · Flux Capacitor · Flyte Time Brass · Folded Over · Forceful Ambition · Fragile · Frantasia · Frantasmagoria · Funk Wah Solo · GGP · Ghostly Mirror · Glinting Echoes · Glocken Pluck · Glowing Filaments · Glowstick Juice · Gold Keys · Golden Growl · Grande Bass · Granite Face · Granite Shard · Grungey Ambient Pad · Hang Drum Festival · Haunted Minutes · Head Trip · Helium Blockade · Helium Inhale · Hello Nueman · Here Kitty Kitty · Hixx Trix · Hot Wobble · Juno Multi Wave · Juno Organ Wave · Jupiter Plus Bass · Just Beat It · Kick Drum FuzzJump · Kicky Tom · Kitchen Sync · Kraven Ridge · Levitate Lead · Lord of Clavichord · Lush Roads · Mad Farfisa · Martian Ham Radio · Matrix Horns · Maverick Pulser · Mechanix Bass · Mechanix Pad · Mellow Noise Pad · Micro Mini Lead · Midnight Chase · Midnight Chase Bass · Mini Flashlite · Model D Solo · Model H Lead · Model HU Bass · Molten Metal · Mono Wah Wave · Moonscape Piano · Morgen Pad · Munster Funk · Munster Funk Solo · Nasal Petroleum · Neo Post Acid · Nitrean · Noize of Art Flute · Oklahoma Corral · Organ Nylon Drawbars · Organ Retro Harmonic · Organic Lo-Fi Pad · Pad Basique · Paisley Solo · Particle Breakup · Pendulum · Perseids · Pianositar · Pitchpadpluck · Pizza Go-Go · Pizza To Go · Poison Pen · Poly 60 Saw · Poly Filter Pulse · Poly Filter Saw · Poly Juno Square · Poly Pressure Saw · Poly Pulse Blend · Poly Saw · Poly Sweep Saw · Poly Sync · Position Glass · Post Bass · Prehistoric VHS · Prog Regression · Punch Bowl Dunk · Ramble Mod · Rawkus Wobble · Release Yourself · Remember November · Replicant Sunset · Riser Section 8 · Riser Windup Light · Robert's Theorem · Roller FM Bass · Rubbery Flick · SH Notes · Saucery · Saw Stack · Scan Thru · Scraps · Second Sticks · Sentient Shadows · Shapes & Saws Pad · Shockwave Bass · Silver Keys · Silver Surfer · Simple Pad · Skatepark Dynasty · Sky Spy · Slate · Slider Deep Bass · Slow Motion · Solar Flare · Somewhere Deep In The 80's · Soul Sucker · Spacefolder · Spacey Ambient Pad · Specific Hat · Spektrum · Spring & Sprung · Sub Terrain · Subtlepad · Super Sub Drone Bass · Swurm · Sylvian Key Wayze · Symphonialgorithmic · Sync Drift Pad · Sync Juno Lead · Synced Maniplulation · Table Bass · Talk Talk Bells · Target Acquired · Tear Tear · Tell Me Sumthin' Clav · Tesla Riser Loop · The Day The Earth Shrunk · The Hunter · The Reveal · Throb Kick · Tom Yum · Tones From Nowhere · Top Quark · Toy Marimba · Trident Stab · Tronic Snare · Tunnel Vision · Turgid Kick · Turntable Brake · Twinkle & Hold · Twisted Guts · Unison Phase Bass · Unstraight · Upward Flight · VOSM · Van Der Graaf · Velo-Rezzo Plucks · Velocity Doubler · Velocity Keys · Velocity LFO Resolume · Venus Doppler · Vocal Territory · Vowel Cadence · Vox Brass · Wait For It · Walkie Talkeez · Warehouse Shivers · Warp Drive D · Wave Sync Brass · Wave Terminology · What's The Vector · Whats The Antimatter · Whisper Advantage · Wide Room Pad · Wire Bass Journey · Wowble Bass · Yah Yah Mah · Yayaya · Zardoz · squAErs
