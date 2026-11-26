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

function update(id, { name, species, water_every_days }) {
  const { changes } = db
    .prepare('UPDATE plants SET name = ?, species = ?, water_every_days = ? WHERE id = ?')
    .run(name, species, water_every_days, id);
  return changes > 0 ? findById(id) : undefined;
}

function remove(id) {
  const { changes } = db.prepare('DELETE FROM plants WHERE id = ?').run(id);
  return changes > 0;
}

module.exports = { findAll, findById, create, update, remove };