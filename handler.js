const fs = require("fs");
const Table = require('cli-table3');
var colors = require('colors');

const utilitytable = new Table({
    head: ["File Name", 'Command', 'Aliases', "Description", "Status"]
});
const eventtable = new Table({
    head: ["File Name", 'Event', "Description"]
});


module.exports = (bot) => {
    // EVENTS
    fs.readdir("./Events/", (err, files) => {
        if (err) console.error(err);
        let eventFiles = files.filter(f => f.split(".").pop() === "js");
        if (eventFiles.length <= 0) return console.log("NO EVENT FOUND!".red);
        console.log(`Loading ${eventFiles.length} events...`.yellow);
        eventFiles.forEach((f, i) => {
            var cache = require(`./Events/${f}`);
            eventtable.push([f, cache.name ? cache.name : "---", cache.description ? cache.description : "-----"])
        });
        console.log(eventtable + "");
    });

    // COMMANDS
    fs.readdir("./Commands/", (err, files) => {
        if (err) console.error(err);
        let cmdFiles = files.filter(f => f.split(".").pop() === "js");

        if (cmdFiles.length <= 0) return console.log("NO COMMAND FOUND!".red);

        console.log(`Loading ${cmdFiles.length} commands...`.yellow);
        cmdFiles.forEach((f, i) => {
            var props = require(`./Commands/${f}`);
            if (props.enabled) {
                utilitytable.push([f, props.name, props.aliases.join("\n"), props.description, "ACTIVE".green])
                bot.commands.set(props.name, props);
                props.aliases.forEach(alias => {
                    bot.aliases.set(alias, props.name);
                });
            } else if (props.enabled != undefined){
                utilitytable.push([f, props.name, props.aliases.join("\n"), props.description, "DEACTIVE".red])
            }
        });
        console.log(utilitytable + "");
    });
};