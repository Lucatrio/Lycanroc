const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Here is a picture of a doggo')
    .setImage(body.url);

    message.channel.send(embed);

}

module.exports.help = {
  name: "doggo"
}
