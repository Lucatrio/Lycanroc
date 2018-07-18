const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setDescription(`Statistics`)
    .setColor("BLUE")
    .addField('Servers', bot.guilds.size)
    .addField('Users', bot.users.size)

    message.channel.send(embed);
}

module.exports.help = {
  name: "stats"
}
