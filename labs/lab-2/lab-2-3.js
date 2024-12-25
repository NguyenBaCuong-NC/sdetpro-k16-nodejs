const readline = require('readline-sync');
let hight = readline.question('hight: ');
let weight = readline.question('weight: ');

let bMI = (weight / (hight * hight));
let toFixedBMI = bMI.toFixed(1);
let increaseWeight = (18.5 - bMI) * (hight * hight);
let decreaseWeight = (bMI - 24.9) * (hight * hight);
console.log(toFixedBMI);

if (toFixedBMI < 18.5) {
    console.log('Underweight'); 
    console.log('Increase Weight: ', Math.ceil(increaseWeight*100)/100);
} else if (toFixedBMI <= 24.9) {
    console.log('Normal weight');
} else if (toFixedBMI <= 29.9) {
    console.log('Overweight');
    console.log('Decrease Weight: ', Math.ceil(decreaseWeight*100)/100);
} else {
    console.log('Obesity');
    console.log('Decrease Weight: ', Math.ceil(decreaseWeight*100)/100);
} 