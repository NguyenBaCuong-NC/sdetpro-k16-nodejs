let array = [12, 34, 1, 16, 28];
let unsortedPosition = array.length - 1;

while (unsortedPosition > 0) {
    for (let index = 0; index < unsortedPosition; index++) {
        const leftValue = array[index];
        const rightValue = array[index + 1];
        if (leftValue > rightValue) {
            swap(array, index);
        }

    }
    unsortedPosition--;
}
console.log('Sorted Array: ', array);

function swap(array, index) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
}



