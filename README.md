# Wavesurfer Record Plugin Wav

![NPM](https://img.shields.io/npm/l/@tscritch/wavesurfer-record-plugin-wav)
![NPM](https://img.shields.io/npm/v/@tscritch/wavesurfer-record-plugin-wav)
![GitHub Workflow Status](https://github.com/tscritch/wavesurfer-record-plugin-wav/actions/workflows/wavesurfer-record-plugin-wav.yml/badge.svg?branch=main)

Replacement [Wavesurfer.js]() Record Plugin for recording `.wav` files. Uses the [extendable-media-recorder](https://github.com/chrisguttandin/extendable-media-recorder) to encode to wav.

## Getting started

## Features

### Caveats

Because [extendable-media-recorder](https://github.com/chrisguttandin/extendable-media-recorder) does not support `MediaRecorder.requestData` ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/requestData)) function the `RecordPlugin.pause()` will not function properly. I've left it in for parity but it noops.
