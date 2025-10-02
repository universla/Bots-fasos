
const mineflayer = require('mineflayer');

const crearBot = (nombre) => {
  const bot = mineflayer.createBot({
    host: process.env.MINECRAFT_SERVER_HOST || 'externalagetcraft.falixsrv.me',
    port: parseInt(process.env.MINECRAFT_SERVER_PORT) || 26975,
    username: nombre,
  });

  bot.on('chat', (username, message) => {
    console.log(`[${nombre}] ${username}: ${message}`);
  });

  bot.on('spawn', () => {
    console.log(`[${nombre}] ha entrado al juego.`);
  });

  bot.on('error', (err) => {
    console.error(`[${nombre}] Error:`, err);
  });
};

module.exports = { crearBot };
