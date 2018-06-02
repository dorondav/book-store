import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RequestOptions } from "@angular/http";
import { HttpRequest } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const url = "../assets/images/";
    let formData = new FormData();
    let params = new HttpParams();
    formData.append("upload", file, file.name);
    const options = {
      params: params,
      reportProgress: true
    };
    const req = new HttpRequest("POST", url, formData, options);
    return this.http.request(req);
  }
}
