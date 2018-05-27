import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Http, Response, Headers } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { BookInformation } from "../../book.model";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
   addBookForm: FormGroup;
  newBookObj: BookInformation[] = [];
  addAuthor = "";
  addTitle = "";
  addDate = "";
  addImage = "";
  constructor(private http: Http) {}

  onAdd() {
    // this.http
    // .post("/assets/data/books.json", this.addBookForm.value)
    // .subscribe((res: Response) => {
    //   console.log(res);
    //   res;
    // });

    console.log(this.addBookForm);

    return this.addBookForm.
  }

  ngOnInit() {
    this.addBookForm = new FormGroup({
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
