export default class Animal {

    protected speed: number;
    protected name: string;

    constructor(speed: number, name: string) {
        this.speed = speed;
        this.name = name;
    }

    getSpeed() {
        return this.speed;
    }

    getName() {
        return this.name;
    }

}