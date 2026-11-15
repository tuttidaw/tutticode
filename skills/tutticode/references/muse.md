# Muse on /TuttiCode

Ask TuttiDAW's AI assistant to write, explain, fix or restyle your program, from text, a Strudel tune, a screenshot or a reference track.

**Muse** is TuttiDAW's AI assistant. On TuttiCode, the **Muse AI**
button opens it in a sidebar next to the editor. Muse needs you to be signed
in; playing code does not.

## What to ask

Muse reads the program in the editor before it changes anything, so you can
talk about the code that is there:

- "Write a slow lo-fi beat in F minor with electric piano chords."
- "Make the bass follow the kick and add a fill every fourth bar."
- "Why is the lead silent?" - Muse reads the diagnostics with the code.
- "Explain what `.off(1/8, ...)` does in my program."
- "Turn this into a TuttiDAW version with real instruments" - Muse can
  replace waveform sounds with `.inst(...)` and `.fx(...)` devices.

A request like the first one might come back as:

```js
setcpm(18)
drums: s("bd ~ [~ bd] ~, ~ sd, hh*8").bank("linn").swingBy(1/6, 4).gain(0.8)
keys: chord("<Fm9 Bbm9 Eb^9 Db^7>").voicing().inst("Tine").fx("Chorus")
bass: n("<0 -2 -4 -5>").scale("F2:minor").s("gm_acoustic_bass")
```

## How Muse edits

- Every change is checked first: Muse compiles and renders the program before
  it touches the editor, and repairs its own mistake once if the check fails.
  A part that would not sound as written (a note that is not a pitch, a
  voice whose notes are all dropped, an ignored call) fails the check too;
  silence on purpose (`silence`, rests, a muted voice) is fine. If the
  repair fails, it keeps the best version that plays, with the broken
  voices commented out, and says what it left out. If you edited the code
  meanwhile, your edit stays and the panel offers **Use Muse's version**
  instead; after a further edit it no longer writes over yours.
- A change arrives as **one undoable edit**: Ctrl/Cmd+Z takes it back.
- If you changed the code while Muse was working, it asks before overwriting
  your edit (unless Autopilot is on).
- Muse's edits are evaluated like your typing, so they never start a sample
  download; press Play to load new samples.

## Attachments

Use **+** in the message box (or paste, or drop a file on the sidebar):

- **a text or code file** - for example a Strudel tune to adapt;
- **an image** - a screenshot of code, or of a DAW arrangement to recreate;
- **audio** - a reference track. Muse measures its tempo, key, loudness,
  brightness and rhythm, and can look at a spectrogram.

Files stay in your browser's memory: Muse receives the text, the picture or
the measurements, and nothing is saved to a project.

## Conversations

Conversations are kept in your browser for your account, with the same
models and points as Muse in the studio. In the studio itself, Muse writes
code into Pattern Clips; other AI apps can do the same through TuttiDAW's MCP
server (see the agent skill below).

## For AI agents

The same guide is published as an agent skill at
`/skills/tuttidaw-code/SKILL.md` (with a downloadable zip), and listed in
`/llms.txt`. Its references are generated from these pages, the engine's
function table and the device catalogue, so they always match what TuttiDAW
plays. Muse on TuttiCode reads the same pages when it needs a detail.

Source: https://tuttidaw.com/code/learn/muse
