const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#ff9900")
  .addField("Member commands", "+help, +serverinfo, +botinfo, +report @user, +cat , +dog, +8ball followed by your question ");

  message.channel.send(helpembed);
  if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setDescription("Mod Help Menu")
    .setColor("#ff9900")
    .addField("Mod Commands", "addrole, removerole, kick, warn, warnlevel, ban");

    try{
      await message.author.send(modembed);
    }catch(e){
      message.reply("Your DMs are Locked, I cannot send you the mod commands at this time");
    }
}

}

module.exports.help = {
  name: "help"
}
