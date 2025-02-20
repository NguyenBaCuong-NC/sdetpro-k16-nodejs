class Post {
    constructor(endpoint) {
        this._endpoint = endpoint;
    }
    get endpoint() {
        return this._endpoint;
    }

    set endpoint(endpoint) {
        this._endpoint = endpoint;
    }

}
module.exports = Post;