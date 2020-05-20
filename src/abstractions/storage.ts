export abstract class Repository {
  abstract addItem(item: any);
  abstract removeItem(id: any);
  abstract getItem(id: any);
}
