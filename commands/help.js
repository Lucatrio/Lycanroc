const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`I've sent you a direct message of help commands`)
    .setTimestamp()
    .setFooter(`Thanks, ${message.author.tag}`)

    message.channel.send(embed);
    message.react('👍')

}

module.exports.help = {
  name: "help"
}
