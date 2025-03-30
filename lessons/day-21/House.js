"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var House = /** @class */ (function () {
    function House() {
    }
    // constructor(topRoofColor: string, windowNumber: number, color: string, mainDoorNumber: number) {
    //     this.topRoofColor = topRoofColor;
    //     this.windowNumber = windowNumber;
    //     this.color = color;
    //     this.mainDoorNumber = mainDoorNumber;
    // }
    //getters
    House.prototype.getTopRoofColor = function () {
        return this.topRoofColor;
    };
    House.prototype.getWindowNumber = function () {
        return this.windowNumber;
    };
    House.prototype.getColor = function () {
        return this.color;
    };
    House.prototype.getMainDoorNumber = function () {
        return this.mainDoorNumber;
    };
    //setters  
    House.prototype.setTopRoofColor = function (topRoofColor) {
        this.topRoofColor = topRoofColor;
    };
    House.prototype.setWindowNumber = function (windowNumber) {
        this.windowNumber = windowNumber;
    };
    House.prototype.setColor = function (color) {
        this.color = color;
    };
    House.prototype.setMainDoorNumber = function (mainDoorNumber) {
        this.mainDoorNumber = mainDoorNumber;
    };
    return House;
}());
exports.default = House;
var teoHouse = new House();
teoHouse.setTopRoofColor("red");
teoHouse.setWindowNumber(10);
teoHouse.setColor("blue");
teoHouse.setMainDoorNumber(1);
console.log(teoHouse);
