# Ensemble

An instrument (`.inst`), tested end to end.

```js
note("c3 e3 g3 b3").inst("Ensemble:Chip ARP 8BIT")
```

Accepted names: `ensemble`.

## Engines

A sound's engine decides what its engine controls `e0`..`e7` are called; these labels work as keys:

- Duo: `wave` = `e0`, `dtn` = `e1`, `mix` = `e2`, `nois` = `e3`, `cut` = `e4`, `res` = `e5`, `drv` = `e6`, `ktr` = `e7`
- Digital: `alg` = `e0`, `r2` = `e1`, `r3` = `e2`, `r4` = `e3`, `idx` = `e4`, `mdec` = `e5`, `fb` = `e6`
- Phase: `wave` = `e0`, `wave2` = `e1`, `dcw` = `e2`, `env` = `e3`, `dtn` = `e4`, `line` = `e5`, `sub` = `e6`, `fold` = `e7`
- Chip: `chip` = `e0`, `wave` = `e1`, `duty` = `e2`, `crsh` = `e3`, `swp` = `e4`, `vib` = `e5`, `arp` = `e6`, `tone` = `e7`
- Sample: `set` = `e0`, `tune` = `e1`, `bits` = `e2`, `loop` = `e3`, `cut` = `e4`, `drv` = `e6`
- Voice: `vowl` = `e0`, `vowl2` = `e1`, `talk` = `e2`, `shift` = `e3`, `buzz` = `e4`, `brth` = `e5`, `q` = `e6`, `rand` = `e7`
- Trio: `wave` = `e0`, `int2` = `e1`, `int3` = `e2`, `dtn` = `e3`, `mode` = `e4`, `cut` = `e5`, `res` = `e6`, `pw` = `e7`
- Wheel: `reg` = `e0`, `sub` = `e1`, `body` = `e2`, `top` = `e3`, `perc` = `e4`, `click` = `e5`, `drv` = `e6`, `rotr` = `e7`
- Grain: `src` = `e0`, `pos` = `e1`, `size` = `e2`, `dens` = `e3`, `ptch` = `e4`, `rand` = `e6`, `tone` = `e7`
- Physical: `model` = `e0`, `strc` = `e1`, `brit` = `e2`, `damp` = `e3`, `pos` = `e4`, `acc` = `e5`, `bow` = `e6`, `exc` = `e7`
- Drum: `kit` = `e0`, `tune` = `e1`, `tone` = `e2`, `decy` = `e3`, `snap` = `e4`, `acc` = `e5`, `kick` = `e6`, `drv` = `e7`
- Noise: `mode` = `e0`, `colr` = `e1`, `freq` = `e2`, `res` = `e3`, `trk` = `e4`, `dens` = `e5`, `drft` = `e6`, `crsh` = `e7`
- FM6: `alg` = `e0`, `fb` = `e1`, `mlvl` = `e2`, `mrat` = `e3`, `meg` = `e4`, `vmod` = `e5`, `dtun` = `e6`, `slot` = `e7`
- Slice: `src` = `e0`, `div` = `e1`, `start` = `e2`, `ptch` = `e3`, `mode` = `e4`, `dcay` = `e6`, `tone` = `e7`

## Parameters

| Key | Live label | Values |
|---|---|---|
| `level` | LVL | 0 .. 127 |
| `atk` | ATK | 0 .. 127 |
| `dec` | DEC | 0 .. 127 |
| `sus` | SUS | 0 .. 127 |
| `rel` | REL | 0 .. 127 |
| `edFlt` | FLT | -64 .. 63 |
| `edPit` | PIT | -64 .. 63 |
| `edShp` | SHP | -64 .. 63 |
| `lrate` | RATE | 0 .. 127 |
| `lphase` | PHS | 0 .. 127 |
| `lfade` | FADE | 0 .. 127 |
| `ldPit` | PIT | -64 .. 63 |
| `ldFlt` | FLT | -64 .. 63 |
| `ldShp` | SHP | -64 .. 63 |
| `ldAmp` | AMP | 0 .. 127 |
| `root` | ROOT | 0 .. 11 |
| `sswing` | SWG | 0 .. 100 |
| `dist` | DST | 0 .. 127 |
| `chor` | CHO | 0 .. 127 |
| `dly` | DLY | 0 .. 127 |
| `rev` | REV | 0 .. 127 |
| `glide` | GLD | 0 .. 127 |
| `pan` | PAN | -64 .. 63 |
| `detune` | DTUNE | 0 .. 127 |
| `slpat` | PAT | 1 .. 16 |
| `sldepth` | DEPTH | 0 .. 127 |
| `m1amt` | AMT1 | -64 .. 63 |
| `m2amt` | AMT2 | -64 .. 63 |
| `m3amt` | AMT3 | -64 .. 63 |
| `m4amt` | AMT4 | -64 .. 63 |
| `fm1Atk` | ATK | 0 .. 127 |
| `fm1Dec` | DEC | 0 .. 127 |
| `fm1Sus` | SUS | 0 .. 127 |
| `fm1Rel` | REL | 0 .. 127 |
| `fm1Level` | LVL | 0 .. 127 |
| `fm2Atk` | ATK | 0 .. 127 |
| `fm2Dec` | DEC | 0 .. 127 |
| `fm2Sus` | SUS | 0 .. 127 |
| `fm2Rel` | REL | 0 .. 127 |
| `fm2Level` | LVL | 0 .. 127 |
| `fm3Atk` | ATK | 0 .. 127 |
| `fm3Dec` | DEC | 0 .. 127 |
| `fm3Sus` | SUS | 0 .. 127 |
| `fm3Rel` | REL | 0 .. 127 |
| `fm3Level` | LVL | 0 .. 127 |
| `fm4Atk` | ATK | 0 .. 127 |
| `fm4Dec` | DEC | 0 .. 127 |
| `fm4Sus` | SUS | 0 .. 127 |
| `fm4Rel` | REL | 0 .. 127 |
| `fm4Level` | LVL | 0 .. 127 |
| `ln0` | KICK | 0 .. 127 |
| `ln1` | SNARE | 0 .. 127 |
| `ln2` | CLAP | 0 .. 127 |
| `ln3` | HATCL | 0 .. 127 |
| `ln4` | HATOP | 0 .. 127 |
| `ln5` | TOM | 0 .. 127 |
| `ln6` | RIM | 0 .. 127 |
| `ln7` | BELL | 0 .. 127 |
| `sprd` | SPRD | 0 .. 127 |
| `ia` | INS A | 0 .. 127 |
| `ib` | INS B | 0 .. 127 |
| `ic` | INS C | 0 .. 127 |
| `imix` | MIX | 0 .. 127 |
| `e0` | Edit 1 | -128 .. 127 |
| `e1` | Edit 2 | -128 .. 127 |
| `e2` | Edit 3 | -128 .. 127 |
| `e3` | Edit 4 | -128 .. 127 |
| `e4` | Edit 5 | -128 .. 127 |
| `e5` | Edit 6 | -128 .. 127 |
| `e6` | Edit 7 | -128 .. 127 |
| `e7` | Edit 8 | -128 .. 127 |
| `voice` | VCE | `POLY` `MONO` `LEG` `UNI` (constant only) |
| `glmode` | GLMOD | `RATE` `TIME` (constant only) |
| `prio` | PRIO | `LAST` `LOW` `HIGH` (constant only) |
| `alloc` | ALLOC | `ROT` `REUSE` (constant only) |
| `ftype` | TYPE | `LP` `BP` `HP` (constant only) |
| `esync` | ESYNC | `OFF` `ON` (constant only) |
| `itype` | INSRT | `OFF` `SOFT` `HARD` `FOLD` `FUZZ` `CRUSH` `PHASR` `FLANG` `CHOR` (constant only) |
| `lwave` | WAVE | `SIN` `TRI` `SAW` `SQR` `S&H` (constant only) |
| `lsync` | SYNC | `OFF` `4BAR` `2BAR` `1/1` `1/2` `1/4` `1/8` `8T` `1/16` `16T` `1/32` (constant only) |
| `ltrig` | TRIG | `NOTE` `FREE` (constant only) |
| `lpol` | POL | `BI` `UNI` (constant only) |
| `slcr` | SLCR | `OFF` `GATE` `STUT` (constant only) |
| `slrate` | RATE | `1/8` `1/16` `1/32` `8T` `16T` `32T` (constant only) |
| `m1src` | SRC1 | `OFF` `LFO` `ENV` `VEL` `KEY` `RAND` `MODW` `AT` `EXPR` `S&H` `SLEW` `PRES` `TMBR` (constant only) |
| `m1dst` | DST1 | `OFF` `PITCH` `CUT` `SHP` `AMP` `PAN` `DIST` `CHO` `DLY` `REV` `RATE` `VIB` `E1` `E2` `E3` `E4` `E5` `E6` `E7` `E8` `DEPTH` `VEL` `TIME` (constant only) |
| `m2src` | SRC2 | `OFF` `LFO` `ENV` `VEL` `KEY` `RAND` `MODW` `AT` `EXPR` `S&H` `SLEW` `PRES` `TMBR` (constant only) |
| `m2dst` | DST2 | `OFF` `PITCH` `CUT` `SHP` `AMP` `PAN` `DIST` `CHO` `DLY` `REV` `RATE` `VIB` `E1` `E2` `E3` `E4` `E5` `E6` `E7` `E8` `DEPTH` `VEL` `TIME` (constant only) |
| `m3src` | SRC3 | `OFF` `LFO` `ENV` `VEL` `KEY` `RAND` `MODW` `AT` `EXPR` `S&H` `SLEW` `PRES` `TMBR` (constant only) |
| `m3dst` | DST3 | `OFF` `PITCH` `CUT` `SHP` `AMP` `PAN` `DIST` `CHO` `DLY` `REV` `RATE` `VIB` `E1` `E2` `E3` `E4` `E5` `E6` `E7` `E8` `DEPTH` `VEL` `TIME` (constant only) |
| `m4src` | SRC4 | `OFF` `LFO` `ENV` `VEL` `KEY` `RAND` `MODW` `AT` `EXPR` `S&H` `SLEW` `PRES` `TMBR` (constant only) |
| `m4dst` | DST4 | `OFF` `PITCH` `CUT` `SHP` `AMP` `PAN` `DIST` `CHO` `DLY` `REV` `RATE` `VIB` `E1` `E2` `E3` `E4` `E5` `E6` `E7` `E8` `DEPTH` `VEL` `TIME` (constant only) |

## Factory presets

Chip ARP 8BIT · Chip PULSE LD · Chip STEP LEAD · Chip WAVE BASS · Chip WAVE LEAD · DX7 ROM1A Master · 01 BRASS 1 · DX7 ROM1A Master · 02 BRASS 2 · DX7 ROM1A Master · 03 BRASS 3 · DX7 ROM1A Master · 04 STRINGS 1 · DX7 ROM1A Master · 05 STRINGS 2 · DX7 ROM1A Master · 06 STRINGS 3 · DX7 ROM1A Master · 07 ORCHESTRA · DX7 ROM1A Master · 08 PIANO 1 · DX7 ROM1A Master · 09 PIANO 2 · DX7 ROM1A Master · 10 PIANO 3 · DX7 ROM1A Master · 11 E.PIANO 1 · DX7 ROM1A Master · 12 GUITAR 1 · DX7 ROM1A Master · 13 GUITAR 2 · DX7 ROM1A Master · 14 SYN-LEAD 1 · DX7 ROM1A Master · 15 BASS 1 · DX7 ROM1A Master · 16 BASS 2 · DX7 ROM1A Master · 17 E.ORGAN 1 · DX7 ROM1A Master · 18 PIPES 1 · DX7 ROM1A Master · 19 HARPSICH 1 · DX7 ROM1A Master · 20 CLAV 1 · DX7 ROM1A Master · 21 VIBE 1 · DX7 ROM1A Master · 22 MARIMBA · DX7 ROM1A Master · 23 KOTO · DX7 ROM1A Master · 24 FLUTE 1 · DX7 ROM1A Master · 25 ORCH-CHIME · DX7 ROM1A Master · 26 TUB BELLS · DX7 ROM1A Master · 27 STEEL DRUM · DX7 ROM1A Master · 28 TIMPANI · DX7 ROM1A Master · 29 REFS WHISL · DX7 ROM1A Master · 30 VOICE 1 · DX7 ROM1A Master · 31 TRAIN · DX7 ROM1A Master · 32 TAKE OFF · DX7 ROM1B Keyboard & Plucked · 01 PIANO 4 · DX7 ROM1B Keyboard & Plucked · 02 PIANO 5 · DX7 ROM1B Keyboard & Plucked · 03 E.PIANO 2 · DX7 ROM1B Keyboard & Plucked · 04 E.PIANO 3 · DX7 ROM1B Keyboard & Plucked · 05 E.PIANO 4 · DX7 ROM1B Keyboard & Plucked · 06 PIANO 5THS · DX7 ROM1B Keyboard & Plucked · 07 CELESTE · DX7 ROM1B Keyboard & Plucked · 08 TOY PIANO · DX7 ROM1B Keyboard & Plucked · 09 HARPSICH 2 · DX7 ROM1B Keyboard & Plucked · 10 HARPSICH 3 · DX7 ROM1B Keyboard & Plucked · 11 CLAV 2 · DX7 ROM1B Keyboard & Plucked · 12 CLAV 3 · DX7 ROM1B Keyboard & Plucked · 13 E.ORGAN 2 · DX7 ROM1B Keyboard & Plucked · 14 E.ORGAN 3 · DX7 ROM1B Keyboard & Plucked · 15 E.ORGAN 4 · DX7 ROM1B Keyboard & Plucked · 16 E.ORGAN 5 · DX7 ROM1B Keyboard & Plucked · 17 PIPES 2 · DX7 ROM1B Keyboard & Plucked · 18 PIPES 3 · DX7 ROM1B Keyboard & Plucked · 19 PIPES 4 · DX7 ROM1B Keyboard & Plucked · 20 CALIOPE · DX7 ROM1B Keyboard & Plucked · 21 ACCORDION · DX7 ROM1B Keyboard & Plucked · 22 SITAR · DX7 ROM1B Keyboard & Plucked · 23 GUITAR 3 · DX7 ROM1B Keyboard & Plucked · 24 GUITAR 4 · DX7 ROM1B Keyboard & Plucked · 25 GUITAR 5 · DX7 ROM1B Keyboard & Plucked · 26 GUITAR 6 · DX7 ROM1B Keyboard & Plucked · 27 LUTE · DX7 ROM1B Keyboard & Plucked · 28 BANJO · DX7 ROM1B Keyboard & Plucked · 29 HARP 1 · DX7 ROM1B Keyboard & Plucked · 30 HARP 2 · DX7 ROM1B Keyboard & Plucked · 31 BASS 3 · DX7 ROM1B Keyboard & Plucked · 32 BASS 4 · DX7 ROM2A Orchestral & Percussive · 01 PICCOLO · DX7 ROM2A Orchestral & Percussive · 02 FLUTE 2 · DX7 ROM2A Orchestral & Percussive · 03 OBOE · DX7 ROM2A Orchestral & Percussive · 04 CLARINET · DX7 ROM2A Orchestral & Percussive · 05 SAX BC · DX7 ROM2A Orchestral & Percussive · 06 BASSOON · DX7 ROM2A Orchestral & Percussive · 07 STRINGS 4 · DX7 ROM2A Orchestral & Percussive · 08 STRINGS 5 · DX7 ROM2A Orchestral & Percussive · 09 STRINGS 6 · DX7 ROM2A Orchestral & Percussive · 10 STRINGS 7 · DX7 ROM2A Orchestral & Percussive · 11 STRINGS 8 · DX7 ROM2A Orchestral & Percussive · 12 BRASS 4 · DX7 ROM2A Orchestral & Percussive · 13 BRASS 5 · DX7 ROM2A Orchestral & Percussive · 14 BRASS 6 BC · DX7 ROM2A Orchestral & Percussive · 15 BRASS 7 · DX7 ROM2A Orchestral & Percussive · 16 BRASS 8 · DX7 ROM2A Orchestral & Percussive · 17 RECORDER · DX7 ROM2A Orchestral & Percussive · 18 HARMONICA1 · DX7 ROM2A Orchestral & Percussive · 19 HRMNCA2 BC · DX7 ROM2A Orchestral & Percussive · 20 VOICE 2 · DX7 ROM2A Orchestral & Percussive · 21 VOICE 3 · DX7 ROM2A Orchestral & Percussive · 22 GLOKENSPL · DX7 ROM2A Orchestral & Percussive · 23 VIBE 2 · DX7 ROM2A Orchestral & Percussive · 24 XYLOPHONE · DX7 ROM2A Orchestral & Percussive · 25 CHIMES · DX7 ROM2A Orchestral & Percussive · 26 GONG 1 · DX7 ROM2A Orchestral & Percussive · 27 GONG 2 · DX7 ROM2A Orchestral & Percussive · 28 BELLS · DX7 ROM2A Orchestral & Percussive · 29 COW BELL · DX7 ROM2A Orchestral & Percussive · 30 BLOCK · DX7 ROM2A Orchestral & Percussive · 31 FLEXATONE · DX7 ROM2A Orchestral & Percussive · 32 LOG DRUM · DX7 ROM2B Synth, Complex & Effects · 01 SYN-LEAD 2 · DX7 ROM2B Synth, Complex & Effects · 02 SYN-LEAD 3 · DX7 ROM2B Synth, Complex & Effects · 03 SYN-LEAD 4 · DX7 ROM2B Synth, Complex & Effects · 04 SYN-LEAD 5 · DX7 ROM2B Synth, Complex & Effects · 05 SYN-CLAV 1 · DX7 ROM2B Synth, Complex & Effects · 06 SYN-CLAV 2 · DX7 ROM2B Synth, Complex & Effects · 07 SYN-CLAV 3 · DX7 ROM2B Synth, Complex & Effects · 08 SYN-PIANO · DX7 ROM2B Synth, Complex & Effects · 09 SYNBRASS 1 · DX7 ROM2B Synth, Complex & Effects · 10 SYNBRASS 2 · DX7 ROM2B Synth, Complex & Effects · 11 SYNORGAN 1 · DX7 ROM2B Synth, Complex & Effects · 12 SYNORGAN 2 · DX7 ROM2B Synth, Complex & Effects · 13 SYN-VOX · DX7 ROM2B Synth, Complex & Effects · 14 SYN-ORCH · DX7 ROM2B Synth, Complex & Effects · 15 SYN-BASS 1 · DX7 ROM2B Synth, Complex & Effects · 16 SYN-BASS 2 · DX7 ROM2B Synth, Complex & Effects · 17 HARP-FLUTE · DX7 ROM2B Synth, Complex & Effects · 18 BELL-FLUTE · DX7 ROM2B Synth, Complex & Effects · 19 E.P-BRS BC · DX7 ROM2B Synth, Complex & Effects · 20 T.BL-EXPA · DX7 ROM2B Synth, Complex & Effects · 21 CHIME-STRG · DX7 ROM2B Synth, Complex & Effects · 22 B.DRM-SNAR · DX7 ROM2B Synth, Complex & Effects · 23 SHIMMER · DX7 ROM2B Synth, Complex & Effects · 24 EVOLUTION · DX7 ROM2B Synth, Complex & Effects · 25 WATER GDN · DX7 ROM2B Synth, Complex & Effects · 26 WASP STING · DX7 ROM2B Synth, Complex & Effects · 27 LASER GUN · DX7 ROM2B Synth, Complex & Effects · 28 DESCENT · DX7 ROM2B Synth, Complex & Effects · 29 OCTAVE WAR · DX7 ROM2B Synth, Complex & Effects · 30 GRAND PRIX · DX7 ROM2B Synth, Complex & Effects · 31 ST.HELENS · DX7 ROM2B Synth, Complex & Effects · 32 EXPLOSION · Digital BASS · Digital BELL · Digital BRASS · Digital E.PIANO · Digital FUNK KEY · Digital MARIMBA · Digital ORGAN · Digital PAD · Drum DEEP KIT · Drum DRUM KIT · Drum PERC KIT · Drum TIGHT KIT · Duo ACID · Duo BRASS · Duo PLUCK · Duo PWM STR · Duo RAVE · Duo SAW LEAD · Duo SINE KEY · Duo SOFT PAD · Duo SQR BASS · Duo STRINGS · Duo SUB BASS · Duo WIND · FM6 BELL · FM6 BRASS · FM6 FM BASS · FM6 MARIMBA · FM6 ORGAN · FM6 PAD · FM6 PLUCK · FM6 TINE EP · Grain CLOUD PAD · Grain FROZEN · Grain GLITCH · Grain SHIMMER · Noise ARCADE · Noise METAL · Noise RAIN · Noise WIND · Phase BELL · Phase BRASS · Phase ORGAN · Phase RESO · Phase STRING · Phase WIRE · Physical BELL TREE · Physical BOWED METAL · Physical DRONE STRING · Physical HAND DRUM · Physical HARP · Physical KALIMBA · Physical MARIMBA · Physical PLUCK · Physical TOMS · Sample FLUTE · Sample PIANO · Sample SAX · Slice CHOP · Slice STUTTER · StudioReine V1 1-32 (Xavier Riou) · 01 Talkbox001 · StudioReine V1 1-32 (Xavier Riou) · 02 Talkbox002 · StudioReine V1 1-32 (Xavier Riou) · 03 Sawtooth01 · StudioReine V1 1-32 (Xavier Riou) · 04 Squarewa01 · StudioReine V1 1-32 (Xavier Riou) · 05 Supersaw01 · StudioReine V1 1-32 (Xavier Riou) · 06 Supersqu01 · StudioReine V1 1-32 (Xavier Riou) · 07 SynthBras1 · StudioReine V1 1-32 (Xavier Riou) · 08 SynthBras2 · StudioReine V1 1-32 (Xavier Riou) · 09 SynthBras3 · StudioReine V1 1-32 (Xavier Riou) · 10 SynthBras4 · StudioReine V1 1-32 (Xavier Riou) · 11 BrassPad01 · StudioReine V1 1-32 (Xavier Riou) · 12 BrassPad02 · StudioReine V1 1-32 (Xavier Riou) · 13 SynthStr01 · StudioReine V1 1-32 (Xavier Riou) · 14 SynthStr02 · StudioReine V1 1-32 (Xavier Riou) · 15 SynthStr03 · StudioReine V1 1-32 (Xavier Riou) · 16 SynthStr04 · StudioReine V1 1-32 (Xavier Riou) · 17 PumpString · StudioReine V1 1-32 (Xavier Riou) · 18 INIT VOICE · StudioReine V1 1-32 (Xavier Riou) · 19 SawtoothMW · StudioReine V1 1-32 (Xavier Riou) · 20 SquarewaMW · StudioReine V1 1-32 (Xavier Riou) · 21 SupersawMW · StudioReine V1 1-32 (Xavier Riou) · 22 SupersquMW · StudioReine V1 1-32 (Xavier Riou) · 23 INIT VOICE · StudioReine V1 1-32 (Xavier Riou) · 24 INIT VOICE · StudioReine V1 1-32 (Xavier Riou) · 25 SynthBraMW · StudioReine V1 1-32 (Xavier Riou) · 26 SynthStr05 · StudioReine V1 1-32 (Xavier Riou) · 27 ArpSynth02 · StudioReine V1 1-32 (Xavier Riou) · 28 ArpSynth01 · StudioReine V1 1-32 (Xavier Riou) · 29 SynthStrMW · StudioReine V1 1-32 (Xavier Riou) · 30 SynthStMW2 · StudioReine V1 1-32 (Xavier Riou) · 31 INIT VOICE · StudioReine V1 1-32 (Xavier Riou) · 32 New-York · StudioReine V1 33-64 (Xavier Riou) · 01 OrganX01.. · StudioReine V1 33-64 (Xavier Riou) · 02 OrganX02.. · StudioReine V1 33-64 (Xavier Riou) · 03 OrganX03.. · StudioReine V1 33-64 (Xavier Riou) · 04 OrganX04.. · StudioReine V1 33-64 (Xavier Riou) · 05 INIT VOICE · StudioReine V1 33-64 (Xavier Riou) · 06 INIT VOICE · StudioReine V1 33-64 (Xavier Riou) · 07 INIT VOICE · StudioReine V1 33-64 (Xavier Riou) · 08 INIT VOICE · StudioReine V1 33-64 (Xavier Riou) · 09 HammB3X4V. · StudioReine V1 33-64 (Xavier Riou) · 10 HammB3X3V. · StudioReine V1 33-64 (Xavier Riou) · 11 HammB3X2V. · StudioReine V1 33-64 (Xavier Riou) · 12 HammB3X1V. · StudioReine V1 33-64 (Xavier Riou) · 13 HammB3X4.. · StudioReine V1 33-64 (Xavier Riou) · 14 HammB3X3.. · StudioReine V1 33-64 (Xavier Riou) · 15 HammB3X2.. · StudioReine V1 33-64 (Xavier Riou) · 16 HammB3X1.. · StudioReine V1 33-64 (Xavier Riou) · 17 OrganX01MW · StudioReine V1 33-64 (Xavier Riou) · 18 OrganX02MW · StudioReine V1 33-64 (Xavier Riou) · 19 OrganX03MW · StudioReine V1 33-64 (Xavier Riou) · 20 OrganX04MW · StudioReine V1 33-64 (Xavier Riou) · 21 INIT VOICE · StudioReine V1 33-64 (Xavier Riou) · 22 INIT VOICE · StudioReine V1 33-64 (Xavier Riou) · 23 INIT VOICE · StudioReine V1 33-64 (Xavier Riou) · 24 INIT VOICE · StudioReine V1 33-64 (Xavier Riou) · 25 HammB3X4VW · StudioReine V1 33-64 (Xavier Riou) · 26 HammB3X3VW · StudioReine V1 33-64 (Xavier Riou) · 27 HammB3X2VW · StudioReine V1 33-64 (Xavier Riou) · 28 HammB3X1VW · StudioReine V1 33-64 (Xavier Riou) · 29 HammB3X4MW · StudioReine V1 33-64 (Xavier Riou) · 30 HammB3X3MW · StudioReine V1 33-64 (Xavier Riou) · 31 HammB3X2MW · StudioReine V1 33-64 (Xavier Riou) · 32 HammB3X1MW · Synthoxicated Pafreak 1-32 · 01 SWEEPER MW · Synthoxicated Pafreak 1-32 · 02 GEARBOX · Synthoxicated Pafreak 1-32 · 03 FORTEPIANO · Synthoxicated Pafreak 1-32 · 04 TRABOLERO · Synthoxicated Pafreak 1-32 · 05 KWATRO SAW · Synthoxicated Pafreak 1-32 · 06 SQR BASS · Synthoxicated Pafreak 1-32 · 07 GITARA ELE · Synthoxicated Pafreak 1-32 · 08 BASS KLAS. · Synthoxicated Pafreak 1-32 · 09 NOISE BASS · Synthoxicated Pafreak 1-32 · 10 ALEX F. BS · Synthoxicated Pafreak 1-32 · 11 ALEX F. LD · Synthoxicated Pafreak 1-32 · 12 DIRE STRTS · Synthoxicated Pafreak 1-32 · 13 SLAP GITAR · Synthoxicated Pafreak 1-32 · 14 FORMANT MW · Synthoxicated Pafreak 1-32 · 15 REVOLUTION · Synthoxicated Pafreak 1-32 · 16 AFRYKA MW · Synthoxicated Pafreak 1-32 · 17 UNIBELLA · Synthoxicated Pafreak 1-32 · 18 RYTHM BASS · Synthoxicated Pafreak 1-32 · 19 ST.SPORT80 · Synthoxicated Pafreak 1-32 · 20 iPAD MV · Synthoxicated Pafreak 1-32 · 21 STRING MW · Synthoxicated Pafreak 1-32 · 22 EQ BASS MW · Synthoxicated Pafreak 1-32 · 23 MONO SQ MW · Synthoxicated Pafreak 1-32 · 24 HARFA LSR · Synthoxicated Pafreak 1-32 · 25 VOICE PAD · Synthoxicated Pafreak 1-32 · 26 CHOIR EFKT · Synthoxicated Pafreak 1-32 · 27 METALOZA · Synthoxicated Pafreak 1-32 · 28 GITARA AKU · Synthoxicated Pafreak 1-32 · 29 PREDATOR B · Synthoxicated Pafreak 1-32 · 30 MUSIC BOX · Synthoxicated Pafreak 1-32 · 31 SH LFO MW · Synthoxicated Pafreak 1-32 · 32 LASERDANCE · Synthoxicated Pafreak 33-64 · 01 ROLAND BRS · Synthoxicated Pafreak 33-64 · 02 VELO BASS · Synthoxicated Pafreak 33-64 · 03 TSQR DECAY · Synthoxicated Pafreak 33-64 · 04 LFO PLS MW · Synthoxicated Pafreak 33-64 · 05 WIOLETTA · Synthoxicated Pafreak 33-64 · 06 NIBYLANDIA · Synthoxicated Pafreak 33-64 · 07 DZWONNICA · Synthoxicated Pafreak 33-64 · 08 ATTAKER MW · Synthoxicated Pafreak 33-64 · 09 STRING PAD · Synthoxicated Pafreak 33-64 · 10 OXYGENE BS · Synthoxicated Pafreak 33-64 · 11 BASS 90 MW · Synthoxicated Pafreak 33-64 · 12 UNISAW MW · Synthoxicated Pafreak 33-64 · 13 OX STRINGS · Synthoxicated Pafreak 33-64 · 14 GIT BASS · Synthoxicated Pafreak 33-64 · 15 FIX PIANO · Synthoxicated Pafreak 33-64 · 16 PHASER STR · Synthoxicated Pafreak 33-64 · 17 DOTTED SAW · Synthoxicated Pafreak 33-64 · 18 FLUTE BLOW · Synthoxicated Pafreak 33-64 · 19 WIRE VOICE · Synthoxicated Pafreak 33-64 · 20 CRUNCHIPS · Synthoxicated Pafreak 33-64 · 21 CYKADY MW · Synthoxicated Pafreak 33-64 · 22 VANGELIS Q · Synthoxicated Pafreak 33-64 · 23 BLUNT BASS · Synthoxicated Pafreak 33-64 · 24 BUTTER BSS · Synthoxicated Pafreak 33-64 · 25 DOWNSAMPLE · Synthoxicated Pafreak 33-64 · 26 METAL BCKT · Synthoxicated Pafreak 33-64 · 27 UNI-GUITAR · Synthoxicated Pafreak 33-64 · 28 UNIPULS MW · Synthoxicated Pafreak 33-64 · 29 ECHOTRIX · Synthoxicated Pafreak 33-64 · 30 MACARENA · Synthoxicated Pafreak 33-64 · 31 TUBE BASS · Synthoxicated Pafreak 33-64 · 32 CHOIRUS MW · Trio ARP LEAD · Trio CHIP CHOIR · Trio FAT BASS · Trio RING BELL · Trio SYNC LEAD · Tutti FM Essentials · 01 EP TINE · Tutti FM Essentials · 02 EP BRIGHT · Tutti FM Essentials · 03 EP SOFT · Tutti FM Essentials · 04 EP BALLAD · Tutti FM Essentials · 05 CLAV FUNK · Tutti FM Essentials · 06 HARPSI · Tutti FM Essentials · 07 TOY PIANO · Tutti FM Essentials · 08 FM BASS · Tutti FM Essentials · 09 SLAP BASS · Tutti FM Essentials · 10 SUB BASS · Tutti FM Essentials · 11 ACID BASS · Tutti FM Essentials · 12 TUBE BELL · Tutti FM Essentials · 13 GLOCK · Tutti FM Essentials · 14 MARIMBA · Tutti FM Essentials · 15 CELESTA · Tutti FM Essentials · 16 WARM PAD · Tutti FM Essentials · 17 GLASS PAD · Tutti FM Essentials · 18 SLOW STRNG · Tutti FM Essentials · 19 CHOIR AAH · Tutti FM Essentials · 20 BRASS SWEL · Tutti FM Essentials · 21 TRUMPET · Tutti FM Essentials · 22 FLUTE · Tutti FM Essentials · 23 DRAWBARS · Tutti FM Essentials · 24 PERC ORGAN · Tutti FM Essentials · 25 CHURCH ORG · Tutti FM Essentials · 26 SYNC LEAD · Tutti FM Essentials · 27 WHEEL LEAD · Tutti FM Essentials · 28 SQUARE LD · Tutti FM Essentials · 29 FM DRUM · Tutti FM Essentials · 30 METAL HIT · Tutti FM Essentials · 31 RISER · Tutti FM Essentials · 32 WIND · Voice CHOIR AAH · Voice VOX LEAD · Voice WHISPER · Voice WOW BASS · Wheel FULL ORGAN · Wheel GOSPEL · Wheel JAZZ PERC · Wheel ROCK DRIVE · Wheel SOFT FLUTE
