const config = require('./config');
const utils = require('./utils');

/**
 * Manipula o comando /start
 * @param {Object} bot - Instância do bot
 * @param {Object} msg - Objeto da mensagem
 */
function handleStart(bot, msg) {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, config.messages.welcome);
  utils.logMessage(msg, 'start_command');
}

/**
 * Manipula o comando /help
 * @param {Object} bot - Instância do bot
 * @param {Object} msg - Objeto da mensagem
 */
function handleHelp(bot, msg) {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, config.messages.help, { 
    parse_mode: 'Markdown' 
  });
  utils.logMessage(msg, 'help_command');
}

/**
 * Verifica e retorna informações sobre um DDD
 * @param {Object} bot - Instância do bot
 * @param {Object} msg - Objeto da mensagem
 * @param {string} ddd - DDD a ser verificado
 */
function handleDDDCheck(bot, msg, ddd) {
  const chatId = msg.chat.id;
  
  // Validar formato do DDD
  if (!/^\d{2}$/.test(ddd)) {
    bot.sendMessage(chatId, config.messages.invalidFormat);
    utils.logMessage(msg, 'invalid_ddd_format');
    return;
  }
  
  // Buscar informações do DDD
  const dddInfo = config.dddDatabase[ddd];
  
  if (dddInfo) {
    const response = utils.formatDDDInfo(ddd, dddInfo);
    bot.sendMessage(chatId, response, { 
      parse_mode: 'Markdown' 
    });
    utils.logMessage(msg, 'ddd_found');
  } else {
    bot.sendMessage(chatId, config.messages.notFound);
    utils.logMessage(msg, 'ddd_not_found');
  }
}

module.exports = {
  handleStart,
  handleHelp,
  handleDDDCheck
};
