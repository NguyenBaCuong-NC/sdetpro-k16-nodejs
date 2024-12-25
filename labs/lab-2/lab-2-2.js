const readline = require('readline-sync');
let inputNumber = readline.question('inputNumber: ');
if (inputNumber % 2 == 0) {
    console.log('Even Number'); 
} else {
    console.log('Odd Number');
}