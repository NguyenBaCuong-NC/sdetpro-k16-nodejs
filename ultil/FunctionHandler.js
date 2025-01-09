function sortMinToMax (inArr){
    let number;
    for (let i = 0; i < inArr.length-1; i++) {
        for (let j = i + 1; j < inArr.length; j++) {
            if (inArr[i] > inArr[j]) {
                number = inArr[i];
                inArr[i] = inArr[j];
                inArr[j] = number;
            }
        }
    }
    return inArr;
}
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

function merge2SortedArrInto1SortedArr (Arr01, Arr02){
    let outArr = [];
    for (let i = 0; i < inArr01.length;) {
        for (let j = 0; j < inArr02.length;) {
            if (inArr01[i] <= inArr02[j]) {
            outArr.push(inArr01[i]);
            i++;
            } else {
            outArr.push(inArr02[j]);
            j++;
            } 
        }   
    }
    return outArr;
}
module.exports = {sortMinToMax, countEvenNumber, countOddNumber, merge2SortedArrInto1SortedArr};
