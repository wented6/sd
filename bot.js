const Discord = require('discord.js');


const client = new Discord.Client();







});

    console.log("oNNN1");
client.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("517077578515742781");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`Welcome To **Black Sky ..**`), 4000)
}
});











client.login(process.env.B);
