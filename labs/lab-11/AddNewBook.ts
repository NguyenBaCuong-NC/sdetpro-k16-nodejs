import Book from "./Book";

export default class AddNewBook extends Book {

    constructor(iSBN: number, title: string, author: string, year: number) {
        super();
        this.iSBN = iSBN;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    addNewBook(bookList: Book[], newBook: AddNewBook) {
        bookList.push(newBook);
    }

}
