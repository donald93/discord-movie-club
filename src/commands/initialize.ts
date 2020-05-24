import { Command } from '../abstractions/command';

export class Initialize extends Command {
  text = "init";

  execute(msg: any) {
    if (msg.content === this.commandText()) {
      const guild = msg.guild;
      //   msg.reply("you've initialized the bot for this server");
    }
  }
}
