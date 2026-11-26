const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dbPath =
  process.env.DB_PATH || path.join(__dirname, '..', '..', 'data', 'plantas.db');

// SQLite crea el archivo, pero no la carpeta
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new DatabaseSync(dbPath);
// WAL permite leer mientras se escribe
db.exec('PRAGMA journal_mode = WAL');

module.exports = db;