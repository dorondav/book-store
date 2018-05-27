export class BookInformation {
  public id: number;
  public title: string;
  public date: string;
  public author: string;
  public image: string;

  constructor(
    id: number,
    title: string,
    date: string,
    author: string,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.author = author;
    this.image = image;
  }
}
