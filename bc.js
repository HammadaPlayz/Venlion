const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply('Hello!');
  }
});
client.on('message',msg => {
	if (msg.content === 'Bye') {
		msg.reply('CYAA!');
		} 
	});
	
         client.on('message', message => {
            if (message.content === 'alsalam alekom') {
              msg.reply('وعليكم السلام');
            }
         });
client.on('ready', () => {
  client.user.setGame(` VenlionMC` );
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links On Venlion ! **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links On Venlion ! **`)
    }
});


client.on('guildMemberAdd', (member) => {
    const logChannel = member.guild.channels.find(channel => channel.name === 'welcome');
    if (!logChannel) return undefined;
    logChannel.send(`***${member.user.tag} Welcome To Venlion!!.***`);
});

client.on('guildMemberRemove', (member) => {
    const logChannel = member.guild.channels.find(channel => channel.name === 'welcome');
    if (!logChannel) return undefined;
    logChannel.send(`***${member.user.tag} Peace You Will Be Missed!***.`);
});
client.on('guildMemberAdd', msg => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setThumbnail(msg.user.avatarURL)
    .setTitle('New Member!')
    .setDescription('Welcome To Venlion')
    .addField('**ID Member:',"" +  msg.user.id, true)
    .addField('**Member Created At', msg.user.createdAt, true)
    .addField(' 👤   **You are Number',`**[ ${msg.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter(msg.guild.name, msg.guild.iconURL, true)
    var channel = msg.guild.channels.find('name', 'welcome')         
    if (!channel) return;
    channel.send({embed : embed});
    });
	
   var prefix = "-";
var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});






console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const Hamada = [
   '*** Hey Im baldi nice to meet you***',
   '*** welcome to my school house! ***',
   `*** Its time for everybodys favourite subject maths!  ***`,
   '*** Collect all 7 note book to get outta here! ***',
   '*** GET OUT MY SCHOOL HOUSE ***',
   '*** hAhAhAhA ***',
   '*** >:D ***',
]
 client.on('message', message => {
 if (message.content.startsWith('$Baldi')) {
  var Baldi= new Discord.RichEmbed()
  .setTitle("Baldi Basics")
  .setColor('RANDOM')
  .setDescription(`${Hamada[Math.floor(Math.random() * Hamada.length)]}`)
   message.channel.sendEmbed(Baldi);
   message.react("??")
  }
});



client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "clear")) {
				if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ theres no remove perms ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done",
        color: 0x06DF00,
        description: "Remove succsed",
        footer: {
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});



client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});

var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("MANAGE_MESSAGES"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :Pepole that got the message`); 
 message.delete(); 
};     
});



   var prefix = "-";
var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});




 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on VenlionMC" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});
client.on('message', message => {
  if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$bc')){
	 if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('**You do not have perms do not try!**');
message.channel.sendMessage('Sending message please wait!')
client.users.forEach(m =>{
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
m.send({ embed: bc })
})
}
});





client.login("NTIwNjEzNTcyNTY1MjcwNTU4.DuwawA.M_V79Us6Wq6ZOK7tfYP5Dqymk5k");