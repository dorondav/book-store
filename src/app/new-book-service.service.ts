import { Injectable } from "@angular/core";
// import { AddBookComponent } from "./add-book.component";
import { Subject } from "rxjs/Rx";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Http } from "@angular/http";
@Injectable({
  providedIn: "root"
})
export class NewBookService {
  constructor(private http: Http) {}
  addBookForm: FormGroup;
  newBookArray: any = [];

  onAddBook(
    id: number,
    addAuthor: string,
    addTitle: string,
    addDate: string,
    addImage: string
  ) {
    this.newBookArray.push({
      id: id,
      addAuthor: addAuthor,
      addTitle: addTitle,
      addDate: addDate,
      addImage: addImage
    });
    // console.log("test:" + JSON.stringify(this.newBookArray));
    console.log("test:" + this.newBookArray);
  }
}
