export abstract class Command {
  abstract text: string;
  abstract execute(msg);

  public commandText() {
    return `-${this.text}`;
  }
}
