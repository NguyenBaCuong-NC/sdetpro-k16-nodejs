let inArr = [1, 2, 3, 4, 5];
let maximum = findMaximum(inArr);
console.log(`Maximum: ${maximum}`);
let minimum = findMinimum(inArr);
console.log(`Minimum: ${minimum}`);

function findMaximum(inArr) {
    let maxNumber = inArr[0];
    for (let index = 1; index < inArr.length; index++) {
        if (inArr[index] > maxNumber) {
            maxNumber = inArr[index];
        }
    }
    return maxNumber;
}

function findMinimum(inArr) {
    let minNumber = inArr[0]
    for (let index = 1; index < inArr.length; index++) {
        if (inArr[index] < minNumber) {
            minNumber = inArr[index];
        }
    }
    return minNumber;
}

