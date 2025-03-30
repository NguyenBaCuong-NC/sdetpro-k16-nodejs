import HouseWithBuildingDesignPattern from "./HouseWithBuildingDesignPattern";

let builder = new HouseWithBuildingDesignPattern.Builder();
let house: HouseWithBuildingDesignPattern = builder
    .setTopRoofColor("Red")
    .setWindowNumber(10)
    .setColor("Blue")
    .setMainDoorNumber(1)
    .build();

console.log(house);