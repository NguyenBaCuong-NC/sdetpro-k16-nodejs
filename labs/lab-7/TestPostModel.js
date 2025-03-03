// TestPostModel.js
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab7();

// Function Declaration
async function lab7() {
    // Given params
    const user = new Post(1, 1);
    const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
    const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
    const userId = user.userId;
    const id = user.id;

    // Create RequestHandler object
    let requestHandler = new RequestHandler();
    // // const post = ...
    const post = await requestHandler.printTargetPost(userId, id, POST_ENDPOINT, USER_ENDPOINT);

    console.log(post);

    if (!post) {
        console.log(`User with id ${userId} is not found!`);
    } else if (post.userId) {
        console.log(post);
    } else {
        console.log(`The post with post id ${id} is not found!`);
    }
    // // const allPost = ...
    const allPosts = await requestHandler.printAllPosts(userId, POST_ENDPOINT, USER_ENDPOINT);
    if (allPosts) {
        console.log(allPosts);
    } else {
        console.log(`User with id ${userId} is not found!`);
    }

}