class Person {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

let teo = new Person("Teo", 18);
let name1 = teo.name;
console.log(name1);

teo.name = "Ti";
let name2 = teo.name;
console.log(name2);


