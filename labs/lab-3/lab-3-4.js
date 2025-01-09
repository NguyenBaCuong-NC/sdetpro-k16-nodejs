let inArr01 = [1, 12, 16, 17, 18];
let inArr02 = [1, 13, 16, 27, 99, 100, 200];
let expectedArr = merge2SortedArrInto1SortedArr (inArr01, inArr02);
console.log('Expected Array: ', expectedArr);

function merge2SortedArrInto1SortedArr (Arr01, Arr02){
    let outArr = [];
    let i = 0;
    let j = 0;
    while (i< inArr01.length && j < inArr02.length) {
            if (inArr01[i] <= inArr02[j]) {
            outArr.push(inArr01[i]);
            i++;
            } else {
            outArr.push(inArr02[j]);
            j++;
            } 
        }   
   for (;i < inArr01.length; i++) {
        outArr.push(inArr01[i]);
   }
   for (;j < inArr02.length; j++) {
        outArr.push(inArr02[j]);
}
   
    
    return outArr;
}


