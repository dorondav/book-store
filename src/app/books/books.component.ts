import { Component, OnInit, Input } from "@angular/core";
import { BookService } from "./booksService.service";
import { GetDataService } from "../get-data-service.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

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
    private router: Router
  ) {}

  ngOnInit() {
    this.getDataService
      .getBooksData()
      .subscribe(data => (this.arrBooks = data));
  }
}
