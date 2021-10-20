module.exports = {
	name: 'avatar',
	description: 'Obtenga la URL del avatar de los usuarios etiquetados o su propio avatar.',
	aliases: ['icon'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Tu avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};