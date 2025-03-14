"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        var _this = _super.call(this, 1, 'Horse') || this;
        _this.randomSpeed = _this.getRandomSpeed();
        _this.speed = _this.randomSpeed;
        return _this;
    }
    Horse.prototype.getRandomSpeed = function () {
        var randomSpeed = Math.floor(Math.random() * 100 + 1 - 25);
        if (randomSpeed <= 0) {
            randomSpeed = 1;
        }
        return randomSpeed;
    };
    return Horse;
}(Animal_1.default));
exports.default = Horse;
