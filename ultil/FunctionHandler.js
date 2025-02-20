function sortMinToMax(inArray) {
    let number;
    for (let i = 0; i < inArray.length - 1; i++) {
        for (let j = i + 1; j < inArray.length; j++) {
            if (inArray[i] > inArray[j]) {
                number = inArray[i];
                inArray[i] = inArray[j];
                inArray[j] = number;
            }
        }
    }
    return inArray;
}


function countEvenNumber(inArray) {
    let countEvenN = 0;
    for (let index = 0; index < inArray.length; index++) {
        if (inArray[index] % 2 === 0) {
            countEvenN++;
        }
    }
    return countEvenN;
}


function countOddNumber(inArray) {
    let countOddN = 0;
    for (let index = 0; index < inArray.length; index++) {
        if (inArray[index] % 2 === 1) {
            countOddN++;
        }
    }
    return countOddN;
}


function merge2SortedArrayInto1SortedArray(inArray01, inArray02) {
    let outArray = [];
    let i = 0;
    let j = 0;
    while (i < inArray01.length && j < inArray02.length) {
        if (inArray01[i] <= inArray02[j]) {
            outArray.push(inArray01[i]);
            i++;
        } else {
            outArray.push(inArray02[j]);
            j++;
        }
    }
    for (; i < inArray01.length; i++) {
        outArray.push(inArray01[i]);
    }
    for (; j < inArray02.length; j++) {
        outArray.push(inArray02[j]);
    }
    return outArray;
}


module.exports = { sortMinToMax, countEvenNumber, countOddNumber, merge2SortedArrayInto1SortedArray };
