export default class Person {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    //getters
    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

}

