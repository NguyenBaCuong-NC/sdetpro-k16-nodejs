"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HouseWithBuildingDesignPattern_1 = require("./HouseWithBuildingDesignPattern");
var builder = new HouseWithBuildingDesignPattern_1.default.Builder();
var house = builder
    .setTopRoofColor("Red")
    .setWindowNumber(10)
    .setColor("Blue")
    .setMainDoorNumber(1)
    .build();
console.log(house);
