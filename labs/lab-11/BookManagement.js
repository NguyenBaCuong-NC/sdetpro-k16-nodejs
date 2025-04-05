"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddNewBook_1 = require("./AddNewBook");
var FindBook_1 = require("./FindBook");
var readline = require("readline-sync");
var isStillAccess = true;
while (isStillAccess) {
    printManu();
    var userOption = Number(readline.question("Enter user Option: "));
    switch (userOption) {
        case 1:
            var addISBN = Number(readline.question('Please input ISBN: '));
            var addTitle = readline.question('Please input title: ');
            var addAuthor = readline.question('Please input author: ');
            var addYear = Number(readline.question('Please input year: '));
            var newBook = new AddNewBook_1.default(addISBN, addTitle, addAuthor, addYear);
            newBook.addBook(newBook);
            break;
        case 2:
            var findISBN = Number(readline.question('Please input ISBN: '));
            var targetBook = new FindBook_1.default();
            targetBook.findBook(findISBN);
            if (!targetBook) {
                console.log("Book with ISBN <".concat(findISBN, "> is not found!"));
            }
            else {
                console.log(targetBook);
            }
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    }
}
function printManu() {
    console.log("\n    ======= Book Management Program (CRUD)============\n    1. New book\n    2. Find a book(ISBN)\n    3. Update a book\n    4. Delete a book\n    5. Print the book list\n    0. Exit");
}
