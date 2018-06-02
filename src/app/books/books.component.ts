import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response, Headers } from "@angular/http";
import { NewBookService } from "../new-book-service.service";
import { BookInformation } from "../book.model";
import { GetDataService } from "./get-data-service.service";
import { TrimPipe } from "../trim.pipe";
import { BookDataService } from "../book-data-service.service";
// import { AddBookComponent } from "./add-book/add-book.component";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: [TrimPipe, GetDataService]
})
export class BooksComponent implements OnInit {
  constructor(
    private bookDataService: BookDataService,
    private router: Router
  ) {}
  books: Array<BookInformation>;
  id: number;

  ngOnInit() {
    this.books = this.bookDataService.getData();
    // this.getDataService.getUrlId();
    // this.bookDepository = this.getDataService.bookDepository;
    // this.getDataService.bookChanged.subscribe((books: BookInformation[]) => {
    //   this.bookDepository = this.getDataService.bookDepository;
    // });
  }
}
