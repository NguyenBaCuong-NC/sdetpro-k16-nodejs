let inArr = [12, 34, 1, 16, 28];
let outArr = sortMinToMax (inArr);
console.log(`Sorted Array: ${outArr}`);

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
module.exports = {sortMinToMax};


