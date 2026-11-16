# After Hours: notes

Deep house instrumental, F minor, 123 BPM, 64 bars (2:05). Program: `song.tc`. Final render: `render-final.wav` (args in `render.json`). Plan: `spec.yaml`.
I cannot listen. Everything below comes from the notes in the code, the skills' checklists and the render reports (loudness, bands, groove, per-bar loudness).

## Intent
- **One thing:** the last record at 4 a.m.: a warm chord keeps leaning forward like it is asking for one more dance.
- **References (one device each):** Mr. Fingers, "Can You Feel It" (1986): chords carrying a passage with no topline (the breakdown). Frankie Knuckles feat. Jamie Principle, "Your Love" (1987): a riff that never stops underneath while a voice line rides in its gaps (stab vs lead).
- **Listener:** a GitHub visitor deciding in ten seconds (laptop/earbuds), and a DJ who needs a kick-led intro and outro.

## The final melody (lead sheet)
16th grid, 1-based onsets. Durations: s 16th, e 8th, e. dotted 8th, q quarter, q. dotted quarter, h half. "~>" = tied over the barline. The stab riff hits 16ths 4, 7 and 11 of every bar; every lead note is >= Bb4 (the stab's top voice is <= Ab4).

**Verse (V1, bars 9-16; also the call teased once in bar 6, 0:10)**

| Bar | Chord | Melody |
|---|---|---|
| 9 | Fm9 | r e · Bb4 e · Eb5 s · F5 e. · r q · F5 e · Eb5 e ~> |
| 10 | Fm9 | C5 q. (lands on 1) · r (the riff answers alone) |
| 11 | Bb9 | r e · C5 e · F5 s · G5 e. · r q · G5 e · F5 e ~> |
| 12 | Bb9 | D5 q. · r |
| 13 | Fm9 | as bar 9 |
| 14 | Fm9 | C5 q · Eb5 h (held: a question) · r q |
| 15 | Bb9 | r e · C5 e · F5 s · G5 e. · r h (no answer) |
| 16 | C7sus4, C7 | r (3 beats) · Bb4 e · C5 e (run-up) |

**Chorus (C1, bars 17-24; repeated twice in the drop, bars 41-56)**

| Bar | Chord | Melody |
|---|---|---|
| 17 | Dbmaj7 | F5 e · Eb5 e · C5 q · r q · Bb4 e · C5 e ~> |
| 18 | Eb7sus4, Eb7 | Eb5 q. · r h · G5 e ~> |
| 19 | Cm7 | G5 e · F5 e · Eb5 q · r q · Bb4 e · Eb5 s · F5 s ~> |
| 20 | Fm9 | (F5 to beat 2½) · r |
| 21 | Dbmaj7 | F5 e · Eb5 e · C5 q · r q · Eb5 e · Ab5 e ~> |
| 22 | Eb7sus4, Eb7 | (Ab5 to beat 3) · G5 q · r q |
| 23 | Gbmaj7, C7 | F5 q · Db5 e · r e · C5 e. · Bb4 s · C5 e · E5 e |
| 24 | Fm9 | F5 h · r h |

- Motif: call z = Bb4-Eb5-F5 (up a 4th, then a step, to the tonic); answer z' = F5-Eb5-C5 (z retrograded, last note bent to the 5th), sung in the riff's empty beat 4 and landing on the next downbeat. In the chorus the call falls from the downbeat and the answer rises; bar 19's answer is the verse's call.
- Range Bb4-Ab5. Peak Ab5 in bar 21-22 (and 53-54), prepared by a wind-up (C5) and a run-up (Eb5) and resolving with the Eb7sus4 -> Eb7.
- Velocities shaped per phrase (calls rise to their top note, answers fall). Glide 6, legato 1.05, 6 ms ahead of the beat.
- Drop bars 53-56: lead2 a third below (Db5 C5 Ab4 · C5 F5~> · Eb5 · Db5 Bb4 · C5).
- Breakdown bars 29-34, flute counter-line: Bb4 (w) · Eb5 (w) · F5 (w + h) · Eb5 (h) · C5 (w) · E5 (w) → the drop's first lead note F5.

## Plan grid (sections × parts) and energy curve

| Part | I 1-8 | V1 9-16 | C1 17-24 | BD 25-34 | BU 35-40 | D 41-56 | O 57-64 |
|---|---|---|---|---|---|---|---|
| kick | x | x | x | | 35-38 | x (out 56) | x |
| hats | closed; +open from 5 | closed only | closed + open | | 16ths, rising | closed + open | closed + open |
| clap | roll in 8 | 2 & 4 | 2 & 4 | | snare 2&4 → 8ths → 16ths | 2 & 4, roll in 48 | 57-60 |
| perc (rim) | | roll in 16 | ghost pattern | | | busier pattern | |
| shaker | | | x | | | x | |
| crash | | | 17 | | | 41, 49 | |
| riser | | | | | x | | |
| bass | | offbeat 8ths | light roll | | | full roll | offbeat 57-60 |
| stab (hook) | stab_intro, filtered | x (×0.8) | x (chorus chords, ×0.95) | stab_bd alone, half speed (×0.8) | fragments → 16ths → stop | x (×1.15) | one stab/bar 57-60 |
| sparkle | | | | | | x | |
| pad (low strings) | | | | 29-34 | | | |
| counter (flute) | | | | 29-34 | | | |
| lead | tease bar 6 | x | x | | | x (×1.1) | |
| lead2 | | | | | | 53-56 | |

Energy curve (spec): I 3 · V1 4 · C1 6 · BD 3 · BU 5 · D 10 · O 3.
Measured per-section mean bar loudness: see "Renders" below.

## Sounds and why (all from REFERENCE/lessons/house: sounds, presets, levels; no notes)
- **Stab:** `Ensemble:Wheel JAZZ PERC` (main, deep-shuffle): the warm organ stab of the house lessons. Chorus raised to 40 for width, high-pass 120 Hz, voiced drop-2 so the 300-500 Hz band is less crowded.
- **Lead:** `Ensemble:Voice VOX LEAD` with the lady/starlight settings and the glide from main: the "vocal-like" lead of the brief.
- **Bass:** `Ensemble:Duo SUB BASS` (deep-keys settings) + Saturator (drive 10, 60 %) so a sub-only patch has harmonics on small speakers (mc-sound-design §6).
- **Sparkle:** `Ensemble:Duo PLUCK` (lady settings), the riff's top line two octaves up in the drop only: the new drop element in the 1-5 kHz band (mc-orchestration §3.2, mc-texture-layering §4.5).
- **Low strings:** `Ensemble:Duo STRINGS` (acid settings), low shells under the breakdown riff.
- **Flute:** `Ensemble:Sample FLUTE` (deep-keys settings), the breakdown's counter-line.
- **Drums:** the lessons' default kit names (808 Core Kit): bd, cp, sd, rim, hh, oh, sh, cr. The kick gets a light soft-clip saturator.
- **Space:** shared buses: Dark Medium Room, Large Hall, 1/8-dotted (366 ms) filtered ping-pong echo. Sidechain from the kick on the bass and stab. Master: Utility (0.8 in I/O, 1.25 in the body) → Bus Compressor (threshold −8, 2:1) → Limiter (ceiling −1).

## Reviewer's points (review-song.md) and what I did

| Point | What I did |
|---|---|
| **Top 1:** the lead doesn't answer the riff (same half-bar, on/under its top voice) | Rewrote the lead: calls in beats 1-3 under the held stabs, answers in the riff's empty beat 4 landing on the next downbeat; no lead onset on a stab onset (stab 4/7/11, lead 1/3/5/6/9/12/13/15/16); lowest lead note Bb4 above the stab's top (≤ Ab4). Per-note velocity contour, glide 6, legato 1.05 |
| **Top 2:** the drop is the verse again; no lift | The drop opens with the chorus (C7 → Dbmaj7, the lead's call on the downbeat of bar 41); its second pass adds lead2 a third below at the climax (bars 53-56); the sparkle layer and the full rolling bass exist only in the drop; V1 now has closed hats only, C1 adds open hats/shaker/rim and a light roll; the build's velocities were capped so it stays below the drop |
| **Top 3:** hook muffled in the intro, missing in the breakdown | Intro: the full riff from bar 1, filter from 700 Hz (was 280), closed hats from bar 1, the call teased in bar 6 (0:10; bar 7 was the review's suggestion, but there the Eb5 clashed with Bb9's D in code_check). Breakdown: the riff itself alone at half harmonic speed (bars 25-28), then low strings under it and the flute singing the call augmented (29-34) |
| Note 1: the bass doesn't roll audibly | Saturator drive 10 / 60 % wet; C1 now rolls lightly (rollA), the drop fully |
| Note 2: lead not vocal | glide 6, legato 1.05, per-phrase velocities |
| Note 3: counter-line masked in the drop | moved to the breakdown, Bb4-F5, above the stab |
| Note 4: nearly mono | hats +0.5, shaker −0.55, perc +0.55, stab chorus 40, lead2/sparkle panned; master width 0.8 in I/O, 1.25 in the body (after the audit). Measured width is still 0.125: not solved (see Renders) |
| Note 5: boxy and over-limited | stab re-voiced drop-2 + high-pass 120 Hz; master glue threshold −14 → −8; soft-clip on the kick. Result: see Renders |
| Note 6: too close to the lessons | Fm re-voiced [eb3,ab3,c4,g4] (was main.tc's first chord); the call changed from C5-Eb5-F5 (main.tc's hook opening) to Bb4-Eb5-F5 |
| Compliance gaps (lead under stab; borrow not carried out; flat V1→C1→D; counter masked; width; boxiness; lessons) | covered by the rows above; spec.yaml updated (material, form notes, roster, counterline, energy curve, mix intent) |

## Every revision
1. **Stage A:** three melody candidates (A rhythmic cell, B lyrical, C call-and-response); pad Fm9 voiced as Fm7 to stop a semitone rub with the melody's Ab.
2. **Stage C:** review-melody.md picked C; its three fixes applied (answers out of the pad, chorus into beat 4, b6-7 line over the barline). Whole song compiled; the pad was moved to the breakdown only (register overlap with the stab); render-1 → breakdown 17 dB under the drop and 6.1 dB of limiting → pad +10, kick −3, hats up; render-2 (stage C numbering) → drop only 0.3 dB over C1 and a 500 Hz bump → drop velocities ×1.08/×1.1, stab −3 dB at 450 Hz; render-3 final for stage C.
3. **Stage E, review fixes:** everything in the reviewer table above. code_check then flagged two pitch clashes, both fixed: the intro tease's Eb5 against Bb9's D in bar 7 (moved the tease to bar 6), and the BD strings' F3 against the stab's Gb3 (the Gb shell became [gb2,db3,bb3]). Then render-2.wav. The first render-2 attempt came back silent (−70 LUFS). A small test render worked, and re-rendering the same code gave a normal file, so I treat it as a one-off engine fault. Stage C's render-2.wav was overwritten, because this stage's task names the file the same.
4. **Stage E, after render-2 and the AI-tell audit:**
   - pad down to −16, counter down to −9, stab_bd ×0.8 (the second half of BD was as loud as C1);
   - V1 stab ×0.9; C1 shaker lighter (0.22/0.34); D stab ×1.15, lead ×1.1, crash 0.85, harder hats (HATS_D), sparkle −12 (to widen the V1 → C1 → D steps);
   - kick saturator drive 4 (less limiting);
   - master width 1.25 in the body (#7 width);
   - stab_intro −4 (bar 1 loudness).
   
   Then render-final.wav (first pass).
5. **Stage E, last level pass:** the first render-final still had BD's second half only 3.2 dB under D, C1 − V1 = +0.75 and limiter 4.3 dB. Changes: pad −19, counter −13, V1 stab ×0.8, C1 stab ×0.95, kick saturator drive 7. render-final.wav was re-rendered and overwritten. That file is the one delivered.

## Renders
All at −14 LUFS, limiter on, true peak ≤ −1 dBTP, 3 s tail. Section values are means of the per-bar loudness (LUFS) from the render report.

| | render-3 (stage C) | render-2 (stage E) | render-final (1st) | **render-final (delivered)** |
|---|---|---|---|---|
| I | — | −16.2 | −15.2 | **−14.8** (bar 1 −14.6) |
| V1 | −13.2 | −13.6 | −13.6 | **−13.65** |
| C1 | −12.8 | −12.9 | −12.8 | **−12.9** |
| BD (25-28 / 29-34) | −18.5 | ≈ −20 / −13.4 | −20.6 / −15.6 | **−20.75 / −17.8** (all −19.0) |
| BU (last bar) | (−12.7) | −18.7 → −16.3 | −17.2 (−16.2) | **−16.8 (−16.4)** |
| D (bar 41) | −12.2 (first half −12.9) | −12.6 (−12.7) | −12.3 (−12.4) | **−12.3 (−12.3)** |
| O | −17.0 | ≈ −16.6 | −16.6 | **−16.1** |
| limiter | 5.2 dB | 4.0 dB | 4.3 dB | **4.2 dB** |
| LRA | — | 6.1 LU | 5.7 LU | **5.9 LU** |
| width / corr. | 0.135 | 0.116 | 0.136 | **0.125 / 0.97** |
| swing / timing error | 0.539 / 4.1 ms | 0.546 / 4.6 ms | 0.543 / 4.4 ms | **0.543 / 4.3 ms** |

Against the review's targets for the delivered render:
- **Met:**
  - BD 6.7 dB under D (target 6-10).
  - BU's last bar (−16.4) is below D's first (−12.3).
  - Bar 1 is ≥ −15 LUFS (−14.6).
  - The true peak is −1.1 dBTP.
  - The song has its 3 s tail.
- **Not met:**
  - C1 − V1 = +0.8 LU (target ≥ 1).
  - D bar 41 − C1 = +0.6 LU (target ≥ 1.5).
  - Limiter 4.2 dB (target ≤ 3).
  - Width 0.125 (target > 0.25).

  I stopped level-tweaking here. The C1 → D lift lives in the arrangement more than in the loudness: the chorus melody on the downbeat, the sparkle layer, the full rolling bass, harder hats and lead2 in bars 53-56. Under −14 LUFS normalisation the kick sets most of the per-bar loudness, so the steps between sections stay small. Width would need decorrelated sources (e.g. a stereo chorus/doubler on the stab and lead), not more master width. Both are the first things to change in a next round.
- 500 Hz octave: −24.0 → −24.3 dB in the octave table (render-2 was about 7 dB over the card's p50; not re-compared against the card this round, because code_compare was not run).

## Last AI-tell audit (mc-ai-tell-audit §2)
Run on render-2 (stage E), instrumental, with #10-14 judged on the lead as the "voice". Findings, and what was done before render-final:

| # | Tell | Verdict on render-2 | Done |
|---|---|---|---|
| 1 | Sections all multiples of 8 | pass (BD 10, BU 6) | — |
| 2 | Energy only rises | **partial flag**: not monotonic, but BD's second half (−13.4) was as loud as the chorus | strings −13 dB, flute −4 dB and stab_bd ×0.8 in total: BD 29-34 now −17.8, 5.5 dB under D |
| 3 | Fixed instrumentation | pass (17 parts, staggered entries/exits) | — |
| 4 | One harmonic loop | pass (verse vamp, chorus bVI-bVII-v-i, bII-V-i, BD at half speed) | — |
| 5 | Fills on a fixed grid | pass (genre: house fills on 8/16) | — |
| 6 | No non-vocal hook | pass (stab riff from bar 1, alone in BD) | — |
| 7 | Squashed dynamics / constant stage | **flag**: limiter 4.0 dB, LRA 6.1, width 0.116 | kick soft-clip drive 4 → 7, master width 1.25 in the body. Result: limiter 4.2 dB, LRA 5.9, width 0.125, so **still a flag** |
| 8 | Grid, no push/pull | pass (rotating stab velocities, per-phrase lead velocities, +6/+8/−6 ms offsets, swing 0.54) | — |
| 9 | Fixed length, no tail | pass (DJ outro, kick-out bar 56, 3 s tail) | — |
| 10 | Voice: flat contour | pass (calls rise, answers fall, peak Ab5 prepared) | — |
| 11 | Repeated chorus identical | **partial**: the drop's first pass repeats the chorus notes | kept: the arrangement around it changes (sparkle, full roll, harder drums), and the second pass adds lead2 (mc-arrangement-arch §6). Lead ×1.1 |
| 12 | Voice: no breath/phrasing | pass (rests between call and answer, glide, legato 1.05) | — |
| 13-14 | lyric/vocal-delivery items | n/a (instrumental) | — |

Count after the fixes (from the render-final numbers, not re-audited by ear): 1 flag (#7), 1 partial (#11). The V1 → C1 → D loudness steps stay under the review's targets (see Renders).
