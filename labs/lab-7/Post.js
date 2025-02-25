class Post {
    constructor(userId, id, body, title) {
        this._userId = userId;
        this._id = id;
        this._body = body;
        this._title = title;
    }
    get userId() {
        return this._userId;
    }

    get id() {
        return this._id;
    }

    get body() {
        return this._body;
    }

    get title() {
        return this._title;
    }

    set userId(userId) {
        this._userId = userId;
    }

    set id(id) {
        this._id = id;
    }

    set body(body) {
        this._body = body;
    }

    set title(title) {
        this._title = title;
    }

}
module.exports = Post;