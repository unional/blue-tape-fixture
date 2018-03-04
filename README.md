# blue tape fixture

[![Greenkeeper badge](https://badges.greenkeeper.io/unional/blue-tape-fixture.svg)](https://greenkeeper.io/)

[![npm version](https://badge.fury.io/js/blue-tape-fixture.svg)](https://badge.fury.io/js/blue-tape-fixture)
[![Build Status](https://travis-ci.org/unional/blue-tape-fixture.svg?branch=master)](https://travis-ci.org/unional/blue-tape-fixture)

Helps you to easily write fixture tests.

## Important Notice

I have created [`@unional/fixture`](https://github.com/unional/fixture) which will replace this package.
It is decoupled from `blue-tape` and can be used with any test runner.

Feel free to give it a try. If you found any feature in `blue-tape-fixture` is missing in `@unional/fixture`, please open an issue there.


## What is Fixture Test

Fixture tests are tests that require access to some files. The tests may write files and in that case the files can be compared with a baseline (i.e. Baseline Tests)

## Usage

```ts
import tape = require('blue-tape');
import fixture from 'blue-tape-fixture';

// Point to the base folder which contain the fixtures.
const ftest = fixture(tape, './src/_fixture_/cases');

// You can also use absolute path.
// const ftest = fixture(process.env.PWD, 'fixture/cases');

ftest('test name', 'fixture-name', (t, path) => {
  // t is blue-tape test.
  // path is the path to the fixture-name folder.
  // ...test away
});
```

## Contribute

```sh
# right after fork
npm install

# begin making changes
npm run watch

```
