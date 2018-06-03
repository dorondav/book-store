import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CoverData } from "./cover.model";

@Injectable({
  providedIn: "root"
})
export class GetCoverService {
  constructor(private http: Http) {
    this.initData();
  }
  data: Array<CoverData>;

  getImageData() {
    return this.data;
  }

  getImage(id: number): string {
    return this.data.filter(el => el.id == id).map(el => el.url)[0];
  }

  initData() {
    this.data = new Array<CoverData>();
    this.http
      .get("../assets/data/covers.json")
      .subscribe(res =>
        res
          .json()
          .map(el => this.data.push(new CoverData(el.id, el.name, el.url)))
      );
  }
}
