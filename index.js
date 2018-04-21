const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.API_KEY, {
  polling: true
});

bot.onText(/\/start/, msg => bot.sendMessage(msg.chat.id, "Ja ne"));

bot.onText(/(ja)|(geil(e|a|er|es)?)|(voll)|(fuk)|(fik)|(scheiße?)|(funzt)|(best?.{1,}(ev(e{0,}|a{0,})(r{0,})?))/i, msg => bot.sendMessage(msg.chat.id, "Ja ne"));
