# Spectral Delay

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Spectral Delay:Frozen Pad")
```

Accepted names: `spectraldelay`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `freezerOn` | Freezer | `true` / `false` |
| `freeze` | Freeze | `true` / `false` |
| `freezerMode` | Freezer Mode | `Manual` `Retrigger` |
| `retrigMode` | Retrigger | `Onsets` `Sync` |
| `sensitivity` | Sensitivity | 0 .. 1 % |
| `syncUnit` | Interval Unit | `ms` `Beats` |
| `syncInterval` | Interval | 0.02 .. 10 s (log) |
| `syncDivision` | Interval (beats) | `1/64` `1/48` `1/32` `1/24` `1/16` `1/12` `1/8` `1/6` `3/16` `1/4` `5/16` `1/3` `3/8` `1/2` `3/4` `1` `1.5` `2` `3` `4` `6` `8` |
| `fadeType` | Fade Shape | `Crossfade` `Envelope` |
| `xfade` | X-Fade | 0 .. 1 % |
| `fadeIn` | Fade In | 0.002 .. 10 s (log) |
| `fadeOut` | Fade Out | 0.02 .. 10 s (log) |
| `delayOn` | Delay | `true` / `false` |
| `delayTime` | Time | 0.01 .. 3 s (log) |
| `timeUnit` | Mode | `Time` `Notes` `16th` `16th Triplet` `16th Dotted` |
| `timeDivision` | Notes | `1/64` `1/48` `1/32` `1/24` `1/16` `1/12` `1/8` `1/6` `3/16` `1/4` `5/16` `1/3` `3/8` `1/2` `3/4` `1` `1.5` `2` `3` `4` `6` `8` |
| `timeSixteenths` | 16ths | `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` `11` `12` `13` `14` `15` `16` |
| `feedback` | Feedback | 0 .. 1 % |
| `shift` | Shift | -400 .. 400 Hz |
| `stereo` | Stereo | 0 .. 1 % |
| `delayMix` | Mix | 0 .. 1 % |
| `tilt` | Tilt | -2 .. 2 |
| `spray` | Spray | 0 .. 0.4 s |
| `mask` | Mask | -1 .. 1 |
| `inputSend` | Input Send | 0 .. 1 |
| `order` | Dly > Frz | `true` / `false` |
| `dryWet` | Dry/Wet | 0 .. 1 % |

## Factory presets

Frozen Pad · Init · Shimmer Trails · Smeared Freeze · Spectral Echo
