export default class Book {
    constructor(id, title, author, price, length, genre, releaseDate, publisher, coverImage) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.length = length;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.publisher = publisher;
        this.coverImage = coverImage;
    }
}