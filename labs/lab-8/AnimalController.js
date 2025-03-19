"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalController = /** @class */ (function () {
    function AnimalController() {
    }
    AnimalController.getAnimalWin = function (animalList) {
        var winer = animalList[0];
        var animalWin = [];
        for (var _i = 0, animalList_1 = animalList; _i < animalList_1.length; _i++) {
            var animal = animalList_1[_i];
            if (animal.getSpeed() > winer.getSpeed()) {
                winer = animal;
            }
        }
        for (var _a = 0, animalList_2 = animalList; _a < animalList_2.length; _a++) {
            var animal = animalList_2[_a];
            if (animal.getSpeed() === winer.getSpeed()) {
                animalWin.push(animal);
            }
        }
        return animalWin;
    };
    return AnimalController;
}());
exports.default = AnimalController;
