const express = require('express');
const plantsRoutes = require('./routes/plants.routes');

const app = express();

app.use(express.json());

// Ruta para comprobar si el servidor está funcionando
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/plants', plantsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'JSON inválido en el cuerpo de la petición' });
  }
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;