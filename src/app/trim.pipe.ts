import { Pipe, PipeTransform } from "@angular/core";
import { FormControl } from "@angular/forms";

@Pipe({
  name: "trim"
})
export class TrimPipe implements PipeTransform {
  transform(value: string) {
    return value.replace(/[^\w\s]/gi, "");
  }
}
