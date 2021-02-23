const Discord = require("discord.js")
const client = new Discord.Client();

require('./handler.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.wait = require('util').promisify(setTimeout);


module.exports = {
  client: client
};

client.login("tokenlol")