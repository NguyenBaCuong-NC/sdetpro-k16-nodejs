"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Human_1 = require("./Human");
var RacingController = /** @class */ (function () {
    function RacingController() {
    }
    RacingController.move = function (movable) {
        movable.move();
    };
    RacingController.talk = function (talkable) {
        talkable.talk();
    };
    return RacingController;
}());
exports.default = RacingController;
RacingController.move(new Animal_1.default());
RacingController.move(new Human_1.default());
RacingController.talk(new Animal_1.default());
RacingController.talk(new Human_1.default());
