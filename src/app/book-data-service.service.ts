import { Injectable, OnInit } from "@angular/core";
import { DataService } from "./data-service";
import { BookInformation } from "./book.model";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class BookDataService implements DataService<BookInformation>, OnInit {
  constructor(private http: Http) {}
  books = [];
  insertNewElement(data: BookInformation[]): boolean {
    throw new Error("Method not implemented.");
  }
  setData(id: number, data: BookInformation) {
    this.books
      .filter(element => element.id == id)
      .forEach(element => (element = data));
    console.log(data);
  }

  getData() {
    var arr = new Array<BookInformation>();
    this.http.get("../assets/data/books.json").subscribe(res => {
      arr = res
        .json()
        .map(element =>
          arr.push(
            new BookInformation(
              element.id,
              element.title,
              element.date,
              element.author,
              element.image
            )
          )
        );
      console.log(arr);
    });
    return arr;
  }

  ngOnInit() {}
}
