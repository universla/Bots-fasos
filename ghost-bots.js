
const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Crear 40 bots invisibles
const cantidadBots = 40;

const crearBotFantasma = (nombre) => {
  const bot = mineflayer.createBot({
    host: process.env.MINECRAFT_SERVER_HOST || 'externalagetcraft.falixsrv.me',
    port: parseInt(process.env.MINECRAFT_SERVER_PORT) || 26975,
    username: nombre,
    version: process.env.MINECRAFT_VERSION || false, // false = auto-detect
  });

  // No hacer nada en spawn ni chat
  bot.on('spawn', () => {
    console.log(`[Ghost] ${nombre} conectado como fantasma.`);
  });

  bot.on('error', (err) => {
    console.error(`[Ghost] Error con ${nombre}:`, err);
  });

  // Opcional: deshabilitar completamente la interacción
  bot._client.on('packet', (data, meta) => {
    if (meta.name === 'login') {
      // Cancelar el login para que no entre al mundo
      console.log(`[Ghost] ${nombre} no entró al mundo.`);
    }
  });
};

// Crear 40 bots con retraso
for (let i = 1; i <= cantidadBots; i++) {
  setTimeout(() => {
    crearBotFantasma(`Ghost${i}`);
  }, i * 2000);
}

// Servidor Express para mantener vivo el proceso en Render
app.get('/', (req, res) => {
  res.send('40 bots fantasmas conectados ✅');
});

app.listen(PORT, () => {
  console.log(`[Express] Servidor corriendo en puerto ${PORT}`);
});
