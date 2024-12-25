const readline = require('readline-sync');
let hight = readline.question('hight: ');
let weight = readline.question('weight: ');

let bMI = (weight / (hight * hight)).toFixed(1);
console.log(bMI);

if (bMI < 18.5) {
    console.log('Underweight'); 
} else if (bMI <= 24.9) {
    console.log('Normal weight');
} else if (bMI <= 29.9) {
    console.log('Overweight');
} else {
    console.log('Obesity');
}