# Neon Highway

Synthwave for a night drive in a racing game. E minor → F# minor, 100 BPM, 4/4, 52 bars, 2:05 (+3 s ring-out).
Final program: `song.tc`. Final render: `render-final.wav`. Spec: `spec.yaml`. Render settings: `render.json`.

**What these notes rest on:** code, `code_check` reports and `code_render` measurements (integrated / per-bar LUFS, true peak, stem levels). I have not listened to any of it. Every "measured" below is a number from a render report.

---

## 1. Intent

- **One thing:** one gliding lead line pulls the car forward through the night, like following your own headlights.
- **References (what is borrowed):**
  - Kavinsky, "Nightcall": only the restraint of the verse, where the drums and bass leave air so the lead's entry is the event.
  - Lazerhawk, "Overdrive": only the chorus role split, a relentless 16th arp as the engine under long held lead notes.
- **Listener:** a showcase visitor who decides in about 10 s, and a player who hears the loop dozens of times with little attention.
- **Arc:** idle (I) → cruising (A1) → road opens (C1) → tunnel (A2) → out, faster (C2) → overpass, skyline only (D) → final straight, a step up (C3) → tail lights (O).

## 2. The final melody (lead sheet)

E minor. Durations: e = eighth, q = quarter, q. = dotted quarter, h = half, h. = dotted half, h+e = 5 eighths. Code octaves (C4 = middle C).

**Verse (A1, bars 5–12)**

| Bar | Chord | Lead |
|---|---|---|
| 1 | Em7 | ~ q · F#4 e · F#4 e · A4 e · B4 q. |
| 2 | Em7/D | A4 q · G4 q · E4 h |
| 3 | Cmaj7 | ~ q · E4 e · E4 e · G4 e · A4 q. |
| 4 | Cmaj7 | B4 q · A4 q · G4 h |
| 5 | Am7 | ~ e · G4 e · G4 e · B4 e · C5 h |
| 6 | Am7/G | B4 q · A4 q · E4 h |
| 7 | F#m7b5 | ~ q · A4 e · A4 e · C5 e · E5 q · F#5 e |
| 8 | B7sus4 → B7 | E5 h · D#5 q · B4 q |

**Chorus (C1, bars 13–20)**

| Bar | Chord | Lead |
|---|---|---|
| 1 | C6 | ~ e · D5 e · E5 e · **G5 h+e** (the call) |
| 2 | D | F#5 q · E5 q · D5 q · A4 q (the answer) |
| 3 | Em7 | ~ e · D5 e · E5 e · G5 h+e |
| 4 | Em7/D | ~ q · F#5 e · E5 e · D5 e · B4 q. |
| 5 | C6 | ~ e · D5 e · E5 e · G5 e · **A5 h (tied →)** |
| 6 | D | (A5 q) · F#5 q · E5 q · D5 q |
| 7 | Am7 → B7 | ~ e · D5 e · E5 e · G5 e · F#5 q. · D#5 e |
| 8 | Em | E5 h. · ~ q |

**How it appears in the song:**
- **I:** the full call and answer (bars 1–2 of the chorus) in bars 3–4.
- **A2:** verse bars 1–2, then 7–8.
- **C2:** the lead plays only the calls in bars 1 and 3, the brass plays the answers (bars 2 and 4), then the lead plays bars 5–8.
- **D:** the call augmented on a bell: D5 E5 G5 (q q h) | E5; E5 F#5 A5 | F#5.
- **C3:** C1 up a whole step, plus a 2-bar tag: ~ D5 E5 G5 A5 **B5** (q.) | G5 q · F#5 e · D#5 e · E5 h. Sounding pitch in F# is C#6, the lead's highest note in the song.
- **O:** the call alone (bar 3), filter closing.

**Lead range:** E4–C#6. The verse holds B4/A4/C5; the chorus holds G5 and A5.

## 3. Plan grid and energy

● = plays, ◐ = part of the section, – = silent.

| Part | I (4) | A1 (8) | C1 (8) | A2 (4) | C2 (8) | D (6) | C3 (10) | O (4) |
|---|---|---|---|---|---|---|---|---|
| lead (sync lead) | ◐ bars 3–4 | ● | ● | ● | ◐ calls + bars 5–8 | – | ● + tag | ◐ bar 3 |
| arp (pluck) | ● gapped | ◐ bars 5–8, low | ● gapped, quotes D-E-G | ● low, dark | ● gapped | – | ● gapped | ● closing |
| pad (strings) | ● | ● | ● (≤ D4) | – | – | ● | ◐ bars 5–10 | ◐ bars 1–3 |
| bass (sqr) | ◐ bars 3–4, pulse | ● 8th pulse | ● 16th octave seq | ● roots | ● seq | – | ● seq | – |
| brass | – | – | – | – | ● answers + counter-line | – | ● counter-line 8va | – |
| bell (FM) | – | – | – | – | – | ● hook augmented | ◐ bars 5–8, high | – |
| kick | – | ● 1 & 3 | ● 4-on-floor | ● 1, 2&, 3 | ● | – | ● | – |
| snare (cp) + gated return | – | ● 2 & 4 | ● | ● | ● | ◐ roll bars 5–6 | ● | – |
| gsnare (gated cr) | – | ● | ● | ● | ● | – | ● | – |
| hats | – | 8th off-beats | 16ths | 8ths | 16ths with oh | – | 16ths with oh | – |
| toms (fill) | – | bar 8 | – | bar 4 | – | – | bar 8 | – |
| crash | – | – | bar 1 | – | bar 1 | – | bars 1, 9 | bar 1 |
| riser (noise) | – | – | – | – | – | bars 5–6 | – | – |

Every section break also breaks the 8-bar grid somewhere: I 4, A2 4, D 6, C3 10, O 4.

**Energy** (spec, 0–10) against **measured mean LUFS** in render-final:

| | I | A1 | C1 | A2 | C2 | D | C3 | O |
|---|---|---|---|---|---|---|---|---|
| spec | 3 | 4 | 7 | 5 | 8 | 3 | 10 | 4 |
| measured | −16.1 (bars 3–4: −13.8) | −14.6 (bars 5–8: −14.4) | −13.2 | −15.2 | −13.5 | −15.8 (roll bar −14.8) | −12.4 (bars 1–4: −12.9, bars 5–10: −12.1) | −19.7 |

The order matches the plan, with drops at A2, D and O.

## 4. Sounds and why (palette from REFERENCE/lessons; their notes were not copied)

| Part | Sound | From | Why |
|---|---|---|---|
| lead | Ensemble Trio SYNC LEAD, mono; glide automated (18 in verses, 45 in choruses, 55 in C3); delayed vibrato (ldPit 4, lrate 45, lfade 40); delay 30, reverb 30 | outrun.tc, darksynth.tc | The brief's "gliding lead". The glide is wide only where the call slides into its held note. sound-design.md: mono, glide, vibrato, delay over reverb |
| arp | Ensemble Duo PLUCK, delay 55 into the shared 1/8D delay | main.tc | Short pluck: its envelope separates it from the pad (mc-orchestration §3.5). Gaps let the dotted echoes land in holes (style card "deliberate gaps") |
| pad | Ensemble Duo STRINGS, slow attack, reverb 75, chorus amount automated per section (width_map) | main.tc, sunset.tc | Detuned string pad = the card's pad; width from its chorus, not from panning lows |
| bass | Ensemble Duo SQR BASS (voice 1), sidechain Compressor keyed by the kick (ratio 3, 2 ms, 160 ms) | every lesson; card sidechain recipe | Square wave has harmonics for small speakers (mc-sound-design §6); "a breath, not an EDM vacuum" |
| brass | Ensemble Duo BRASS, atk 6 swell | outrun.tc | Chorale-like counter-line and the C2 answers: a different family from the lead (timbre opposition) |
| bell | Ensemble FM6 BELL, delay 35 | dreamwave.tc | Breakdown carries the hook without the lead; in C3 the high counterline the style card asks for |
| drums | 808 Core Kit (bd, cp, hh/oh, toms); `cr` on 2&4 through a Gate = the gated noise burst; snare sent to a Reverb→Gate bus keyed by the snare | every lesson's `Gated_snare_other`; card "Reverb into Gate on the snare return" | The brief's gated snare |
| riser | white noise through an automated low-pass | style card "FX" role | 2-bar build into C3 |
| master | Limiter, ceiling −1 dB | every lesson | |

## 5. Reviewer points and what I did

### Melody review (review-melody.md; pick: C)

| Point | Action |
|---|---|
| Fix 1: verse calls lower (B4/A4/C5), bar 2 A4 resolves | Applied as written |
| Fix 2: held A5 peak in bars 13–14 | Applied |
| Fix 3: bar 15 = hook head into the cadence | Applied |
| Chorus answers in the call's rhythm | Bar 10 changed to an on-beat answer; bar 12 keeps the off-beat (third statement varied) |
| Repeated pickups might merge under glide | Tested: a lead-only render gave 16 onsets for 14 notes, so no merge |
| A2 not an octave lower | A2 = verse bars 1–2 + 7–8 |
| C3: keep hook notes; lift from the key and doubling | Done in Stage C (octave-below double). Replaced in Stage E (see below) |
| Breakdown: hook head augmented | On a bell |
| Arp below D5 in choruses | Yes (E4–C5) |
| Borrow B's leap for C3 | Not taken (mc-development §7.4: no new material in the last chorus); in Stage E the tag instead extends the call itself G-A-B |

### Song review (review-song.md)

| Point | Action | Measured result |
|---|---|---|
| **Issue 1: the hook was withheld until 0:29** | Intro bars 3–4 play the full call + answer with the lead filter open (2.5 → 9 kHz by bar 3) at chorus velocity; arp filter starts at 1.8 kHz; bass pulse enters at bar 3; intro bar 4 = D. A1 gets the arp back at bar 9 (low, dark) as an inner build. O uses its own HEAD_O | Intro bars 3–4: −13.8 LUFS (were about −16). A1 second half +0.4 LU over the first (reviewer target 0.5–1: a little short) |
| **Issue 2: C3 stacked four parts in one low-mid octave** | lead2 deleted; brass raised an octave (A4–F#5); bell returns on top in bars 5–8 (E6–B6, background velocity); pad waits until C3 bar 5; tag extends the call G-A-B, the lead's single highest note | C3 bars 5–10 about 0.8 LU louder than bars 1–4. C3 − C2 = **+1.1 LU** (target +1.5: **not met**); C3's second half − C2 = +1.4 |
| **Issue 3: gapless arp formula inside the pad's octave** | Gapped cell (rests at steps 4, 8, 13, 16), accents before each rest, register E4–C5; pad top voice dropped to ≤ D4 in intro and choruses; low gapless cells kept only under the verse (A1 bars 5–8, A2). Audit fix: the accented slot spells D-E-G-E across each 4-bar chorus phrase | code_check: Pad/Arp register-overlap gone; pitch-clash beats 43 → 2 (both are the noise riser against the pad) |
| Note 1: the build was the quietest moment | Gated clap roll over D bars 5–6 (8ths → 16ths → 32nds, rising velocity), last eighth silent; riser +3 dB | Roll bar −14.8 LUFS (was −18.9) |
| Note 2: glide not composed | glide automated per section; delayed vibrato added | Not measurable in the report |
| Note 3: flat velocities | Lead per-eighth velocity shapes (verse / chorus / final); brass swells across 2-bar phrases | — |
| Note 4: C2 = C1 + a part | C2 lead plays the calls, the brass the answers (literal call and response) | C2 answer bars −14.1 / −14.4 (after raising the answers' velocity) |
| Note 5: mix (limiter, width, pans) | Clap velocity 0.76 → 0.68; kick −5 → −7 and clap −4 → −6 with the gated return carrying the body; arp chorus 70 in C2; brass/bell panned −0.4 / +0.4 | Limiter 4.7 (render-1) → 6.2 (render-2) → **5.4 dB** (final). Target < 3 dB **not met** (see §7) |
| Note 6: seams | C2's last bar now D (B7 → D) into D's Cmaj7. I first tried starting D on A (the reviewer's other option), but code_check showed the bell's D5 a minor ninth over the pad's C#4, so I took the D-chord option. Crash on bar 49 | — |
| Compliance gap: pad should yield to the arp | Resolved by register (arp above pad), not by ducking | Overlap warning gone |
| Compliance gap: C2 width | Arp chorus 70 in C2 | Width is reported only for the whole song (0.28) |

## 6. Every revision

| Stage | Change | Why |
|---|---|---|
| A | Spec S0/S1/S2a; three candidates A/B/C rendered over one bed | Brief + mc-workflow |
| A | Verse chord Em9 → Em7 | code_check: pad F#4 a semitone under the melody's G4 |
| A | A: bar 3 C5 → D5; B: open D voicing under its G5 | code_check pitch clashes |
| A | Bass −13 dB, lead −4 dB, pad 0 in the candidate bed | Stems: the bass was 88% of the energy |
| C | Review fixes 1–3 + bar 10 (C-fixed) | review-melody.md |
| C | A2 = verse 1–2 + 7–8, bar 3 F#m7b5; breakdown hook on a bell; C2 without pad; C3 double below | NOTES Stage C reasoning (register contrast, card range 60–84) |
| C | render-1: kick −1 → −5, pad level 84 → 112 and fader −10, riser −20 → −6, brass −10 → −4 | Stems: the kick was the peak source; the pad measured −43.5 LUFS (inaudible), bars 37–38 −33 LUFS |
| C | Riser `.lpf()` → Auto Filter automation | code_check `import/filter-approximation` |
| C | Verse pad / lead velocity down, chorus pad up, hats −12 → −9; snare −4, arp −9, bass −9 | Chorus lift was 0.7 LU → 1.2 LU |
| E | Issues 1–3 and notes 1–6 (§5) | review-song.md |
| E | Chorus bVI voiced C6 (no B); Em arp colour = D4; Am low-cell colour = G4; C3 Am cell colour = G4 | Remaining code_check rubs: arp F#4 under the held G5, arp B4 against the verse's C5, arp C#5 against the raised brass D5 |
| E (audit) | Arp quotes the hook in its accented slot; kick −2 dB, clap −2 dB, snare send 0; C2 brass answers to 0.92; C3 bell 0.5 → 0.32 | AI-tell #6 and #7; probe stems: kick −4.3, clap −4.1, arp −5.3 dBTP were the peak sources; the C3 bell measured −18.5 LUFS vs the lead's −17.4 |

## 7. Last audit (mc-ai-tell-audit, run on render-2; fixes in render-final)

Applied to an instrumental: items 10–14 read the lead as the "voice".

| # | Tell | Result |
|---|---|---|
| 1 | All sections ×8 | pass (4/8/8/4/8/6/10/4) |
| 2 | Energy only rises | pass (drops at A2, D, O; measured) |
| 3 | Same instruments throughout | pass (grid above) |
| 4 | One chord loop | pass (V major, dorian IV, chromatic bVII seam, modulation to F# minor) |
| 5 | Fills on multiples of 4 | pass (bars 12, 24, 46; build roll 37–38) |
| 6 | No non-vocal hook | half flag on render-2 (arp was gapped but still one formula per chord) → **fixed**: the arp's accented slot spells the hook D-E-G-E in every chorus phrase |
| 7 | Squashed dynamics / constant width | half flag (limiter 6.2 dB on render-2) → **partly fixed**: kick and clap −2 dB; limiter now 5.4 dB; LRA 5.4 LU; per-section width set in code but not measurable per section |
| 8 | Everything on the grid | pass: drums and arp on the grid; lead +10 ms, brass +18 ms, bass −6 ms |
| 9 | 3:30 + fade | pass (2:05, mirror ending, no fade) |
| 10 | Same force on every phrase (lead) | pass (per-eighth velocity shapes, three section bases, delayed vibrato) |
| 11 | Every chorus identical | pass (C2 call/response with brass; C3 key change, tag extension, raised counter-line, bell, late pad) |
| 12 | No breaths (lead) | pass (a rest before every call) |
| 13 | Ad-libs uniform or absent | n/a, instrumental; the C3 bell figure appears once |
| 14 | Pitch dead-on | n/a for a synth lead; vibrato adds pitch movement on held notes |

**Flag count after fixes: 0 full, 1 half (#7).**

**Not met, stated plainly:**
- The limiter still takes up to **5.4 dB** at its worst moment. Integrated −14.1 LUFS needs +7.1 dB of gain on a mix with a 15.8 dB crest, and the clap/kick/arp transients are the peaks. A −15 or −16 LUFS master would reduce this. I kept −14 because the stage asks for it.
- C3 is **+1.1 LU** over C2, not the reviewer's +1.5. The second half of C3 reaches +1.4.

## 8. Final numbers (render-final.wav)

| Measure | Value |
|---|---|
| Integrated loudness | −14.0 LUFS |
| True peak | −1.0 dBTP |
| Sample peak | −1.3 dBFS |
| Clipped samples | 0 |
| Loudness range (LRA) | 5.4 LU |
| Crest factor | 15.8 dB |
| Stereo width | 0.28 |
| Limiter reduction (max) | 5.4 dB |
| Length | 127.8 s (52 bars + 3 s tail) |

code_check: 0 diagnostics. Remaining warnings:
- pitch-clash: 2 beats, the white-noise riser against the pad's C#7 in bars 37–38. Noise has no pitch; the check reads it as C3.
- clip-risk at bar 43: a static estimate; the measured true peak is −1.0 dBTP.
- density/sparse: one-shot parts (toms, crash, riser).
