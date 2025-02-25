// TestPostModel.js
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab7();

// Function Declaration
async function lab7() {
    // Given params
    const user = new Post(1, 21);
    const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
    const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
    const userId = user.userId;
    const id = user.id;

    // Create RequestHandler object
    let requestHandler = new RequestHandler();
    // // const post = ...
    const post = await requestHandler.printTargetPost(userId, id, POST_ENDPOINT, USER_ENDPOINT);
    if (!post) {
        console.log(`User with id ${userId} is not found!`);
    } else if (post.length === 0) {
        console.log(`The post with post id ${id} is not found!`);
    } else {
        console.log(post);
    }
    // // const allPost = ...
    const allPosts = await requestHandler.printAllPosts(userId, POST_ENDPOINT, USER_ENDPOINT);
    if (allPosts) {
        console.log(allPosts);
    } else {
        console.log(`User with id ${userId} is not found!`);
    }

}