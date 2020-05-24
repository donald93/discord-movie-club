import { Message } from 'discord.js';

import { Command } from '../abstractions/command';

export class AddCategory extends Command {
  text = "addCategory";

  execute(msg: Message) {
    if (msg.content === this.commandText()) {
      msg.reply("you've added a category");
    }
  }
}
