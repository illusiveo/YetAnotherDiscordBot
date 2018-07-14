const Command = require('../Command');
const weirdo = '¡¢£¤¥¦§¨ª«¬¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž'
const nextWordChance = 0.15;

const info = {
    name: "broken",
    aliases: [],
    description: 'Print a weird text',
    runIn: ["text"],
    ownerOnly: false
}

class Broken extends Command {
    constructor(client) {
        super(client, info)
    }

    run(msg, args) {
        if (msg.deletable) {
            msg.delete();
        }

        var words = Math.floor(Math.random() * 30 + 20);
        var message = '';
        for (var i = 1; i <= words; i++) {
            message += weirdo.charAt(Math.floor(Math.random() * (weirdo.length - 1)));
            while (Math.random() >= nextWordChance) {
                message += weirdo.charAt(Math.floor(Math.random() * (weirdo.length - 1)));
            }
            message += ' ';
        }
        msg.channel.send(message)
    }
}

module.exports = Broken;