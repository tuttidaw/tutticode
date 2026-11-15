# Resonator

An audio effect (`.fx`), available.

```js
note("c3 e3 g3 b3").fx("Resonator:Hollow Pipe")
```

Accepted names: `resonator`.

## Parameters

| Key | Panel label | Values |
|---|---|---|
| `decay` | Decay | 0 .. 100 % |
| `colorAmt` | Color | 0 .. 100 % |
| `width` | Width | 0 .. 1 |
| `gainDb` | Gain | -15 .. 15 dB |
| `dryWet` | Dry/Wet | 0 .. 1 |
| `inFilterFreq` | Filter | 50 .. 8000 Hz (log) |
| `gain1` | I Gain | 0 .. 1.995 |
| `gain2` | II Gain | 0 .. 1.995 |
| `gain3` | III Gain | 0 .. 1.995 |
| `gain4` | IV Gain | 0 .. 1.995 |
| `gain5` | V Gain | 0 .. 1.995 |
| `inFilterOn` | Filter On | `true` / `false` |
| `inFilterMode` | Filter Type | `Lowpass` `Highpass` `Bandpass` `Notch` |
| `note` | Note | 12 .. 84 st |
| `pitch2` | II Pitch | -24 .. 24 st |
| `pitch3` | III Pitch | -24 .. 24 st |
| `pitch4` | IV Pitch | -24 .. 24 st |
| `pitch5` | V Pitch | -24 .. 24 st |
| `useCurrentScale` | Use Current Scale | `true` / `false` |
| `noteScaleDegrees` | Note | -21 .. 21 sd |
| `pitchScaleDegrees2` | II Pitch | -21 .. 21 sd |
| `pitchScaleDegrees3` | III Pitch | -21 .. 21 sd |
| `pitchScaleDegrees4` | IV Pitch | -21 .. 21 sd |
| `pitchScaleDegrees5` | V Pitch | -21 .. 21 sd |
| `modeB` | Mode B | `true` / `false` |
| `constDecay` | Const | `true` / `false` |
| `on1` | I On | `true` / `false` |
| `on2` | II On | `true` / `false` |
| `on3` | III On | `true` / `false` |
| `on4` | IV On | `true` / `false` |
| `on5` | V On | `true` / `false` |

## Factory presets

Hollow Pipe · Init · Major Chord · Metallic Bell · Wide Drone
