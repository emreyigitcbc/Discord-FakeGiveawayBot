const { client } = require('../index');
const Discord = require("discord.js")

client.on("ready", async () => {
    dat = new Date();
    date = dat.getDate() + "/" + dat.getMonth() + "/" + dat.getFullYear() + " " + dat.getHours() + "." + dat.getMinutes()
    console.log("====[ FAKE GIVEAWAY ]====".blue)
    console.log("Logged in as: ".gray+ client.user.tag.green);
    console.log("Login date: ".gray + date.green)
    console.log("====================".blue)
    client.user.setPresence({ activity: { name: "EMRE CEBECI" }, status: 'dnd' })
    setInterval(() => {
        client.user.setPresence({ activity: { name: "EMRE CEBECI" }, status: 'dnd' })
    }, 300 * 1000) // ping every 5 mins
});

module.exports = {
    name: "onReady",
    description: "When the bot ready.",
    enabled: true
}
