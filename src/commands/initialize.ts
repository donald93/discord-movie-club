import { Message } from 'discord.js';

import { Command } from '../abstractions/command';
import { ClubRepository } from '../repositories/club-repository';

export class Initialize extends Command {
  text = "init";
  clubRepo = new ClubRepository();

  async execute(msg: Message) {
    if (msg.content === this.commandText()) {
      if (!!msg.guild) {
        const guildId = msg.guild.id;

        const club = {
          id: guildId,
          themes: [],
          currentTheme: null,
          currentMovie: null,
          currentPoll: null,
        };

        const added = (await this.clubRepo.addItem(club)) !== "";

        if (added) {
          msg.channel.send("You've initialized the bot for this server.");
        } else {
          msg.channel.send("A club on this server already exists.");
        }
      } else {
        msg.channel.send(
          "You may not initialize a movie club from a direct message."
        );
      }
    }
  }
}
