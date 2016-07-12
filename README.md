# blue tape fixture

[![npm version](https://badge.fury.io/js/blue-tape-fixture.svg)](https://badge.fury.io/js/blue-tape-fixture)
[![Build Status](https://travis-ci.org/unional/blue-tape-fixture.svg?branch=master)](https://travis-ci.org/unional/blue-tape-fixture)

Helps you to easily write fixture tests.

## What is Fixture Test

Fixture tests are tests that require access to some files. The tests may write files and in that case the files can be compared with a baseline (i.e. Baseline Tests)


## Usage

```ts
import fixture from 'blue-tape-fixture';

// Point to the base folder which contain the fixtures.
const ftest = fixture('./src/_fixture_/cases');

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
