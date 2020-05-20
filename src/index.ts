import { getCommands } from './get-commands';

const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (msg) => {
  getCommands().forEach((command) => command.execute(msg));
});

client.login("");
