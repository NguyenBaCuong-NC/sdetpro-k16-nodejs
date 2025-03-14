"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalController = /** @class */ (function () {
    function AnimalController() {
    }
    AnimalController.getAnimalMaxSpeed = function (animalList) {
        var maxSpeed = animalList[0].getSpeed();
        var animalMaxSpeed = [];
        for (var index = 1; index < animalList.length; index++) {
            if (animalList[index].getSpeed() > maxSpeed) {
                maxSpeed = animalList[index].getSpeed();
            }
        }
        for (var _i = 0, animalList_1 = animalList; _i < animalList_1.length; _i++) {
            var animal = animalList_1[_i];
            if (animal.getSpeed() === maxSpeed) {
                var name_1 = animal.getName();
                animalMaxSpeed.push(name_1);
            }
        }
        return animalMaxSpeed;
    };
    return AnimalController;
}());
exports.default = AnimalController;
