const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const handlers = require('./handlers');

console.log('Iniciando o bot...');

// Criar uma instância do bot
const bot = new TelegramBot(config.token, config.options);

// Configurar manipuladores de eventos
handlers.setupHandlers(bot);

console.log('Bot iniciado com sucesso!');
