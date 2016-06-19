import test = require('blue-tape');
export interface FixtureTest {
    (name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
    only(name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
    skip(name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
}
/**
 * Create fixture test with the specified fixture base path.
 * @param fixtureBasePath Fixture base path. If using relative path, starts at the project root.
 */
export default function fixture(fixtureBasePath: string): FixtureTest;
