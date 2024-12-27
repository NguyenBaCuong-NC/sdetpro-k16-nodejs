const readline = require('readline-sync');
let inputNumber = Number(readline.question('inputNumber: '));

if (isNaN(inputNumber) || !Number.isInteger(inputNumber)) {
    console.log('Please enter a integer number');
} else {

if (inputNumber % 2 === 0) {
    console.log('Even Number'); 
} else {
    console.log('Odd Number');
}
}