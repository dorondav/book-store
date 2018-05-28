import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BookInformation } from "../../book.model";
import { GetDataService } from "../get-data-service.service";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"],
  providers: []
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  addedBook: any;
  bookDepository = [];
  id: number;
  addAuthor: string = "";
  addTitle: string = "";
  addDate: string = "";
  addImage: string = "";
  newBookArray: {
    id: number;
    addAuthor: string;
    addTitle: string;
    addDate: string;
    addImage: string;
  }[] = [];

  constructor(private getDataService: GetDataService) {}

  onNewSave() {
    this.getDataService.getUrlId();
    this.getDataService.addNewBook(this.addBookForm.value);
    console.log(this.addBookForm);
    return this.addBookForm;
  }

  ngOnInit() {
    this.addBookForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      addAuthor: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      addTitle: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      addDate: new FormControl(null, Validators.required),
      addImage: new FormControl(null, Validators.required)
    });
  }
}
