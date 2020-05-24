import { Message } from 'discord.js';

import { Command } from '../abstractions/command';
import { ClubRepository } from '../repositories/club-repository';

export class Initialize extends Command {
  text = "init";
  clubRepo = new ClubRepository();

  execute(msg: Message) {
    if (msg.content === this.commandText()) {
      const guildId = msg.guild.id;

      const club = {
        id: guildId,
        themes: [],
        currentTheme: null,
        currentMovie: null,
        currentPoll: null,
      };

      this.clubRepo.addItem(club);
      //   msg.reply("you've initialized the bot for this server");
    }
  }
}
