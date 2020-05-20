import { Command } from "../command";

export class SelectMovie extends Command {
  readonly text = "selectMovie";

  execute(msg) {
    if (msg.content === this.commandText()) {
      msg.reply("you've selected a movie");
    }
  }
}
