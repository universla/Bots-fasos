const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'localhost', // Cambia por la IP de tu servidor
  port: 25565,
  username: 'Bot1', // Cambia el nombre del bot
});

bot.on('chat', (username, message) => {
  console.log(`${username}: ${message}`);
});
