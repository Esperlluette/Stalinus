const { Client, Message, MessageEmbed, MessageReaction, ReactionEmoji, UserContextMenuInteraction } = require("discord.js");
const { PREFIX, TOKEN } = require("./config.json");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] });
const colors = require('colors');

client.on("ready", () => {

    client.user.setPresence({
        activities: [{
            name: "Envoyer des innocents en sibérie"
        }],
        status: "online"
    })

    console.log('-*-*-*-*-*-*-*-*-*- Bot ok -*-*-*-*-*-*-*-*-*-'.blue);
})


client.on("messageCreate", async(message) => {

    if (message.content.startsWith(PREFIX)) {
        const input = message.content.slice(PREFIX.length).trim().split(" ");
        // console.log(message.content.slice(PREFIX.length).trim().split(" "));
        const command = input.shift();
        switch (command) {
            case "Stalinus":
                message.channel.send("Je suis Stalinus un robot codé par le plus grand développeur de cet univers. \n je suis actuellement dans ma version 1.2 ");
            case "help":
                message.channel.send("Voici la liste des commandes disponibles: \n - **help** : \n        _Affiche l'aide du bot_ \n - **bagarre** : \n        _Pour se bagarrer avec les gens_ \n - **ratio** : \n        _permet de ratio quelqu'un_ \n - **gulag** : \n         _permet d'envoyer quelqu'un loin en sibérie_" +
                    "\n - **ping** : \n         _pong_ \n - **pong** \n         _ping_");
                message.delete();
                break;
            case "gulag":
                break;
            case "bagarre":
                if (input[0] === undefined) {
                    message.reply("Viens là enculé  (ง’̀-‘́)ง");
                } else {
                    message.channel.send(input[0] + " Viens là enculé  (ง’̀-‘́)ง");
                }
                break;
            case "clear":
                break;
            case "ratio":
                message.reply("Déjà, ratio.");
                if (input[0] != undefined) {



                    try {
                        const id = input[0].slice(3).split(">")
                        const user = client.users.cache.get(id[0]);
                        console.log(id[0].green);
                        console.log(user.username);
                        // if (!user) return console.log("Couldn't find the user");
                        if (user.username === "Stalinus") {
                            message.reply("Et en prime gulag.");
                        } else {
                            message.channel.send("Je ratio <@" + user.id + ">");
                        }

                    } catch (error) {
                        console.log("erreur mais c'est rien c'est la rue");
                    }
                    if (input[0] === "Stalinus") {
                        message.reply("Et en prime gulag.");
                    } else {
                        message.channel.send("Je ratio " + input);
                    }
                } else {
                    setTimeout(() => {
                        message.reply("Personne a ratio donc double ratio.");
                    }, 2000);
                    var math = Math.floor(Math.random() * 9)
                    if (math === 1) {
                        setTimeout(() => {
                            message.reply("Aller un troisième pour la route.");
                        }, 3000);
                    }
                }
                break;
            case "ping":
                message.reply("pong");
                break;
            case "pong":
                message.reply("ping");
                break;
            default:
                message.reply("cette commande est inconnue");
                break;
        }
    }
})


client.login(TOKEN);