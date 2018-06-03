import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule, JsonpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { BooksComponent } from "./books/books.component";
import { HeaderComponent } from "./header/header.component";
import { BookComponent } from "./books/book/book.component";
import { AddBookComponent } from "./books/add-book/add-book.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { ValidationsService } from "./books/validattions.service";
import { TrimPipe } from "./trim.pipe";
import { BookDataService } from "./book-data-service.service";
import { GetCoverService } from "./get-cover.service";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    BookComponent,
    AddBookComponent,
    PageNotFoundComponent,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ValidationsService, BookDataService, GetCoverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
