require('dotenv').config();

// Validação do BOT_TOKEN
if (!process.env.BOT_TOKEN) {
  console.error("BOT_TOKEN não encontrado. Verifique o arquivo .env.");
  process.exit(1);
}

const messages = require('./messages');
const dddDatabase = require('./dddDatabase');

module.exports = {
  token: process.env.BOT_TOKEN,
  options: {
    polling: true
  },
  messages,
  dddDatabase
};