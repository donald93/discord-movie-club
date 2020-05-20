import { Command } from "../command";

export class EndCategory extends Command {
  text = "endCategory";

  execute(msg: any) {
    if (msg.content === this.commandText()) {
      msg.reply("you've ended the category");
    }
  }
}
