const readline = require('readline-sync');
const posts = "https://jsonplaceholder.typicode.com/posts";
const users = "https://jsonplaceholder.typicode.com/users";

let isStillPlaying = true;

main();
async function main() {
    while (isStillPlaying) {
        printManu();
        let userOption = Number(readline.question("Enter user Option: "));
        switch (userOption) {
            case 0:
                isStillPlaying = false;
                console.log("See you again!");
                break;
            case 1:
                await printAllPostFromUser();
                break;
            case 2:
                await printTagertPostContent();
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

async function printAllPostFromUser() {
    const userId = Number(readline.question('Enter user id: '));
    const allPosts = await getAllPostFromUser(userId);
    console.log(allPosts);
}

async function printTagertPostContent() {
    const userId = Number(readline.question('Enter user id: '));
    let allPosts = await getAllPostFromUser(userId);
    const targetPostId = Number(readline.question('Enter user post id: '));
    const targetPostContent = filterTagertPostContent(allPosts, targetPostId);
    if (!targetPostContent) {
        console.log(`The post with post id ${targetPostId} is not found!`);
    } else {
        console.log(targetPostContent);
    }
}

async function getAllPostFromUser(userId) {
    const response = await fetch(users);
    const allUsers = await response.json();
    const hasUser = allUsers.find(function (user) {
        return user.id === userId;
    });
    if (hasUser) {
        const response = await fetch(posts);
        const allPosts = await response.json();
        return allPosts.filter(function (post) {
            return post.userId === userId;
        });
    }
    else {
        console.log(`User with id ${userId} is not found!`);
        process.exit(1);
    }
}

function filterTagertPostContent(allPosts, targetPostId) {
    const targetPost = allPosts.find(function (post) {
        return post.id === targetPostId;
    })
    return targetPost;
}

