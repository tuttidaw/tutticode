# Stutter

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Stutter:Airpusher")
```

Accepted names: `stutter`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `chance` | Chance | 0 .. 1 % |
| `offsetSixteenth` | Offset | 0 .. 15 16th |
| `gateSixteenth` | Gate | 1 .. 19 16th |
| `basePitch` | Pitch | -12 .. 0 st |
| `pitchDecay` | Pitch Decay | 0 .. 24 st |
| `volDecay` | Decay | 0 .. 1 % |
| `wetLevel` | Volume | 0 .. 2 % |
| `midFreq` | Filter | 50 .. 18000 Hz (log) |
| `bandWidth` | Width | 0.5 .. 9 |
| `variation` | Variation | 0 .. 10 |
| `noTriplets` | No Triplets | `true` / `false` |
| `filterOn` | Filter On | `true` / `false` |
| `instantRepeat` | Repeat | `true` / `false` |
| `interval` | Interval | `1/32` `1/16` `1/8` `1/4` `1/2` `1 Bar` `2 Bars` `4 Bars` |
| `grid` | Grid | `1/256` `1/128` `1/96` `1/64` `1/48` `1/32` `1/24` `1/16` `1/12` `1/8` `1/6` `1/4` `1/3` `1/2` `2/3` `1 Bar` |
| `variationMode` | Variation Mode | `Trigger` `1/4` `1/8` `1/16` `Auto` |
| `mixType` | Mix Type | `Mix` `Ins` `Gate` |

## Factory presets

Airpusher · Classic Stutter · Glitch Chance · Half-Bar Roll · Pitch Fall
