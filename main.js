const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const events = require('./events.js');
const reactionrole = require('./reaction-role.js');

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} server(s)!`);
  client.user.setActivity(`over ${client.users.size} users and ${client.guilds.size} servers`, {type: "WATCHING"});
  client.user.setStatus('dnd');
});

client.on("guildMemberAdd", async () => {
  client.user.setActivity(`over ${client.users.size} users and ${client.guilds.size} servers`, {type: "WATCHING"});
});

client.on("guildMemberRemove", async () => {
  client.user.setActivity(`over ${client.users.size} users and ${client.guilds.size} servers`, {type: "WATCHING"});
});

client.on("guildCreate", async () => {
  client.user.setActivity(`over ${client.users.size} users and ${client.guilds.size} servers`, {type: "WATCHING"});
});

client.on("guildRemove", async () => {
  client.user.setActivity(`over ${client.users.size} users and ${client.guilds.size} servers`, {type: "WATCHING"});
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

});
client.login(config.token);
