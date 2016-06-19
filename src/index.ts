import test = require('blue-tape');
import { join } from 'path';

export interface FixtureTest {
  (name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
  only(name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
  skip(name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
}

/**
 * Create fixture test with the specified fixture base path.
 * @param fixtureBasePath Fixture base path. If using relative path, starts at the project root.
 */
export default function fixture(fixtureBasePath: string): FixtureTest {
  function curry(testfn: (name: string, cb: test.TestCase) => any): any {
    return (
      title: string,
      fixtureName: string,
      cb: (t: test.Test, path: string) => any
    ) => {
      const fixturePath = join(fixtureBasePath, fixtureName);
      return testfn(`${title} (fixture: ${fixtureName})`, t => {
        return cb(t, fixturePath);
      });
    };
  }
  let result: any = curry(test);
  result.only = curry(test.only);
  result.skip = curry(test.skip);
  return result as FixtureTest;
}
