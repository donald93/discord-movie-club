import { Command } from "../command";

export class AddMovie extends Command {
  text = "addMovie";

  execute(msg: any) {
    if (msg.content === this.commandText()) {
      msg.reply("you've added a movie");
    }
  }
}
