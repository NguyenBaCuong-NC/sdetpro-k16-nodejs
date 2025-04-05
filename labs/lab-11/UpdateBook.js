"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var UpdateBook = /** @class */ (function (_super) {
    __extends(UpdateBook, _super);
    function UpdateBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateBook.prototype.updateBook = function (bookList, iSBN, newTitle, newAuthor, newYear) {
        for (var _i = 0, bookList_1 = bookList; _i < bookList_1.length; _i++) {
            var book = bookList_1[_i];
            if (book.getISBN() === iSBN) {
                book.title = newTitle;
                book.author = newAuthor;
                book.year = newYear;
                return book;
            }
        }
    };
    return UpdateBook;
}(Book_1.default));
exports.default = UpdateBook;
