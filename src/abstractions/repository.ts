export abstract class Repository<T> {
  abstract addItem(item: T);
  abstract removeItem(id: any);
  abstract getItem(id: any): T;
}
