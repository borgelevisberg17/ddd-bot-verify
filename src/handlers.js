const commands = require('./commands');

/**
 * Envia uma mensagem de erro para o usuário e loga no console.
 * @param {Object} bot - Instância do bot
 * @param {Object} msg - Mensagem do Telegram
 * @param {string} command - Nome do comando que falhou
 * @param {Error} error - Objeto de erro
 */
function handleError(bot, msg, command, error) {
  console.error(`Erro no comando ${command}:`, error);
  const errorMessage = `Ocorreu um erro ao processar o comando ${command}. Por favor, tente novamente mais tarde.`;
  bot.sendMessage(msg.chat.id, errorMessage);
}

/**
 * Configura os manipuladores de eventos do bot
 * @param {Object} bot - Instância do bot
 */
function setupHandlers(bot) {
  // Manipular comando /start
  bot.onText(/\/start/, async (msg) => {
    try {
      await commands.handleStart(bot, msg);
    } catch (error) {
      handleError(bot, msg, "/start", error);
    }
  });

  // Manipular comando /help
  bot.onText(/\/help/, async (msg) => {
    try {
      await commands.handleHelp(bot, msg);
    } catch (error) {
      handleError(bot, msg, "/help", error);
    }
  });

  // Manipular comando /ddd
  bot.onText(/\/ddd\s*(\d{2})/, async (msg, match) => {
    try {
      const ddd = match[1];
      if (ddd) {
        await commands.handleDDDCheck(bot, msg, ddd);
      } else {
        bot.sendMessage(msg.chat.id, 'Por favor, forneça um DDD. Exemplo: /ddd 11');
      }
    } catch (error) {
      handleError(bot, msg, "/ddd", error);
    }
  });

  // Manipular mensagens de texto (DDD direto)
  bot.on('message', async (msg) => {
    try {
      if (!msg.text || msg.text.startsWith('/')) return; // Ignora comandos e mensagens vazias

      const text = msg.text.trim();
      if (/^\d{2}$/.test(text)) {
        await commands.handleDDDCheck(bot, msg, text);
      }
    } catch (error) {
      handleError(bot, msg, "mensagem", error);
    }
  });

  // Manipular erros de polling
  bot.on('polling_error', (error) => {
    console.error('Erro de polling:', error);
  });
}

module.exports = { setupHandlers };