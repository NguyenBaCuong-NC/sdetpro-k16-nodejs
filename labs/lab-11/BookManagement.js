"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddNewBook_1 = require("./AddNewBook");
var FindBook_1 = require("./FindBook");
var UpdateBook_1 = require("./UpdateBook");
var DeleteBook_1 = require("./DeleteBook");
var readline = require("readline-sync");
var isStillAccessing = true;
var bookList = [];
while (isStillAccessing) {
    printManu();
    var userOption = Number(readline.question("Enter user Option: "));
    switch (userOption) {
        case 0:
            isStillAccessing = false;
            console.log("See you again!");
            break;
        case 1:
            var addedISBN = getISBN();
            var addedTitle = getTitleOrAuthor('title');
            var addedAuthor = getTitleOrAuthor('author');
            var addedYear = getYear('year');
            var newBook = new AddNewBook_1.default(addedISBN, addedTitle, addedAuthor, addedYear);
            newBook.addNewBook(bookList, newBook);
            console.log(bookList);
            break;
        case 2:
            var findedISBN = getISBN();
            ;
            var targetFindedBook = FindBook_1.default.findBook(bookList, findedISBN);
            if (targetFindedBook.length === 0) {
                printBookNotExisting(findedISBN);
            }
            else {
                console.log(targetFindedBook);
            }
            break;
        case 3:
            var updatedISBN = getISBN();
            var targetUpdatedBook = FindBook_1.default.findBook(bookList, updatedISBN);
            if (targetUpdatedBook.length === 0) {
                printBookNotExisting(updatedISBN);
            }
            else {
                var newTitle = getTitleOrAuthor('new title');
                var newAuthor = getTitleOrAuthor('new author');
                var newYear = getYear('new year');
                var updatedBook = UpdateBook_1.default.updateBook(bookList, updatedISBN, newTitle, newAuthor, newYear);
                console.log("The updated book is ".concat(JSON.stringify(updatedBook)));
            }
            break;
        case 4:
            var deletedISBN = getISBN();
            var targetDeletedBook = FindBook_1.default.findBook(bookList, deletedISBN);
            if (targetDeletedBook.length === 0) {
                printBookNotExisting(deletedISBN);
            }
            else {
                var deletedBook = DeleteBook_1.default.deleteBook(bookList, deletedISBN);
                console.log("The deleted book is ".concat(JSON.stringify(deletedBook)));
            }
            break;
        case 5:
            console.log(bookList);
            break;
        default:
            console.log("Wrong option!");
            break;
    }
}
function printManu() {
    console.log("\n    ======= Book Management Program (CRUD)============\n    1. New book\n    2. Find a book(ISBN)\n    3. Update a book\n    4. Delete a book\n    5. Print the book list\n    0. Exit");
}
function printBookNotExisting(iSBN) {
    console.log("Book with ISBN <".concat(iSBN, "> is not found!"));
}
function getISBN() {
    return Number(readline.question('Please input ISBN: '));
}
function getTitleOrAuthor(text) {
    return readline.question("Please input ".concat(text, ": "));
}
function getYear(text) {
    return Number(readline.question("Please input ".concat(text, ": ")));
}
