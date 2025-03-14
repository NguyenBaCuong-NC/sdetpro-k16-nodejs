"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalController_1 = require("./AnimalController");
var Horse_1 = require("./Horse");
var Tiger_1 = require("./Tiger");
var Dog_1 = require("./Dog");
var dog = new Dog_1.default();
var horse = new Horse_1.default();
var tiger = new Tiger_1.default();
var maxSpeedAnimal = AnimalController_1.default.getAnimalMaxSpeed([dog, horse, tiger]);
console.log("".concat(dog.getName(), ": ").concat(dog.getSpeed()));
console.log("".concat(tiger.getName(), ": ").concat(tiger.getSpeed()));
console.log("".concat(horse.getName(), ": ").concat(horse.getSpeed()));
console.log("The ".concat(maxSpeedAnimal, " is winner for racing"));
