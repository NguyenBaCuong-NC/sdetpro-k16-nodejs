"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddNewBook_1 = require("./AddNewBook");
var FindBook_1 = require("./FindBook");
var UpdateBook_1 = require("./UpdateBook");
var DeleteBook_1 = require("./DeleteBook");
var readline = require("readline-sync");
var isStillAccess = true;
var bookList = [];
while (isStillAccess) {
    printManu();
    var userOption = Number(readline.question("Enter user Option: "));
    switch (userOption) {
        case 0:
            isStillAccess = false;
            break;
        case 1:
            var iSBNAdded = Number(readline.question('Please input ISBN: '));
            var titleAdded = readline.question('Please input title: ');
            var authorAdded = readline.question('Please input author: ');
            var yearAdded = Number(readline.question('Please input year: '));
            var newBook = new AddNewBook_1.default(iSBNAdded, titleAdded, authorAdded, yearAdded);
            newBook.addNewBook(bookList, newBook);
            console.log(bookList);
            break;
        case 2:
            var targetISBNFind = Number(readline.question('Please input ISBN: '));
            var targetBookFind = new FindBook_1.default().findBook(bookList, targetISBNFind);
            if (targetBookFind.length === 0) {
                printBookNotExisting(targetISBNFind);
            }
            else {
                console.log(targetBookFind);
            }
            break;
        case 3:
            var targetISBNUpdate = Number(readline.question('Please input ISBN: '));
            var targetBookUpdate = new FindBook_1.default().findBook(bookList, targetISBNUpdate);
            if (targetBookUpdate.length === 0) {
                printBookNotExisting(targetISBNUpdate);
            }
            else {
                var newTitle = readline.question('Please input new title: ');
                var newAuthor = readline.question('Please input new author: ');
                var newYear = Number(readline.question('Please input new year: '));
                var bookUpdated = new UpdateBook_1.default().updateBook(bookList, targetISBNUpdate, newTitle, newAuthor, newYear);
                console.log(bookUpdated);
            }
            break;
        case 4:
            var iSBNDelete = Number(readline.question('Please input ISBN: '));
            var targetBookDelete = new FindBook_1.default().findBook(bookList, iSBNDelete);
            if (targetBookDelete.length === 0) {
                printBookNotExisting(iSBNDelete);
            }
            else {
                var bookDeleted = new DeleteBook_1.default();
                bookDeleted.deleteBook(bookList, iSBNDelete);
                console.log(targetBookDelete);
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
