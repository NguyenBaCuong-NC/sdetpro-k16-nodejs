class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

let teo = new Person("Teo", 18);
console.log(teo.name);