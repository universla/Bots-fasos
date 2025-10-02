
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.MINECRAFT_SERVER_HOST || 'localhost',
  port: parseInt(process.env.MINECRAFT_SERVER_PORT) || 25565,
  username: process.env.MINECRAFT_BOT_USERNAME || 'RenderBot',
});

bot.on('chat', (username, message) => {
  console.log(`[Chat] ${username}: ${message}`);
});

bot.on('spawn', () => {
  console.log(`[Info] ${bot.username} ha entrado al juego.`);
});

bot.on('error', (err) => {
  console.error('[Error]', err);
});
