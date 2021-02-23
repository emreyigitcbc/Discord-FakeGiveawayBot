const Discord = require('discord.js');
const db = require("quick.db")
const data = new db.table("FakeListe")

module.exports = {
    enabled: true,
    name: "fakelist",
    aliases: [],
    description: "lol",

    async run(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({
            embed: {
                color: "RED",
                description: "**No permission lol :D**"
            }
        })
        if (!args[0]) {
            return message.channel.send("Wrong usage.")
        } else {
            var member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
            if (!member) {
                return message.channel.send("Not a valid member.")
            }
            if (args[0] == "add") {
                if (!data.has("FakeListe")) {
                    await data.set("FakeListe", [member.id]);
                    return message.channel.send("Member added to fake list :D");
                } else {
                    var fakeList = data.fetchAll()[0]
                    var liste = fakeList.data;
                    if (liste.includes(member.id)) {
                        return message.channel.send("Member already in the list..");
                    } else {
                        data.push("FakeListe", member.id);
                        return message.channel.send("Member added to fake list :D");
                    }
                }
            } else if (args[0] == "del") {
                if (!data.has("FakeListe")) await data.set("FakeListe", []); else {
                    var liste = data.get("FakeListe");
                    if (liste.includes(member.id)) {
                        liste.splice(liste.indexOf(member.id), 1);
                        data.set("FakeListe", liste)
                        return message.channel.send("Member removed from fake list.");
                    } else {
                        return message.channel.send("Member is not in the fake list?");
                    }
                }
            } else {
            }
        }
    }
}