class RequestHandler {

    async printTargetPost(userId, postId, POST_ENDPOINT, USER_ENDPOINT) {
        // Construct the returned data as a Post data model from class Post
        let allPosts = await this._getAllPosts(userId, POST_ENDPOINT, USER_ENDPOINT);
        if (allPosts === undefined) {
            return undefined;
        } else {
            let targetPostContent = allPosts.find(function (post) {
                return post.id === postId;
            })
            if (targetPostContent) {
                return targetPostContent;
            } else {
                return [];
            };
        }
    }

    async printAllPosts(userId, POST_ENDPOINT, USER_ENDPOINT) {
        // Construct the returned data as a [ Post data model ] from class Post
        return await this._getAllPosts(userId, POST_ENDPOINT, USER_ENDPOINT);

    }

    async _getAllPosts(userId, POST_ENDPOINT, USER_ENDPOINT) {
        const response = await fetch(USER_ENDPOINT);
        const allUsers = await response.json();
        let hasUserId = allUsers.find(function (users) {
            return users.id === userId;
        })
        if (hasUserId) {
            const response = await fetch(POST_ENDPOINT);
            const allPosts = await response.json();
            return allPosts.filter(function (post) {
                return post.userId === userId;
            })
        }
    }
}

module.exports = RequestHandler;