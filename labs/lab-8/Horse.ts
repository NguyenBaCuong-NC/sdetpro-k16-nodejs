import Animal from './Animal';

export default class Horse extends Animal {

    private randomSpeed: number = this.getRandomSpeed();

    constructor() {
        super(1, 'Horse');
        this.speed = this.randomSpeed;

    }

    getRandomSpeed() {
        let randomSpeed = Math.floor(Math.random() * 100 + 1 - 25);
        if (randomSpeed <= 0) {
            randomSpeed = 1;
        }
        return randomSpeed;
    }

}