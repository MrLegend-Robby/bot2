const Discord = require("discord.js");
const bott = new Discord.Client();
const prefix = '*';


const colors = ['92ce14', '4bd588', '4bd5b9', 'd54b76',];
function color () {
  colors.forEach(function (item, number) {
      setTimeout(function () {bott.guilds.get('432926249006923806').roles.get('441148168730574858').setColor(item).catch();if(number === colors.length-1) setTimeout(function () {color()}, 2000)}, number*2000);
  });
}
 
bott.on('ready', () => {
  console.log(`Logged in as ${bott.user.tag}!`);
  bott.user.setPresence({ game: { name: `на Зиммера`, type: 3 } }).catch();
color ();
});

bott.on('message',(message) => {
  if(message.content == "Привет") {
    message.reply("пока");
  }
});

bott.on('message',(message) => {
  if(message.content == "Dogy") {
    message.channel.send(":d_:");
  }
});

 
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