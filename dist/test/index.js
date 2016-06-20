"use strict";
var blue_tape_fixture_1 = require('blue-tape-fixture');
var test = blue_tape_fixture_1.default('fixtures');
test('running', 'case-1', function (t, path) {
    t.equal(path, 'fixtures/case-1');
    t.end();
});
