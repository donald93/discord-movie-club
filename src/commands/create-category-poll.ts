import { Message } from 'discord.js';

import { Command } from '../abstractions/command';

export class CreateCategoryPoll extends Command {
  text = "createCategoryPoll";

  execute(msg: Message) {
    if (msg.content === this.commandText()) {
      msg.reply("you've created the category poll");
    }
  }
}
