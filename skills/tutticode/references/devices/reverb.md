# Reverb

An audio effect (`.fx`), tested end to end.

```js
note("c3 e3 g3 b3").fx("Reverb:Ambience")
```

Accepted names: `reverb`.

## Parameters

| Key | Live label | Values |
|---|---|---|
| `preDelay` | Predelay | 0.5 .. 250 ms (log) |
| `bandFreq` | In Freq | 50 .. 18000 Hz (log) |
| `bandWidth` | In Width | 0.5 .. 9 oct |
| `spinFreq` | Spin Rate | 0.074 .. 1.3 Hz (log) |
| `spinDepth` | Spin Amt | 2 .. 55 |
| `roomSize` | Size | 0.22 .. 500 (log) |
| `decayTime` | Decay | 200 .. 60000 ms (log) |
| `stereoSeparation` | Stereo | 0 .. 120 ° |
| `mixReflect` | Reflect | 0.03 .. 2 (log) |
| `mixDiffuse` | Diffuse | 0.03 .. 2 (log) |
| `shelfHiFreq` | Hi Freq | 20 .. 16000 Hz (log) |
| `shelfHiGain` | Hi Gain | 0.2 .. 1 |
| `shelfLoFreq` | Lo Freq | 20 .. 15000 Hz (log) |
| `shelfLoGain` | Lo Gain | 0.2 .. 1 |
| `sizeModFreq` | Chor Rate | 0.01 .. 8 Hz (log) |
| `sizeModDepth` | Chor Amt | 0.01 .. 4 |
| `allPassGain` | Diff Gain | 0.001 .. 0.96 |
| `allPassSize` | Diff Size | 0.05 .. 1 |
| `diffuseDelay` | Shape | 0 .. 1 |
| `dryWetBalance` | Dry/Wet | 0 .. 1 |
| `freezeOn` | Freeze On | `true` / `false` |
| `chorusOn` | Chorus On | `true` / `false` |
| `spinOn` | Spin On | `true` / `false` |
| `bandHighOn` | In Lo Cut On | `true` / `false` |
| `bandLowOn` | In Hi Cut On | `true` / `false` |

## Factory presets

Ambience · Ambience Medium · Arena Tail · Backbone · Ballad Reverb · Basement · Big Room · Bright Long Verb · Bright Reflections · Bright Room · Cathedral · Church · Concert Hall · Concrete Chamber · Corridor · Dark Hall · Dark Medium Room · Dark Small Room · Drums Room · Empty Club · Forest Floor · Foyer · Frozen Build Up · Garage · Guitar Room · Gymnasium · Hall Damped · Hall Shine · Halluzinatione · High Verb · In A Box · Large Chamber · Large Factory · Large Hall · Large Space Chorus · Large Stage · Late Wrapper · Living Room · Long Ambience · Long Tail · Main Hall · Marble Lobby · Medium Concert · Medium Hall · Medium Room · Medium Stage · Museum Lobby · Office · Oil Barrel · Outer Space · Parallel Walls · Parking Garage · Plate Damped · Red Canyon · Reflections · Room Wood · Short Ambience · Singing Can · Six Seconds · Sixty Seconds · Sizzle · Small Chamber · Small Hall · Small Room · Small Tile · Snare Room · Space Reverb · Spacious · Stadium · Standard Room · Storage Space · Tile Room · Venus Bright · Vocal Hall · Vocal Space · Warm Reverb Long · Wide Ambience · Wooden Hall · Wooden Room
