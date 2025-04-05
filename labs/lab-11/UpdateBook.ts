import Book from "./Book";

export default class UpdateBook extends Book {

    updateBook(bookList: Book[], iSBN: number, newTitle: string, newAuthor: string, newYear: number) {
        for (const book of bookList) {
            if (book.getISBN() === iSBN) {
                book.title = newTitle;
                book.author = newAuthor;
                book.year = newYear;
                return book;
            }
        }
    }

}
