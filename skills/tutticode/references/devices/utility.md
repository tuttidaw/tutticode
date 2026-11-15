# Utility

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Utility:Bass Mono")
```

Accepted names: `utility`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `gainDb` | Gain | -70 .. 35 dB |
| `balance` | Balance | -1 .. 1 |
| `stereoWidth` | Width | 0 .. 4 |
| `bassMonoFrequency` | Bass Mono | 50 .. 500 Hz |
| `channelMode` | Mode | `Left` `Stereo` `Right` `Swap` |
| `phaseInvertL` | Ø L | `true` / `false` |
| `phaseInvertR` | Ø R | `true` / `false` |
| `mono` | Mono | `true` / `false` |
| `mute` | Mute | `true` / `false` |
| `bassMono` | Bass Mono On | `true` / `false` |
| `dcFilter` | DC Filter | `true` / `false` |

## Factory presets

Bass Mono · Mono · Wide Stereo
