"use strict";
var test = require('blue-tape');
var path_1 = require('path');
function fixture(path) {
    function curry(testfn) {
        return function (title, fixtureName, cb) {
            var fixturePath = path_1.join(path, fixtureName);
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
