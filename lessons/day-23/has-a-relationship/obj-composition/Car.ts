//Obj Composition

import ElectricEngine from "./ElectricEngine";
import GasEngine from "./GasEngine";
import Engine from "./Engine";

export default class Car {

    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    //Controller
    start(): void {
        this.engine.start();
    }

    move(): void {
        console.log("Car moving ...");

    }

    stop(): void {
        console.log("Car stopped");

    }

}

//Obj Composition 
let electricCar = new Car(new ElectricEngine());
electricCar.start();

let gasCar = new Car(new GasEngine());
gasCar.start();
