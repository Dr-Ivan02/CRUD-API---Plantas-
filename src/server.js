require('dotenv').config();
const { createSchema } = require('./db/schema');
const app = require('./app');

const PORT = process.env.PORT || 3000;

createSchema();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});