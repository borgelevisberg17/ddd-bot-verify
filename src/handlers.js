const commands = require('./commands');

/**
 * Configura os manipuladores de eventos do bot
 * @param {Object} bot - Instância do bot
 */
function setupHandlers(bot) {
  // Manipular comando /start
  bot.onText(/\/start/, (msg) => {
    commands.handleStart(bot, msg);
  });
  
  // Manipular comando /help
  bot.onText(/\/help/, (msg) => {
    commands.handleHelp(bot, msg);
  });
  
  // Manipular comando /ddd
  bot.onText(/\/ddd\s*(\d*)/, (msg, match) => {
    const ddd = match[1];
    if (ddd) {
      commands.handleDDDCheck(bot, msg, ddd);
    } else {
      bot.sendMessage(msg.chat.id, 'Por favor, forneça um DDD. Exemplo: /ddd 11');
    }
  });
  
  // Manipular mensagens de texto (DDD direto)
  bot.on('message', (msg) => {
    // Ignorar comandos
    if (msg.text && !msg.text.startsWith('/')) {
      const text = msg.text.trim();
      
      // Verificar se o texto é apenas um número de DDD
      if (/^\d{2}$/.test(text)) {
        commands.handleDDDCheck(bot, msg, text);
      }
    }
  });
  
  // Manipular erros
  bot.on('polling_error', (error) => {
    console.error('Erro de polling:', error);
  });
}

module.exports = {
  setupHandlers
};
