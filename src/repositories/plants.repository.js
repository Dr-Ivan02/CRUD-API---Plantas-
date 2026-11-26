const db = require('../db/database');

function findAll() {
  return db.prepare('SELECT * FROM plants ORDER BY id').all();
}

function findById(id) {
  return db.prepare('SELECT * FROM plants WHERE id = ?').get(id);
}

function create({ name, species, water_every_days }) {
  const { lastInsertRowid } = db
    .prepare('INSERT INTO plants (name, species, water_every_days) VALUES (?, ?, ?)')
    .run(name, species, water_every_days);
  return findById(lastInsertRowid);
}

module.exports = { findAll, findById, create };