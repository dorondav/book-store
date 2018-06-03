import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { BookInformation } from "../../book.model";
import { ValidationsService } from "../validattions.service";
import { BookDataService } from "../../book-data-service.service";
import { GetCoverService } from "../../get-cover.service";
import { CoverData } from "../../cover.model";
@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
  providers: [ValidationsService]
})
export class BookComponent implements OnInit {
  isDeleted: boolean;
  currentParams: Params;
  editBook: FormGroup;
  id: number;
  books: Array<BookInformation>;
  images: Array<CoverData>;

  constructor(
    private getDataService: BookDataService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private Valid: ValidationsService,
    private coverService: GetCoverService
  ) {
    this.books = new Array<BookInformation>();
  }

  showBookOnSelectInfo() {
    var imgId = this.currentParams["image"];
    this.books.pop();
    this.books.push(
      new BookInformation(
        this.currentParams["id"],
        this.currentParams["title"],
        this.currentParams["date"],
        this.currentParams["author"],
        this.currentParams["image"]
      )
    );
  }

  onEdit(content) {
    this.initForm();
    this.modalService.open(content, { size: "lg", centered: true });
  }

  getFormValue() {
    let bookInfo = this.editBook;
    return new BookInformation(
      this.id,
      bookInfo.get("title").value,
      bookInfo.get("date").value,
      bookInfo.get("author").value,
      bookInfo.get("addImage").value
    );
  }

  selectCover() {
    let coverImage = this.editBook;
  }

  onUpdateBook() {
    let bookInfo = this.getFormValue();
    this.books.pop();
    this.books.push(bookInfo);
    this.getDataService.setData(this.id, bookInfo);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentParams = params;
      this.id = this.currentParams["id"];
      this.showBookOnSelectInfo();
      this.isDeleted = false;
    });
    this.initForm();
    this.images = this.coverService.getImageData();
  }

  private initForm() {
    let author = "";
    let title = "";
    let date = "";
    let image = "";

    this.editBook = new FormGroup({
      author: new FormControl(this.currentParams.author, [
        Validators.required,
        Validators.minLength(4)
      ]),
      title: new FormControl(this.currentParams.title, [
        Validators.required,
        Validators.minLength(2)
      ]),
      date: new FormControl(this.currentParams.date, [
        Validators.required,
        this.Valid.dateValidator.bind(this)
      ]),
      addImage: new FormControl(
        this.currentParams.addImage,
        Validators.required
      )
    });
  }

  deleteBookBtn() {
    this.getDataService.deleteData(this.id);
    this.isDeleted = true;
  }
}
