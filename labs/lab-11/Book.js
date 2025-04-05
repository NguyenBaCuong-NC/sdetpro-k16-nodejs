"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.getISBN = function () {
        return this.iSBN;
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
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setYear = function (year) {
        this.year = year;
    };
    return Book;
}());
exports.default = Book;
