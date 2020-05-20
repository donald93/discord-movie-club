import { Command } from '../abstractions/command';

export class CreateCategoryPoll extends Command {
  text = "createCategoryPoll";

  execute(msg: any) {
    if (msg.content === this.commandText()) {
      msg.reply("you've created the category poll");
    }
  }
}
