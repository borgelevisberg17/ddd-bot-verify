
```markdown
# Bot Verificador de DDD

Um bot do Telegram que verifica a qual estado e região pertence um DDD brasileiro.

## Funcionalidades

- Verificação de DDDs brasileiros
- Informações sobre estado e região
- Logs de interações
- Interface amigável

## Comandos

- `/start` - Inicia o bot
- `/help` - Mostra ajuda
- `/ddd [número]` - Verifica um DDD específico
- Você também pode simplesmente enviar o número do DDD diretamente

## Como usar

1. Inicie uma conversa com o bot no Telegram
2. Digite `/start` para começar
3. Envie um DDD (apenas os números) para receber informações

## Instalação e Execução

1. Clone este repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Crie um arquivo `.env` com seu token do bot:
   ```
   BOT_TOKEN=seu_token_aqui
   ```
4. Execute o bot:
   ```
   npm start
   ```

## Estrutura do Projeto

```
/bot-hacker
│── /src
│   │── commands.js        # Funções de comandos e respostas do bot
│   │── handlers.js        # Manipulação de eventos do bot
│   │── config.js          # Configurações do bot (token, opções, etc.)
│   │── utils.js           # Funções auxiliares (ex: formatar texto, logs)
│   │── bot.js             # Arquivo principal que inicia o bot
│── /data
│   │── logs.json          # Logs de mensagens recebidas
│── package.json          # Dependências do projeto
│── .env                  # Variáveis de ambiente (para guardar o token do bot)
│── README.md             # Documentação do projeto
```

## Tecnologias utilizadas

- Node.js
- node-telegram-bot-api
- dotenv
```
Mais detalhes para usar o bot, você precisa:
1. Criar um bot no Telegram através do @BotFather
2. Obter o token do bot
3. Adicionar o token no arquivo .env
4. Instalar as dependências com `npm install`
5. Iniciar o bot com `npm start`

O bot responderá a mensagens diretas com DDDs e aos comandos `/start`, `/help` e `/ddd`.

```

## Infos
Autor: Borge Levisberg
insta:@borge.Levisberg
LinkedIn:https://linkedIn.com/borgelevisberg
- dotenv
```