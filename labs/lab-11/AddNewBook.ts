import Book from "./Book";
import readline from 'readline-sync';

export default class AddNewBook extends Book {

    constructor() {
        super();
        this.ISBN = Number(readline.question('Please input ISBN: '));
        this.title = readline.question('Please input title: ');
        this.author = readline.question('Please input author: ');
        this.year = Number(readline.question('Please input year: '));
    }

    addBook(newBook: AddNewBook) {
        this.bookList.push(newBook);
    }

}
