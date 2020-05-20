import { Command } from '../abstractions/command';

export class GetTheme extends Command {
  text = "getTheme";

  execute(msg: any) {
    if (msg.content === this.commandText()) {
      msg.reply("you've gotten the theme");
    }
  }
}
