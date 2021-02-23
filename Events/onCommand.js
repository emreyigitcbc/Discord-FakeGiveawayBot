const { client } = require('../index');

client.on("message", async message => {
	if (message.author.type == "bot") return;
	if (message.channel.type === 'dm') return;
	var prefix = "."
	if (message.content.startsWith(prefix)) {
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();
		if (client.commands.has(command)) {
			cmd = client.commands.get(command)
		} else {
			cmd = client.commands.get(client.aliases.get(command));
		}
		if (cmd) {
			try {
				cmd.run(client, message, args);
			} catch {

			}
		}
	}
})

module.exports = {
	name: "onMessage",
	description: "When someone send message.",
	enabled: true
}