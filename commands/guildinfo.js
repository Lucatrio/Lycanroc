const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var oof = message.guild.iconURL;
    let botembed = new Discord.RichEmbed()
    .setDescription(`${message.guild}'s information`)
    .setColor("RANDOM")
    .setThumbnail(oof)
    .addField("Guild Name", message.guild)
    .addField("Guild ID", message.guild.id)
    .addField("Acronym", message.guild.nameAcronym)
    .addField("Owner", message.guild.owner)
    .addField("Verification Level", message.guild.verificationLevel)
    .addField("Large (250 and up)", message.guild.large)
    .addField("Created On", message.guild.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name: "guildinfo"
}
