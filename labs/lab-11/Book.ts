export default abstract class Book {
    protected iSBN: number;
    public title: string;
    public author: string;
    public year: number;

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

}