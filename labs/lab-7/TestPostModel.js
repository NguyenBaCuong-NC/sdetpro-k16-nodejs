// TestPostModel.js
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab7();

// Function Declaration
async function lab7() {
    // Given params
    const userId = 1;
    const postId = 5;
    const POST_ENDPOINT = new Post("https://jsonplaceholder.typicode.com/posts");
    const USER_ENDPOINT = new Post("https://jsonplaceholder.typicode.com/users");
    const postEndpoint = POST_ENDPOINT.endpoint;
    const userEndpoint = USER_ENDPOINT.endpoint;

    // Create RequestHandler object
    let requestHandler = new RequestHandler();
    // // const post = ...
    const post = await requestHandler.printTargetPost(userId, postId, postEndpoint);

    // // const allPost = ...
    const allPosts = await requestHandler.printAllPosts(userId, postEndpoint, userEndpoint);

}