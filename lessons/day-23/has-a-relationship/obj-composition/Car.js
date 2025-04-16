"use strict";
//Obj Composition
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricEngine_1 = require("./ElectricEngine");
var GasEngine_1 = require("./GasEngine");
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    //Controller
    Car.prototype.start = function () {
        this.engine.start();
    };
    Car.prototype.move = function () {
        console.log("Car moving ...");
    };
    Car.prototype.stop = function () {
        console.log("Car stopped");
    };
    return Car;
}());
exports.default = Car;
//Obj Composition 
var electricCar = new Car(new ElectricEngine_1.default());
electricCar.start();
var gasCar = new Car(new GasEngine_1.default());
gasCar.start();
