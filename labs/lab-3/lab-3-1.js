let inArr = [1, 2, 3, 4, 5];
let evenNumbers = countEvenNumber (inArr);
console.log( `Even numbers: ${evenNumbers}`);
let oddNumbers = countOddNumber (inArr);
console.log( `Odd numbers: ${oddNumbers}`);

function countEvenNumber (inArr){
    let countEvenN = 0;
    for (let index = 0; index < inArr.length; index++) {
        if (inArr[index] % 2 === 0) {
        countEvenN++;
        }
    }
    return countEvenN;
}
function countOddNumber (inArr){
    let countOddN = 0;
    for (let index = 0; index < inArr.length; index++) {
        if (inArr[index] % 2 === 1) {
        countOddN++;
        }
    }
    return countOddN;
}

