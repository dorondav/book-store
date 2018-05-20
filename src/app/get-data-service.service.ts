import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { BookInformation } from "./book.interface";

@Injectable()
export class GetDataService {
  private _url: string = "./assets/data/books.json";

  constructor(private http: HttpClient) {}

  getBooksData(): Observable<BookInformation[]> {
    return this.http.get<BookInformation[]>(this._url);
  }
}
