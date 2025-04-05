import Book from "./Book";

export default class FindBook extends Book {

    static findBook(bookList: Book[], iSBN: number): any {
        return bookList.filter(function (book) {
            return book.getISBN() === iSBN;
        });
    }

}