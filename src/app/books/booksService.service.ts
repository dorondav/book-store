import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { GetDataService } from "../get-data-service.service";

@Injectable()
export class BookService {
  // public showSingleBook = [];
  public arrBooks = [];

  constructor(
    private httpService: HttpClient,
    private getDataService: GetDataService
  ) {}

  // selectBookById(id: number) {
  //   this.showSingleBook.push(this.arrBooks[id]);
  //   this.showSingleBook.splice(id, 1);
  // }
  // getBooks() {
  //   return this.arrBooks;
  // }

  // getBook(id: number) {
  //   const book = this.arrBooks.find(s => {
  //     return s.id === id;
  //   });
  //   return book;
  // }

  // updateBook(
  //   id: number,
  //   bookInfo: { title: string; author: string; date: string; image: string }
  // ) {
  //   const book = this.arrBooks.find(s => {
  //     return s.id === id;
  //   });
  //   if (book) {
  //     book.title = bookInfo.title;
  //     book.author = bookInfo.author;
  //     book.date = bookInfo.date;
  //     book.image = bookInfo.image;
  //   }
  // }
}
