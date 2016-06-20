import test = require('blue-tape');
export interface FixtureTest {
    (name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
    only(name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
    skip(name: string, fixtureName: string, cb: (t: test.Test, path: string) => any): test.Test;
}
export default function fixture(path: string): FixtureTest;
