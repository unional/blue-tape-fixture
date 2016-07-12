"use strict";
var test = require('blue-tape');
var path_1 = require('path');
/**
 * Create fixture test with the specified fixture base path.
 * @param fixtureBasePath Fixture base path. If using relative path, starts at the project root.
 */
function fixture(fixtureBasePath) {
    function curry(testfn) {
        return function (title, fixtureName, cb) {
            var fixturePath = path_1.join(fixtureBasePath, fixtureName);
            return testfn(title + " (fixture: " + fixtureName + ")", function (t) {
                return cb(t, fixturePath);
            });
        };
    }
    var result = curry(test);
    result.only = curry(test.only);
    result.skip = curry(test.skip);
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fixture;
