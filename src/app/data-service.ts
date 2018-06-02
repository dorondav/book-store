export interface DataService<T> {
  getData(): T[];
  insertNewElement(data: T[]): boolean;
  setData(id: number, data: T);
}
