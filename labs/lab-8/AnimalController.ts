import Animal from './Animal';

export default class AnimalController {

    static getAnimalWin(animalList: Animal[]): Animal[] {
        let winer = animalList[0];
        let animalWin: Animal[] = [];
        for (const animal of animalList) {
            if (animal.getSpeed() > winer.getSpeed()) {
                winer = animal;
            }
        }
        for (const animal of animalList) {
            if (animal.getSpeed() === winer.getSpeed()) {
                animalWin.push(animal);
            }
        }
        return animalWin;
    }

}