const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Sorry, you do not have the following permission(s) `MANAGE_MESSAGES`');
  if(!args[0]) return message.channel.send("Sorry, you did not use the correct usage for this command `l!clear (message count)`");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Hey, ${message.author.tag} I have deleted ${args[0]} messages for you`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
