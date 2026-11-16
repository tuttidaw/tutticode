# Examples

Five pieces written in TuttiCode by an agent: **Claude Code with Claude Opus 5.5**, each from a brief of one paragraph (style, length, the parts it should have).

## How they were made

Each song went through five stages, each a separate agent session, with a script checking that every stage really used the skills it was given before the next one started:

1. **Plan and melody.** The composer wrote an arrangement spec (intent, form, motif and how each section develops it) and three different melody candidates, each rendered on its own.
2. **Melody review.** An independent reviewer transcribed the three melodies from the code, scored them and picked one, with concrete fixes.
3. **The song.** The composer fixed the melody and wrote the whole piece with `track()` / `section()` / `form()`: harmony, counter-lines, entries and exits, a drop before the climax, fills, mix buses, a limiter; rendered it to -14 LUFS and checked the code against the spec.
4. **Song review.** A second reviewer rendered it again, read the per-bar loudness, levels and spectrum, and ranked what held it back.
5. **Revision.** The composer fixed the review's points and audited the result for machine-made habits.

The craft came from the open [music-composition skills](https://github.com/jtydhr88/music-composition-skills) (MIT) and TuttiDAW's own composition, arrangement, sound-design and mixing playbooks; the sounds start from TuttiDAW programs tuned by ear. The agents cannot hear: every judgement came from the notes and the render reports, as each `NOTES.md` says.

## What people changed

- After listening, three sounds were corrected by hand:
  - the flute and erhu vibrato in *Moon over the River* and the lead's vibrato and slides in *Neon Highway* were far too wide (an LFO pitch depth of 4 is a 140-cent wander, not a vibrato);
  - the vinyl crackle in *Late Reading* was far too loud (12 dB under the mix, about as loud as the hats); it is now a background bed, 30 dB under.

  The `NOTES.md` files predate these fixes.
- Device names were updated to TuttiDAW's current names (a rename, no musical change).

Nothing else was edited. Each folder: `song.tc` (the program), `NOTES.md` (the agent's notes), `render.json` (how to render it), `README.md` (listen and open).
