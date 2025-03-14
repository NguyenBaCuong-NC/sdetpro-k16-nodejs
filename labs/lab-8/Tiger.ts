import Animal from './Animal';

export default class Tiger extends Animal {

    private randomSpeed: number = this.getRandomSpeed();

    constructor() {
        super(1, 'Tiger');
        this.speed = this.randomSpeed;
    }

    getRandomSpeed() {
        return Math.floor(Math.random() * 100 + 1);
    }

}