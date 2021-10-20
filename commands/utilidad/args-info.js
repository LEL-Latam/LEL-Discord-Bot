module.exports = {
	name: 'args-info',
	description: 'Información sobre los argumentos aportados.',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Primer argumento: ${args[0]}`);
	},
};