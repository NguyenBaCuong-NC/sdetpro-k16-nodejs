const readline = require('readline-sync');

let inArr = [];
let lengthAraay = Number(readline.question('Please enter the length of array: '));


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

    var minValue = inArr[0];
    var maxValue = inArr[0];

    for (let index = 0; index < inArr.length; index++) {
        const value = inArr[index];
        if (value < minValue) {
            minValue = value;
        } else if (value > maxValue) {
            maxValue = value;
        }
    }
}
if (minValue === maxValue) {
    console.log(`There is no min/max value, all values are same: ${minValue}`);
} else {
    console.log(`Min value: ${minValue} and Mmax value: ${maxValue}`);
}

