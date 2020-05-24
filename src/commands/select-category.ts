import { Message } from 'discord.js';

import { Command } from '../abstractions/command';

export class SelectCategory extends Command {
  text = "selectCategory";

  execute(msg: Message) {
    if (msg.content === this.commandText()) {
      msg.reply("you've selected the category");
    }
  }
}
