let inArray = [12, 34, 1, 16, 28];
let outArray = sortMinToMax (inArray);
console.log('Sorted Array: ', outArray);

function sortMinToMax (inArray){
let number;
for (let i = 0; i < inArray.length-1; i++) {
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
module.exports = {sortMinToMax};


