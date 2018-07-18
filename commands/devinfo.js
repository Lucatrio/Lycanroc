const Discord = require('discord.js');
const config = require('../config.json')

module.exports.run = async (bot, message, args) => {

  let youtube = "[here](https://www.youtube.com/channel/UCAmMDRbsEOvz5vSk-m6idgw/)";
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('Developer', config.owner)
    .addField('Discriminator', config.discriminator)
    .addField('YouTube', youtube)

  message.channel.send(embed);
}

module.exports.help = {
  name: "devinfo"
}
