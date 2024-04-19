# Contributing Guidelines

_Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!_ :octocat:

### Contents

- [Asking Questions](#bulb-asking-questions)
- [How can I Contribute?](#inbox_tray-how-can-i-contribute)

> **This guide serves to set clear expectations for everyone involved with the project so that we can improve it together while also creating a welcoming space for everyone to participate. Following these guidelines will help ensure a positive experience for contributors and maintainers.**

## :bulb: Asking Questions

If you have any question that does not relate to a bug or a feature request, please use [GitHub Discussions](https://github.com/tscritch/wavesurfer-record-plugin-wav/discussions) instead of GitHub issues.

## :inbox_tray: How can I Contribute?

**GitHub issues**

If you encounter a problem with this library or if you have a new feature you'd like to see in this project, please create [a new issue](https://github.com/tscritch/wavesurfer-record-plugin-wav/issues/new/choose).

**GitHub Pull requests**

Please leverage the repository's own tools to make sure the code is aligned with our standards:

1. Run all check commands before submitting the PR (`type:check`, `format:check`, `lint:check`, `test:coverage` and `spell:check`)
2. Please commit your changes and run a `setup` command so you can actually check how would the template look like once cleaned up
3. Always leverage the `cz` command to create a commit. We heavily rely on this for automatic releases.

## Development

### Node.js, npm version

Wavesurfer Record Plugin Wav relies on [Volta](https://volta.sh/) to ensure the Node.js version is consistent across developers. It's also used in the GitHub workflow file.

### TypeScript

Leverages [esbuild](https://github.com/evanw/esbuild) for blazing-fast builds but keeps `tsc` to generate `.d.ts` files.
Generates a single ESM build.

Commands:

- `build`: runs type checking, then ESM and `d.ts` files in the `build/` directory
- `clean`: removes the `build/` directory
- `type:dts`: only generates `d.ts`
- `type:check`: only runs type checking
- `type:build`: only generates ESM

### Tests

Wavesurfer Record Plugin Wav uses [Node.js's native test runner](https://nodejs.org/api/test.html). Coverage is done using [c8](https://github.com/bcoe/c8) but will switch to Node.js's one once out.

Commands:

- `test`: runs test runner
- `test:watch`: runs test runner in watch mode
- `test:coverage`: runs test runner and generates coverage reports

### Format & lint

This template relies on [Biome](https://biomejs.dev/) to do both formatting & linting in no time.
It also uses [cspell](https://github.com/streetsidesoftware/cspell) to ensure correct spelling.

Commands:

- `format`: runs Prettier with automatic fixing
- `format:check`: runs Prettier without automatic fixing (used in CI)
- `lint`: runs Biome with automatic fixing
- `lint:check`: runs Biome without automatic fixing (used in CI)
- `spell:check`: runs spell checking

### Releasing

Under the hood, this library uses [semantic-release](https://github.com/semantic-release/semantic-release) and [Commitizen](https://github.com/commitizen/cz-cli).
The goal is to avoid manual release processes. Using `semantic-release` will automatically create a GitHub release (hence tags) as well as an npm release.
Based on your commit history, `semantic-release` will automatically create a patch, feature, or breaking release.

Commands:

- `cz`: interactive CLI that helps you generate a proper git commit message, using [Commitizen](https://github.com/commitizen/cz-cli)
- `semantic-release`: triggers a release (used in CI)
