console.log("1. Chay den nha Teo");
waitForResponse()
    .then(goToTheCafeShop);

function goToTheCafeShop() {
    console.log("3. Chay toi quan cafe");
}

// Wrap an asynchonous function to a Promise
function waitForResponse() {
    return new Promise(wrapper);
}

function wrapper(resolve, reject) {
    setTimeout(function () {
        console.log(`2. Teo oi uong cafe khong`);
        resolve();
    }, 2 * 1000);
}