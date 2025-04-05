export default abstract class Book {
    protected ISBN: number;
    protected title: string;
    protected author: string;
    protected year: number;
    protected bookList: Book[] = [];

    getISBN() {
        return this.ISBN;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getYear() {
        return this.year;
    }

    getBookList() {
        return this.bookList;
    }

}