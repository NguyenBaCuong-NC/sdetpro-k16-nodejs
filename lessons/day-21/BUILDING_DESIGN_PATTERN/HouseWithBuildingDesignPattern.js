"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HouseWithBuildingDesignPattern = /** @class */ (function () {
    function HouseWithBuildingDesignPattern() {
    }
    //Getters //Read only
    HouseWithBuildingDesignPattern.prototype.getTopRoofColor = function () {
        return this.topRoofColor;
    };
    HouseWithBuildingDesignPattern.prototype.getWindowNumber = function () {
        return this.windowNumber;
    };
    HouseWithBuildingDesignPattern.prototype.getColor = function () {
        return this.color;
    };
    HouseWithBuildingDesignPattern.prototype.getMainDoorNumber = function () {
        return this.mainDoorNumber;
    };
    // Sale Department - Inner class //Write only
    HouseWithBuildingDesignPattern.Builder = /** @class */ (function () {
        function class_1() {
            // Khởi tạo đối tượng house trong constructor của Builder
            this.house = new HouseWithBuildingDesignPattern();
        }
        class_1.prototype.setTopRoofColor = function (topRoofColor) {
            this.house.topRoofColor = topRoofColor;
            //Method chaining
            return this;
        };
        class_1.prototype.setWindowNumber = function (windowNumber) {
            this.house.windowNumber = windowNumber;
            return this;
        };
        class_1.prototype.setColor = function (color) {
            this.house.color = color;
            return this;
        };
        class_1.prototype.setMainDoorNumber = function (mainDoorNumber) {
            this.house.mainDoorNumber = mainDoorNumber;
            return this;
        };
        //Sign the contract method
        class_1.prototype.build = function () {
            return this.house;
        };
        return class_1;
    }());
    return HouseWithBuildingDesignPattern;
}());
exports.default = HouseWithBuildingDesignPattern;
