const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const handlers = require('./handlers');

console.log('Iniciando o bot...');

// Função para inicializar o bot e capturar erros
function startBot() {
  try {
    // Criar uma instância do bot
    const bot = new TelegramBot(config.token, config.options);

    // Configurar manipuladores de eventos
    handlers.setupHandlers(bot);

    console.log('Bot iniciado com sucesso!');
  } catch (error) {
    // Caso ocorra algum erro na inicialização
    console.error('Erro ao iniciar o bot:', error);
  }
}

// Iniciar o bot
startBot();