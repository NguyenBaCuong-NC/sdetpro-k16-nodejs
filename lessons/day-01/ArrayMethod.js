// let array = [1, 2, 3, 4, 5];
// array.splice(0, 1);
// console.log(array);
// array.slice (2);
// // console.log(array);
// console.log(array.slice (2));
// console.log(array.slice (-4));
// let returnValues = array.map(myRule);
// console.log(returnValues);
// console.log(array);

// function myRule(value, index, array) {
//     return value * 2;
// }

// let name = array.forEach(addName);

// function addName (value, index, array) {
//     return value;
// }
// console.log(name);


// const fruits = ["apple", "banana", "cherry", "date"];

// fruits.forEach(function(fruit, index, arr) {
//     console.log(index);
// });
let array = [100, 19, 22];
array.sort(function (num1, num2) { return num1 - num2; });
console.log(array);
