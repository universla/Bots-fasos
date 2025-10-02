
const express = require('express');
const { crearBot } = require('./bot-manager');

const app = express();
const PORT = process.env.PORT || 3000;

// Crear 40 bots con un retraso entre cada uno
const cantidadBots = 40;

for (let i = 1; i <= cantidadBots; i++) {
  setTimeout(() => {
    crearBot(`Bot${i}`);
  }, i * 4000); // 2 segundos entre cada bot
}

// Servidor Express para mantener vivo el proceso en Render
app.get('/', (req, res) => {
  res.send('40 bots conectados a Minecraft ✅');
});

app.listen(PORT, () => {
  console.log(`[Express] Servidor corriendo en puerto ${PORT}`);
});
