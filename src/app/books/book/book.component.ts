import { Component, NgModule, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GetDataService } from "../get-data-service.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { BookInformation } from "../../book.model";
@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
  providers: []
})
export class BookComponent implements OnInit {
  books: BookInformation[];
  editBook: FormGroup;
  id: number;

  bookDepository: {
    id: number;
    title: string;
    author: string;
    image: string;
    date: string;
  };

  constructor(
    private getDataService: GetDataService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  showBookOnSelectInfo() {
    this.bookDepository = {
      id: this.route.snapshot.params["id"],
      title: this.route.snapshot.params["title"],
      author: this.route.snapshot.params["author"],
      image: this.route.snapshot.params["image"],
      date: this.route.snapshot.params["date"]
    };
    this.route.params.subscribe((params: Params) => {
      this.bookDepository.id = params["id"];
      this.bookDepository.title = params["title"];
      this.bookDepository.author = params["author"];
      this.bookDepository.image = params["image"];
      this.bookDepository.date = params["date"];
    });
  }

  onEdit(content) {
    this.modalService.open(content, { size: "lg", centered: true });
  }

  onUpdateBook() {
    this.getDataService.getUrlId();

    // this.getDataService.getBook(index);
    // const newBook = new BookInformation(
    //   this.id,
    //   this.editBook.value["title"],
    //   this.editBook.value["date"],
    //   this.editBook.value["author"],
    //   this.editBook.value["image"]
    // );
    this.getDataService.updateBook(this.id, this.editBook.value);
  }

  ngOnInit() {
    this.getDataService.getUrlId();
    this.showBookOnSelectInfo();
    this.initForm();
    this.getDataService.bookChanged.subscribe((books: BookInformation[]) => {
      this.books = books;
    });
  }

  private initForm() {
    this.route.params.subscribe(params => {
      let bookToEdit = params;
      let author = "";
      let title = "";
      let date = "";
      let image = "";

      this.editBook = new FormGroup({
        author: new FormControl(bookToEdit.author, Validators.required),
        title: new FormControl(bookToEdit.title, Validators.required),
        date: new FormControl(bookToEdit.date, Validators.required),
        image: new FormControl(bookToEdit.image, Validators.required)
      });
    });
  }
  deleteBookBtn() {
    return;
  }
}
