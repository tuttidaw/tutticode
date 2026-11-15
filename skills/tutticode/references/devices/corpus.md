# Resonant Body

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Resonant Body:Bright Snare")
```

Accepted names: `resonantbody`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `resonanceType` | Type | `Beam` `Marimba` `String` `Membrane` `Plate` `Pipe` `Tube` |
| `quality` | Quality | `Eco` `Low` `Medium` `High` |
| `baseFreq` | Tune | 16.35 .. 4173.457 Hz |
| `transpose` | Transpose | -48 .. 48 st |
| `fine` | Fine | -50 .. 50 ct |
| `spread` | Spread | -1 .. 1 % |
| `decay` | Decay | 0 .. 1 % |
| `material` | Material | -1 .. 1 % |
| `radius` | Radius | 0 .. 1 % |
| `brightness` | Bright | -1 .. 1 % |
| `inharmonics` | Inharm | -1 .. 1 % |
| `opening` | Opening | 0 .. 1 % |
| `ratio` | Ratio | 0 .. 1 % |
| `hit` | Hit | 0 .. 1 % |
| `posL` | Pos. L | 0 .. 1 % |
| `posR` | Pos. R | 0 .. 1 % |
| `width` | Width | 0 .. 1 % |
| `lfoOn` | LFO | `true` / `false` |
| `lfoType` | Shape | `Sine` `Square` `Triangle` `Saw Up` `Saw Down` `Noise` `Smooth Noise` |
| `lfoRate` | Rate | 0 .. 1 |
| `lfoSyncRate` | Rate | `1/32` `1/16T` `1/16` `1/8T` `1/8` `1/4T` `1/4` `1/2T` `1/2` `1T` `1` `2T` `2` `4T` `4` `8T` `8` `16T` `16` `32T` `32` `64T` |
| `lfoAmount` | Amount | 0 .. 1 % |
| `lfoSpin` | Spin | 0 .. 1 % |
| `lfoPhase` | Phase | 0 .. 360 ° |
| `lfoOffset` | Offset | 0 .. 360 ° |
| `filterOn` | Filter | `true` / `false` |
| `filterFreq` | Freq | 50 .. 18000 Hz (log) |
| `filterBandwidth` | Bdwidth | 0.5 .. 9 |
| `outputGain` | Gain | 0 .. 1 |
| `bleed` | Bleed | 0 .. 1 % |
| `dryWetBalance` | Dry/Wet | 0 .. 1 % |

Old keys still accepted: `listeningX` (now `posL`).

## Factory presets

Bright Snare · Marimba Body · Metal Plate · Sympathetic Strings
