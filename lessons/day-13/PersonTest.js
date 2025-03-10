class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

let teo = new Person("Teo", 18);
let name1 = teo.name;
console.log(name1);

teo.name = "Ti";
let name2 = teo.name;
console.log(name2);


