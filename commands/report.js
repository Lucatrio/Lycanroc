const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send(`Sorry, ${message.author.tag} that user doesn't exist`);
  let rreason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription(`Reports for ${message.guild.name} (${message.guild.id})`)
  .setColor("RANDOM")
  .addField('Reported User', `${rUser} with ID: ${rUser.id}`)
  .addField('Reported By', `${message.author} with ID: ${message.author.id}`)
  .addField('Channel', message.channel)
  .addField('Time', message.createdAt)
  .addField('Reason', rreason)

  let reportschannel = message.guild.channels.find("name", "reports");
  if(!reportschannel) return message.channel.send('Sorry the default channel (**reports**) was not found please make the channel or change the report channel or disable this plugin.');

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}
