![Bot Verificador de DDD](https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif)

# 🤖 Bot Verificador de DDD

> Um bot do Telegram que verifica a qual estado e região pertence um DDD brasileiro.

![GitHub last commit](https://img.shields.io/github/last-commit/borgelevisberg17/ddd-bot-verify?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/borgelevisberg17/ddd-bot-verify?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/borgelevisberg17/ddd-bot-verify?style=for-the-badge)

## 🚀 Funcionalidades

✅ Verificação de DDDs brasileiros em tempo real.  
✅ Informações sobre estado e região associada ao DDD.  
✅ Registro de interações para análise de uso.  
✅ Interface amigável e fácil de usar.  
✅ Código modular e otimizado.  

## 📜 Comandos Disponíveis

| Comando      | Descrição |
|-------------|------------|
| `/start`    | Inicia o bot e exibe uma mensagem de boas-vindas. |
| `/help`     | Exibe informações sobre como utilizar o bot. |
| `/ddd [número]` | Consulta um DDD específico e retorna a região correspondente. |
| (envio direto) | Você pode simplesmente enviar o número do DDD para verificar. |

## 🎯 Como Usar o Bot

1. Inicie uma conversa com o bot no Telegram.  
2. Digite `/start` para ativá-lo.  
3. Envie um número de DDD (apenas os dígitos) e receba as informações instantaneamente.  

---

## 🛠️ Instalação e Execução

Para rodar o bot localmente, siga estes passos:

### 📥 Clonar o Repositório
```sh
 git clone git@github.com:borgelevisberg17/ddd-bot-verify.git
 cd ddd-bot-verify
```

### 📦 Instalar Dependências
```sh
 npm install
```

### 🔑 Configurar o Token do Bot
Crie um arquivo `.env` e adicione seu token do Telegram:
```sh
 BOT_TOKEN=seu_token_aqui
```

### ▶️ Iniciar o Bot
```sh
 npm start
```

---

## 📂 Estrutura do Projeto

```plaintext
/bot-hacker
│── /src
│   │── commands.js        # Funções de comandos do bot
│   │── handlers.js        # Manipulação de eventos do bot
│   │── config.js          # Configurações gerais
│   │── utils.js           # Funções auxiliares
│   │── bot.js             # Arquivo principal
│── /data
│   │── logs.json          # Logs de interações
│── package.json          # Gerenciador de dependências
│── .env                  # Variáveis de ambiente
│── README.md             # Documentação do projeto
```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **node-telegram-bot-api**
- **dotenv**
- **Git & GitHub**

---

## 📢 Para Utilizar o Bot

1. Crie um bot no Telegram via [BotFather](https://t.me/BotFather).  
2. Obtenha o token do bot.  
3. Configure o `.env` com o token.  
4. Instale as dependências com `npm install`.  
5. Inicie o bot com `npm start`.  

O bot responderá automaticamente a mensagens diretas com números de DDD e aos comandos listados acima.  

---

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

Desenvolvido com 💙 por **Borge Levisberg**  
📷 Instagram: [@borge.levisberg](https://instagram.com/borge.levisberg)  
💼 LinkedIn: [Borge Levisberg](https://www.linkedin.com/in/borgelevisberg)  
🎥 Channel: [Codebergdev](https://youtube.com/@codeborge?si=SJTCDrDq767U06Ix)

🚀 **Contribuições são bem-vindas!** Sinta-se à vontade para abrir uma issue ou enviar um PR! 😉

