import { Injectable, OnInit } from "@angular/core";
import { DataService } from "./data-service";
import { BookInformation } from "./book.model";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class BookDataService implements DataService<BookInformation> {
  constructor(private http: Http) {
    this.initData();
  }
  books: Array<BookInformation>;

  insertNewElement(data: BookInformation) {
    this.books.push(data);
  }

  setData(id: number, data: BookInformation) {
    console.log("Saving " + id);
    this.books
      .filter(element => element.id == id)
      .forEach(element => (this.books[this.books.indexOf(element)] = data));
  }

  getData() {
    return this.books;
  }

  deleteData(id: number) {
    this.books
      .filter(element => element.id == id)
      .forEach(element => this.books.splice(this.books.indexOf(element), 1));
  }

  initData() {
    console.log("INIT DATA");
    this.books = new Array<BookInformation>();
    this.http.get("../assets/data/books.json").subscribe(res => {
      res
        .json()
        .map(element =>
          this.books.push(
            new BookInformation(
              element.id,
              element.title,
              element.date,
              element.author,
              element.image
            )
          )
        );
    });
  }
}
