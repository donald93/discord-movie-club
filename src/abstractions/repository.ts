export abstract class Repository<T> {
  abstract addItem(item: T): Promise<string>;
  abstract removeItem(id: string);
  abstract getItem(id: string): T;
}
