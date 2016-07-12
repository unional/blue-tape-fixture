import fixture from './index';

const test = fixture('fixtures');

test('running', 'case-1', (t, path) => {
  t.equal(path, 'fixtures/case-1');
  t.end();
});
