const readline = require('readline-sync');

let inArr = [];
let lengthAraay = Number(readline.question('Please enter the length of array: '));
let oddNumberCount = 0;
let evenNumberCount = 0;
let oddArray = [];
let evenArray = [];

if (isNaN(lengthAraay) || lengthAraay <= 0 || !Number.isInteger(lengthAraay)) {
    console.log('Please enter a positive integer number');
} else {
    for (let index = 0; index < lengthAraay; index++) {
        let element = Number(readline.question('Please enter a elemen of array: '));
        if (isNaN(element)) {
            console.log('Please enter a number');
            index--;
        } else {
            inArr.push(element);
        }
    }
    console.log('The imported array is: ', inArr);

    for (let index = 0; index < inArr.length; index++) {
        const value = inArr[index];
        if (isOddNumber(value)) {
            oddNumberCount++;
            oddArray.push(value);
        } else {
            evenNumberCount++;
            evenArray.push(value);
        }
    }
}
console.log(`Odd numbers: ${oddNumberCount} number(s) ${printArray(oddArray)}`);
console.log(`Even numbers: ${evenNumberCount} number(s) ${printArray(evenArray)}`);

function isOddNumber(number) {
    return number % 2 === 1;
}
// Funtion: Print the empty array 
function printArray(array) {
    if (array.length === 0) {
        return '';
    } else {
        return `---> ${array}`;
    }
}