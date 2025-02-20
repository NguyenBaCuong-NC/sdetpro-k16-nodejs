const readline = require('readline-sync');
let givenStr = readline.question("Please input your sentence: ")
let individualWord = givenStr.replace(/\s+/g, ' ').replace(/[^a-z & ^0-9]/gi, "").split(" ");

console.log(individualWord);
let groupWWord = groupWordFromString(individualWord);
console.log(groupWWord);


function groupWordFromString(array) {
    let returnedObj = {};
    for (let index = 0; index < array.length; index++) {
        let currentWord = array[index];
        if (returnedObj[currentWord]) {
            returnedObj[currentWord]++;
        } else {
            returnedObj[currentWord] = 1;
        }
    }
    return returnedObj;
}




