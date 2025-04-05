import Book from "./Book";

export default class FindBook extends Book {

    findBook(bookList: Book[], iSBN: number): any {
        return bookList.filter(function (book) {
            return book.getISBN() === iSBN;
        });
    }

}