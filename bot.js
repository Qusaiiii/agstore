const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
  console.log(`IM READY FOR SELL!, ${client.user.tag}!`);
});

client.on('message', async msg => {
let vip;
let price;
let desc;
let c = msg.guild.channels.find(c => c.name === "vip-shop")
  if (msg.content === '!sellv') {
msg.channel.send("ماذا تبيع ؟").then(ms => {
    let c = msg.channel.awaitMessages(m => m.id = msg.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
vip = co.first().content
})
 ms.edit("السعر ?")
 let cp = msg.channel.awaitMessages(m => m.id = msg.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
price = co.first().content
})
 ms.edit("الوصف ?")
 let cd = msg.channel.awaitMessages(m => m.id = msg.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
decs = co.first().content
 })
        var embed = new Discord.RichEmbed()
        .setTitle('**AG VIP STORE**')
        .setColor("RANDOM")
        .setThumbnail(`${msg.author.avatarURL}`)
        .addField('البائع', `<@${msg.author.id}>`)
        .addField('السلعة', vip)
        .addField('السعر', price)    
        .addField('الوصف', desc);
            msg.channel.send(`**تم نشر السلعة** :white_check_mark: `)
            msg.delete();
        c.send({embed})
    
});

client.login(process.env.BOT_TOKEN); 
