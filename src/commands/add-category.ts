import { Command } from '../abstractions/command';

export class AddCategory extends Command {
  text = "addCategory";

  execute(msg: any) {
    if (msg.content === this.commandText()) {
      msg.reply("you've added a category");
    }
  }
}
