"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book() {
        this.bookList = [];
    }
    Book.prototype.getISBN = function () {
        return this.ISBN;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getYear = function () {
        return this.year;
    };
    Book.prototype.getBookList = function () {
        return this.bookList;
    };
    return Book;
}());
exports.default = Book;
