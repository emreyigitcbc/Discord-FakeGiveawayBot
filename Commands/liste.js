const Discord = require('discord.js');
const db = require("quick.db")
const data = new db.table("FakeListe")
module.exports = {
    enabled: true,
    name: "listfakes",
    aliases: [],
    description: "liste",

    async run(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({
            embed: {
                color: "RED",
                description: "**No permission lol :D**"
            }
        })
        var fakeList = data.fetchAll()[0] || {data:[]}
        var kisiler = fakeList.data;

        var mesaj = ""
        if(kisiler.length == 0) return message.channel.send("Empty :D")
        kisiler.forEach((kisi, index) => {
            mesaj += `${index + 1} - <@${kisi}> \`(${kisi})\`\n`
        })
        message.channel.send({
            embed: {
                color: "RANDOM",
                description: `**FAKE GUYS FULL LIST:** \n${mesaj}`
            }
        })
    }
}