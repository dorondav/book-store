export interface DataService<T> {
  getData(): T[];
  insertNewElement(data: T);
  setData(id: number, data: T);
}
