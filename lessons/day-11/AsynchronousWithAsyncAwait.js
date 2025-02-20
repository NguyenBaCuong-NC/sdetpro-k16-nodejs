/**
 * 1. Send request -> get response | Asynchronous
 * 2. process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */
const url = "https://jsonplaceholder.typicode.com/todos/1";

main();
async function main() {
    const response = await sendRequest(url);
    const statusCode = await processResponse(response);
    validateResponse(statusCode);
}

function sendRequest(url) {
    console.log(`1. Sending request to the endpoin ${url}...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ status: 200 });
        }, 2 * 1000);
    })

}

function processResponse(response) {
    console.log(`2. Processing response...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(response.status);
        }, 2 * 1000);
    })

}

function validateResponse(responseStatus) {
    console.log(`3. Validating response...`);
    if (responseStatus === 200) {
        console.log("PASSED");
    } else {
        console.error("FAILED");
    }
}
