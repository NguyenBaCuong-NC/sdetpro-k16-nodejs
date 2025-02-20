class RequestHandler {

    async printTargetPost(userId, postId, POST_ENDPOINT) {
        // Construct the returned data as a Post data model from class Post
        let requestHandler = new RequestHandler();
        let allPosts = await requestHandler._getAllPosts(userId, POST_ENDPOINT);
        let targetPostContent = allPosts.find(function (post) {
            return post.id === postId;
        })
        if (!targetPostContent) {
            console.log(`The post with post id ${postId} is not found!`);
        } else {
            console.log(targetPostContent);
        }
    }

    async printAllPosts(userId, POST_ENDPOINT, USER_ENDPOINT) {
        // Construct the returned data as a [ Post data model ] from class Post
        const response = await fetch(USER_ENDPOINT);
        const allUsers = await response.json();
        let hasUserId = allUsers.find(function (users) {
            return users.id === userId;
        })
        if (hasUserId) {
            let requestHandler = new RequestHandler();
            let allPosts = await requestHandler._getAllPosts(userId, POST_ENDPOINT);
            console.log(allPosts);
        } else {
            console.log(`User with id ${userId} is not found!`);
        }

    }

    async _getAllPosts(userId, POST_ENDPOINT) {
        const response = await fetch(POST_ENDPOINT);
        const allPosts = await response.json();
        return allPosts.filter(function (post) {
            return post.userId === userId;
        })
    }
}

module.exports = RequestHandler;