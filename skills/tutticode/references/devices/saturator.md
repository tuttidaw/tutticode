# Saturator

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Saturator:808 Shaper")
```

Accepted names: `saturator`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `drive` | Drive | -36 .. 36 dB |
| `threshold` | Threshold | -50 .. 0 dB |
| `output` | Output | -36 .. 0 dB |
| `dryWetBalance` | Dry/Wet | 0 .. 1 |
| `postClipMode` | Post Clip | `No Clip` `Soft Clip` `Hard Clip` |
| `wsDrive` | Waveshaper Drive | 0 .. 1 |

## Factory presets

808 Shaper · Warm Tape · Wave Folder
