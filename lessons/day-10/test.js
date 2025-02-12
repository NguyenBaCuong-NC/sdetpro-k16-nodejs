function findConsecutiveWhitespaces(inputString) {
    const regex = /\s{2,}/g;
    const matches = inputString.match(regex);
    return matches || [];
}

// Example usage
const text = "Hello   World     Test";
const consecutiveSpaces = findConsecutiveWhitespaces(text);
console.log('Found consecutive spaces:', consecutiveSpaces);

const str = "Hello    World   From    JS";
const result = str.replace(/\s+/g, ' ');
console.log(result);
