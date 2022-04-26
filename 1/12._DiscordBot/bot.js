import dotenv from "dotenv";
dotenv.config();

import { Client, Intents } from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

import eliza from "./elizabot.js";

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    // message.react("🍆");
   
    if (message.content.toLowerCase().includes("bot")) {
        const reply = message.content.replace(/bot/ig, "human");
        message.channel.send(reply);
    } else {
        const reply = eliza.reply(message.content);
        message.channel.send(reply);
    }
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'shakira') {
		await interaction.reply("💃 These hips don't lie 💃");
	}
});

client.login(process.env.DISCORD_BOT_TOKEN);