const readline = require('readline-sync');
const posts = "https://jsonplaceholder.typicode.com/posts";
let isStillPlaying = true;

main();
async function main() {
    // const response = await fetch(posts);
    // const arrayOfPosts = await getPosts(response);
    while (isStillPlaying) {
        printManu();
        let userOption = Number(readline.question("Enter user Option: "));
        switch (userOption) {
            case 0:
                isStillPlaying = false;
                console.log("See you again!");
                break;
            case 1:
                await findPostContent();
                break;
            case 2:
                await findAllRelatedPosts();
                break;
            default:
                console.log("Wrong option");
                break;
        }
    }
}


function printManu() {
    console.log(`
    === MENU ===
    0. Exit
    1. Get post content
    2. Print all related posts
    `);
}


function getPosts(response) {
    return response.json();
}


async function findPostContent() {
    let userID = Number(readline.question("Enter user ID: "));
    let userPostID = Number(readline.question("Enter user post ID: "));
    const response = await fetch(posts);
    const arrayOfPosts = await getPosts(response);
    let notFoundUserID = true;
    let notFoundPostID = true;
    for (const post of arrayOfPosts) {
        if (userID === post.userId) {
            notFoundUserID = false;
            if (userPostID === post.id) {
                console.log(post);
                notFoundPostID = false;
            }
        }
    }
    if (notFoundPostID) {
        console.log("Post ID not found");
    }
    if (notFoundUserID) {
        console.log("User ID not found");
    }
}

async function findAllRelatedPosts() {
    let userID = Number(readline.question("Enter user ID: "));
    let notFound = true;
    const response = await fetch(posts);
    const arrayOfPosts = await getPosts(response);
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
