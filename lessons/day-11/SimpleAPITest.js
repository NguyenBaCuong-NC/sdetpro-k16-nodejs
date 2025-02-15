const todo1Endppoint = "https://jsonplaceholder.typicode.com/todos/1";

fetch(todo1Endppoint)
    .then(getTodo)
    .then(validateResponse)
    .then(function () {
        console.log("Done");
    })

function getTodo(response) {
    return response.json();
}

function validateResponse(todo) {
    console.log(todo);
    if (todo.complete) {
        console.log("Task Completed");
    } else {
        console.log("Task is in progress");
    }
}