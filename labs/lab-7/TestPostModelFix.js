// TestPostModel.js
const Post = require("./Post");
const RequestHandlerFix = require("./RequestHandlerFix");

const baseUrl = "https://jsonplaceholder.typicode.com";

// Excution
lab7();

// Function Declaration
async function lab7() {
    //Init controllers
    const requestHandler = new RequestHandlerFix(baseUrl);
    const user = new Post(1, 3);
    const userId = user.userId;
    const id = user.id;
    const post = await requestHandler.getTargetPost(userId, id);
    const allPosts = await requestHandler.getAllPosts(userId);

    // Print target post content
    if (post === undefined) {
        console.log(`There is no post for user with id: ${userId}!`);
    } else if (post.userId) {
        _printPostContent(post);
    } else {
        console.log(`The post with post id ${id} does not exist for the user with id ${userId}!`);
    }

    // Print all posts content
    if (allPosts.length === 0) {
        console.log(`There is no post for user with id: ${userId}!`);
    } else {
        console.log('All posts content: ');
        for (const post of allPosts) {
            _printPostContent(post);
        }
    }
}

function _printPostContent(post) {
    const { userId, id, title, body } = post;
    console.log(`ID: ${id}`);
    console.log(`\tuserId: ${userId}`);
    console.log(`\tid: ${id}`);
    console.log(`\ttitle: ${title}`);
    console.log(`\tbody: ${body}\n`);

}