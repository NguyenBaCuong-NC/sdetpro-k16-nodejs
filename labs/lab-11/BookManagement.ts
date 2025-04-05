import Book from './Book';
import AddNewBook from './AddNewBook';
import FindBook from './FindBook';
import UpdateBook from './UpdateBook';
import DeleteBook from './DeleteBook';
import * as readline from 'readline-sync';

let isStillAccess = true;
let bookList: Book[] = [];

while (isStillAccess) {
    printManu();
    let userOption = Number(readline.question("Enter user Option: "));
    switch (userOption) {
        case 0:
            isStillAccess = false;
            console.log("See you again!");
            break;
        case 1:
            const iSBNAdded: number = getISBN();
            const titleAdded: string = getTitle();
            const authorAdded: string = getAuthor();
            const yearAdded: number = getYear();
            const newBook = new AddNewBook(iSBNAdded, titleAdded, authorAdded, yearAdded);
            newBook.addNewBook(bookList, newBook);
            console.log(bookList);
            break;
        case 2:
            const targetISBNFind: number = getISBN();;
            const targetBookFind = new FindBook().findBook(bookList, targetISBNFind);
            if (targetBookFind.length === 0) {
                printBookNotExisting(targetISBNFind);
            } else {
                console.log(targetBookFind);
            }
            break;
        case 3:
            const targetISBNUpdate: number = getISBN();
            const targetBookUpdate = new FindBook().findBook(bookList, targetISBNUpdate);
            if (targetBookUpdate.length === 0) {
                printBookNotExisting(targetISBNUpdate);
            } else {
                const newTitle: string = getTitle();
                const newAuthor: string = getAuthor();
                const newYear: number = getYear();
                const bookUpdated = new UpdateBook().updateBook(bookList, targetISBNUpdate, newTitle, newAuthor, newYear);
                console.log(bookUpdated);
            }
            break;
        case 4:
            const iSBNDelete: number = getISBN();
            const targetBookDelete = new FindBook().findBook(bookList, iSBNDelete);
            if (targetBookDelete.length === 0) {
                printBookNotExisting(iSBNDelete);
            } else {
                const bookDeleted = new DeleteBook();
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
    console.log(`
    ======= Book Management Program (CRUD)============
    1. New book
    2. Find a book(ISBN)
    3. Update a book
    4. Delete a book
    5. Print the book list
    0. Exit`);
}

function printBookNotExisting(iSBN: number) {
    console.log(`Book with ISBN <${iSBN}> is not found!`);
}

function getISBN() {
    return Number(readline.question('Please input ISBN: '));
}

function getTitle() {
    return readline.question('Please input title: ');
}

function getAuthor() {
    return readline.question('Please input author: ');
}

function getYear() {
    return Number(readline.question('Please input year: '));
}