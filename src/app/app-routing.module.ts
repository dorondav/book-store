import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { AddBookComponent } from "./books/add-book/add-book.component";
import { BookComponent } from "./books/book/book.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "", component: BooksComponent },
  {
    path: "books",
    component: BooksComponent,
    children: [
      { path: "add", component: AddBookComponent },
      {
        path: ":id/:title/:author/:image/:date",
        component: BookComponent
      }
    ]
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
