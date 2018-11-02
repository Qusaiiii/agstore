const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
client.on('ready', () => console.log('Im Ready For Sell! AG STORE'));


client.on('message', async msg => {
let vip;
msg.channel.send("ماذا تبيع ؟").then(ms => {
let c = msg.guild.channels.find(c => c.name === "vip-shop")
 if (!message.member.roles.find('name', 'Vip seller')) return message.reply('**هذا الامر مخصص فقط للـ VIP SELLER !**').then(message => message.delete(3000));
  if (msg.content === '!sellv') {
    let cK = await msg.channel.awaitMessages(m => m.id = msg.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
vip = co.first().content
})
let price;
msg.channel.send("السعر؟").then(ms => {
    let cK = await msg.channel.awaitMessages(m => m.id = msg.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
price = co.first().content
})
c.send(vip)
})
  }
});


client.login(process.env.BOT_TOKEN); 
