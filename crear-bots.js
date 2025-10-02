const mineflayer = require('mineflayer');

const crearBot = (nombre) => {
  const bot = mineflayer.createBot({
    host: 'localhost', // Cambia por la IP de tu servidor
    port: 25565,
    username: nombre,
  });

  bot.on('chat', (username, message) => {
    console.log(`[Bot ${nombre}] ${username}: ${message}`);
  });

  bot.on('spawn', () => {
    console.log(`[Bot ${nombre}] ha entrado al juego.`);
  });
};

// Crear 5 bots
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    crearBot(`Bot${i}`);
  }, i * 2000); // Espera 2 segundos entre cada bot
}
