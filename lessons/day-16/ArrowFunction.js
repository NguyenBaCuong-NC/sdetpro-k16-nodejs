// Type: Function Declaration
function add(a, b) {
    return a + b;
}

// Type: Function Expression
const add1 = function (a, b) {
    return a + b;
}
// Type: Arrow Function
const arrowFunction1 = (a, b) => a + b;

// Type: Arrow Function with one parameter
const arrowFunction2 = a => a;

// Type: Arrow Function with no parameter
const arrowFunction3 = () => 1;

// Type: Arrow Function with multiple statements
const arrowFunction4 = (a, b) => {
    const c = a + b;
    return c;
}

// Type: Arrow Function with object return
const arrowFunction5 = (a, b) => ({ a, b });

// Lexical binding: lỗi this.name ===  undefined => chuyển sang arrow function ko bị lỗi
const person = {
    name: 'John',
    age: 30,
    sayHello: function () {
        setTimeout(function () {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }, 2 * 1000);
    }
}
person.sayHello();

const array = [1, 2, 3, 4, 5];
const oddNumbers = array.filter(num => num % 2 === 0);
console.log(oddNumbers);


