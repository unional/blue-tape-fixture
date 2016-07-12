import { join } from 'path';
import fixture from './index';
import { existsSync } from 'fs';

const test = fixture(join(__dirname, 'fixtures'));

test('abs path', 'case-1', (t, path) => {
  const filePath = join(path, 'somefile.txt');
  t.assert(existsSync(filePath), 'should find somefile.txt');
  t.end();
});

const rtest = fixture('src/fixtures');

rtest('relative path', 'case-1', (t, path) => {
  const filePath = join(path, 'somefile.txt');
  t.assert(existsSync(filePath), 'should find somefile.txt');
  t.end();
});
