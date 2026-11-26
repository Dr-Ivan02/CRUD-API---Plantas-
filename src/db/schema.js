const fs = require('fs');
const path = require('path');
const db = require('./database');

const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');

function createSchema() {
  db.exec(schemaSql);
}

module.exports = { createSchema };