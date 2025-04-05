import Book from "./Book";

export default class UpdateBook extends Book {

    updateBook(bookList: Book[], iSBN: number, newTitle: string, newAuthor: string, newYear: number) {
        for (const book of bookList) {
            if (book.getISBN() === iSBN) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                book.setYear(newYear);
                return book;
            }
        }
    }

}
