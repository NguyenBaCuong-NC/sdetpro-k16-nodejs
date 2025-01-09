const readline = require('readline-sync');
let hight = Number(readline.question('hight: '));
let weight = Number(readline.question('weight: '));

if(isNaN(hight) || isNaN(weight) || hight <= 0 || weight <= 0) {
    console.log('Please enter valid numbers');
} else {
    var bMI = (weight / (hight * hight));
    var toFixedBMI = bMI.toFixed(1);
    var isUnderW = false;
    var isOverW = false;
    console.log('BMI:', toFixedBMI);
    if (toFixedBMI < 18.5) {
        console.log('Underweight'); 
        isUnderW = true;
    } else if (toFixedBMI <= 24.9) {
        console.log('Normal weight');
    } else if (toFixedBMI <= 29.9) {
        console.log('Overweight');
        isOverW = true;
    } else {
        console.log('Obesity');
        isOverW = true; 
    } 
}
if (isUnderW){
    let increaseWeight = (18.5 - bMI) * (hight * hight);
    console.log('You should increase weight:', Math.ceil(increaseWeight*100)/100, 'kg');
}
if (isOverW){
    let decreaseWeight = (bMI - 24.9) * (hight * hight);
    console.log('You should decrease weight:', Math.ceil(decreaseWeight*100)/100, 'kg');
}