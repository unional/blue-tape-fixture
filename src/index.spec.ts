import { join } from 'path';
import fixture from './index';
import { existsSync } from 'fs';

const test = fixture('test/fixtures');

test('running', 'case-1', (t, path) => {
  t.equal(path, 'test/fixtures/case-1', 'path should be "test/fixtures/case-1"');
  t.assert(existsSync(join(path, 'somefile.txt')), 'should find somefile.txt');
  t.end();
});
