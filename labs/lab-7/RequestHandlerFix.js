const Post = require('./Post');

class RequestHandlerFix {

    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    async getTargetPost(targetUserId, postId) {
        // Construct the returned data as a Post data model from class Post
        let allPosts = await this._getAllPosts(targetUserId);
        if (allPosts.length === 0) {
            return undefined;
        } else {
            let targetPostContent = allPosts.find(function (post) {
                return post.id === postId;
            })
            if (targetPostContent) {
                const { userId, id, title, body } = targetPostContent;
                return new Post(userId, id, title, body);
            } else {
                return {};
            };
        }
    }

    async getAllPosts(targetUserId) {
        const allPost = [];
        const targetUserPost = await this._getAllPosts(targetUserId);
        if (targetUserPost) {
            for (const post of targetUserPost) {
                const { userId, id, title, body } = post;
                allPost.push(new Post(userId, id, title, body));
            }
            return allPost;
        } else {
            return undefined;
        }
    }

    async _getAllPosts(userId) {
        const postEndPoint = `${this._baseUrl}/posts`;
        const response = await fetch(postEndPoint);
        const allPosts = await response.json();
        return allPosts.filter(function (post) {
            return post.userId === userId;
        })
    }
}

module.exports = RequestHandlerFix;