import dotenv from "dotenv";
dotenv.config();
import elizabot from "./elizabot.js";

import fs from "fs";
const aliceInWonderland = fs.readFileSync("alice.txt", "utf-8");
const lines = aliceInWonderland.split(/\r?\n/);

lines.forEach(line => {
    const response = elizabot.reply(line);
    console.log(response);
})


/* import { Client, Intents } from "discord.js";
const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async message => {
    if (message.author.bot) return;

    console.log(message.content);


    // message.react("🍎");

    const botResponse = elizabot.reply(message.content); 
    await message.channel.send(botResponse);

    // if (message.content.toLowerCase().includes("bot")) {
    //     await message.channel.send(message.content.replaceAll(/bot/ig, "human"));
    // }

    // if (message.content.toLowerCase().includes("ping me")) {
    //     message.channel.send("pong you");
    // }

}); */


/* client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('I lied! I am not going to reply with pong. Oops I just did.');
    }
}); */
