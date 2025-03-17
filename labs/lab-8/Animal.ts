export default class Animal {

    protected speed: number;
    protected name: string;
    protected maxSpeed: number;

    constructor(maxSpeed: number, name: string) {
        this.speed = this.getRandomSpeed(maxSpeed);
        this.name = name;
    }

    getSpeed() {
        return this.speed;
    }

    getName() {
        return this.name;
    }

    getRandomSpeed(maxSpeed: number) {
        let randomSpeed = Math.floor(Math.random() * maxSpeed + 1);
        if (randomSpeed <= 0) {
            randomSpeed = 1;
        }
        return randomSpeed;
    }

}