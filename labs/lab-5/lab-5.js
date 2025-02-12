const readline = require('readline-sync');
let givenStr = readline.question("Please input your sentence: ")
let individualWord = givenStr.replace(/\s+/g, ' ').replace(/[^a-z & ^0-9]/gi, "").split(" ");

console.log(individualWord);
let groupWWords = groupWord(individualWord);
console.log(groupWWords);


function groupWord(array) {
    let obj = {};
    for (let index = 0; index < array.length; index++) {
        let currentWord = array[index];
        if (obj[currentWord] === undefined) {
            obj[currentWord] = 1;
        } else {
            obj[currentWord]++;
        }
    }
    return obj;
}




