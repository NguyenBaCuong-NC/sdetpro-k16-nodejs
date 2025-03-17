import Aminal from './Animal';
import AnimalController from './AnimalController';
import Horse from './Horse';
import Tiger from './Tiger';
import Dog from './Dog';

const dog = new Dog();
const horse = new Horse();
const tiger = new Tiger();
const animalWin = AnimalController.getAnimalWin([dog, horse, tiger]);

console.log(`${dog.getName()}: ${dog.getSpeed()}`);
console.log(`${tiger.getName()}: ${tiger.getSpeed()}`);
console.log(`${horse.getName()}: ${horse.getSpeed()}`);

console.log(`The ${animalWin} is winner for racing!`);
