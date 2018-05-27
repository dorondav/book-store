import { Component, OnInit, Input } from "@angular/core";
import { BookService } from "./booksService.service";
import { GetDataService } from "../get-data-service.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Http, Response, Headers } from "@angular/http";
// import { AddBookComponent } from "./add-book/add-book.component";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: [GetDataService, BookService]
})
export class BooksComponent implements OnInit {
  public arrBooks = [];

  constructor(
    private bookService: BookService,
    private httpService: HttpClient,
    private getDataService: GetDataService,
    // private addBookComponent: AddBookComponent,
    private router: Router,
    private http: Http
  ) {}

  bookList = [];

  getBooksData() {
    this.http.get("/assets/data/books.json").subscribe((res: Response) => {
      this.arrBooks = res.json();
    });
  }

  ngOnInit() {
    this.getBooksData();
  }
}
