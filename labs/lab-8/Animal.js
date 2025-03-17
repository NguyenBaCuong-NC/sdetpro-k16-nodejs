"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(maxSpeed, name) {
        this.speed = this.getRandomSpeed(maxSpeed);
        this.name = name;
    }
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getRandomSpeed = function (maxSpeed) {
        var randomSpeed = Math.floor(Math.random() * maxSpeed + 1);
        if (randomSpeed <= 0) {
            randomSpeed = 1;
        }
        return randomSpeed;
    };
    return Animal;
}());
exports.default = Animal;
