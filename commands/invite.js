const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  let link = "https://discordapp.com/oauth2/authorize?client_id=468067999753175050&scope=bot";
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('Invite me', link)
    .addField('Server', 'https://discord.io/lycanroc')

    message.channel.send(embed);
}

module.exports.help = {
  name: "invite"
}
