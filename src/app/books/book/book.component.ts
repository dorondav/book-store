import { Component, NgModule, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GetDataService } from "../get-data-service.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { BookInformation } from "../../book.model";
import { ValidationsService } from "../validattions.service";
import { BookDataService } from "../../book-data-service.service";
import { isArray } from "rxjs/internal/util/isArray";
import { FileUploadService } from "../../file-upload.service";
@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
  providers: [ValidationsService]
})
export class BookComponent implements OnInit {
  editBook: FormGroup;
  id: number;
  books: Array<BookInformation>;
  fileToUpload: File;

  constructor(
    private getDataService: BookDataService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private uploadService: FileUploadService,
    private Valid: ValidationsService
  ) {
    this.books = new Array<BookInformation>();
  }

  showBookOnSelectInfo() {
    this.books.push(
      new BookInformation(
        this.route.snapshot.params["id"],
        this.route.snapshot.params["title"],
        this.route.snapshot.params["author"],
        this.route.snapshot.params["image"],
        this.route.snapshot.params["date"]
      )
    );

    console.log(this.books);
    this.route.params.subscribe((params: Params) => {
      this.books.map(book => {
        book.id = params["id"];
        book.title = params["title"];
        book.author = params["author"];
        book.image = params["image"];
        book.date = params["date"];
      });
    });
  }

  onEdit(content) {
    this.modalService.open(content, { size: "lg", centered: true });
  }

  getFormValue() {
    let bookInfo = this.editBook;
    return new BookInformation(
      this.route.snapshot.params["id"],
      bookInfo.get("title").value,
      bookInfo.get("date").value,
      bookInfo.get("author").value,
      bookInfo.get("image").value
    );
  }

  handleFile(files) {
    let file = files.item(0);
    console.log(file);
    this.fileToUpload = file;
  }

  myObserver = {
    next: x => console.log("Observer got a next value: " + x),
    error: err => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification")
  };

  onUpdateBook() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      let bookInfo = this.getFormValue();
      this.getDataService.setData(this.id, bookInfo);
      this.books.pop();
      this.books.push(bookInfo);

      this.uploadService.uploadFile(this.fileToUpload).subscribe(
        event => {
          console.log(event.type);
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  ngOnInit() {
    console.log("Init");
    this.showBookOnSelectInfo();
    this.initForm();
  }

  private initForm() {
    this.route.params.subscribe(params => {
      let bookToEdit = params;
      console.log(bookToEdit);
      let author = "";
      let title = "";
      let date = "";
      let image = "";

      this.editBook = new FormGroup({
        author: new FormControl(bookToEdit.author, Validators.required),
        title: new FormControl(bookToEdit.title, Validators.required),
        date: new FormControl(bookToEdit.date, [
          Validators.required,
          this.Valid.dateValidator.bind(this)
        ]),
        image: new FormControl(bookToEdit.imgFile, Validators.required)
      });
    });
  }
  deleteBookBtn() {
    return;
  }
}
