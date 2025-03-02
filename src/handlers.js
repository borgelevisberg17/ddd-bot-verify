const commands = require('./commands');

/**
 * Configura os manipuladores de eventos do bot
 * @param {Object} bot - Instância do bot
 */
function setupHandlers(bot) {
  // Manipular comando /start
  bot.onText(/\/start/, (msg) => {
  try {
    commands.handleStart(bot, msg);
  } catch (error) {
    console.error('Erro no comando /start:', error);
    bot.sendMessage(msg.chat.id, 'Ocorreu um erro ao processar o comando /start.');
  }
});
  
  // Manipular comando /help
  bot.onText(/\/help/, (msg) => {
  	try{
    commands.handleHelp(bot, msg);
  	} catch(error){
  		console.error('Erri no comando/help', error);
  		bot.sendMessage(msg.chat.id, 'Ocorreu um erro ao processar o comando /help')
  	}
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
  // Ignorar comandos e mensagens vazias
  if (msg.text && !msg.text.startsWith('/') && msg.text.trim() !== '') {
    const text = msg.text.trim();
    
    // Verificar se o texto é um DDD válido
    if (/^\d{2}$/.test(text)) {
      const ddd = text;
      if (validDDDs.includes(ddd)) {
        commands.handleDDDCheck(bot, msg, ddd);
      } else {
        bot.sendMessage(msg.chat.id, 'DDD inválido. Tente outro DDD.');
      }
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
