import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class ValidationsService {
  constructor() {}

  dateValidator(control: FormControl): { [s: string]: boolean } {
    let datePub = control.value;
    let thisDate = Date();
    if (Date.parse(datePub) >= Date.parse(thisDate)) {
      return {
        dateIsNotValid: true
      };
    }
    return null;
  }
}
