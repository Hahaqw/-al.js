const play = require('discordjs-ytdl')
const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "çal",
    async run (client, message, args){
        if (message.member.voice.channel){
            const embed = new MessageEmbed()
            .setTitle('Şarkı bulundu')
            .setColor('GREEN')
            .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            const connection = await  message.member.voice.channel.join()
              play.play(connection, args.join(" "), 'YOUTUBE APİ')
              let title = play.title(args.join(" "), 'YOUTUBE APİ')
        title.then(titlee => embed.addField('VİDEO BAŞLIĞI: ', titlee))
        let kanal = play.channel(args.join(" "), 'YOUTUBE APİ')
    kanal.then(titlee => embed.addField('KANAL ADI: ', titlee))
      let id = play.id(args.join(" "), 'YOUTUBE APİ')
    id.then(titlee => embed.addField('VİDEO IDSI: ', titlee))
    setTimeout(function () {
          message.channel.send(embed)
    }, 2500);

        } else {
            message.reply('Bir kanala katılmalısın.')
        }
    }
}

//////////////////////////BOT MAİN/////BUNU BOT.js ye atın atmassanız çalışmaz///////////7
const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
}
