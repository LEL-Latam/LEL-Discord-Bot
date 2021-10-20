const { prefix } = require('../../config.json');

module.exports = {
	name: 'help',
	description: 'Lista de mis comandos o información sobre uno en específico.',
	aliases: ['comandos'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aquí hay una lista de todos mis comandos:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nPuedes enviar \`${prefix}help [command name]\` para obtener información sobre un comando específico!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('¡Te envié un DM con todos mis comandos!');
				})
				.catch(error => {
					console.error(`No se pudo enviar ayuda DM a ${message.author.tag}.\n`, error);
					message.reply('¡Parece que no puedo enviarte un mensaje de texto!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('¡Ese no es un comando válido!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};