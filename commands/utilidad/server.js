  
module.exports = {
	name: 'server',
	description: 'Muestra información sobre este servidor.',
	execute(message) {
		message.channel.send(`Nombre del server: ${message.guild.name}\nTotal de miembros: ${message.guild.memberCount}`);
	},
};