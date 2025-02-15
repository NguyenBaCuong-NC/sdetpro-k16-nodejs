const readline = require('readline-sync');
const posts = "https://jsonplaceholder.typicode.com/posts";

fetch(posts)
    .then(getTodo)
    .then(findPostContent)

function getTodo(response) {
    return response.json();
}

function findPostContent(array) {
    let userID = getUserID();
    let notFound = true;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (userID === element.userId) {
            console.log(element);
            notFound = false;
        }
    }
    if (notFound) {
        console.log("Post not found");
    }
}

function getUserID() {
    return Number(readline.question("Enter user ID: "));
}

function getPostID() {
    return Number(readline.question("Enter user post ID: "));
}