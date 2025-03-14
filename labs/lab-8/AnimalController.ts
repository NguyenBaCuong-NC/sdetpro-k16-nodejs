import Animal from './Animal';

export default class AnimalController {

    static getAnimalMaxSpeed(animalList: Animal[]): string[] {
        let maxSpeed = animalList[0].getSpeed();
        let animalMaxSpeed: string[] = [];

        for (let index = 1; index < animalList.length; index++) {
            if (animalList[index].getSpeed() > maxSpeed) {
                maxSpeed = animalList[index].getSpeed();
            }
        }

        for (const animal of animalList) {
            if (animal.getSpeed() === maxSpeed) {
                let name = animal.getName();
                animalMaxSpeed.push(name);
            }
        }
        return animalMaxSpeed;
    }

}