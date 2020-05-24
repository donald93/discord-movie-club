import { Message } from 'discord.js';

import { Command } from '../abstractions/command';

export class EndCategory extends Command {
  text = "endCategory";

  execute(msg: Message) {
    if (msg.content === this.commandText()) {
      msg.reply("you've ended the category");
    }
  }
}
