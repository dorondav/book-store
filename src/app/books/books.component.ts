import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BookInformation } from "../book.model";
import { TrimPipe } from "../trim.pipe";
import { BookDataService } from "../book-data-service.service";
import { GetCoverService } from "../get-cover.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: [TrimPipe]
})
export class BooksComponent implements OnInit {
  constructor(
    private bookDataService: BookDataService,
    private router: Router,
    private covers: GetCoverService
  ) {}
  books: Array<BookInformation>;
  images = [];

  ngOnInit() {
    this.books = this.bookDataService.getData();
    this.covers.getImageData();
  }
}
