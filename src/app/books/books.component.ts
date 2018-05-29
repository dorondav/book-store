import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response, Headers } from "@angular/http";
import { NewBookService } from "../new-book-service.service";
import { BookInformation } from "../book.model";
import { GetDataService } from "./get-data-service.service";
import { TrimPipe } from "../trim.pipe";
// import { AddBookComponent } from "./add-book/add-book.component";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: [TrimPipe]
})
export class BooksComponent implements OnInit {
  constructor(private getDataService: GetDataService, private router: Router) {}
  books: BookInformation[];
  id: number;

  bookDepository: {
    id: number;
    title: string;
    date: string;
    author: string;
    image: string;
  }[] = [];

  ngOnInit() {
    this.getDataService.getUrlId();
    this.bookDepository = this.getDataService.bookDepository;
    this.getDataService.bookChanged.subscribe((books: BookInformation[]) => {
      this.books = books;
    });
  }
}
