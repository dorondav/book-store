import { constants } from "os";

export class CoverData {
  public id = this.id;
  public name = this.name;
  public url = this.url;
  constructor(id: number, name: string, url: string) {
    (this.id = id), (this.name = name), (this.url = url);
  }
}
