// suggest.js
const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please mention a channel")
    }

    if (!suggestmessage) {
        return message.reply("Please give a valid suggestion")
    }

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(`${message.guild}'s suggestion system`, `${suggestmessage}`)
        .setFooter(`Suggested By ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("👍").then(r => msg.react("👎"))
    });


    message.channel.send(`${message.author} your suggestion has been sent and will be viewed as soon as possible`)
    return;

}

module.exports.help = {
  name: "suggest"
}
