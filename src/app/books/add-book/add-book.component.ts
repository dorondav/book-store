import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BookInformation } from "../../book.model";
import { ValidationsService } from "../validattions.service";
import { BookDataService } from "../../book-data-service.service";
import { GetCoverService } from "../../get-cover.service";
import { CoverData } from "../../cover.model";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"],
  providers: [ValidationsService]
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  books: Array<BookInformation>;
  images: Array<CoverData>;

  constructor(
    private getDataService: BookDataService,
    private Valid: ValidationsService,
    private coverService: GetCoverService
  ) {}

  onFormInit() {
    this.addBookForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      addTitle: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      addDate: new FormControl(null, [
        Validators.required,
        this.Valid.dateValidator.bind(this)
      ]),
      addAuthor: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      addImage: new FormControl(null, Validators.required)
    });
  }

  getFormValue() {
    let bookInfo = this.addBookForm;
    console.log(bookInfo.get("addImage").value);
    return new BookInformation(
      bookInfo.get("id").value,
      bookInfo.get("addTitle").value,
      bookInfo.get("addDate").value,
      bookInfo.get("addAuthor").value,
      bookInfo.get("addImage").value
    );
  }

  onNewSave() {
    let bookInfo = this.getFormValue();
    this.getDataService.insertNewElement(bookInfo);
    console.log(bookInfo);
  }

  ngOnInit() {
    this.onFormInit();
    this.images = this.coverService.getImageData();
  }
}
