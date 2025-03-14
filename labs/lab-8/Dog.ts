import Animal from './Animal';

export default class Dog extends Animal {

    private randomSpeed: number = this.getRandomSpeed();

    constructor() {
        super(1, "Dog");
        this.speed = this.randomSpeed;
    }

    getRandomSpeed() {
        let randomSpeed = Math.floor(Math.random() * 100 + 1 - 40);
        if (randomSpeed <= 0) {
            randomSpeed = 1;
        }
        return randomSpeed;
    }

}