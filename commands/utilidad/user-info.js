module.exports = {
	name: 'user-info',
	description: 'Muestra información sobre ti.',
	execute(message) {
		message.channel.send(`Nombre de usuario: ${message.author.username}\nID: ${message.author.id}`);
	},
};