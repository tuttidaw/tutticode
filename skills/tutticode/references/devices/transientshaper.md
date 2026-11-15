# Transient Shaper

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Transient Shaper:Hat Snap")
```

Accepted names: `transientshaper`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `attack` | Attack | -24 .. 24 dB |
| `sustain` | Sustain | -24 .. 24 dB |
| `dryWet` | Dry/Wet | 0 .. 1 % |
| `clip` | Clip | `true` / `false` |
| `emphasis` | Emphasis | `Off` `Low` `Mid` `High` |
| `scOn` | SC On | `true` / `false` |
| `scMix` | SC Mix | 0 .. 1 % |
| `scGain` | SC Gain | -24 .. 24 dB |

Sidechain: `sidechain: "kick"` keys it by the voice labelled `kick:`, `"bus:verb"` by the bus `verb` and `"group:drums"` by the group `drums` of the program.

## Factory presets

Hat Snap · More Room · Parallel Punch · Punchy Kick · Snare Crack · Soft Attack · Tight Drums
