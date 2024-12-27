const readline = require('readline-sync');
let hight = Number(readline.question('hight: '));
let weight = Number(readline.question('weight: '));

if(isNaN(hight) || isNaN(weight) || hight <= 0 || weight <= 0) {
    console.log('Please enter valid numbers');
} else {
    let bMI = (weight / (hight * hight));
    let toFixedBMI = bMI.toFixed(1);
    let increaseWeight = (18.5 - bMI) * (hight * hight);
    let decreaseWeight = (bMI - 24.9) * (hight * hight);
    console.log('BMI:', toFixedBMI);

    if (toFixedBMI < 18.5) {
        console.log('Underweight'); 
        console.log('Increase Weight:', Math.ceil(increaseWeight*100)/100, 'kg');
    } else if (toFixedBMI <= 24.9) {
        console.log('Normal weight');
    } else if (toFixedBMI <= 29.9) {
        console.log('Overweight');
        console.log('Decrease Weight:', Math.ceil(decreaseWeight*100)/100, 'kg');
    } else {
        console.log('Obesity');
        console.log('Decrease Weight:', Math.ceil(decreaseWeight*100)/100, 'kg');
    } 
}