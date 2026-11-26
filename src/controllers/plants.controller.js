const repository = require('../repositories/plants.repository');

function list(req, res) {
  res.json(repository.findAll());
}

function getById(req, res) {
  const plant = repository.findById(Number(req.params.id));
  if (!plant) {
    return res.status(404).json({ error: 'Planta no encontrada' });
  }
  res.json(plant);
}

function create(req, res) {
  const { name, species, water_every_days = 7 } = req.body;
  const plant = repository.create({ name, species, water_every_days });
  res.status(201).json(plant);
}

module.exports = { list, getById, create };