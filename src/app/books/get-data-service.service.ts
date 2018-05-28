import { Injectable } from "@angular/core";
import { BookInformation } from "../book.model";
import { Params, ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
@Injectable()
export class GetDataService {
  constructor(private router: Router, private route: ActivatedRoute) {}
  id = "";
  bookChanged = new Subject<BookInformation[]>();
  bookDepository: any[] = [
    {
      id: 1,
      title: "The Three Little Pigs",
      date: "jan, 5, 1850",
      author: "The Grimm brothers",
      image: "../assets/images/pigs.jpg"
    },
    {
      id: 2,
      title: "Sharing a Shell",
      date: "22 Mar 2018",
      author: "Julia Donaldson",
      image: "../assets/images/Sharing.jpg"
    },
    {
      id: 3,
      title: "Paddington Takes the air",
      date: "06 Apr 1999",
      author: "Michael Bond",
      image: "../assets/images/paddington.jpg"
    },
    {
      id: 4,
      title: "The Nutcracker",
      date: "22 Sep 2016",
      author: "Dan Taylor",
      image: "../assets/images/nutcracker.jpg"
    },
    {
      id: 5,
      title: "test",
      date: "2.184",
      author: "test",
      image: "../assets/images/nutcracker.jpg"
    }
  ];

  getUrlId() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });
  }
  getBook(id: number) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      return this.bookDepository[this.id];
    });
  }

  addNewBook(book: BookInformation) {
    this.bookDepository.push(book);
    this.bookChanged.next(this.bookDepository.slice());
  }

  updateBook(id: number, newBook: BookInformation) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.bookDepository[this.id] = newBook;
      this.bookChanged.next(this.bookDepository.slice());
      console.log(this.bookDepository[this.id]);
    });
  }
}
