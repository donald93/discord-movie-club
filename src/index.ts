import * as discord from 'discord.js';
import * as firebase from 'firebase';

import { discordToken, firebaseConfig } from './config';
import { getCommands } from './get-commands';

const client = new discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (msg) => {
  getCommands().forEach((command) => command.execute(msg));
});

client.login(discordToken);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
