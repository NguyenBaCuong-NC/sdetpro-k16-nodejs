import Book from './Book';
import AddNewBook from './AddNewBook';
import FindBook from './FindBook';
import * as readline from 'readline-sync';

let isStillAccess = true;

while (isStillAccess) {
    printManu();
    let userOption = Number(readline.question("Enter user Option: "));
    switch (userOption) {
        case 1:
            const addISBN: number = Number(readline.question('Please input ISBN: '));
            const addTitle: string = readline.question('Please input title: ');
            const addAuthor: string = readline.question('Please input author: ');
            const addYear: number = Number(readline.question('Please input year: '));
            const newBook = new AddNewBook(addISBN, addTitle, addAuthor, addYear);
            newBook.addBook(newBook);
            break;
        case 2:
            const findISBN: number = Number(readline.question('Please input ISBN: '));
            const targetBook = new FindBook();
            targetBook.findBook(findISBN);
            if (!targetBook) {
                console.log(`Book with ISBN <${findISBN}> is not found!`);
            } else {
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
    console.log(`
    ======= Book Management Program (CRUD)============
    1. New book
    2. Find a book(ISBN)
    3. Update a book
    4. Delete a book
    5. Print the book list
    0. Exit`);
}