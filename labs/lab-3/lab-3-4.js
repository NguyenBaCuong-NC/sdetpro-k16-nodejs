let inArray01 = [1, 12, 16, 17, 18];
let inArray02 = [1, 13, 16, 27, 99, 100, 200];
let expectedArray = merge2SortedArrayInto1SortedArray (inArray01, inArray02);
console.log('Expected Array: ', expectedArray);

function merge2SortedArrayInto1SortedArray (Array01, Array02){
    let outArray = [];
    let i = 0;
    let j = 0;
    while (i< inArray01.length && j < inArray02.length) {
            if (inArray01[i] <= inArray02[j]) {
            outArray.push(inArray01[i]);
            i++;
            } else {
            outArray.push(inArray02[j]);
            j++;
            } 
        }   
   for (;i < inArray01.length; i++) {
        outArray.push(inArray01[i]);
   }
   for (;j < inArray02.length; j++) {
        outArray.push(inArray02[j]);
}  
    return outArray;
    
}


