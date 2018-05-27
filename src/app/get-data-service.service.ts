import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { BookInformation } from "./book.model";
import "rxjs/Rx";
@Injectable()
export class GetDataService {
  private _url: string = "/assets/data/books.json";

  constructor(private httpClient: HttpClient, private http: Http) {}
  // getBooksData(): Observable<BookInformation[]> {
  //   return this.httpClient.get<BookInformation[]>("/assets/data/books.json");
  // }

  bookList = [];

  // getBooksData() {
  //   this.http.get("/assets/data/books.json").subscribe((res: Response) => {
  //     this.bookList = res.json();
  //   });
  // }

  // storeInBookDepo(books: any[]) {
  //   return this.http.put(
  //     "https://bookstore-f12d4.firebaseio.com/data.json",
  //     books
  //   );
  // }

  // getBookList() {
  //   return this.http
  //     .get("https://bookstore-f12d4.firebaseio.com/data.json")
  //     .map((response: Response) => {
  //       const data = response.json();
  //       return data;
  //     });
  // }
  // getBooksData() {
  //   return this.http.get(this._url).map(data => {
  //     return data;
  //   });
  //   // .do(data => console.log(data));
  // }
}
