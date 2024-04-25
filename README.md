# Wavesurfer Record Plugin Wav

![NPM](https://img.shields.io/npm/l/wavesurfer-record-plugin-wav)
![NPM](https://img.shields.io/npm/v/wavesurfer-record-plugin-wav)
![GitHub Workflow Status](https://github.com/tscritch/wavesurfer-record-plugin-wav/actions/workflows/wavesurfer-record-plugin-wav.yml/badge.svg?branch=main)

Replacement [Wavesurfer.js](https://github.com/katspaugh/wavesurfer.js) Record Plugin for recording `.wav` files. Uses the [extendable-media-recorder](https://github.com/chrisguttandin/extendable-media-recorder) to encode to wav.

## Getting started

### Installation

```
npm install wavesurfer-record-plugin-wav
```

```
yarn install wavesurfer-record-plugin-wav
```

### Example
Songleaf - [Audio Workbench](https://workbench.songleaf.app/recording)

### Usage

Use this as you would the default [Wavesurfer.js Record Plugin](https://wavesurfer.xyz/examples/?record.js)

When creating and registering the plugin, make sure to set `mimeType` to `"audio/wav"`

```javascript
import WaveSurfer from "wavesurfer.js"
import RecordPlugin from "wavesurfer-record-plugin-wav"

...

wavesurfer = WaveSurfer.create(...)

record = wavesurfer.registerPlugin(RecordPlugin.create({
  mimeType: "audio/wav",
}))
```

See the example usage here - https://wavesurfer.xyz/examples/?record.js

### Caveats

Because [extendable-media-recorder](https://github.com/chrisguttandin/extendable-media-recorder) does not support `MediaRecorder.requestData` ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/requestData)) function the `RecordPlugin.pause()` will not function properly. I've left it in for parity but it noops.
