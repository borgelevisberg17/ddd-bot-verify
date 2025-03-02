const config = require('./config');
const utils = require('./utils');

/**
 * Envia uma mensagem e registra o log.
 * @param {Object} bot - Instância do bot
 * @param {Object} msg - Objeto da mensagem
 * @param {string} text - Texto da mensagem
 * @param {string} action - Ação realizada para log
 * @param {Object} [options={}] - Opções opcionais para a mensagem
 */
async function sendMessageAndLog(bot, msg, text, action, options = {}) {
  const chatId = msg.chat.id;
  try {
    // Envia a mensagem de forma assíncrona
    await bot.sendMessage(chatId, text, options);
    // Log da ação
    utils.logMessage(msg, action);
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
  }
}

/**
 * Manipula o comando /start
 */
async function handleStart(bot, msg) {
  // Envia a mensagem de boas-vindas e registra o log
  await sendMessageAndLog(bot, msg, config.messages.welcome, 'start_command');
}

/**
 * Manipula o comando /help
 */
async function handleHelp(bot, msg) {
  // Envia a mensagem de ajuda e registra o log
  await sendMessageAndLog(bot, msg, config.messages.help, 'help_command', { parse_mode: 'Markdown' });
}

/**
 * Verifica e retorna informações sobre um DDD
 */
async function handleDDDCheck(bot, msg, ddd) {
  // Envia mensagem de "Pesquisando..." para simular o processo de busca
  const searchingMessage = await bot.sendMessage(msg.chat.id, '🔍 Pesquisando o DDD...');

  // Simula o tempo de pesquisa (aqui são 2 segundos)
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Apaga a mensagem "Pesquisando..." depois do tempo
  bot.deleteMessage(msg.chat.id, searchingMessage.message_id);

  // Verifica o formato do DDD
  if (!/^\d{2}$/.test(ddd)) {
    return sendMessageAndLog(bot, msg, config.messages.invalidFormat, 'invalid_ddd_format');
  }

  // Busca informações do DDD no banco de dados
  const dddInfo = config.dddDatabase[ddd];
  if (dddInfo) {
    // Formata a resposta para DDD encontrado
    const response = utils.formatDDDInfo(ddd, dddInfo);
    await sendMessageAndLog(bot, msg, response, 'ddd_found', { parse_mode: 'Markdown' });
  } else {
    // Resposta caso o DDD não seja encontrado
    await sendMessageAndLog(bot, msg, config.messages.notFound, 'ddd_not_found');
  }
}

module.exports = { handleStart, handleHelp, handleDDDCheck };