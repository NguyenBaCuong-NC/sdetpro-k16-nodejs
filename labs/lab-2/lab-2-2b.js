const readline = require('readline-sync');
let inputNumber = Number(readline.question('inputNumber: '));
let isEvenNumber_ = isEvenNumber (inputNumber);
console.log(`Is ${inputNumber} even number: ${isEvenNumber_}`);


function isEvenNumber (inputNumber) {
    return inputNumber % 2 === 0;
}
