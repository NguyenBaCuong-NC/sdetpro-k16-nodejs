import Aminal from './Animal';
import AnimalController from './AnimalController';
import Horse from './Horse';
import Tiger from './Tiger';
import Dog from './Dog';

const dog = new Dog();
const horse = new Horse();
const tiger = new Tiger();
const animalWin = AnimalController.getAnimalWin([dog, horse, tiger]);
const animalWinName = animalWin.map(obj => obj.getName());
const animalWinSpeed = animalWin[0].getSpeed();

console.log(`${dog.getName()}: ${dog.getSpeed()}`);
console.log(`${horse.getName()}: ${horse.getSpeed()}`);
console.log(`${tiger.getName()}: ${tiger.getSpeed()}`);

console.log(`Winer is: ${animalWinName.join(', ')}, with speed: ${animalWinSpeed} km/h!`);
