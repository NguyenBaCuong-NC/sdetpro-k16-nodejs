"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Animal moving ...");
    };
    Animal.prototype.talk = function () {
        console.log(("Animal talking ..."));
    };
    return Animal;
}());
exports.default = Animal;
