const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// Garantir que o diretório de dados existe
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const logsPath = path.join(dataDir, 'logs.json');

// Inicializar logs se não existirem
if (!fs.existsSync(logsPath)) {
  fs.writeFileSync(logsPath, JSON.stringify([], null, 2));
}

/**
 * Registra uma mensagem no arquivo de logs
 * @param {Object} msg - Objeto da mensagem do Telegram
 * @param {string} action - Ação realizada
 */
function logMessage(msg, action) {
  try {
    const logs = JSON.parse(fs.readFileSync(logsPath));
    
    logs.push({
      timestamp: new Date().toISOString(),
      userId: msg.from.id,
      username: msg.from.username || 'N/A',
      firstName: msg.from.first_name || 'N/A',
      messageText: msg.text,
      action,
      chatId: msg.chat.id
    });
    
    // Manter apenas os últimos 1000 logs
    if (logs.length > 1000) {
      logs.shift();
    }
    
    fs.writeFileSync(logsPath, JSON.stringify(logs, null, 2));
  } catch (error) {
    console.error('Erro ao registrar log:', error);
  }
}

/**
 * Formata a resposta de informação do DDD
 * @param {string} ddd - O DDD consultado
 * @param {Object} info - Informações do DDD
 * @returns {string} - Mensagem formatada
 */
function formatDDDInfo(ddd, info) {
  return `
${info.emoji} *DDD ${ddd}*

📍 *Estado:* ${info.state}
🏙️ *Região:* ${info.region}

_Este DDD pertence à região ${getRegionName(info.state)}_
  `;
}

/**
 * Retorna o nome da região do Brasil baseado no estado
 * @param {string} state - Nome do estado
 * @returns {string} - Nome da região
 */
function getRegionName(state) {
  const regions = {
    'Acre': 'Norte',
    'Amapá': 'Norte',
    'Amazonas': 'Norte',
    'Pará': 'Norte',
    'Rondônia': 'Norte',
    'Roraima': 'Norte',
    'Tocantins': 'Norte',
    'Alagoas': 'Nordeste',
    'Bahia': 'Nordeste',
    'Ceará': 'Nordeste',
    'Maranhão': 'Nordeste',
    'Paraíba': 'Nordeste',
    'Pernambuco': 'Nordeste',
    'Piauí': 'Nordeste',
    'Rio Grande do Norte': 'Nordeste',
    'Sergipe': 'Nordeste',
    'Distrito Federal': 'Centro-Oeste',
    'Goiás': 'Centro-Oeste',
    'Mato Grosso': 'Centro-Oeste',
    'Mato Grosso do Sul': 'Centro-Oeste',
    'Espírito Santo': 'Sudeste',
    'Minas Gerais': 'Sudeste',
    'Rio de Janeiro': 'Sudeste',
    'São Paulo': 'Sudeste',
    'Paraná': 'Sul',
    'Rio Grande do Sul': 'Sul',
    'Santa Catarina': 'Sul'
  };
  
  return regions[state] || 'desconhecida';
}

module.exports = {
  logMessage,
  formatDDDInfo
};
