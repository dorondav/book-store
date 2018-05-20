import { Component, OnInit } from "@angular/core";
import { BookService } from "../booksService.service";
import { HttpClient } from "@angular/common/http";
import { GetDataService } from "../../get-data-service.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  public arrBooks = [];
  selectedBook: {
    id: number;
    title: string;
    author: string;
    image: string;
    date: string;
  };
  bookAuthor = "";
  bookImage = "";
  bookPublication = "";

  constructor(
    private bookService: BookService,
    private httpService: HttpClient,
    private getDataService: GetDataService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getDataService
      .getBooksData()
      .subscribe(data => (this.arrBooks = data));

    this.selectedBook = {
      id: this.route.snapshot.params["id"],
      title: this.route.snapshot.params["title"],
      author: this.route.snapshot.params["author"],
      image: this.route.snapshot.params["image"],
      date: this.route.snapshot.params["date"]
    };
    this.route.params.subscribe((params: Params) => {
      this.selectedBook.id = params["id"];
      this.selectedBook.title = params["title"];
      this.selectedBook.author = params["author"];
      this.selectedBook.image = params["image"];
      this.selectedBook.date = params["date"];
    });
  }

  onEdit(content) {
    this.modalService.open(content, { size: "lg", centered: true });
  }
}
