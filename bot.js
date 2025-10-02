
const mineflayer = require('mineflayer');
const express = require('express');

// Crear bot
const bot = mineflayer.createBot({
  host: process.env.MINECRAFT_SERVER_HOST || 'localhost',
  port: parseInt(process.env.MINECRAFT_SERVER_PORT) || 26975,
  username: process.env.MINECRAFT_BOT_USERNAME || 'externalagetcraft.falixsrv.me',
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

// Servidor Express para mantener vivo el proceso en Render
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot de Minecraft está corriendo ✅');
});

app.listen(PORT, () => {
  console.log(`[Express] Servidor corriendo en puerto ${PORT}`);
});
