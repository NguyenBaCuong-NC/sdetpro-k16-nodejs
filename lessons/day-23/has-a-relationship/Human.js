"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.move = function () {
        console.log("Animal moving ...");
    };
    Human.prototype.talk = function () {
        console.log(("Animal talking ..."));
    };
    return Human;
}());
exports.default = Human;
