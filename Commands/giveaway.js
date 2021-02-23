const Discord = require('discord.js');
const db = require("quick.db")
const data = new db.table("CekList")

module.exports = {
    enabled: true,
    name: "giveaway",
    aliases: [],
    description: "FAKE CEKILIS LOL",

    async run(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({
            embed: {
                color: "RED",
                description: "**No permission lol :D**"
            }
        })
        // kullanım: .giveaway gün miktar AÇIKLAMA
        if(!args[0]) return message.channel.send("Usage: .giveaway <time> <winner count> <title>")
        if(args.length < 3) return message.channel.send("Usage: .giveaway <time> <winner count> <title>")

        var newArgs = args.slice(2);
        var addDate, dateFunc;
        
        try {
            if(args[0].length == 2) throw "lol";
            addDate = Number(args[0])
            dateFunc = "d"
        } catch {
            if(args[0].length == 2) {
                if(args[0][1] == "h") {
                    addDate = Number(args[0][0])
                    dateFunc = "h"
                }
            } else {
                return message.channel.send("Usage: .giveaway <time> <winner count> <title>")
            }
        }
        var winnerCount;
        try {
            winnerCount = Number(args[1])
        } catch {
            winnerCount = 1
        }
        Date.prototype.addHours = function(hours) {
            var date = new Date(this.valueOf());
            date.setHours(date.getHours() + hours);
            return date;
        }
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        var date = new Date();
        if(dateFunc == "h") {
            date = date.addHours(addDate)
        } else if(dateFunc == "d") {
            date = date.addDays(addDate)
        }
        var datestr = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()} (UTC+0)`
        await data.set("Cekilis", {desc: newArgs.join(" "), count: winnerCount})
        
        const embed = {
            color: "RANDOM",
            title: `:tada: J4J HOUSE GIVEAWAY :tada:`,
            description: `**:gift: Award:** ${newArgs.join(" ")}\n**:heart_decoration: Winner Count:** ${winnerCount}\n**:calendar: Last Join Date:** ${datestr}\n\n**React :white_check_mark: to join!**`,
            footer: {
                text: "J4J HOUSE BOT :heart:"
            }
        }
        var msg = await message.channel.send({embed: embed})
        await msg.react("✅");
    }
}