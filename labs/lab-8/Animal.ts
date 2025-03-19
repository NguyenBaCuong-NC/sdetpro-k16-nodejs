export default class Animal {

    protected speed: number;
    protected name: string;
    protected maxSpeed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed + 1);
    }

    public getSpeed() {
        return this.speed;
    }

    public getName() {
        return this.name;
    }

}