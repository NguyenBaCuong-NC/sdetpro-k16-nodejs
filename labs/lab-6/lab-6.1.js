const readline = require('readline-sync');
const posts = "https://jsonplaceholder.typicode.com/posts";
let isStillPlaying = true;
fetch(posts)
    .then(getPosts)
    .then(function (arrayOfPosts) {
        while (isStillPlaying) {
            printManu();
            let userOption = getUserOption();
            switch (userOption) {
                case 0:
                    isStillPlaying = false;
                    console.log("See you again!");
                    break;
                case 1:
                    findPostContent(arrayOfPosts);
                    break;
                case 2:
                    findAllRelatedPosts(arrayOfPosts);
                    break;
                default:
                    console.log("Wrong option");
                    break;
            }
        }
    })


function printManu() {
    console.log(`
    === MENU ===
    0. Exit
    1. Get post content
    2. Print all related posts
    `);
}

function getUserOption() {
    return Number(readline.question("Enter user Option: "));
}

function getUserID() {
    return Number(readline.question("Enter user ID: "));
}

function getPostID() {
    return Number(readline.question("Enter user post ID: "));
}


function getPosts(response) {
    return response.json();
}

function findPostContent(arrayOfPosts) {
    let userID = getUserID();
    let userPostID = getPostID();
    let notFound = true;
    for (const post of arrayOfPosts) {
        if (userID === post.userId && userPostID === post.id) {
            console.log(post);
            notFound = false;
        }
    }
    if (notFound) {
        console.log("Post not found");
    }
}

function findAllRelatedPosts(arrayOfPosts) {
    let userID = getUserID();
    let notFound = true;
    for (const post of arrayOfPosts) {
        if (userID === post.userId) {
            console.log(post);
            notFound = false;
        }
    }
    if (notFound) {
        console.log("Post not found");
    }
}

