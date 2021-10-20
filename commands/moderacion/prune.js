module.exports = {
	name: 'prune',
	description: 'Elimina hasta 99 mensajes.',
	aliases: ['borrar'],
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('eso no parece ser un número válido.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('debe ingresar un número entre 1 y 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('¡Hubo un error al intentar eliminar los mensajes en este canal!');
		});
	},
};