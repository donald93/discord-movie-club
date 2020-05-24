import { Message } from 'discord.js';

import { Command } from '../abstractions/command';

export class AddMovie extends Command {
  text = "addMovie";

  execute(msg: Message) {
    if (msg.content === this.commandText()) {
      msg.reply("you've added a movie");
    }
  }
}
