const TelegramBot = require('node-telegram-bot-api')

const token = 'token'

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        "Welcome to mountain bot " + msg.from.first_name + '\n How old are you?',
        {
            reply_markup: {
                keyboard: [
                    ['10-20', '20-30'], ['30-40', '40-50'], ['50 and more']
                ]
            }
        }
    );
})

bot.on('message', (msg) => {

    console.log('new message is: ', msg)

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

    var child = "10-20";
    if (msg.text.indexOf(child) === 0) {
        bot.sendMessage(msg.chat.id, "You are just a child");
    }

    var young = "20-30";
    if (msg.text.indexOf(young) === 0) {
        bot.sendMessage(msg.chat.id, "You are a fresh young so try a peak in height like 3000 - 4000");
    }

    var oldYoung = "30-40";
    if (msg.text.indexOf(oldYoung) === 0) {
        bot.sendMessage(msg.chat.id, "You have a lot of experience. try to go abroad");
    }

    var robot = "40-50";
    if (msg.text.indexOf(robot) === 0) {
        bot.sendMessage(msg.chat.id, "wow. you are getting old. maybe this is your last time that you have power");
    }

    var robot = "50 and more";
    if (msg.text.indexOf(robot) === 0) {
        bot.sendMessage(msg.chat.id, "You are dying. so go and ask for forgivness");
    }

});