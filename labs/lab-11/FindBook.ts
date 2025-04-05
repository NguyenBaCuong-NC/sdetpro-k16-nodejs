import Book from "./Book";
import readline from 'readline-sync';

export default class FindBook extends Book {

    findBook(bookList: Book[]) {
        const ISBN = Number(readline.question('Please input ISBN: '));
        return bookList.filter(function (book) {
            return book.getISBN() === ISBN;
        })
        // if (!targetBook) {
        //     console.log(`Book with ISBN <${this.ISBN}> is not found!`);
        // } else {
        //     console.log(targetBook);
        // }
    }

}