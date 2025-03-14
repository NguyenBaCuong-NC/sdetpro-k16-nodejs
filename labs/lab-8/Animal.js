"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(speed, name) {
        this.speed = speed;
        this.name = name;
    }
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports.default = Animal;
