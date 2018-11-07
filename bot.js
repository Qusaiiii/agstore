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
let ms =  msg.channel.send("ماذا تريد ان تبيع؟").then
 let co = await msg.channel.awaitMessages(m => m.id = msg.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
vip = co.first().content
 })
 ms.edit("السعر ?").then
 let cp = await msg.channel.awaitMessages(m => m.id = msg.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
price = co.first().content
 })
 ms.edit("الوصف ?").then
 let cd = await msg.channel.awaitMessages(m => m.id = msg.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
desc = co.first().content
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
        c.send("@everyone", {embed})
    }
});

client.on('message', message => {
let vip;
let price;
let desc;
   let c = message.guild.channels.find(c => c.name === "vip-shop")
    if (message.content.startsWith("!sellv")) {
      if (message.author.bot) return
                                     }
 let ms = message.channel.send({embed: new Discord.RichEmbed().setTitle('ماذا تريد ان تبيع؟').setColor(0xFF0000)}).then(function(m) {
 let co = await message.channel.awaitMessages(m => m.id = message.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
vip = co.first().content
 },
    setTimeout(function() {
    ms.edit({embed: new Discord.RichEmbed().setTitle('السعر؟').setColor(0xFF0000)})
   let cp = await message.channel.awaitMessages(m => m.id = message.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
price = co.first().content
             },
            setTimeout(function() {
               ms.edit({embed: new Discord.RichEmbed().setTitle('وصف السلعة؟').setColor(0xFF0000)})
      let cd = await message.channel.awaitMessages(m => m.id = message.author.id, { time: 5000, max: 1 }).then(co => {
if(co.first().length < 1) return;
desc = co.first().content
             },
        var embed = new Discord.RichEmbed()
        .setTitle('**AG VIP STORE**')
        .setColor("RANDOM")
        .setThumbnail(`${message.author.avatarURL}`)
        .addField('البائع', `<@${message.author.id}>`)
        .addField('السلعة', vip)
        .addField('السعر', price)    
        .addField('الوصف', desc);
            message.channel.send(`**تم نشر السلعة** :white_check_mark: `)
            message.delete();
        c.send("@everyone", {embed})
   }
                       })
                                                                                                                  

 });         


client.login(process.env.BOT_TOKEN); 
