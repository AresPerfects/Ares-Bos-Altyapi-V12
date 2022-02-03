const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`${client.user.tag} adı ile giriş yapıldı!`);
});

// BOT AKTİF OLDUGUNDA ATACAK LOG

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('Pong!');
	}
}); // MESAJ TESTİ DENERSINIZ


// Bot başlatma kodu.
client.login('Botunuzun Tokeni');