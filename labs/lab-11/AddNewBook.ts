import Book from "./Book";

export default class AddNewBook extends Book {

    constructor(ISBN: number, title: string, author: string, year: number) {
        super();
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    addBook(newBook: AddNewBook) {
        this.bookList.push(newBook);
    }

}
