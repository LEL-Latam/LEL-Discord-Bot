module.exports = {
	name: 'kick',
	description: 'Etiqueta a un miembro y expulsalo.',
	aliases: ['botar'],
	guildOnly: true,
	permissions: 'ADMINISTRATOR',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('¡Necesitas etiquetar a un usuario para expulsarlo!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`Quieres expulsar a: ${taggedUser.username}`);
	},
};