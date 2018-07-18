const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

  let announcement = args.join(" ");

  let channel = message.guild.channels.find("name", "announcements")
  if (!channel) return message.channel.send('The channel announcements does not exist');
  message.delete();

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('📢 Cloudy Host - Announcement System 📢')
    .addField('Information', `Announcements are managed by the creator\'s of guilds (${message.guild.owner} in ${message.guild})`)
    .addField('Announcement', `${announcement}`)

    channel.send(embed);
}

module.exports.help = {
    name: "announce"
}
