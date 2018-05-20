import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { BooksComponent } from "./books/books.component";
import { HeaderComponent } from "./header/header.component";
import { BookComponent } from "./books/book/book.component";
import { BookService } from "./books/booksService.service";
import { GetDataService } from "./get-data-service.service";
import { ShortenPipe } from "./shorten.pipe";
import { AddBookComponent } from "./books/add-book/add-book.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    BookComponent,
    ShortenPipe,
    AddBookComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [BookService, GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
