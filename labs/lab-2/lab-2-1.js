const readline = require('readline-sync');
let hight = Number(readline.question('hight: '));
let weight = Number(readline.question('weight: '));

if(isNaN(hight) || isNaN(weight) || hight <= 0 || weight <= 0) {
    console.log('Please enter valid positive numbers');
} else {
    let bMI = (weight / (hight * hight)).toFixed(1);
    console.log('BMI:', bMI);

    if (bMI < 18.5) {
        console.log('Underweight'); 
    } else if (bMI <= 24.9) {
        console.log('Normal weight');
    } else if (bMI <= 29.9) {
        console.log('Overweight');
    } else {
        console.log('Obesity');
    }
}