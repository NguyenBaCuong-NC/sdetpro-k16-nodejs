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
    const user = new Post(2, 22);
    const userId = user.userId;
    const id = user.id;
    const post = await requestHandler.getTargetPost(userId, id);
    const allPosts = await requestHandler.getAllPosts(userId);

    // Print target post content
    if (post === undefined) {
        console.log(`User with id ${userId} is not found!`);
    } else if (post._userId) {
        _printPostContent(post);
    } else {
        console.log(`The post with post id ${id} is not found!`);
    }

    // Print all posts content
    if (allPosts.length === 0) {
        console.log(`User with id ${userId} is not found!`);
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