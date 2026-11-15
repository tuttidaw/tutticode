# Delay

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Delay:Disharmonics")
```

Accepted names: `delay`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `timeL` | L (ms) | 1 .. 999 ms |
| `timeR` | R (ms) | 1 .. 999 ms |
| `offsetL` | Offset L | -33 .. 33 % |
| `offsetR` | Offset R | -33 .. 33 % |
| `feedback` | Feedback | 0 .. 0.95 % |
| `filterFreq` | Filter Fq | 50 .. 18000 Hz (log) |
| `filterWidth` | Width | 0.5 .. 9 |
| `modFreq` | Mod Rate | 0.01 .. 40 Hz (log) |
| `lfoTime` | LFO Time | 0.1 .. 200 s |
| `lfoWave` | Wave | `Sine` `Triangle` `Ramp Up` `Ramp Down` `Square` `S&H` `Wander` |
| `lfoMorph` | Morph | -1 .. 1 % |
| `lfoTimeMode` | Rate Mode | `Rate` `Time` `Synced` `Triplet` `Dotted` `Sixteenth` |
| `modAmountTime` | Mod Time | 0 .. 1 % |
| `modAmountFilter` | Mod Filt | 0 .. 1 % |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |
| `freeze` | Freeze | `true` / `false` |
| `filterOn` | Filter On | `true` / `false` |
| `pingPong` | Ping Pong | `true` / `false` |
| `smoothingMode` | Mode | `Repitch` `Fade` `Jump` |

## Factory presets

Disharmonics · Dotted Eighth · Eighth Note · Glitch · Modulated Slap · Ping Pong
