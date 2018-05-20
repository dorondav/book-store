import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { GetDataService } from "./get-data-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [GetDataService]
})
export class AppComponent {
  // constructor(private getDataService: GetDataService) {}
  // ngOnInit() {
  //   this.etDataService.gstJsonData();
  // }
}
