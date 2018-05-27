import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Http } from "@angular/http";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subject } from "rxjs";
import "rxjs/Rx";

import { BookInformation } from "../book.model";
import { GetDataService } from "../get-data-service.service";

@Injectable()
export class BookService implements OnInit {
  private editedBooks: BookInformation[] = [];
  // public showSingleBook = [];
  private arrBooks = [];
  booksChanged = new Subject<BookInformation[]>();
  // url: string = "assets/data/books.json";
  id = "";
  constructor(
    private httpService: HttpClient,
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {}
  books = [];
  ngOnInit() {}

  updateBook() {
    // return this.http.put(
    //   "https://bookstore-f12d4.firebaseio.com/data.json",
    //   this.books
    // );
  }

  deleteBook() {
    console.log("book no" + "" + "was deleted");

    //   let search = new URLSearchParams();
    //   search.set("id", "title");
    //   search.set("Delete", this.id);

    //   this.http
    //     .delete(this.url + { search })
    //     .subscribe(res => console.log(res.json()));
  }
}
