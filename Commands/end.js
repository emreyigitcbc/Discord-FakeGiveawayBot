const Discord = require('discord.js');
const db = require("quick.db")
const data = new db.table("FakeListe")
const cek = new db.table("CekList")
module.exports = {
    enabled: true,
    name: "end",
    aliases: [],
    description: "end lol",

    async run(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({
            embed: {
                color: "RED",
                description: "**No permission lol :D**"
            }
        })
        var fakeList = data.fetchAll()[0]
        var allFakes = fakeList.data;
        if(!cek.has("Cekilis")) return;
        var cekilis = cek.get("Cekilis");
        var selectedFakes = []
        var now = 0;
        if(allFakes.length < cekilis.count ) return message.channel.send("Can't end giveaway please try again later.");
        while(cekilis.count > now) {
            var selectedFake = allFakes[Math.floor(Math.random() * allFakes.length)]
            if(!selectedFakes.includes(`<@`+selectedFake+`>`)){
                selectedFakes.push(`<@`+selectedFake+`>`)
                now += 1
            }
        }
            
        const embed = {
            color: "RANDOM",
            title: ":tada: GIVEAWAY ENDED :tada:",
            description: `**:gift: Award:** ${cekilis.desc}\n\n**:heart_decoration: Winner Count:** ${cekilis.count}\n\n**:heart: :partying_face: Winners:** ${selectedFakes.join(" ")} :partying_face:`
        }
        message.channel.send({embed: embed})

    }
}