import Book from "./Book";

export default class DeleteBook extends Book {

    static deleteBook(bookList: Book[], iSBN: number) {
        for (const book of bookList) {
            if (book.getISBN() === iSBN) {
                bookList.splice(bookList.indexOf(book), 1);
                return book;
            }
        }
    }

}