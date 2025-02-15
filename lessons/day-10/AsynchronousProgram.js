console.log("1. Chay den nha Teo");
setTimeout(callbackFunction.bind(undefined, "Teo"), 2 * 1000); //callbackFunction("Teo") => bug
console.log("3. Chay toi quan cafe");

function callbackFunction(name) {
    console.log(`2. ${name} oi uong cafe khong`);
}