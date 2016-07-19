import { join } from 'path';
import { existsSync } from 'fs';
import tape = require('blue-tape');

import fixture from './index';

const test = fixture(tape, join(__dirname, 'fixtures'));

test('abs path', 'case-1', (t, path) => {
  const filePath = join(path, 'somefile.txt');
  t.assert(existsSync(filePath), 'should find somefile.txt');
  t.end();
});

const rtest = fixture(tape, 'src/fixtures');

rtest('relative path', 'case-1', (t, path) => {
  const filePath = join(path, 'somefile.txt');
  t.assert(existsSync(filePath), 'should find somefile.txt');
  t.end();
});
