import { Message } from 'discord.js';

import { Command } from '../abstractions/command';

export class GetTheme extends Command {
  text = "getTheme";

  execute(msg: Message) {
    if (msg.content === this.commandText()) {
      msg.reply("you've gotten the theme");
    }
  }
}
