const givenStr = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah?"
let individualWords = givenStr.replace(/,/gi, "").split(" ");
const groupWWords = groupWord(individualWords);
console.log(groupWWords);


function groupWord(array) {
    let wordMap = new Map();
    for (const word of array) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    }
    return wordMap;
}
