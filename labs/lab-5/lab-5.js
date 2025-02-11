const readline = require('readline-sync');
let givenStr = readline.question("Please input your sentence: ")
let individualWord = givenStr.replace(/[^a-z & ^0-9 & ^" "]/gi, "").split(" ");
console.log(individualWord);
groupWord(individualWord);


function groupWord(array) {
    for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
        let firstWord = array[firstIndex];
        let countWord = 1;
        let delIndex = -1;
        for (let secondIndex = 0; secondIndex < array.length; secondIndex++) {
            if (secondIndex !== firstIndex) {
                let secondWord = array[secondIndex];
                if (firstWord === secondWord) {
                    if (firstIndex > secondIndex) {
                        delIndex = array.length;
                    } else {
                        countWord++;
                    }
                }
            }
        }
        if (firstIndex > delIndex) {
            console.log(`${firstWord}: ${countWord}`);
        } else {
            continue;
        }
    }
}



