# 江月 Moon over the River

A guofeng instrumental ballad for the TuttiCode showcase. 72 BPM, 4/4, D major (D gong pentatonic), moving up a whole step to E major for the last chorus. 35 bars = 1:57.
Files: `song.tc` (final program), `spec.yaml` (ARR-SPEC v1.0), `render-final.wav`, `render.json`, `compliance.md`, `candidates/` (melody stage).
Everything below was judged from notes, skills and render reports. I cannot listen and have not listened.

**Final render** (`render-final.wav`, from `song.tc`): -14.0 LUFS integrated, -1.4 dBTP true peak (limiter on), LRA 5.6 LU, 0 clipped samples, 116.7 s + 5 s ring-out.
Stem levels (from the previous pass with stems; this one was rendered without): flute -13.5, guzheng -16.9, ripple -18.3, bass -19.7, strings -20.0, pipa -20.6, counter -22.8, kick -24.7, snare -25.2, rim -29.4 LUFS.
Section loudness (mean of barLufs): I -16.0 · A1 -15.4 · C1 -13.4 · D -17.7 (bars 19-21; -15.6 in the transition bar) · C2 -12.5 (climax bar 28: -11.0) · O -16.3 → -27.6.

## Intent

- **One thing:** alone by the river at night, you realise the moon on the water is the same moon the one you miss is looking at.
- **Borrowed:** from 《春江花月夜》 (1925 ensemble version), only its 换头合尾: every section ends on the same tail phrase. From Jay Chou's 《青花瓷》, only the register step from a narrow verse to a higher chorus with long held line endings.
- **Listener:** a developer browsing the GitHub showcase, first listen, decides in 10 seconds. So the guzheng hook and the flute's tail phrase both sound in the 6.7 s intro.
- **Arc:** dark river, moon rising (2) → quiet narration (3) → looking up, longing (6) → a cloud covers the moon, the beat stops (3) → the moon comes out brighter, the same moon shared (9) → only its reflection left (2).

## The melody (final lead sheet, flute)

D major. Durations in 16ths (4 = quarter note). `→x` marks a 32nd grace note from above. The verse (A1) and chorus (C1) are melody B as fixed after review (candidates/B.md). The final chorus (C2) is the same theme transposed to E, with a broadened climax and an augmented tail.

| Bar | Chord | Notes |
|---|---|---|
| I 1 | Gmaj7 | (guzheng hook: ~4 B4 1 D5 1 F#5 4 E5 2 D5 2 B4 2) |
| I 2 | Asus4 | ~4 F#5 2 A5 2 F#5 4 E5 4 (the tail, stopping on re) |
| A1 1 | Bm7 | ~4 B4 2 D5 2 **F#5 6** E5 2 |
| A1 2 | Gmaj7 | **E5 6** D5 2 **B4 6** ~2 |
| A1 3 | A | ~2 B4 2 D5 2 E5 2 **A5 8** |
| A1 4 | F#m7 | F#5 3 A5 1 F#5 2 E5 2 **F#5 6** ~2 |
| A1 5 | Bm7 | ~4 A5 2 F#5 1 A5 1 **E5 6** D5 2 |
| A1 6 | Gmaj7 | **E5 6** D5 2 **B4 6** ~2 |
| A1 7 | Em7 | ~2 E5 2 F#5 2 A5 2 **F#5 6** E5 2 |
| A1 8 | Asus4 / A | D5 4 **E5 8** F#5 2 A5 2 |
| C1 1 | Gmaj7 | **B5 6** A5 2 B5 4 A5 2 F#5 2 |
| C1 2 | A | →F#5 **E5 (≈3 beats)** ~2 beats |
| C1 3 | F#m7 / F#7 | ~4 F#5 2 E5 2 F#5 2 **D6 6** (the one leap, a minor sixth) |
| C1 4 | Bm7 | **B5 6** A5 2 **F#5 6** ~2 |
| C1 5 | Gmaj7 | ~4 A5 2 B5 2 D6 4 B5 2 D6 2 |
| C1 6 | A | →F#6 **E6 (≈3 beats)** B5 2 A5 2 |
| C1 7 | Em7 / Asus4 | ~4 F#5 2 A5 2 F#5 4 E5 4 (合尾) |
| C1 8 | D | **D5 12** ~4 |
| D 4 | B7sus4 / B7 | ~12 G#5 2 B5 2 (pick-up into E) |
| C2 1 | Amaj7 | **C#6 6** B5 2 C#6 4 B5 2 G#5 2 |
| C2 2 | B | →G#5 **F#5 (≈3 beats)** ~2 beats |
| C2 3 | G#m7 / G#7 | ~4 G#5 2 F#5 2 G#5 2 **E6 6** |
| C2 4 | C#m7 | **C#6 6** B5 2 **G#5 6** ~2 |
| C2 5 | A | ~4 B5 2 C#6 2 E6 4 C#6 2 E6 2 |
| C2 6 | B | **F#6 14** ~2 (climax, reached by a slide from E6) |
| C2 7 | F#m7 / Bsus4 | E6 4 C#6 4 **B5 6** ~2 |
| C2 8 | C#m7 (deceptive) | G#5 4 B5 4 **G#5 8** (tail at double length) |
| C2 9 | A / Bsus4 | **F#5 12** ~4 |
| C2 10 | E | →F#5 **E5 (whole bar)** |
| O 2 | Bsus4 | ~4 G#5 2 B5 2 G#5 4 F#5 4 (asks re; the guzheng answers do in O 3) |

Range B4-F#6. The flute plays legato with a small glide; a delayed vibrato blooms only on held notes. Velocity swells to each phrase's long note (verse) or is written per note (choruses).

## Plan grid (sections × parts) and energy

| Part | I (2) | A1 (8) | C1 (8) | D (4) | C2 (10) | O (3) |
|---|---|---|---|---|---|---|
| flute (dizi) | tail preview | theme | theme + graces | pick-up only | theme in E, climax | asks re |
| guzheng | **hook** | replies in gaps | replies, **hook** in bar 8 | gliss into C2 | replies, gliss | **hook** (contracted), last do |
| ripple (guzheng 2) | – | – | bars 5-7 | – | bars 1-8 | – |
| pipa | – | – | – | 轮指, head cut shorter | – | – |
| counter (erhu-like) | – | – | answer, bars 7-8 | singing line | counter-line | – |
| strings | pad | pad | 4-voice pad | low pad | 4-voice pad | pad, fading |
| bass | – | from bar 5 | flowing | bars 3-4 | flowing | bars 1-2 |
| kick / snare / ghost | – | – | from bar 1 / bars 5-7 | – | bars 1-9 | – |
| rim (woodblock) | – | – | clip-clop 1-4, backbeat 5-7 | – | all | – |
| hats | – | – | ¼ then 8ths | – | 8ths, open | – |
| toms | – | – | – | roll, bar 4 | bars 5-8 | – |
| crash | – | – | bar 1 | – | bars 1, 5, 6, 10 | – |
| **energy (spec)** | 2 | 3 | 6 | 3 | 9 | 2 |

Fills: bars 14, 22, 26. Subtractions: the drums stop after C1's last downbeat; the bridge has no beat, no flute and no bass in bars 1-2; C2 thins in bars 9-10; the outro empties to one guzheng note.

## Sounds and why

All instruments and their settings come from the lessons in REFERENCE/lessons (guzheng-ballad, caiyun-zhuiyue, main, pipa-rock, opera-pop, guofeng-edm), which were tuned by ear in TuttiDAW. I took their presets and parameters, never their notes.
- **Ensemble Sample FLUTE** (the dizi): the lessons' lead. In Stage E I added legato, glide and delayed vibrato so it phrases like a voice, and lowered its reverb from 45 to 35 so it sits closer.
- **Ensemble Physical PLUCK, guzheng setting:** the hook and the replies. Brightness was lowered (e2 104 → 85) because it was setting the mix's true peak. A second guzheng track plays 8th-note ripples in the choruses, panned opposite the reply guzheng for width.
- **Physical PLUCK, pipa setting (pipa-rock):** the bridge's 轮指. The lessons have no erhu, so the brief's "erhu-like or pipa-like" became a pipa here plus an erhu-like legato string line.
- **Ensemble Duo STRINGS:** the warm pad. Set to level 105 (fader -6) with chorus 80 so it fills the 250-700 Hz middle about 7 LU under the flute. A second Duo STRINGS track is the counter voice: legato, glide and vibrato, played erhu-like.
- **Ensemble Duo SQR BASS:** the lessons' bass, with the same settings.
- **Default kit (808 Core Kit, as in the lessons):** a soft kick and snare, ghost notes, the rim as the woodblock, hats, toms as war-drums, a soft crash. One plate reverb bus is shared by all the drums; the Ensemble parts share the Ensemble Set's hall. No sidechain, because the guofeng-pop card sets none.
- **Master:** a gentle Bus Compressor, then one Limiter. Rendered at -14 LUFS with true peak ≤ -1 dBTP.

## Reviewers' points and what I did

### review-melody.md (Stage B, picked candidate B)
1. Head too generic (four steps up and back), with held non-chord tones → **done:** the head skips do→mi, holding mi on the chord fifth, and re returns as an appoggiatura.
2. No register step at the verse/chorus seam → **done:** the verse stays under A5; a pick-up lands the chorus on B5 on the downbeat.
3. One rhythm for every phrase start; climax not held → **done:** varied phrase starts, a 16th lilt and snap, a wind-up before the climax, E6 held 3 beats.
- Smaller notes: keep bar 11's leap (kept); C2's climax should be held a bar or more (done: F#6 held 3.5 beats, then an augmented tail); ornaments on long notes only (done in Stage E); guzheng replies only in real gaps, never copies (done); development labels checked against the notes (done, in spec and compliance.md).

### review-song.md (Stage D)
1. **Strings and counter inaudible (-37 / -40 LUFS), 250 Hz hole** → done, but not at the review's suggested values, which overshot (see Revision 5). Final settings:
   - strings: level 105, fader -6, chorus 80, four-voice voicings reaching A4-C#5 in the choruses, section velocities 0.40-0.88;
   - counter: level 120, fader -8, made erhu-like (legato, glide, delayed vibrato), entering at the end of C1.

   Measured: strings -20.0 and counter -22.8 LUFS (from -37.1 / -40.2).
2. **The lead doesn't sing** (flat velocity, no vibrato, no ornaments) → done: voice LEG, glide 18, delayed pitch LFO; sine-arc dynamics in the verse and per-note dynamics in the choruses; four 32nd-note grace notes from above into long notes; the F#6 is reached by a slide.
3. **The chorus doesn't lift; the woodblock and hats are inaudible** → done: rim fader -9 → -1 at velocity 0.72; hats -15 → -8; the rim doubles the backbeat under a softer snare (0.55) in C1 bars 5-7; a crash on C1's first downbeat; a guzheng ripple layer in C1 bars 5-7 and C2 bars 1-8.
- Note 1, the hook should be the head → done (B4 D5 F#5 E5 D5 B4; in the outro, a step higher and contracted).
- Note 2, the bridge has no singing line → done (the counter sings A4-E5 in the pipa's gaps; bridge strings raised to 0.5).
- Note 3, the guzheng drives the limiter → done (e2 85, intro hook velocity 0.48). A guzheng compressor was not added: without the tool I could not confirm the Compressor's parameter keys, and darkening plus a lower velocity address the same peak.
- Note 4, stage width → done through the strings' chorus 80 and the ripple panned opposite the reply guzheng.
- Note 5, taiko → not done: 'gm_taiko_drum' would need its own track and a pitch, I couldn't verify it with code_check at the time, and the card's rule ("soft backbeat, the melody leads") is already met by the lessons' toms.
- Note 6, flute reverb 45 → 35 → done. The -14 LUFS target is kept, as the review advises.

## Revisions

1. **Stage A:** three melody candidates (A rhythmic cell, B long breath, C call and answer) over a shared progression; spec S0-S2a.
2. **Stage C, melody:** B fixed per review-melody.md (head, seam, rhythm, climax) → candidates/B-fixed.wav.
3. **Stage C, song:** spec completed (harmony, counter-line, roster, energy, subtractions, hook, groove, mix intent, 20-item self-audit); song.tc compiled with track/section/form. code_check found three minor-9th clashes (bass under the D6 leap, the G#7 voicing under E6, G#3 under the counter's A4), all fixed before render-1.
4. **Stage C, compliance (render-1 → render-2):** the bridge was the loudest section (pipa tremolo too hot) → pipa -15 dB; verse and intro softer, final chorus louder; drum pans added. Result: the bridge became a 7 LU valley; the chorus steps reached only +1.2 / +1.0 LU.
5. **Stage E, review fixes (render-2, in three level passes).** The tutticode server was down for part of this stage, so the code was written first and checked later.
   - Pass 1, with the review's suggested levels (strings level 120 / +4 dB, counter +4 dB): the strings came out at -14.1 LUFS, **louder than the flute** (-16.5), the counter level with it, LRA 0.8 LU, and the bridge valley gone. The review's values were starting points; the Duo STRINGS `level` parameter is strongly non-linear.
   - Pass 2: strings fader -6, counter -5. The strings were still only 1.5 LU under the flute.
   - Pass 3: strings level 85 / fader -8 overshot to -19.7 LU under the flute.
   - Settled by interpolation: strings level 105 / fader -6, counter -8 dB, bridge strings 0.4 and counter 0.54. Result: strings 7.4 LU and counter about 9 LU under the flute; 250 Hz octave -27.5 dB (was -34.4 in the reviewed render); rim 4.7 LU under the kick; bridge 5.2 LU under C2.
   - Also fixed from code_check: the ripple's G4 against the pad's F#4 (C1 bar 5) became F#5; the counter's D#5 against the ripple's E5 (C2 bar 8) became B4; the outro's first pad chord dropped G#3.
6. **Stage E, after the AI-tell audit (render-final):** to answer the one half-flag (#7, chorus lift):
   - the verse and intro bed is softer: strings 0.45, bass 0.48, flute arc 0.52-0.70;
   - in C2 the strings rise to 0.88, the ripple to 0.55 and the counter moves wider (pan 0.9);
   - the C1 ripple drops to 0.45.

   The steps grew from +1.1 / +0.8 LU to +1.4 / +1.0 LU.
7. **One more arrangement round (asked for by the supervisor session; density and layering, not overall level):**
   - thinner verse: flute arc 0.48-0.66, strings 0.38;
   - more layers in C1: the guzheng ripple now plays bars 1-7 instead of 5-7 (an F#7 shape added for bar 3);
   - C2: strings 0.95, counter 0.8, ripple 0.6, toms 0.55.

   This is the final `render-final.wav`: -14.0 LUFS, **-1.4 dBTP**, LRA 5.6 LU, width 0.255. Section means: A1 -15.4 · C1 -13.4 · D -17.7 · C2 -12.5. **A1→C1 is now +2.0 LU (meets spec). C1→C2 is +0.9 LU (spec 1.5, not met).**

   Why C1→C2 stays short: C1 now carries more layers than before (the ripple from bar 1 plus the crash), which is what lifted A1→C1, and the flute dominates both choruses. The remaining C2 headroom is in its climax (bar 28 at -11.0 LUFS is the loudest bar of the song), and pushing it further would put the limiter back on the F#6. The half-flag stays; the gate decides.

## Last audit (mc-ai-tell-audit §2, on render-2; recheck on render-final)

| # | Tell | Result |
|---|---|---|
| 1 | all sections multiples of 8 | pass (2/8/8/4/10/3) |
| 2 | energy only rises | pass (bridge 5.3 LU under C2; the outro falls to -27.5) |
| 3 | instrumentation never changes | pass; the strings, counter and rim are now audible in the stems (-20.0 / -22.8 / -29.4 LUFS), so the entries and exits are real |
| 4 | one harmonic loop | pass (F#7, Cmaj7, B7, the move to E, a deceptive cadence) |
| 5 | fills on multiples of 4 | pass (bars 14, 22, 26; the bar-14 rim pick-up is now audible) |
| 6 | no non-vocal hook | pass; the guzheng hook is now the head's own skip, at bars 1, 18 and 33 |
| 7 | dynamics flattened / width constant | **half flag**: LRA 5.6 LU and a 5.2 LU valley are fine. After Revisions 6-7, A1→C1 is +2.0 LU (meets spec), but C1→C2 is +0.9 LU (spec 1.5), and width is 0.255 overall |
| 8 | everything on the grid | pass (timing error 7.5 ms mean, 17.3 ms P90) |
| 9 | 3:30, no ending | pass (1:57; loop-and-subtract to one guzheng note) |
| 10 | same force every phrase | pass: verse phrases swell on a 2-bar arc, chorus velocities are written per note (peaks 0.88 / 1.0) |
| 11 | choruses identical | pass: C2 adds the audible counter-line, the ripple, the key change, a broadened climax and an augmented tail |
| 12 | breaths missing | pass (rests between phrases) |
| 13 | ornaments missing or sprinkled evenly | pass: four grace notes, only into long notes, plus legato glide; the 16th turns stay plain |
| 14 | pitch dead centre | pass on paper: a delayed pitch LFO gives vibrato on held notes only. Its depth (ldPit 4) is unheard and unverified |

Result: 0 full flags, 1 half flag (#7), against the reviewer's 4 full + 2 half. The review's `code_compare` against the guofeng-pop card was not re-run; the 250 Hz octave rose from -34.4 to -27.5 dB.
Remaining code_check warnings: one passing 8th-note D5 over C#4 (verse bar 3, a pentatonic passing tone); clip risk at bar 28, which the limiter holds at -1.2 dBTP with 0 clipped samples; and the crash is sparse (5 hits), by design.
