export default abstract class Book {
    protected iSBN: number;
    protected title: string;
    protected author: string;
    protected year: number;

    getISBN() {
        return this.iSBN;
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

    setAuthor(author: string) {
        this.author = author;
    }

    setTitle(title: string) {
        this.title = title;
    }

    setYear(year: number) {
        this.year = year;
    }

}