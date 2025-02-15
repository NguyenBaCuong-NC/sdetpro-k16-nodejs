/**
 * 1. Send request -> get response | Asynchronous
 * 2. process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */
const url = "https://jsonplaceholder.typicode.com/todos/1";

sendRepuest(url, function () {
    processResponse(function () {
        validateResponse();
    });
});

function sendRepuest(url, callbackFn) {
    console.log(`1. Sending request to the endpoin ${url}...`);
    setTimeout(function () {
        callbackFn(console.log(123));
    }, 2 * 1000);
}

function processResponse(callbackFn) {
    console.log(`2. Processing response...`);
    setTimeout(function () {
        callbackFn(console.log(456));
    }, 2 * 1000);

}

function validateResponse(responseStatus) {
    console.log(`3. Validating response...`);
    if (responseStatus === 200) {
        console.log("PASSED");
    } else {
        console.error("FAILED");
    }
}
