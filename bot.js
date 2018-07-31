const Discord = require("discord.js");
const bott = new Discord.Client();
const prefix = '*';


const colors = ['92ce14', '4bd588', '4bd5b9', 'd54b76', '00edff', '0077ff', 'f2ff00', 'cbd073', 'd09573', 'f2070b',];
function color () {
  colors.forEach(function (item, number) {
      setTimeout(function () {bott.guilds.get('456532005580963850').roles.get('456533546580967429').setColor(item).catch();if(number === colors.length-1) setTimeout(function () {color()}, 1000)}, number*1000);
  });
}
 
bott.on('ready', () => {
  console.log(`Logged in as ${bott.user.tag}!`);
  bott.user.setPresence({ game: { name: `на Демона`, type: 3 } }).catch();
color ();
});

  bott.on('message',(message) => {
  if(message.content == "") {
    message.reply("");
  }
});

bott.on('guildMemberAdd', member => {
  bott.channels.get('441695408511647744').send(`Новый гражданин был зарегисрирован. Под именем ${member}! Первое что ты должен сделать, пойти к #джон, удачи!`)
});


bott.on('message',(message) => {
  if(message.content == "д") {
    message.channel.send("");
  }
});

bott.on('message',(message) => {
  if(message.content == "д") {
    message.channel.send("д");
  }
});

bott.on('message',(message) => {
  if(message.content == "д") {
    message.channel.send("");
  }
});

bott.on('message',(message) => {
  if(message.content == "д") {
    message.channel.send("");
  }
});

bott.on('message',(message) => {
  if(message.content == "д") {
    message.channel.send("");
  }
});

bott.on('message',(message) => {
  if(message.content == "Привет") {
    message.reply("**приветульки!)**");
  }
});
 
bott.on('message',(message) => {
  if(message.content == "д") {
    message.reply("д");
  }
});

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
  if(args[0] == "help"){
    message.reply("Usage: !ban <user> <reason>");
    return;
  }
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return errors.cantfindUser(message.channel);
  if(bUser.id === bot.user.id) return errors.botuser(message); 
  let bReason = args.join(" ").slice(22);
  if(!bReason) return errors.noReason(message.channel);
  if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#bc0000")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
}

module.exports.help = {
name:"ban"
}

bott.on('message', (message) => {
    if (message.content.startsWith('embed')) {
        let text = message.content.slice('embed'.length).trim().split(/\n/g);
        let embed = new Discord.RichEmbed();
        text.shift();
        text.forEach(function(item, number) {
          var re1='(\\.)';  // Any Single Character 1
          var re2='((?:[a-z][a-z]+))'; // Word 1
          var re3='(\\()';  // Any Single Character 2
          var re4='(.)';  // Any Single Character 3
          var re5='(.*?)';  // Word 2
          var re6='(.)';  // Any Single Character 4
          var re7='(\\))';  // Any Single Character 5
 
          var p = new RegExp(re1+re2+re3+re4+re5+re6+re7,["i"]);
          var m = p.exec(item);
          if (m != null)
          {
          var word1=m[2].replace(/</,"&lt;");
          var word2=m[5];
          if (word1 === 'setColor')
          embed.setColor(word2)
          if (word1 === 'setTitle')
          embed.setTitle(word2)
          if (word1 === 'setDescription')
          embed.setDescription(word2)
          if (word1 === 'setImage')
          embed.setImage(word2)
          if (word1 === 'setAuthor')
          embed.setAuthor(word2)
          if (word1 === 'setThumbnail')
          embed.setThumbnail(word2)
          }
        });
        message.channel.send({embed: embed});
    }
});
 
bott.login(process.env.TOKEN)