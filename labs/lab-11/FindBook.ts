import Book from "./Book";

export default class FindBook extends Book {

    findBook(ISBN: number) {
        return this.bookList.filter(function (book) {
            return book.getISBN() === ISBN;
        })
    }

}