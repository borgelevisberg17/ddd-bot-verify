const fs = require('fs');
const path = require('path');
const util = require('util');

// Convertendo fs.appendFileSync para uma versão assíncrona
const appendFileAsync = util.promisify(fs.appendFile);

// Diretório de dados
const dataDir = path.join(__dirname, '..', 'data');

// Garantir que o diretório de dados exista
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const logsPath = path.join(dataDir, 'logs.json');

/**
 * Registra uma mensagem no arquivo de logs de forma assíncrona.
 */
async function logMessage(msg, action) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    userId: msg.from.id,
    username: msg.from.username || 'N/A',
    firstName: msg.from.first_name || 'N/A',
    messageText: msg.text || '',
    action,
    chatId: msg.chat.id
  };

  try {
    // Adiciona a entrada no arquivo de logs de forma assíncrona
    await appendFileAsync(logsPath, JSON.stringify(logEntry) + ',\n');
  } catch (error) {
    console.error('Erro ao registrar log:', error);
  }
}

/**
 * Formata a resposta de informação do DDD
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
 */
function getRegionName(state) {
  const regions = {
    'Acre': 'Norte', 'Amapá': 'Norte', 'Amazonas': 'Norte', 'Pará': 'Norte',
    'Rondônia': 'Norte', 'Roraima': 'Norte', 'Tocantins': 'Norte',
    'Alagoas': 'Nordeste', 'Bahia': 'Nordeste', 'Ceará': 'Nordeste', 
    'Maranhão': 'Nordeste', 'Paraíba': 'Nordeste', 'Pernambuco': 'Nordeste',
    'Piauí': 'Nordeste', 'Rio Grande do Norte': 'Nordeste', 'Sergipe': 'Nordeste',
    'Distrito Federal': 'Centro-Oeste', 'Goiás': 'Centro-Oeste', 
    'Mato Grosso': 'Centro-Oeste', 'Mato Grosso do Sul': 'Centro-Oeste',
    'Espírito Santo': 'Sudeste', 'Minas Gerais': 'Sudeste', 
    'Rio de Janeiro': 'Sudeste', 'São Paulo': 'Sudeste',
    'Paraná': 'Sul', 'Rio Grande do Sul': 'Sul', 'Santa Catarina': 'Sul'
  };

  return regions[state] || 'desconhecida';
}

module.exports = { logMessage, formatDDDInfo, getRegionName };