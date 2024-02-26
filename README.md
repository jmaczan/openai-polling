[<p align="center"><img width="150" src="https://tmlc.pl/logo.jpg" alt="Tiny Machine Learning Company"></p>](https://tmlc.pl)

# OpenAI Polling

A library that [fills the gaps in OpenAI Threads API](https://platform.openai.com/docs/assistants/how-it-works/polling-for-updates)

[![npm package][npm-img]][npm-url]

<!-- [![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url] -->

> **OpenAI docs**: In order to keep the status of your run up to date, you will have to **periodically retrieve the Run object**. You can check the status of the run each time you retrieve the object **to determine what your application should do next**. We plan to add support for streaming to make this simpler in the near future.

It's not there yet and I bet you want to use Threads API anyways. All you need is to import this library and call the `poll` function

## 🌸 TMLC says: "Just upload your data and get an AI model"

`<shameless plug>`

We are building an [Automated Machine Learning platform](https://automl.tmlc.pl) and we believe it will give you an edge over others

[Click here to sign up on a priority waitlist and get an early access to our platform!](https://mailchi.mp/1f414e9e32d1/t06qvxkc5z)

`</shameless plug>`

## Install

```bash
npm install @tmlc/openai-polling
```

## Usage

```ts
import { poll } from '@tmlc/openai-polling';

await poll(openai, thread, run);
```

## API

### poll(openai: OpenAI, thread: OpenAI.Beta.Threads.Thread, runId: OpenAI.Beta.Threads.Runs.Run): Promise<OpenAI.Beta.Threads.Runs.Run>

#### openai

Type: `OpenAI`

#### threadId

Type: `OpenAI.Beta.Threads.Thread`

##### runId

Type: `OpenAI.Beta.Threads.Runs.Run`

#### returns

Type: `Promise<OpenAI.Beta.Threads.Runs.Run>`

## License

MIT License

## Author

[Jędrzej Maczan](https://maczan.pl) from [Tiny Machine Learning Company](https://tmlc.pl), [Gdynia](https://en.wikipedia.org/wiki/Gdynia), [Poland](https://en.wikipedia.org/wiki/Poland), 2024

[Click here to sign up on a priority waitlist and get an early access to our AutoML platform first](https://mailchi.mp/1f414e9e32d1/t06qvxkc5z)

<!-- [build-img]:https://github.com/ryansonshine/typescript-npm-package-template/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/ryansonshine/typescript-npm-package-template/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/typescript-npm-package-template
[downloads-url]:https://www.npmtrends.com/typescript-npm-package-template
[npm-img]:https://img.shields.io/npm/v/typescript-npm-package-template -->

[npm-url]: https://www.npmjs.com/package/@tmlc/openai-polling

<!-- [issues-img]:https://img.shields.io/github/issues/ryansonshine/typescript-npm-package-template
[issues-url]:https://github.com/ryansonshine/typescript-npm-package-template/issues
[codecov-img]:https://codecov.io/gh/ryansonshine/typescript-npm-package-template/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/ryansonshine/typescript-npm-package-template
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/ -->
