const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('message', async message => {

client.on('guildMemberAdd', (GuildMember) => {

  let aigs = client.guilds.find("id", "463226021882363914");
  let aigsc = aigs.channels.find("id", "463324205014843392");
  let channel = message.guild.channels.find("name", "member-log")

  aigscsend(`${GuildMember} has joined ${GuildMember.guild.name}, we have been waiting for your arrival`);
  if(!agis) return channel.send(`${GuildMember} has joined ${GuildMember.guild.name}`);
});
});
client.login(config.token);
