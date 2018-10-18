const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // Create an event listener for messages
client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '+avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });

}

module.exports.help = {
  name: "avatar"
}