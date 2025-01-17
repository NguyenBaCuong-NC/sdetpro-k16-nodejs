let inArray = [12, 34, 1, 16, 28];
sortMinToMax(inArray);
console.log('Sorted Array: ', inArray);

function sortMinToMax(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let number = array[i];
                array[i] = array[j];
                array[j] = number;
            }
        }
    }
}

module.exports = { sortMinToMax };


