const D1 = require('discord.js');




const p1 = new D1.Client();






    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("545257908334755852");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`You're in **Fearless** Welcome **..**`), 4000)
}
});













p1.login(process.env.B);
