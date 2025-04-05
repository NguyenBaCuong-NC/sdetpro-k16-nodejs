import Book from './Book';
import AddNewBook from './AddNewBook';
import FindBook from './FindBook';
import UpdateBook from './UpdateBook';
import DeleteBook from './DeleteBook';
import * as readline from 'readline-sync';

let isStillAccessing = true;
let bookList: Book[] = [];

while (isStillAccessing) {
    printManu();
    let userOption = Number(readline.question("Enter user Option: "));
    switch (userOption) {
        case 0:
            isStillAccessing = false;
            console.log("See you again!");
            break;
        case 1:
            const addedISBN: number = getISBN();
            const addedTitle: string = getTitleOrAuthor('title');
            const addedAuthor: string = getTitleOrAuthor('author');
            const addedYear: number = getYear('year');
            const newBook = new AddNewBook(addedISBN, addedTitle, addedAuthor, addedYear);
            newBook.addNewBook(bookList, newBook);
            console.log(bookList);
            break;
        case 2:
            const findedISBN: number = getISBN();;
            const targetFindedBook = FindBook.findBook(bookList, findedISBN);
            if (targetFindedBook.length === 0) {
                printBookNotExisting(findedISBN);
            } else {
                console.log(targetFindedBook);
            }
            break;
        case 3:
            const updatedISBN: number = getISBN();
            const targetUpdatedBook = FindBook.findBook(bookList, updatedISBN);
            if (targetUpdatedBook.length === 0) {
                printBookNotExisting(updatedISBN);
            } else {
                const newTitle: string = getTitleOrAuthor('new title');
                const newAuthor: string = getTitleOrAuthor('new author');
                const newYear: number = getYear('new year');
                const updatedBook = UpdateBook.updateBook(bookList, updatedISBN, newTitle, newAuthor, newYear);
                console.log(`The updated book is ${JSON.stringify(updatedBook)}`);
            }
            break;
        case 4:
            const deletedISBN: number = getISBN();
            const deletedBook = FindBook.findBook(bookList, deletedISBN);
            if (deletedBook.length === 0) {
                printBookNotExisting(deletedISBN);
            } else {
                DeleteBook.deleteBook(bookList, deletedISBN);
                console.log(`The deleted book is ${JSON.stringify(deletedBook)}`);
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

function getTitleOrAuthor(text: string) {
    return readline.question(`Please input ${text}: `);
}

function getYear(text: string) {
    return Number(readline.question(`Please input ${text}: `));
}