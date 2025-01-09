let inArr01 = [1, 12, 16, 28, 34];
let inArr02 = [1, 13, 16, 27, 99];
let expectedArr = merge2SortedArrInto1SortedArr (inArr01, inArr02);
console.log('Expected output: ', expectedArr);

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


